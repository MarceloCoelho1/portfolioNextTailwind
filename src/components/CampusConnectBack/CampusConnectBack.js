'use client'
import { CaretRight } from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import backendArchitecture from '../../../public/assets/images/backendArchitecture.png'



export default function dogs() {
    return(
        <main className='flex flex-col max-w-lg m-auto pt-6 text-white'>
            <div className="flex items-center gap-1 mb-4">
                <Link className=" text-pink-500" href="/portfolio">
                    portfolio
                </Link>
                <CaretRight size={14}/>
                <span className="text-xl">CampusConnectBack</span>
            </div>
            <p className='indent-4 text-justify break-words mb-4'>
                The project aims to create an online community for Computer Science students at the Catholic University of Pernambuco. The purpose of this community is to allow students to share experiences and knowledge, with the aim of deepening their understanding of the course fundamentals and preparing for the job market, as well as serving as a networking platform.
                The back end is being developed in a microservices architecture. Here are the two services we currently have:
            </p>
            <div className="flex gap-2 items-center ml-4 mb-1 flex-wrap">
                <p className="p-1 rounded-sm font-bold bg-green-900 text-green-200 text-xs uppercase">Github</p>
                <Link target="_blank" className="text-pink-500 break-words" href="https://github.com/UnitWe/CampusConnect-Blog-Service">https://github.com/UnitWe/CampusConnect-Blog-Service</Link>
                <Link target="_blank" className="text-pink-500 break-words" href="https://github.com/UnitWe/CampusConnect-User-Service">https://github.com/UnitWe/CampusConnect-User-Service</Link>
            </div>
            <div className="flex gap-2 items-center ml-4 flex-wrap">
                <p className="p-1 rounded-sm font-bold bg-green-900 text-green-200 text-xs uppercase">stack</p>
                <p>Nodejs, Nestjs, MongoDb, Prisma, Postgresql, kafka, docker</p>
            </div>
            <div className="mt-4 space-y-4 mb-4">
                <Image className="rounded-2xl" src={backendArchitecture}/>
            </div>
        </main>
    )
}