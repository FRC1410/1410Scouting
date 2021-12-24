import Link from "next/link"

export default function Navbar() {
    return (
        <nav>
            <Link href='/tabs/pregame'><a>Pre-Game</a></Link>
            <Link href='/tabs/auto'><a>Auto</a></Link>
            <Link href='/tabs/teleop'><a>Teleop</a></Link>
            <Link href='/tabs/endgame'><a>Endgame</a></Link>
            <Link href='/tabs/send'><a>Send</a></Link>
        </nav>
    )
}