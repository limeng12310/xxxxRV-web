import { Component } from 'react';
import Header from '../../common/Header';
import ImgGallery from './ImgGallery';
import Footer from '../../common/Footer';

class MainContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        <ImgGallery />
        <Footer />
      </div>
    );
  }
}

export default MainContainer;