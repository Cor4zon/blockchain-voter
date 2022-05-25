import React, { useState } from 'react';
import APIClient from "../../services/APIClient";
import Button from '@mui/material/Button';
import "./Keys.css";

const Keys = () => {
    const client = new APIClient();
    const [ pubkey, setPubkey ] = useState("");
    const [ privkey, setPrivkey ] = useState("");

    const generateKeysHandler = (event) => {
        event.preventDefault();
        client.fetchKeys().then((result) => {
                setPrivkey(() => result.data.private_key);
                setPubkey(() => result.data.public_key)
        }
        )
    }

    return (
        <div className="key-generator__content">
            <h1>Key generator</h1>
            <h3>Pubkey: </h3>
            <textarea id="pubkey" value={pubkey} name="pubkey" rows="10" cols="133" placeholder="Public key" disabled />
            <h3>Privkey: </h3>
            <textarea id="privkey" value={privkey} name="privkey" rows="10" cols="133" placeholder="Private key" disabled />

            <br />
            <Button variant="contained" onClick={ generateKeysHandler }>Generate keys</Button>
        </div>
    );
};

export default Keys;
