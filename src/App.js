import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

// https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.202367945356468&lng=72.83034203119135&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING