//import logo from "./logo.svg";
//import "./App.css";
import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
//import { Spinner } from "./components/Loader";

const HomePage = lazy(() => import("../src/pages/HomePage"));
const CatalogPage = lazy(() => import("../src/pages/CatalogPage"));
const FavoritesPage = lazy(() => import("../src/pages/FavoritesPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
