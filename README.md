# Carbon Calculator

Application that calculates the carbon emissions associated with transporting donated items between two international locations.

## Technology

* React
* Typescript
* TailwindCSS
* Leaflet and React-Leaflet (mapping tool)
* Eslint
* Prettier
* Vite

## Project Structure

src/data/...: Contains FormData that handles and validates the user input and the data typing, Origin and Destination Location Data (Long/Lat Coordinates) and Donated Item data.
src/utils/...: Contains context provider, distance calculations between two long/lat coordinates and the output dashboard calculations / logic.
src/components/...: Contains the Form, Map, Output Dashboard and general UI components.
src/pages/...: Contains the main page the application.

## Key Features

* Form Data Management: The application uses a custom hook, useFormState, to manage the state of the form data. The form data includes information about the origin and destination of the shipment, details about the item being shipped, and the calculated carbon emissions. The form data is defined in FormData.ts.

* Context Provider: The application uses a context provider to pass the form state to the components. This is defined in FormDataContext.tsx.

* Location Data: The application includes predefined location data for both the origin and destination of the shipment. This data includes the name, country, longitude, latitude, and country code for each location. The location data is defined in OriginLocations.ts and DestinationLocations.ts.

* Distance Calculation: The Location Data is used in the CalculateDistance.ts function to measure the KMs between the two long/lat co-ordinates.

* Calculations and Logic: Data points are calculated based on the user's selection of Origin Location, Destination Location and Donated Item. These data points include:
  * Distance in KM between the two locations (CalculateDistance.ts)
  * Estimated Shipping Costs of the item
  * Carbon Emissions in KGs to transport that item (based on weight of item and travel distance)
  * Number of Mobile Phones that could have received a year's worth of charged based on the transportation emissions
  * Bottles of water that could have been purchased locally in place of the shipping cost
  * Number of trees required to offset the emissions of the transportation
  * Calculations, Logic and references found:  src\utils\OutputCalculations.ts

## Versions & Updates

Version 1: Core functions including dropdown menu for locations, dynamic map, item selection and dashboard output.
Version 1.1: Improved formula for carbon emissions and shipping costs, changed UI to be clearer on desktop and mobile.
Version 1.2: Optimised for mobile as map component was overflowing its container on x-axis
Version 1.3: Converted svg images into Webp for faster loading
Version 1.4:

* Improved the map functionality to prevent users from zooming in/out and scrolling in a direction infinitely.
* Included 'ocean blue' tiles where the map might clip / end.
* Removed tooltip from each dashboard card.
* Improved 'anchor' location of map pins to better represent the selected locations.

Version 1.5 (current):

* Refactored code and extracted components into separate files for better code organisation
* Included text colour changing animations for dashboard output.
* Added an overlay guide for the user to select locations then item.
* Added fade-out animation of overlay.
* Prevented dashboard displaying information prior to having locations + items selected (distance in KM the exception)
* Increased map width in mobile view without map overflowing div container
* Adjusted side of icons to have better dynamic sizing for desktop, tablet and mobile.

## Getting Started

To get started with this project, clone the repository and install the dependencies:

* git clone repository-url
* cd repository-directory
* npm install

Then, start the development server:

* npm start

The application will be available at <http://localhost:3000>.
