import React from 'react';
import { EnquiryProvider } from './components/EnquiryContext';
import Navbar from './components/Navbar';
import HomeBanner from './components/HomeBanner';
import Courses from './components/Courses';
import Facilities from './components/Facilities';
import About from './components/About';
import HiringPartner from './components/HiringPartner';
import Footer from './components/Footer';
import Academics from './components/Academics';
import FloatingActionButtons from './components/FloatingActionButtons';

function App() {
  return (
    <EnquiryProvider>
      <div className="App">
        <Navbar />
        <HomeBanner />
        {/* <Courses /> */}
        <Academics/>
        <Facilities />
        <About />
        <HiringPartner />
        <Footer />
        <FloatingActionButtons />
      </div>
    </EnquiryProvider>
  );
}

export default App;
