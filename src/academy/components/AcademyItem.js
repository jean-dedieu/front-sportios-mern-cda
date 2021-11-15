import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './AcademyItem.css';

const AcademyItem = props => {
  return (
    <li className="academy-item">
      <Card className="academy-item__content">
        <Link to={`/${props.id}/players`}>
          <div className="academy-item__image">
            <Avatar image={`http://localhost:5000/${props.image}`} alt={props.name} />
          </div>
          <div className="academy-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.playerCount} {props.playerCount === 1 ? 'Player' : 'Players'}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default AcademyItem;
