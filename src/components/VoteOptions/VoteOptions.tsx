import type { VoteType } from "../../types/votes";
import css from "./VoteOptions.module.css";
interface VoteOptionsProps {
  resetVotes: () => void;
  handleVote: (type: VoteType) => void;
  isEmpty: boolean;
}
export default function VoteOptions({
  resetVotes,
  handleVote,
  isEmpty,
}: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button onClick={() => handleVote("good")} className={css.button}>
        Good
      </button>
      <button onClick={() => handleVote("neutral")} className={css.button}>
        Neutral
      </button>
      <button onClick={() => handleVote("bad")} className={css.button}>
        Bad
      </button>
      {!isEmpty && (
        <button onClick={resetVotes} className={`${css.button} ${css.reset}`}>
          Reset
        </button>
      )}
    </div>
  );
}
