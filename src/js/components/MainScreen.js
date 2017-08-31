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
  const users = [
    {name: 'Nick Svetlov', id: 73958472903, socialName: 'twitter'},
    {name: 'Jack de Farro', id: 27382738495, socialName: 'facebook'},
    {name: 'Joey Tribbiani', id: 73029493840, socialName: 'instagram'}
  ];
  return (
    <div>
      <Navigation />
      <Title />
      <div className="userBlock">
      <Form handleSubmit={(data) => console.log(data)} />
      <UserList users={users}
        handleClick={() => console.log('click!')} />
      </div>
    </div>
  );
}

export default MainScreen;
