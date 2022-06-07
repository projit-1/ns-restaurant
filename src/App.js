import './App.css';
import Breakfast from './Home/Breakfast';
import Navbar from './Shared/Navbar';
import Banner from './Home/Banner'
import Menu from './Shared/Menu';
import Dinner from './Home/Dinner';
import Home from './Home/Home';
import Lunch from './Home/Lunch';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Banner></Banner>
      <Menu></Menu>
      <Routes>
        <Route path='/breakfast' element={<Breakfast></Breakfast>}> </Route>
        <Route path='/lunch' element={<Lunch></Lunch>}></Route>
        <Route path='/dinner' element={<Dinner></Dinner>}></Route>
      </Routes>
      <Home></Home>
    </div>
  );
}

export default App;
