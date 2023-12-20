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

  const name = 'Peter'
  const age = 10

  const friends = [
    { name: 'John', age: 4 },
    { name: 'Mary', age: 10 },
  ]

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />

      <div>
        <p>{friends[0].name}</p>
        <p>{friends[1].name}</p>
      </div>
    </div>
  )
}

export default App