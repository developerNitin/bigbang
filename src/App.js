import "./styling/App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./elements/header/header";

//pages
import MainPage from "./page/mainPage/mainPage";
import Userprofile from "./page/userprofile/userprofile";

//user-data
import Userdata from "./page/userprofile/userdata/userdata";

function App() {
  return (
    <Router>
      {" "}
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          {Userdata.map((i, idx) => {
            return (
              <Route
                key={idx}
                path={i.url}
                element={
                  <Userprofile
                    coverimg={i.coverImg}
                    name={i.name}
                    title={i.title}
                    website={i.website}
                    since={i.since}
                    location={i.location}
                    description={i.description}
                  />
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
