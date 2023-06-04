import Header from '../../../src/components/header/header'
import CodingGif from '../../../public/assets/gif/codingGif.gif'
import NodeCrud from '../../../src/components/nodeCrud/nodeCrud'

import Image from 'next/image'
export default function nodeCrud() {
  return (
    <>
      <Header/>
      <div className='max-w-lg flex justify-center m-auto pt-14'>
        <Image className='w-full h-64 mt-5' src={CodingGif}/>
      </div>
      <div className='initialized'>
        <NodeCrud/>
      </div>
    </>
  )
}
