import "./style/Global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./UI/header/header";
import Footer from "./UI/footer/footer";

//user-data
import Userdata from "./userdata";

//components
import { Suspense, lazy } from "react";
const Home = lazy(() => import("./components/home/home"));
const Product = lazy(() => import("./containers/ProductContainer"));
const SearchPage = lazy(() => import("./components/search/search"));
const UserProfile = lazy(() => import("./containers/UserProfileContainer"));

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
            {Userdata.map((user, idx) => (
              <>
                {user.products.map((product, keyid) => (
                  <Route
                    path={product.url}
                    key={keyid}
                    element={<Product i={product} key={keyid} />}
                  />
                ))}
                <Route
                  path={user.url}
                  key={idx}
                  element={<UserProfile i={user} key={idx} />}
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
