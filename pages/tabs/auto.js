import { data } from "../../helpers/data"
import Button from '@mui/material/Button'
import { ButtonGroup } from "@mui/material"
import Dropdown from 'react-dropdown'
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function Auto() {
    return (
        <>
            <Navbar page="Auto" />
            <div className='Page'>
                <Dropdown onChange={(value) => data.autonomous.var1 = value.value} options={['Crossed', 'Did Not Cross']} placeholder="Select an Auto Line State" />
                <ButtonGroup variant='contained' color='primary' aria-label='split button' disableRipple fullWidth disableElevation>
                    <Button id='1' onClick={() => {data.autonomous.var2++; document.getElementById('1').innerText=`Level 1 Cells Scored: ${data.autonomous.var2}`}}>Level 1 Cells Scored</Button>
                    <Button style={{width: 100}} onClick={() => {data.autonomous.var2--; document.getElementById('1').innerText=`Level 1 Cells Scored: ${data.autonomous.var2}`}}>-</Button>
                </ButtonGroup>
                <ButtonGroup variant='contained' color='primary' aria-label='split button' disableRipple fullWidth disableElevation>
                    <Button id='2' onClick={() => {data.autonomous.var3++; document.getElementById('2').innerText=`Level 2 Cells Scored: ${data.autonomous.var3}`}}>Level 2 Cells Scored</Button>
                    <Button style={{width: 100}} onClick={() => {data.autonomous.var3--; document.getElementById('2').innerText=`Level 2 Cells Scored: ${data.autonomous.var3}`}}>-</Button>
                </ButtonGroup>
                <ButtonGroup variant='contained' color='secondary' aria-label='split button'  disableRipple fullWidth disableElevation>
                    <Button id='3' className='Missed' onClick={() => {data.autonomous.var4++; document.getElementById('3').innerText=`Shots Missed: ${data.autonomous.var4}`}}>Shots Missed</Button>
                    <Button className='Missed' style={{width: 100}} onClick={() => {data.autonomous.var4--; document.getElementById('3').innerText=`Shots Missed: ${data.autonomous.var4}`}}>-</Button>
                </ButtonGroup>
            </div>
        </>
    )
}