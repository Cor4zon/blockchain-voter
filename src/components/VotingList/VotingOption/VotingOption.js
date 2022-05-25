import React, { useState } from 'react';
import SubmitChoice from "../SubmitChoice/SubmitChoice";
import Button from "@mui/material/Button";
import './VotingOption.css';

import SubmitChoiceModal from "../SubmitChoiceModal/SubmitChoiceModal";

const VotingOption = ({ votingOption, votingId }) => {
    const [ isVoting, setIsVoting ] = useState(false);

    const voteForPerson = (event) => {
        event.preventDefault();
        setIsVoting(true)
        console.log(votingOption.id);
    }

    return (
        <div key={ votingOption.id } className="optionID" >
            <h3> { votingOption.title } </h3>

            <SubmitChoiceModal choice={votingOption.id} votingId={votingId} />

        </div>
    );
};

export default VotingOption;
