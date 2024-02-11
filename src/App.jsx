import logo from './bg.png';
import './App.css';
import ExerciseForm from './components/ExcerciseForm';
import { useEffect, useState } from 'react';
import { exercises } from './data/data.json';

function App() {
  const [exerciseLogs, setExerciseLogs] = useState([]);

  const handleExerciseSubmit = (exerciseData) => {
    setExerciseLogs([...exerciseLogs, exerciseData]);
  };

  const [advice, setAdvice] = useState('');

  useEffect(() => {
    const fetchAdvice = async () => {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdvice(data.slip.advice);
    };

    fetchAdvice();
  }, []); 



  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>Before you work out Motivatinal Advice:</p>
          <p>{advice}</p>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Gym Buddy 
        </p>
        <ExerciseForm
          exercises={['Push-ups', 'Squats', 'Pull-ups', 'Planks']} // Example list of exercises
          onExerciseSubmit={handleExerciseSubmit}
        />
        <div>
        <h2>Exercise Log</h2>
        <ul>
          {exerciseLogs.map((log, index) => (
            <li key={index}>{log.exercise}: {log.reps} reps, {log.sets} sets</li>
          ))}
        </ul>
      </div>
      </header>
    </div>
  );
}

export default App;
