import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import APIClient from "../../../services/APIClient";
import CandidateResultCard from "../CandidateResultCard/CandidateResultCard";

const ResultCard = ({ option, voices}) => {
    const [ results, setResults ] = useState([]);
    const params = useParams();                // params.voting_id
    const client = new APIClient();

    const convertObjectToArray = obj => {
        return Object.entries(obj);
    }

    useEffect(() => {
        client.fetchVotingResult(params.voting_id).then((result) => {
            setResults(convertObjectToArray(result.data));
        });
    }, []);

    return (
        <div className="result-card">
            { results.map((item, index) => {
                return <CandidateResultCard key={index} candidateInfo={item} />
            }) }
        </div>
    );
};

export default ResultCard;
