import { ThemeProvider } from "@material-ui/core";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import theme from "../../commons/Theme/index";
import Loading from "../../components/Loading";
import ModalComponent from "../../components/ModalComponent";
import routes from "../../constants/routes";
import configureStore from "./../../redux/configureStore";
const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={theme}>
            <Loading />
            <ModalComponent />
            <Switch>
            <Switch>{this.showContent(routes)}</Switch>
            </Switch>
          </ThemeProvider>
        </Router>
      </Provider>
    );
  }
  showContent = routes => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            path={route.path}
            key={index}
            component={route.main}
            exact={route.exact}
          ></Route>
        );
      });
    }
    return result;
  };
}

export default App;
