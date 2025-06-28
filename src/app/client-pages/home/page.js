"use client";

import { useEffect, useState } from "react";
import ClientHomeView from "@/components/client-view/home";
import { getData } from "@/services";
export const metadata = {
  title: "Home",
  description: "Home page",
};
export default function ClientHomePage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData("home", { cache: "no-store" }).then((result) => {
      setData(result?.data || null);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Se încarcă...</div>;
  if (!data) return <div>Nu am găsit datele.</div>;
  return <ClientHomeView data={data} />;
}
