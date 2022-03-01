import Navbar from "../../components/Navbar"
import { useForceUpdate } from "../../helpers/Refresh"
import { getData, setData } from "/helpers/data"

export default function Teleop() {
    const forceUpdate = useForceUpdate()

    return (
        <>
            <Navbar page="Teleop" />
            <h1 className="flex justify-center py-2 text-white text-3xl font-bold">Low Hub Scored</h1>
            <div className="flex flex-row justify-evenly pb-5">
                <button className="basis-1/4 rounded-full bg-emerald-600 text-white text-7xl font-bold backround-color:bg-emerald-600 active:bg-violet-600" onClick={() => {setData("teleop", "var1", getData("teleop", "var1") - 1); forceUpdate()}}>-</button>
                <h1 className="basis-1/5 text-center text-white text-8xl font-bold">{getData("teleop", "var1")}</h1>
                <button className="basis-1/4 rounded-full bg-emerald-600 text-white text-7xl font-bold backround-color:bg-emerald-600 active:bg-violet-600" onClick={() => {setData("teleop", "var1", getData("teleop", "var1") + 1); forceUpdate()}}>+</button>
            </div>
            <h1 className="flex justify-center py-2 text-white text-3xl font-bold">High Hub Scored</h1>
            <div className="flex flex-row justify-evenly pb-5">
                <button className="basis-1/4 rounded-full bg-emerald-600 text-white text-7xl font-bold backround-color:bg-emerald-600 active:bg-violet-600" onClick={() => {setData("teleop", "var2", getData("teleop", "var2") - 1); forceUpdate()}}>-</button>
                <h1 className="basis-1/5 text-center text-white text-8xl font-bold">{getData("teleop", "var2")}</h1>
                <button className="basis-1/4 rounded-full bg-emerald-600 text-white text-7xl font-bold backround-color:bg-emerald-600 active:bg-violet-600" onClick={() => {setData("teleop", "var2", getData("teleop", "var2") + 1); forceUpdate()}}>+</button>
            </div>
            <h1 className="flex justify-center py-2 text-white text-3xl font-bold">Wrong Color Scored</h1>
            <div className="flex flex-row justify-evenly pb-5">
                <button className="basis-1/4 rounded-full bg-emerald-600 text-white text-7xl font-bold backround-color:bg-emerald-600 active:bg-violet-600" onClick={() => {setData("teleop", "var3", getData("teleop", "var3") - 1); forceUpdate()}}>-</button>
                <h1 className="basis-1/5 text-center text-white text-8xl font-bold">{getData("teleop", "var3")}</h1>
                <button className="basis-1/4 rounded-full bg-emerald-600 text-white text-7xl font-bold backround-color:bg-emerald-600 active:bg-violet-600" onClick={() => {setData("teleop", "var3", getData("teleop", "var3") + 1); forceUpdate()}}>+</button>
            </div>
            <div className="flex flex-row justify-evenly py-4">
                <button className={"basis-1/3 py-2 rounded text-white text-2xl font-bold backround-color:bg-emerald-600 " + (getData("teleop", "var4") ? "bg-violet-600 active:bg-emerald-600" : "bg-emerald-600 active:bg-violet-600")} onClick={() => {setData("teleop", "var4", !getData("teleop", "var4")); forceUpdate()}}>Played Defense</button>
                <button className={"basis-1/3 py-2 rounded text-white text-2xl font-bold backround-color:bg-emerald-600 " + (getData("teleop", "var5") ? "bg-violet-600 active:bg-emerald-600" : "bg-emerald-600 active:bg-violet-600")} onClick={() => {setData("teleop", "var5", !getData("teleop", "var5")); forceUpdate()}}>Was Defended</button>
            </div>
            <div className="flex flex-row justify-evenly py-4">
                <button className={"basis-1/3 py-2 rounded text-white text-2xl font-bold backround-color:bg-emerald-600 " + (getData("teleop", "var6") ? "bg-violet-600 active:bg-emerald-600" : "bg-emerald-600 active:bg-violet-600")} onClick={() => {setData("teleop", "var6", !getData("teleop", "var6")); forceUpdate()}}>+15 sec Dead on Field</button>
                <button className={"basis-1/3 py-2 rounded text-white text-2xl font-bold backround-color:bg-emerald-600 " + (getData("teleop", "var7") ? "bg-violet-600 active:bg-emerald-600" : "bg-emerald-600 active:bg-violet-600")} onClick={() => {setData("teleop", "var7", !getData("teleop", "var7")); forceUpdate()}}>2+ Fouls</button>
            </div>
        </>
    )
}
