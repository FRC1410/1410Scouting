import { getAllData } from "/helpers/data"

async function send() {
    let req = new XMLHttpRequest();
    try {
        req.open('POST', 'http://localhost:3800', true)
        req.setRequestHeader('Content-Type', 'application/json')
        req.send(JSON.stringify(getAllData()))
        alert('Data sent!')
    } catch (e) {
        console.error(e)
        alert(`There was a problem`)
    }
}

export default function Send() {
    return (
        <div className="flex justify-center py-4">
            <button className="w-5/6 py-2 rounded text-white text-3xl font-bold bg-blue-500 hover:bg-blue-200 active:bg-blue-400" onClick={send}>Submit Scouting Data</button>
        </div>
    )
}