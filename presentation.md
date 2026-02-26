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
  .byline {
    font-size: 0.8em;
    color: #8a7d51;
    font-style: italic;
  }
---

# L'Interregno in Tasca
### Architettura Full-Stack per Elden Ring
<p class="byline">by Biagio Scaglia</p>

---

## 🏛️ Panoramica del Progetto
Un database moderno, scalabile e dal design premium ispirato alle Terre Intermedie.

- **Backend**: ASP.NET Core 8.0 LTS
- **Mobile**: React Native 0.81 (Expo)
- **Database**: Entity Framework Core + SQLite
- **Infrastruttura**: Docker & Docker Compose

---

## ⚙️ Il Backend (La Grazia)
Solido, documentato e pronto per la produzione.

- **Minimal APIs & Repository Pattern**: Architettura pulita e separazione delle responsabilità.
- **Seeding Intelligente**: Dati di base della "Lore" caricati dinamicamente da veri file `.md` fisici.
- **Documentazione Premium**: Integrazione di **Scalar** potenziata con `Swashbuckle Annotations` per API self-documenting.

---

## 📱 Frontend: Design & UX
Un'esperienza utente oscura e cinematografica.

- **Golden Order Theme**: Palette colori custom (`#050505`, `#d4af37`) coerente con l'estetica del gioco.
- **Moti Animations**: Animazioni fluide e scalate per l'ingresso delle card e gli scroll.
- **Dettagli Visivi**: Utilizzo di `expo-linear-gradient` per sfumature morbide ed eleganti sulle immagini.
- **Lore in Markdown**: Rendering nativo su mobile di testi ricchi tramite `react-native-markdown-display`.

---

## 🛠️ Qualità e Stabilità
Sconfiggere i bug come i boss di Elden Ring.

- **Ambiente Dinamico**: Addio agli IP hardcoded; configurazione fluida tramite `EXPO_PUBLIC_API_URL`.
- **Integrità degli Asset**: Sincronizzazione perfetta tra backend (immagini in formato `.webp` super leggero) e front-end.
- **Type Safety Assoluta**: Integrazione rigorosa di TypeScript in tutta l'app React Native.

---

## 🐳 Deployment (Age of Stars)
Containerizzato per brillare ovunque.

- **Multi-stage Builds**: Immagini di produzione leggerissime basate su Alpine Linux per .NET.
- **Orchestrazione Locale**: Setup istantaneo con un singolo comando `docker-compose up`.
- **Persistenza Implacabile**: Volumi Docker per salvaguardare il preziosissimo database SQLite.

---

# GRAZIE DELLA VISITA, SENZALUCE.
### "Alzatevi, Senzaluce. Voi che siete morti, eppure vivete."
<p class="byline">Biagio Scaglia - Full Stack Developer</p>

---
