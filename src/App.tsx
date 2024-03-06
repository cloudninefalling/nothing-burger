import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Landing from "./pages/Landing/Landing";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
//todo <a href="http://www.freepik.com">Designed by pch.vector / Freepik</a> in burger-creator
export default App;
