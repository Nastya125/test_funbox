import './App.css';
import Card from "../Card/Card"

function App() {
  return (
    <div className="App">
      <h1 className='App__title_h1'>Ты сегодня покормил кота?</h1>
      <div className="App__container">
        <Card quantity={10} gift={"мышь в подарок"} weight={"0,5"}/>
        <Card quantity={40} gift={"2 мыши в подарок"} weight={"2"}/>
        <Card quantity={100} gift={"5 мышей в подарок заказчик доволен"} weight={"5"}/>
      </div>
    </div>
  );
}

export default App;
