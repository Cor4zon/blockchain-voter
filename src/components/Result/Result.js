import React, { useState, useEffect } from 'react';
import APIClient from "../../services/APIClient";
import ResultCard from "./ResultCard/ResultCard";
import VotingList from "../VotingList/VotingList";
import {Outlet} from "react-router-dom";

const Result = () => {
    return (
        <>
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default Result;
