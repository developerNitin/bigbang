import "./style/Global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./UI/header/header";
import Footer from "./UI/footer/footer";

//user-data
import Userdata from "./userdata";

import { Suspense, lazy } from "react";
//components
const Home = lazy(() => import("./components/home/home"));
const Product = lazy(() => import("./components/product/product"));
const SearchPage = lazy(() => import("./components/search/search"));
const UserProfile = lazy(() => import("./containers/UserProfile"));

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Suspense fallback={<h1 style={{ marginTop: "6rem" }}>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
            {/* 
            {Userdata.map(function (i) {
              return i.products.map(function(i, idx) {
               return <Route path={i.url} key={idx} element={<Product/>}/>
              })
            })} */}

            {Userdata.map((user, idx) => (
              <>
                {user.products.map((product, idx) => (
                  <Route
                    path={product.url}
                    key={idx}
                    element={<Product i={product} />}
                  />
                ))}
                <Route
                  path={user.url}
                  key={idx}
                  element={<UserProfile i={user} />}
                />
              </>
            ))}
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}
