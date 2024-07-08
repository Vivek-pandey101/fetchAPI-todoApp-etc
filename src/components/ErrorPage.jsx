import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="error-page">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">&larr; Go back to Home</Link>
    </div>
  );
}

export default ErrorPage;
