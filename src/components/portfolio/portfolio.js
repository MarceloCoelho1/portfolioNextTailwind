import Image from 'next/image'
import SocialPage from '../../../public/assets/images/socialPageLogin.png'
import Bikecraft from '../../../public/assets/images/bikecraft.png'
import CampusConnectFront1 from '../../../public/assets/images/CampusConnectFront1.png'
import backendArchitecture from '../../../public/assets/images/backendArchitecture.png'
import Algorithms from '../../../public/assets/images/algorithms1.png'
import Compiler from '../../../public/assets/images/Compiler.png'
import TextEditor from '../../../public/assets/images/text-editor.png'

import Link from 'next/link'


export default function portfolio() {
    return (
        <main className="flex flex-col max-w-lg m-auto pt-6 text-white max-md:px-2">
            <div className=" border-b-2 border-b-zinc-800 pb-9 mb-9">
                <h1 className="mb-5 text-xl font-medium">Front end</h1>
                <div className="grid grid-cols-2 gap-8 justify-center align-top max-[450px]:grid-cols-1">
                    <div className=" flex flex-col items-center text-center">
                        <Link href="/portfolio/dogs">
                            <div className="h-32 w-60 rounded-lg mb-1 max-sm:w-full max-[450px]:h-48">
                                <Image className='h-full  rounded-lg' src={SocialPage}/>
                            </div>
                        </Link>    
                        <h1 className="mb-1 text-lg  font-normal">Dogs Social</h1>
                        <p className="text-sm">
                            social network specifically for dogs, similar to Instagram.
                        </p>
                    </div>

                    <div className=" flex flex-col items-center text-center">
                        <Link href="/portfolio/bikecraft">
                            <div className="h-32 w-60 rounded-lg mb-1 max-sm:w-full max-[450px]:h-48">
                                <Image className='h-full  rounded-lg' src={Bikecraft}/>
                            </div>
                        </Link>
                        <h1 className="mb-1 text-lg font-normal">Bikecraft</h1>
                        <p className="text-sm">
                            e-commerce project built with HTML, CSS, and JavaScript
                        </p>
                    </div>
                   
                    <div className=" flex flex-col items-center text-center">
                        <Link href="/portfolio/CampusConnectFront">
                            <div className="h-32 w-60 rounded-lg mb-1 max-sm:w-full max-[450px]:h-48">
                                <Image className='h-full  rounded-lg' src={CampusConnectFront1}/>
                            </div>
                        </Link>
                        <h1 className="mb-1 flex items-center gap-1 text-lg font-normal">CampusConnectFront <p className="text-red-500">*</p></h1>
                        <p className="text-sm">
                            A social network for students and professors of the Catholic University of Pernambuco.
                        </p>
                    </div>
                </div>
            </div>
            <div className=" border-b-2 border-b-zinc-800 pb-9 mb-9 ">
                <h1 className="mb-5 text-xl font-medium">Back end</h1>
                <div className="grid grid-cols-2 gap-8 justify-center align-top max-[450px]:grid-cols-1">
                    <div className=" flex flex-col items-center text-center">
                        <Link href="/portfolio/CampusConnectBack">
                            <div className="h-32 w-60 rounded-lg mb-1 max-sm:w-full max-[450px]:h-48">
                                <Image className='h-full rounded-lg' src={backendArchitecture}/>
                            </div>
                        </Link>
                        <h1 className="mb-1 flex items-center gap-1 text-lg font-normal">CampusConnectBack <p className="text-red-500">*</p></h1>
                        <p className="text-sm">
                            project developed using Node.js, Nestjs, Prisma, Postgresql, mongoDB, docker, kafka.
                        </p>
                    </div>

                    <div className=" flex flex-col items-center text-center">
                        <Link href="/portfolio/compiler">
                            <div className="h-32 w-60 rounded-lg mb-1 max-sm:w-full max-[450px]:h-48">
                                <Image className='h-full rounded-lg' src={Compiler}/>
                            </div>
                        </Link>
                        <h1 className="mb-1 text-lg font-normal">SV Compiler</h1>
                        <p className="text-sm">
                            Making a compiler in typescript from SV to Java
                        </p>
                    </div>

                    <div className=" flex flex-col items-center text-center">
                        <Link href="/portfolio/text-editor">
                            <div className="h-32 w-60 rounded-lg mb-1 max-sm:w-full max-[450px]:h-48">
                                <Image className='h-full rounded-lg' src={TextEditor}/>
                            </div>
                        </Link>
                        <h1 className="mb-1 text-lg font-normal">Text Editor</h1>
                        <p className="text-sm">
                            Text Editor that run nodejs in browser.
                        </p>
                    </div>

                    <div className=" flex flex-col items-center text-center">
                        <div className="h-32 w-60 bg-zinc-800 rounded-lg mb-1 flex justify-center items-center max-sm:w-full max-[450px]:h-48">
                            <h1 className="text-xl font-semibold">coming soon</h1>
                        </div>
                        
                    </div>
                   
                </div>
            </div>
            <div className=" border-b-2 border-b-zinc-800 pb-9 mb-9">
                <h1 className="mb-5 text-xl font-medium">Algorithms</h1>
                <div className="grid grid-cols-2 gap-8 justify-center align-top max-[450px]:grid-cols-1">
                    <div className=" flex flex-col items-center text-center">
                        <Link href="/portfolio/javaalgo ">
                            <div className="h-32 w-60 rounded-lg mb-1 max-sm:w-full max-[450px]:h-48">
                                <Image className='h-full rounded-lg' src={Algorithms}/>
                            </div>
                        </Link>
                        <h1 className="mb-1 text-lg font-normal">JavaAlgo</h1>
                        <p className="text-sm">
                            JavaAlgo is a repository created for me to store my algorithms and data structure codes
                        </p>
                    </div>

                    <div className=" flex flex-col items-center text-center">
                        <div className="h-32 w-60 bg-zinc-800 rounded-lg mb-1 flex justify-center items-center max-sm:w-full max-[450px]:h-48">
                            <h1 className="text-xl font-semibold">coming soon</h1>
                        </div>
                    
                    </div>
                   
                </div>
            </div>
        </main>
    )
}