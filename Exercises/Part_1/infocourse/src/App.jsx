const Header = (props) => {
  return( <h1>{props.course_name}</h1>)
}

const Parts = (props) => {
  return(
    <>
    <h3>{props.parts.title}</h3>
    <p>Number of exercises: {props.parts.num_exercises}</p>
    </>
  )
}

const Content = (props) => {
  return(
    <div>
      <Parts parts={props.parts[0]}/>
      <Parts parts={props.parts[1]}/>
      <Parts parts={props.parts[2]}/>
    </div>
  )
}

const Total = (props) => {
  return(
    <p>{props.total_ex}</p>
  )
}

const App = () => {
  const course_name = 'Half Stack application development'
  let parts = [
    {
      title: 'Fundamentals of React',
      num_exercises: 10
    },
    {
      title: 'Using props to pass data',
      num_exercises: 7
    },
    {
      title: 'State of a component',
      num_exercises: 14
    }
  ]
  let total_ex = 'Total number of exercises: ' 
  total_ex += parts[0].num_exercises + parts[1].num_exercises + parts[2].num_exercises

  return (
    <div>
      <Header course_name={course_name}/>
      <Content parts={parts}/>
      <Total total_ex={total_ex}/>
    </div>
  )
}

export default App
