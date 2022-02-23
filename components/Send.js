import { getDataServer } from "../helpers/data"

const { GoogleSpreadsheet } = require("google-spreadsheet")

//https://www.npmjs.com/package/google-spreadsheet

export async function sendData(req, res) {
    const doc = new GoogleSpreadsheet("1HfYjHhirqyapYwD0imXfGjIwiJ3whPs1M35t--MXrQA")
    await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\n/, '\n')
    })
    await doc.loadInfo()

    const sheet = await doc.sheetsByIndex[0]
    await sheet.loadHeaderRow(1)

    if (getDataServer("pregame", "name", req, res) === "Name") {
        // alert("Please Enter Your Name!")
    } else if (getDataServer("pregame", "team_number", req, res) === null) {
        // alert("Please Enter the Team Number!")
    } else if (getDataServer("pregame", "match_number", req, res) === "Match #") {
        // alert("Please Enter the Match Number!")
    } else if (getDataServer("pregame", "match_number", req, res) === null) {
        // alert("Please Enter the Alliance Position of the Team!")
    } else {
        await sheet.addRow({
            "Name": getDataServer("pregame", "name", req, res),
            "Team Number": getDataServer("pregame", "team_number", req, res),
            "Match Number": getDataServer("pregame", "match_number", req, res),
            "Alliance Position": getDataServer("pregame", "alliance_position", req, res),
            "Left Tarmac": getDataServer("auto", "var1", req, res),
            "Auto Low Hub": getDataServer("auto", "var2", req, res),
            "Auto High Hub": getDataServer("auto", "var3", req, res),
            "Auto Shots Missed": getDataServer("auto", "var4", req, res),
            "Teleop Low Hub": getDataServer("teleop", "var1", req, res),
            "Teleop High Hub": getDataServer("teleop", "var2", req, res),
            "Teleop Shots Missed": getDataServer("teleop", "var3", req, res),
            "Played Defense": getDataServer("teleop", "var4", req, res),
            "Was Defended": getDataServer("teleop", "var5", req, res),
            "Dead on Field": getDataServer("teleop", "var6", req, res),
            "2+ Fouls": getDataServer("teleop", "var7", req, res),
            "No Climb Attempted": getDataServer("endgame", "var1", req, res),
            "Climb Failed": getDataServer("endgame", "var2", req, res),
            "Climbed Successfully": getDataServer("endgame", "var3", req, res),
            "Height Achieved": getDataServer("endgame", "var4", req, res)
        })
    }
}