import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import PersonalInfo from './pages/PersonalInfo';
import BillingInfo from './pages/BillingInfo';
import ConfirmPayment from './pages/ConfirmPayment';
import Success from './pages/Success';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PersonalInfo />}>
        </Route>
        <Route index element={<PersonalInfo />} />
        <Route path="/pages/BillingInfo.jsx" element={<BillingInfo />} />
        <Route path="/pages/ConfirmPayment.jsx" element={<ConfirmPayment />} />
        <Route path="/pages/Success.jsx" element={<Success />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
