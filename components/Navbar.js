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
        <nav className={`flex filter drop-shadow-md ${navPrimary} px-4 py-8 h-14 my-2 justify-around items-center`}>
            <a href={PageName[pageNum - 1].reference} className={" rounded text-white pl-2px ${navSecondary} "}>
                Back
            </a>
            <a href={PageName[pageNum + 1].reference} className={" rounded text-white pr-2px ${navSecondary} "}>
                Forward
            </a>
        </nav>
    )
}