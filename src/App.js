import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./components/auth/Auth";
import Home from "./components/home";
import Login from "./components/login/Login";
import Password from "./components/password/Password";
import Register from "./components/reagister/Register";
import RecoveryPass from "./components/recoveryPassword/RecoveryPass";
import { Provider } from 'react-redux'
import { store } from './redux/Store'
import LoginPage from "./components/loginPage/LoginPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password" element={<Password />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recoveryPass" element={<RecoveryPass />} />
          <Route path="/auth" element={<Auth />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
