import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { AuthContextProvider } from './context/AuthContext';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import MyBlog from './pages/myblog/MyBlog';
import Post from "./pages/post/Post";
import Register from "./pages/register/Register";
import Setting from "./pages/setting/Setting";
import Write from "./pages/write/Write";
import ProtectedRoute from './components/protectedRoute/ProtectedRoute'
import Update from './pages/update/Update';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/write" element={<ProtectedRoute><Write /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/settings" element={<ProtectedRoute><Setting /></ProtectedRoute>} />
          {/* <Route path="/myblogs" element={<ProtectedRoute><MyBlog /></ProtectedRoute>} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
