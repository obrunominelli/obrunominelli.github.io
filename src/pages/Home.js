import{ Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomeAbout from '../components/HomeAbout';
import HomeContact from '../components/HomeContact';
import HomeIntro from '../components/HomeIntro';
import HomeMetrics from '../components/HomeMetrics';
import HomeSkills from '../components/HomeSkills';

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <HomeIntro />
          <HomeMetrics />
          <HomeAbout />
          <HomeSkills />
          <HomeContact />
        </main>
        <Footer />
      </>
    );
  }
}

export default Home;
