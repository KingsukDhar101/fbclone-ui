import { Component } from "react";
import { GetUserData } from "../Services/UserData";
import { GetWallData } from "../Services/UserData";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";
import Feed from "./Feed/Feed";
import Loading from "./Loading";
import Login from "./Login";

export default class App extends Component {
  state = {
    UserData: null,
    WallData: [],
    Loading: true,
  };
  componentDidMount() {
    GetUserData().then(({ data }) => {
      this.setState({ UserData: data });
      GetWallData().then(({ data }) => {
        this.setState({ WallData: data, Loading: false });
      });
    });
  }
  render() {
    console.log(
      "This is cloned version of facebook (only for educational purpose)"
    );
    return (
      <div className="App">
        <Header
          dark={false}
          className="Header"
          UserMeta={this.state.UserData && this.state.UserData.UserMeta}
        >
          Facebook Clone
        </Header>
        {this.state.Loading ? (
          <Loading />
        ) : /* <h2>"Loading please wait..."</h2> */
        this.state.UserData ? (
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
          /* {"Login page" */
          <Login />
        )}
      </div>
    );
  }
}
