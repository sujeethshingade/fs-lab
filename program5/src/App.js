import React from 'react';
import './App.css';

const issues = [
  {
    id: 1,
    title: 'Bug in authentication',
    description: 'User unable to log in with correct credentials.',
    status: 'Open'
  },
  {
    id: 2,
    title: 'UI layout misalignment',
    description: 'The navigation bar is not aligned on mobile screens.',
    status: 'Closed'
  },
  {
    id: 3,
    title: 'Server downtime',
    description: 'The server crashed during high traffic.',
    status: 'Open'
  }
];

const IssueList = () => {
  return (
<div>
      <h2>Issue Tracker</h2>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id}>
            <h3>{issue.title}</h3>
            <p>{issue.description}</p>
            <span>Status: <strong>{issue.status}</strong></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <IssueList />
    </div>
  );
}

export default App;
