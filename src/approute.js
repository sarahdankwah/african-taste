
import { Switch, Route } from 'react-router-dom';
import Signup from './signup/signup'
import Landingpage from './signup/landingpage/landingpage'
import Signin from '../src/signup/landingpage/Signin'


function Approute() {
  return (
    <div>
      <Switch>
          <Route exact path='/' component={Landingpage}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/signin' component={Signin}/>
   
      </Switch>
    </div>
  );
}

    export default Approute;
