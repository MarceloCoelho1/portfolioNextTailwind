'use client'
import { CaretRight } from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import Algorithms from '../../../public/assets/images/algorithms1.png'



export default function algorithms() {
    return(
        <main className='flex flex-col max-w-lg m-auto pt-6 text-white'>
            <div className="flex items-center gap-1 mb-4">
                <Link className=" text-pink-500" href="/portfolio">
                    portfolio
                </Link>
                <CaretRight size={14}/>
                <span className="text-xl">JavaAlgo</span>
            </div>
            <p className='indent-4 text-justify break-words mb-4'>
                JavaAlgo is a repository created for me to store my Java-based algorithms and 
                data structure codes, designed to serve as a study resource for myself as a 
                computer science student and aspiring professional. I am putting these codes in a 
                repository with a specific focus on interview preparation for prominent technology 
                companies like Google, Amazon, and Meta. The aim of this project is to equip me with 
                the knowledge and skills necessary to excel in algorithmic problem-solving and 
                technical interviews. Of course, anyone is welcome to study these codes that I 
                have created.
            </p>
            <div className="flex gap-2 items-center ml-4 mb-1 flex-wrap">
                <p className="p-1 rounded-sm font-bold bg-green-900 text-green-200 text-xs uppercase">Github</p>
                <Link target="_blank" className="text-pink-500 break-all" href="https://github.com/MarceloCoelho1/Algorithms">https://github.com/MarceloCoelho1/Algorithms</Link>
            </div>
            <div className="flex gap-2 items-center ml-4 flex-wrap">
                <p className="p-1 rounded-sm font-bold bg-green-900 text-green-200 text-xs uppercase">stack</p>
                <p>Java</p>
            </div>
            <div className="mt-4 space-y-4 mb-4">
                <Image className="rounded-2xl" src={Algorithms}/>
            </div>
        </main>
    )
}