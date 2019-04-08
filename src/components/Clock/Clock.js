import React, { Component }  from "react";
import injectSheet from "react-jss";

const styles = theme => ({
  Clock: {
    }
});


class Clock extends Component {
  state = {
    time: new Date()
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  componentWillMount() {
    clearInterval(this.interval);
  }
  
  tick() {
    this.setState({
      time: new Date()
    })
  }

  render() {
    return (
      <div>
        { this.state.time.toLocaleTimeString() }
      </div>
    );
  }
};

export default injectSheet(styles)(Clock);
