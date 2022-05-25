import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import APIClient from "../../../services/APIClient";
import axios from "axios";
import {Alert} from "@mui/material";


export default function SubmitChoiceModal({ choice, votingId }) {
    const [open, setOpen] = React.useState(false);
    const [ pubkey, setPubkey ] = React.useState("");
    const [ privkey, setPrivkey ] = React.useState("");
    const client = new APIClient();
    const [ isError, setIsError ] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const pubkeyChangeHandler = (event) => {
        setPubkey(event.target.value);
    }

    const privkeyChangeHandler = (event) => {
        setPrivkey(event.target.value);
    }

    const submitChoiceHandler = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8000/vote/', {
            voting_id: votingId,
            pubkey: pubkey,
            privkey: privkey,
            choice: choice
        }, {
            validateStatus: function (status) {
                return status < 400; // Resolve only if the status code is less than 500
            }}).then(() => {
                setIsError(false);
                console.log('ok')
        }).catch(()=> {
            console.log('error')
            setIsError(true);
        });

        setPubkey("");
        setPubkey("");
    }
    if (isError) {
        return (
            <Alert severity="error" onClick={() => {setIsError(false)}}> Проверьте корректность введеных ключей. </Alert>
        )
    }

    return (

        <div className="form-dialog__container">
            <Button variant="outlined" onClick={handleClickOpen}>
                Vote
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New voting</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure? Please, enter your public key and private key to submit transaction.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="pubkey"
                        label="Public key"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={pubkeyChangeHandler}
                    />
                    <TextField
                        margin="dense"
                        id="privkey"
                        label="Private key"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={privkeyChangeHandler}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={submitChoiceHandler}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
