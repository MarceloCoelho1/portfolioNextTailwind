'use client'
import React from "react";
import Link from "next/link";
import { List, Sun } from "@phosphor-icons/react";
import { useTheme } from '../../../utils/themeContext/ThemeContext';

export default function header() {
    const { isDarkMode, toggleDarkMode } = useTheme();
    const [showMenu, setShowMenu] = React.useState(false)

    const handleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header className={`py-3 px-2 max-md:px-0 fixed w-full bg-${isDarkMode ? 'zinc-900/30' : 'white/25'} backdrop-blur z-20`}>
            <div className="max-w-2xl m-auto flex items-center justify-between">
                <div className="flex items-center ">
                    <Link href="/" className="mr-6 text-white text-xl font-semibold max-md:ml-4">Marcelo.dev</Link>
                    <ul className="flex items-center gap-4 text-white max-md:hidden">
                        <li>
                            <Link className="text-sm hover:border-b hover:border-zinc-300 delay-100" href="/portfolio">portfolio</Link>
                        </li>
                        <li>
                            <Link className="text-sm hover:border-b hover:border-zinc-300 delay-100" href="/objectives">objectives</Link>
                        </li>
                        <li>
                            <Link className="text-sm hover:border-b hover:border-zinc-300 delay-100" href="https://github.com/MarceloCoelho1" target="_blank">github</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-2 max-md:mr-4">
                    <button onClick={toggleDarkMode} className="text-black bg-yellow-200 rounded-md p-3">
                        <Sun size={16} weight="light"/>
                    </button>
                    <div onClick={handleMenu} className="text-white cursor-pointer p-3 hidden relative rounded-md border border-zinc-700 max-md:block ">
                        <List size={16}/>
                        <ul className={`${showMenu ? 'block' : 'hidden'} text-white absolute right-0 top-12 bg-zinc-800 z-10 px-3 py-3 rounded-md border border-zinc-500 w-60`}>
                        <li className="">
                            <Link className="text-sm px-3 py-2 w-full inline-block" href="/portfolio">portfolio</Link>
                        </li>
                        <li className="">
                            <Link className="text-sm px-3 py-2 w-full inline-block" href="/objectives">objectives</Link>
                        </li>
                        <li className="">
                            <Link className="text-sm px-3 py-2 w-full inline-block" target="_blank" href="https://www.github.com/MarceloCoelho1">github</Link>
                        </li>
                    </ul>
                    </div>
                    
                </div>
                
            </div>
        </header>
    )
}