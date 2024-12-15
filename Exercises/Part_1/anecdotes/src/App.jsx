import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick = {handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
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
  const [voted, setVoted] = useState(Array(anecdotes.length).fill(0))

  const set_Selected = () => {
    let rnumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(rnumber)
  }

  const set_Voted = () => {
    const voted_copy = [...voted]
    voted_copy[selected] += 1
    setVoted(voted_copy)
  }

  const MostVoted = () => {
    const maxVotes = Math.max( ...voted )

    if(maxVotes > 0) {
      const mostVoted = voted.indexOf(maxVotes)
      return (
        <div>
          <div>
              {anecdotes[mostVoted]}
          </div>
          <div>
            This is the most voted with {maxVotes} votes
          </div>
        </div>
      )
    } else {
      return <div>Nobody has voted</div>
    }
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <br/>
      has {voted[selected]} votes.
      <br/>
      <div>
        <Button handleClick = {set_Selected} text="watch next anecdote"/>
        <Button handleClick = {set_Voted} text="vote"/>
      </div>
      <h2>Anecdote of the day</h2>
      <div>
        <MostVoted/>
      </div>
    </div>
  )
}

export default App
