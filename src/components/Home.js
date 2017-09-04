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

  render() {
    return (
      <div>
        <ul>
          <li>
            <div className="slider">
              <Slider
                value={this.props.home.forwardBackward}
                onChange={this.onForwardBackwardSliderChange}
                onAfterChange={this.onAfterChange}
                vertical
                marks={forwardBackwardMarks}
                step={20}
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
                step={20}
              />
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

Home.propTypes = {
  sendLeftRight: PropTypes.func.isRequired,
  sendForwardBackward: PropTypes.func.isRequired,
  home: PropTypes.object.isRequired
};

export default Home;
