import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import PrivateRoute from "./routes/privateRoute.js";
import AppProvider from "./contexts/AppProvider.js";

function App() {
  return (
    <Router>
      < AppProvider>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />;
            })}
            {privateRoutes.map((route, index) => {
              const PagePrivate = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <PrivateRoute>
                      <PagePrivate />
                    </PrivateRoute>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </ AppProvider>
    </Router>
  );
}

export default App;
