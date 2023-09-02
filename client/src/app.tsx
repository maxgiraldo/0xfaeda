import { Signal, signal } from '@preact/signals'

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
import dirt13 from '/Dirt13.png'
import dirt14 from '/Dirt14.png'
import dirt15 from '/Dirt15.png'

import './app.css'

const grid = signal([
  ['Grass01', 'Grass02', 'Grass03'],
  ['Grass04', 'Grass05', 'Grass05'],
  ['Grass07', 'Grass08', 'Grass09'],
])

const isGrass = (tileSrc: string) => ['Grass01', 'Grass02', 'Grass03', 'Grass04', 'Grass05', 'Grass06', 'Grass07', 'Grass08', 'Grass09'].some((grass) => grass == tileSrc)
const isDirt = (tileSrc: string) => ['Dirt00', 'Dirt01', 'Dirt02', 'Dirt03', 'Dirt04', 'Dirt05', 'Dirt06', 'Dirt07', 'Dirt08', 'Dirt09'].some((dirt) => dirt == tileSrc)

const isSurroundedByGrass = (tileSrc: string): boolean => {
  if (tileSrc === 'Grass01' && isGrass(grid.value[0][1]) && isGrass(grid.value[1][0])) {
    return true
  }

  if (tileSrc === 'Grass02' && isGrass(grid.value[0][0]) && isGrass(grid.value[0][2])) {
    return true
  }

  if (tileSrc === 'Grass03' && isGrass(grid.value[0][1]) && isGrass(grid.value[1][2]) && isGrass(grid.value[2][0])) {
    return true
  }

  if (tileSrc === 'Grass04' && isGrass(grid.value[0][0]) && isGrass(grid.value[1][1])) {
    return true
  }

  return false
}

const isSurroundedByDirt = (tileSrc: string): boolean => {
  if (tileSrc === 'Grass01' && isDirt(grid.value[0][1]) && isDirt(grid.value[1][0])) {
    return true
  }

  if (tileSrc === 'Grass02' && isDirt(grid.value[0][0]) && isDirt(grid.value[0][2])) {
    return true
  }

  if (tileSrc === 'Grass03' && isDirt(grid.value[0][1]) && isDirt(grid.value[1][2])) {
    return true
  }

  return false
}

const setGrid = (i: number, j: number, value: string) => {
  grid.value = grid.value.map((arr, _i) => arr.map((item, _j) => {
    if (j == _j && i == _i) {
      return value
    }
    return item
  }))
}

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

export function App() {
  const getCursorClass = (tileSrc: string): string => {
    if (isGrass(tileSrc)) {
      return 'grass'
    }

    return 'soil'
  }

  const setTileSrc = (tileSrc: string) => {
    if (tileSrc === 'Grass01' && isSurroundedByGrass(tileSrc)) {
      setGrid(0, 0, 'Dirt00')
    }

    if (tileSrc === 'Grass02' && isSurroundedByGrass(tileSrc)) {
      setGrid(0, 1, 'Dirt00')
    }

    if (tileSrc === 'Grass02' && isSurroundedByDirt(tileSrc)) {
      setGrid(0, 0, 'Dirt14')
      setGrid(0, 1, 'Dirt13')
      setGrid(0, 2, 'Dirt15')
    }

    if (tileSrc === 'Grass03' && isSurroundedByGrass(tileSrc)) {
      setGrid(0, 2, 'Dirt00')
    }

    if (tileSrc === 'Grass04' && isSurroundedByGrass(tileSrc)) {
      setGrid(1, 0, 'Dirt00')
    }
  }

  return (
    <>
      <div class="container">
        <div class={"tile " + getCursorClass(grid.value[0][0])} onClick={() => setTileSrc(grid.value[0][0])}>
          <img src={getTileImg(grid.value[0][0])} width="100" />
        </div>
        <div class={"tile " + getCursorClass(grid.value[0][1])} onClick={() => setTileSrc(grid.value[0][1])}>
          <img src={getTileImg(grid.value[0][1])} width="100" />
        </div>
        <div class={"tile " + getCursorClass(grid.value[0][2])} onClick={() => setTileSrc(grid.value[0][2])}>
          <img src={getTileImg(grid.value[0][2])} width="100" />
        </div>
        <div class={"tile " + getCursorClass(grid.value[1][0])} onClick={() => setTileSrc(grid.value[1][0])}>
          <img src={getTileImg(grid.value[1][0])} width="100" />
        </div>
        <div class={"tile " + getCursorClass(grid.value[1][1])} onClick={() => setTileSrc(grid.value[1][1])}>
          <img src={getTileImg(grid.value[1][1])} width="100" />
        </div>
        <div class={"tile " + getCursorClass(grid.value[1][2])} onClick={() => setTileSrc(grid.value[1][2])}>
          <img src={getTileImg(grid.value[1][2])} width="100" />
        </div>
        <div class={"tile " + getCursorClass(grid.value[2][0])} onClick={() => setTileSrc(grid.value[2][0])}>
          <img src={getTileImg(grid.value[2][0])} width="100" />
        </div>
        <div class={"tile " + getCursorClass(grid.value[2][1])} onClick={() => setTileSrc(grid.value[2][1])}>
          <img src={getTileImg(grid.value[2][1])} width="100" />
        </div>
        <div class={"tile " + getCursorClass(grid.value[2][2])} onClick={() => setTileSrc(grid.value[2][2])}>
          <img src={getTileImg(grid.value[2][2])} width="100" />
        </div>
      </div>
    </>
  )
}
