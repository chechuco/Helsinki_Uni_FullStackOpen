import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState(0)

  const handleClick = () => {
    console.log('clicked the button')
    setValue(0)
  }

  return (
    <div>
      <button onClick={handleClick}>reset to zero</button>
      <p>{value}</p>
    </div>
  )
}

export default App
