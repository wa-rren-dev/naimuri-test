import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OrgView } from "../OrgView/OrgView";
import { RepoView } from "../RepoView/RepoView";
import { OrgNav } from "../OrgNav/OrgNav";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import "./App.scss";

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
