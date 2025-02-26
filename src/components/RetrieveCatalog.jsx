import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function RetrieveCatalog() {
  const [catalog, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/catalog.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement du fichier JSON");
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;
  return (
    <div className="container mt-4">
      <div className="row">
      {catalog.map((product) => (
        <div key={product.id} className="col-md-4 col-sm-6 mb-4">
        <ProductCard key={product.id} product={product} />
        </div>
      ))}
      </div>
    </div>
  );
}

export default RetrieveCatalog;
