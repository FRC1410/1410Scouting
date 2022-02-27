import json from "/helpers/data.json"

// export function getData(period, name) {
//     if (typeof window !== "undefined") {
//         return JSON.parse(localStorage.getItem("session"))[period][name]
//         // return json[period][name]
//     } else {
//         return json[period][name]
//     }
// }
//
// export function setData(period, name, value) {
//     let json = JSON.parse(localStorage.getItem("session"))
//     json[period][name] = value
//     localStorage.setItem("session", JSON.stringify(json))
// }
//
// export function getAllData() {
//     return JSON.parse(localStorage.getItem("session"))
// }

export default function handler(req, res) {
    if (req.method === 'POST') {
        const newData = {
            id: Date.now(),
            body: data
        }
        res.status(201).json(newData)
    }
}