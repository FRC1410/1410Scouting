import Navbar from "../../components/Navbar"
import { useForceUpdate } from "../../helpers/Refresh"
import { getData, setData } from "../../helpers/data"

export default function Endgame() {
    const forceUpdate = useForceUpdate()

    return (
        <>
            <Navbar page="Endgame" />
            <div className="flex justify-center py-4">
                <button className={"w-5/6 py-2 rounded text-white text-3xl font-bold background-color:bg-emerald-600 " + (getData("endgame", "var1") === "Did not attempt" ? "bg-gray-400 active:bg-emerald-600" : "bg-emerald-600 active:bg-gray-400")} onClick={() => {setData("endgame", "var1", "Did not attempt"); forceUpdate()}}>No Climb Attempted</button>
            </div>
            <div className="flex justify-center py-4">
                <button className={"w-5/6 py-2 rounded text-white text-3xl font-bold background-color:bg-emerald-600 " + (getData("endgame", "var1") === "Failed attempt" ? "bg-gray-400 active:bg-emerald-600" : "bg-emerald-600 active:bg-gray-400")} onClick={() => {setData("endgame", "var1", "Failed attempt"); forceUpdate()}}>Climb Failed</button>
            </div>
            <div className="flex justify-center py-4">
                <button className={"w-5/6 py-2 rounded text-white text-3xl font-bold background-color:bg-emerald-600 " + (getData("endgame", "var2") ? "bg-gray-400 active:bg-emerald-600" : "bg-emerald-600 active:bg-gray-400")} onClick={() => {setData("endgame", "var2", !getData("endgame", "var2")); forceUpdate()}}>Climbed Successfully</button>
            </div>
            <div>
                <div className={"flex flex-row justify-evenly py-4 " + (getData("endgame", "var2") ? "visible" : "invisible")}>
                    <button className={"basis-1/3 py-2 rounded text-white text-2xl font-bold background-color:bg-emerald-600 " + (getData("endgame", "var1") === "Low bar climb" ? "bg-gray-400 active:bg-emerald-600" : "bg-emerald-600 active:bg-gray-400")} onClick={() => {setData("endgame", "var1", "Low bar climb"); forceUpdate()}}>Low</button>
                    <button className={"basis-1/3 py-2 rounded text-white text-2xl font-bold background-color:bg-emerald-600 " + (getData("endgame", "var1") === "Mid bar climb" ? "bg-gray-400 active:bg-emerald-600" : "bg-emerald-600 active:bg-gray-400")} onClick={() => {setData("endgame", "var1", "Mid bar climb"); forceUpdate()}}>Mid</button>
                </div>
                <div className={"flex flex-row justify-evenly " + (getData("endgame", "var2") ? "visible" : "invisible")}>
                    <button className={"basis-1/3 py-2 rounded text-white text-2xl font-bold background-color:bg-emerald-600 " + (getData("endgame", "var1") === "High bar climb" ? "bg-gray-400 active:bg-emerald-600" : "bg-emerald-600 active:bg-gray-400")} onClick={() => {setData("endgame", "var1", "High bar climb"); forceUpdate()}}>High</button>
                    <button className={"basis-1/3 py-2 rounded text-white text-2xl font-bold background-color:bg-emerald-600 " + (getData("endgame", "var1") === "Traversal bar climb" ? "bg-gray-400 active:bg-emerald-600" : "bg-emerald-600 active:bg-gray-400")} onClick={() => {setData("endgame", "var1", "Traversal bar climb"); forceUpdate()}}>Traversal</button>
                </div>
            </div>
        </>
    )
}
