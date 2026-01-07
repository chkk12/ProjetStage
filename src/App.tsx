import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

// Type des pays
type Country = {
  code: string;
  name: string;
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
      continent {
        name
      }
    }
  }
`;

function App() {
  // useQuery avec typage
  const { data, loading, error } = useQuery<{ countries: Country[] }>(GET_COUNTRIES);

  // States
  const [search, setSearch] = useState("");
  const [continentFilter, setContinentFilter] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading countries</p>;

  // Filtrage des pays
  const countries: Country[] = data?.countries
    .filter((c: Country) =>
      c.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((c: Country) =>
      continentFilter
        ? c.continent.name.toLowerCase() === continentFilter.toLowerCase()
        : true
    ) || [];

  // Fonction pour afficher le drapeau emoji
  function countryFlagEmoji(code: string) {
    return code
      .toUpperCase()
      .replace(/./g, (char) =>
        String.fromCodePoint(127397 + char.charCodeAt(0))
      );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Pays-exercice stage</h1>

      {/* Recherche par nom */}
      <input
        placeholder="Rechercher un pays"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginRight: 10 }}
      />

      {/* Menu déroulant pour filtrer par continent */}
      <select
        value={continentFilter}
        onChange={(e) => setContinentFilter(e.target.value)}
        //different continent disponibles
      >
        <option value="">Tous les continents</option>
        <option value="Europe">Europe</option>
        <option value="Asie">Asie</option>
        <option value="Afrique">Afrique</option>
        <option value="Amérique">Amérique</option>
        <option value="Océanie">Océanie</option>
      </select>

      {/* Liste des pays */}
      {countries.length === 0 && <p>Aucun pays trouvé</p>}

      <ul style={{ marginTop: 20 }}>
        {countries.map((country) => (
          <li
            key={country.code}
            style={{ cursor: "pointer", marginBottom: 5 }}
            onClick={() => setSelectedCountry(country)}
          >
            {countryFlagEmoji(country.code)} {country.name} - {country.continent.name}
          </li>
        ))}
      </ul>

      {/* Infos du pays sélectionné */}
      {selectedCountry && (
        <div style={{ marginTop: 20, border: "1px solid #ccc", padding: 10 }}>
          <h2>
            {countryFlagEmoji(selectedCountry.code)} {selectedCountry.name}
          </h2>
          <p><strong>Code :</strong> {selectedCountry.code}</p>
          <p><strong>Continent :</strong> {selectedCountry.continent.name}</p>
        </div>
      )}
    </div>
  );
}

export default App;
