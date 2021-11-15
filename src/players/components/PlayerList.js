import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import PlayerItem from './PlayerItem';
import Button from '../../shared/components/FormElements/Button';
import './PlayerList.css';

const PlayerList= props => {
  if (props.items.length === 0) {
    return (
      <div className="player-list center">
        <Card>
          <h2>No players found. Maybe create one?</h2>
          <Button to="/players/new">Share Player</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="player-list">
      {props.items.map(player => (
        <PlayerItem
          key={player.id}
          id={player.id}
          image={player.image}
          title={player.title}
          description={player.description}
          address={player.address}
          creatorId={player.creator}
          coordinates={player.location}
          onDelete={props.onDeletePlayer}
        />
      ))}
    </ul>
  );
};

export default PlayerList;
