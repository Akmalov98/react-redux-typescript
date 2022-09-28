import React from 'react'
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Content from './components/content/content';
import Dialogs from './components/dialogs/dialogs';
import NewsContent from './components/newsContent/newsContent';
import FriendsList from './components/friendsList/friendsList';
import GroupsList from './components/groupsList/groupsList';
import MusicsList from './components/musicsList/musicsList';
import PhotosList from './components/photosList/photosList';
import Dialog from './components/dialogs/dialog/dialog';
import { BrowserRouter,   Routes, Route } from 'react-router-dom';



const App = (props) => {
  let path1 = '/dialogs/1' + props.state.dialogs.id
  return (
    <BrowserRouter>
      <div className="app-wrapper">
          <Header/>
          <Navbar/>
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/content" element={<Content stories={props.state.content.stories}
              />}/>
              <Route path="/dialogs" element={<Dialogs dialogs={props.state.dialogs}/>}/>
              <Route path="/newsContent" element={<NewsContent/>}/>
              <Route path="/friendsList" element={<FriendsList/>}/>
              <Route path="/groupsList" element={<GroupsList/>}/>
              <Route path="/musicsList" element={<MusicsList/>}/>
              <Route path='/photosList' element={<PhotosList/>}/>
              <Route path="/dialogs/:id" element={<Dialog dialogs={props.state.dialogs} setStateDialog={props.setStateDialog}/>}/>
            </Routes>
          </div>
        </div>
    </BrowserRouter>
  )
}

export default App;
