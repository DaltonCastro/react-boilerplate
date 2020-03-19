import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';

@connect(({ auth }) => ({ auth }), null)
class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <header />
        <main>
          {this.props.children}
        </main>
        <aside />
      </Fragment>
    );
  }
}

export default App;
