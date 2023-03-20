import Navbar from "../../components/Navbar"
import { useForceUpdate } from "../../helpers/Refresh"
import { getData, setData } from "/helpers/data"
import json from "../../helpers/data.json";

export default function Auto() {
    const forceUpdate = useForceUpdate()

    return (
        <>
        <Navbar pageNum={2} />
            <div className="flex justify-center">
                <button className={"w-5/6 rounded text-white text-2xl font-bold " + (getData("auto", "Robot Left Community?") ? "bg-emerald-900 active:bg-emerald-600" : "bg-emerald-600 active:bg-emerald-900")} onClick={() => {setData("auto", "Robot Left Community?", !getData("auto", "Robot Left Community?")); forceUpdate()}}>Robot Left the Community</button>
            </div>
            <div className="flex flex-row justify-evenly">
                <h1 className="basis-1/2 text-center text-white text-2xl font-bold">Cones</h1>
                <h1 className="basis-1/2 text-center text-white text-2xl font-bold">Cubes</h1>
            </div>
            <div className="flex flex-row justify-evenly">
                <h1 className="flex text-center justify-center text-white text-2xl font-bold">High</h1>
            </div>
            <div className="flex flex-row justify-evenly">
                <button className="basis-1/12 rounded-full bg-emerald-600 text-white text-4xl font-bold background-color:bg-emerald-600 active:bg-emerald-900" onClick={() => {setData("auto", "High Cone Auto", getData("auto", "High Cone Auto") - 1); forceUpdate()}}>-</button>
                <h1 className="basis-1/12 text-center py-4 text-white text-3xl font-bold">{getData("auto", "High Cone Auto")}</h1>
                <button className="basis-1/12 rounded-full bg-emerald-600 text-white text-3xl font-bold background-color:bg-emerald-600 active:bg-emerald-900" onClick={() => {setData("auto", "High Cone Auto", getData("auto", "High Cone Auto") + 1); forceUpdate()}}>+</button>
                <button className="basis-1/12 rounded-full bg-emerald-600 text-white text-3xl font-bold background-color:bg-emerald-600 active:bg-emerald-900" onClick={() => {setData("auto", "High Cube Auto", getData("auto", "High Cube Auto") - 1); forceUpdate()}}>-</button>
                <h1 className="basis-1/12 text-center py-4 text-white text-3xl font-bold">{getData("auto", "High Cube Auto")}</h1>
                <button className="basis-1/12 rounded-full bg-emerald-600 text-white text-3xl font-bold background-color:bg-emerald-600 active:bg-emerald-900" onClick={() => {setData("auto", "High Cube Auto", getData("auto", "High Cube Auto") + 1); forceUpdate()}}>+</button>
            </div>
            <h1 className="flex text-center justify-center text-white text-2xl font-bold">Mid</h1>
            <div className="flex flex-row justify-evenly">
                <button className="basis-1/12 rounded-full bg-emerald-600 text-white text-3xl font-bold background-color:bg-emerald-600 active:bg-emerald-900" onClick={() => {setData("auto", "Mid Cone Auto", getData("auto", "Mid Cone Auto") - 1); forceUpdate()}}>-</button>
                <h1 className="basis-1/12 text-center py-4 text-white text-3xl font-bold">{getData("auto", "Mid Cone Auto")}</h1>
                <button className="basis-1/12 rounded-full bg-emerald-600 text-white text-3xl font-bold background-color:bg-emerald-600 active:bg-emerald-900" onClick={() => {setData("auto", "Mid Cone Auto", getData("auto", "Mid Cone Auto") + 1); forceUpdate()}}>+</button>
                <button className="basis-1/12 rounded-full bg-emerald-600 text-white text-3xl font-bold background-color:bg-emerald-600 active:bg-emerald-900" onClick={() => {setData("auto", "Mid Cube Auto", getData("auto", "Mid Cube Auto") - 1); forceUpdate()}}>-</button>
                <h1 className="basis-1/12 text-center py-4 text-white text-3xl font-bold">{getData("auto", "Mid Cube Auto")}</h1>
                <button className="basis-1/12 rounded-full bg-emerald-600 text-white text-3xl font-bold background-color:bg-emerald-600 active:bg-emerald-900" onClick={() => {setData("auto", "Mid Cube Auto", getData("auto", "Mid Cube Auto") + 1); forceUpdate()}}>+</button>
            </div>
            <h1 className="flex text-center justify-center text-white text-2xl font-bold">Hybrid</h1>
            <div className="flex flex-row justify-evenly">
                <button className="basis-1/12 rounded-full bg-emerald-600 text-white text-3xl font-bold background-color:bg-emerald-600 active:bg-emerald-900" onClick={() => {setData("auto", "Hybrid Cone Auto", getData("auto", "Hybrid Cone Auto") - 1); forceUpdate()}}>-</button>
                <h1 className="basis-1/12 text-center py-4 text-white text-3xl font-bold">{getData("auto", "Hybrid Cone Auto")}</h1>
                <button className="basis-1/12 rounded-full bg-emerald-600 text-white text-3xl font-bold background-color:bg-emerald-600 active:bg-emerald-900" onClick={() => {setData("auto", "Hybrid Cone Auto", getData("auto", "Hybrid Cone Auto") + 1); forceUpdate()}}>+</button>
                <button className="basis-1/12 rounded-full bg-emerald-600 text-white text-3xl font-bold background-color:bg-emerald-600 active:bg-emerald-900" onClick={() => {setData("auto", "Hybrid Cube Auto", getData("auto", "Hybrid Cube Auto") - 1); forceUpdate()}}>-</button>
                <h1 className="basis-1/12 text-center py-4 text-white text-3xl font-bold">{getData("auto", "Hybrid Cube Auto")}</h1>
                <button className="basis-1/12 rounded-full bg-emerald-600 text-white text-3xl font-bold background-color:bg-emerald-600 active:bg-emerald-900" onClick={() => {setData("auto", "Hybrid Cube Auto", getData("auto", "Hybrid Cube Auto") + 1); forceUpdate()}}>+</button>
            </div>
            <div className="flex flex-row justify-evenly pt-1">
                <button className={"w-5/12 rounded text-white text-2xl font-bold " + (getData("auto", "Docked Auto") ? "bg-emerald-900 active:bg-emerald-600" : "bg-emerald-600 active:bg-emerald-900")} onClick={() => {setData("auto", "Docked Auto", !getData("auto", "Docked Auto")); forceUpdate()}}>Did they Dock?</button>
                <button className={"w-5/12 rounded text-white text-2xl font-bold " + (getData("auto", "Engaged Auto") ? "bg-emerald-900 active:bg-emerald-600" : "bg-emerald-600 active:bg-emerald-900")} onClick={() => {setData("auto", "Engaged Auto", !getData("auto", "Engaged Auto")); forceUpdate()}}>Did they Engage?</button>
            </div>
        </>
    )
}
