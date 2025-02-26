# BloodLine - Blood Donor Management System

A modern web application for managing blood donors and connecting them with those in need.

## Project Structure

```
bloodline/
├── backend/                 # Backend server code
│   ├── src/
│   │   ├── config/         # Configuration files
│   │   ├── controllers/    # Route controllers
│   │   ├── models/        # Database models
│   │   ├── routes/        # API routes
│   │   └── types/         # TypeScript types
│   └── package.json
│
├── src/                    # Frontend source code
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   └── ...            # Feature components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions and API client
│   ├── types/             # TypeScript types
│   └── App.tsx            # Root component
│
├── public/                 # Static files
├── .env                    # Environment variables
└── package.json
```

## Features

- Search donors by blood group and location
- Register as a donor
- Real-time donor availability status
- Modern, responsive UI
- TypeScript support
- MongoDB database

## Getting Started

1. Install dependencies:
   ```bash
   npm install        # Frontend dependencies
   cd backend && npm install  # Backend dependencies
   ```

2. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the variables as needed

3. Start the development servers:
   ```bash
   # Terminal 1 - Frontend
   npm run dev

   # Terminal 2 - Backend
   cd backend && npm run dev
   ```

## Technologies Used

- Frontend:
  - React
  - TypeScript
  - Tailwind CSS
  - Vite

- Backend:
  - Node.js
  - Express
  - MongoDB
  - Mongoose

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request
