import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greeting/greetingSlice';

const Greeting = () => {
  const greeting = useSelector((store) => store.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  if (greeting.isLoading) {
    return <p>Greeting Loading...</p>;
  }

  return (
    <div>
      <h1>Randomized Greetings</h1>
      <h1>{greeting.greeting.message}</h1>
    </div>
  );
};

export default Greeting;
