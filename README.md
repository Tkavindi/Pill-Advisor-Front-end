# PillAdvisor Frontend

PillAdvisor is a web application designed to provide detailed information about medications, including their uses, dosage, side effects, and interactions. This is the frontend repository built with React and Vite.

🌍 **Live Demo:** [pilladvisor.netlify.app](https://pilladvisor.netlify.app)

## 📌 Features
- Search for medications and retrieve detailed information
- View client testimonials
- Explore various medicine-related services
- Responsive UI with modern design

## 🚀 Tech Stack
- **React** (Frontend framework)
- **Vite** (Build tool)
- **CSS** (Styling)
- **Axios** (API requests)
- **React Router** (Navigation)

## 📂 Project Structure
```
├── src
│   ├── components
│   │   ├── NavigationBar
│   │   ├── Home
│   │   ├── Search
│   │   ├── Services
│   │   ├── Testimonials
│   │   ├── Contact
│   │   ├── Footer
│   ├── assets
│   ├── App.jsx
│   ├── main.jsx
├── public
├── package.json
├── vite.config.js
├── README.md
```

## 🛠️ Installation & Setup
Make sure you have **Node.js** installed on your system.

1. Clone the repository:
   ```sh
   git clone https://github.com/Tkavindi/Pill-Advisor-Front-end.git
   ```
2. Navigate to the project directory:
   ```sh
   cd pilladvisor-frontend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
5. Open your browser and visit: `http://localhost:5173/`

## 🔗 Backend API Integration
The frontend communicates with the **PillAdvisor Backend** to fetch medicine-related data. Ensure the backend is running and update the API base URL in the project accordingly.

## 🚀 Deployment
The project is deployed on **Netlify**. To deploy manually, follow these steps:
1. Build the project for production:
   ```sh
   npm run build
   ```
2. Upload the `dist/` folder to Netlify or configure continuous deployment via GitHub.

## 🤝 Contributing
Feel free to fork this repository and make improvements. Pull requests are welcome!

## 📄 License
This project is licensed under the MIT License.


