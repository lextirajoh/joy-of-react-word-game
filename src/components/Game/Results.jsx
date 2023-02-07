export default function Results({ attempts }) {
  return (
    <>
      <div className="guess-results">
        {attempts.map((attempt) => (
          <p className="guess" key={attempt.id}>
            {attempt.label}
          </p>
        ))}
      </div>
    </>
  );
}
