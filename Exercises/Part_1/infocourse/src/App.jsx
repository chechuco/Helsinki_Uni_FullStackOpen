const Header = (props) => {
  return( <h1>{props.course.name}</h1>)
}

const Parts = (props) => {
  return(
    <>
    <h3>{props.parts.name}</h3>
    <p>Number of exercises: {props.parts.exercises}</p>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return(
    <div>
      <Parts parts={props.course.parts[0]}/>
      <Parts parts={props.course.parts[1]}/>
      <Parts parts={props.course.parts[2]}/>
    </div>
  )
}

const Total = (props) => {
  return(
    <p>{props.total_ex}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  let total_ex = 'Total number of exercises: ' 
  total_ex += course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total total_ex={total_ex}/>
    </div>
  )
}

export default App
