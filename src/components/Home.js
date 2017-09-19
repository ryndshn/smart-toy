import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {forwardBackwardMarks, leftRightMarks} from '../constants/marks';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.onForwardBackwardSliderChange = this.onForwardBackwardSliderChange.bind(this);
    this.onLeftRightSliderChange = this.onLeftRightSliderChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }

  onForwardBackwardSliderChange(value) {
    this.setState({
      value,
    });
    this.props.sendForwardBackward(value, this.props.home);
  }

  onLeftRightSliderChange(value) {
    this.setState({
      value,
    });
    this.props.sendLeftRight(value, this.props.home);
  }

  handleKeyDown(event) {
    switch(event.key) {
      case 'w': {
        if((this.props.home.forwardBackward + 10) <= 100) {
          this.onForwardBackwardSliderChange(this.props.home.forwardBackward + 10);
        }
        break;
      }
      case 's': {
        if((this.props.home.forwardBackward - 10) >= 0) {
          this.onForwardBackwardSliderChange(this.props.home.forwardBackward - 10);
        }
        break;
      }
      case 'd': {
        if((this.props.home.leftRight + 10) <= 100) {
          this.onLeftRightSliderChange(this.props.home.leftRight + 10);
        }
        break;
      }
      case 'a': {
        if((this.props.home.leftRight - 10) >= 0) {
          this.onLeftRightSliderChange(this.props.home.leftRight - 10);
        }
        break;
      }
    }
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <button onClick={() => this.props.sendStart()}>Start</button>
          </li>
          <li>
            <button onClick={() => this.props.sendStop()}>Stop</button>
          </li>
          <li>
            <button onClick={() => this.props.sendPlay()}>Play</button>
          </li>
        </ul>
        <ul>
          <li>
            <div className="slider">
              <Slider
                value={this.props.home.forwardBackward}
                onChange={this.onForwardBackwardSliderChange}
                onAfterChange={this.onAfterChange}
                vertical
                marks={forwardBackwardMarks}
                step={10}
              />
            </div>
          </li>
          <li>
            <div className="slider">
              <Slider
                value={this.props.home.leftRight}
                onChange={this.onLeftRightSliderChange}
                onAfterChange={this.onAfterChange}
                marks={leftRightMarks}
                step={10}
              />
            </div>
          </li>
        </ul>
        <img src="http://192.168.1.100:8081/" className= "livefeed" alt="Web Camera Feed" id="cameraFeed"/>
      </div>
    );
  }
}

Home.propTypes = {
  sendLeftRight: PropTypes.func.isRequired,
  sendForwardBackward: PropTypes.func.isRequired,
  sendStart: PropTypes.func.isRequired,
  sendStop: PropTypes.func.isRequired,
  sendPlay: PropTypes.func.isRequired,
  home: PropTypes.object.isRequired
};

export default Home;
