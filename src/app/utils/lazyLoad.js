import React, { Suspense } from 'react';

const lazyLoad = (Component) => {
  return (props) => (
    <Suspense fallback={<div></div>}>
      <Component {...props} />
    </Suspense>
  );
};

export default lazyLoad;
