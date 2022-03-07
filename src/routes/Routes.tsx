import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ScrollToTop from "components/common/ScrollToTop";
import { landing, routeInterface } from "routes";
import { Layout } from "layout/Layout";

const childRoutes = (Layout: any, routes: Array<any>) =>
  routes.map(
    (
      { children, path, component: Component, name }: routeInterface,
      index: number
    ) =>
      children ? (
        // Route item with children
        children.map(
          (
            { path, component: Component, name }: routeInterface,
            index: number
          ) => (
            <Route
              key={index}
              path={path}
              element={
                <Layout>
                  <Component ComponentName={name} />
                </Layout>
              }
            />
          )
        )
      ) : (
        // Route item without children
        <Route
          key={index}
          path={path}
          element={
            <Layout>
              <Component ComponentName={name} />
            </Layout>
          }
        />
      )
  );

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
            {childRoutes(Layout, landing)}
        </Routes>
      </ScrollToTop>
    </Router>
  );
};

export default AppRoutes;
