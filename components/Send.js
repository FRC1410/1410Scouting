import {data} from "../helpers/data"
import Button from "@mui/material/Button"
import Popup from "reactjs-popup"

function send() {
    let req = new XMLHttpRequest();
    try {
        req.open('Post', 'localhost:3800', true)
        req.setRequestHeader('Content-Type', 'application/json')
        req.send(data)
        alert('Data sent!')
    } catch (e) {
        console.error(e)
        alert(`There was a problem`)
    }
}

export default function Send() {
    return (
        <Button className='Send' variant='contained' onClick={send} disableRipple fullWidth disableElevation>Send Scouting Data</Button>
        // <Popup trigger={<Button className='Send' variant='contained' onClick={() => {console.log('test3'); send()}} disableRipple fullWidth disableElevation>Send Scouting Data</Button>} position='bottom center' closeOnDocumentClick>
        //     <h1>Data Sent!</h1>
        // </Popup>
    )
}