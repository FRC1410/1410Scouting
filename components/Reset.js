import {resetData} from "../helpers/data"

function returnPregame(){
    var newPagefrc = '/scouting/tabs/pregame' 
    var newPagelocal = '/tabs/pregame'
    var ogPage = location.origin
    if (location.origin == 'frc1410.org'){
        window.location.replace(ogPage + newPagefrc)
    }
    else{
        window.location.replace(ogPage + newPagelocal)
    }
}

export default function Reset() {
    return (
        <div className="flex justify-center py-4">
            <button className="w-5/6 py-2 rounded text-white text-3xl font-bold bg-emerald-600 backround-color:bg-emerald-600 active:bg-violet-600" onClick={() => { resetData(); returnPregame(); }}>Reset</button>
        </div>
    )
}