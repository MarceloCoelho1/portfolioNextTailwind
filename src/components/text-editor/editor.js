'use client'
import { CaretRight } from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import TextEditorImage from '../../../public/assets/images/text-editor.png'

export default function Editor() {
    return(
        <main className='flex flex-col max-w-lg m-auto pt-6 text-white'>
            <div className="flex items-center gap-1 mb-4">
                <Link className=" text-pink-500" href="/portfolio">
                    portfolio
                </Link>
                <CaretRight size={14}/>
                <span className="text-xl">Text Editor</span>
            </div>
            <p className='indent-4 text-justify break-words mb-4'>
                A simple text editor that runs Node.js in the browser/client-side, developed using React and web containers.
                The editor is using Node.js version 16, but you can do everything that Node.js allows up to this version. You can create servers, download dependencies, all of this running on the client side.
            </p>
            <div className="flex gap-2 items-center ml-4 mb-1 flex-wrap">
                <p className="p-1 rounded-sm font-bold bg-green-900 text-green-200 text-xs uppercase">Github</p>
                <Link target="_blank" className="text-pink-500 break-all" href="https://github.com/MarceloCoelho1/text-editor">https://github.com/MarceloCoelho1/text-editor</Link>
            </div>
            <div className="flex gap-2 items-center ml-4 flex-wrap">
                <p className="p-1 rounded-sm font-bold bg-green-900 text-green-200 text-xs uppercase">stack</p>
                <p>React, Typescript, webContainers</p>
            </div>
            <div className="mt-4 space-y-4 mb-4">
                <Image className="rounded-2xl" src={TextEditorImage}/>
            </div>
        </main>
    )
}