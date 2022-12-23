import React from "react";
import "./styles.css";

export default () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Примеры работ</h1>
      <p className="lead">Проекты</p>
      <hr className="my-4" />
      <p>
        <a className="exp_a" href="https://github.com/codesjaf/Module_4">
          Поиск фильмов и сериалов,
        </a>
      </p>
      <p>
        <a className="exp_a" href="https://github.com/codesjaf/Projectteam1">
          Образец страницы сайта (командная работа),
        </a>
      </p>
      <p>
        <a className="exp_a" href="https://github.com/codesjaf/Alg_3Converter">
          {" "}
          конвертер валют,{" "}
        </a>
      </p>
      <p>
        <a className="exp_a" href="https://github.com/codesjaf">
          (ссылка на проекты)
        </a>{" "}
        и другие...
      </p>
    </div>
  );
};
