import './scss/App.scss';
import Menu from "./Containers/Menu"
import Mean from './Containers/Mean';
import History from './Containers/History';
import { useState } from 'react';

function App() {
  const [menuActive, setMenuActive] = useState(true);
  const [miniMenuActive, setMiniMenuActive] = useState(false);
  const [historyActive, setHistoryActive] = useState(false)
  return (
    <div className="App">
      {/* Menu Component */}
      <div className={`${!menuActive ? "site-menu-none" : ""} site-menu`}>
        <div>
          <Menu/>
        </div>
      </div>

      {/* Mean Component */}
      <div className={`${!menuActive ? "site-mean-none" : ""} site-mean`}>
        <Mean 
            menuActive={menuActive}
            setMenuActive={setMenuActive}
            miniMenuActive={miniMenuActive}
            setMiniMenuActive={setMiniMenuActive}
            historyActive={historyActive} 
            setHistoryActive={setHistoryActive}
        />
      </div>

      {/* Mini Menu Component */}
      <div 
          onClick={() => setMiniMenuActive(false)}
          className={`${miniMenuActive ? "backFon" : "backFon-none"} `}>
      </div>
      <div className={`${miniMenuActive ? "mini-menu" : "mini-menu-none"}`}> 
        <div>
          <Menu 
              miniMenuActive={miniMenuActive}
              setMiniMenuActive={setMiniMenuActive}
          /> 
        </div>
      </div>

      {/* History Component */}
      <div 
          onClick={() => setHistoryActive(false)} 
          className={`${historyActive ? "backFon" : "backFon-none"}`}>
      </div>
      <div className={`${historyActive ? "history" : "history-none"}`}> 
        <div>
          <History 
              historyActive={historyActive}
              setHistoryActive={setHistoryActive}
          /> 
        </div>
      </div>
    </div>
  );
}

export default App;
