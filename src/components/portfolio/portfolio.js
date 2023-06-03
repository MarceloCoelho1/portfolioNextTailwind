import Image from 'next/image'
import SocialPage from '../../assets/images/socialPage.png'
import Bikecraft from '../../assets/images/bikecraft.png'
import Animais from '../../assets/images/animais1.png'
import NodeCrud from '../../assets/images/nodeCrud.png'
import Algorithms from '../../assets/images/algorithms1.png'


export default function portfolio() {
    return (
        <main className="flex flex-col max-w-lg m-auto pt-6 text-white">
            <div className=" border-b-2 border-b-zinc-800 pb-9 mb-9">
                <h1 className="mb-5 text-xl font-medium">Front end</h1>
                <div className="grid grid-cols-2 gap-8 justify-center align-top max-[450px]:grid-cols-1">
                    <div className=" flex flex-col items-center text-center">
                        <div className="h-32 w-60 rounded-lg mb-1 max-sm:w-full max-[450px]:h-48">
                            <Image className='h-full w-full rounded-lg' src={SocialPage}/>
                        </div>
                        <h1 className="mb-1 text-lg  font-normal">Dogs Social</h1>
                        <p className="text-sm">
                            social network specifically for dogs, similar to Instagram.
                        </p>
                    </div>

                    <div className=" flex flex-col items-center text-center">
                        <div className="h-32 w-60 rounded-lg mb-1 max-sm:w-full max-[450px]:h-48">
                            <Image className='h-full w-full rounded-lg' src={Bikecraft}/>
                        </div>
                        <h1 className="mb-1 text-lg font-normal">Bikecraft</h1>
                        <p className="text-sm">
                            e-commerce project built with HTML, CSS, and JavaScript
                        </p>
                    </div>
                   
                    <div className=" flex flex-col items-center text-center">
                        <div className="h-32 w-60 rounded-lg mb-1 max-sm:w-full max-[450px]:h-48">
                            <Image className='h-full w-full rounded-lg' src={Animais}/>
                        </div>
                        <h1 className="mb-1 text-lg font-normal">Animais api BTC</h1>
                        <p className="text-sm">
                            project developed using HTML, CSS, and JavaScript. By incorporating a Bitcoin API.
                        </p>
                    </div>
                </div>
            </div>
            <div className=" border-b-2 border-b-zinc-800 pb-9 mb-9 ">
                <h1 className="mb-5 text-xl font-medium">Back end</h1>
                <div className="grid grid-cols-2 gap-8 justify-center align-top max-[450px]:grid-cols-1">
                    <div className=" flex flex-col items-center text-center">
                        <div className="h-32 w-60 rounded-lg mb-1 max-sm:w-full max-[450px]:h-48">
                            <Image className='h-full w-full rounded-lg' src={NodeCrud}/>
                        </div>
                        <h1 className="mb-1 text-lg font-normal">Crud with nodeJs and mySql</h1>
                        <p className="text-sm">
                            project developed using Node.js, MySQL, Express, Handlebars, and Bootstrap.
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
                        <div className="h-32 w-60 rounded-lg mb-1 max-sm:w-full max-[450px]:h-48">
                            <Image className='h-full w-full rounded-lg' src={Algorithms}/>
                        </div>
                        <h1 className="mb-1 text-lg font-normal">JavaAlgo</h1>
                        <p className="text-sm">
                            JavaAlgo is a repository created for me to store my Java-based algorithms and data structure codes
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