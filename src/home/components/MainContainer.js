import Header from '../../common/Header';
import ImgGallery from './ImgGallery';
import Footer from '../../common/Footer';

class MainContainer extends React.Component {
  render() {
    const style = {
      boxOut: {
        width: '100%'
      },
      boxCenter: {
        width: 1200,
        margin: '0 auto'
      },
      doWhat: {
        padding: '40px 0 64px'
      },
      title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        fontColor: '#666666',
        paddingBottom: 40
      },
      horizontalLine: {
        height: 2,
        width: 64,
        borderTop: '2px solid #666666',
        margin: '0 25px'
      }
    };
    return (
      <div>
        <Header />
        <ImgGallery />
        <div style={style.boxOut}>
          <div style={style.boxCenter}>
            <div style={style.doWhat}>
              <div style={style.title}>
                <div style={style.horizontalLine}></div>
                <span>我们能做什么？</span>
                <div style={style.horizontalLine}></div>
              </div>
              <div>
                天方创新是以基因检测与数据分析技术创新提供健康服务的公司，以协和医院与
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default MainContainer;