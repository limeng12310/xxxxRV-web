import logo from './img/LOGO.png';
import tel from './img/tel.png';

const style = {
  boxOut: {
    width: '100%',
    height: 80
  },
  boxCenter: {
    width: 1200,
    height: 80,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    width: 174,
    height: 50,
    marginLeft: 0,
    background: `url(${logo})`
  },
  tabs: {
    display: 'flex',
    alignItems: 'center'
  },
  tab: {
    height: 64,
    fontSize: 20,
    color: '#666666',
    marginRight: 42,
    border: 'none',
    paddingTop: 20,
    textDecoration: 'none'
  },
  tel: {
    fontSize: 20,
    color: '#666666',
    marginLeft: 16,
    textDecoration: 'none'
  }
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.changeTab = this.changeTab.bind(this);
    this.state = {
      isChoosen: 0
    };
    this.tabs = ['首页', '天方优质创新', '莎莉医询', '关于我们'];
    this.href = [];
  }
  changeTab(e) {
    this.setState({
      isChoosen: parseInt(e.target.getAttribute('data-index'), 10)
    });
  }
  render() {
    return (
      <div style={style.boxOut}>
        <div style={style.boxCenter}>
          <div style={style.logo}></div>
          <div style={style.tabs}>
            {
              this.tabs.map((tab, i) => {
                let isChoosenStyle = {};
                if (i === this.state.isChoosen) {
                  isChoosenStyle = {
                    color: '#3fa47c',
                    borderBottom: '2px solid #3fa47c'
                  };
                }
                return (
                  <a
                    href={this.href[i]}
                    data-index={i}
                    style={Object.assign({}, style.tab, isChoosenStyle)}
                    onClick={this.changeTab}
                  >
                    {tab}
                  </a>
                );
              })
            }
            <a style={style.tel}><img src={tel} alt="tel"></img>150-1001-1813</a>
          </div>
        </div>
      </div>
    );
  }
}


export default Header;