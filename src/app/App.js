import React from 'react';
import Main from '../container/main'
import {CardTable} from '../styles/mainStyle'
import ErrorBoundary from '../errorBoundary';

function App() {
  return (
      <ErrorBoundary>
        <CardTable>
          <Main/>
        </CardTable>
      </ErrorBoundary>
  );
}

export default App;
