import Wordbox from '../../components/Wordbox'
import Dropdown from 'react-dropdown'
import json from '/public/config.json'

export default function Pregame() {
    return (
        <div>
            <Wordbox />
            <Dropdown options={json.team_numbers} placeholder="Select an option" />
            <Dropdown options={json.team_positions} placeholder="Select an option" />
        </div>
    )
}