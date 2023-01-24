import React from 'react';
import { Toaster } from 'react-hot-toast';
import style from './styles/modules/app.module.scss';
import AppHeader from './Components/AppHeader';
import PageTitle from './Components/PageTitle';
import AppContent from './Components/AppContent';

function App() {
  return (
    <div className="container">
      <PageTitle>TODO LIST</PageTitle>
      <div className={style.app__wrapper}>
        <AppHeader />
        <AppContent />
      </div>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            fontsize: '2rem',
          },
        }}
      />
    </div>
  );
}

export default App;
