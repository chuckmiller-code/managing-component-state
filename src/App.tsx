import { useState } from "react"

function App() {
  const [drink, setDrink] = useState ({
    title: "Americano",
    price: 5
  });

  const handleClick = () => {
    setDrink({...drink, price: 6})
  }

  // const [person, setPerson] = useState({
  //   firstName: '',
  //   lastName: ''
  // });
  // const [isLoading, setLoading] = useState(false);



  return (
    <>
      {drink.price}
      <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default App
