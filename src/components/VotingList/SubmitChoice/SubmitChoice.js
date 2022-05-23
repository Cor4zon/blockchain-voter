import React, { useState } from 'react';
import APIClient from "../../../services/APIClient";

const SubmitChoice = ({ voterId, choice }) => {
    const [ pubkey, setPubkey ] = useState("");
    const [ privkey, setPrivkey ] = useState("");
    const client = new APIClient();

    const submitChoiceHandler = (event) => {
        event.preventDefault();

        client.vote(pubkey, privkey, choice ).then(() => {
            console.log(`you vote for ${choice}`);
        })

        setPubkey("");
        setPubkey("");
    }

    const pubkeyChangeHandler = (event) => {
        setPubkey(event.target.value);
    }

    const privkeyChangeHandler = (event) => {
        setPrivkey(event.target.value);
    }

    return (
        <div>
            <h3> Are you sure vote for <b>{ choice }?</b> </h3>
            <form action="">
                <p>
                    <label htmlFor="pubkey">Введите pubkey:</label>
                    <input type="text" name="pubkey" id="pubkey" required onChange={pubkeyChangeHandler}/>
                </p>
                <p>
                    <label htmlFor="privkey">Введите privkey:</label>
                    <input type="privkey" name="privkey" id="privkey" required onChange={privkeyChangeHandler} />
                </p>
                <button onClick={submitChoiceHandler} type="submit">Отправить</button>
            </form>
        </div>
    );
};

export default SubmitChoice;
