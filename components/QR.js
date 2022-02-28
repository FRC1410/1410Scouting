import Image from "next/image";
import Popup from "reactjs-popup";
import { getAllData } from "/helpers/data"
import { useEffect, useState } from "react"
import QRCode from "qrcode"

export default function QR() {
    const [src, setSrc] = useState('')

    useEffect(() => {
        QRCode.toDataURL(JSON.stringify(getAllData())).then((out) => {
            setSrc(out)
        })
    }, [])

    return (
        <div className="flex justify-center py-4">
            <Popup trigger={<button className="w-5/6 py-2 rounded text-white text-3xl font-bold bg-emerald-600 backround-color:bg-emerald-600 active:bg-teal-600">Generate QR Code</button>} position='bottom center' closeOnDocumentClick>
                <Image src={src} alt='Scouting Data QR Code' width={500} height={500} />
            </Popup>
        </div>
    )
}