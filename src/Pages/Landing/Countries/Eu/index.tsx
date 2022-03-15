import Footer from 'components/common/Footer'
import Header from 'components/common/Header'
import React from 'react'
import CalculateComponent from '../Ghana/Components/CalculateComponent'
import ConnectionsComponent from './Components/ConnectionsComponent'
import SafeComponent from '../Ghana/Components/SafeComponent'
import EasiestComponent from './Components/EasiestComponent'
import SendingComponent from './Components/SendingComponent'
import TopComponent from './Components/TopComponent'

const EuComponent: React.FC<any> = () => {
    return (
        <div id="eu-landing">
            <Header logoType="blue" />
            <TopComponent />
            <EasiestComponent />
            <CalculateComponent />
            <SendingComponent />
            <ConnectionsComponent />
            <SafeComponent />
            <Footer />

        </div>
    )
}

export default EuComponent