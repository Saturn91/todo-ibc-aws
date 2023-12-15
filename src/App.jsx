import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
import MyTodoView from "./views/myTodos";
Amplify.configure(config);

const App = ({ signOut, user }) => {
  console.log(user)
  return <MyTodoView />;
};

export default withAuthenticator(App);