'use client'
import { CaretRight } from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import SocialPage from '../../../public/assets/images/socialPage.png'
import SocialPageLogin from '../../../public/assets/images/socialPageLogin.png'

export default function dogs() {
    return(
        <main className='flex flex-col max-w-lg m-auto pt-6 text-white'>
            <div className="flex items-center gap-1 mb-4">
                <Link className=" text-pink-500" href="/portfolio">
                    portfolio
                </Link>
                <CaretRight size={14}/>
                <span className="text-xl">Dogs</span>
            </div>
            <p className='indent-4 text-justify break-words mb-4'>
                This project is a ReactJS application that utilizes an external API for 
                registering users, saving photos, and posting comments. It aims to create a 
                social network specifically for dogs, similar to Instagram. The application 
                allows dog owners to create profiles, upload photos, and engage with other 
                users by commenting on their posts. With the help of ReactJS and the external 
                API, this project provides a user-friendly interface for dog lovers to 
                connect and share their furry friends' adventures.
            </p>
            <div className="flex gap-2 items-center ml-4 mb-1 flex-wrap">
                <p className="p-1 rounded-sm font-bold bg-green-900 text-green-200 text-xs uppercase">Github</p>
                <Link target="_blank" className="text-pink-500 break-all" href="https://github.com/MarceloCoelho1/DogsRedeSocial">https://github.com/MarceloCoelho1/DogsRedeSocial</Link>
            </div>
            <div className="flex gap-2 items-center ml-4 flex-wrap">
                <p className="p-1 rounded-sm font-bold bg-green-900 text-green-200 text-xs uppercase">stack</p>
                <p>React, nodeJs</p>
            </div>
            <div className="mt-4 space-y-4 mb-4">
                <Image className="rounded-2xl" src={SocialPage}/>
                <Image className="rounded-2xl" src={SocialPageLogin}/>
            </div>
        </main>
    )
}