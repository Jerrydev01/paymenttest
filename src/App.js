import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Personal_info from './pages/PersonalInfo';
import Billing_info from './pages/BillingInfo';
import Confirm_payment from './pages/ConfirmPayment';
import Success from './pages/Success';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Personal_info />}>
        </Route>
        <Route index element={<Personal_info />} />
        <Route path="/src/pages/BillingInfo.jsx" element={<Billing_info />} />
        <Route path="/src/pages/ConfirmPayment.jsx" element={<Confirm_payment />} />
        <Route path="/src/pages/Success.jsx" element={<Success />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
