# XYZ Retail Analytics Portal

## Project Overview

The XYZ Retail Analytics Portal is a web-based analytics solution developed using React and Tableau Public.

The portal provides business insights related to:

* Sales performance
* Outlet comparison
* Quality metrics
* Operational trends

The goal of the project is to provide a centralized and interactive analytics experience for leadership teams.

---

# Features

## Sales Dashboard

* Monthly sales trends
* Outlet-wise sales comparison
* KPI cards
* Interactive filtering

## Quality Dashboard

* Quality score tracking
* Defect and incident analysis
* Outlet quality comparison
* Trend analysis

## Web Application

* React-based frontend
* Sidebar navigation
* Embedded Tableau dashboards
* Responsive design
* Consistent branding

---

# Technologies Used

* React
* React Router
* Tailwind CSS
* Tableau Public
* Vite
* Vercel

---

# Tableau Public Links

## Sales Dashboard

(https://public.tableau.com/views/XYZ_retail_chain_sales2/Dashboard1?:showVizHome=no)

## Quality Dashboard

("https://public.tableau.com/views/XYZ_retail_chain_quality4/Dashboard2?:showVizHome=no")

---

# Project Structure

```bash
src/
 ├── components/
 │     ├── Sidebar.jsx
 │     └── TableauEmbed.jsx
 │
 ├── pages/
 │     ├── Home.jsx
 │     ├── Sales.jsx
 │     ├── Quality.jsx
 │     └── About.jsx
 │
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

# How To Run Locally

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

---

# Deployment

The frontend application is deployed using Vercel.

---

# Assumptions Made

* Data provided was assumed to be mostly clean.
* Outlet IDs were considered unique.
* Monthly and yearly fields were used for relationships.
* KPIs were derived based on available dataset columns.

---

# Design Decisions

* A clean and minimal UI was used for business readability.
* Tailwind CSS was chosen for faster and responsive styling.
* Tableau dashboards were embedded directly into React pages.
* Consistent branding and spacing were maintained throughout the application.

---

# Future Improvements

* Mobile optimization
* Advanced Tableau interactions
* Authentication and role-based access
* Dark mode support
* Real-time data integration

---

# Author

Jyotsna Kumari

