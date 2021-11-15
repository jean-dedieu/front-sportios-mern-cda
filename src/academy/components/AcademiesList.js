import React from 'react';

import AcademyItem from './AcademyItem';
import Card from '../../shared/components/UIElements/Card';
import './AcademiesList.css';

const AcademiesList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No academies found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="academies-list">
      {props.items.map(academy => (
        <AcademyItem
          key={academy.id}
          id={academy.id}
          image={academy.image}
          name={academy.name}
          playerCount={academy.players.length}
        />
      ))}
    </ul>
  );
};

export default AcademiesList;
