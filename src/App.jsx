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

  // const name = 'Peter'
  // const age = 10

  // const friends = [
  //   { name: 'John', age: 4 },
  //   { name: 'Mary', age: 10 },
  // ]

  const course = "Half Stack application development"
  const parts = [
    // {
    // "part1": "Fundamentals of React",
    // "exercise1": 10,
    // "part1": "Using props to pass data",
    // "exercise2": 7,
    // "part1": "State of a component",
    // "exercise1": 14
    // }
    [1, "Fundamentals of React", 10],
    [2, "Using props to pass data", 7],
    [3, "State of a component", 14]
  ]

  return (
    // <div>
    //   <h1>Greetings</h1>
    //   <Hello name='Maya' age={26 + 10} />
    //   <Hello name={name} age={age} />

    //   <div>
    //     <p>{friends[0].name}</p>
    //     <p>{friends[1].name}</p>
    //   </div>
    // </div>
    <>
      <Header course={course}></Header>
      <Content information={parts}></Content>
      <Total total={parts}></Total>
    </>
  )
}

export default App