import Footer from 'components/common/Footer'
import Header from 'components/common/Header'
import React from 'react'
import CalculateComponent from '../Ghana/Components/CalculateComponent'
import ConnectionsComponent from '../Ghana/Components/ConnectionsComponent'
import SafeComponent from '../Ghana/Components/SafeComponent'
import EasiestComponent from './Components/EasiestComponent'
import {TopComponent} from './Components/TopComponent'
import WalletComponent from './Components/WalletComponent'

const Nigeria: React.FC<any> = () => {
    return (
        <div id="nigeria-landing">
            <div className="top">
                <Header />
                <TopComponent />
            </div>
            <EasiestComponent />
            <CalculateComponent />
            <WalletComponent />
            <ConnectionsComponent />
            <SafeComponent />
            <Footer />

        </div>
    )
}

export default Nigeria