import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PlayerList from '../components/PlayerList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';

const AcademyPlayers = () => {
  const [loadedPlayers, setLoadedPlayers] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const academyId = useParams().academyId;

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/players/academy/${academyId}`
        );
        setLoadedPlayers(responseData.players);
      } catch (err) {}
    };
    fetchPlayers();
  }, [sendRequest, academyId]);

  const playerDeletedHandler = deletedplayerId => {
    setLoadedPlayers(prevPlayers =>
      prevPlayers.filter(player => player.id !== deletedplayerId)
    );
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedPlayers && (
        <PlayerList items={loadedPlayers} onDeletePlayer={playerDeletedHandler} />
      )}
    </React.Fragment>
  );
};

export default AcademyPlayers;
