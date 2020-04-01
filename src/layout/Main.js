import React from "react";
import { Layout } from "antd";
import LeftMenu from "../components/Menu/index";
import ContentBar from "../components/Content/index";
import { ProjectName } from "../config/index";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { collapseSider } from "../store/action";
import { Scrollbars } from "react-custom-scrollbars";

const { Header, Sider, Content, Footer } = Layout;

class Main extends React.Component {
  state = {
    // collapsed: false
  };

  toggleCollapsed = () => {
    // this.setState({
    //   collapsed: !this.state.collapsed
    // });
    this.props.dispatch(collapseSider());
  };

  getProjectName(collapsed) {
    if (!collapsed) {
      return <span className="projectName">{ProjectName}</span>;
    } else {
      return <span></span>;
    }
  }

  render() {
    const headerStyle = {
      padding: 0,
      backgroundColor: "#ffffff"
    };
    const siderStyle = {
      backgroundColor: "#ffffff"
    };

    let collapsed = this.props.sider_collapesed;

    console.log("main: " + collapsed);

    return (
      <Layout>
        <Sider
          style={siderStyle}
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className="project-container">
            {this.getProjectName(collapsed)}
            <span>
              {collapsed ? (
                <MenuUnfoldOutlined
                  onClick={this.toggleCollapsed}
                  style={{ fontSize: "16px", color: "#ffffff" }}
                ></MenuUnfoldOutlined>
              ) : (
                <MenuFoldOutlined
                  onClick={this.toggleCollapsed}
                  style={{ fontSize: "16px", color: "#ffffff" }}
                ></MenuFoldOutlined>
              )}
            </span>
          </div>

          <Scrollbars className="leftMenu-container" style={{height: '90%'}}>
              <LeftMenu />
            </Scrollbars>
        </Sider>

        <Layout>
          <Content>
            <ContentBar></ContentBar>
          </Content>
        </Layout>

      
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    // menuInfo: [...state.mainReducer.menuInfo],
    // activeKey: state.mainReducer.activeKey,
    sider_collapesed: state.siderReducer.sider_collapesed
  };
};

export default connect(mapStateToProps)(Main);
