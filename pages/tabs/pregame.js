import { data } from "../../helpers/data"
import Navbar from "../../components/Navbar"
import Dropdown from "../../components/Dropdown"
import { useForceUpdate } from "../../helpers/Refresh";

export default function Pregame() {
    const forceUpdate = useForceUpdate()

    return (
        <>
            <Navbar page="Pregame" />
            <div className="flex flex-row justify-evenly py-4">
                <input className="basis-1/3 w-1/3 rounded py-2 text-black text-2xl" onChange={(event) => data.pregame.name = event.target.value} type='text' placeholder='Name' />
                <Dropdown />
            </div>
            <div className="flex justify-center py-4">
                <input className="w-1/3 rounded py-2 text-black text-2xl" onChange={(event) => data.pregame.match_number = event.target.value} type='text' placeholder='Match #' />
            </div>
            <h1 className="flex justify-center py-2 pt-4 text-white text-3xl font-bold">Alliance Position</h1>
            <div className="flex flex-row justify-evenly py-4">
                <button className={"basis-1/3 py-2 rounded text-white text-7xl font-bold hover:bg-blue-200 " + (data.pregame.alliance_position === "R1" ? "bg-blue-400 active:bg-blue-500" : "bg-blue-500 active:bg-blue-400")} onClick={() => {data.pregame.alliance_position = "R1"; forceUpdate()}}>R1</button>
                <button className={"basis-1/3 py-2 rounded text-white text-7xl font-bold hover:bg-blue-200 " + (data.pregame.alliance_position === "B1" ? "bg-blue-400 active:bg-blue-500" : "bg-blue-500 active:bg-blue-400")} onClick={() => {data.pregame.alliance_position = "B1"; forceUpdate()}}>B1</button>
            </div>
            <div className="flex flex-row justify-evenly py-4">
                <button className={"basis-1/3 py-2 rounded text-white text-7xl font-bold hover:bg-blue-200 " + (data.pregame.alliance_position === "R2" ? "bg-blue-400 active:bg-blue-500" : "bg-blue-500 active:bg-blue-400")} onClick={() => {data.pregame.alliance_position = "R2"; forceUpdate()}}>R2</button>
                <button className={"basis-1/3 py-2 rounded text-white text-7xl font-bold hover:bg-blue-200 " + (data.pregame.alliance_position === "B2" ? "bg-blue-400 active:bg-blue-500" : "bg-blue-500 active:bg-blue-400")} onClick={() => {data.pregame.alliance_position = "B2"; forceUpdate()}}>B2</button>
            </div>
            <div className="flex flex-row justify-evenly py-4">
                <button className={"basis-1/3 py-2 rounded text-white text-7xl font-bold hover:bg-blue-200 " + (data.pregame.alliance_position === "R3" ? "bg-blue-400 active:bg-blue-500" : "bg-blue-500 active:bg-blue-400")} onClick={() => {data.pregame.alliance_position = "R3"; forceUpdate()}}>R3</button>
                <button className={"basis-1/3 py-2 rounded text-white text-7xl font-bold hover:bg-blue-200 " + (data.pregame.alliance_position === "B3" ? "bg-blue-400 active:bg-blue-500" : "bg-blue-500 active:bg-blue-400")} onClick={() => {data.pregame.alliance_position = "B3"; forceUpdate()}}>B3</button>
            </div>
        </>
    )
}