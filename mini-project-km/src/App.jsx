import * as React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import NewsPage from './pages/NewsPage';
import PlayersPage from './pages/PlayersPage';
import FaqPage from './pages/FaqPage';
import Login  from './pages/User/LoginUser';
import Ticket from './pages/User/BuyTicket';
import Admin from './pages/Admin/LoginAdmin';
import Dashboard from "./pages/Admin/Dashboard";
import Add from "./pages/Admin/Add";
import Update from "./pages/Admin/Update";
import ErrorPage from "./pages/Error";
import Protect from './Protect/ProtectUser';
import FaqTest from './pages/FAQ'

function App() {

  return (
        <div className="App">
          
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/news' element={<NewsPage/>}/>
          <Route path='/players' element={<PlayersPage/>}/>
          <Route path='/faq' element={<FaqPage/>}/>
          <Route path='/faq-test' element={<FaqTest/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route 
            path='/buy-ticket' 
            element={
              <Protect>
                <Ticket />
              </Protect>
            }/>
          <Route path='/admin/login' element={<Admin/>}/>
          <Route path='/admin/dashboard' element={<Dashboard/>}/>
          <Route path='/admin/add-ticket' element={<Add/>}/>
          <Route path='/admin/update-ticket/:id' element={<Update/>}/>
        </Routes>
        <Footer />
        </BrowserRouter>
        </div>
   
  );
}

export default App
