import React from "react";

import model from '../../imgs/hangers.jpg'


export default function LandingPage() {
    return (
        <main className="w-screen h-screen bg-slate-600">
            <section className="text-left grid grid-rows-3 grid-flow-col gap-4 bg-cover bg-center h-96" style={{backgroundImage: `url(${model})`}}>
                <h1 className="text-7xl ml-8 text-white row-span-2">
                    Adept Imaging
                    <h2 className="text-white text-2xl mt-2">
                        Custom screen printing and embroidery
                    </h2>
                </h1>
                <nav className="space-x-4 text-2xl mt-5 mr-60 row-span-2 underline text-white">
                    <a href="/">Home</a>
                    <a href="/">Orders</a>
                    <a href="/">Login</a>
                    <a href="/">Contact</a>
                </nav>
            </section>
            <aside className="bg-white h-96">
                
            </aside>

        </main>
    )
}


//{/* <button className="transition ease-in-out delay-150 bg-slate-500 text-slate-50 rounded-3xl w-24 h-12 border-2 border-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 m-5">Home</button>
//    <button className="transition ease-in-out delay-150 bg-slate-500 text-slate-50 rounded-3xl w-24 h-12 border-2 border-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 m-5">Info</button>
//    <button className="transition ease-in-out delay-150 bg-slate-500 text-slate-50 rounded-3xl w-24 h-12 border-2 border-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 m-5">Orders</button>
//    <button className="transition ease-in-out delay-150 bg-slate-500 text-slate-50 rounded-3xl w-24 h-12 border-2 border-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 m-5">Wholesale</button> */}