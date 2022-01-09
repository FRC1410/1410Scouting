import { data } from "../../helpers/data"
import Button from '@mui/material/Button'
import { ButtonGroup } from "@mui/material"
import Dropdown from 'react-dropdown'

export default function Teleop() {
    return (
        <div className='Page'>
            <ButtonGroup variant='contained' color='primary' aria-label='split button' disableRipple fullWidth disableElevation>
                <Button id='1' onClick={() => {data.teleop.var1++; document.getElementById('1').innerText=`Level 1 Cells Scored: ${data.teleop.var1}`}}>Level 1 Cells Scored</Button>
                <Button style={{width: 100}} onClick={() => {data.teleop.var1--; document.getElementById('1').innerText=`Level 1 Cells Scored: ${data.teleop.var1}`}}>-</Button>
            </ButtonGroup>
            <ButtonGroup variant='contained' color='primary' aria-label='split button' disableRipple fullWidth disableElevation>
                <Button id='2' onClick={() => {data.teleop.var2++; document.getElementById('2').innerText=`Level 2 Cells Scored: ${data.teleop.var2}`}}>Level 2 Cells Scored</Button>
                <Button style={{width: 100}} onClick={() => {data.teleop.var2--; document.getElementById('2').innerText=`Level 2 Cells Scored: ${data.teleop.var2}`}}>-</Button>
            </ButtonGroup>
            <ButtonGroup variant='contained' color='secondary' aria-label='split button' disableRipple fullWidth disableElevation>
                <Button id='3' className='Missed' onClick={() => {data.teleop.var3++; document.getElementById('3').innerText=`Shots Missed: ${data.teleop.var3}`}}>Shots Missed</Button>
                <Button className='Missed' style={{width: 100}} onClick={() => {data.teleop.var3--; document.getElementById('3').innerText=`Shots Missed: ${data.teleop.var3}`}}>-</Button>
            </ButtonGroup>
            <Dropdown onChange={(value) => data.teleop.var4 = value.value} options={['Completed', 'Did Not Complete']} placeholder="Select a Rotation Control State" />
            <Dropdown onChange={(value) => data.teleop.var5 = value.value} options={['Completed', 'Did Not Complete']} placeholder="Select a Position Control State" />
            <Dropdown onChange={(value) => data.teleop.var6 = value.value} options={['Dead', 'Not Dead']} placeholder="Select a Dead on Field State" />
        </div>
    )
}