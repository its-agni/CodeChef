import React from 'react';
import Home from './home';
import Team from './team';
import Events from './events';
import {Switch , Route ,BrowserRouter as Router , withRouter} from 'react-router-dom';

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
  <>
  <Router>
      <div className="App">
   
        <Switch location = {this.props.location}>
          <Route path="/" exact component ={Home}/>
          <Route path="/team" component = {Team}/>
          <Route path="/events" component = {Events}/>
        </Switch> 
      </div>
   </Router>
  </>
    );
  }
}
export default App;
