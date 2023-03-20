

export default function Layout({ children }) {
    return (
        <div className='layout'>
            { children }
            <footer>
                <p className="p-1">Created By: Rowan Eklund and Owen Duffy</p>
            </footer>
        </div>
    )
}