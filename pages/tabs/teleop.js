import Navbar from "../../components/Navbar"
import { useForceUpdate } from "../../helpers/Refresh"
import { getData, setData } from "/helpers/data"

export default function Teleop() {
    const forceUpdate = useForceUpdate()

    return (
        <>
            <Navbar pageNum={3} />
            <h1 className="flex justify-center py-2 text-white text-3xl font-bold">High Node Scored</h1>
            <div className="flex flex-row justify-evenly pb-5">
                <button className="basis-1/4 rounded-full bg-emerald-600 text-white text-7xl font-bold background-color:bg-emerald-600 active:bg-gray-400" onClick={() => {setData("teleop", "var1", getData("teleop", "var1") - 1); forceUpdate()}}>-</button>
                <h1 className="basis-1/5 text-center text-white text-8xl font-bold">{getData("teleop", "var1")}</h1>
                <button className="basis-1/4 rounded-full bg-emerald-600 text-white text-7xl font-bold background-color:bg-emerald-600 active:bg-gray-400" onClick={() => {setData("teleop", "var1", getData("teleop", "var1") + 1); forceUpdate()}}>+</button>
            </div>
            <h1 className="flex justify-center py-2 text-white text-3xl font-bold">Mid Node Scored</h1>
            <div className="flex flex-row justify-evenly pb-5">
                <button className="basis-1/4 rounded-full bg-emerald-600 text-white text-7xl font-bold background-color:bg-emerald-600 active:bg-gray-400" onClick={() => {setData("teleop", "var2", getData("teleop", "var2") - 1); forceUpdate()}}>-</button>
                <h1 className="basis-1/5 text-center text-white text-8xl font-bold">{getData("teleop", "var2")}</h1>
                <button className="basis-1/4 rounded-full bg-emerald-600 text-white text-7xl font-bold background-color:bg-emerald-600 active:bg-gray-400" onClick={() => {setData("teleop", "var2", getData("teleop", "var2") + 1); forceUpdate()}}>+</button>
            </div>
            <h1 className="flex justify-center py-2 text-white text-3xl font-bold">Hybrid Node Scored</h1>
            <div className="flex flex-row justify-evenly pb-5">
                <button className="basis-1/4 rounded-full bg-emerald-600 text-white text-7xl font-bold background-color:bg-emerald-600 active:bg-gray-400" onClick={() => {setData("teleop", "var3", getData("teleop", "var3") - 1); forceUpdate()}}>-</button>
                <h1 className="basis-1/5 text-center text-white text-8xl font-bold">{getData("teleop", "var3")}</h1>
                <button className="basis-1/4 rounded-full bg-emerald-600 text-white text-7xl font-bold background-color:bg-emerald-600 active:bg-gray-400" onClick={() => {setData("teleop", "var3", getData("teleop", "var3") + 1); forceUpdate()}}>+</button>
            </div>
            <div className="flex flex-row justify-evenly py-4">
                <button className={"basis-1/5 py-2 rounded text-white text-2xl font-bold background-color:bg-emerald-600 " + (getData("teleop", "var4") ? "bg-gray-400 active:bg-emerald-600" : "bg-emerald-600 active:bg-gray-400")} onClick={() => {setData("teleop", "var4", !getData("teleop", "var4")); forceUpdate()}}>Played Defense</button>
                <button className={"basis-1/5 py-2 rounded text-white text-2xl font-bold background-color:bg-emerald-600 " + (getData("teleop", "var5") ? "bg-gray-400 active:bg-emerald-600" : "bg-emerald-600 active:bg-gray-400")} onClick={() => {setData("teleop", "var5", !getData("teleop", "var5")); forceUpdate()}}>Was Defended</button>
                <button className={"basis-1/5 py-2 rounded text-white text-2xl font-bold background-color:bg-emerald-600 " + (getData("teleop", "var6") ? "bg-gray-400 active:bg-emerald-600" : "bg-emerald-600 active:bg-gray-400")} onClick={() => {setData("teleop", "var6", !getData("teleop", "var6")); forceUpdate()}}>Did they Dock?</button>
            </div>
            <div className="flex flex-row justify-evenly py-4">
                <button className={"basis-1/5 py-2 rounded text-white text-2xl font-bold background-color:bg-emerald-600 " + (getData("teleop", "var7") ? "bg-gray-400 active:bg-emerald-600" : "bg-emerald-600 active:bg-gray-400")} onClick={() => {setData("teleop", "var7", !getData("teleop", "var7")); forceUpdate()}}>+15 sec Dead on Field</button>
                <button className={"basis-1/5 py-2 rounded text-white text-2xl font-bold background-color:bg-emerald-600 " + (getData("teleop", "var8") ? "bg-gray-400 active:bg-emerald-600" : "bg-emerald-600 active:bg-gray-400")} onClick={() => {setData("teleop", "var8", !getData("teleop", "var8")); forceUpdate()}}>2+ Fouls</button>
                <button className={"basis-1/5 py-2 rounded text-white text-2xl font-bold background-color:bg-emerald-600 " + (getData("teleop", "var9") ? "bg-gray-400 active:bg-emerald-600" : "bg-emerald-600 active:bg-gray-400")} onClick={() => {setData("teleop", "var9", !getData("teleop", "var9")); forceUpdate()}}>Did they Engage?</button>
            </div>
        </>
    )
}
