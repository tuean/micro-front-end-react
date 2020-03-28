import { connect } from 'react-redux';
import React from 'react';
import { Tabs, Radio } from 'antd';
import { deleMenu } from '../../store/action';
const { TabPane } = Tabs;

class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'top',
      type: 'editable-card'
    };
  }
  onEdit = menuId => {
    this.props.dispatch(deleMenu(menuId));
  };
  render() {
    const { mode, type } = this.state;
    const menuInfo = this.props.menuInfo;
    console.log(menuInfo);
    return (
      <div>
        <Tabs
          defaultActiveKey="1"
          tabPosition={mode}
          type={type}
          style={{ height: 220 }}
          onEdit={this.onEdit}
        >
          {menuInfo.map(i => (
            <TabPane tab={i.menuName} key={i.menuId}>
              <h3>menuId: {i.menuId}</h3>
              <h3>menuType: {i.menuType}</h3>
              <h3>pageTypeCode: {i.pageTypeCode}</h3>
              <h3> url: {i.url}</h3>
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    menuInfo: [...state.mainReducer.menuInfo]
  };
};

export default connect(mapStateToProps)(HeaderBar);
