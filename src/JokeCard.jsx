import React from 'react'

const JokeCard = ({ joke }) => {
  if (!joke) {
    return <p className="text-center mt-5 text-white">click the button to get a joke </p>
  };
  return (
    <div className="joke-card">
      <div className="p-8 text-center mt-5 flex justify-center items-center">
        <span className="bg-white p-6 rounded-lg flex flex-col justify-center items-center">
        <h2 className="font-bold text-xl mb-4">{joke.setup}</h2>
        <p>{joke.punchline}</p>
        </span>
      </div>
      </div>
  )
};

export default JokeCard