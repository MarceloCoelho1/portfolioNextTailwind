import Header from '../../../src/components/header/header'
import CodingGif from '../../../src/assets/gif/codingGif.gif'
import NodeCrud from '../../../src/components/nodeCrud/nodeCrud'

import Image from 'next/image'
export default function nodeCrud() {
  return (
    <>
      <Header/>
      <div className='max-w-lg flex justify-center m-auto'>
        <Image className='w-full h-64 mt-5' src={CodingGif}/>
      </div>
      <div className='initialized'>
        <NodeCrud/>
      </div>
    </>
  )
}
