import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* index indicate the main page */}
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
