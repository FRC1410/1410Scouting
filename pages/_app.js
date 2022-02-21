import Layout from "../components/Layout"
import '../styles/globals.css'
import json from '../helpers/data.json'

export function getData(period, name) {
    console.log("Testing: " + json[period][name])
    return json[period][name]
}

export function setData(period, name, value) {
    json[period][name] = value
}

export function getAllData() {
    return json
}

export default function MyApp({ Component, pageProps }) {
  return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
  )
}
