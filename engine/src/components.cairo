use array::ArrayTrait;
use starknet::ContractAddress;
use debug::PrintTrait;

#[derive(Component, Copy, Drop, Serde, SerdeLen)]
struct BankAccount {
    #[key]
    player: ContractAddress,
    balance: u64, // use u128 fixed point?
}

#[derive(Serde, Drop, Copy, PartialEq)]
enum CommodityType {
    Corn,
}

impl CommodityTypeSerdeLen of dojo::SerdeLen<CommodityType> {
    #[inline(always)]
    fn len() -> usize {
        1
    }
}

impl CommodityTypePrintTrait of PrintTrait<CommodityType> {
    #[inline(always)]
    fn print(self: CommodityType) {
        match self {
            CommodityType::Corn(_) => {
                'Corn'.print();
            },
        }
    }
}

#[derive(Component, Copy, Drop, Serde, SerdeLen)]
struct Order {
    #[key]
    entity_id: u32,
    #[key]
    player: ContractAddress,
    quantity: u64,
    price: u64,
    commodity_type: CommodityType,
}
