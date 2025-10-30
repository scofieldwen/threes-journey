// import './App.css'
import { useMemo, useState } from 'react'
import Clicker from "./Clicker.jsx";

function App({ clickersCount, children }) {
  console.log(`hsl(${ Math.random() * 360 }deg, 100%, 70%)`)

  const [ hasClicker, setHasClicker ] = useState(true)
  const [ count, setCount ] = useState(0)

  const tempArray = [...Array(clickersCount)]
  tempArray.map((value, index) => {
    console.log(value, index)
  })

  const increment = () => {
    setCount(count + 1)
  }
  const toggleClickerClick = () => {
    setHasClicker(!hasClicker)
  }

  const colors = useMemo(() => {
    const colors = []
    for(let i = 0; i < clickersCount; i++) {
      colors.push(`hsl(${ Math.random() * 360 }deg, 100%, 75%)`)
    }
    return colors
  }, [ clickersCount ])
  

  

  return (
    <>
      { children }
      <button onClick={ toggleClickerClick }>{ hasClicker ? 'Hide' : 'Show'} Clicker</button>
      { hasClicker && <>
          <div>Total count: { count }</div>
          { [...Array(clickersCount)].map((value, index) => 
            <Clicker
                key={ index }
                increment={ increment }
                keyName={ `count${index}` }
                color={ colors[index] }
            />
          )}
        </> }
    </>
  )
}

export default App
