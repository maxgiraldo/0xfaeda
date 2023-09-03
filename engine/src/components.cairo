use array::ArrayTrait;
use starknet::ContractAddress;
use debug::PrintTrait;

#[derive(Component, Copy, Drop, Serde, SerdeLen)]
struct BankAccount {
    #[key]
    player: ContractAddress,
    balance: u64,
}
