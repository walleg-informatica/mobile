import React from 'react';

export default class extends React.Component {
  render() {
    return null
  }

  componentDidMount() {
    this.$f7ready((f7) => {
      f7.dialog.alert('Component mounted');
    });
  }
}
