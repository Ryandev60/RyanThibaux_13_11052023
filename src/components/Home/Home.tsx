import Banner from "./Banner/Banner.tsx";
import Features from "./Features/Features.tsx";
import React from "react";

const Home: React.FC = () => {

    return (
        <main className="home">
            <Banner/>
            <Features/>
        </main>
    );
}

export default Home;