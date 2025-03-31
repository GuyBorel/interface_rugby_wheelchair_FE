# Frontend Rugby Fauteuil – Interface de Monitoring Temps Réel

![Angular](https://img.shields.io/badge/built%20with-Angular-red)
![Status](https://img.shields.io/badge/status-terminé-green)

Ce frontend Angular est l’interface utilisateur du projet de **coaching stratégique pour le rugby en fauteuil**. Il interagit avec le backend Flask via API REST et WebSocket pour offrir un affichage en temps réel des données capteurs et de gestion de base de données sportive.

Projet présenté lors d'une **summer school 2024** en partenariat avec l’UPSSITECH (France), Ostfalia (Allemagne), Wuerzburg (Allemagne) et Munster UAS (Irlande).

---

## 🚀 Objectif

- Offrir une interface ergonomique aux analystes/coachs pour suivre l'activité physique et stratégique des joueurs.
- Gérer la base de données : clubs, joueurs, matchs, championnats.
- Visualiser les données des capteurs en temps réel (chocs, température, rythme cardiaque).

---

## 🔍 Fonctionnalités principales

- `Add Championship` : ajout d’un nouveau championnat (date, division, club gagnant...)
- `Add Club / Player / Match` : interfaces de création avec liaison dynamique
- `Current Game` : 
  - Affichage live des capteurs des joueurs en match
  - Informations par joueur / capteur / équipe
- `Games` : historique des matchs joués avec scores et infos associées
- `Players` : annuaire des joueurs par équipe, avec infos et photo
- `Select Table` : outil d’édition manuelle de la base de données (dev)
- `Sensors` : courbes temps-réel des capteurs individuels (BPM, température, chocs)

---

## ⚖️ Stack Technique

- **Framework** : Angular 17+
- **Langages** : TypeScript, HTML, SCSS
- **API / Socket** : Connexion au backend Flask via HTTP et WebSocket

---

## 🌐 Lien vers le backend associé

Backend Flask : [rugby_wheelchair_backend](https://github.com/Bebel19/rugby_wheelchair_backend)

---

## ✅ Statut

Le projet est fonctionnel et a été testé avec des capteurs ESP32-S3 connectés.
---

## 📂 Lancer le projet localement

```bash
# 1. Cloner le repo
$ git clone https://github.com/GuyBorel/interface_rugby_wheelchair_FE.git
$ cd interface_rugby_wheelchair_FE

# 2. Installer les dépendances
$ npm install

# 3. Lancer le serveur de dev
$ ng serve --open

# L'application sera disponible sur http://localhost:4200
```
