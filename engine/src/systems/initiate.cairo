#[system]
mod initiate_system {
    use array::ArrayTrait;
    use traits::Into;
    use dojo::world::Context;
    use starknet::ContractAddress;
    use faeda::components::{BankAccount, Tile, TileType};

    fn execute(ctx: Context, player: ContractAddress) {
        set!(
            ctx.world,
            (
                BankAccount {
                    player: player,
                    balance: 0,
                },
            )
        );

        // set!(
        //     ctx.world,
        //     (Square { game_id: game_id, x: 0, y: 0, piece: Option::Some(PieceType::WhiteRook) })
        // );
    }
}

#[cfg(test)]
mod tests {
    use starknet::ContractAddress;
    use dojo::test_utils::spawn_test_world;
    use faeda::components::{BankAccount, bank_account};

    use faeda::systems::initiate_system;
    use array::ArrayTrait;
    use core::traits::Into;
    use dojo::world::IWorldDispatcherTrait;
    use core::array::SpanTrait;
    use debug::PrintTrait;

    #[test]
    #[available_gas(3000000000000000)]
    fn test_initiate() {
        let player = starknet::contract_address_const::<0x01>();

        // components
        let mut components = array::ArrayTrait::new();
        components.append(bank_account::TEST_CLASS_HASH);

        //systems
        let mut systems = array::ArrayTrait::new();
        systems.append(initiate_system::TEST_CLASS_HASH);
        let world = spawn_test_world(components, systems);

        let mut calldata = array::ArrayTrait::<core::felt252>::new();
        calldata.append(player.into());
        world.execute('initiate_system'.into(), calldata);

        //get bank account
        let player_bank_account = get!(world, (player), (BankAccount));
        assert(player_bank_account.player == player, 'incorrect player');
        assert(player_bank_account.balance.into() == 0x0, 'balance not initialized to zero');
    }
}
