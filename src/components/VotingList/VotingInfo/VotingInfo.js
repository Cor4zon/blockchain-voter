import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import APIClient from "../../../services/APIClient";
import VotingCard from "../VotingCard/VotingCard";

const VotingInfo = () => {
    let params = useParams();
    const [ voting, setVoting ] = useState({});

    const client = new APIClient();

    useEffect(() => {
        client.fetchVotings().then((result) => {
            const votings = result.data;
            const voting = votings.filter(item => item.id === +params.voting_id);
            setVoting(voting[0])
        });
    }, []);

    return (
        <div>
            <VotingCard voting={voting} />
        </div>
    );
};

export default VotingInfo;
