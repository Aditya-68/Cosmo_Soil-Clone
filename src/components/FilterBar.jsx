import React from "react";
import './Filterbar.css';

const FilterBar = ({ filters = {}, onFilterChange = () => {} }) => {
  const defaultFilters = {
    state: "Maharashtra",  // Default to Maharashtra
    city: "All",
    propertyType: "All",
    territory: "Within City"
  };

  const currentFilters = { ...defaultFilters, ...filters };
  const { state: selectedState, city: selectedCity, propertyType: selectedType, territory: selectedTerritory } = currentFilters;

  const stateCityMap = {
    All: { cities: ["All"], coordinates: [20.5937, 78.9629] },
    Telangana: { cities: ["All", "Hyderabad", "Warangal", "Karimnagar"], coordinates: [17.3850, 78.4867] },
    "Uttar Pradesh": { cities: ["All", "Lucknow", "Kanpur", "Agra"], coordinates: [26.8467, 80.9462] },
    Delhi: { cities: ["All", "New Delhi", "Noida", "Gurgaon"], coordinates: [28.6139, 77.2090] },
    Gujarat: { cities: ["All", "Ahmedabad", "Surat", "Vadodara"], coordinates: [23.0225, 72.5714] },
    Haryana: { cities: ["All", "Gurugram", "Faridabad", "Panipat"], coordinates: [28.4595, 77.0266] },
    Kerala: { cities: ["All", "Kochi", "Thiruvananthapuram", "Kozhikode"], coordinates: [10.8505, 76.2711] },
    TamilNadu: { cities: ["All", "Chennai", "Coimbatore", "Madurai"], coordinates: [13.0827, 80.2707] },
    "Madhya Pradesh": { cities: ["All", "Indore", "Bhopal", "Jabalpur"], coordinates: [22.7196, 75.8577] },
    Maharashtra: { cities: ["All", "Mumbai", "Pune", "Nagpur"], coordinates: [19.0760, 72.8777] },
    WestBengal: { cities: ["All", "Kolkata", "Howrah", "Durgapur"], coordinates: [22.5726, 88.3639] }
  };

  const propertyTypes = ["All", "House", "Lands", "Projects"];

  const handleStateChange = (e) => {
    onFilterChange(e); // update state
    onFilterChange({ target: { name: "city", value: "All" } }); // reset city
  };

  return (
    <div className="filter-section">
      <div className="filter-bar-container">

        {/* State Dropdown */}
        <div className="filter-control-group">
          <label htmlFor="state" className="filter-label">State</label>
          <select
            id="state"
            className="filter-select"
            name="state"
            value={selectedState}
            onChange={handleStateChange}
          >
            {Object.keys(stateCityMap).map((state, index) => (
              <option key={index} value={state}>{state}</option>
            ))}
          </select>
        </div>

        {/* Territory Dropdown */}
        <div className="filter-control-group">
          <label htmlFor="territory" className="filter-label">Territory</label>
          <select 
            id="territory" 
            className="filter-select" 
            name="territory"
            value={selectedTerritory}
            onChange={onFilterChange}
          >
            <option value="Within City">Within City</option>
            <option value="Outside City">Outside City</option>
          </select>
        </div>

        {/* City Dropdown */}
        <div className="filter-control-group">
          <label htmlFor="city" className="filter-label">City</label>
          <select
            id="city"
            className="filter-select city-dropdown"
            name="city"
            value={selectedCity}
            onChange={onFilterChange}
          >
            {stateCityMap[selectedState].cities.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* Property Type Dropdown */}
        <div className="filter-control-group">
          <label htmlFor="propertyType" className="filter-label">Property Type</label>
          <select
            id="propertyType"
            className="filter-select"
            name="propertyType"
            value={selectedType}
            onChange={onFilterChange}
          >
            {propertyTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>

      </div>
    </div>
  );
};

export default FilterBar;
