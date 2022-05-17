import React from 'react';
import ActionCard from '../ActionCard/ActionCard';
import { Link } from "react-router-dom";

import "./MainContent.css";

const MainContent = () => {
    return (
        <div className="content">
            <Link to="keys">
                <ActionCard text={"Сгенерировать ключи"} />
            </Link>
            <Link to="voting">
                <ActionCard text={"Голосовать"} />
            </Link>
            <Link to="voting_results">
                <ActionCard text={"Посмотреть результаты"} />
            </Link>
        </div>
    );
};

export default MainContent;
