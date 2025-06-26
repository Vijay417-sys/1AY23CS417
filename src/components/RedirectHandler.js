import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { log } from "../logging";

export default function RedirectHandler() {
  const { shortCode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    log(
      "frontend",
      "info",
      "page",
      `Handling redirect for short code: ${shortCode}`
    );

    // In a real app, you would look up the shortCode in your state or API
    // For demo, we'll redirect to example.com
    window.location.href = "https://example.com";
  }, [shortCode]);

  return <div>Redirecting...</div>;
}
