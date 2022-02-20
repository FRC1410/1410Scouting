import Button from "@mui/material/Button"
import { ButtonGroup } from "@mui/material"
import Send from "../../components/Send"
import QR from "../../components/QR"
import Navbar from "../../components/Navbar";

export default function send() {
    return (
        <>
            <Navbar page="Send" />
            <div className='Page'>
                <Send />
                <QR />
                <ButtonGroup variant='contained' color='primary' disableRipple fullWidth disableElevation>
                    <Button variant='contained' onClick={() => window.location.reload()}>Reset</Button>
                </ButtonGroup>
            </div>
        </>
    )
}