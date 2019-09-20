import React from "react"
import {Switch, Route } from "react-router-dom"
import Dashboard from "./Components/Dashboard/Dashboard"
import Header from "./Components/Header/Header"
// import House from "./Components/House/House"
import Wizard from "./Components/Wizard/Wizard"

export default (
    <Switch>
        <Route component={Dashboard} exact path="/"/>
        {/* <Route component={House} path="/house"/> */}
        <Route component={Wizard} path="/wizard"/>
    </Switch>
)