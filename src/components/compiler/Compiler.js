'use client'
import { CaretRight } from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import CompilerImage from '../../../public/assets/images/Compiler.png'



export default function compiler() {
    return(
        <main className='flex flex-col max-w-lg m-auto pt-6 text-white'>
            <div className="flex items-center gap-1 mb-4">
                <Link className=" text-pink-500" href="/portfolio">
                    portfolio
                </Link>
                <CaretRight size={14}/>
                <span className="text-xl">Compiler</span>
            </div>
            <p className='indent-4 text-justify break-words mb-4'>
                I created my first compiler written in TypeScript that compiles a language I designed, called SV (Simple Language), into Java. The primary goal of this project was to learn about compiler development and understand the various stages involved in the compilation process.
            </p>
            <div className="flex gap-2 items-center ml-4 mb-1 flex-wrap">
                <p className="p-1 rounded-sm font-bold bg-green-900 text-green-200 text-xs uppercase">Github</p>
                <Link target="_blank" className="text-pink-500 break-all" href="https://github.com/MarceloCoelho1/SV-compiler">https://github.com/MarceloCoelho1/SV-compiler</Link>
            </div>
            <div className="flex gap-2 items-center ml-4 flex-wrap">
                <p className="p-1 rounded-sm font-bold bg-green-900 text-green-200 text-xs uppercase">stack</p>
                <p>Typescript, Java</p>
            </div>
            <div className="mt-4 space-y-4 mb-4">
                <Image className="rounded-2xl" src={CompilerImage}/>
            </div>
        </main>
    )
}