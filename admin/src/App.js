import Home from "./pages/home/Home";
import Login from './pages/login/Login'
import List from './pages/list/List'
import Single from './pages/single/Single'
import New from './pages/new/New'
import ViewBlog from './pages/viewblog/ViewBlog'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {blogInputs} from './formSource'
import './style/dark.scss'
import { useContext } from "react";
import {DarkModeContext} from './context/darkModeContext'

function App() {

  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path ="/">
            <Route index element ={<Home />} />
            <Route path="blogs">
                <Route index element={<List />} />
                <Route path=":id" element={<ViewBlog />}  />
                <Route path="new" element={<New inputs={blogInputs} title="Add New Blog" />}  />
            </Route>
          </Route>
        </Routes> 
      </BrowserRouter>
     
    </div>
  );
}

export default App;
