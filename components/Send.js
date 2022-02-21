import { getAllData } from "/helpers/data"
import json from "/helpers/data.json"
const {google} = require('googleapis');
import token from "/helpers/token.json"
import credentials from "/helpers/credentials.json"

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"]
let ask = 0

let values = [
    [
        // getAllData().pregame.name, getAllData().pregame.team_number, getAllData().pregame.alliance_position, getAllData().auto.var1, getAllData().auto.var2, getAllData().auto.var3, getAllData().auto.var4, getAllData().teleop.var1, getAllData().teleop.var2,
        // getAllData().teleop.var3, getAllData().teleop.var4, getAllData().teleop.var5, getAllData().teleop.var6, getAllData().endgame.var1, getAllData().endgame.var2
    ]
]
let body = {
    values: values
}

function authorize(credentials, callback) {
    const {client_secret, client_id, redirect_uris} = credentials.installed
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0])

    oAuth2Client.setCredentials(JSON.parse(token))
    callback(oAuth2Client)
}

function getCells() {
    authorize(JSON.parse(credentials), readSheet)
}

function readSheet(auth) { //Reads from sheet
    const sheets = google.sheets({version: 'v4', auth})
    let fillSpace
    let emptyCell = false

    sheets.spreadsheets.values.get({
        spreadsheetId: '1HfYjHhirqyapYwD0imXfGjIwiJ3whPs1M35t--MXrQA', //Found in url
        range: 'Data!A:AC',
        majorDimension: 'COLUMNS'
    }, (err, res) => {
        if (err) return console.log('The API returned an error: ' + err)
        const rows = res.data.values
        if (rows.length) {
            // Print columns A and E, which correspond to indices 0 and 4.
            rows.map((row) => { //Repeats twice for some reason
                //console.log(`${row[1]}, ${row[2]}`);
                //Starts at A2 = 0 in the array
                while (emptyCell === false) {
                    fillSpace = row[ask]
                    console.log(row[ask])
                    if (fillSpace === undefined || fillSpace === "Don't Remove" || fillSpace === null || fillSpace === "\n") {
                        emptyCell = true;
                        console.log("Row " + ask + " empty")
                    } else {
                        console.log("Row " + ask + " not empty")
                        emptyCell = false
                        ask++
                    }
                }
            });
        } else {
            console.log('No data found.')
        }
        if (emptyCell === true) {
            emptyCell = false
            if (json.pregame.name !== json.pregame.name) {

                authorize(JSON.parse(credentials), writeSheet)
            }
        }
    }).then(r => console.log(r))
}

function writeSheet(auth) {
    const sheetsRead = google.sheets({version: 'v4', auth});
    sheetsRead.spreadsheets.values.update({
        spreadsheetId: '1HfYjHhirqyapYwD0imXfGjIwiJ3whPs1M35t--MXrQA',
        range: `Data!A${ask + 1}:AB`,
        valueInputOption: 'RAW',
        requestBody: body
    }).then()
}

async function send() {
    try {
        getCells()
    } catch (e) {
        console.error(e)
        alert("Error, use QR Code")
    }

    //BS
    // let req = new XMLHttpRequest();
    // try {
    //     req.open('POST', 'http://localhost:3800', true)
    //     req.setRequestHeader('Content-Type', 'application/json')
    //     req.send(JSON.stringify(getAllData()))
    //     alert('Data sent!')
    // } catch (e) {
    //     console.error(e)
    //     alert(`You've just pulled a big funny, go talk to Rowan`)
    // }
}

export default function Send() {
    return (
        <div className="flex justify-center py-4">
            <button className="w-5/6 py-2 rounded text-white text-3xl font-bold bg-emerald-600 hover:bg-emerald-200 active:bg-teal-600" onClick={send}>Submit Scouting Data</button>
        </div>
    )
}