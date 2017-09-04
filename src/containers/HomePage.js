import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/homeActions';
import Home from '../components/Home';

export const HomePage = (props) => {
  return (
    <Home
      sendForwardBackward={props.actions.sendForwardBackward}
      sendLeftRight={props.actions.sendLeftRight}
      home={props.home}
    />
  );
};

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  home: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    home: state.home
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
