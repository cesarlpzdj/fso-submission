import { useState } from 'react'

const App = () => {
  const anecdotes =  [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  const initVotes = Array(anecdotes.length).fill(0)
  const [votes, setVotes] = useState(initVotes)

  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min) 

  const handleNext = () => {
    const newSelectedIx = getRandomInt(0, anecdotes.length - 1)
    //console.log(newSelectedIx)
    setSelected(newSelectedIx)
  }

  const handleVote = () => {
    const updatedVotes = [...votes]
    updatedVotes[selected] = updatedVotes[selected] + 1 
    setVotes(updatedVotes)
    //console.log(updatedVotes) 
  }

  const getMostVotedAnecdote = () => {
    let maxIndex = 0
    for (let i = 1; i < votes.length; i++) {
      if (votes[i] > votes[maxIndex])
        maxIndex = i
    }
    return maxIndex
  }

  const most = getMostVotedAnecdote()

  return (
    <>
      <div>
        <Anecdote 
          title="Anecdote of the day" 
          text={anecdotes[selected]} 
          votes={votes[selected]} />
        <div>
          <Button onClick={handleVote} text="vote" />
          <Button onClick={handleNext} text="next anecdote" />
        </div>
      </div>
      <div>
        <Anecdote 
          title="Anecdote with the most votes" 
          text={anecdotes[most]} 
          votes={votes[most]}/>
      </div>
    </>
  )
}

const Header = ({text}) => <h1>{text}</h1>

const Anecdote = ({title, text, votes}) => {
  return (
    <>
      <Header text={title} />
      {text}
      <Votes number={votes} />
    </>
  )
}

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const Votes = ({number}) => <div>has {number} votes</div> 

export default App
