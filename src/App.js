import React from "react";
// import Toastr from "./components/Toastr";]
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./routes";
import './App.css'
// import { useSelector } from "react-redux";


const App = () => {
  // const isAuth = useSelector((state) => state.users.isAuth);
  return (
    <div className="App">
      {/* {isAuth && <Header />} */}
      {/* <Messages /> */}
      <Routes />
      {/* <Footer /> */}
    </div>
  );
};

export default App;