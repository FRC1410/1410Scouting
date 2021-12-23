import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div className='layout'>
            <Navbar />
            { children }
            <Footer />
        </div>
    )
}