import React from 'react';

import PageHeader from '../components/common/PageHeader';
import NavBar from '../components/common/NavBar';

import crawfishRight from '../assets/images/cf.gif';
import crawfishLeft from '../assets/images/cfl.gif';
import './PlayPage.css';

function PlayPage() {

  

  return (
    <div>
      <PageHeader />  
      <NavBar />
      <div className="Header PlayPage__Header">
        <img src={crawfishRight} alt="" /> Play Jumbalaya <img src={crawfishLeft} alt="" />
      </div>
      <p>
        In order to play in a multiplayer game, you'll need to get a handle and then get your account activated. To get an account,
        follow the instructions on the <a href="/signup">registration form</a>, which also has instructions about how to get your
        account activated (you get a current player to vouch for you).
      </p>
      <p>
        If you already have a handle, you can change your personal info with the <a href="/user/update">update form</a>.
      </p>
      <div className="SubHeader">Multiplayer game</div>
      <p>
        <a href="/games">Join a game</a> ()
      </p>
      <p>
        You can join a game that's still taking signups. The game setup is shown - board size, minimum word length, players, etc.
        <div className="SubHeader">Single player game</div>
      </p>
      <p>
        The computer is good. Really good. Fortunately you can handicap it, and even take unlimited time if you want.
      </p>
    </div>
  );
};

export default PlayPage;
