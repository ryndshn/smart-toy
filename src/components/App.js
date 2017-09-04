import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><FontAwesome name="car" size="3x"/></li>
          <li><h1>smart-toy</h1></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
