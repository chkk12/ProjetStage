import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

// Type des pays
type Country = {
  code: string;
  name: string;
  capital?: string;
  currency?: string;
  continent: {
    name: string;
  };
};


// Requête GraphQL
const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      capital
      currency
      continent {
        name
      }
    }
  }
`;


// Mapping anglais  français pour l’affichage comme demendé
const continentMap: Record<string, string> = {
  "Africa": "Afrique",
  "Asia": "Asie",
  "Europe": "Europe",
  "North America": "Amérique du Nord",
  "South America": "Amérique du Sud",
  "Oceania": "Océanie",
};

function App() {
  const { data, loading, error } = useQuery<{ countries: Country[] }>(GET_COUNTRIES);

  const [search, setSearch] = useState("");
  const [continentFilter, setContinentFilter] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  // Loader
  if (loading) return <p>Loading countries...</p>;

  // Gestion des erreurs avec message précis
  if (error) return <p>Error: {error.message}</p>;

  // Filtrage des pays
  const countries = (data?.countries || [])
    .filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
    .filter(c => continentFilter ? c.continent.name === continentFilter : true);

  // Fonction pour générer les drapeaux emoji
  const countryFlagEmoji = (code: string) =>
    code
      .toUpperCase()
      .replace(/./g, char => String.fromCodePoint(127397 + char.charCodeAt(0)));

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>Pays - Projet Stage</h1>

      {/* Recherche par nom */}
      <input
        placeholder="Rechercher un pays..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: 5, marginRight: 10 }}
      />

      {/* Filtre par continent */}
      <select
        value={continentFilter}
        onChange={(e) => setContinentFilter(e.target.value)}
        style={{ padding: 5 }}
      >
        <option value="">Tous les continents</option>
        {Object.keys(continentMap).map(cont => (
          <option key={cont} value={cont}>{continentMap[cont]}</option>
        ))}
      </select>

      {/* Affichage du pays sélectionné en "card"  */}
   {selectedCountry && (
  <div style={{ marginTop: 20, border: "1px solid #ccc", padding: 10 }}>
    <h2>
      {countryFlagEmoji(selectedCountry.code)} {selectedCountry.name}
    </h2>

    <p><strong>Code :</strong> {selectedCountry.code}</p>
    <p><strong>Continent :</strong> {selectedCountry.continent.name}</p>

    <p>
      <strong>Capitale :</strong>{" "}
      {selectedCountry.capital ?? "Non renseignée"}
    </p>

    <p>
      <strong>Devise :</strong>{" "}
      {selectedCountry.currency ?? "Non renseignée"}
    </p>
  </div>
)}


      {/* Liste des pays */}
      <ul style={{ marginTop: 20, listStyle: "none", paddingLeft: 0 }}>
        {countries.length === 0 && <p>Aucun pays trouvé</p>}
        {countries.map((country) => (
          <li
            key={country.code}
            onClick={() => setSelectedCountry(country)}
            style={{
              cursor: "pointer",
              marginBottom: 5,
              padding: 5,
              borderRadius: 4,
              transition: "background 0.2s",
            }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = "#efefef")}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            {countryFlagEmoji(country.code)} {country.name} - {continentMap[country.continent.name] || country.continent.name}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default App;
