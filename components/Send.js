import {data} from "../helpers/data"
import Button from "@mui/material/Button"
import Popup from "reactjs-popup"

function send() {
    let req = new XMLHttpRequest();
    req.open('Post', 'localhost:118', true)
    req.setRequestHeader('Content-Type', 'application/json')
    req.send(data)
    console.log('Sent')
}

export default function Send() {
    return (
        <Popup trigger={<Button className='Send' variant='contained' onClick={send} disableRipple fullWidth disableElevation>Send Scouting Data</Button>} position='bottom center' closeOnDocumentClick>
            <h1>Data Sent!</h1>
        </Popup>
    )
}