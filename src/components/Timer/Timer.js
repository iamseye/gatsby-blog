import React, { Component }  from "react";
import injectSheet from "react-jss";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  Timer: {
  }
});

class Timer extends Component {
  state = {
    time: 0,
    startTime: 5,
    minutes: 0,
    seconds: 0,
  }

  startTimer() {
    this.setState({
        time: this.state.startTime
    })
    
    this.timer = setInterval(() => this.tick(), 1000)
  }

  tick() {
    this.setState({
        time: this.state.time - 1
    })

    if (this.state.time === 0) {
        clearInterval(this.timer);
    }
  }

  formatNumber = n => {
    return n.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    });
  };

  stopTimer() {
    this.setState({
        startTime: this.state.time
    })
    clearInterval(this.timer)
  }

  resetTimer() {
    this.setState({ time: 0 })
    clearInterval(this.timer)
  }
  
  render() {
    return (
      <div>
        <div> </div> 
        <div> { this.state.time } </div>

        <Button variant="contained" color="secondary" onClick={ () => this.startTimer() }>
            Start
        </Button>

        <Button variant="contained" color="primary" onClick={ () => this.stopTimer() }>
            Pause
        </Button>

        <Button variant="contained" onClick={ () => this.resetTimer() }>
            Reset
        </Button>
      </div>
    );
  }
};

export default injectSheet(styles)(Timer);
