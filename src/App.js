import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';
//import Follower from './components/Follower';

class App extends React.Component {
  state = {
    currentUser: "malloryshea",
    user: {
      avatar_url: "https://avatars.githubusercontent.com/u/91549290?v=4",
      html_url: "https://github.com/malloryshea",
      name: "Mallory Shea",
      login: "malloryshea",
      public_repos: 37,
      followers: 0,
    },
    followers:[
      {
        login: "nyamekyeannor",
        avatar_url: "https://avatars.githubusercontent.com/u/64448617?v=4",
        html_url: "https://github.com/nyamekyeannor",
      }
    ]
  }

  render() {
    return(<div>
      <h1>Github Card</h1>
      <form>
        <input placeholder="Github Handle"/>
        <button>Search</button>
      </form>

      <User user={this.state.user}/>
      <FollowerList followers={this.state.followers}/>

    </div>);
  }
}

export default App;
