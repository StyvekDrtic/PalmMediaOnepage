import React from "react";

export default function Home() {
  // Redirect to LinkedIn profile
  if (typeof window !== "undefined") {
    window.location.href = "https://www.linkedin.com/in/jirkastepanek/";
    return null;
  }
  
  return null;
}
