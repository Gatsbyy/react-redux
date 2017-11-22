import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";

import { getHomeInfoQuery } from "../actions/home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      count: this.state.count + 1,
    });

    this.props.dispatch(getHomeInfoQuery(this.state.count));
  }


  render() {
    const { appState } = this.props;

    return (
      <div>
        <p>{appState.count}</p>
        <a href="#" onClick={this.handleClick}>gengxin</a>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  appState: state.home
});

export default connect(mapStateToProps)(App);

