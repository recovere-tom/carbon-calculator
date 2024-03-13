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

## Getting Started

To get started with this project, clone the repository and install the dependencies:

* git clone repository-url
* cd repository-directory
* npm install

Then, start the development server:

* npm start

The application will be available at <http://localhost:3000>.
