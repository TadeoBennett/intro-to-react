import { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button";


const Hello = (props) => {
  const { name, age } = props;
  //instead of the above, you can also put "{name, age}" as the value of the props
  //this is much cleaner^

  // const name = props.name;
  // const age = props.age;

  // const bornYear = () =>{
  //   const yearNow = new Date().getFullYear()
  //   return yearNow - props.age
  // }

  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>You were born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0);
  console.log('rendering with counter value', counter)

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   6000
  // )

  const incrementCount = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const reduceCount = () => {
    console.log('reducing, value before', counter)
    setCounter(counter - 1)
  }

  const resetCount = () => {
    console.log('resetting, value to 0 before ', counter)
    setCounter(0)
  }

  const handleClick = () => {
    console.log("clicked")
  }

  // console.log("rendering...", counter)

  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Display counter={counter}></Display>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Hello name="Candy" age={51} />

      <div>Counter is {counter}</div>
      <button onClick={handleClick}>Button</button>
      <br />
      <Button onClick={() => {
        console.log("clicked2")
        incrementCount()
      }}
        text="increment count"
      >increment counter</Button>
      <Button onClick={reduceCount} text="subtract counter"></Button>
      <Button onClick={resetCount} text="reset counter"></Button>
    </div>
  )
}

export default App