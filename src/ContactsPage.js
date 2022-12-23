import React from "react";
import "./styles.css";

export default () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Контакты!</h1>
      <p className="lead">Контакты:github_@codesjaf</p>
      <hr className="my-4" />
      <p>
        <b>E-mail: </b>
        <a className="cont_a" href="/about">
          sabinajaffarova@gmail.com
        </a>
      </p>
      <p>
        <b>Phone: </b>
        <a className="cont_a" href="/experience">
          {" "}
          +994514081689
        </a>
      </p>
    </div>
  );
};
