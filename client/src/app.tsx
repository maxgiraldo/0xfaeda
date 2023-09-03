import { signal, Signal } from '@preact/signals'
import { useBankAccount } from './hooks/useBankAccount'

// TODO: sprite sheet
import frame from './assets/Frame.png'
import grass01 from './assets/Grass01.png'
import grass02 from './assets/Grass02.png'
import grass03 from './assets/Grass03.png'
import grass04 from './assets/Grass04.png'
import grass05 from './assets/Grass05.png'
import grass06 from './assets/Grass06.png'
import grass07 from './assets/Grass07.png'
import grass08 from './assets/Grass08.png'
import grass09 from './assets/Grass09.png'
import dirt00 from './assets/Dirt00.png'
import seeds1 from './assets/Seeds01.png'
import seeds2 from './assets/Seeds02.png'
import seeds3 from './assets/Seeds03.png'
import seeds4 from './assets/Seeds04.png'
import watered00 from './assets/Watered00.png'
import corn0 from './assets/Corn0.png'
import corn25 from './assets/Corn25.png'
import corn50 from './assets/Corn50.png'
import corn75 from './assets/Corn75.png'
import corn100 from './assets/Corn100.png'

import './app.css'

const tile01 = signal('Grass01')
const tile02 = signal('Grass02')
const tile03 = signal('Grass03')
const tile04 = signal('Grass04')
const tile05 = signal('Grass05')
const tile06 = signal('Grass06')
const tile07 = signal('Grass07')
const tile08 = signal('Grass08')
const tile09 = signal('Grass09')

const plant01 = signal(0);
const plant02 = signal(0);
const plant03 = signal(0);
const plant04 = signal(0);
const plant05 = signal(0);
const plant06 = signal(0);
const plant07 = signal(0);
const plant08 = signal(0);
const plant09 = signal(0);

const playerBankAccount = signal({
  entity_id: '',
  player: '',
  balance: 0,
})

const isGrass = (tileSrc: string) => ['Grass01', 'Grass02', 'Grass03', 'Grass04', 'Grass05', 'Grass06', 'Grass07', 'Grass08', 'Grass09'].some((grass) => grass == tileSrc)
const isDirt = (tileSrc: string) => ['Dirt01', 'Dirt02', 'Dirt03', 'Dirt04', 'Dirt05', 'Dirt06', 'Dirt07', 'Dirt08', 'Dirt09'].some((dirt) => dirt == tileSrc)
const isPlanted = (tileSrc: string) => ['Dirt01Planted', 'Dirt02Planted', 'Dirt03Planted', 'Dirt04Planted', 'Dirt05Planted', 'Dirt06Planted', 'Dirt07Planted', 'Dirt08Planted', 'Dirt09Planted'].some((dirt) => dirt == tileSrc)
const isGrowing = (tileSrc: string) => ['Dirt01Plant', 'Dirt02Plant', 'Dirt03Plant', 'Dirt04Plant', 'Dirt05Plant', 'Dirt06Plant', 'Dirt07Plant', 'Dirt08Plant', 'Dirt09Plant'].some((dirt) => dirt == tileSrc)
const isBloomed = (tileSrc: string) => ['Bloomed01Plant', 'Bloomed02Plant', 'Bloomed03Plant', 'Bloomed04Plant', 'Bloomed05Plant', 'Bloomed06Plant', 'Bloomed07Plant', 'Bloomed08Plant', 'Bloomed09Plant'].some((dirt) => dirt == tileSrc)

