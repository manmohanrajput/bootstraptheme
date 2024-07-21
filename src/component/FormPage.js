import React from "react";
import "../css/FormPage.css"; // Ensure you create and style this CSS file

function FormPage() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="page-container">
      <h1 className="page-heading">Welcome to the Form Page</h1>
      <p className="page-content">
        This is some content for the page. You can include any text, images,
        or other elements here.
      </p>
      <button className="page-button" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default FormPage;
