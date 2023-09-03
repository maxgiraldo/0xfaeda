#[system]
mod initiate_system {
    use array::ArrayTrait;
    use traits::Into;
    use box::BoxTrait;
    use dojo::world::Context;

    use faeda::components::{BankAccount};

    fn execute(ctx: Context) {
        set!(
            ctx.world,
            (
                BankAccount {
                    player: ctx.origin,
                    balance: 0,
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
    use faeda::components::{BankAccount, bank_account};

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
    }
}
