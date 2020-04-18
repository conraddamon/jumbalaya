import React from 'react';

import PageHeader from '../components/common/PageHeader';
import NavBar from '../components/common/NavBar';
import Tile from '../components/common/Tile';

import '../styles/global.css';
import './HomePage.css';

function HomePage() {

  return (
    <div>
      <div className="PageTitle">Jumbalaya: An online multiplayer word game</div>
      <PageHeader />
      <NavBar />
      <p>
        <b>Jumbalaya</b> is a word game where you try to find words by connecting letters that appear in a grid.
        There are other places to find words (many books have them), but they're not as much fun. This one is free,
        though you have to go through a couple of hoops to register an account if you want to play other folks online,
        and have statistics gathered for you.
      </p>
      <p>
        Here you can play the game with other people and/or the computer . Someone starts up a game (including
        setting various game parameters such as board size), and specifies when it will start. Until then, anyone
        can join. When the game starts, each player is shown the board and can start typing in the words found on
        the board. When time is up, your words will be validated by the server and then you can see how you scored
        against the other players.
      </p>
      <div className="HomePage__Link">
        <a href="/play"><Tile letter="P" /> lay a game</a>
      </div>
      <NavBar />
    </div>
  );
};

export default HomePage;
