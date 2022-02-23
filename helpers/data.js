import json from "./data.json"
import { setCookies, getCookie, checkCookies } from "cookies-next"

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
    return JSON.parse(getCookie("data"))
}

export function resetData() {
    return setCookies("data", json)
}

export function setDataServer(period, name, value, req, res) {
    let data
    if (checkCookies("data", { req, res})) {
        data = getAllDataServer(req, res)
    } else {
        data = json
    }

    data[period][name] = value
    setCookies("data", JSON.stringify(data), { req, res})
}

export function getDataServer(period, name, req, res) {
    let data

    if (checkCookies("data", { req, res})) {
        data = getAllDataServer(req, res)
    } else {
        data = json
    }

    return data[period][name]
}

export function getAllDataServer(req, res) {
    return JSON.parse(getCookie("data", { req, res}))
}