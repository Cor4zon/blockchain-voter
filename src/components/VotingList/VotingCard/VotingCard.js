import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import APIClient from "../../../services/APIClient";

import VotingOption from "../VotingOption/VotingOption";

const VotingCard = ({ voting }) => {
    const [ votingOptions, setVotingOptions ] = useState([]);
    const client = new APIClient();

    useEffect(() => {
        client.fetchVotingOption().then((result) => {
            const options = result.data.filter(item => item.voting_id === voting.id);
            setVotingOptions([...options])
        });
    }, []);

    const displayVotingOptions = votingOptions.map((item) => {
        if (item.voting === voting.id) {
            return (
                <VotingOption key={item.id} votingOption={item} />
            )
        }
    });


    return (
        <div>
            <Link to={`${voting.id}`} >
                <h3> { voting.title } </h3>
            </Link>
            <hr />
            <p> { voting.description } </p>
            <p> { voting.deadline } </p>
            { displayVotingOptions }
        </div>
    );
};

export default VotingCard;
