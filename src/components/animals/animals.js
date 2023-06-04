'use client'
import { CaretRight } from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import Animals1 from '../../../public/assets/images/animais1.png'
import Animals2 from '../../../public/assets/images/animais2.png'


export default function dogs() {
    return(
        <main className='flex flex-col max-w-lg m-auto pt-6 text-white'>
            <div className="flex items-center gap-1 mb-4">
                <Link className=" text-pink-500" href="/portfolio">
                    portfolio
                </Link>
                <CaretRight size={14}/>
                <span className="text-xl">Animals</span>
            </div>
            <p className='indent-4 text-justify break-words mb-4'>
                This is an exciting project developed using HTML, CSS, and JavaScript. 
                The main focus of this project was to study and explore the fundamentals 
                of web development while specifically delving into the fetching of data 
                from an external API. By incorporating a Bitcoin API, this project enables 
                users to make donations in Bitcoin, providing a hands-on experience in 
                working with APIs and enhancing programming skills.
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
                <Image className="rounded-2xl" src={Animals1}/>
                <Image className="rounded-2xl" src={Animals2}/>
            </div>
        </main>
    )
}