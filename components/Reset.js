import {resetData} from "../helpers/data"

export default function Reset() {
    return (
        <div className="flex justify-center py-4">
            <button className="w-5/6 py-2 rounded text-white text-3xl font-bold bg-emerald-600 hover:bg-emerald-200 active:bg-teal-600" onClick={() => resetData()}>Reset</button>
        </div>
    )
}