import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import MyBlog from './pages/myblog/MyBlog';
import Post from "./pages/post/Post";
import Register from "./pages/register/Register";
import Setting from "./pages/setting/Setting";
import Write from "./pages/write/Write";

function App() {
  const user = false;
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/settings" element={user ? <Setting /> : <Register />} />
        <Route path="/myblogs" element={user ? <MyBlog /> : <Register />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
