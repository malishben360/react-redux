import CakeContainer from './components/CakeContainer';
import NewCakeContainer from './components/NewCakeContainer';
import HookContainer from './components/HookContainer';
import IceCreamContainer from './components/IceCreamContainer';
import ItemContainer from './components/ItemContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <ItemContainer cake />
      <ItemContainer />
      <IceCreamContainer />
      <HookContainer />
      <CakeContainer />
      <NewCakeContainer />
    </div>
  );
}

export default App;
