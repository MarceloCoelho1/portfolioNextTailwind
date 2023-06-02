import Header from '../../src/components/header/header'
import CodingGif from '../../src/assets/gif/codingGif.gif'
import Objectives from '../..//src/components/objectives/objectives'

import Image from 'next/image'
export default function objectives() {
  return (
    <>
      <Header/>
      <div className='max-w-lg flex justify-center m-auto'>
        <Image className='w-full h-64 mt-5' src={CodingGif}/>
      </div>
      <Objectives/>
      
    </>
  )
}
