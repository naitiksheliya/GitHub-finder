import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/assets/Footer";
import Home from "./components/layout/pages/Home";
import About from "./components/layout/pages/About";
import NotFound from "./components/layout/pages/NotFound";
import User from "./components/layout/pages/User";
import Navbar from "./components/layout/assets/Navbar";
import Alert from "./components/layout/assets/Alert";
// import Switch from
import { GithubProvider } from "./components/context/github/GithubContext";
import { AlertProvider } from "./components/context/github/alert/AlertContext";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar title="Github-Finder" />
            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/*" element={<NotFound />} />
                <Route path="/user/:login" element={<User/>} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
