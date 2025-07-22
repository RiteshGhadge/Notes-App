# 📋 PasteBin / Notes App - React + Redux + TailwindCSS

A lightweight web app for creating, editing, viewing, deleting, and sharing notes/snippets — inspired by PasteBin.

Live Demo: [https://notes-q45lgov0l-ritesh-ghadges-projects.vercel.app/pastes](https://notes-q45lgov0l-ritesh-ghadges-projects.vercel.app/pastes)

---

## 🚀 Features

* ✅ Create and save pastes/notes
* ✅ View, edit, and delete your pastes
* ✅ Search pastes via title
* ✅ Copy content to clipboard
* ✅ Share links (placeholder icon ready)
* ✅ Persistent storage via localStorage
* ✅ Responsive UI using TailwindCSS
* ✅ Real-time toast notifications

---

## ⚙️ Technologies Used

* React.js (Frontend Framework)
* Redux Toolkit (State Management)
* React Router DOM (Routing)
* Tailwind CSS (Styling)
* React Hot Toast (Notifications)
* Vercel (Deployment)

---

## 📁 Project Structure

| Directory / File | Purpose                            |
| ---------------- | ---------------------------------- |
| components/      | Reusable UI components             |
| redux/           | Redux store & pasteSlice           |
| assets/          | Static assets (if any)             |
| App.jsx          | Router configuration & base layout |
| main.jsx         | App bootstrap                      |
| store.js         | Redux store setup                  |
| App.css          | Component-level CSS                |
| index.css        | Tailwind CSS configuration         |

---

## 📦 Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/notes-app.git
cd notes-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
npm run preview
```

---

## 🎨 Styling Notes

* TailwindCSS handles primary design.
* App.css and paste.css add custom styles and transitions.
* Responsive across devices using Tailwind utilities.

---

## 🛡️ State Management

* Uses Redux Toolkit slice (pasteSlice.js)
* Persistent via localStorage
* CRUD operations:

  * addToPastes
  * updateTopastes
  * removeFromPastes
  * resetAllPastes

---

## 📷 Key Components

* Navbar.jsx - Navigation bar
* Home.jsx - Welcome / landing page
* Paste.jsx - Search, manage, delete pastes
* ViewPaste.jsx - View single paste detail

---

## 🚧 Future Improvements

* Implement real share links with direct routing
* Add Markdown support
* Authentication system for private pastes
* Expiration time for notes
* Backend API (Node.js/Express or Firebase) for cloud storage

---

## 👤 Author

Ritesh Ghadge

---

## 📄 License

This project is open-source and free to use.
