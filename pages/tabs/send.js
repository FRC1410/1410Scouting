import { sendData } from "../../components/Send"
import QR from "../../components/QR"
import Navbar from "../../components/Navbar"
import Reset from "../../components/Reset"
import { getData } from "../../helpers/data"

export default function send() {
    console.log(getData("other", "invalid_input"))
    return (
        <>
            <Navbar page="Send" />
            <QR />
            <Reset />
            {/*<h1 className={"m-3 px-2 py-3 bg-red-500 rounded text-white text-xl text-center " + (getData("other", "invalid_input") === null ? "bg-blue-500 hidden" : "visible")}>{getData("other", "invalid_input")}</h1>*/}
        </>
    )
}

export async function getServerSideProps({ req, res }) {
    await sendData(req, res)
    return {
        props: {}
    }
}