# Simple Authentication System 🔐

This is a basic user authentication system built with HTML, CSS, and JavaScript.  
It allows users to **register**, **log in**, and **log out**, with data stored locally using `localStorage`.

## 🌟 Features

- **Registration** with validation (name, email, password)
- **Login** with credentials check
- **Home Page** with personalized welcome message
- **Access Control**: only logged-in users can access the home page
- **Logout** functionality
- **Error messages** for invalid input or incorrect login
- **Success alerts** using SweetAlert2
- **Basic animations** on home page using CSS

## 💾 Technologies Used

- HTML5
- CSS3
- JavaScript (vanilla)
- SweetAlert2

## 📁 Pages

- `register.html`: for signing up
- `index.html`: for login
- `home.html`: the main protected page
- `style.css`: styling
- `main.js`: full authentication logic

## 📝 How it works

1. Users sign up with a valid name, email, and password.
2. Data is saved to `localStorage`.
3. On login, credentials are verified and user is redirected to the home page.
4. Home page shows a custom welcome message.
5. Unauthorized users trying to access home are redirected to the login page.
6. Users can log out, which clears their session.

## 📌 Note

This project is for educational purposes only and does not use secure authentication methods.  
For production, consider using backend authentication and hashing.

---

Made with ❤️ by Rowida Adel
