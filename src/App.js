import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";
import { MockAPI } from "./mockman";
import { Explore } from "./pages/explore/explore";
import { History } from "./pages/history/history";
import { Home } from "./pages/home/home";
import { Liked } from "./pages/liked videos/liked";
import { Playlist } from "./pages/playlist/playlist";
import { WatchLater } from "./pages/watch later/watchLater";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/history" element={<History />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/mock" element={<MockAPI />} />
      </Routes>
    </div>
  );
}

export default App;
