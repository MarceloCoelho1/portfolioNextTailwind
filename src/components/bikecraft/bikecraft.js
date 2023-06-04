'use client'
import { CaretRight } from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import Bikecraft1 from '../../assets/images/bikecraft1.png'
import Bikecraft2 from '../../assets/images/bikecraft2.png'


export default function dogs() {
    return(
        <main className='flex flex-col max-w-lg m-auto pt-6 text-white'>
            <div className="flex items-center gap-1 mb-4">
                <Link className=" text-pink-500" href="/portfolio">
                    portfolio
                </Link>
                <CaretRight size={14}/>
                <span className="text-xl">Bikecraft</span>
            </div>
            <p className='indent-4 text-justify break-words mb-4'>
                BikeCraft is an innovative e-commerce project built with HTML, CSS, and 
                JavaScript, dedicated to the world of bicycles. This platform aims to 
                provide a seamless online shopping experience for cycling enthusiasts. 
                By incorporating cutting-edge technologies, BikeCraft offers a user-friendly 
                interface where customers can explore, select, and purchase a wide range of 
                bicycles and accessories. With an emphasis on aesthetics, functionality, 
                and responsiveness.
            </p>
            <div className="flex gap-2 items-center ml-4 mb-1 flex-wrap">
                <p className="p-1 rounded-sm font-bold bg-green-900 text-green-200 text-xs uppercase">Github</p>
                <Link target="_blank" className="text-pink-500 break-all" href="https://github.com/MarceloCoelho1/bikcraft">https://github.com/MarceloCoelho1/bikcraft</Link>
            </div>
            <div className="flex gap-2 items-center ml-4 flex-wrap">
                <p className="p-1 rounded-sm font-bold bg-green-900 text-green-200 text-xs uppercase">stack</p>
                <p>Html, Css, Javascript</p>
            </div>
            <div className="mt-4 space-y-4 mb-4">
                <Image className="rounded-2xl" src={Bikecraft1}/>
                <Image className="rounded-2xl" src={Bikecraft2}/>
            </div>
        </main>
    )
}