import {resetData} from "../helpers/data"

export default function Reset() {
    return (
        <div className="flex justify-center py-4">
            <button className="w-5/6 py-2 rounded text-white text-3xl font-bold bg-emerald-600 backround-color:bg-emerald-600 active:bg-violet-600" onClick={() => { resetData(); window.location.assign("http://frc1410.org/scouting/tabs/pregame"); }}>Reset</button>
        </div>
    )
}