import json from "./data.json"
import { setCookies, getCookie, getCookies, checkCookies } from "cookies-next"

export function setData(period, name, value) {
    let data

    if (checkCookies("data")) {
        data = getAllData()
    } else {
        data = json
    }

    data[period][name] = value
    setCookies("data", JSON.stringify(data))
    // let json = JSON.parse(localStorage.getItem("session"))
    // json[period][name] = value
    // localStorage.setItem("session", JSON.stringify(json))
}

export function getData(period, name) {
    let data

    if (checkCookies("data")) {
        data = getAllData()
    } else {
        data = json
    }

    return data[period][name]

    // if (typeof window !== "undefined") {
    //     return JSON.parse(localStorage.getItem("session"))[period][name]
    // } else {
    //     return json[period][name]
    // }
}

export function getAllData() {
    // return JSON.parse(localStorage.getItem("session"))
    return JSON.parse(getCookie("data"))
}