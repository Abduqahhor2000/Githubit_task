import './scss/App.scss';
import Menu from "./Containers/Menu"
import Mean from './Containers/Mean';
import { useState } from 'react';

function App() {
  const [menuActive, setMenuActive] = useState(true);
  const [miniMenuActive, setMiniMenuActive] = useState(false);
  return (
    <div className="App">
      <div className={`${miniMenuActive ? "mini-menu" : "mini-menu-none"} `}>
        <Menu miniMenuActive={miniMenuActive} setMiniMenuActive={setMiniMenuActive}/>
      </div>
      <div className={`${!menuActive ? "site-menu-none" : ""} site-menu`}>
        <Menu/>
      </div>
      <div className={`${!menuActive ? "site-mean-none" : ""} site-mean`}>
        <Mean menuActive={menuActive} setMenuActive={setMenuActive} miniMenuActive={miniMenuActive} setMiniMenuActive={setMiniMenuActive}/>
      </div>
    </div>
  );
}

export default App;
