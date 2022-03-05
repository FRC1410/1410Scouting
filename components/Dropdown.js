import config from "../public/config.json"
import {getData, setData} from "/helpers/data"

export default function Dropdown({ output }) {
    if (output === "team_number") {
        return (
            <select className="basis-1/3 rounded w-1 py-2 bg-emerald-600 text-2xl text-center font-bold"
                    onChange={event => setData("pregame", "team_number", event.target.value)}>
                <option value="Default">
                    {getData("pregame", "team_number")}
                </option>
                {config.team_numbers.map(item => (
                    <option value={item}>
                        {item}
                    </option>
                ))}
            </select>
        )
    } else {
        return (
            <select className="basis-1/3 rounded w-1 py-2 bg-emerald-600 text-2xl text-center font-bold" onChange={event => setData("pregame", "name", event.target.value)}>
                <option value="Default">
                    {getData("pregame", "name")}
                </option>
                {config.names.map(item => (
                    <option value={item}>
                        {item}
                    </option>
                ))}
            </select>
        )
    }
}