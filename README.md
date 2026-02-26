# Elden Ring Project - Full Stack Web API & Mobile App

A cross-platform application inspired by the dark fantasy universe of Elden Ring, built with a modern, high-performance tech stack featuring a **React Native (Expo)** frontend and an **ASP.NET Core 8.0** backend.

## 🌟 Key Features
- **Premium UX/UI**: Cinematic layout with fluid entrance animations powered by `moti` (Reanimated), elegant `LinearGradient` artwork overlays, and a custom "Golden Order" design system.
- **RESTful API Backend**: Fully featured ASP.NET Core API serving character profiles, locations, and lore.
- **Rich Text Markdown**: Implemented `react-native-markdown-display` on Mobile to parse `.md` files natively served by the API.
- **Intelligent Database Seeding**: API base data is dynamically read from physical `.md` files in the `SeedData` directory.
- **Self-Documenting API**: Integrated `Swashbuckle Annotations` to provide beautifully detailed Scalar API Documentation.
- **Data Persistence**: Backed by a relational **SQLite** database using **Entity Framework Core**.
- **Container Ready**: Easily deployable via Docker and `docker-compose`.

## 🛠️ Technology Stack
- **Backend**: C# 12 / ASP.NET Core 8.0 LTS / EF Core / SQLite / Scalar / Swashbuckle Annotations
- **Frontend**: TypeScript / React Native 0.81 / Expo / Moti / Axios / Linear Gradients / Markdown Display

## 🚀 Getting Started

### Prerequisites
- [.NET 8.0 SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/) (v18+)
- [Docker](https://www.docker.com/) (Optional, for containerized deployment)

### Local Development Setup

1. **Start the Backend API:**
   Navigate to the `EldenRingApi` directory and run:
   ```bash
   dotnet run
   ```
   The API will start at `http://localhost:5035`. You can view the Scalar API documentation at `http://localhost:5035/scalar/v1`.

2. **Configure the Mobile App:**
   In the `elden-app` directory, create a `.env` file and set the API URL:
   ```env
   EXPO_PUBLIC_API_URL=http://<YOUR_LOCAL_IP>:5035
   ```
   *(Replace `<YOUR_LOCAL_IP>` with your machine's network IP address to test on physical devices via Expo Go, otherwise it defaults to localhost for emulators).*

3. **Start the Mobile App:**
   ```bash
   npm install
   npx expo start
   ```

### Docker Deployment
You can orchestrate the entire stack using Docker Compose from the root directory:
```bash
docker compose up -d --build
```

---
*Created by [Biagio Scaglia](https://github.com/biagio-scaglia)*
