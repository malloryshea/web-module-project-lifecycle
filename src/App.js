import React from 'react';
//import './App.css'


class App extends React.Component {
  render() {
    return(<div>
      <h1>Github Card</h1>
      <form>
        <input placeholder="Github Handle"/>
        <button>Search</button>
      </form>

      <div id="userCard">
        <img src="https://avatars.githubusercontent.com/u/91549290?v=4"/>
        <a target="_blank" href="https://github.com/malloryshea"><h3>Mallory Shea</h3></a>
        <p>(malloryshea)</p>
        <p>Total Repos: 37</p>
        <p>Total Followers: 0</p>
      </div>

      <div id="followers">
        <div className="follower">
          <img width="200px" src="https://avatars.githubusercontent.com/u/64448617?v=4"/>
          <a target="_blank" href="https://github.com/nyamekyeannor"><p>Nyamekye Annor</p></a>
        </div>
        <div className="follower">
          <img width="200px" src="https://avatars.githubusercontent.com/u/74324320?v=4"/>
          <a target="_blank" href="https://github.com/morgankj"><p>Morgan Jones</p></a>
        </div>
        <div className="follower">
          <img width="200px" src="https://avatars.githubusercontent.com/u/89111438?v=4"/>
          <a target="_blank" href="https://github.com/AdeShennaike"><p>Adekunle Shennaike</p></a>
        </div>
        <div className="follower">
          <img width="200px" src="https://avatars.githubusercontent.com/u/91203600?v=4"/>
          <a target="_blank" href="https://github.com/leahball"><p>
          Leah Ball</p></a>
        </div>
      </div>

    </div>);
  }
}

export default App;
