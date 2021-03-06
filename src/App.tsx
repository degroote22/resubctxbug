import * as React from "react";
import * as Router from "react-router-dom";
import { ComponentBase } from "resub";

class NotWorking extends ComponentBase<{}, {}> {
  render() {
    return <div>{this.props.children}</div>;
  }
}

class Working extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

class App extends React.Component {
  renderWorks = () => "WORKS!!!";

  renderRedirect = () => <Router.Redirect to="/a" />;
  render() {
    return (
      <Router.BrowserRouter>
        <div>
          Working:
          <Working>
            <Router.Switch>
              <Router.Route
                exact={true}
                path="/"
                render={this.renderRedirect}
              />
              <Router.Route
                path="/a"
                render={this.renderWorks}
              />
            </Router.Switch>
          </Working>
          Not working:
          <NotWorking>
            <Router.Switch>
              <Router.Route
                path="/a"
                render={this.renderWorks}
              />
            </Router.Switch>
          </NotWorking>
        </div>
      </Router.BrowserRouter>
    );
  }
}

export default App;
