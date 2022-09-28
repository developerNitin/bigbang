import "./style/Global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./UI/header/header";
import Footer from "./UI/footer/footer";


//user-data
import Userdata from "./components/userprofile/userdata";

import { Suspense, lazy } from "react";
//components
const Home = lazy(() => import("./components/home/home"));
const Product = lazy(() => import("./components/product/product"));
const SearchPage = lazy(() => import("./components/search/search"));
const Userprofile = lazy(() => import("./components/userprofile/userprofile") );


export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Suspense fallback={<h1 style={{ marginTop: "6rem" }}>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product />} />
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
