import json from "/helpers/data.json"

export default function handler(req, res) {
    if (req.method === 'POST') {
        const newData = {
            id: Date.now(),
            body: data
        }
        res.status(201).json(newData)
    }
}