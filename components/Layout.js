import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div className='layout'>
            { children }
            <Footer />
        </div>
    )
}