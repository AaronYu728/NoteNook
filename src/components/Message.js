import { Alert, Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Message(props) {
    const [open, setOpen] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(false);
            if (props.onClose) {
                props.onClose();
            }
        }, props.duration);

        return () => clearTimeout(timer);
    }, [props.duration, props.onClose]);

    return (
        <Snackbar open={open} autoHideDuration={props.duration} anchorOrigin={{vertical: "top", horizontal: "center"}}>
            <Alert severity={props.severity}>
                {props.title && <AlertTitle>{props.title}</AlertTitle>}
                {props.message}
            </Alert>
        </Snackbar>
    )
}