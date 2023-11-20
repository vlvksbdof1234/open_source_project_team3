import {Route, Routes } from 'react-router-dom';
import mainPage from './mainPage';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={mainPage}/>
      </Routes>
    </div>
  );
}

export default App;
