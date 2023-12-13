import './App.css';
import { data } from './component/cardlist';
import Card from './component/card';
function App() {
  const list = data.map((item,index)=>    <Card key={index} img={item.img} title={item.title} des={item.des}/>);
  return (
    <div>
      
    {list}
    </div>
  );
}

export default App;
