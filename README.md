# CampusFix – Campus Issue Reporting & Resolution Portal

CampusFix is a React-based web application designed to simplify the process of reporting and managing campus-related issues. It provides students with a simple platform to report problems such as classroom maintenance, Wi-Fi connectivity, water supply, and cleanliness, while allowing issues to be tracked through different resolution stages.

## 🎯 Problem Statement

Few days ago my brother lost his key in collage campus hence i decided to create this project , first i will give this website to my friends and later on if this sucesses i will think to publish it 

## ✨ Features

- **Dashboard:** View the total number of reported, pending, in-progress, and resolved issues.
- **Report an Issue:** Submit issues with a title, category, location, and description.
- **Issue Management:** View all reported issues in an organized interface.
- **Status Updates:** Change issue statuses between Pending, In Progress, and Resolved.
- **Search & Filtering:** Find issues based on their details, category, or status.
- **Data Persistence:** Uses browser localStorage to retain issue records even after refreshing the page.
- **Responsive Design:** Access the application through desktop and mobile browsers.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend development and component-based UI |
| JavaScript (ES6+) | Application logic and interactivity |
| HTML5 | Application structure |
| CSS3 | Styling and responsive design |
| localStorage | Storing issue records in the browser |
| Git & GitHub | Version control and project management |

## 📂 Project Structure

```text
CampusFix/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Dashboard.jsx
│   │   ├── IssueForm.jsx
│   │   ├── IssueList.jsx
│   │   └── IssueCard.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html
├── package.json
└── README.md
```

## ⚙️ Getting Started

Follow these steps to run CampusFix locally.

**1. Clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/CampusFix.git
```

**2. Navigate to the project directory**

```bash
cd CampusFix
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the application**

Open the local URL provided by Vite in your browser.

## 💾 Data Storage

CampusFix uses the browser's localStorage to store reported issues.

- Issue records remain available after refreshing the page.
- Data is stored locally in the browser.
- Clearing browser storage or using a different browser/device will not preserve the same records.
- The current version does not use a centralized backend or database.

## 🚀 Future Improvements

- Implement user authentication and separate student/admin access.
- Integrate a backend and database for centralized data storage.
- Add image uploads for reported issues.
- Introduce notifications when issue statuses change.
- Deploy a production version for campus-wide use.

## 📌 Project Status

CampusFix is a beginner-friendly frontend project focused on React.js, JavaScript, state management, and browser-based data persistence.

---

**Developed by Harshit Kumar**

B.Tech Computer Science Student | Uttaranchal University

[GitHub](https://github.com/harshit00052) · [LinkedIn](https://www.linkedin.com/in/harshit-kumar-406989323/)