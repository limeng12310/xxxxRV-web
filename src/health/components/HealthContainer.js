/**
 * Created by zc on 2016/10/25.
 */
import { Component } from 'react';
import banner1 from '../image/banner-1.png';
import icon1 from '../image/icon-1.png';
import icon2 from '../image/icon-2.png';
import icon3 from '../image/icon-3.png';
import icon4 from '../image/icon-4.png';
import banner2 from '../image/banner-2.png';

const HealthContainerStyle = {
  iconBox: {
    width: '1200px',
    display: 'flex'
  }
};
class HealthContainer extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={banner1} alt="" />
        </div>
        <div>
          <p>————索真基因一站式创新基因检测及解读————</p>
          <div style={HealthContainerStyle.iconBox}>
            <dl>
              <dt><img src={icon1} alt="" /></dt>
              <dd>专业</dd>
              <dd>依据权威数据库及最新临床研究结果进行解读，与临床医生共同进行指导</dd>
            </dl>
            <dl>
              <dt><img src={icon2} alt="" /></dt>
              <dd>便捷</dd>
              <dd>从取样到出具体报告仅一周</dd>
            </dl>
            <dl>
              <dt><img src={icon3} alt="" /></dt>
              <dd>准确</dd>
              <dd>闭管检测，含内外控，排除假阴性、假阳性反应</dd>
            </dl>
            <dl>
              <dt><img src={icon4} alt="" /></dt>
              <dd>灵敏</dd>
              <dd>可准确检测低至1%的突变</dd>
            </dl>
          </div>
        </div>
        <div>
          <img src={banner2} alt="" />
        </div>
      </div>
    );
  }
}

export default HealthContainer;