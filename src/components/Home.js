import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.onLeftRightSliderChange = this.onLeftRightSliderChange.bind(this);
  }

  onLeftRightSliderChange(value) {
    console.log(value);
    this.setState({
      value,
    });
    this.props.sendLeftRight(value, this.props.home);
  }

  render() {
    return (
      <div>
        <Slider value={this.props.home.leftRight}
          onChange={this.onLeftRightSliderChange} onAfterChange={this.onAfterChange}
        />
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
