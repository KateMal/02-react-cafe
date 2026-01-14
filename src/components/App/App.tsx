import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import { useState } from "react";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";
import type { Votes, VoteType } from "../../types/votes";

const initialVotes: Votes = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default function App() {
  const [votes, setVotes] = useState(initialVotes);

  const resetVotes = () => setVotes(initialVotes);

  const handleVote = (type: VoteType) => {
    setVotes((preVotes: Votes) => {
      return { ...preVotes, [type]: preVotes[type] + 1 };
    });
  };

  const isNotification = votes.good + votes.neutral + votes.bad === 0;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        resetVotes={resetVotes}
        handleVote={handleVote}
        isEmpty={isNotification}
      />
      {isNotification ? <Notification /> : <VoteStats votes={votes} />}
    </div>
  );
}
