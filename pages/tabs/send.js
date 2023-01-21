import { sendData } from "../../components/Send"
import QR from "../../components/QR"
import Navbar from "../../components/Navbar"
import Reset from "../../components/Reset"
import { getData } from "../../helpers/data"

export default function send() {
    return (
        <>
            <Navbar pageNum={4} />
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