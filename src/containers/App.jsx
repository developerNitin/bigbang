import "./styling/Global.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "../components/subComponents/header/header";
import Footer from "../components/subComponents/footer/footer";

//pages
import MainPage from "../components/mainComponents/mainPage/mainPage";
import Userprofile from "../components/mainComponents/userprofile/userprofile";
// import Product from "../components/mainComponents/product/product";
import SearchPage from "../components/mainComponents/searchPage/searchPage";

//user-data
import Userdata from "../components/mainComponents/userprofile/userdata";
import { Suspense, lazy } from "react";

const LazyProductPage = lazy(() =>
  import("../components/mainComponents/product/product")
);

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Suspense fallback={<h1 style={{ marginTop: "6rem" }}>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/product" element={<LazyProductPage />} />
            <Route path="/search" element={<SearchPage />} />
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
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}
