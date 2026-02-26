---
marp: true
theme: uncover
backgroundColor: #050505
color: #d4af37
style: |
  section {
    font-family: 'serif';
    text-align: left;
  }
  h1, h2 {
    color: #d4af37;
    text-transform: uppercase;
    text-shadow: 0px 2px 10px rgba(212, 175, 55, 0.4);
  }
  p, li {
    color: #f2e8c6;
  }
  code {
    background: #0a0a0a;
    color: #8a7d51;
    border: 1px solid #2a2015;
    padding: 2px 6px;
    border-radius: 4px;
  }
---

# Elden Ring Database
### Full-Stack Architecture & Premium UI
**By Biagigio & the Tarnished**

---

## 🏛️ Project Overview
A modern, scalable database for the Lands Between.

- **Backend**: ASP.NET Core 8.0 LTS
- **Mobile**: React Native 0.81 (Expo)
- **Data**: Entity Framework Core + SQLite
- **Documentation**: Scalar API Reference

---

## ⚙️ Backend Architecture
Robust and stabilized for production.

- **Migration to .NET 8.0**: Ensured long-term support and stability.
- **RESTful API**: Optimized for mobile consumption with custom DTOs.
- **Advanced Tools**: Integrated **Scalar** for high-fidelity API documentation.
- **Repository Pattern**: Clean data access logic and easy testing.

---

## 📱 Mobile Experience (UI/UX)
Cinematic, dark-fantasy design.

- **Fluid Animations**: Staggered list items and hero scaling via `Moti`.
- **Theme System**: Custom "Golden Order" palette matching in-game aesthetics.
- **Responsive Layouts**: Overlay images, dynamic tab bar, and custom stat grids.
- **Type Safety**: Fully typed with TypeScript & React Navigation 7.

---

## 🛠️ Technical Refinements
Overcoming the "Malenia" of bugs.

- **Environment Config**: Implemented `EXPO_PUBLIC_API_URL` for seamless deployment without hardcoded IPs.
- **Deprecation Fixes**: Silenced library-level warnings and deprecated React Native props.
- **Asset Integrity**: Synchronized `.webp` image hosting between EF Core seed data and static files.

---

## 🐳 Deployment (Docker)
Containerized for the Age of Stars.

- **Multi-stage Builds**: Lightweight Alpine production `.NET` images.
- **Orchestration**: `docker-compose` for local and cloud deployment.
- **Persistence**: Database volumes for reliable SQLite storage.

---

# THANK YOU, TARNISHED
### "Arise now, ye Tarnished, ye dead, who yet live."

---
