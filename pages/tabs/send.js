import { sendData } from "../../components/Send"
// import Send from "../../components/Send"
import QR from "../../components/QR"
import Navbar from "../../components/Navbar";
import Reset from "../../components/Reset";
import { getAllData } from "../../helpers/data";

let data

export default function send() {
    return (
        <>
            <Navbar page="Send" />
            {/*<Send />*/}
            <div className="flex justify-center py-4" onR>
                <button className="w-5/6 py-2 rounded text-white text-3xl font-bold bg-emerald-600 hover:bg-emerald-200 active:bg-teal-600" onClick={() => {data = getAllData(); console.log(data)}}>Submit Scouting Data</button>
            </div>
            <QR />
            <Reset />
        </>
    )
}

export async function getServerSideProps() {
    console.log(data)
    await sendData(data)
    return {
        props: {
        }
    }
}