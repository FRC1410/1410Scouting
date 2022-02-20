import { data } from "../../helpers/data"
import Dropdown from 'react-dropdown'
import json from '/public/config.json'
import Navbar from "../../components/Navbar";

export default function Pregame() {
    return (
        <>
            <Navbar page="Pregame" />
            <div className="flex flex-row">
                <input className="static basis-1/2" onChange={(event) => data.pregame.name = event.target.value} type='text' placeholder='Scout First Name' />
                <Dropdown className="static basis-1/2" onChange={(value) => data.pregame.team_number = value.value} options={json.team_numbers} placeholder="Select a Team Number" />
            </div>
            <div className="flex flex-row">
                <input className="static basis-full" onChange={(event) => data.pregame.name = event.target.value} type='text' placeholder='Match Number' />
            </div>
        </>
    )
}