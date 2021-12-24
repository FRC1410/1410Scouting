import Button from "@mui/material/Button"
import {ButtonGroup} from "@mui/material";
import Send from "../../components/Send";
import QR from "../../components/QR";

export default function send() {
    return (
        <div className='Page'>
            <Send />
            <QR />
            <ButtonGroup variant='contained' color='primary' disableRipple fullWidth disableElevation>
                <Button variant='contained' onClick={() => window.location.reload()}>Reset</Button>
            </ButtonGroup>
        </div>
    )
}