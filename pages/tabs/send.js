import { sendData } from "../../components/Send"
// import Send from "../../components/Send"
import QR from "../../components/QR"
import Navbar from "../../components/Navbar"
import Reset from "../../components/Reset"
import { getAllData } from "../../helpers/data"

export default function send() {
    const jsonData = {
        "pregame": {
            "name": "Name", "team_number": null, "match_number": "Match #", "alliance_position": null
        }
    }

    return (
        <>
            <Navbar page="Send" />
            {/*<Send />*/}
            <div className="flex justify-center py-4">
                <button className="w-5/6 py-2 rounded text-white text-3xl font-bold bg-emerald-600 hover:bg-emerald-200 active:bg-teal-600">Submit Scouting Data</button>
            </div>
            <QR />
            <Reset />
        </>
    )
}

export async function getServerSideProps() {
    await sendData()
    return {
        props: {
        }
    }
}