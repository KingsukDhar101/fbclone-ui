import { Component } from "react";
import { GetUserData } from "../Services/UserData";
import { GetWallData } from "../Services/UserData";
import Header from "./Bootstrap/Header";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Feed from "./Feed";

export default class App extends Component {
  state = {
    UserData: null,
    WallData: [],
  };
  componentDidMount() {
    GetUserData().then(({ data }) => this.setState({ UserData: data }));
    GetWallData().then(({ data }) => this.setState({ WallData: data }));
  }
  render() {
    return (
      <div className="App">
        <Header
          dark={false}
          className="Header"
          UserMeta={this.state.UserData && this.state.UserData.UserMeta}
        >
          Facebook Clone
        </Header>
        {this.state.UserData ? (
          <div className="container">
            <div className="row">
              <Sidebar
                UserMeta={this.state.UserData.UserMeta}
                ContentList={this.state.UserData.ContentList}
              />
              <Main WallData={this.state.WallData} />
              <Feed
                Birthdays={this.state.UserData.Birthdays}
                Pages={this.state.UserData.Pages}
                NewsFeed={this.state.UserData.NewsFeed}
              />
            </div>
          </div>
        ) : (
          "Login page"
        )}
      </div>
    );
  }
}
