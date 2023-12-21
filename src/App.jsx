import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";


const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App = () => {
  const allParts = [
    [1, "Fundamentals of React", 10],
    [2, "Using props to pass data", 7],
    [3, "State of a component", 14]
  ]

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



  return (
    <>
      <Header course={course.name}></Header>
      <Content information={course.parts}></Content>
      <Total total={course.parts}></Total>
    </>
  )
}

export default App