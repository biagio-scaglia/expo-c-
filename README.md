# Elden Ring Project - Expo & .NET Web API

Un'applicazione cross-platform ispirata a Elden Ring, composta da un frontend in **React Native (Expo)** e un backend in **ASP.NET Core**.

## Funzionalità
- **Animazioni Premium**: Caricamento fluido delle card grazie a `moti` (Reanimated).
- **Persistenza Dati**: Database **SQLite** reale con **Entity Framework Core**.
- **Personaggi & Stats**: Database RPG completo di attributi e immagini dal backend.
- **Accesso Mobile**: Ottimizzato per la rete locale (LAN).

## Tecnologie Utilizzate
- **Backend**: C# / ASP.NET Core / EF Core / SQLite / Scalar API Docs.
- **Frontend**: TypeScript / React Native / Expo / Moti / Axios / Lucide Icons.

## Come Iniziare

### Prerequisiti
- .NET SDK
- Node.js & npm

### Avvio Rapido (Windows)
Nella cartella principale (`elden/`), esegui il file di automazione:
```cmd
start.bat
```
Questo aprirà due terminali:
1. Il backend su `http://192.168.1.57:5035` (CORS e LAN abilitati).
2. Il frontend Expo in modalità LAN.

### Accesso da Mobile
Inquadra il QR code generato nel terminale di Expo usando l'app **Expo Go** (Android) o la fotocamera (iOS). Assicurati che entrambi i dispositivi siano connessi allo stesso Wi-Fi.

## Autore
[Biagio Scaglia](https://github.com/biagio-scaglia)
