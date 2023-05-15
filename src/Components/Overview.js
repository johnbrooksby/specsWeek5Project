import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Overview = () => {
  let currentDisplay = useSelector(selectDisplay);
  return (
    <div className="stack">
      <h1>{currentDisplay.name.official}</h1>
      <h2>"{currentDisplay.name.common}"</h2>

      <table className='"overview-table'>
        <tbody>
          <tr>
            <td>Capital: {currentDisplay.capital}</td>
          </tr>
          <tr>
            <td>Population: {currentDisplay.population}</td>
          </tr>
          <tr>
            <td>Continent: {currentDisplay.continents}</td>
          </tr>
          <tr>
            <td>Land Area: {currentDisplay.area} sq km</td>
          </tr>
          <tr>
            <td>Borders: {currentDisplay.borders ? currentDisplay.borders.map((e, i, arr) => {
                    if (i + 1 === arr.length) {
                        return `${e}`
                    } else {
                        return `${e}, `
                    }
                }): "N/A"}
            </td>
          </tr>
          <tr>
            <td>Member of UN: {currentDisplay.unMember ? "Yes" : "No"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Overview;
