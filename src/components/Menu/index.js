import React from 'react';
import { Menu, message } from 'antd';
import // AppstoreOutlined,
// MenuUnfoldOutlined,
// MenuFoldOutlined,
// PieChartOutlined,
// DesktopOutlined,
// InboxOutlined,
// MailOutlined
'@ant-design/icons';
import { getMenuInfo } from '../../api/menu';
import { connect } from 'react-redux';
import { saveMenu } from '../../store/action';

const { SubMenu } = Menu;

class LeftMenu extends React.Component {
  state = {
    menuInfo: []
  };

  componentDidMount() {
    getMenuInfo().then(res => {
      if (res.code !== 0) {
        message.error(res.message);
        return;
      }
      this.setState({
        menuInfo: res.data
      });
    });
  }

  createMenu(menuInfo) {
    let result = [];
    if (menuInfo === null || menuInfo.length < 1) return '';

    for (let x = 0; x < menuInfo.length; x++) {
      this.renderMenuInfo(menuInfo[x], result);
    }

    return result;
  }

  renderMenuInfo(item, result) {
    if (item.menuType === 1) {
      let children = [];
      if (item.children != null && item.children.length > 0) {
        children = this.createMenu(item.children, children);
      }

      result.push(
        <SubMenu
          key={item.menuId}
          title={
            <span>
              <span>
                {item.url == null ? '' : <img alt="logo" src={item.iconUrl} />}
              </span>
              <span>{this.props.collapsed ? '' : item.menuName}</span>
            </span>
          }
        >
          {children}
        </SubMenu>
      );
    }

    if (item.menuType === 2) {
      result.push(
        <Menu.Item key={item.menuId} item={item}>
          <span>{item.menuName}</span>
        </Menu.Item>
      );
    }
  }

  onMenuClick = ({ key, item: menuItem }) => {
    this.props.dispatch(saveMenu(menuItem.props.item));
  };

  render() {
    return (
      <div>
        <Menu
          mode="inline"
          theme="dark"
          className="menu"
          onClick={this.onMenuClick}
        >
          {this.createMenu(this.state.menuInfo)}
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(LeftMenu);
