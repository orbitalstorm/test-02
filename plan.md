# Spécifications & Plan d'Implémentation : Bomberman Multijoueur (4 Joueurs)

## 1. Architecture Générale
- **Serveur Autoritaire Node.js (WebSocket - 30 TPS) :**
  - Gestion des salles multijoueurs (2 à 4 joueurs par room avec code unique).
  - Validation stricte des paquets réseau entrants via Zod.
  - Boucle de simulation autoritaire à 30 Ticks/seconde (physique, déplacements, détonations, glisse et vol de bombes).
  - Calcul et propagation des explosions en croix (+), réactions en chaîne, destruction des briques destructibles.
  - Distribution procédurale des bonus et malus avec immunité temporaire (`immuneMs: 800ms`) évitant leur autodestruction par la déflagration d'origine.
  - Système de traversabilité dynamique à la pose (`passableFor`) garantissant que le joueur peut sortir librement d'une bombe qu'il vient de poser sans être bloqué.
  - Détection de la condition de fin de partie / dernier survivant et gestion des scores.
- **Client Web (Next.js 16 / React 19 / Canvas 2D) :**
  - Rendu haute performance sur Canvas HTML5 (60 FPS constants).
  - Rendu des bombes catapultées en cloche parabolique 3D au-dessus des murs avec ombre projetée au sol.
  - Synthèse audio procédurale rétro via l'API native Web Audio (aucun asset audio externe).
  - Interface utilisateur (Lobby, HUD dynamique des compétences et bonus, overlay de victoire) stylisée avec Tailwind CSS.

---

## 2. Dépendances Installées
- `ws` & `@types/ws` : Serveur WebSocket léger et ultra-rapide.
- `tsx` (devDependencies) : Exécution directe du serveur WebSocket TypeScript (`npm run game:server`).
- `lucide-react` : Icônes d'interface utilisateur.
- `zod` : Validation stricte des schémas de messages client/serveur.

---

## 3. Règles de Jeu & Gameplay Authentique

### Grille & Joueurs
- Grille classique de 15x13 cases.
- Piliers intérieurs indestructibles tous les 2 blocs.
- Briques destructibles aléatoires (~65% de remplissage initial).
- Zones de spawn sécurisées (3 cases dégagées aux 4 coins).
- 4 Joueurs identifiés par couleur : Bleu (Slot 1), Rouge (Slot 2), Vert (Slot 3), Jaune (Slot 4).

### Bombes, Collisions & Détonations
- Fusible de détonation de 2.5 secondes.
- Réactions en chaîne immédiates lorsqu'une bombe est touchée par une flamme.
- Corner-sliding : assistance directionnelle fluide dans les virages et couloirs étroits.
- Traversabilité dynamique : perméable pour le poseur jusqu'à sortie totale de la cellule, puis blocage solide permanent.

### Bonus Cumulables & Empilables
- 🔥 **Flamme+** : Augmente le rayon de l'explosion (+1 case).
- 💣 **Bombe+** : Capacité de bombes simultanées supplémentaire (+1 bombe).
- ⚡ **Vitesse+** : Vitesse de déplacement augmentée (+0.5 case/s).
- 👟 **Coup de pied (Kick)** : Permet de faire glisser une bombe au sol en marchant contre elle (la bombe glisse jusqu'à rencontrer un obstacle).
- 🥊 **Coup de poing (Punch - Touches X / E / Shift)** : Catapulte la bombe devant soi en trajectoire parabolique par-dessus les murs et obstacles sur 3 cases.

### Malus Cumulables
- 🐢 **Déplacement ralenti (Slow)** : Réduit la vitesse de déplacement du joueur.
- 💀 **Portée diminuée (Weak Flame)** : Réduit le rayon d'explosion (-1 case, minimum 1).

---

## 4. Découpage Modulaire Réalisé (< 150 lignes par fichier)

### Modèles & Logique Partagée
- `src/types/game.ts` (111 l.) : Types stricts pour la grille, joueurs, bombes mobiles/volantes, power-ups, messages WS.
- `src/lib/game/constants.ts` (76 l.) : Constantes de simulation, vitesse, sauts de bombe, durées, slots de joueurs.
- `src/lib/game/grid.ts` (50 l.) : Algorithmes de génération de map et zones de spawn.
- `src/lib/game/physics.ts` (97 l.) : Moteur de collision boîtes englobantes et corner-assist.

### Serveur WebSocket Autoritaire
- `server/gameServer.ts` (104 l.) : Point d'entrée WebSocket, boucle de tick et routage réseau.
- `server/messageSchema.ts` (37 l.) : Schémas Zod des messages clients (`move`, `plant_bomb`, `punch_bomb`, etc.).
- `server/RoomManager.ts` (112 l.) : Gestion des salons, attribution des 4 slots, déconnexions.
- `server/GameInstance.ts` (147 l.) : Orchestration de la boucle de jeu autoritaire et état des salles.
- `server/explosions.ts` (109 l.) : Propagation des flammes en croix, réactions en chaîne, drops protégés.
- `server/bombMechanics.ts` (114 l.) : Logique de coup de pied (glisse) et de coup de poing (vol au-dessus des obstacles).
- `server/gameRules.ts` (95 l.) : Gestion de la traversabilité des bombes, application des bonus/malus, fin de partie.

### Moteur Graphique & Audio Client
- `src/hooks/useGameSocket.ts` (90 l.) : Connexion WebSocket client, écoute des snapshots et événements audio.
- `src/hooks/useGameControls.ts` (80 l.) : Écoute clavier fluide (ZQSD/Flèches, Espace pour bombe, X/E/Shift pour punch).
- `src/lib/game/canvasRenderer.ts` (91 l.) : Boucle de rendu Canvas 2D, superposition des entités et effets.
- `src/lib/game/renderEntities.ts` (132 l.) : Tracé vectoriel des sprites joueurs, bombes animées (sol & cloche 3D), bonus et malus.
- `src/lib/game/audio.ts` (107 l.) : Synthèse sonore procédurale Web Audio (plant, kick, punch, explosion, powerup, malus, death, victory).

### Interface Utilisateur (Tailwind CSS)
- `src/components/ui/Button.tsx` (45 l.) & `Input.tsx` (28 l.) : Composants atomiques d'interface.
- `src/components/features/lobby/JoinRoomCard.tsx` (87 l.) : Formulaire de création / jonction avec générateur de code.
- `src/components/features/lobby/PlayerSlotCard.tsx` (62 l.) : Cartes des 4 slots joueurs avec indicateurs d'état.
- `src/components/features/lobby/LobbyRoomView.tsx` (99 l.) : Salle d'attente à 4 joueurs avec bouton prêt et partage du salon.
- `src/components/features/game/GameArena.tsx` (76 l.) : Arène principale intégrant le Canvas et les touches d'aide.
- `src/components/features/game/GameHeader.tsx` (93 l.) : Barre HUD affichant en direct statistiques, badges (👟, 🥊) et contrôle du son.
- `src/components/features/game/GameOverlay.tsx` (67 l.) : Écran de fin de round avec annonce du vainqueur et bouton rejouer.
- `src/components/features/game/GameClientContainer.tsx` (65 l.) : Conteneur orchestrant les vues lobby/jeu.
- `src/app/page.tsx` (43 l.) & `layout.tsx` (29 l.) : Structure de la page Next.js.
