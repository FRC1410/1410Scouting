import { data } from "../../helpers/data"
import Dropdown from 'react-dropdown'
import Navbar from "../../components/Navbar";

export default function Endgame() {
    return (
        <>
            <Navbar page="Endgame" />
            <div className="flex justify-center py-4">
                <button className={"w-5/6 py-2 rounded text-white text-3xl font-bold hover:bg-blue-200 " + (data.endgame.var1 ? "bg-blue-400 active:bg-blue-500" : "bg-blue-500 active:bg-blue-400")} onClick={() => data.endgame.var1 = !data.endgame.var1}>No Climb Attempted</button>
            </div>
            <div className="flex justify-center py-4">
                <button className={"w-5/6 py-2 rounded text-white text-3xl font-bold hover:bg-blue-200 " + (data.endgame.var2 ? "bg-blue-400 active:bg-blue-500" : "bg-blue-500 active:bg-blue-400")} onClick={() => data.endgame.var2 = !data.endgame.var2}>Climb Failed</button>
            </div>
            <div className="flex justify-center py-4">
                <button className={"w-5/6 py-2 rounded text-white text-3xl font-bold hover:bg-blue-200 " + (data.endgame.var3 ? "bg-blue-400 active:bg-blue-500" : "bg-blue-500 active:bg-blue-400")} onClick={() => data.endgame.var3 = !data.endgame.var3}>Climbed Successfully</button>
            </div>
            <div>
                <div className={"flex flex-row justify-evenly py-4 " + (data.endgame.var3 ? "visible" : "invisible")}>
                    <button className={"basis-1/3 py-2 rounded text-white text-2xl font-bold hover:bg-blue-200 " + (data.endgame.var4 === "Low" ? "bg-blue-400 active:bg-blue-500" : "bg-blue-500 active:bg-blue-400")} onClick={() => data.endgame.var4 = "Low"}>Low</button>
                    <button className={"basis-1/3 py-2 rounded text-white text-2xl font-bold hover:bg-blue-200 " + (data.endgame.var4 === "Mid" ? "bg-blue-400 active:bg-blue-500" : "bg-blue-500 active:bg-blue-400")} onClick={() => data.endgame.var4 = "Mid"}>Mid</button>
                </div>
                <div className={"flex flex-row justify-evenly " + (data.endgame.var3 ? "visible" : "invisible")}>
                    <button className={"basis-1/3 py-2 rounded text-white text-2xl font-bold hover:bg-blue-200 " + (data.endgame.var4 === "High" ? "bg-blue-400 active:bg-blue-500" : "bg-blue-500 active:bg-blue-400")} onClick={() => data.endgame.var4 = "High"}>High</button>
                    <button className={"basis-1/3 py-2 rounded text-white text-2xl font-bold hover:bg-blue-200 " + (data.endgame.var4 === "Traversal" ? "bg-blue-400 active:bg-blue-500" : "bg-blue-500 active:bg-blue-400")} onClick={() => data.endgame.var4 = "Traversal"}>Traversal</button>
                </div>
            </div>
        </>
    )
}