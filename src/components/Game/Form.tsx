import React from 'react';

export default function Form({ handleAddAttempt }) {
  const [input, setInput] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (input.length !== 5) {
      window.alert('Enter a word of 5 characters');
      return;
    }

    handleAddAttempt(input.toUpperCase());
    setInput('');
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </form>
    </>
  );
}
