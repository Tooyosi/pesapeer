import React from 'react'
import Footer from "components/common/Footer";
import Header from "components/common/Header";
import {TopComponent} from "./Components/TopComponent";
import CalculateComponent from "./Components/CalculateComponent";
import ConnectionsComponent from "./Components/ConnectionsComponent";
import SafeComponent from './Components/SafeComponent';

const GhanaLanding:React.FC<any> = () => {
    return (
        <div id="ghana-landing">
            <Header logoType="blue"/>
            <TopComponent />
            <CalculateComponent />
            <ConnectionsComponent />
            <SafeComponent />
            <Footer />
        </div>
    )
}

export default GhanaLanding
