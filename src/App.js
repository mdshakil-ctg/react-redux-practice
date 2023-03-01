import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes';

function App({children}) {
  return (
    <div className="App">
       <RouterProvider router={router}>{children}</RouterProvider>
    </div>
  );
}

export default App;
