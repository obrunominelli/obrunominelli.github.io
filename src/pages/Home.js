import{ Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomeAbout from '../components/HomeAbout';
import HomeIntro from '../components/HomeIntro';
import HomeMetrics from '../components/HomeMetrics';

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="col">
          <HomeIntro />
          <HomeMetrics />
          <HomeAbout />
        </main>
        <Footer />
      </>
    );
  }
}

export default Home;
