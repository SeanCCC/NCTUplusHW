import React, { Component } from 'react'

export default () => {
  return (ComposeComponent) => (
    class HOC extends Component {
      render() {
        console.log(this.props)
        return (
              <ComposeComponent {...this.props} />
          );
      }
    }
  );
};
