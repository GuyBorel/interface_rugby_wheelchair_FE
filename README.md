# Interface for Wheelchair Rugby Coaching

![Angular](https://img.shields.io/badge/built%20with-Angular-red)
![Status](https://img.shields.io/badge/status-completed-green)

Angular frontend for the **Strategic Coaching for Wheelchair Rugby** project.

This application provides a user interface for coaches and analysts to manage wheelchair rugby data and monitor player sensor information in real time. It communicates with a Flask backend through REST APIs and WebSocket communication.

The project was presented during a summer school in collaboration with **Stade Toulousain Handisport**, **UPSSITECH**, **Ostfalia University**, **University of Würzburg**, and **Münster University of Applied Sciences**.

---

## Objective

The objective of this frontend is to provide a practical coaching and analysis interface for wheelchair rugby by allowing users to:

- manage sports data such as clubs, players, matches, championships, and game history;
- display live sensor data during a match;
- support coaches and analysts with real-time information about players and teams;
- interact with the backend database through a structured graphical interface.

---

## Main Features

### Championship Management

Create and manage championship records, including:

- date;
- division;
- participating clubs;
- winning club.

### Club, Player, and Match Management

Dedicated forms are available to add and manage:

- clubs;
- players;
- matches;
- relationships between players, teams, and competitions.

### Current Game View

Real-time game interface displaying live information during a match, including:

- player data;
- team data;
- sensor status;
- live sensor readings.

### Game History

Display previously played games with associated information such as:

- teams;
- scores;
- match details;
- historical records.

### Player Directory

Browse players by team with information such as:

- name;
- club;
- profile data;
- player picture.

### Sensor Monitoring

Visualize real-time sensor data from individual players, including:

- heart rate;
- temperature;
- impacts and shocks;
- time-series curves.

### Database Table Editor

Development-oriented interface allowing manual inspection and editing of selected database tables.

---

## Technical Stack

- **Framework:** Angular 17
- **Languages:** TypeScript, HTML, SCSS
- **UI:** Bootstrap
- **Charts:** Chart.js / ng2-charts
- **Communication:** REST API and WebSocket
- **Backend:** Flask
- **Sensors:** ESP32-S3-based sensor system

---

## Associated Backend

The frontend is designed to work with the associated Flask backend:

[rugby_wheelchair_backend](https://github.com/Bebel19/rugby_wheelchair_backend)

The backend handles API routes, database operations, and real-time communication with the frontend.

---

## Local Development Setup

### Requirements

This project is pinned to Node.js 20 for compatibility with Angular 17.

Recommended setup:

```bash
nvm use
```
The repository includes a .nvmrc file specifying the expected Node.js version.

# Install Dependencies

Use npm ci to install the project from the locked dependency tree:

```bash
npm ci
```

Do not use npm install for normal setup.
Use npm install only when intentionally adding, removing, or updating dependencies.

# Start the Development Server

```bash
npm start
```

or:

```bash
ng serve --open
```

The application will be available at:

http://localhost:4200

# Build the project

```bash
npm run build
```

The production build output is generated in:

dist/interface_robot_explorateur


# Project Status

The project is functional and has been tested with ESP32-S3 sensors connected to the backend system.

The frontend builds successfully with the locked Angular 17 dependency tree.

