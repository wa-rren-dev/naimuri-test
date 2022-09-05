import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorDetails: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorDetails) {
    console.log("caught error", error);
    this.setState({ errorDetails: error.message });
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Error boundary!</h1>
          <p>
            It's likely the Github API is rejecting queries based on the
            anonymous request rate limit.
          </p>
          <pre>{this.state.errorDetails}</pre>
        </>
      );
    }
    return this.props.children;
  }
}
