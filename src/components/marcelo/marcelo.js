'use client'
import Image from 'next/image'
import Me from '../../../public/assets/images/me.jpeg'
import React from 'react'
import Link from 'next/link'
import { CaretRight, Download, GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

export default function marcelo() {
    const [readMore, setReadMore] = React.useState(false)


    const handleReadMore = () => {
        setReadMore(!readMore)
    }
    return (
        <main className='flex flex-col max-w-lg m-auto pt-6 text-white pb-9'>
            <h1 className='py-3 px-10 font-thin text-base bg-zinc-800 text-center rounded-md'>Hello, I'm a computer science student based in Brazil!</h1>
            <div className='mt-4 flex items-start justify-between max-md:flex-col'>
                <div className='mt-2 max-md:mb-4'>
                    <h1 className='text-3xl font-semibold'>Marcelo Henrique</h1>
                    <span className='text-sm break-words'>Computer Science Student</span>
                </div>
                <div className='max-md:mb-6 max-md:flex max-md:justify-center max-md:w-full'>
                    <div className='w-28 h-28 rounded-full border border-zinc-700'>
                        <Image className='rounded-full' src={Me} />
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-xl max-w-min border-b-4 border-zinc-700 font-normal'>About</h1>
                <p className='indent-4 mt-4 text-justify break-words'>
                    I am a Computer Science student with a focus on programming. I am passionate about programming and aim to become a highly skilled professional. To achieve this, I am constantly refining my skills. I am seeking my first internship experience to apply my knowledge in practice.
                </p>
                <p className='indent-4 mt-4 text-justify break-words'>
                    I enjoy understanding how things work behind the scenes and creating new solutions that are useful to people. My ultimate goal is to work for a big tech company such as Google or Amazon. To achieve this, I am committed to deepening my knowledge and avoiding the superficiality that many programmers fall into.
                </p>
                <p className={`${readMore ? 'block' : 'hidden'} indent-4 text-justify mt-4 break-words`}>
                    In his spare time, Marcelo enjoys immersing himself in books, ranging
                    from technical literature to fictional works. He finds solace and inspiration
                    in reading, which fuels his creativity and broadens his perspective. Furthermore,
                    Marcelo values interpersonal connections and thrives in collaborative environments,
                    exhibiting a strong team spirit.
                </p>
                <button className=' text-violet-500 p-3 mt-2 hover:bg-white/5 rounded-lg' onClick={handleReadMore}>{readMore ? 'Read less' : 'Read more'}</button>
                <div className='flex justify-center mt-3'>
                    <Link href='/portfolio' className='flex items-center gap-1 px-3 py-2 bg-violet-500 max-w-max rounded-lg font-medium text-indigo-950'>
                        My portfolio
                        <CaretRight size={18} />
                    </Link>
                </div>

            </div>
            <div className='mb-6'>
                <h1 className='text-xl max-w-min border-b-4 border-zinc-700 font-normal'>Bio</h1>
                <ul className='mt-4 space-y'>
                    <li>
                        <strong className='mr-4'>2004</strong> born in recife, brazil
                    </li>
                    <li>
                        <strong className='mr-4'>2022</strong> I started in graduate of computer science.
                    </li>
                    <li>
                        <strong className='mr-4'>2023 to present</strong> working as a freelancer
                    </li>
                </ul>
            </div>
            <div className='mb-6'>
                <h1 className='text-xl max-w-max border-b-4 border-zinc-700 font-normal'>I ♥</h1>
                <p className='indent-4 mt-4 break-words'>
                    Music, Books, study, programming, talk about technology, play videogames, create new things, and of course, coffee ☕.
                </p>
            </div>
            <div>
                <h1 className='text-xl max-w-max border-b-4 border-zinc-700 font-normal'>Socials</h1>
                <ul className='mt-4'>
                    <li>
                        <Link target='_blank' href='https://www.github.com/marcelocoelho1' className='flex items-center gap-2 p-3 text-violet-500 hover:bg-white/5 max-w-max rounded-lg duration-200'>
                            <GithubLogo />
                            @MarceloCoelho1
                        </Link>
                    </li>
                    <li>
                        <Link target='_blank' href='https://www.instagram.com/marcelo_henri22/' className='flex items-center gap-2 p-3 text-violet-500 hover:bg-white/5 max-w-max rounded-lg duration-200'>
                            <InstagramLogo />
                            @Marcelo_henri22
                        </Link>
                    </li>
                    <li>
                        <Link target='_blank' href='https://www.linkedin.com/in/marcelo-brito-287122204/' className='flex items-center gap-2 p-3 text-violet-500 hover:bg-white/5 max-w-max rounded-lg duration-200'>
                            <LinkedinLogo />
                            @MarceloBrito
                        </Link>
                    </li>
                    <li>
                        <a download href="../../../public/assets/CV.pdf" className='flex items-center gap-2 p-3 text-violet-500 hover:bg-white/5 max-w-max rounded-lg duration-200'>
                            <Download weight='fill' />
                            Meu CV
                        </a>
                    </li>
                </ul>
            </div>
        </main>
    )
}