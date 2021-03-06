import React from 'react';
import ActionCard from '../ActionCard/ActionCard';
import { Link } from "react-router-dom";

import "./MainContent.css";

const MainContent = () => {
    return (
        <div className="content">
            <Link to="keys" className="action-link get-keys">
                <ActionCard text={"Сгенерировать ключи"} />
            </Link>
            <Link to="voting" className="action-link add-vote">
                <ActionCard text={"Голосовать"} />
            </Link>
            <Link to="results" className="action-link check-results">
                <ActionCard text={"Посмотреть результаты"} />
            </Link>
        </div>
    );
};

export default MainContent;
