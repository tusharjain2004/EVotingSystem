import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const candidates = [
  { id: 1, name: 'Candidate A', votes: 0 },
  { id: 2, name: 'Candidate B', votes: 0 },
  { id: 3, name: 'Candidate C', votes: 0 }
];

function MainPage() {
  const [voted, setVoted] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [voteCount, setVoteCount] = useState(candidates);
  const [userId, setUserId] = useState(localStorage.getItem('userId'));
  const navigate = useNavigate();

  const handleVote = () => {
    if (!selectedCandidate) {
      alert('Please select a candidate');
      return;
    }
    if (voted) {
      alert('You have already voted!');
      return;
    }
    
    // Update the vote count
    const updatedCandidates = voteCount.map(candidate => 
      candidate.id === selectedCandidate ? { ...candidate, votes: candidate.votes + 1 } : candidate
    );

    setVoteCount(updatedCandidates);
    setVoted(true);
    localStorage.setItem('voted', 'true');
    alert('Thank you for voting!');
  };

  const handleLogout = () => {
    localStorage.removeItem('userId');
    navigate('/login');
  };

  const handleCandidateSelect = (id) => {
    setSelectedCandidate(id);
  };

  return (
    <div>
      <h1>Welcome to the Online Voting System</h1>
      <p>User ID: {userId}</p>
      <h3>Select a candidate to vote for:</h3>
      {voteCount.map((candidate) => (
        <div key={candidate.id}>
          <input
            type="radio"
            id={`candidate-${candidate.id}`}
            name="candidate"
            value={candidate.id}
            onChange={() => handleCandidateSelect(candidate.id)}
            disabled={voted}
          />
          <label htmlFor={`candidate-${candidate.id}`}>{candidate.name}</label>
        </div>
      ))}
      
      <button onClick={handleVote} disabled={voted}>Vote</button>
      
      <h3>Current Vote Count:</h3>
      {voteCount.map((candidate) => (
        <div key={candidate.id}>
          {candidate.name}: {candidate.votes} votes
        </div>
      ))}

      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default MainPage;
