<img src="https://github.com/maxgiraldo/0xfaeda/assets/4913413/9fc7f73a-adad-4320-b15a-f4279685f814" width=250 />

# `0xfaeda`

/ˈfādə/

A fully on chain farming game.

## Getting Started

**Note: due to time constraints, the client is readonly to Starknet and does not initialize world, seed data, etc, so you have to do that manually via `sozo execute`.**

### Client

To start the client, run:

`cd client && yarn && yarn dev`

### Engine

1. `cd engine`
2. `katana --disable-fee`
3. (new terminal) `sozo build && sozo migrate --name test`
4. (new terminal) `torii`
5. `sozo auth writer BankAccount initiate`
6. `sozo auth writer BankAccount marketplace`
7. `sozo execute initiate_system`

#### Create more orders

Create demand in the market for crops (and soon to be other items). You set the price (e.g. 400) and the quantity (e.g. 5).

`sozo execute create_order --calldata 400,5`

#### Fill orders

As a farmer, you can fill orders for crops and get money in your bank account in return. In the future, you can use money to buy goods, lend to other players to gain interest, etc.

`sozo execute fill_order --calldata 1`

## Game Objectives (prototype)

#### Farm crops

<img width="600" alt="Screenshot 2023-09-03 at 12 45 59 PM" src="https://github.com/maxgiraldo/0xfaeda/assets/4913413/34280d73-de9c-4f1d-ae99-b62b01a9beaa">

Using your initial plot of land, farm crops and fill orders on the marketplace. Try to make as much money as possible.

1. Tap the grass to get started plowing the land.
2. Tap again to plant corn seeds (more crops coming soon).
3. Tap again to water the seeds.
4. Watch your plant grow.
5. Tap the grown plant to grab it.

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

## Credits

Artwork by Luis Perez, [@millybiscuit_art](https://www.instagram.com/millybiscuit_art/)
