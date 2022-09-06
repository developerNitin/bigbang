import "./styling/App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./elements/header/header";

//pages
import MainPage from "./page/mainPage/mainPage";
import Userprofile from "./page/userprofile/userprofile";
import Product from "./page/product/product";

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
          <Route path="product" element={<Product/>} />
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
                    products={i.products}
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
