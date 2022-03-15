import Footer from 'components/common/Footer'
import Header from 'components/common/Header'
import React from 'react'
import CalculateComponent from '../Ghana/Components/CalculateComponent'
import ConnectionsComponent from '../Ghana/Components/ConnectionsComponent'
import SafeComponent from '../Ghana/Components/SafeComponent'
import EasiestComponent from './EasiestComponent'
import TopComponent from './TopComponent'

const Nigeria: React.FC<any> = () => {
    return (
        <div id="nigeria-landing">
            <Header logoType="blue" />
            <TopComponent />
            <EasiestComponent />
            <CalculateComponent />
            <ConnectionsComponent />
            <SafeComponent />
            <Footer />

        </div>
    )
}

export default Nigeria