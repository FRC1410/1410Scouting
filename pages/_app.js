import Layout from "../components/Layout"
import '../styles/globals.css'
import json from "../helpers/data.json";

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
