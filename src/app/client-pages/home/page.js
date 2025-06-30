"use client";

import ClientHomeView from "@/components/client-view/home";
import { getData } from "@/services";
import { useEffect, useState } from "react";

export default function ClientHomePage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Starting to fetch home data...");
      setLoading(true);
      try {
        const result = await getData("home");
        console.log("RESULT fetch home:", result);
        console.log("Result type:", typeof result);
        console.log("Result data:", result?.data);
        console.log("Data length:", result?.data?.length);

        if (result && result.data && result.data.length > 0) {
          setData(result.data);
          setError(null);
        } else {
          setError("Nu am găsit datele pentru pagina Home");
        }
      } catch (err) {
        console.error("Error fetching home data:", err);
        setError("Eroare la încărcarea datelor");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700 mx-auto mb-4"></div>
          <h2 className="text-xl text-gray-600">Se încarcă...</h2>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {error || "Nu am găsit datele pentru pagina Home"}
          </h1>
          <p className="text-gray-600">
            Verifică dacă datele există în baza de date.
          </p>
          <div className="mt-4 p-4 bg-yellow-100 border border-yellow-400 rounded">
            <p className="text-sm text-yellow-800">
              Debug info: {JSON.stringify(data)}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <ClientHomeView data={data} />;
}
