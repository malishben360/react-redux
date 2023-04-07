import CakeContainer from './components/CakeContainer';
import NewCakeContainer from './components/NewCakeContainer';
import './App.css';
import HookContainer from './components/HookContainer';
import IceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    <div className="App">
      <IceCreamContainer />
      <HookContainer />
      <CakeContainer />
      <NewCakeContainer />
    </div>
  );
}

export default App;
