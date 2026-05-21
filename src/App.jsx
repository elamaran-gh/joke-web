import { useState } from 'react'
import JokeCard from './JokeCard.jsx'
import Button from './Button.jsx'
import { fetchJoke } from "./services/jokeApi";


function App() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);

  const getJoke = async () => {
    setLoading(true);
    const data = await fetchJoke();
    setJoke(data);
    setLoading(false);
    console.log(data);
  }
  

  return (
        <div className="joke">
      <div className=" flex justify-center items-center mt-10">
          <h1 className="text-center text-white text-3xl font-bold mt-50">Random Joke Generator </h1>
      </div>
      {loading ? <p className="text-center mt-5 text-white">Loading...</p>: <JokeCard joke={joke}/>}
      <Button onClick={getJoke} text="Get Joke" />
      </div>
  )
}

export default App
