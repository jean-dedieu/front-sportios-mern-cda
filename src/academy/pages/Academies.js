import React, { useEffect, useState } from 'react';

import AcademiesList from '../components/AcademiesList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';

const Academies = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedAcademies, setLoadedAcademies] = useState();

  useEffect(() => {
    const fetchAcademies = async () => {
      try {
        const responseData = await sendRequest(
          'http://localhost:5000/api/academies'
        );

        setLoadedAcademies(responseData.academies);
      } catch (err) {}
    };
    fetchAcademies();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedAcademies && <AcademiesList items={loadedAcademies} />}
    </React.Fragment>
  );
};

export default Academies;
