import { connect } from "react-redux";
import React from "react";
import { Tabs, Layout, Button } from "antd";
import { deleMenu, changeMenu } from "../../store/action";
import UserInfoBar from './UserInfoBar/index'

const { TabPane } = Tabs;
const { Content } = Layout;

class ContentBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "top",
      type: "editable-card"
    };
  }

  onEdit = menuId => {
    this.props.dispatch(deleMenu(menuId));
  };

  onChange = menuId => {
    this.props.dispatch(changeMenu(menuId));
  };

  render() {
    const { mode, type } = this.state;
    const menuInfo = this.props.menuInfo;
    let activeKey = this.props.activeKey;
    const operations = <UserInfoBar></UserInfoBar>;
    // console.log(menuInfo);
    
    return (
      <Layout>
        <Content>
          <Tabs
            defaultActiveKey="1"
            activeKey={`${activeKey}`}
            tabPosition={mode}
            type={type}
            style={{ height: "100%" }}
            onEdit={this.onEdit}
            onChange={this.onChange}
            tabBarExtraContent={operations}
            hideAdd={true}
            tabBarGutter={8}
          >
            {menuInfo.map(i => (
              <TabPane
                className="iframe-container"
                tab={i.menuName}
                key={i.menuId}
              >
                <iframe src={i.url} title={i.menuId} className="iframe" />
              </TabPane>
            ))}
          </Tabs>
        </Content>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    menuInfo: [...state.mainReducer.menuInfo],
    activeKey: state.mainReducer.activeKey
  };
};

export default connect(mapStateToProps)(ContentBar);
