import './App.css'
 
 let state = {
  count: 0
 }
function App() {

  function onClickHandler() {
    alert("hi there")
  }

  return (
    <div>
       <button onClick={onClickHandler}>Counter {state.count}</button>
    </div>
  )
}

export default App
