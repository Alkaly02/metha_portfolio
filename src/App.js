import './App.css'

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/navigation/navigationRoutes';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
