import {getDataServer, setDataServer} from "../helpers/data"

const { GoogleSpreadsheet } = require("google-spreadsheet")

let invalidInputFlag = null
let rowNum = 2

// https://www.npmjs.com/package/google-spreadsheet
// https://docs.google.com/spreadsheets/d/1HfYjHhirqyapYwD0imXfGjIwiJ3whPs1M35t--MXrQA/edit#gid=0

export async function sendData(req, res) {
    const doc = new GoogleSpreadsheet("164TJXxHoXtYHXCQ8efwTFDc7zuaHzW21zu5xxKHVli4")
    await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\n/, '\n')
    })
    await doc.loadInfo()
    const sheet = await doc.sheetsByIndex[0]
    await sheet.loadHeaderRow(1)

    if (getDataServer("pregame", "name", req, res) === "Name") {
        invalidInputFlag = "Please Enter Your Name!"
    } else if (getDataServer("pregame", "team_number", req, res) === "Team #") {
        invalidInputFlag = "Please Enter the Team Number!"
    } else if (getDataServer("pregame", "match_number", req, res) === "Match #") {
        invalidInputFlag = "Please Enter the Match Number!"
    } else if (getDataServer("pregame", "alliance_position", req, res) === null) {
        invalidInputFlag = "Please Enter the Alliance Position of the Team!"
    } else {
        invalidInputFlag = null
//        console.log(await sheet.getRows(1));
        await sheet.addRow({
            "Name": getDataServer("pregame", "name", req, res),
            "Team Number": getDataServer("pregame", "team_number", req, res),
            "Match Number": getDataServer("pregame", "match_number", req, res),
            "Alliance Position": getDataServer("pregame", "alliance_position", req, res),
            "Robot left Community?": getDataServer("auto", "Robot left Community?", req, res),
            "High Cone Auto": getDataServer("auto", "High Cone Auto", req, res),
            "High Cube Auto": getDataServer("auto", "High Cube Auto", req, res),
            "Mid Cone Auto": getDataServer("auto", "Mid Cone Auto", req, res),
            "Mid Cube Auto": getDataServer("auto", "Mid Cube Auto", req, res),
            "Hybrid Cone Auto": getDataServer("auto", "Hybrid Cone Auto", req, res),
            "Hybrid Cube Auto": getDataServer("auto", "Hybrid Cube Auto", req, res),
            "Docked Auto": getDataServer("auto", "Docked Auto", req, res),
            "Engaged Auto": getDataServer("auto", "Engaged Auto", req, res),
            "High Cone Teleop": getDataServer("teleop", "High Cone Teleop", req, res),
            "High Cube Teleop": getDataServer("teleop", "High Cube Teleop", req, res),
            "Mid Cone Teleop": getDataServer("teleop", "Mid Cone Teleop", req, res),
            "Mid Cube Teleop": getDataServer("teleop", "Mid Cube Teleop", req, res),
            "Hybrid Cone Teleop": getDataServer("teleop", "Hybrid Cone Teleop", req, res),
            "Hybrid Cube Teleop": getDataServer("teleop", "Hybrid Cube Teleop", req, res),
            "Played Defense": getDataServer("teleop", "Played Defense", req, res),
            "Was Defended": getDataServer("teleop", "Was Defended", req, res),
            "Docked Teleop": getDataServer("teleop", "Docked Teleop", req, res),
            "Dead on Field": getDataServer("teleop", "Dead on Field", req, res),
            "2+ Fouls": getDataServer("teleop", "2+ Fouls", req, res),
            "Engaged Teleop": getDataServer("teleop", "Engaged Teleop", req, res),
        }).then(row => rowNum = row)
    }

    setDataServer("other", "invalid_input", invalidInputFlag, req, res)
}