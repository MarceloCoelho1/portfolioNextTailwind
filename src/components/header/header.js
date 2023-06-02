'use client'
import Link from "next/link";
import { List, Sun } from "@phosphor-icons/react";

export default function header() {
    return (
        <header className="py-4 px-2 max-md:px-0">
            <div className="max-w-2xl m-auto flex items-center justify-between">
                <div className="flex items-center ">
                    <Link href="/" className="mr-6 text-white text-xl font-semibold">Marcelo.dev</Link>
                    <ul className="flex items-center gap-4 text-white max-md:hidden">
                        <li>
                            <Link className="text-sm" href="/portfolio">portfolio</Link>
                        </li>
                        <li>
                            <Link className="text-sm" href="/objectives">objectives</Link>
                        </li>
                        <li>
                            <Link className="text-sm" href="https://github.com/MarceloCoelho1" target="_blank">github</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-2">
                    <div className="text-black bg-yellow-200 rounded-md p-3">
                        <Sun size={16} weight="light"/>
                    </div>
                    <div className="text-white p-3 hidden rounded-md border border-zinc-700 max-md:block">
                        <List size={16}/>
                    </div>
                </div>
                
            </div>
        </header>
    )
}