import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Landing from "./pages/Landing/Landing";
import Footer from "./components/Footer/Footer";
import BuildABurger from "./pages/BuildABurger/BuildABurger";

function App() {
  return (
    <BrowserRouter
      basename={
        import.meta.env.PUBLIC_URL ? `${import.meta.env.PUBLIC_URL}` : "/"
      }
    >
      <Header />
      <main className="flex flex-col items-center pt-20">
        <Routes>
          <Route path="" element={<Landing />} />
          <Route path="/build-a-burger" element={<BuildABurger />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
