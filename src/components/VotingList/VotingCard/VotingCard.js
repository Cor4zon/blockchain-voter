import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import APIClient from "../../../services/APIClient";

import VotingOption from "../VotingOption/VotingOption";
import './VotingCard.css';

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
                <VotingOption key={item.id} votingOption={item} votingId={voting.id} />
            )
        }
    });


    return (
    <div className="voting-card">
        <Link to={`${voting.id}`} className="voting-card__link">
            <h3> { voting.title } </h3>
            <p className="voting-card__description"> { voting.description } </p>

            <i className="fa-solid fa-timer"></i>
            <p className="voting-card__deadline"> { voting.deadline } </p>
        </Link>
        { displayVotingOptions }

    </div>
    );
};

export default VotingCard;
