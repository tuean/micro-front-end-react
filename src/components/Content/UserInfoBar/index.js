import React from "react";
import { getUserInfo } from "../../../api/userInfo";
import { connect } from "react-redux";
import { Row, Col } from "antd";

class UserInfoBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {}
    };
  }

  logout = () => {
    console.log("logout");
  };

  componentDidMount() {
    getUserInfo()
      .then(res => {
        this.setState(
          {
            userInfo: res
          },
          () => {
            // console.log("userInfo");
            // console.log(this.state);
          }
        );
      })
      .catch(err => {
        console.log("获取用户信息失败");
      });
  }

  generateAdditional = list => {
    let result = [];
    for (let index = 0; index < list.length; index++) {
      const n = list[index];
      result.push(<span className="bar-font" key={index * 2}>{n.label} :</span>);
      result.push(<span className="bar-font" key={index * 2 + 1}>{n.value}</span>);
    }
    return result;
  };

  render() {
    const additional_user_info = this.props.additional_user_info;

    return (
      <Row gutter={24}>
        <Col span={24}>
          {this.generateAdditional(additional_user_info)}
          <span className="bar-font">{this.state.userInfo.name}</span>
          <span className="bar-font">{this.state.userInfo.position}</span>
          <span onClick={this.logout} className="button-logout">
            退出
          </span>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    // menuInfo: [...state.mainReducer.menuInfo],
    // activeKey: state.mainReducer.activeKey,
    additional_user_info: state.mainReducer.additional_user_info
  };
};

export default connect(mapStateToProps)(UserInfoBar);
