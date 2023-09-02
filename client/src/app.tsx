import { signal } from '@preact/signals'

// TODO: sprite sheet
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
import dirt01 from '/Dirt01.png'
import dirt02 from '/Dirt02.png'
import dirt03 from '/Dirt03.png'
import dirt04 from '/Dirt04.png'
import dirt05 from '/Dirt05.png'
import dirt06 from '/Dirt06.png'
import dirt07 from '/Dirt07.png'
import dirt08 from '/Dirt08.png'
import dirt09 from '/Dirt09.png'
import dirt10 from '/Dirt10.png'
import dirt11 from '/Dirt11.png'
import dirt12 from '/Dirt12.png'
import dirt13 from '/Dirt13.png'
import dirt14 from '/Dirt14.png'
import dirt15 from '/Dirt15.png'

import './app.css'

const tile00 = signal('Grass01')
const tile01 = signal('Grass02')
const tile02 = signal('Grass03')
const tile10 = signal('Grass04')
const tile11 = signal('Grass05')
const tile12 = signal('Grass06')
const tile20 = signal('Grass07')
const tile21 = signal('Grass08')
const tile22 = signal('Grass09')

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
    case 'Dirt00':
      return dirt00
    case 'Dirt01':
      return dirt01
    case 'Dirt02':
      return dirt02
    case 'Dirt03':
      return dirt03
    case 'Dirt04':
      return dirt04
    case 'Dirt05':
      return dirt05
    case 'Dirt06':
      return dirt06
    case 'Dirt07':
      return dirt07
    case 'Dirt08':
      return dirt08
    case 'Dirt09':
      return dirt09
    case 'Dirt10':
      return dirt10
    case 'Dirt11':
    return dirt11
    case 'Dirt12':
      return dirt12
    case 'Dirt13':
      return dirt13
    case 'Dirt14':
      return dirt14
    case 'Dirt15':
      return dirt15
    default:
      return grass01
  }
}

const setTileSrc = (tileSrc: string) => {
  if (tileSrc === 'Grass01') {
    if (isGrass(tile01.value) && isGrass(tile10.value)) {
      tile00.value = 'Dirt00'
    }

    if (isGrass(tile01.value) && isDirt(tile10.value)) {
      tile00.value = 'Dirt10'
    }
  }

  if (tileSrc === 'Grass02' && isGrass(tile00.value) && isGrass(tile02.value) && isGrass(tile11.value)) {
    tile01.value = 'Dirt00'
  }

  if (tileSrc === 'Grass02' && isDirt(tile00.value) && isDirt(tile02.value)) {
    tile00.value = 'Dirt14'
    tile01.value = 'Dirt13'
    tile02.value = 'Dirt15'
  }

  if (tileSrc === 'Grass03' && isGrass(tile01.value) && isGrass(tile12.value)) {
    tile02.value = 'Dirt00'
  }

  if (tileSrc === 'Grass04' && isGrass(tile00.value) && isGrass(tile11.value) && isGrass(tile20.value)) {
    tile10.value = 'Dirt00'
  }

  if (tileSrc === 'Grass05' && isGrass(tile01.value) && isGrass(tile10.value) && isGrass(tile12.value) && isGrass(tile21.value)) {
    tile11.value = 'Dirt00'
  }

  if (tileSrc === 'Grass06' && isGrass(tile02.value) && isGrass(tile22.value) && isGrass(tile11.value)) {
    tile12.value = 'Dirt00'
  }

  if (tileSrc === 'Grass07' && isGrass(tile21.value) && isGrass(tile10.value)) {
    tile20.value = 'Dirt00'
  }

  if (tileSrc === 'Grass08' && isGrass(tile11.value) && isGrass(tile22.value) && isGrass(tile20.value)) {
    tile21.value = 'Dirt00'
  }

  if (tileSrc === 'Grass09' && isGrass(tile21.value) && isGrass(tile12.value)) {
    tile22.value = 'Dirt00'
  }
}

const getCursorClass = (tileSrc: string): string => {
  if (isGrass(tileSrc)) {
    return 'grass'
  }

  return 'soil'
}

export function App() {
  return (
    <div class="container">
      <div class="center" style="text-align: center">
        <p>Balance: { bankAccount.value.balance }</p>
      </div>
      <div class="farm">
        <div class={"tile " + getCursorClass(tile00.value)} onClick={() => setTileSrc(tile00.value)}>
          <img src={getTileImg(tile00.value)} width="100" />
        </div>
        <div class={"tile " + getCursorClass(tile01.value)} onClick={() => setTileSrc(tile01.value)}>
          <img src={getTileImg(tile01.value)} width="100" />
        </div>
        <div class={"tile " + getCursorClass(tile02.value)} onClick={() => setTileSrc(tile02.value)}>
          <img src={getTileImg(tile02.value)} width="100" />
        </div>
        <div class={"tile " + getCursorClass(tile10.value)} onClick={() => setTileSrc(tile10.value)}>
          <img src={getTileImg(tile10.value)} width="100" />
        </div>
        <div class={"tile " + getCursorClass(tile11.value)} onClick={() => setTileSrc(tile11.value)}>
          <img src={getTileImg(tile11.value)} width="100" />
        </div>
        <div class={"tile " + getCursorClass(tile12.value)} onClick={() => setTileSrc(tile12.value)}>
          <img src={getTileImg(tile12.value)} width="100" />
        </div>
        <div class={"tile " + getCursorClass(tile20.value)} onClick={() => setTileSrc(tile20.value)}>
          <img src={getTileImg(tile20.value)} width="100" />
        </div>
        <div class={"tile " + getCursorClass(tile21.value)} onClick={() => setTileSrc(tile21.value)}>
          <img src={getTileImg(tile21.value)} width="100" />
        </div>
        <div class={"tile " + getCursorClass(tile22.value)} onClick={() => setTileSrc(tile22.value)}>
          <img src={getTileImg(tile22.value)} width="100" />
        </div>
      </div>
    </div>
  )
}
