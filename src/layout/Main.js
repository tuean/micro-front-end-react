import React from 'react';
import { Layout } from 'antd';
import LeftMenu from '../components/Menu/index';
import HeaderBar from '../components/Header/index';
import { ProjectName } from '../config/index';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

const { Header, Sider, Content } = Layout;

export default class Main extends React.Component {
  state = {
    collapsed: false
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
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
      backgroundColor: '#ffffff'
    };
    const siderStyle = {
      backgroundColor: '#ffffff'
    };

    return (
      <Layout>
        <Sider
          style={siderStyle}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="project-container">
            {this.getProjectName(this.state.collapsed)}
            <span>
              {this.state.collapsed ? (
                <MenuUnfoldOutlined
                  onClick={this.toggleCollapsed}
                  style={{ fontSize: '16px', color: '#ffffff' }}
                ></MenuUnfoldOutlined>
              ) : (
                <MenuFoldOutlined
                  onClick={this.toggleCollapsed}
                  style={{ fontSize: '16px', color: '#ffffff' }}
                ></MenuFoldOutlined>
              )}
            </span>
          </div>

          <LeftMenu collapsed={this.collapsed} />
        </Sider>

        <Layout>
          <Header style={headerStyle}>
            <HeaderBar></HeaderBar>
          </Header>
        </Layout>
      </Layout>
    );
  }
}
