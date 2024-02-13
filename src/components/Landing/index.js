import React from "react";

export default function LandingPage() {
    return (
        <div className=" text-zinc-500">
            <button className="transition ease-in-out delay-150 bg-slate-500 text-slate-50 rounded-3xl w-24 h-12 border-2 border-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 m-5">Home</button>
            <button className="transition ease-in-out delay-150 bg-slate-500 text-slate-50 rounded-3xl w-24 h-12 border-2 border-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 m-5">Info</button>
            <button className="transition ease-in-out delay-150 bg-slate-500 text-slate-50 rounded-3xl w-24 h-12 border-2 border-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 m-5">Orders</button>
            <button className="transition ease-in-out delay-150 bg-slate-500 text-slate-50 rounded-3xl w-24 h-12 border-2 border-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 m-5">Wholesale</button>
        </div>
    )
}