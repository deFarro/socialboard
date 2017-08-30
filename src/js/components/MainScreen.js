'use strict';

// Libs
import React from 'react';

// Style
import '../../scss/MainScreen.scss';

// Components
import Navigation from './Navigation';
import Title from './Title';
import Form from './Form';
import UserList from './UserList';

const MainScreen = () => {
  return (
    <div>
      <Navigation />
      <Title />
      <div className="userBlock">
      <Form handleSubmit={(event) => {
        event.preventDefault();
        console.log('click!');}} />
      <UserList users={[{name: 'Nick Svetlov', id: 73958472903}, {name: 'Jack de Farro', id: 27382738495}, {name: 'Joey Tribbiani', id: 73029493840}]}
        handleClick={(event) => {console.log('click!');}} />
      </div>
    </div>
  );
}

export default MainScreen;
