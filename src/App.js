import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Components/Routes/Routes';

const App = () => {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
};

export default App;