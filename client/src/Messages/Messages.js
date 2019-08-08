import React, { Component } from "react";

const Messages = () => {
  return (
    <div>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        {error}
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">{times}</span>
        </button>
      </div>
      <div
        className="alert alert-danger alert-dismissible fade show"
        role="alert"
      >
        <span aria-hidden="true">{times}</span>
      </div>
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
        {error}
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">{times}</span>
        </button>
      </div>
    </div>
  );
};

export default Messages;
