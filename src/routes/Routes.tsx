import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ScrollToTop from "components/common/ScrollToTop";
import { aboutPages, landing, otherPages, routeInterface } from "routes";
import { Layout } from "layout/Layout";
import { OtherPagesLayout } from "layout/OtherPagesLayout";
import { AboutLayout } from "layout/AboutLayout";

const childRoutes = (Layout: any, routes: Array<any>) =>
  routes.map(
    (
      { children, path, component: Component, name, header }: routeInterface,
      index: number
    ) =>
      children ? (
        // Route item with children
        children.map(
          (
            { path, component: Component, name, header }: routeInterface,
            index: number
          ) => (
            <Route
              key={index}
              path={path}
              element={
                <Layout header={header}>
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
            <Layout header={header}>
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
            {childRoutes(OtherPagesLayout, otherPages)}
            {childRoutes(AboutLayout, aboutPages)}
        </Routes>
      </ScrollToTop>
    </Router>
  );
};

export default AppRoutes;
