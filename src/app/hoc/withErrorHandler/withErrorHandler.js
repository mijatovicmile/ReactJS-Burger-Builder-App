import React from 'react';

import Modal from '../../components/UI/Modal/Modal';
import useErrorHandler from '../../hooks/errorHandler';

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, clearError] = useErrorHandler(axios);

    return (
      <>
        <Modal show={error} modalClosed={clearError}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default withErrorHandler;
