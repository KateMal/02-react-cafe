import css from "./VoteStats.module.css";
export default function VoteStats({ votes }) {
  const { good, neutral, bad } = votes;
  const total = good + neutral + bad;
  const positiveRate = total ? Math.round((votes.good / total) * 100) : 0;

  return (
    <div className={css.container}>
      <p className={css.stat}>
        Good: <strong>{good}</strong>
      </p>
      <p className={css.stat}>
        Neutral: <strong>{neutral}</strong>
      </p>
      <p className={css.stat}>
        Bad: <strong>{bad}</strong>
      </p>
      <p className={css.stat}>
        Total: <strong>{total}</strong>
      </p>
      <p className={css.stat}>
        Positive: <strong>{positiveRate}%</strong>
      </p>
    </div>
  );
}
