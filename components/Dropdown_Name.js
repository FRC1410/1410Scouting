import config from "../public/config.json"
import { setData } from "/helpers/data"

export default function Dropdown_Name() {
    return (
        <select className="basis-1/3 rounded w-1 py-2 bg-emerald-600 text-2xl text-center font-bold" onChange={event => setData("pregame", "name", event.target.value)}>
            <option value="Default">
                Name
            </option>
            {config.names.map(item => (
                <option value={item}>
                    {item}
                </option>
            ))}
        </select>
    )
}