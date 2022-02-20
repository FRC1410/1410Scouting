import { data } from "../../helpers/data"
import Navbar from "../../components/Navbar";
import { useForceUpdate } from "../../helpers/Refresh";

export default function Teleop() {
    const forceUpdate = useForceUpdate()

    return (
        <>
            <Navbar page="Teleop" />
            <h1 className="flex justify-center py-2 text-white text-3xl font-bold">Low Hub Scored</h1>
            <div className="flex flex-row justify-evenly pb-5">
                <button className="basis-1/4 rounded-full bg-blue-500 text-white text-7xl font-bold hover:bg-blue-200 active:bg-blue-400" onClick={() => {data.teleop.var1++; forceUpdate()}}>+</button>
                <h1 className="basis-1/5 text-center text-white text-8xl font-bold">{data.teleop.var1}</h1>
                <button className="basis-1/4 rounded-full bg-blue-500 text-white text-7xl font-bold hover:bg-blue-200 active:bg-blue-400" onClick={() => {data.teleop.var1--; forceUpdate()}}>-</button>
            </div>
            <h1 className="flex justify-center py-2 text-white text-3xl font-bold">High Hub Scored</h1>
            <div className="flex flex-row justify-evenly pb-5">
                <button className="basis-1/4 rounded-full bg-blue-500 text-white text-7xl font-bold hover:bg-blue-200 active:bg-blue-400" onClick={() => {data.teleop.var2++; forceUpdate()}}>+</button>
                <h1 className="basis-1/5 text-center text-white text-8xl font-bold">{data.teleop.var2}</h1>
                <button className="basis-1/4 rounded-full bg-blue-500 text-white text-7xl font-bold hover:bg-blue-200 active:bg-blue-400" onClick={() => {data.teleop.var2--; forceUpdate()}}>-</button>
            </div>
            <h1 className="flex justify-center py-2 text-white text-3xl font-bold">Shots Missed</h1>
            <div className="flex flex-row justify-evenly pb-5">
                <button className="basis-1/4 rounded-full bg-blue-500 text-white text-7xl font-bold hover:bg-blue-200 active:bg-blue-400" onClick={() => {data.teleop.var3++; forceUpdate()}}>+</button>
                <h1 className="basis-1/5 text-center text-white text-8xl font-bold">{data.teleop.var3}</h1>
                <button className="basis-1/4 rounded-full bg-blue-500 text-white text-7xl font-bold hover:bg-blue-200 active:bg-blue-400" onClick={() => {data.teleop.var3--; forceUpdate()}}>-</button>
            </div>
            <div className="flex flex-row justify-evenly py-4">
                <button className={"basis-1/3 py-2 rounded text-white text-2xl font-bold hover:bg-blue-200 " + (data.teleop.var4 ? "bg-blue-400 active:bg-blue-500" : "bg-blue-500 active:bg-blue-400")} onClick={() => {data.teleop.var4 = !data.teleop.var4; forceUpdate()}}>Played Defense</button>
                <button className={"basis-1/3 py-2 rounded text-white text-2xl font-bold hover:bg-blue-200 " + (data.teleop.var5 ? "bg-blue-400 active:bg-blue-500" : "bg-blue-500 active:bg-blue-400")} onClick={() => {data.teleop.var5 = !data.teleop.var5; forceUpdate()}}>Was Defended</button>
            </div>
            <div className="flex flex-row justify-evenly py-4">
                <button className={"basis-1/3 py-2 rounded text-white text-2xl font-bold hover:bg-blue-200 " + (data.teleop.var6 ? "bg-blue-400 active:bg-blue-500" : "bg-blue-500 active:bg-blue-400")} onClick={() => {data.teleop.var6 = !data.teleop.var6; forceUpdate()}}>+15 sec Dead on Field</button>
                <button className={"basis-1/3 py-2 rounded text-white text-2xl font-bold hover:bg-blue-200 " + (data.teleop.var7 ? "bg-blue-400 active:bg-blue-500" : "bg-blue-500 active:bg-blue-400")} onClick={() => {data.teleop.var7 = !data.teleop.var7; forceUpdate()}}>2+ Fouls</button>
            </div>
        </>
    )
}