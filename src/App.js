import CakeContainer from './components/CakeContainer';
import './App.css';
import HookContainer from './components/HookContainer';
import IceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    <div className="App">
      <IceCreamContainer />
      <HookContainer />
      <CakeContainer />
    </div>
  );
}

export default App;
