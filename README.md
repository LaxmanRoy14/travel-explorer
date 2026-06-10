# Travel Explorer 🌍

A modern full-stack travel destination management application built using React, Redux, React Router, Axios, and JSON Server.

Travel Explorer allows users to discover destinations, manage favorites, search and filter destinations, view detailed destination information, and perform complete CRUD operations through a responsive and user-friendly interface.

---

## 🚀 Live Demo

### Frontend (Netlify)

https://personal-travel-explorer.netlify.app/

### Backend (Render)

https://travel-explorer-backend-1.onrender.com/

---

## 📸 Screenshots

Add screenshots of:

- Home Page
- Destinations Page
- Destination Details Page
- Login Page
- Register Page
- Favorites Page

---

## ✨ Features

### Authentication

- User Registration
- User Login
- User Logout
- Local Storage Session Management

### Destination Management

- Add Destination
- View Destination Details
- Edit Destination
- Delete Destination

### Search & Filtering

- Search destinations by name
- Filter destinations by category
- Filter destinations by budget
- Sort destinations by rating

### Favorites

- Add destinations to favorites
- Remove destinations from favorites
- Favorites managed using Redux Toolkit

### User Interface

- Responsive Design
- Travel-themed Home Page
- Modern Navigation Bar
- Styled Login & Registration Pages
- Hover Animations and Interactive Components

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- React Router DOM
- Redux Toolkit
- React Redux
- Axios
- CSS3

### Backend

- JSON Server

### Deployment

- Netlify (Frontend)
- Render (Backend)

### Version Control

- Git
- GitHub

---

## 📂 Project Structure

```text
travel-explorer/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── DestinationCard.jsx
│   │   └── Navbar.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Destinations.jsx
│   │   ├── DestinationDetails.jsx
│   │   ├── AddDestination.jsx
│   │   ├── EditDestination.jsx
│   │   ├── Favorites.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   │
│   ├── redux/
│   │   └── favoritesSlice.js
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/LaxmanRoy14/travel-explorer
```

### Navigate to Project

```bash
cd travel-explorer
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🔗 API Configuration

Update the backend URL in:

```javascript
src / services / api.js;
```

Example:

```javascript
import axios from "axios";

export default axios.create({
  baseURL: "https://your-render-backend-url.onrender.com",
});
```

---

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

- React Component Architecture
- React Hooks
- State Management with Redux Toolkit
- Client-Side Routing
- REST API Integration
- CRUD Operations
- Authentication Concepts
- Responsive Web Design
- Deployment with Netlify and Render
- Git & GitHub Workflow

---

## 🔮 Future Enhancements

- Pagination
- Dark Mode
- Toast Notifications
- User Profile Page
- Destination Reviews
- Destination Ratings by Users
- Image Upload Support
- JWT Authentication
- MongoDB Backend Integration

---

## 👨‍💻 Author

**Laxman Roy**

- GitHub: https://github.com/LaxmanRoy14

---

## 📜 License

This project is created for educational and portfolio purposes.
