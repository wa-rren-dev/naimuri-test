import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { OrgView } from "./OrgView";
import { RepoView } from "./RepoView";
import { OrgNav } from "./OrgNav";
import { ErrorBoundary } from "./ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OrgNav />} />
          <Route path="/:organisation" element={<OrgView />} />
          <Route path="/:organisation/:repo" element={<RepoView />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
