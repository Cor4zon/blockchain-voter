import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import APIClient from "../../../services/APIClient";

const VotingCard = ({ voting }) => {
    const [ votingOptions, setVotingOptions ] = useState([]);
    const client = new APIClient();

    useEffect(() => {
        client.fetchVotingOption().then((result) => {
            const options = result.data.filter(item => item.voting_id === voting.id);
            console.log(options)
            setVotingOptions([...options])
        });
    }, []);

    const voteForPerson = (event) => {
        event.preventDefault();
        console.log(event.target.closest('.optionID'));

    };

    const displayVotingOptions = votingOptions.map((item) => {
        return (
            <div key={ item.id } className="optionID" >
                <h3> { item.title } </h3>
                <button onClick={voteForPerson}>vote</button>
            </div>
        )});


    return (
        <div>
            <Link to={`${voting.id}`} >
                <h3> { voting.title } </h3>
            </Link>
            <p> { voting.description } </p>
            <p> { voting.deadline } </p>
            { displayVotingOptions }
        </div>
    );
};

export default VotingCard;
