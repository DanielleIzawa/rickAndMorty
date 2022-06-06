import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Episodios from "../pages/Episodios";
import Home from "../pages/Home";
import Teste from "../pages/Teste";
import LugaresFamosos from "../pages/LugaresFamosos";
import Personagens from "../pages/Personagens";
import routes from "./routes";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={routes.personagens} element={<Personagens />} />
        <Route path={routes.lugaresFamosos} element={<LugaresFamosos />} />
        <Route path={routes.episodios} element={<Episodios />} />
        <Route path={routes.teste} element={<Teste />} />
      </Routes>
    </BrowserRouter>
  );
}
