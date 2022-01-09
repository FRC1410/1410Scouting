import { data } from "../helpers/data"
import Button from "@mui/material/Button"

async function send() {
    let req = new XMLHttpRequest();
    try {
        req.open('POST', 'http://localhost:3800', true)
        req.setRequestHeader('Content-Type', 'application/json')
        req.send(JSON.stringify(data))
        alert('Data sent!')
    } catch (e) {
        console.error(e)
        alert(`There was a problem`)
    }
}

export default function Send() {
    return (
        <Button className='Send' variant='contained' onClick={send} disableRipple fullWidth disableElevation>Send Scouting Data</Button>
    )
}