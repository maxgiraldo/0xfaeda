use array::ArrayTrait;
use starknet::ContractAddress;
use debug::PrintTrait;

#[derive(Serde, Drop, Copy, PartialEq)]
enum TileType {
    Grass,
    Soil,
    SeededSoil,
    Water
}

#[derive(Component, Drop, SerdeLen, Serde)]
struct Tile {
    #[key]
    player: ContractAddress,
    #[key]
    x: u32,
    #[key]
    y: u32,
    ground: Option<TileType>,
}

#[derive(Component, Copy, Drop, Serde, SerdeLen)]
struct BankAccount {
    #[key]
    player: ContractAddress,
    balance: u32,
}

impl PieceOptionSerdeLen of dojo::SerdeLen<Option<TileType>> {
    #[inline(always)]
    fn len() -> usize {
        4
    }
}

impl PieceOptionPrintTrait of PrintTrait<Option<TileType>> {
    #[inline(always)]
    fn print(self: Option<TileType>) {
        match self {
            Option::Some(tile_type) => {
                tile_type.print();
            },
            Option::None(_) => {
                'None'.print();
            }
        }
    }
}

impl TileTypePrintTrait of PrintTrait<TileType> {
    #[inline(always)]
    fn print(self: TileType) {
        match self {
            TileType::Grass(_) => {
                'Grass'.print();
            },
            TileType::Soil(_) => {
                'Soil'.print();
            },
            TileType::SeededSoil(_) => {
                'Seeded Soil'.print();
            },
            TileType::Water(_) => {
                'Water'.print();
            },
        }
    }
}
