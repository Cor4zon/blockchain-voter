import React, { useState } from 'react';
import SubmitChoice from "../SubmitChoice/SubmitChoice";

const VotingOption = ({ votingOption }) => {
    const [ isVoting, setIsVoting ] = useState(false);


    const voteForPerson = (event) => {
        event.preventDefault();
        setIsVoting(true)
        console.log(votingOption.id);
    }

    return (
        <div key={ votingOption.id } className="optionID" >
            <h3> { votingOption.title } </h3>

            {isVoting ? <SubmitChoice voterId={2} choice={votingOption.id} />
                : <button onClick={voteForPerson}>vote</button>
            }

        </div>
    );
};

export default VotingOption;
