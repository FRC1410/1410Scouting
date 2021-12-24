import { data } from "../../helpers/data"
import Dropdown from 'react-dropdown'

export default function Endgame() {
    return (
        <div className='Page'>
            <Dropdown onChange={(value) => data.endgame.var1 = value.value} options={['Climbed', 'Parked', 'None of the Above']} placeholder="Select an Endgame State" />
            <Dropdown onChange={(value) => data.endgame.var2 = value.value} options={['Balanced', 'Did Not Balance']} placeholder="Select a Balancing State" />
        </div>
    )
}