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
        <div className="flex justify-center py-4">
            <Popup trigger={<button className="w-5/6 py-2 rounded text-white text-3xl font-bold bg-blue-500 hover:bg-blue-200 active:bg-blue-400">Generate QR Code</button>} position='bottom center' closeOnDocumentClick>
                <Image src={src} alt='Scouting Data QR Code' width={500} height={500} />
            </Popup>
        </div>
    )
}