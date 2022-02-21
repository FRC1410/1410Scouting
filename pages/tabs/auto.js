import Navbar from "../../components/Navbar"
import { useForceUpdate } from "../../helpers/Refresh"
import { getData, setData } from "/helpers/data"
import json from "../../helpers/data.json";

export default function Auto() {
    const forceUpdate = useForceUpdate()

    return (
        //TODO: Figure out how to update elements
        <>
            <Navbar page="Auto" />
            <div className="flex justify-center py-4">
                <button className={"w-5/6 py-2 rounded text-white text-3xl font-bold hover:bg-emerald-200 " + (getData("auto", "var1") ? "bg-teal-600 active:bg-emerald-600" : "bg-emerald-600 active:bg-teal-600")} onClick={() => {setData("auto", "var1", !getData("auto", "var1")); forceUpdate()}}>Robot Left the Tarmac</button>
            </div>
            <h1 className="flex justify-center py-2 text-white text-3xl font-bold">Low Hub Scored</h1>
            <div className="flex flex-row justify-evenly pb-5">
                <button className="basis-1/4 rounded-full bg-blue-500 text-white text-7xl font-bold hover:bg-blue-200 active:bg-blue-400" onClick={() => {setData("auto", "var2", getData("auto", "var2") - 1); forceUpdate()}}>-</button>
                <h1 className="basis-1/5 text-center text-white text-8xl font-bold">{getData("auto", "var2")}</h1>
                <button className="basis-1/4 rounded-full bg-blue-500 text-white text-7xl font-bold hover:bg-blue-200 active:bg-blue-400" onClick={() => {setData("auto", "var2", getData("auto", "var2") + 1); forceUpdate()}}>+</button>
            </div>
            <h1 className="flex justify-center py-2 text-white text-3xl font-bold">High Hub Scored</h1>
            <div className="flex flex-row justify-evenly pb-5">
                <button className="basis-1/4 rounded-full bg-blue-500 text-white text-7xl font-bold hover:bg-blue-200 active:bg-blue-400" onClick={() => {setData("auto", "var3", getData("auto", "var3") - 1); forceUpdate()}}>-</button>
                <h1 className="basis-1/5 text-center text-white text-8xl font-bold">{getData("auto", "var3")}</h1>
                <button className="basis-1/4 rounded-full bg-blue-500 text-white text-7xl font-bold hover:bg-blue-200 active:bg-blue-400" onClick={() => {setData("auto", "var3", getData("auto", "var3") + 1); forceUpdate()}}>+</button>
            </div>
            <h1 className="flex justify-center py-2 text-white text-3xl font-bold">Shots Missed</h1>
            <div className="flex flex-row justify-evenly pb-5">
                <button className="basis-1/4 rounded-full bg-blue-500 text-white text-7xl font-bold hover:bg-blue-200 active:bg-blue-400" onClick={() => {setData("auto", "var4", getData("auto", "var4") - 1); forceUpdate()}}>-</button>
                <h1 className="basis-1/5 text-center text-white text-8xl font-bold">{getData("auto", "var4")}</h1>
                <button className="basis-1/4 rounded-full bg-blue-500 text-white text-7xl font-bold hover:bg-blue-200 active:bg-blue-400" onClick={() => {setData("auto", "var4", getData("auto", "var4") + 1); forceUpdate()}}>+</button>
            </div>
        </>
    )
}