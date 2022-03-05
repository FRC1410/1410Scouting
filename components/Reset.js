import {resetData} from "../helpers/data"

function returnPregame(){
    const newPageFRC = '/scouting/tabs/pregame';
    const newPageLocal = '/tabs/pregame';
    const ogPage = location.origin;
    if (location.origin === 'frc1410.org'){
        window.location.replace(ogPage + newPageFRC)
    }
    else{
        window.location.replace(ogPage + newPageLocal)
    }
}

export default function Reset() {
    return (
        <div className="flex justify-center py-4">
            <button className="w-5/6 py-2 rounded text-white text-3xl font-bold bg-emerald-600 background-color:bg-emerald-600 active:bg-gray-400" onClick={() => { resetData(); returnPregame(); }}>Reset</button>
        </div>
    )
}