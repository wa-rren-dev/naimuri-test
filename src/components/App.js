import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { RepoView } from "./RepoView";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/nhsuk">NHS Digital</Link>
        </li>
        <li>
          <Link to="/nice-digital">NICE Digital</Link>
        </li>
        <li>
          <Link to="/naimuri">Naimuri</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/:organisation" element={<RepoView />} />
      </Routes>
    </BrowserRouter>
  );
}

// function App() {
//   return <RepoView organisation="Naimuri" />;
// }

export default App;
