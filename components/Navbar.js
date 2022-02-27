import { useState } from 'react'

const navPrimary = "bg-green-700"
const navSecondary = "bg-green-900"

function MobileNav({ open, setOpen, page }) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen ${navPrimary} transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md`}>
            <div className="flex flex-col ml-4">
                <a className={"rounded w-1/4 text-xl font-medium my-4 text-white text-center " + (page === "Pregame" && navSecondary)} href="/tabs/pregame" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    PREGAME
                </a>
                <a className={"rounded w-1/4 text-xl font-medium my-4 text-white text-center " + (page === "Auto" && navSecondary)} href="/tabs/auto" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    AUTO
                </a>
                <a className={"rounded w-1/4 text-xl font-medium my-4 text-white text-center " + (page === "Teleop" && navSecondary)} href="/tabs/teleop" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    TELEOP
                </a>
                <a className={"rounded w-1/4 text-xl font-medium my-4 text-white text-center " + (page === "Endgame" && navSecondary)} href="/tabs/endgame" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    ENDGAME
                </a>
                <a className={"rounded w-1/4 text-xl font-medium my-4 text-white text-center " + (page === "Send" && navSecondary)} href="/tabs/send" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    SEND
                </a>
            </div>
        </div>
    )
}

export default function Navbar({ page }) {
    const [open, setOpen] = useState(false)

    return (
        <nav className={`flex filter drop-shadow-md ${navPrimary} px-4 py-8 h-14 my-2 items-center justify-evenly`}>
            <MobileNav open={open} setOpen={setOpen} page={page} />
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
                    <a href="/tabs/pregame" className={"mx-4 rounded text-white px-3 " + (page === "Pregame" && navSecondary)}>
                        PREGAME
                    </a>
                    <a href="/tabs/auto" className={"mx-4 rounded text-white px-3 " + (page === "Auto" && navSecondary)}>
                        AUTO
                    </a>
                    <a href="/tabs/teleop" className={"mx-4 rounded text-white px-3 " + (page === "Teleop" && navSecondary)}>
                        TELEOP
                    </a>
                    <a href="/tabs/endgame" className={"mx-4 rounded text-white px-3 " + (page === "Endgame" && navSecondary)}>
                        ENDGAME
                    </a>
                    <a href="/tabs/send" className={"mx-4 rounded text-white px-3 " + (page === "Send" && navSecondary)}>
                        SEND
                    </a>
                </div>
            </div>
        </nav>
    )
}