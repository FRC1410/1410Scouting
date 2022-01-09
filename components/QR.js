import Button from "@mui/material/Button";
import Image from "next/image";
import Popup from "reactjs-popup";
import { data } from "../helpers/data"
import {useEffect, useState} from "react";
import QRCode from "qrcode";

export default function QR() {
    const [src, setSrc] = useState('')

    useEffect(() => {
        QRCode.toDataURL(JSON.stringify(data)).then((out) => {
            setSrc(out)
        })
    }, [])

    return (
        <Popup trigger={<Button className='Send' variant='contained' disableRipple fullWidth disableElevation>Generate QR Code</Button>} position='bottom center' closeOnDocumentClick>
            <Image src={src} alt='Scouting Data QR Code' width={500} height={500} />
        </Popup>
    )
}