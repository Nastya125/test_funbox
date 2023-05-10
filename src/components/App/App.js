import './App.css';
import Card from "../Card/Card"

function App() {


  return (
    <div className="App">
      <h1 className='App__title_h1'>Ты сегодня покормил кота?</h1>
      <div className="App__container">
        <Card quantity={10} gift={"мышь в подарок"} weight={"0,5"} text="Печень утки разварная с артишоками." disabledText="Печалька, с фуа-гра закончился."/>
        <Card quantity={40} gift={"2 мыши в подарок"} weight={"2"} text="Головы щучьи с чесноком да свежайшая сёмгушка." disabledText="Печалька, с рыбой закончился." />
        <Card quantity={100} gift={"5 мышей в подарок заказчик доволен"} weight={"5"} disabled={true} text="Филе из цыплят с трюфелями в бульоне." disabledText="Печалька, с курой закончился." />
      </div>
    </div>
  );
}

export default App;
