import React, { Component, Fragment } from "react";
import EventDashboard from "../features/event/EventDashboard/EventDashboard";
import NavBar from "../features/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";
import { Route, Switch, withRouter } from "react-router-dom";
import HomePage from "../features/home/HomePage";
import EventDetailedPage from "../features/event/EventDetailed/EventDetailedPage";
import PeopleDashboard from "../features/user/PeopleDashboard/PeopleDashboard";
import SettingsDashboard from "../features/user/Settings/SettingsDashboard";
import UserDetailedPage from "../features/user/UserDetailed/UserDetailedPage";
import EventForm from "../features/event/EventForm/EventForm";
import TestComponent from "../features/testarea/TestComponent";
import ModalManager from "../features/modals/ModalManager";
import { UserIsAuthenticated } from "../features/auth/authWrapper";

class App extends Component {
  render() {
    return (
      <Fragment>
        <ModalManager />
        <Route path="/" component={HomePage} exact />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <NavBar />
              <Container className="main">
                <Switch key={this.props.location.key}>
                  <Route path="/events" exact component={EventDashboard} />
                  <Route path="/test" component={TestComponent} />
                  <Route path="/event/:id" component={EventDetailedPage} />
                  <Route
                    path="/manage/:id"
                    component={UserIsAuthenticated(EventForm)}
                  />
                  <Route
                    path="/people"
                    component={UserIsAuthenticated(PeopleDashboard)}
                  />
                  <Route
                    path="/profile/:id"
                    component={UserIsAuthenticated(UserDetailedPage)}
                  />
                  <Route
                    path="/settings"
                    component={UserIsAuthenticated(SettingsDashboard)}
                  />
                  <Route
                    path={"/createEvent"}
                    component={UserIsAuthenticated(EventForm)}
                  />
                </Switch>
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}
export default withRouter(App);
