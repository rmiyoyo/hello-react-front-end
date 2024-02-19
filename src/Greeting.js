import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import setGreeting from './redux/actions/greetingActions';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    fetch('http://localhost:4000/random_greeting')
      .then((response) => response.json())
      .then((data) => {
        console.log('Data:', data);
        dispatch(setGreeting(data.greeting));
      })
      .catch((error) => console.error('Error fetching random greeting:', error));
  }, [dispatch]);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default Greeting;
