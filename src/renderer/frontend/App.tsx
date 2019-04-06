import { observer } from 'mobx-react-lite';
import React from 'react';

import FileList from './components/FileList';
import Outliner from './components/Outliner';
import { IRootStoreProp, withRootstore } from './contexts/StoreContext';
import Inspector from './components/Inspector';
import Toolbar from './components/Toolbar';
import ErrorBoundary from './components/ErrorBoundary';

interface IAppProps extends IRootStoreProp {}

const App = ({ rootStore: { uiStore } }: IAppProps) => {
  const themeClass = uiStore.theme === 'DARK' ? 'bp3-dark' : 'bp3-light';

  return (
    <div id={'layoutContainer'} className={`${themeClass}`}>
      <ErrorBoundary>
        <Toolbar />

        <Outliner />

        <main>
          <div className="header">
          </div>

          <FileList />
        </main>

        <Inspector />
      </ErrorBoundary>
    </div>
  );
};

export default withRootstore(observer(App));
