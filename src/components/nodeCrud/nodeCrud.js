'use client'
import { CaretRight } from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import NodeCrud from '../../../public/assets/images/nodeCrud.png'



export default function dogs() {
    return(
        <main className='flex flex-col max-w-lg m-auto pt-6 text-white'>
            <div className="flex items-center gap-1 mb-4">
                <Link className=" text-pink-500" href="/portfolio">
                    portfolio
                </Link>
                <CaretRight size={14}/>
                <span className="text-xl">Crud with nodeJs</span>
            </div>
            <p className='indent-4 text-justify break-words mb-4'>
                NodeCRUD is a dynamic project developed using Node.js, MySQL, Express, 
                Handlebars, and Bootstrap. This project was created with the intention of 
                serving as a valuable study resource to enhance back-end development skills. 
                By implementing a CRUD (Create, Read, Update, Delete) functionality, NodeCRUD 
                provides hands-on experience in building robust web applications, 
                while leveraging popular technologies and frameworks.
            </p>
            <div className="flex gap-2 items-center ml-4 mb-1 flex-wrap">
                <p className="p-1 rounded-sm font-bold bg-green-900 text-green-200 text-xs uppercase">Github</p>
                <Link target="_blank" className="text-pink-500 break-all" href="https://github.com/MarceloCoelho1/crudWithNode">https://github.com/MarceloCoelho1/crudWithNode</Link>
            </div>
            <div className="flex gap-2 items-center ml-4 flex-wrap">
                <p className="p-1 rounded-sm font-bold bg-green-900 text-green-200 text-xs uppercase">stack</p>
                <p>Nodejs, MySQL, Express, Handlebars, Bootstrap</p>
            </div>
            <div className="mt-4 space-y-4 mb-4">
                <Image className="rounded-2xl" src={NodeCrud}/>
            </div>
        </main>
    )
}