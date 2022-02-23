import json from "/helpers/data.json"
const { GoogleSpreadsheet } = require("google-spreadsheet")

export async function sendData(data) {
    const doc = new GoogleSpreadsheet("1HfYjHhirqyapYwD0imXfGjIwiJ3whPs1M35t--MXrQA")
    await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\n/, '\n')
    })
    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[0]
    await sheet.addRow(json)
    // if (data !== undefined) {
    //     await sheet.addRow(data)
    // }
}

export default function Send() {
    return (
        <div className="flex justify-center py-4">
            <button className="w-5/6 py-2 rounded text-white text-3xl font-bold bg-emerald-600 hover:bg-emerald-200 active:bg-teal-600">Submit Scouting Data</button>
        </div>
    )
}