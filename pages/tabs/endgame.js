import Navbar from "../../components/Navbar"
import { useForceUpdate } from "../../helpers/Refresh"
import { getData, setData } from "/helpers/data"

export default function Endgame() {
    const forceUpdate = useForceUpdate()

    return (
        <>
            <Navbar page="Endgame" />
            <div className="flex justify-center py-4">
                <button className={"w-5/6 py-2 rounded text-white text-3xl font-bold background-color:bg-emerald-600 " + (getData("endgame", "var1") ? "bg-violet-600 active:bg-emerald-600" : "bg-emerald-600 active:bg-violet-600")} onClick={() => {setData("endgame", "var1", !getData("endgame", "var1")); forceUpdate()}}>No Climb Attempted</button>
            </div>
            <div className="flex justify-center py-4">
                <button className={"w-5/6 py-2 rounded text-white text-3xl font-bold background-color:bg-emerald-600 " + (getData("endgame", "var2") ? "bg-violet-600 active:bg-emerald-600" : "bg-emerald-600 active:bg-violet-600")} onClick={() => {setData("endgame", "var2", !getData("endgame", "var2")); forceUpdate()}}>Climb Failed</button>
            </div>
            <div className="flex justify-center py-4">
                <button className={"w-5/6 py-2 rounded text-white text-3xl font-bold background-color:bg-emerald-600 " + (getData("endgame", "var3") ? "bg-violet-600 active:bg-emerald-600" : "bg-emerald-600 active:bg-violet-600")} onClick={() => {setData("endgame", "var3", !getData("endgame", "var3")); forceUpdate()}}>Climbed Successfully</button>
            </div>
            <div>
                <div className={"flex flex-row justify-evenly py-4 " + (getData("endgame", "var3") ? "visible" : "invisible")}>
                    <button className={"basis-1/3 py-2 rounded text-white text-2xl font-bold background-color:bg-emerald-600 " + (getData("endgame", "var4") === "Low" ? "bg-violet-600 active:bg-emerald-600" : "bg-emerald-600 active:bg-violet-600")} onClick={() => {setData("endgame", "var4", "Low"); forceUpdate()}}>Low</button>
                    <button className={"basis-1/3 py-2 rounded text-white text-2xl font-bold background-color:bg-emerald-600 " + (getData("endgame", "var4") === "Mid" ? "bg-violet-600 active:bg-emerald-600" : "bg-emerald-600 active:bg-violet-600")} onClick={() => {setData("endgame", "var4", "Mid"); forceUpdate()}}>Mid</button>
                </div>
                <div className={"flex flex-row justify-evenly " + (getData("endgame", "var3") ? "visible" : "invisible")}>
                    <button className={"basis-1/3 py-2 rounded text-white text-2xl font-bold background-color:bg-emerald-600 " + (getData("endgame", "var4") === "High" ? "bg-violet-600 active:bg-emerald-600" : "bg-emerald-600 active:bg-violet-600")} onClick={() => {setData("endgame", "var4", "High"); forceUpdate()}}>High</button>
                    <button className={"basis-1/3 py-2 rounded text-white text-2xl font-bold background-color:bg-emerald-600 " + (getData("endgame", "var4") === "Traversal" ? "bg-violet-600 active:bg-emerald-600" : "bg-emerald-600 active:bg-violet-600")} onClick={() => {setData("endgame", "var4", "Traversal"); forceUpdate()}}>Traversal</button>
                </div>
            </div>
        </>
    )
}
