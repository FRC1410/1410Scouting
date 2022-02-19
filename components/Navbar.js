import { useState } from 'react'

function NavLink({ to, children, open }) {
    return <a href={to} className={`mx-4 text-white ${open ? 'bg-teal-700' : ''}`}>
        { children }
    </a>
}
function MobileNav({ open, setOpen }) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-teal-400 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md`}>
            <div className="flex flex-col ml-4">
                <a className="text-xl font-medium my-4 text-white" href="/tabs/pregame" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Pregame
                </a>
                <a className="text-xl font-medium my-4 text-white" href="/tabs/auto" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Auto
                </a>
                <a className="text-xl font-medium my-4 text-white" href="/tabs/teleop" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Teleop
                </a>
                <a className="text-xl font-medium my-4 text-white" href="/tabs/endgame" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Endgame
                </a>
                <a className="text-xl font-medium my-4 text-white" href="/tabs/send" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Send
                </a>
            </div>
        </div>
    )
}

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState(false)

    return (
        <nav className="flex filter drop-shadow-md bg-teal-400 px-4 py-4 h-14 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                    <NavLink to="/tabs/pregame" >
                        PREGAME
                    </NavLink>
                    <NavLink to="/tabs/auto">
                        AUTO
                    </NavLink>
                    <NavLink to="/tabs/teleop">
                        TELEOP
                    </NavLink>
                    <NavLink to="/tabs/endgame">
                        ENDGAME
                    </NavLink>
                    <NavLink to="/tabs/send">
                        SEND
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}