import React, { useState, useEffect } from 'react';
import APIClient from "../../services/APIClient";
import ResultCard from "./ResultCard";
import VotingOption from "../VotingList/VotingOption/VotingOption";
import {useParams} from "react-router-dom";

const Result = ({ votingId }) => {
    let params = useParams();

    const [ votingResult, setVotingResult ] = useState([])
    const client = new APIClient();

    useEffect(() => {
        client.fetchVotingResult(params.voting_id).then((result) => {
            setVotingResult(() => {
                return Object.entries(result.data);
            })
        })
    }, []);

    const displayResults = (
        votingResult.map((item, index) => {
            return (
                <div key={index}>
                    <hr />
                    <ResultCard  option={item[0]} voices={item[1]} />
                </div>
            )
        })
    )

    return (
        <>
            { displayResults }
        </>
    );
};

export default Result;
