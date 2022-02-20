import { useState } from 'react'

function MobileNav({ open, setOpen, page }) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-teal-400 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md`}>
            <div className="flex flex-col ml-4">
                <a className={"text-xl font-medium my-4 text-white " + (page === "Pregame" && "bg-teal-700")} href="/tabs/pregame" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    PREGAME
                </a>
                <a className={"text-xl font-medium my-4 text-white " + (page === "Auto" && "bg-teal-700")} href="/tabs/auto" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    AUTO
                </a>
                <a className={"text-xl font-medium my-4 text-white " + (page === "Teleop" && "bg-teal-700")} href="/tabs/teleop" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    TELEOP
                </a>
                <a className={"text-xl font-medium my-4 text-white " + (page === "Endgame" && "bg-teal-700")} href="/tabs/endgame" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    ENDGAME
                </a>
                <a className={"text-xl font-medium my-4 text-white " + (page === "Send" && "bg-teal-700")} href="/tabs/send" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    SEND
                </a>
            </div>
        </div>
    )
}

export default function Navbar({ page }) {
    const [open, setOpen] = useState(false)

    return (
        <nav className="flex filter drop-shadow-md bg-teal-400 px-4 py-4 h-14 items-center">
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
                    <a href="/tabs/pregame" className={"mx-4 text-white " + (page === "Pregame" && "bg-teal-700")}>
                        PREGAME
                    </a>
                    <a href="/tabs/auto" className={"mx-4 text-white " + (page === "Auto" && "bg-teal-700")}>
                        AUTO
                    </a>
                    <a href="/tabs/teleop" className={"mx-4 text-white " + (page === "Teleop" && "bg-teal-700")}>
                        TELEOP
                    </a>
                    <a href="/tabs/endgame" className={"mx-4 text-white " + (page === "Endgame" && "bg-teal-700")}>
                        ENDGAME
                    </a>
                    <a href="/tabs/send" className={"mx-4 text-white " + (page === "Send" && "bg-teal-700")}>
                        SEND
                    </a>
                </div>
            </div>
        </nav>
    )
}