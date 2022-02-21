import Navbar from "../../components/Navbar"
import { useForceUpdate } from "../../helpers/Refresh"
import { getData, setData } from "/helpers/data"

export default function Endgame() {
    const forceUpdate = useForceUpdate()

    return (
        <>
            <Navbar page="Endgame" />
            <div className="flex justify-center py-4">
                <button className={"w-5/6 py-2 rounded text-white text-3xl font-bold hover:bg-blue-200 " + (getData("endgame", "var1") ? "bg-blue-400 active:bg-blue-500" : "bg-blue-500 active:bg-blue-400")} onClick={() => {setData("endgame", "var1", !getData("endgame", "var1")); forceUpdate()}}>No Climb Attempted</button>
            </div>
            <div className="flex justify-center py-4">
                <button className={"w-5/6 py-2 rounded text-white text-3xl font-bold hover:bg-blue-200 " + (getData("endgame", "var2") ? "bg-blue-400 active:bg-blue-500" : "bg-blue-500 active:bg-blue-400")} onClick={() => {setData("endgame", "var2", !getData("endgame", "var2")); forceUpdate()}}>Climb Failed</button>
            </div>
            <div className="flex justify-center py-4">
                <button className={"w-5/6 py-2 rounded text-white text-3xl font-bold hover:bg-blue-200 " + (getData("endgame", "var3") ? "bg-blue-400 active:bg-blue-500" : "bg-blue-500 active:bg-blue-400")} onClick={() => {setData("endgame", "var3", !getData("endgame", "var3")); forceUpdate()}}>Climbed Successfully</button>
            </div>
            <div>
                <div className={"flex flex-row justify-evenly py-4 " + (getData("endgame", "var3") ? "visible" : "invisible")}>
                    <button className={"basis-1/3 py-2 rounded text-white text-2xl font-bold hover:bg-blue-200 " + (getData("endgame", "var4") === "Low" ? "bg-blue-400 active:bg-blue-500" : "bg-blue-500 active:bg-blue-400")} onClick={() => {setData("endgame", "var4", "Low"); forceUpdate()}}>Low</button>
                    <button className={"basis-1/3 py-2 rounded text-white text-2xl font-bold hover:bg-blue-200 " + (getData("endgame", "var4") === "Mid" ? "bg-blue-400 active:bg-blue-500" : "bg-blue-500 active:bg-blue-400")} onClick={() => {setData("endgame", "var4", "Mid"); forceUpdate()}}>Mid</button>
                </div>
                <div className={"flex flex-row justify-evenly " + (getData("endgame", "var3") ? "visible" : "invisible")}>
                    <button className={"basis-1/3 py-2 rounded text-white text-2xl font-bold hover:bg-blue-200 " + (getData("endgame", "var4") === "High" ? "bg-blue-400 active:bg-blue-500" : "bg-blue-500 active:bg-blue-400")} onClick={() => {setData("endgame", "var4", "High"); forceUpdate()}}>High</button>
                    <button className={"basis-1/3 py-2 rounded text-white text-2xl font-bold hover:bg-blue-200 " + (getData("endgame", "var4") === "Traversal" ? "bg-blue-400 active:bg-blue-500" : "bg-blue-500 active:bg-blue-400")} onClick={() => {setData("endgame", "var4", "Traversal"); forceUpdate()}}>Traversal</button>
                </div>
            </div>
        </>
    )
}