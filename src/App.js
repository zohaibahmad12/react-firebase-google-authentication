import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FirebaseContextProvider } from './context/FirebaseContext';
import UpdateProfileForm from './pages/UpdateProfileForm';
import HomePage from './pages/HomePage';
import './App.css'
function App() {

  return (
    <BrowserRouter>
      <FirebaseContextProvider>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/updateProfile"} element={<UpdateProfileForm />} />
        </Routes>
      </FirebaseContextProvider>
    </BrowserRouter>
  )

}

export default App;
