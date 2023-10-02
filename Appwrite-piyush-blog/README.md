# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Features
 - to protect from vendor locking(if service like appwrite changed) then i introduced service file in appwrite/auth.js which i modified in class object so that i only need to change service and frontend wouldnt even know that backend changed
 - created APPWRITE file which can be reused in any future projects
 - redux for saving things in react like Islogin or dark/light themes
 