const getTileImg = (tileSrc: string) => {
  switch (tileSrc) {
    case 'Grass01':
      return grass01
    case 'Grass02':
      return grass02
    case 'Grass03':
      return grass03
    case 'Grass04':
      return grass04
    case 'Grass05':
      return grass05
    case 'Grass06':
      return grass06
    case 'Grass07':
      return grass07
    case 'Grass08':
      return grass08
    case 'Grass09':
      return grass09
    case 'Dirt01':
      return dirt00
    case 'Dirt02':
      return dirt00
    case 'Dirt03':
      return dirt00
    case 'Dirt04':
      return dirt00
    case 'Dirt05':
      return dirt00
    case 'Dirt06':
      return dirt00
    case 'Dirt07':
      return dirt00
    case 'Dirt08':
      return dirt00
    case 'Dirt09':
      return dirt00
    case 'Dirt01Planted':
      return dirt00
    case 'Dirt02Planted':
      return dirt00
    case 'Dirt03Planted':
      return dirt00
    case 'Dirt04Planted':
      return dirt00
    case 'Dirt05Planted':
      return dirt00
    case 'Dirt06Planted':
      return dirt00
    case 'Dirt07Planted':
      return dirt00
    case 'Dirt08Planted':
      return dirt00
    case 'Dirt09Planted':
      return dirt00
    case 'Watered01Planted':
      return watered00
    case 'Watered02Planted':
      return watered00
    case 'Watered03Planted':
      return watered00
    case 'Watered04Planted':
      return watered00
    case 'Watered05Planted':
      return watered00
    case 'Watered06Planted':
      return watered00
    case 'Watered07Planted':
      return watered00
    case 'Watered08Planted':
      return watered00
    case 'Watered09Planted':
      return watered00
    case 'Dirt01Plant':
      return dirt00
    case 'Dirt02Plant':
      return dirt00
    case 'Dirt03Plant':
      return dirt00
    case 'Dirt04Plant':
      return dirt00
    case 'Dirt05Plant':
      return dirt00
    case 'Dirt06Plant':
      return dirt00
    case 'Dirt07Plant':
      return dirt00
    case 'Dirt08Plant':
      return dirt00
    case 'Dirt09Plant':
      return dirt00
    case 'Watered01Plant':
      return watered00
    case 'Watered02Plant':
      return watered00
    case 'Watered03Plant':
      return watered00
    case 'Watered04Plant':
      return watered00
    case 'Watered05Plant':
      return watered00
    case 'Watered06Plant':
      return watered00
    case 'Watered07Plant':
      return watered00
    case 'Watered08Plant':
      return watered00
    case 'Watered09Plant':
      return watered00
    case 'Bloomed01Plant':
      return dirt00
    case 'Bloomed02Plant':
      return dirt00
    case 'Bloomed03Plant':
      return dirt00
    case 'Bloomed04Plant':
      return dirt00
    case 'Bloomed05Plant':
      return dirt00
    case 'Bloomed06Plant':
      return dirt00
    case 'Bloomed07Plant':
      return dirt00
    case 'Bloomed08Plant':
      return dirt00
    case 'Bloomed09Plant':
      return dirt00
    default:
      return grass01
  }
}

