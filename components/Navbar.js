import React, { useState } from 'react'

const navPrimary = "bg-black"
const navSecondary = "bg-green-900"

const PageName = [
    { name: 'buffer', reference: ''},
    { name: 'pregame', reference: '/tabs/pregame' },
    { name: 'auto', reference: '/tabs/auto'}, 
    { name: 'teleop', reference: '/tabs/teleop' },
    { name: 'send', reference: '/tabs/send'},
    { name: 'buffer', reference: ''}
]

export default function Navbar({ pageNum }) {
    return (
        <nav className={`flex filter drop-shadow-md ${navPrimary} px-4 h-14 justify-between items-center`}>
            <a href={PageName[pageNum - 1].reference} className={"basis-1/6 text-2xl rounded text-center text-white py-2 pl-1px bg-emerald-600 "}>
                {'<'}
            </a>
            <a href={PageName[pageNum + 1].reference} className={"basis-1/6 text-2xl rounded text-center text-white py-2 pr-1px bg-emerald-600 "}>
                {'>'}
            </a>
        </nav>
    )
}