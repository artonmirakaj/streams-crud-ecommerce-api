import React, {useState} from 'react';
import axios from 'axios';

const Create = () => {

  const [term, setTerm] = useState({
    eventName: '',
    description: ''
  })

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setTerm({ ...term, [name]: value })
  }

  const onFormSubmit = (e, formValues) => {
    e.preventDefault();
    console.log(formValues);
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label>Event Name:</label>
        <input name='eventName' type='text' value={term.eventName} onChange={onInputChange} />
        <label>Event Description:</label>
        <input name='description' type='text' value={term.description} onChange={onInputChange} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
};

export default Create;

/*
  user types in input
  callback gets invoked
  we set state with new value
  component re-renders
  input is told what value is (coming from state)
*/