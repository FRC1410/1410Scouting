import { sendData } from "../../components/Send"
import QR from "../../components/QR"
import Navbar from "../../components/Navbar"
import Reset from "../../components/Reset"

export default function send() {
    return (
        <>
            <Navbar page="Send" />
            <QR />
            <Reset />
        </>
    )
}

export async function getServerSideProps({ req, res }) {
    await sendData(req, res)
    return {
        props: {}
    }
}