import React, { useState } from "react";
import { HashRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import UserContext from "./context/UserContext";
import AppContext from "./context/AppContext";

const App = () => {
  const localUser = localStorage.getItem("user");
  const parsedLocalUser = JSON.parse(localUser);
  const [user, setUser] = useState(parsedLocalUser || {});
  const [selectedXibit, setSelectXibit] = useState("aquariums");
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState();
  const [planData, sePlanData] = useState();
  const [apiKey, setApiKey] = useState();

  return (
    <HashRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <AppContext.Provider
          value={{
            selectedXibit,
            setSelectXibit,
            plans,
            setPlans,
            selectedPlan,
            setSelectedPlan,
            planData,
            sePlanData,
            apiKey,
            setApiKey,
          }}
        >
          <Routes />
        </AppContext.Provider>
      </UserContext.Provider>
    </HashRouter>
  );
};

export default App;
