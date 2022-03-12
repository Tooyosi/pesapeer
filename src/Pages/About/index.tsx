import React from 'react'
import GlobalOutlookComponent from './Components/GlobalOutlookComponent'
import SolvingComponent from './Components/SolvingComponent'
import TopComponent from './Components/TopComponent'

const About = () => {
  return (
    <div id="about">
        <TopComponent />
        <SolvingComponent />
        <GlobalOutlookComponent />
    </div>
  )
}

export default About