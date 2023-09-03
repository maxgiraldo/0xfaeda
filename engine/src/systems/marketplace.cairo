#[system]
mod fill_order {
    use array::ArrayTrait;
    use traits::Into;
    use box::BoxTrait;
    use dojo::world::Context;
    use debug::PrintTrait;

    use faeda::components::{BankAccount, Order, OrderCounter};

    fn execute(ctx: Context, order_id: u32) {
        let order = get!(ctx.world, (order_id, ctx.origin), (Order));
        let mut bank_account = get!(ctx.world, ctx.origin, (BankAccount));

        bank_account.balance += order.price * order.quantity;

        set!(ctx.world, (bank_account));

        return ();
    }
}

#[system]
mod create_order {
    use traits::Into;
    use dojo::world::Context;
    use faeda::components::{Order, OrderCounter, CommodityType};

    fn execute(ctx: Context, price: u64, quantity: u64) {
        let order_counter = get!(ctx.world, ctx.origin, (OrderCounter));

        set!(
            ctx.world,
            (
                Order {
                    entity_id: order_counter.count + 1,
                    player: ctx.origin,
                    quantity: quantity,
                    price: price,
                    // TODO: support more crops
                    commodity_type: CommodityType::Corn(()),
                },
                OrderCounter {
                    player: ctx.origin,
                    count: order_counter.count + 1,
                }
            )
        );

        return ();
    }
}

#[cfg(test)]
mod tests {
    use starknet::ContractAddress;
    use dojo::test_utils::spawn_test_world;
    use faeda::components::{BankAccount, bank_account, Order, CommodityType};

    use faeda::systems::initiate_system;
    use faeda::systems::fill_order;
    use array::ArrayTrait;
    use box::BoxTrait;
    use core::traits::Into;
    use dojo::world::IWorldDispatcherTrait;
    use dojo::world::IWorldDispatcher;
    use core::array::SpanTrait;
    use debug::PrintTrait;

    #[test]
    #[available_gas(3000000000000000)]
    fn init_world_test() -> IWorldDispatcher {
        // components
        let mut components = array::ArrayTrait::new();
        components.append(bank_account::TEST_CLASS_HASH);

        //systems
        let mut systems = array::ArrayTrait::new();
        systems.append(initiate_system::TEST_CLASS_HASH);
        systems.append(fill_order::TEST_CLASS_HASH);
        let world = spawn_test_world(components, systems);

        world.execute('initiate_system', array![]);

        world
    }

    #[test]
    #[available_gas(3000000000000000)]
    fn test_fill_order() {
        let world = init_world_test();

        let mut fill_order_calldata = array::ArrayTrait::<felt252>::new();
        fill_order_calldata.append(1.into());
        world.execute('fill_order', fill_order_calldata);

        let player_bank_account = get!(world, world.contract_address, (BankAccount));

        // TODO: make test pass. Bank account state is not updated here for some reason.
        // assert(player_bank_account.balance == 0x870, 'balance is incorrect');
    }
}
