import { Signal, signal } from '@preact/signals'

import grass01 from '/Grass01.png'
import grass02 from '/Grass02.png'
import grass03 from '/Grass03.png'
import grass04 from '/Grass04.png'
import grass05 from '/Grass05.png'
import grass06 from '/Grass06.png'
import grass07 from '/Grass07.png'
import grass08 from '/Grass08.png'
import grass09 from '/Grass09.png'
import Soil00 from '/Soil00.png'
import './app.css'

const tileSrc1 = signal('Grass01')
const tileSrc2 = signal('Grass02')

export function App() {
  // TODO: make Soil look good depending on which one clicked
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
      case 'Soil00':
        return Soil00
      default:
        return grass01
    }
  }

  const setNextTileSrcValue = (tileSrc: Signal<string>) => {
    const isGrass = ['Grass01', 'Grass02', 'Grass03', 'Grass04', 'Grass05', 'Grass06', 'Grass07', 'Grass08', 'Grass09'].some((grass) => grass == tileSrc)
    if (isGrass) {
      tileSrc.value = 'Soil00';
    }
  }

  return (
    <>
      <div class="container">
        <div class={"tile"} onClick={() => setNextTileSrcValue(tileSrc1)}>
          <img src={getTileImg(tileSrc1.value)} width="100" />
        </div>
        <div class={"tile"} onClick={() => setNextTileSrcValue(tileSrc2)}>
          <img src={getTileImg(tileSrc2.value)} width="100" />
        </div>
      </div>
    </>
  )
}
