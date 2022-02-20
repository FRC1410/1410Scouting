import { data } from "../../helpers/data"
import Button from '@mui/material/Button'
import { ButtonGroup } from "@mui/material"
import Dropdown from 'react-dropdown'
import Navbar from "../../components/Navbar";

export default function Teleop() {
    return (
        <>
            <Navbar page="Teleop" />
            <h1 className="flex justify-center py-2 text-white text-3xl font-bold">Low Hub Scored</h1>
            <div className="flex flex-row justify-evenly pb-5">
                <button className="basis-1/4 rounded-full bg-blue-500 text-white text-7xl font-bold hover:bg-blue-200 active:bg-blue-400" onClick={() => data.teleop.var1++}>+</button>
                <h1 className="basis-1/5 text-center text-white text-8xl font-bold">{data.teleop.var1}</h1>
                <button className="basis-1/4 rounded-full bg-blue-500 text-white text-7xl font-bold hover:bg-blue-200 active:bg-blue-400" onClick={() => data.teleop.var1--}>-</button>
            </div>
            <h1 className="flex justify-center py-2 text-white text-3xl font-bold">High Hub Scored</h1>
            <div className="flex flex-row justify-evenly pb-5">
                <button className="basis-1/4 rounded-full bg-blue-500 text-white text-7xl font-bold hover:bg-blue-200 active:bg-blue-400" onClick={() => data.teleop.var2++}>+</button>
                <h1 className="basis-1/5 text-center text-white text-8xl font-bold">{data.teleop.var2}</h1>
                <button className="basis-1/4 rounded-full bg-blue-500 text-white text-7xl font-bold hover:bg-blue-200 active:bg-blue-400" onClick={() => data.teleop.var2--}>-</button>
            </div>
            <h1 className="flex justify-center py-2 text-white text-3xl font-bold">Shots Missed</h1>
            <div className="flex flex-row justify-evenly pb-5">
                <button className="basis-1/4 rounded-full bg-blue-500 text-white text-7xl font-bold hover:bg-blue-200 active:bg-blue-400" onClick={() => data.teleop.var3++}>+</button>
                <h1 className="basis-1/5 text-center text-white text-8xl font-bold">{data.teleop.var3}</h1>
                <button className="basis-1/4 rounded-full bg-blue-500 text-white text-7xl font-bold hover:bg-blue-200 active:bg-blue-400" onClick={() => data.teleop.var3--}>-</button>
            </div>
            <div className="flex flex-row justify-evenly py-4">
                <button className={"basis-1/3 py-2 rounded text-white text-2xl font-bold hover:bg-blue-200 " + (data.teleop.var4 ? "bg-blue-400 active:bg-blue-500" : "bg-blue-500 active:bg-blue-400")} onClick={() => data.teleop.var4 = !data.teleop.var4}>Played Defense</button>
                <button className={"basis-1/3 py-2 rounded text-white text-2xl font-bold hover:bg-blue-200 " + (data.teleop.var5 ? "bg-blue-400 active:bg-blue-500" : "bg-blue-500 active:bg-blue-400")} onClick={() => data.teleop.var5 = !data.teleop.var5}>Was Defended</button>
            </div>
            <div className="flex flex-row justify-evenly py-4">
                <button className={"basis-1/3 py-2 rounded text-white text-2xl font-bold hover:bg-blue-200 " + (data.teleop.var6 ? "bg-blue-400 active:bg-blue-500" : "bg-blue-500 active:bg-blue-400")} onClick={() => data.teleop.var6 = !data.teleop.var6}>+15 sec Dead on Field</button>
                <button className={"basis-1/3 py-2 rounded text-white text-2xl font-bold hover:bg-blue-200 " + (data.teleop.var7 ? "bg-blue-400 active:bg-blue-500" : "bg-blue-500 active:bg-blue-400")} onClick={() => data.teleop.var7 = !data.teleop.var7}>2+ Fouls</button>
            </div>
        </>
    )
}