import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sub from "./pages/Sub";
import PageNotFound from "./pages/PageNotFound";
import Main from "./pages/Main";

const Home = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sub/:id" element={<Sub />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default Home;
