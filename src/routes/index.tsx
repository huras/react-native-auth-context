// Controla qual stack de rotas esta disponviel

import React from "react";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const Routes: React.FC = () => {
  return <AuthRoutes></AuthRoutes>;
}

export default Routes;