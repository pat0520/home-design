import React from "react";
import Designs from "./Designs";
import Home from "./Home";
import Nav from "./Nav";
import { Route } from "react-router-dom";

function App() {
    return (
        <>
            <Nav />
            <Route path="/" component={Home} exact />
            <Route path="/designs" component={Designs} exact />
        </>
    )
}

export default App;