import React, { useState, useEffect } from 'react';
import './CandidateResultCard.css';
import APIClient from "../../../services/APIClient";

const CandidateResultCard = ({ candidateInfo }) => {
    const [ candidate, setCandidate ] = useState({});
    const client = new APIClient();

    useEffect(() => {
        client.fetchVotingOption(+candidateInfo[0]).then((result) => {
            console.log(result.data);
            setCandidate({...result.data});
        })
    }, []);

    return (
        <div className="candidate-card">
            <h3>
                votes: {candidateInfo[1]}
            </h3>
            <h4>
                Candidate: {candidate.title}
            </h4>
            <p>
                {candidate.description}
            </p>
            <span className="link-text">
                Read more <i className="fa-solid fa-arrow-right"></i>
            </span>
        </div>
    );
};

export default CandidateResultCard;
