import React from 'react'
import Footer from "components/common/Footer";
import Header from "components/common/Header";
import { TopComponent } from "./Components/TopComponent";
import EasiestComponent from './Components/EasiestComponent'
import SafeComponent from '../Ghana/Components/SafeComponent';
import ConnectionsComponent from '../Ghana/Components/ConnectionsComponent';
import CalculateComponent from '../Ghana/Components/CalculateComponent';

const KenyaLanding: React.FC<any> = () => {
    return (
        <div id="kenya-landing">
            <div className="top mb-5 vh-90">
                <Header logoType="white" />
                <TopComponent />
            </div>
            <EasiestComponent />
            <CalculateComponent />
            <ConnectionsComponent />
            <SafeComponent />
            <Footer />
        </div>
    )
}

export default KenyaLanding
