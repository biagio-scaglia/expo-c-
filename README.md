# Elden Ring Project - Expo & .NET Web API

Un'applicazione cross-platform ispirata a Elden Ring, composta da un frontend in **React Native (Expo)** e un backend in **ASP.NET Core**.

## Funzionalità
- **Personaggi**: Visualizzazione dei personaggi iconici con titolo e descrizione.
- **Luoghi**: Esplorazione delle regioni dell'Interregno.
- **Lore**: Dettagli approfonditi sulla storia del gioco.
- **Accesso Mobile**: Configurato per funzionare sulla rete locale (LAN).

## Tecnologie Utilizzate
- **Backend**: C# / ASP.NET Core (In-Memory Database, Scalar API Docs, CORS enabled).
- **Frontend**: TypeScript / React Native / Expo / Axios / Lucide Icons.

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
