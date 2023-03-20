import Navbar from "../../components/Navbar"
import { useForceUpdate } from "../../helpers/Refresh"
import { getData, setData } from "/helpers/data"

export default function Teleop() {
    const forceUpdate = useForceUpdate()

    return (
        <>
            <Navbar pageNum={3} />
            <div className="flex flex-row justify-evenly">
                <h1 className="basis-1/2 text-center text-white text-2xl font-bold">Cones</h1>
                <h1 className="basis-1/2 text-center text-white text-2xl font-bold">Cubes</h1>
            </div>
            <div className="flex flex-row justify-evenly">
                <h1 className="flex text-center justify-center text-white text-2xl font-bold">High</h1>
            </div>
            <div className="flex flex-row justify-evenly">
                <button className="basis-1/12 rounded-full bg-emerald-600 text-white text-4xl font-bold background-color:bg-emerald-600 active:bg-emerald-900" onClick={() => {setData("teleop", "High Cone Teleop", getData("teleop", "High Cone Teleop") - 1); forceUpdate()}}>-</button>
                <h1 className="basis-1/12 text-center py-4 text-white text-3xl font-bold">{getData("teleop", "High Cone Teleop")}</h1>
                <button className="basis-1/12 rounded-full bg-emerald-600 text-white text-3xl font-bold background-color:bg-emerald-600 active:bg-emerald-900" onClick={() => {setData("teleop", "High Cone Teleop", getData("teleop", "High Cone Teleop") + 1); forceUpdate()}}>+</button>
                <button className="basis-1/12 rounded-full bg-emerald-600 text-white text-3xl font-bold background-color:bg-emerald-600 active:bg-emerald-900" onClick={() => {setData("teleop", "High Cube Teleop", getData("teleop", "High Cube Teleop") - 1); forceUpdate()}}>-</button>
                <h1 className="basis-1/12 text-center py-4 text-white text-3xl font-bold">{getData("teleop", "High Cube Teleop")}</h1>
                <button className="basis-1/12 rounded-full bg-emerald-600 text-white text-3xl font-bold background-color:bg-emerald-600 active:bg-emerald-900" onClick={() => {setData("teleop", "High Cube Teleop", getData("teleop", "High Cube Teleop") + 1); forceUpdate()}}>+</button>
            </div>
            <h1 className="flex text-center justify-center text-white text-2xl font-bold">Mid</h1>
            <div className="flex flex-row justify-evenly">
                <button className="basis-1/12 rounded-full bg-emerald-600 text-white text-3xl font-bold background-color:bg-emerald-600 active:bg-emerald-900" onClick={() => {setData("teleop", "Mid Cone Teleop", getData("teleop", "Mid Cone Teleop") - 1); forceUpdate()}}>-</button>
                <h1 className="basis-1/12 text-center py-4 text-white text-3xl font-bold">{getData("teleop", "Mid Cone Teleop")}</h1>
                <button className="basis-1/12 rounded-full bg-emerald-600 text-white text-3xl font-bold background-color:bg-emerald-600 active:bg-emerald-900" onClick={() => {setData("teleop", "Mid Cone Teleop", getData("teleop", "Mid Cone Teleop") + 1); forceUpdate()}}>+</button>
                <button className="basis-1/12 rounded-full bg-emerald-600 text-white text-3xl font-bold background-color:bg-emerald-600 active:bg-emerald-900" onClick={() => {setData("teleop", "Mid Cube Teleop", getData("teleop", "Mid Cube Teleop") - 1); forceUpdate()}}>-</button>
                <h1 className="basis-1/12 text-center py-4 text-white text-3xl font-bold">{getData("teleop", "Mid Cube Teleop")}</h1>
                <button className="basis-1/12 rounded-full bg-emerald-600 text-white text-3xl font-bold background-color:bg-emerald-600 active:bg-emerald-900" onClick={() => {setData("teleop", "Mid Cube Teleop", getData("teleop", "Mid Cube Teleop") + 1); forceUpdate()}}>+</button>
            </div>
            <h1 className="flex text-center justify-center text-white text-2xl font-bold">Hybrid</h1>
            <div className="flex flex-row justify-evenly">
                <button className="basis-1/12 rounded-full bg-emerald-600 text-white text-3xl font-bold background-color:bg-emerald-600 active:bg-emerald-900" onClick={() => {setData("teleop", "Hybrid Cone Teleop", getData("teleop", "Hybrid Cone Teleop") - 1); forceUpdate()}}>-</button>
                <h1 className="basis-1/12 text-center py-4 text-white text-3xl font-bold">{getData("teleop", "Hybrid Cone Teleop")}</h1>
                <button className="basis-1/12 rounded-full bg-emerald-600 text-white text-3xl font-bold background-color:bg-emerald-600 active:bg-emerald-900" onClick={() => {setData("teleop", "Hybrid Cone Teleop", getData("teleop", "Hybrid Cone Teleop") + 1); forceUpdate()}}>+</button>
                <button className="basis-1/12 rounded-full bg-emerald-600 text-white text-3xl font-bold background-color:bg-emerald-600 active:bg-emerald-900" onClick={() => {setData("teleop", "Hybrid Cube Teleop", getData("teleop", "Hybrid Cube Teleop") - 1); forceUpdate()}}>-</button>
                <h1 className="basis-1/12 text-center py-4 text-white text-3xl font-bold">{getData("teleop", "Hybrid Cube Teleop")}</h1>
                <button className="basis-1/12 rounded-full bg-emerald-600 text-white text-3xl font-bold background-color:bg-emerald-600 active:bg-emerald-900" onClick={() => {setData("teleop", "Hybrid Cube Teleop", getData("teleop", "Hybrid Cube Teleop") + 1); forceUpdate()}}>+</button>
            </div>
            <div className="flex flex-row justify-evenly py-2">
                <button className={"basis-1/4 py-2 rounded text-white text-1xl font-bold background-color:bg-emerald-600 " + (getData("teleop", "Played Defense") ? "bg-emerald-900 active:bg-emerald-600" : "bg-emerald-600 active:bg-emerald-900")} onClick={() => {setData("teleop", "Played Defense", !getData("teleop", "Played Defense")); forceUpdate()}}>Played Defense</button>
                <button className={"basis-1/4 py-2 rounded text-white text-1xl font-bold background-color:bg-emerald-600 " + (getData("teleop", "Was Defended") ? "bg-emerald-900 active:bg-emerald-600" : "bg-emerald-600 active:bg-emerald-900")} onClick={() => {setData("teleop", "Was Defended", !getData("teleop", "Was Defended")); forceUpdate()}}>Was Defended</button>
                <button className={"basis-1/4 py-2 rounded text-white text-1xl font-bold background-color:bg-emerald-600 " + (getData("teleop", "Docked Teleop") ? "bg-emerald-900 active:bg-emerald-600" : "bg-emerald-600 active:bg-emerald-900")} onClick={() => {setData("teleop", "Docked Teleop", !getData("teleop", "Docked Teleop")); forceUpdate()}}>Did they Dock?</button>
            </div>
            <div className="flex flex-row justify-evenly py-2">
                <button className={"basis-1/4 py-2 rounded text-white text-1xl font-bold background-color:bg-emerald-600 " + (getData("teleop", "Dead on Field") ? "bg-emerald-900 active:bg-emerald-600" : "bg-emerald-600 active:bg-emerald-900")} onClick={() => {setData("teleop", "Dead on Field", !getData("teleop", "Dead on Field")); forceUpdate()}}>+15 sec Dead on Field</button>
                <button className={"basis-1/4 py-2 rounded text-white text-1xl font-bold background-color:bg-emerald-600 " + (getData("teleop", "2+ Fouls") ? "bg-emerald-900 active:bg-emerald-600" : "bg-emerald-600 active:bg-emerald-900")} onClick={() => {setData("teleop", "2+ Fouls", !getData("teleop", "2+ Fouls")); forceUpdate()}}>2+ Fouls</button>
                <button className={"basis-1/4 py-2 rounded text-white text-1xl font-bold background-color:bg-emerald-600 " + (getData("teleop", "Engaged Teleop") ? "bg-emerald-900 active:bg-emerald-600" : "bg-emerald-600 active:bg-emerald-900")} onClick={() => {setData("teleop", "Engaged Teleop", !getData("teleop", "Engaged Teleop")); forceUpdate()}}>Did they Engage?</button>
            </div>
        </>
    )
}
