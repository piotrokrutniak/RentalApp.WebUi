"use client"

import { FaPizzaSlice, FaBars } from "react-icons/fa"
import { BsX } from "react-icons/bs"
import Button from "../generic/button"
import { useState } from "react"
import Link from "next/link"


export default function NavBar(){
    const [showMobile, setShowMobile] = useState(false)

    return(
        <div className="bg-black/80 sticky top-0 z-20 backdrop-blur-xl">
            <div className="w-full flex bg-slate-700/50 ">
                <div className="p-3 m-auto w-full flex max-w-7xl justify-between items-center">
                    <Link href="/">
                    <div className="flex gap-1 h-fit select-none cursor-pointer active:opacity-80 hover:border-b-2 hover:pb-1 active:pb-0 
                            border-opacity-0 border-vermilion-400 hover:border-opacity-100 border-b-0 transition-all">
                        <FaPizzaSlice className="h-full w-8 fill-vermilion-400"/>
                        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-vermilion-400 to-vermilion-500">RentTesla</h1>
                    </div>
                    </Link>
                    <div className="hidden text-lg gap-4 md:flex">
                        <Button className="text-white bg-transparent active:bg-slate-100/5 hover:bg-slate-100/5 shadow-black/40 hover:shadow-md" 
                            onClick={undefined}>
                            Locations
                        </Button>
                        <Button className="text-white bg-transparent active:bg-slate-100/5 hover:bg-slate-100/5 shadow-black/40 hover:shadow-md" 
                            onClick={undefined}>
                            Bookings
                        </Button>
                        <Button className="text-white bg-vermilion-400 shadow-black/40 hover:shadow-md" 
                            onClick={undefined}>
                            Sign In
                        </Button>
                        <Button className="text-white bg-transparent capitalize border-2 border-white/50 hover:border-vermilion-400 hover:text-vermilion-400 active:opacity-80 shadow-black/40 hover:shadow-md" 
                            onClick={undefined}>
                            Sign Up
                        </Button>
                    </div>
                    <div className="md:hidden">
                        <FaBars className="h-10 w-10 fill-white cursor-pointer hover:fill-vermilion-400 active:opacity-80" onClick={() => setShowMobile(true)}/>
                    </div>
                    <div className={`${showMobile ? "" : "translate-x-full"} absolute w-screen h-screen bg-black left-0 top-0 md:hidden transition-all z-50 ease-in-out`}>
                    <div id="mobile-header" className="flex flex-row-reverse w-full"> 
                        <BsX className="fill-white w-16 h-16 cursor-pointer hover:fill-vermilion-400" onClick={() => setShowMobile(false)}/>
                    </div>
                    <div id="mobile-body">XDDDDDDDDDDDDDDDDD</div>
                    </div>
                </div>
            </div>
        </div>
    )
}