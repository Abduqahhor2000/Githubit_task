import './scss/App.scss';
import Menu from "./Containers/Menu"
import Mean from './Containers/Mean';
import { useState } from 'react';

function App() {
  const [menuActive, setMenuActive] = useState(true);
  return (
    <div className="App">
      <div className={`${!menuActive ? "site-menu-none" : ""} site-menu`}>
        <Menu/>
      </div>
      <div className={`${!menuActive ? "site-mean-none" : ""} site-mean`}>
        <Mean menuActive={menuActive} setMenuActive={setMenuActive}/>
      </div>
    </div>
  );
}

export default App;
