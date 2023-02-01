import Navbar from "../../components/Navbar"
import Dropdown from "../../components/Dropdown"
import { useForceUpdate } from "../../helpers/Refresh"
import { getData, setData } from "/helpers/data"
import Reset from "../../components/Reset"

export default function Pregame() {
    const forceUpdate = useForceUpdate()

    return (
        <>
            <Navbar pageNum={1} />
            <div className="flex flex-row justify-evenly py-4">
                <Dropdown output="name" />
                <input className="basis-1/3 w-1/3 rounded py-2 text-black text-2xl" onChange={(event) => setData("pregame", "match_number", event.target.value)} onClick={() => forceUpdate()} type='text' placeholder={getData("pregame", "match_number")} />
            </div>
            <div className="flex justify-center py-4">
                <Dropdown output="team_number" />
            </div>
            <h1 className="flex justify-center py-2 pt-4 text-white text-3xl font-bold">Alliance Position</h1>
            <div className="flex flex-row justify-evenly py-4">
                <button className={"basis-1/3 py-2 rounded text-white text-7xl font-bold background-color:bg-red-600 " + (getData("pregame", "alliance_position") === "R1" ? "bg-red-400 active:bg-red-600" : "bg-red-600 active:bg-red-400")} onClick={() => {setData("pregame", "alliance_position", "R1"); forceUpdate(); getData("pregame", "name")}}>R1</button>
                <button className={"basis-1/3 py-2 rounded text-white text-7xl font-bold background-color:bg-blue-600 " + (getData("pregame", "alliance_position") === "B1" ? "bg-blue-400 active:bg-blue-600" : "bg-blue-600 active:bg-blue-400")} onClick={() => {setData("pregame", "alliance_position", "B1"); forceUpdate()}}>B1</button>
            </div>
            <div className="flex flex-row justify-evenly py-4">
                <button className={"basis-1/3 py-2 rounded text-white text-7xl font-bold background-color:bg-red-600 " + (getData("pregame", "alliance_position") === "R2" ? "bg-red-400 active:bg-red-600" : "bg-red-600 active:bg-red-400")} onClick={() => {setData("pregame", "alliance_position", "R2"); forceUpdate()}}>R2</button>
                <button className={"basis-1/3 py-2 rounded text-white text-7xl font-bold background-color:bg-blue-600 " + (getData("pregame", "alliance_position") === "B2" ? "bg-blue-400 active:bg-blue-600" : "bg-blue-600 active:bg-blue-400")} onClick={() => {setData("pregame", "alliance_position", "B2"); forceUpdate()}}>B2</button>
            </div>
            <div className="flex flex-row justify-evenly py-4">
                <button className={"basis-1/3 py-2 rounded text-white text-7xl font-bold background-color:bg-red-600 " + (getData("pregame", "alliance_position") === "R3" ? "bg-red-400 active:bg-red-600" : "bg-red-600 active:bg-red-400")} onClick={() => {setData("pregame", "alliance_position", "R3"); forceUpdate()}}>R3</button>
                <button className={"basis-1/3 py-2 rounded text-white text-7xl font-bold background-color:bg-blue-600 " + (getData("pregame", "alliance_position") === "B3" ? "bg-blue-400 active:bg-blue-600" : "bg-blue-600 active:bg-blue-400")} onClick={() => {setData("pregame", "alliance_position", "B3"); forceUpdate()}}>B3</button>
            </div>
            <div>
                <Reset />
            </div>
        </>
    )
}