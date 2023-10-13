import React from 'react';

const Loader = ({ children, loading }) => {
  return <>{loading ? <div>Load</div> : <>{children}</>}</>;
};
export { Loader };
