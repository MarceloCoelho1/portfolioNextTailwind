'use client'
import { CaretRight } from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import CampusConnectFront1 from '../../../public/assets/images/CampusConnectFront1.png'
import CampusConnectFront2 from '../../../public/assets/images/CampusConnectFront2.png'


export default function CampusConnectFront() {
    return(
        <main className='flex flex-col max-w-lg m-auto pt-6 text-white'>
            <div className="flex items-center gap-1 mb-4">
                <Link className=" text-pink-500" href="/portfolio">
                    portfolio
                </Link>
                <CaretRight size={14}/>
                <span className="text-xl">CampusConnectFront</span>
            </div>
            <p className='indent-4 text-justify break-words mb-4'>
                The project aims to create an online community for Computer Science students at the Catholic University of Pernambuco. The purpose of this community is to allow students to share experiences and knowledge, with the aim of deepening their understanding of the course fundamentals and preparing for the job market, as well as serving as a networking platform.
                Users will be able to exchange experiences by posting documents on the website. The documents or articles can be written with HTML tags, CSS styles, and markdown, all of this to enhance the user experience.
            </p>
            <div className="flex gap-2 items-center ml-4 mb-1 flex-wrap">
                <p className="p-1 rounded-sm font-bold bg-green-900 text-green-200 text-xs uppercase">Github</p>
                <Link target="_blank" className="text-pink-500 break-all" href="https://github.com/UnitWe/CampusConnect-Frontend">https://github.com/UnitWe/CampusConnect-Frontend</Link>
            </div>
            <div className="flex gap-2 items-center ml-4 flex-wrap">
                <p className="p-1 rounded-sm font-bold bg-green-900 text-green-200 text-xs uppercase">stack</p>
                <p>NextJs, Javascript, Javascript</p>
            </div>
            <div className="mt-4 space-y-4 mb-4">
                <Image className="rounded-2xl" src={CampusConnectFront1}/>
                <Image className="rounded-2xl" src={CampusConnectFront2}/>
            </div>
        </main>
    )
}