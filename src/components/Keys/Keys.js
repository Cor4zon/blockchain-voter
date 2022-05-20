import React, { useState } from 'react';
import APIClient from "../../services/APIClient";

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
        <div>
            <h1>Key generator</h1>
            <h3>Pubkey: { pubkey }</h3>
            <h3>Privkey: { privkey }</h3>
            <button onClick={ generateKeysHandler }>Generate keys</button>
        </div>
    );
};

export default Keys;
