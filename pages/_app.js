import Layout from "../components/Layout"
import { ThemeProvider, createTheme } from '@mui/material/styles'
import '../styles/globals.css'

const theme = createTheme({
    palette: {
        primary: {
            light: '#32CD32',
            main: '#4CAF50',
            dark: '#3e8e41'
        },

        secondary: {
            light: '#FF0000',
            main: '#DC143C',
            dark: '#950000'
        }
    }
})

export default function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider theme={theme}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
  )
}
