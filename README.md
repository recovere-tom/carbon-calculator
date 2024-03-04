# Carbon Calculator & Home Page Animation

This repo contains two applications.

1. Carbon Calculator - built with React and TypeScript. It calculates the carbon emissions associated with shipping items from one location to another.

2. Home Page Hero Animation - built with React, TypeScript and Framer Motion. Provides an animated hero section for the Recovere Website.

## Purpose of two applications under one repo (why?)

Encountered an issue preventing multiple individual react applications running on the WordPress server.

## Encountered Issue

Applications would not render.
Error Message:"Uncaught SyntaxError: Identifier 'xx' has already been declared."
Hypothesis of cause: Attempting to run multiple instances of React / ReactDOM.

## Short Term Solution

Consolidation of applications into a single Vite build file. Using two roots, carbon-calculator-root and hero-section-root, to display the components. Each root is referenced in the wordpress function.php file and accessed using shortcode.

## Structure

The applications share parental folders and are separated into subfolders. Carbon Calculator folders have the prefix 'carbonCalc' - Home Page Hero Animation folders have the prefix 'heroAnimation'.

## Parent Folders

src/data/...: Contains data and types, such as form data and location data.
src/utils/...: Contains utility functions and context providers.
src/components: Contains React components used in the applications.
src/pages: Contains the pages of the applications.

## Key Features

Form Data Management: The application uses a custom hook, useFormState, to manage the state of the form data. The form data includes information about the origin and destination of the shipment, details about the item being shipped, and the calculated carbon emissions. The form data is defined in FormData.ts.
Context Provider: The application uses a context provider to pass the form state to the components. This is defined in FormDataContext.tsx.
Location Data: The application includes predefined location data for both the origin and destination of the shipment. This data includes the name, country, longitude, latitude, and country code for each location. The location data is defined in OriginLocations.ts and DestinationLocations.ts.
Shipping Cost Calculation: The application uses the Australia Post API to calculate the cost of shipping the item. This is done in AusPostApi.ts. (API currently broken. Interim solution: Shipping cost equation found under src\utils\carbonCalcUtils\calculations\useOutputDashboardCalculations.ts )

## Getting Started

To get started with this project, clone the repository and install the dependencies:

Then, start the development server:

The application will be available at <http://localhost:3000>.
