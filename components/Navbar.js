import React, { useState } from 'react'

const navPrimary = "bg-green-700"
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
        <nav className={`flex filter drop-shadow-md ${navPrimary} px-4 py-8 h-14 my-2 items-center justify-evenly`}>
            <a href={PageName[pageNum - 1].reference} className={"basis-1/3 rounded text-white px-3 ${navSecondary}"}>
                Back
            </a>
            <a href={PageName[pageNum + 1].reference} className={"basis-1/3 rounded text-white px-3 ${navSecondary}"}>
                Forward
            </a>
        </nav>
    )
}