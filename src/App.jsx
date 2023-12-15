import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
import MyTodoView from "./views/myTodos";
Amplify.configure(config);

const App = ({ signOut, user }) => {
  //TODO
  //1. create user context
  //2. create Header component (logout + logged in user)
  //3. protect api so only logged in users can access it
  //4. add protected data base
  //5. let users only access their own data!
  console.log(user)
  return <MyTodoView />;
};

export default withAuthenticator(App);