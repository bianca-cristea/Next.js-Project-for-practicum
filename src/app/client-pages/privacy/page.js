export const metadata = {
  title: "Politica de Confidențialitate",
  description: "Află cum gestionăm datele.",
};

export default function PrivacyPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto h-screen mt-11">
      <h1 className="text-2xl font-bold mb-4">Politica de Confidențialitate</h1>
      <p className="mb-2">
        Acest site este unul informativ, destinat prezentării activității
        profesionale a unui profesor. Nu colectăm date personale ale
        vizitatorilor și nu folosim cookies în scopuri de marketing.
      </p>
      <p className="mb-2">
        Administratorul site-ului este singura persoană care are acces la zona
        securizată, prin autentificare cu parolă.
      </p>
      <p className="mb-2">
        Autentificarea este securizată și nu implică date personale ale altor
        utilizatori. Site-ul este găzduit pe platforma Vercel. Este posibil ca
        Vercel să colecteze date tehnice anonime (ex: IP, browser) pentru
        funcționarea serviciilor. Consultați{" "}
        <a
          href="https://vercel.com/legal/privacy-policy"
          target="_blank"
          className="text-blue-600 underline"
        >
          politica de confidențialitate Vercel
        </a>
        .
      </p>
      <p className="mb-2">
        Dacă aveți întrebări legate de confidențialitate, ne puteți contacta la:{" "}
        <b>bianca.cristea01@yahoo.com</b>
      </p>
    </div>
  );
}
