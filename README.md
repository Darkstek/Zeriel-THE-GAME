# Zeriel — Kill or Be Killed

Browserová survival hra inspirovaná Vampire Survivors. Přežij co nejdéle, střílej automaticky na nepřátele a nekončí to dobře.
Je to pro mě hlavně fun projekt 

## Jak hrát

- **Šipky** — pohyb hráče
- **R** — restart po game over
- Střelba je automatická — hráč míří na nejbližšího nepřítele
- Přicházíš o životy při kontaktu s nepřítelem — máš 3 šance
- Skóre = počet sekund přežití

## Tech stack

- **Phaser.js** — 2D herní engine běžící v prohlížeči
- **TypeScript** — statické typování
- **Vite** — build tool a dev server

## Spuštění lokálně

```bash
git clone https://github.com/Darkstek/Zeriel-THE-GAME.git
cd Zeriel-THE-GAME
npm install
npm run dev
```

Otevři `http://localhost:5173` v prohlížeči.

## Stav projektu

Hra je aktivně ve vývoji. Aktuálně hotovo:

- [x] Pohyb hráče s hranicemi obrazovky
- [x] Spawning nepřátel z náhodných stran
- [x] Automatická střelba na nejbližšího nepřítele
- [x] HP systém s nesmrtelností po zásahu
- [x] Skóre a Game Over obrazovka
- [x] Restart klávesou R

Chystá se:

- [ ] Upgrade systém mezi vlnami
- [ ] Boss nepřátelé
- [ ] Difficulty scaling
- [ ] Sprite animace
- [ ] Leaderboard (Node.js + PostgreSQL + Socket.io)

## O projektu

Vedlejší projekt vedle mé hlavní [salon booking aplikace](https://github.com/Darkstek). Primární cíl je naučit se Phaser.js, Socket.io a real-time herní architekturu na něčem co mě baví.

Hra bude časem přerostlá do plnohodnotného multiplayeru — zatím solo survival základ.
