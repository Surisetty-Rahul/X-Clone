# X-CLONE

X-CLONE is a full-stack social media web application inspired by Twitter, built with the MERN stack (MongoDB, Express, React, Node.js). It supports user authentication, posting, following, notifications, and more.

---

## Features

- User authentication (signup, login, logout)
- Create, edit, and delete posts (with image upload)
- Follow/unfollow users
- View user profiles and timelines
- Like and comment on posts
- Notifications for follows, likes, and comments
- Responsive UI with Tailwind CSS and DaisyUI

---

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, DaisyUI
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Authentication:** JWT, Cookies
- **Image Upload:** Cloudinary
- **State Management:** React Query

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB (local or Atlas)
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/x-clone.git
   cd x-clone
   ```

2. **Install backend dependencies:**
   ```bash
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

4. **Set up environment variables:**

   Create a `.env` file in the `backend` directory with the following:

   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   NODE_ENV=development
   PORT=5000
   ```

---

## Running the App

### Development

**Backend:**
```bash
npm run dev
```

**Frontend:**
```bash
cd frontend
npm run dev
```

### Production

Build the frontend:
```bash
cd frontend
npm run build
cd ..
```

Start the server:
```bash
npm run start
```

---

## Folder Structure

```
x-clone/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── tailwind.config.js
│   └── ...
│
├── package.json
└── README.md
```

---

## License

This project is licensed under the [ISC License](LICENSE).

---

## Acknowledgements

- [Node.js](https://nodejs.org/)
- [React](https://react.dev/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Cloudinary](https://cloudinary.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)

---
