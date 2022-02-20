import { data } from "../../helpers/data"
import Navbar from "../../components/Navbar";
import { useForceUpdate } from "../../helpers/Refresh";

export default function Auto() {
    const forceUpdate = useForceUpdate()

    return (
        //TODO: Figure out how to update elements
        <>
            <Navbar page="Auto" />
            <div className="flex justify-center py-4">
                <button className={"w-5/6 py-2 rounded text-white text-3xl font-bold hover:bg-blue-200 " + (data.autonomous.var1 ? "bg-blue-400 active:bg-blue-500" : "bg-blue-500 active:bg-blue-400")} onClick={() => {data.autonomous.var1 = !data.autonomous.var1; forceUpdate()}}>Robot Left the Tarmac</button>
            </div>
            <h1 className="flex justify-center py-2 text-white text-3xl font-bold">Low Hub Scored</h1>
            <div className="flex flex-row justify-evenly pb-5">
                <button className="basis-1/4 rounded-full bg-blue-500 text-white text-7xl font-bold hover:bg-blue-200 active:bg-blue-400" onClick={() => {data.autonomous.var2++; forceUpdate()}}>+</button>
                <h1 className="basis-1/5 text-center text-white text-8xl font-bold">{data.autonomous.var2}</h1>
                <button className="basis-1/4 rounded-full bg-blue-500 text-white text-7xl font-bold hover:bg-blue-200 active:bg-blue-400" onClick={() => {data.autonomous.var2--; forceUpdate()}}>-</button>
            </div>
            <h1 className="flex justify-center py-2 text-white text-3xl font-bold">High Hub Scored</h1>
            <div className="flex flex-row justify-evenly pb-5">
                <button className="basis-1/4 rounded-full bg-blue-500 text-white text-7xl font-bold hover:bg-blue-200 active:bg-blue-400" onClick={() => {data.autonomous.var3++; forceUpdate()}}>+</button>
                <h1 className="basis-1/5 text-center text-white text-8xl font-bold">{data.autonomous.var3}</h1>
                <button className="basis-1/4 rounded-full bg-blue-500 text-white text-7xl font-bold hover:bg-blue-200 active:bg-blue-400" onClick={() => {data.autonomous.var3--; forceUpdate()}}>-</button>
            </div>
            <h1 className="flex justify-center py-2 text-white text-3xl font-bold">Shots Missed</h1>
            <div className="flex flex-row justify-evenly pb-5">
                <button className="basis-1/4 rounded-full bg-blue-500 text-white text-7xl font-bold hover:bg-blue-200 active:bg-blue-400" onClick={() => {data.autonomous.var4++; forceUpdate()}}>+</button>
                <h1 className="basis-1/5 text-center text-white text-8xl font-bold">{data.autonomous.var4}</h1>
                <button className="basis-1/4 rounded-full bg-blue-500 text-white text-7xl font-bold hover:bg-blue-200 active:bg-blue-400" onClick={() => {data.autonomous.var4--; forceUpdate()}}>-</button>
            </div>
        </>
    )
}