import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Form from './Form';
import Results from './Results';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [attempts, setAttempts] = useState([]);

  function handleAddAttempt(input) {
    const newAttempt = {
      label: input,
      id: crypto.randomUUID(),
    };
    const nextAttempts = [...attempts, newAttempt];
    setAttempts(nextAttempts);
  }

  return (
    <>
      <Results attempts={attempts}/>
      <Form handleAddAttempt={handleAddAttempt} />
    </>
  );
}

export default Game;
