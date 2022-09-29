import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import loadable from "@loadable/component";

const NotFoundPage = loadable(() =>
  import("../pages/errors/404")
);
const UpComingPage = loadable(() =>
  import("../pages/coming/index")
);
const DetailPage = loadable(() =>
  import("../pages/detail/index")
);
const RouteMovies = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/up-coming"
          element={<UpComingPage />}
        />
        <Route path="/:slug-:id" element={<DetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default React.memo(RouteMovies);
