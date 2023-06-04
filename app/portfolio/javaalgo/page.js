import Header from '../../../src/components/header/header'
import CodingGif from '../../../src/assets/gif/codingGif.gif'
import Algorithms from '../../../src/components/algorithms/algorithms'

import Image from 'next/image'
export default function dogs() {
  return (
    <>
      <Header/>
      <div className='max-w-lg flex justify-center m-auto'>
        <Image className='w-full h-64 mt-5' src={CodingGif}/>
      </div>
      <div className='initialized'>
        <Algorithms/>
      </div>
    </>
  )
}
