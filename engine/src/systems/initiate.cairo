#[system]
mod initiate_system {
    use array::ArrayTrait;
    use traits::Into;
    use box::BoxTrait;
    use dojo::world::Context;

    use faeda::components::{BankAccount, CommodityType, Order};

    fn execute(ctx: Context) {
        // set!(
        //     ctx.world,
        //     (
        //         BankAccount {
        //             player: ctx.origin,
        //             balance: 0,
        //         },
        //     )
        // );

        set!(
            ctx.world,
            (
                Order {
                    entity_id: 1,
                    player: ctx.origin,
                    quantity: 9,
                    price: 240,
                    commodity_type: CommodityType::Corn(()),
                },
                Order {
                    entity_id: 2,
                    player: ctx.origin,
                    quantity: 4,
                    price: 390,
                    commodity_type: CommodityType::Corn(()),
                },
                Order {
                    entity_id: 3,
                    player: ctx.origin,
                    quantity: 1,
                    price: 465,
                    commodity_type: CommodityType::Corn(()),
                },
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
    use array::ArrayTrait;
    use box::BoxTrait;
    use core::traits::Into;
    use dojo::world::IWorldDispatcherTrait;
    use core::array::SpanTrait;
    use debug::PrintTrait;

    #[test]
    #[available_gas(3000000000000000)]
    fn test_initiate() {
        // components
        let mut components = array::ArrayTrait::new();
        components.append(bank_account::TEST_CLASS_HASH);

        //systems
        let mut systems = array::ArrayTrait::new();
        systems.append(initiate_system::TEST_CLASS_HASH);
        let world = spawn_test_world(components, systems);

        world.execute('initiate_system', array![]);

        //get bank account
        let player_bank_account = get!(world, (world.contract_address), (BankAccount));
        assert(player_bank_account.player == world.contract_address, 'incorrect player');
        assert(player_bank_account.balance.into() == 0x0, 'balance not initialized to zero');

        let order = get!(world, (1, world.contract_address), (Order));
        assert(order.commodity_type == CommodityType::Corn, 'should be corn');
    }
}
