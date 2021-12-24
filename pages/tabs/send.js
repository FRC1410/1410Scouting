import { data } from "../../helpers/data"
import Button from "@mui/material/Button"
import Popup from "reactjs-popup"
import {ButtonGroup} from "@mui/material";
import Image from 'next/image'
import { useEffect, useState } from 'react'
import QRCode from 'qrcode'

function send() {
    let req = new XMLHttpRequest();
    req.open('Post', 'localhost:118', true)
    req.setRequestHeader('Content-Type', 'application/json')
    req.send(data)
    console.log('Sent')
}

export default function Send() {
    const [src, setSrc] = useState('')

    useEffect(() => {
        QRCode.toDataURL(JSON.stringify(data)).then((out) => {
            setSrc(out)
        })
    }, [])

    return (
        <div className='Page'>
            <Popup trigger={<Button className='Send' variant='contained' onClick={send} disableRipple fullWidth disableElevation>Send Scouting Data</Button>} position='bottom center' closeOnDocumentClick>
                <h1>Data Sent!</h1>
            </Popup>
            <Popup trigger={<Button className='Send' variant='contained' disableRipple fullWidth disableElevation>Generate QR Code</Button>} position='bottom center' closeOnDocumentClick>
                <Image src={src} alt='Scouting Data QR Code' width={500} height={500} />
            </Popup>
            <ButtonGroup variant='contained' color='primary' disableRipple fullWidth disableElevation>
                <Button variant='contained' onClick={() => window.location.reload()}>Reset</Button>
            </ButtonGroup>
        </div>
    )
}