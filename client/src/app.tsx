import { signal } from '@preact/signals'

// TODO: sprite sheet
import frame from '/Frame.png'
import grass01 from '/Grass01.png'
import grass02 from '/Grass02.png'
import grass03 from '/Grass03.png'
import grass04 from '/Grass04.png'
import grass05 from '/Grass05.png'
import grass06 from '/Grass06.png'
import grass07 from '/Grass07.png'
import grass08 from '/Grass08.png'
import grass09 from '/Grass09.png'
import dirt00 from '/Dirt00.png'
import seeds1 from '/Seeds01.png'
import seeds2 from '/Seeds02.png'
import seeds3 from '/Seeds03.png'
import seeds4 from '/Seeds04.png'
import watered00 from '/Watered00.png'

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

const bankAccount = signal({
  player: null,
  balance: 0,
})

const isGrass = (tileSrc: string) => ['Grass01', 'Grass02', 'Grass03', 'Grass04', 'Grass05', 'Grass06', 'Grass07', 'Grass08', 'Grass09'].some((grass) => grass == tileSrc)
const isDirt = (tileSrc: string) => ['Dirt00', 'Dirt01', 'Dirt02', 'Dirt03', 'Dirt04', 'Dirt05', 'Dirt06', 'Dirt07', 'Dirt08', 'Dirt09'].some((dirt) => dirt == tileSrc)

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
    case 'Seeds01':
      return seeds1
    case 'Seeds02':
      return seeds2
    case 'Seeds03':
      return seeds3
    case 'Seeds04':
      return seeds4
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
}

const getCursorClass = (tileSrc: string): string => {
  if (isGrass(tileSrc)) {
    return 'hoe'
  }

  if (isDirt(tileSrc)) {
    return 'corn'
  }

  return 'watercan'
}

export function App() {
  return (
    <div class="container">
      <div class="center" style="text-align: center">
        <p>Balance: { bankAccount.value.balance }</p>
      </div>
      <div class="farm">
        <img src={frame} class="frame" />
        <div class={"tile " + getCursorClass(tile01.value)} onClick={() => setTileSrc(tile01.value)}>
          <img src={getTileImg(tile01.value)} width="100" />
          {(tile01.value == 'Dirt01Planted' || tile01.value == 'Watered01Planted') && <img class="seeds" src={seeds1} width="100" />}
        </div>
        <div class={"tile " + getCursorClass(tile02.value)} onClick={() => setTileSrc(tile02.value)}>
          <img src={getTileImg(tile02.value)} width="100" />
          {(tile02.value == 'Dirt02Planted' || tile02.value == 'Watered02Planted') && <img class="seeds" src={seeds2} width="100" />}
        </div>
        <div class={"tile " + getCursorClass(tile03.value)} onClick={() => setTileSrc(tile03.value)}>
          <img src={getTileImg(tile03.value)} width="100" />
          {(tile03.value == 'Dirt03Planted' || tile03.value == 'Watered03Planted') && <img class="seeds" src={seeds3} width="100" />}
        </div>
        <div class={"tile " + getCursorClass(tile04.value)} onClick={() => setTileSrc(tile04.value)}>
          <img src={getTileImg(tile04.value)} width="100" />
          {(tile04.value == 'Dirt04Planted' || tile04.value == 'Watered04Planted') && <img class="seeds" src={seeds2} width="100" />}
        </div>
        <div class={"tile " + getCursorClass(tile05.value)} onClick={() => setTileSrc(tile05.value)}>
          <img src={getTileImg(tile05.value)} width="100" />
          {(tile05.value == 'Dirt05Planted' || tile05.value == 'Watered05Planted') && <img class="seeds" src={seeds4} width="100" />}
        </div>
        <div class={"tile " + getCursorClass(tile06.value)} onClick={() => setTileSrc(tile06.value)}>
          <img src={getTileImg(tile06.value)} width="100" />
          {(tile06.value == 'Dirt06Planted' || tile06.value == 'Watered06Planted') && <img class="seeds" src={seeds1} width="100" />}
        </div>
        <div class={"tile " + getCursorClass(tile07.value)} onClick={() => setTileSrc(tile07.value)}>
          <img src={getTileImg(tile07.value)} width="100" />
          {(tile07.value == 'Dirt07Planted' || tile07.value == 'Watered07Planted') && <img class="seeds" src={seeds3} width="100" />}
        </div>
        <div class={"tile " + getCursorClass(tile08.value)} onClick={() => setTileSrc(tile08.value)}>
          <img src={getTileImg(tile08.value)} width="100" />
          {(tile08.value == 'Dirt08Planted' || tile08.value == 'Watered08Planted') && <img class="seeds" src={seeds1} width="100" />}
        </div>
        <div class={"tile " + getCursorClass(tile09.value)} onClick={() => setTileSrc(tile09.value)}>
          <img src={getTileImg(tile09.value)} width="100" />
          {(tile09.value == 'Dirt09Planted' || tile09.value == 'Watered09Planted') && <img class="seeds" src={seeds4} width="100" />}
        </div>
      </div>
    </div>
  )
}
