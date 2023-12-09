import Header from "./components/header";
import Images from "./components/images";
import Intro from "./components/intro";
import List from "./components/list"
import youya1 from './images/youya1.jpeg';
import youya2 from './images/youya2.jpeg';
import youya4 from './images/youya4.jpeg';

let arr = [
  {   id:1,
      img:youya1,
      point: 5,
      nation: "Japan"
  },
  {
      id: 2,
      img:youya2,
      point: 4.7,
      nation: "China"
  },
  {
      id: 3,
      img:youya4,
      point: 4.4,
      nation: "Japan"
  }
];


function App() {

  return (
    <div className="App">
      <Header />
      <Images />
      <Intro />
      <List data={ arr }/>

    </div>
  );
}

export default App;
