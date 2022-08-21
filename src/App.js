import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Personal_info from './pages/Personal_info';
import Billing_info from './pages/Billing_info';
import Confirm_payment from './pages/Confirm_payment';
import Success from './pages/success';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Personal_info />}>
        </Route>
        <Route index element={<Personal_info />} />
        <Route path="/src/pages/Billing_info.jsx" element={<Billing_info />} />
        <Route path="/src/pages/Confirm_payment.jsx" element={<Confirm_payment />} />
        <Route path="/src/pages/success.jsx" element={<Success />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
