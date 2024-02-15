import React from "react";

import model from '../../imgs/hangers.jpg'
import img from "../../imgs/whiskHat.jpg"
import machine from '../../imgs/machine.jpg'
import reels from '../../imgs/reels.jpg'
import stack from '../../imgs/shelf.jpg'


export default function LandingPage() {
    return (
        <main className="flex flex-col bg-white">
            <section className="text-left bg-cover bg-center h-96" style={{ backgroundImage: `url(${model})` }}>
                <h1 className="text-7xl ml-8 text-white">
                    Adept Imaging
                    <h2 className="text-white text-2xl mt-2">
                        High quality screen printing and embroidery specialists
                    </h2>
                </h1>
                <nav className="space-x-4 text-2xl mt-5 ml-10 underline text-white">
                    <a href="/">Home</a>
                    <a href="/">Orders</a>
                    <a href="/">Login</a>
                    <a href="/">Contact</a>
                </nav>
            </section>
            <aside className="bg-white flex flex-row justify-stretch flex-wrap m-10">
                <div className="flex bg-red-600 text-white box-border mb-5">
                    <img className="m-2 rounded-xl w-52 h-52" src={img} alt="An embroidered hat from the whiskey bar">
                    </img>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Nunc consequat interdum varius sit amet. Nunc
                    sed augue lacus viverra vitae congue eu consequat ac. Augue mauris augue neque gravida in fermentum et sollicitudin ac.
                    Malesuada pellentesque elit eget gravida cum sociis natoque. Id diam maecenas ultricies mi eget mauris pharetra et
                    ultrices. Porttitor massa id neque aliquam vestibulum morbi. Eget aliquet nibh praesent tristique magna.
                </div>
                <div className="flex bg-sky-600 text-white box-border mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Nunc consequat interdum varius sit amet. Nunc
                    sed augue lacus viverra vitae congue eu consequat ac. Augue mauris augue neque gravida in fermentum et sollicitudin ac.
                    Malesuada pellentesque elit eget gravida cum sociis natoque. Id diam maecenas ultricies mi eget mauris pharetra et
                    ultrices. Porttitor massa id neque aliquam vestibulum morbi. Eget aliquet nibh praesent tristique magna.
                    <img src={machine} className="h-52 w-52 rounded-xl m-2" alt="A large screen printing machine that looks new"></img>
                </div>
                <div className="flex bg-amber-600 text-white box-border mb-5">
                <img src={stack} className="h-52 w-52 rounded-xl m-2" alt="Some neatly stacked shirts displayed on a table"></img>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Nunc consequat interdum varius sit amet. Nunc
                    sed augue lacus viverra vitae congue eu consequat ac. Augue mauris augue neque gravida in fermentum et sollicitudin ac.
                    Malesuada pellentesque elit eget gravida cum sociis natoque. Id diam maecenas ultricies mi eget mauris pharetra et
                    ultrices. Porttitor massa id neque aliquam vestibulum morbi. Eget aliquet nibh praesent tristique magna.
                </div>
                <div className="flex bg-slate-600 text-white box-border">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Nunc consequat interdum varius sit amet. Nunc
                    sed augue lacus viverra vitae congue eu consequat ac. Augue mauris augue neque gravida in fermentum et sollicitudin ac.
                    Malesuada pellentesque elit eget gravida cum sociis natoque. Id diam maecenas ultricies mi eget mauris pharetra et
                    ultrices. Porttitor massa id neque aliquam vestibulum morbi. Eget aliquet nibh praesent tristique magna.
                    <img src={reels} className="h-52 w-52 rounded-xl m-2" alt="Some colored reels of thread used in embroidery."></img>
                </div>
            </aside>
            <footer className="bg-slate-600 text-white">
                Adept Imaging LLC | (706) 955-1120 | 2024<br></br>
                464 Greene Street Augusta, Ga 30901
            </footer>
        </main>
    )
}


//{/* <button className="transition ease-in-out delay-150 bg-slate-500 text-slate-50 rounded-3xl w-24 h-12 border-2 border-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 m-5">Home</button>
//    <button className="transition ease-in-out delay-150 bg-slate-500 text-slate-50 rounded-3xl w-24 h-12 border-2 border-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 m-5">Info</button>
//    <button className="transition ease-in-out delay-150 bg-slate-500 text-slate-50 rounded-3xl w-24 h-12 border-2 border-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 m-5">Orders</button>
//    <button className="transition ease-in-out delay-150 bg-slate-500 text-slate-50 rounded-3xl w-24 h-12 border-2 border-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 m-5">Wholesale</button> */}