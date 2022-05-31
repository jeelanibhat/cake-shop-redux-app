import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store'
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewIcereamContainer from './components/NewIcereamContainer';
import UserComponent from './components/UserComponent';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <UserComponent/>
      {/* <CakeContainer/>
      <hr></hr>
      <HooksCakeContainer/>
      <hr></hr>
      <IceCreamContainer/>
      <hr></hr>
      <NewIcereamContainer/> */}
    </div>
    </Provider>
  );
}

export default App;
