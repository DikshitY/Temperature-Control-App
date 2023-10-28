import React from 'react'

function App() {
  const [temp, setTemp] = React.useState(10)

  function increment(){
    return setTemp(temp+1)
  }

  function decrement(){
    return  setTemp(temp-1)
  }

  return (
    <div className='main'>
      <div className={temp < 17 ? 'temp cold' : 'temp hot'}>{temp}°C</div>
      <div className="button-container">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
    </div>
  )
}

export default App
