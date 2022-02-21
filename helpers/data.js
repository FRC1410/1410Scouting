import json from './data.json'

export function getData(period, name) {
    if (typeof window !== "undefined") {
        return JSON.parse(localStorage.getItem("session"))[period][name]
    } else {
        return json[period][name]
    }
}

export function setData(period, name, value) {
    let json = JSON.parse(localStorage.getItem("session"))
    json[period][name] = value
    localStorage.setItem("session", JSON.stringify(json))
}

export function getAllData() {
    return JSON.parse(localStorage.getItem("session"))
}