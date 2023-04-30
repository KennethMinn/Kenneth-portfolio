import "./App.scss";
// import { Route, Routes } from "react-router-dom";
import Nav from "./routes/Nav";
import Home from "./routes/Home";
import AboutMe from "./routes/about-me";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <AboutMe />
      {/* <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route index element={<AboutMe />} />
        </Route>
      </Routes> */}
    </>
  );
}

export default App;
