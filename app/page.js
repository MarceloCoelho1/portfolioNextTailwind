import Header from '../src/components/header/header'
import Marcelo from '../src/components/marcelo/marcelo'
import CodingGif from '../src/assets/gif/codingGif.gif'

import Image from 'next/image'
export default function Home() {
  return (
    <>
      <Header/>
      <div className='max-w-lg flex justify-center m-auto pt-14'>
        <Image className='w-full h-64 mt-5' src={CodingGif}/>
      </div>
      <div className='initialized'>
        <Marcelo/>
      </div>
    </>
  )
}
