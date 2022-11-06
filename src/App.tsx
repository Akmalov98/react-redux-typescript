import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './components/content/Content';
import Dialog from './components/dialogs/dialog/Dialog';
import Dialogs from './components/dialogs/Dialogs';
import FriendsList from './components/friendsList/FriendsList';
import GroupsList from './components/groupsList/GroupsList';
import Header from './components/header/Header';
import MusicsList from './components/musicsList/MusicsList';
import Navbar from './components/navbar/Navbar';
import NewsContent from './components/newsContent/NewsContent';
import PhotosList from './components/photosList/PhotosList';
import { store } from './store';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Routes>
             <Route path="/dialogs" element={<Dialogs/>}/>
             <Route path="/content" element={ <Content/>}/>
             <Route path="/newsContent" element={<NewsContent/>}/>
             <Route path="/friendsList" element={<FriendsList/>}/>
             <Route path="/groupsList" element={<GroupsList/>}/>
             <Route path="/musicsList" element={<MusicsList/>}/>
             <Route path='/photosList' element={<PhotosList/>}/>
             <Route path='/dialogs/1' element={<Dialog/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