const setTileSrc = (tileSrc: string) => {
  if (tileSrc === 'Grass01') {
    tile01.value = 'Dirt01'
  }
  if (tileSrc === 'Grass02') {
    tile02.value = 'Dirt02'
  }
  if (tileSrc === 'Grass03') {
    tile03.value = 'Dirt03'
  }
  if (tileSrc === 'Grass04') {
    tile04.value = 'Dirt04'
  }
  if (tileSrc === 'Grass05') {
    tile05.value = 'Dirt05'
  }
  if (tileSrc === 'Grass06') {
    tile06.value = 'Dirt06'
  }
  if (tileSrc === 'Grass07') {
    tile07.value = 'Dirt07'
  }
  if (tileSrc === 'Grass08') {
    tile08.value = 'Dirt08'
  }
  if (tileSrc === 'Grass09') {
    tile09.value = 'Dirt09'
  }

  if (tileSrc === 'Dirt01') {
    tile01.value = 'Dirt01Planted'
  }
  if (tileSrc === 'Dirt02') {
    tile02.value = 'Dirt02Planted'
  }
  if (tileSrc === 'Dirt03') {
    tile03.value = 'Dirt03Planted'
  }
  if (tileSrc === 'Dirt04') {
    tile04.value = 'Dirt04Planted'
  }
  if (tileSrc === 'Dirt05') {
    tile05.value = 'Dirt05Planted'
  }
  if (tileSrc === 'Dirt06') {
    tile06.value = 'Dirt06Planted'
  }
  if (tileSrc === 'Dirt07') {
    tile07.value = 'Dirt07Planted'
  }
  if (tileSrc === 'Dirt08') {
    tile08.value = 'Dirt08Planted'
  }
  if (tileSrc === 'Dirt09') {
    tile09.value = 'Dirt09Planted'
  }

  if (tileSrc === 'Dirt01Planted') {
    tile01.value = 'Watered01Planted'
  }
  if (tileSrc === 'Dirt02Planted') {
    tile02.value = 'Watered02Planted'
  }
  if (tileSrc === 'Dirt03Planted') {
    tile03.value = 'Watered03Planted'
  }
  if (tileSrc === 'Dirt04Planted') {
    tile04.value = 'Watered04Planted'
  }
  if (tileSrc === 'Dirt05Planted') {
    tile05.value = 'Watered05Planted'
  }
  if (tileSrc === 'Dirt06Planted') {
    tile06.value = 'Watered06Planted'
  }
  if (tileSrc === 'Dirt07Planted') {
    tile07.value = 'Watered07Planted'
  }
  if (tileSrc === 'Dirt08Planted') {
    tile08.value = 'Watered08Planted'
  }
  if (tileSrc === 'Dirt09Planted') {
    tile09.value = 'Watered09Planted'
  }

  if (tileSrc === 'Watered01Planted') {
    tile01.value = 'Dirt01Plant'
  }
  if (tileSrc === 'Watered02Planted') {
    tile02.value = 'Dirt02Plant'
  }
  if (tileSrc === 'Watered03Planted') {
    tile03.value = 'Dirt03Plant'
  }
  if (tileSrc === 'Watered04Planted') {
    tile04.value = 'Dirt04Plant'
  }
  if (tileSrc === 'Watered05Planted') {
    tile05.value = 'Dirt05Plant'
  }
  if (tileSrc === 'Watered06Planted') {
    tile06.value = 'Dirt06Plant'
  }
  if (tileSrc === 'Watered07Planted') {
    tile07.value = 'Dirt07Plant'
  }
  if (tileSrc === 'Watered08Planted') {
    tile08.value = 'Dirt08Plant'
  }
  if (tileSrc === 'Watered09Planted') {
    tile09.value = 'Dirt09Plant'
  }

  if (tileSrc === 'Dirt01Plant') {
    tile01.value = 'Watered01Plant'
  }
  if (tileSrc === 'Dirt02Plant') {
    tile02.value = 'Watered02Plant'
  }
  if (tileSrc === 'Dirt03Plant') {
    tile03.value = 'Watered03Plant'
  }
  if (tileSrc === 'Dirt04Plant') {
    tile04.value = 'Watered04Plant'
  }
  if (tileSrc === 'Dirt05Plant') {
    tile05.value = 'Watered05Plant'
  }
  if (tileSrc === 'Dirt06Plant') {
    tile06.value = 'Watered06Plant'
  }
  if (tileSrc === 'Dirt07Plant') {
    tile07.value = 'Watered07Plant'
  }
  if (tileSrc === 'Dirt08Plant') {
    tile08.value = 'Watered08Plant'
  }
  if (tileSrc === 'Dirt09Plant') {
    tile09.value = 'Watered09Plant'
  }

  if (tileSrc === 'Bloomed01Plant') {
    tile01.value = 'Grass01'
    plant01.value = 0
  }
  if (tileSrc === 'Bloomed02Plant') {
    tile02.value = 'Grass02'
    plant02.value = 0
  }
  if (tileSrc === 'Bloomed03Plant') {
    tile03.value = 'Grass03'
    plant03.value = 0
  }
  if (tileSrc === 'Bloomed04Plant') {
    tile04.value = 'Grass04'
    plant04.value = 0
  }
  if (tileSrc === 'Bloomed05Plant') {
    tile05.value = 'Grass05'
    plant05.value = 0
  }
  if (tileSrc === 'Bloomed06Plant') {
    tile06.value = 'Grass06'
    plant06.value = 0
  }
  if (tileSrc === 'Bloomed07Plant') {
    tile07.value = 'Grass07'
    plant07.value = 0
  }
  if (tileSrc === 'Bloomed08Plant') {
    tile08.value = 'Grass08'
    plant08.value = 0
  }
  if (tileSrc === 'Bloomed09Plant') {
    tile09.value = 'Grass09'
    plant09.value = 0
  }
}

