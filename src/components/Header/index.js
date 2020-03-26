import React from "react";
import { Tabs, Radio } from "antd";
const { TabPane } = Tabs;

export default class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "top"
    };
  }

  render() {
    const { mode } = this.state;
    
    return (
      <div>
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 220 }}>
          {[...Array(30).keys()].map(i => (
            <TabPane tab={`Tab-${i}`} key={i}>
              Content of tab {i}
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}
