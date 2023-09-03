<img src="https://github.com/maxgiraldo/0xfaeda/assets/4913413/9fc7f73a-adad-4320-b15a-f4279685f814" width=250 />

# `0xfaeda`

/ˈfādə/

A fully on chain farming game.

## Getting Started

Unfortunately, wasn't able to fully connect the client to engine, i.e. initialize world, seed data, etc, so you'd have to do that manually. I was only able to query Torii RPC server for some data.

### Client

To start the client, run:

`yarn && yarn dev`

### Engine

`sozo auth writer BankAccount initiate`

`sozo auth writer BankAccount marketplace`

`sozo execute initiate_system`

#### Create more orders

`sozo execute create_order --calldata 400,5`

#### Fill orders

`sozo execute fill_order --calldata 1`

## Game Objectives (prototype)

#### Farm crops

<img width="600" alt="Screenshot 2023-09-03 at 12 45 59 PM" src="https://github.com/maxgiraldo/0xfaeda/assets/4913413/34280d73-de9c-4f1d-ae99-b62b01a9beaa">

Using your initial plot of land, farm crops and fill orders on the marketplace. Try to make as much money as possible.

### Possible future features

- Player avatars that move around.
- Crafting using base crops and materials like corn and wood.
- Live marketplace.
- Sell different goods to other players with a live marketplace.
- Get loans from the bank.
- Lend money to other players and collect interest.
- Hire other players or NPCs as farm hands.
- Construct buildings.
- Throw events.
- Combat.
- Buy, harvest, and sell livestock.
