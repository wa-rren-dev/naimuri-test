import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RepoItem } from "./RepoItem";
import { MemoryRouter } from "react-router";

describe("RepoItem", () => {
  it("should render a link to the repo", async () => {
    const repo = {
      name: "test-repo",
      description: "A test repo",
      stargazers_count: 0,
      forks_count: 0,
      html_url: "http://example.com",
    };
    render(
      <MemoryRouter>
        <RepoItem repo={repo} />
      </MemoryRouter>
    );
    const link = screen.getByRole("link", {
      name: /View readme for test-repo/i,
    });
    expect(link).toBeInTheDocument();
  });
  it("should match the snapshot", () => {
    const repo = {
      name: "test-repo",
      description: "A test repo",
      stargazers_count: 0,
      forks_count: 0,
      html_url: "http://example.com",
    };
    const { asFragment } = render(
      <MemoryRouter>
        <RepoItem repo={repo} />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
