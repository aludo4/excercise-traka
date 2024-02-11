import React, { useState } from 'react';

const ExerciseForm = ({ exercises, onExerciseSubmit }) => {
  const [selectedExercise, setSelectedExercise] = useState('');
  const [reps, setReps] = useState('');
  const [sets, setSets] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedExercise || !reps || !sets) {
      alert('Please fill in all fields.');
      return;
    }
    // Pass the data to the parent component for further processing
    onExerciseSubmit({ exercise: selectedExercise, reps: parseInt(reps), sets: parseInt(sets) });
    // Clear the form fields after submission
    setSelectedExercise('');
    setReps('');
    setSets('');
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <label>
        Exercise:
        <select value={selectedExercise} onChange={(e) => setSelectedExercise(e.target.value)}>
          <option className='dropDown' value="">Select an exercise</option>
          {exercises.map((exercise, index) => (
            <option key={index} value={exercise}>{exercise}</option>
          ))}
        </select>
      </label>
      <label>
        Reps:
        <input type="number" value={reps} onChange={(e) => setReps(e.target.value)} />
      </label>
      <label>
        Sets:
        <input type="number" value={sets} onChange={(e) => setSets(e.target.value)} />
      </label>
      <button type="submit">Log Exercise</button>
    </form>
  );
};

export default ExerciseForm;

