import './scss/App.scss';
import Menu from "./Containers/Menu"
import Mean from './Containers/Mean';

function App() {
  return (
    <div className="App">
      <div className='site-menu'>
        <Menu/>
      </div>
      <div className='site-mean'>
        <Mean/>
      </div>
    </div>
  );
}

export default App;
