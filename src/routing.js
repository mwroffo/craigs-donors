'use strict';

const {Route} = require('react-router')

module.exports = <Route component={App}>
    <Route path="/home" component={Home} exact={true} />
    <Route exact path="/" render={() => <Redirect to="/home" />} />
</Route>