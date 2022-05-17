import React, { useState, useEffect } from 'react';

import APIClient from "../../services/APIClient";
import VotingCard from './VotingCard/VotingCard'

const VotingList = () => {
    const [ votings, setVotings ] = useState([]);
    const client = new APIClient();

    useEffect(() => {
        client.fetchVotings().then((result) => {
            setVotings(result.data)
        });
    }, [votings]);

    return (
        <div>
            { votings.map(voting => {
                return <VotingCard key={voting.id} voting={voting} />
            }) }
        </div>
    );
};

export default VotingList;
