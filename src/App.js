
import './index.css';
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ScrollToTop from './pages/home/ScrollToTop';
import Fotter from "./components/fotter/Fotter";
import Schedule from "./pages/schedule/Schedule";
import Football from "./pages/football/Football";
import Leaguelist from "./pages/league-list/League-list";
import MatchSummary from "./pages/match-summary/Match-Summary";
import AboutUs from "./pages/about/Aboutus";
import BasketBall from "./pages/basket/Basket";
import IceHockey from "./pages/iceHockey/iceHockey";
import AMFootball from "./pages/amFootball/amFootball";
import AllMatch from "./pages/allmatch/AllMatch";
import NotFound from './pages/404/NotFound';


function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Navbar />
        <ScrollToTop />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/football" element={<Football />} />
          <Route path="/basketball" element={<BasketBall/>} />
          <Route path="/iceHockey" element={<IceHockey/>} />
          <Route path="/amFootball" element={<AMFootball/>} />
          <Route path="/football/leaguelist/:id" element={<Leaguelist />} />
          <Route path="/football/leaguelist/matches/:id" element={<AllMatch />} />
          <Route path="/football/match-summary/:id" element={<MatchSummary />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        < Fotter />
      </BrowserRouter>



    </div>
  );
}

export default App;
