import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

import MainContent from "./components/UI/MainContent/MainContent";
import VotingList from "./components/VotingList/VotingList";
import VotingInfo from "./components/VotingList/VotingInfo/VotingInfo";
import Voting from "./components/VotingList/Voting/Voting";
import Keys from './components/Keys/Keys';
import Result from "./components/Result/Result";
import ResultCard from "./components/Result/ResultCard/ResultCard";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index path="/" element={<MainContent />} />
                <Route path="voting" element={<Voting />} >
                    <Route index path="" element={<VotingList />} />
                    <Route path=":voting_id" element={<VotingInfo />} />
                </Route>

                <Route path="keys" element={<Keys />} />
                <Route path="results" element={<Result />} >
                    <Route index path="" element={<VotingList />} />
                    <Route path=":voting_id" element={<ResultCard />} />
                </Route>

            </Route>
        </Routes>
    </BrowserRouter>
);
