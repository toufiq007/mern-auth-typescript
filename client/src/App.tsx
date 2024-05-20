import "./App.css";
import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import LoginScreen from "./components/LoginScreen";
import SignInScreen from "./components/SignInScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/sign-in" element={<LoginScreen />} />
          <Route path="/sign-up" element={<SignInScreen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
