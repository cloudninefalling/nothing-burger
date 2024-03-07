import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Landing from "./pages/Landing/Landing";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
//todo <a href="http://www.freepik.com">Designed by pch.vector / Freepik</a> in burger-creator
export default App;