const getCursorClass = (tileSrc: string): string => {
  if (isGrass(tileSrc)) {
    return 'hoe'
  }

  if (isDirt(tileSrc)) {
    return 'corn'
  }

  if (isPlanted(tileSrc) || isGrowing(tileSrc)) {
    return 'watercan'
  }

  if (isBloomed(tileSrc)) {
    return 'pick'
  }

  return 'progress'
}

function delay(duration: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

const growPlant = (plant: Signal<number>, tileSrc: string) => {
  Promise.resolve()
    .then(() => delay(1000))
    .then(() => {
      if (plant.value < 100) plant.value = plant.value + 25
    })

  if (plant.value == 25) return corn25

  if (plant.value == 0) return corn0
  if (plant.value == 25) return corn25
  if (plant.value == 50) return corn50
  if (plant.value == 75) return corn75
  if (plant.value == 100) {
    if (tileSrc === "Watered01Plant" || tileSrc === "Dirt01Plant" || tileSrc === "Watered01Planted") tile01.value = 'Bloomed01Plant'
    if (tileSrc === "Watered02Plant" || tileSrc === "Dirt02Plant" || tileSrc === "Watered02Planted") tile02.value = 'Bloomed02Plant'
    if (tileSrc === "Watered03Plant" || tileSrc === "Dirt03Plant" || tileSrc === "Watered03Planted") tile03.value = 'Bloomed03Plant'
    if (tileSrc === "Watered04Plant" || tileSrc === "Dirt04Plant" || tileSrc === "Watered04Planted") tile04.value = 'Bloomed04Plant'
    if (tileSrc === "Watered05Plant" || tileSrc === "Dirt05Plant" || tileSrc === "Watered05Planted") tile05.value = 'Bloomed05Plant'
    if (tileSrc === "Watered06Plant" || tileSrc === "Dirt06Plant" || tileSrc === "Watered06Planted") tile06.value = 'Bloomed06Plant'
    if (tileSrc === "Watered07Plant" || tileSrc === "Dirt07Plant" || tileSrc === "Watered07Planted") tile07.value = 'Bloomed07Plant'
    if (tileSrc === "Watered08Plant" || tileSrc === "Dirt08Plant" || tileSrc === "Watered08Planted") tile08.value = 'Bloomed08Plant'
    if (tileSrc === "Watered09Plant" || tileSrc === "Dirt09Plant" || tileSrc === "Watered09Planted") tile09.value = 'Bloomed09Plant'

    return corn100
  }

  return corn100
}

export function App() {
  const [bankAccount, loading] = useBankAccount(playerBankAccount);
  if (!loading) {
    playerBankAccount.value = {
      entity_id: bankAccount.entity_id,
      player: bankAccount.player,
      balance: bankAccount.balance
    }
  }

  return (
    <div class="container">
      <div class="farm">
        <img src={'.' + frame} class="frame" />
        <div class={"tile " + getCursorClass(tile01.value)} onClick={() => setTileSrc(tile01.value)}>
          <img src={'./' + getTileImg(tile01.value)} width="100" />
          {(tile01.value == 'Dirt01Planted') && <img class="overlay" src={'./' + seeds1} width="100" />}
          {(tile01.value === 'Bloomed01Plant' || tile01.value == 'Watered01Planted' || tile01.value == 'Dirt01Plant' || tile01.value == 'Watered01Plant') && <img class="overlay plant-offset" src={'./' + growPlant(plant01, tile01.value)} width="100" />}
        </div>
        <div class={"tile " + getCursorClass(tile02.value)} onClick={() => setTileSrc(tile02.value)}>
          <img src={'./' + getTileImg(tile02.value)} width="100" />
          {(tile02.value === 'Dirt02Planted') && <img class="overlay" src={'./' + seeds2} width="100" />}
          {(tile02.value === 'Bloomed02Plant' || tile02.value == 'Watered02Planted' || tile02.value == 'Dirt02Plant' || tile02.value == 'Watered02Plant') && <img class="overlay plant-offset" src={'./' + growPlant(plant02, tile02.value)} width="100" />}
        </div>
        <div class={"tile " + getCursorClass(tile03.value)} onClick={() => setTileSrc(tile03.value)}>
          <img src={'./' + getTileImg(tile03.value)} width="100" />
          {(tile03.value == 'Dirt03Planted') && <img class="overlay" src={'./' + seeds3} width="100" />}
          {(tile03.value === 'Bloomed03Plant' || tile03.value === 'Watered03Planted' || tile03.value == 'Dirt03Plant' || tile03.value == 'Watered03Plant') && <img class="overlay plant-offset" src={'./' + growPlant(plant03, tile03.value)} width="100" />}
        </div>
        <div class={"tile " + getCursorClass(tile04.value)} onClick={() => setTileSrc(tile04.value)}>
          <img src={'./' + getTileImg(tile04.value)} width="100" />
          {(tile04.value == 'Dirt04Planted') && <img class="overlay" src={'./' + seeds2} width="100" />}
          {(tile04.value === 'Bloomed04Plant' || tile04.value == 'Watered04Planted' || tile04.value == 'Dirt04Plant' || tile04.value == 'Watered04Plant') && <img class="overlay plant-offset" src={'./' + growPlant(plant04, tile04.value)} width="100" />}
        </div>
        <div class={"tile " + getCursorClass(tile05.value)} onClick={() => setTileSrc(tile05.value)}>
          <img src={'./' + getTileImg(tile05.value)} width="100" />
          {(tile05.value == 'Dirt05Planted') && <img class="overlay" src={'./' + seeds4} width="100" />}
          {(tile05.value === 'Bloomed05Plant' || tile05.value == 'Watered05Planted' || tile05.value == 'Dirt05Plant' || tile05.value == 'Watered05Plant') && <img class="overlay plant-offset" src={'./' + growPlant(plant05, tile05.value)} width="100" />}
        </div>
        <div class={"tile " + getCursorClass(tile06.value)} onClick={() => setTileSrc(tile06.value)}>
          <img src={'./' + getTileImg(tile06.value)} width="100" />
          {(tile06.value == 'Dirt06Planted') && <img class="overlay" src={'./' + seeds1} width="100" />}
          {(tile06.value === 'Bloomed06Plant' || tile06.value == 'Watered06Planted' || tile06.value == 'Dirt06Plant' || tile06.value == 'Watered06Plant') && <img class="overlay plant-offset" src={'./' + growPlant(plant06, tile06.value)} width="100" />}
        </div>
        <div class={"tile " + getCursorClass(tile07.value)} onClick={() => setTileSrc(tile07.value)}>
          <img src={'./' + getTileImg(tile07.value)} width="100" />
          {(tile07.value == 'Dirt07Planted') && <img class="overlay" src={'./' + seeds3} width="100" />}
          {(tile07.value === 'Bloomed07Plant' || tile07.value == 'Watered07Planted' || tile07.value == 'Dirt07Plant' || tile07.value == 'Watered07Plant') && <img class="overlay plant-offset" src={'./' + growPlant(plant07, tile07.value)} width="100" />}
        </div>
        <div class={"tile " + getCursorClass(tile08.value)} onClick={() => setTileSrc(tile08.value)}>
          <img src={'./' + getTileImg(tile08.value)} width="100" />
          {(tile08.value == 'Dirt08Planted') && <img class="overlay" src={'./' + seeds1} width="100" />}
          {(tile08.value === 'Bloomed08Plant' || tile08.value == 'Watered08Planted' || tile08.value == 'Dirt08Plant' || tile08.value == 'Watered08Plant') && <img class="overlay plant-offset" src={'./' + growPlant(plant08, tile08.value)} width="100" />}
        </div>
        <div class={"tile " + getCursorClass(tile09.value)} onClick={() => setTileSrc(tile09.value)}>
          <img src={'./' + getTileImg(tile09.value)} width="100" />
          {(tile09.value == 'Dirt09Planted') && <img class="overlay" src={'./' + seeds4} width="100" />}
          {(tile09.value === 'Bloomed09Plant' || tile09.value == 'Watered09Planted' || tile09.value == 'Dirt09Plant' || tile09.value == 'Watered09Plant') && <img class="overlay plant-offset" src={'./' + growPlant(plant09, tile09.value)} width="100" />}
        </div>
        <div class="game-info">
          <p>
            Land owner: <strong>{playerBankAccount.value.player ? playerBankAccount.value.player.slice(0, 9) : '?'}</strong>,
            Bank Account Balance: <strong>${ playerBankAccount.value.balance / 100.0 }</strong>
          </p>
        </div>
      </div>
    </div>
  )
}
