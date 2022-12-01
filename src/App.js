
import './App.css';
import { createBrowserHostry } from 'history'
import { Route, Router, Routes } from 'react-router-dom';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact'
import News from './pages/News/News'
import Detail from './pages/Detail/Detail';
import CheckOutTemplate from './templates/CheckOutTemplate/CheckOutTemplate';
import Login from './pages/Login/Login';
import UserTemplate from './templates/UserTemplate';
import Checkout from './pages/Checkout/Checkout';
import Loading from './components/Loading/Loading';
import Signup from './pages/Signup/Signup';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import Films from './pages/Admin/Films/Films';
import AddNew from './pages/Admin/Films/AddNew/AddNew'
import EditFilm from './pages/Admin/Films/EditFilm/EditFilm';
import Showtime from './pages/Admin/ShowTime/Showtime';
import Profile from './pages/Profile/Profile';

function App() {

  return (
    <>
      <Loading />
      <Routes>

        <Route path='/' element={<HomeTemplate />}>
          <Route path='/' element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='news' element={<News />} />
          <Route index element={<Home />} />
          <Route path='detail/:id' element={<Detail />} />
        </Route>
        <Route element={<CheckOutTemplate />}>
          <Route path='checkout/:id' element={<Checkout />} />
        </Route>
        <Route element={<UserTemplate />}>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Route>
        <Route element={<AdminTemplate />}>
          <Route path='admin/films' element={<Films />} />
          <Route path='admin/films/addnew' element={<AddNew />} />
          <Route path='admin/films/edit/:id' element={<EditFilm />} />
          <Route path='admin/films/showtime/:maphim/:tenphim' element={<Showtime />} />
        </Route>
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
