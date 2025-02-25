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
    <div>
      {catalog.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default RetrieveCatalog;
