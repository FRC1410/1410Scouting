import json from './data.json'


let data = json

export function getData(period, name) {
    console.log("Testing: " + data[period][name])
    return data[period][name]
}

export function setData(period, name, value) {
    data[period][name] = value
}

export function getAllData() {
    return data
}