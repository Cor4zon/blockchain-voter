import React from 'react';

const ResultCard = ({ option, voices}) => {
    return (
        <div>
            <h3>Option: { option } </h3>
            <h3>Voices: { voices } </h3>
        </div>
    );
};

export default ResultCard;
