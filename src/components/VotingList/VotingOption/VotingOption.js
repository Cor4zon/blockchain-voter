import React from 'react';
import APIClient from "../../../services/APIClient";

const VotingOption = ({ votingOption }) => {
    const client = new APIClient();

    const voteForPerson = (event) => {
        event.preventDefault();
        let voterId = 2;    // заглушка

        client.voteFor(voterId, votingOption.id).then(() => {
            console.log(`you vote for ${votingOption.id}`);
        })

        console.log(votingOption.id);
    }

    return (
        <div key={ votingOption.id } className="optionID" >
            <h3> { votingOption.title } </h3>
            <button onClick={voteForPerson}>vote</button>
        </div>
    );
};

export default VotingOption;
