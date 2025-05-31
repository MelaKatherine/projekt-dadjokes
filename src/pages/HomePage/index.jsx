import './style.css';
import { Joke } from '../../Joke/Joke';
import { useEffect, useState } from 'react';

export const HomePage = () => {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    const fetchName = async () => {
      const response = await fetch('http://localhost:4000/api/jokes');
      const data = await response.json();

      setJokes(data.data);
    };
    fetchName();
  }, []);

  return (
    <div className="container">
      {jokes.map((joke) => (
        <Joke
          key={joke.id}
          userName={joke.name}
          userAvatar={joke.avatar}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
      ))}
    </div>
  );
};
