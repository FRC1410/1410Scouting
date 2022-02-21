import config from "../public/config.json"
import { setData } from "/helpers/data"

export default function Dropdown() {
    return (
        <select className="basis-1/3 rounded w-1 py-2 bg-emerald-600 text-2xl text-center font-bold" onChange={event => setData("pregame", "team_number", event.target.value)}>
            <option value="Default">
                Team #
            </option>
            {config.team_numbers.map(item => (
                <option value={item}>
                    {item}
                </option>
            ))}
        </select>
    )
}