import "./App.css";
import Car from "./pages/car.jsx";
import CarRentalComponent from "./pages/CarRentalComponent.jsx";
import Home from "./pages/Home.jsx";
import { Route, Routes } from "react-router-dom";
import PaymentCar from "./pages/PaymentCar.jsx";
import Dashboard from "./Dashboard.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/carrental"
          element={<CarRentalComponent></CarRentalComponent>}
        />
        <Route path="/cars" element={<Car></Car>} />
        <Route path="/payment" element={<PaymentCar></PaymentCar>} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>} />
        
       
      </Routes>
    </div>
  );
}

export default App;
