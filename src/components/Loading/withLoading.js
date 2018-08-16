import React from 'react';

import Loading from './index';

const withLoading = Component => ({ isLoading, ...rest }) => isLoading
    ? <Loading />
    : <Component { ...rest } />

export { withLoading };
