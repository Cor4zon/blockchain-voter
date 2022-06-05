import React, { useState } from 'react';

import SubmitChoiceModal from "../SubmitChoiceModal/SubmitChoiceModal";
import './VotingOption.css';

const VotingOption = ({ votingOption, votingId }) => {
    const [ isVoting, setIsVoting ] = useState(false);

    const voteForPerson = (event) => {
        event.preventDefault();
        setIsVoting(true)
        console.log(votingOption.id);
    }

    return (
        <div key={ votingOption.id } className="voting-card__option" >
            <h3> { votingOption.title } </h3>
            <SubmitChoiceModal choice={votingOption.id} votingId={votingId} />
        </div>
    );
};

export default VotingOption;
