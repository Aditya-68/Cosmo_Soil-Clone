import React, { useState, useEffect } from "react";
import "./grid.css";
import MapComponent from "../components/MapComponent";
import PropertyList from "../components/PropertyList";
import propertiesData from "../Data/Data.json";
import PropertyCard from "../components/PropertyCard";
import FilterBar from "../components/FilterBar";

export default function Mn() {
  const [allProperties] = useState(propertiesData);
  const [filteredProperties, setFilteredProperties] = useState(propertiesData);
  const [filters, setFilters] = useState({
    state: "Maharashtra",
    city: "All",
    propertyType: "All",
    territory: "Within City",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;

    if (name === "state") {
      setFilters((prev) => ({
        ...prev,
        state: value,
        city: "All",
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    let filtered = allProperties;

    if (filters.state !== "All") {
      filtered = filtered.filter(
        (property) => property.state === filters.state
      );
    }

    if (filters.city !== "All") {
      filtered = filtered.filter((property) => property.city === filters.city);
    }

    if (filters.propertyType !== "All") {
      filtered = filtered.filter(
        (property) => String(property.type) === filters.propertyType
      );
    }

    if (filters.territory !== "All") {
      filtered = filtered.filter(
        (property) => property.territory === filters.territory
      );
    }

    setFilteredProperties(filtered);
  }, [filters, allProperties]);

  return (
    <div className="main-grid">
      <div className="filter-section">
        <FilterBar filters={filters} onFilterChange={handleFilterChange} />
      </div>
      <div className="map-section">
        <MapComponent
          properties={filteredProperties}
          selectedState={filters.state}
        />
      </div>
      <div className="list-section">
        <PropertyList properties={allProperties} />
      </div>
      <div
        className="card-section"
        style={{ overflow: "visible", maxHeight: "none" }}
      >
        {filteredProperties.length > 0 && (
          <PropertyCard properties={[filteredProperties[0]]} />
        )}
      </div>

      {/* <div className="card-section">
        <PropertyCard properties={filteredProperties} />
      </div> */}
    </div>
  );
}
