import Navbar from "../../components/Navbar"
import { useForceUpdate } from "../../helpers/Refresh"
import { getData, setData } from "/helpers/data"
import json from "../../helpers/data.json";

export default function Auto() {
    const forceUpdate = useForceUpdate()

    return (
        <>
            <Navbar page="Auto" />
            <div className="flex justify-center py-4">
                <button className={"w-5/6 py-2 rounded text-white text-3xl font-bold background-color:bg-emerald-600 " + (getData("auto", "var1") ? "bg-gray-400 active:bg-emerald-600" : "bg-emerald-600 active:bg-gray-400")} onClick={() => {setData("auto", "var1", !getData("auto", "var1")); forceUpdate()}}>Robot Left the Community</button>
            </div>
            <h1 className="flex justify-center py-2 text-white text-3xl font-bold">Pieces scored on high nodes</h1>
            <div className="flex flex-row justify-evenly pb-5">
                <button className="basis-1/4 rounded-full bg-emerald-600 text-white text-7xl font-bold background-color:bg-emerald-600 active:bg-gray-400" onClick={() => {setData("auto", "var2", getData("auto", "var2") - 1); forceUpdate()}}>-</button>
                <h1 className="basis-1/5 text-center text-white text-8xl font-bold">{getData("auto", "var2")}</h1>
                <button className="basis-1/4 rounded-full bg-emerald-600 text-white text-7xl font-bold background-color:bg-emerald-600 active:bg-gray-400" onClick={() => {setData("auto", "var2", getData("auto", "var2") + 1); forceUpdate()}}>+</button>
            </div>
            <h1 className="flex justify-center py-2 text-white text-3xl font-bold">Pieces scored on middle nodes</h1>
            <div className="flex flex-row justify-evenly pb-5">
                <button className="basis-1/4 rounded-full bg-emerald-600 text-white text-7xl font-bold background-color:bg-emerald-600 active:bg-gray-400" onClick={() => {setData("auto", "var3", getData("auto", "var3") - 1); forceUpdate()}}>-</button>
                <h1 className="basis-1/5 text-center text-white text-8xl font-bold">{getData("auto", "var3")}</h1>
                <button className="basis-1/4 rounded-full bg-emerald-600 text-white text-7xl font-bold background-color:bg-emerald-600 active:bg-gray-400" onClick={() => {setData("auto", "var3", getData("auto", "var3") + 1); forceUpdate()}}>+</button>
            </div>
            <h1 className="flex justify-center py-2 text-white text-3xl font-bold">Pieces scored on hybrid nodes</h1>
            <div className="flex flex-row justify-evenly pb-5">
                <button className="basis-1/4 rounded-full bg-emerald-600 text-white text-7xl font-bold background-color:bg-emerald-600 active:bg-gray-400" onClick={() => {setData("auto", "var4", getData("auto", "var4") - 1); forceUpdate()}}>-</button>
                <h1 className="basis-1/5 text-center text-white text-8xl font-bold">{getData("auto", "var4")}</h1>
                <button className="basis-1/4 rounded-full bg-emerald-600 text-white text-7xl font-bold background-color:bg-emerald-600 active:bg-gray-400" onClick={() => {setData("auto", "var4", getData("auto", "var4") + 1); forceUpdate()}}>+</button>
            </div>
            <div className="flex flex-row justify-evenly py-4">
                <button className={"w-5/6 py-2 rounded text-white text-3xl font-bold background-color:bg-emerald-600 " + (getData("auto", "var5") ? "bg-gray-400 active:bg-emerald-600" : "bg-emerald-600 active:bg-gray-400")} onClick={() => {setData("auto", "var1", !getData("auto", "var5")); forceUpdate()}}>Robot was Engaged</button>
            </div>
        </>
    )
}
