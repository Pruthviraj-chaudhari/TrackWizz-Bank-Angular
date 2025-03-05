## 📌 TrackWizz-Bank-Frontend

A **secure banking application** frontend built with **Angular 14** and **TailwindCSS**. It provides a smooth and responsive user interface for banking operations like authentication, account management, transactions, and more.

---

## 🚀 Features

✅ **Modern UI/UX** using TailwindCSS  
✅ **JWT & Cookie-based authentication**  
✅ **Account management & transactions**  
✅ **Secure money transfers**  
✅ **Loan application with interest calculator**  
✅ **Real-time updates & notifications**  

---

## 🏷 Tech Stack

- **Angular 14** - Framework for frontend  
- **TailwindCSS** - Styling framework  
- **RxJS** - Reactive programming  
- **Angular Router** - Client-side routing  
- **Angular Forms** - For form handling  

---

## ⚙️ Installation & Setup

### 1⃣ Clone the Repository  

```sh
git clone https://github.com/your-username/TrackWizz-Bank-Frontend.git
cd TrackWizz-Bank-Frontend
```

### 2⃣ Install Dependencies  

```sh
npm install
```

### 3⃣ Start the Development Server  

```sh
ng serve
```

> Runs the app at **http://localhost:4200**  

---

## 🔒 Environment Configuration  

Create an **.env** file in the root directory and set up API endpoints:

```sh
API_BASE_URL=http://localhost:5210/api
```

Or configure it in `environment.ts`:

```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5210/api'
};
```

---

## 📂 Project Structure  

```
📺 TrackWizz-Bank-Frontend
 ├ 📺 src
 ┃ ├ 📺 app
 ┃ ┃ ├ 📺 auth  // Authentication module
 ┃ ┃ ├ 📺 components  // Reusable components
 ┃ ┃ ├ 📺 services  // API service calls
 ┃ ┃ ├ 📺 pages  // Core pages
 ┃ ┃ └ 📄 app.module.ts
 ┃ ├ 📺 assets  // Images & static files
 ┃ ├ 📄 styles.css  // Global styles (Tailwind)
 ┃ └ 📄 main.ts
 ├ 📄 angular.json
 ├ 📄 package.json
 ├ 📄 tailwind.config.js
 └ 📄 README.md
```

---

## 🔗 API Integration  

This frontend consumes **TrackWizz-Bank Backend API**. Ensure the backend is running before making API calls.

| Feature       | API Endpoint                     | Method  |
|--------------|---------------------------------|--------|
| Login        | `/auth/login`                   | `POST` |
| Register     | `/auth/register`                | `POST` |
| Get Accounts | `/accounts`                     | `GET`  |
| Transfer     | `/transactions/transfer`        | `POST` |
| Loan Apply   | `/loans/apply`                  | `POST` |

---

## 🚀 Production Build  

To generate a production-ready build:

```sh
ng build --configuration=production
```

---

## 🛠️ Useful Commands  

| Command                  | Description                         |
|--------------------------|-------------------------------------|
| `ng serve`               | Run development server             |
| `ng build`               | Create production build            |
| `ng test`                | Run unit tests                     |
| `ng lint`                | Check for linting errors           |

---

## 🐟 License  

This project is **MIT Licensed**.

---

💬 **Need help?** Feel free to open an issue or contribute to the project! 🚀  

