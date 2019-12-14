import React from "react";
import { Switch, Route } from "react-router-dom";
import ListUserComponent from "./components/user/ListUserComponent";
import AddUserComponent from "./components/user/AddUserComponent";
import EditUserComponent from "./components/user/EditUserComponent";
import Atividades from "./components/Atividades";

const AppRouter = props => {
  return (
    <Switch>
      <Route path="/" exact component={ListUserComponent} />
      <Route path="/atividades" component={Atividades} />
      <Route path="/users" component={ListUserComponent} />
      <Route path="/add-user" component={AddUserComponent} />
      <Route path="/edit-user" component={EditUserComponent} />
    </Switch>
  );
};

export default AppRouter;
