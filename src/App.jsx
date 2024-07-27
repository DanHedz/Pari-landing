import React from 'react'
import Banner from './Components/Banner.jsx'
import './Styles/App.sass'
import './Styles/index.sass'
import Rules from './Components/Rules.jsx'
import Maximize from './Components/Maximize.jsx'
import Leaderboard from './Components/Leaderboard.jsx'
import Faq from './Components/Faq.jsx'
import Footer from './Components/Footer.jsx'


function App() {
  return (
    <>
      <Banner />
      <Rules />
      <Maximize />
      <Leaderboard />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
