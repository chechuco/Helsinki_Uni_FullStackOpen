import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) => {
  if(text === "positive") {
    return (
    <tr>
      <td>{text}</td>
        <td> {value}%</td>
    </tr>
    )
  } else {
    return (
    <tr>
      <td>{text}</td>
      <td> {value}</td>
    </tr>
    )
  }
}

const Statictics =({good, neutral, bad}) => {
  let all = good + neutral + bad

  if (all === 0) {
    return (<div>No feedback yet. Relax.</div>)
  }
  
  let average = (good - bad) / all
  let positive = good / all * 100

  return (
  <div>
    <h1>statistics</h1>
    <table>
      <tbody>
        <StatisticLine text="good" value ={good} />
        <StatisticLine text="neutral" value ={neutral} />
        <StatisticLine text="bad" value ={bad} />
        <StatisticLine text="all" value ={all} />
        <StatisticLine text="average" value ={average} />
        <StatisticLine text="positive" value ={positive} />
      </tbody>
    </table>
  </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const set_Good = (good) => {
    setGood(good + 1)
  }

  const set_Neutral = (neutral) => {
    setNeutral(neutral + 1)
  }

  const set_Bad = (bad) => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback </h1>

      <div>
        <Button handleClick={() => set_Good(good)} text='good'/>
        <Button handleClick={() => set_Neutral(neutral)} text='neutral'/>
        <Button handleClick={() => set_Bad(bad)} text='bad'/>
      </div>

      <Statictics good={good} neutral={neutral} bad={bad}/>
      
    </div>
  )
}

export default App
