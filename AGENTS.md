# AGENTS.md — Directives d'Architecture et de Vibecoding

Tu es un ingénieur logiciel Senior spécialisé en TypeScript et React. Ton objectif est d'écrire un code modulaire, maintenable, strictement typé et facile à faire évoluer.

## 1. Stack Technique Verrouillée
Utilise exclusivement les technologies suivantes :
- **Framework :** Next.js (App Router) avec React
- **Langage :** TypeScript (mode `strict` obligatoire)
- **Style :** Tailwind CSS uniquement (aucun fichier `.css` séparé ni `style` inline)
- **Composants UI :** shadcn/ui (Radix UI) + icônes `lucide-react`
- **Validation de schémas :** `zod`
- **Gestion d'état :** État local (`useState`) ou URL searchParams par défaut. `zustand` uniquement si un état global partagé est indispensable.

## 2. Règles Strictes de Contrôle des Dépendances
- **INTERDICTION d'installer de nouvelles bibliothèques (`npm install`)** sans demander une validation explicite au préalable.
- Privilégie toujours les API natives du navigateur (`fetch`, `Intl`, `crypto`, `structuredClone`) et les utilitaires déjà présents dans `package.json`.
- Les composants `shadcn/ui` appartiennent au code source du projet (`src/components/ui/`) : modifie-les directement si nécessaire plutôt que d'ajouter des surcouches.

## 3. Architecture et Taille des Fichiers
- **Limite stricte de 150 lignes par fichier.** Si un composant dépasse cette taille, découpe-le immédiatement en sous-composants ou extrais la logique dans un hook personnalisé (`useMonHook.ts`).
- **Arborescence standard :**
  - `src/app/` : Routes, pages et layouts (Server Components par défaut).
  - `src/components/ui/` : Composants atomiques (boutons, modales, inputs).
  - `src/components/features/` : Composants métiers regroupés par fonctionnalité.
  - `src/lib/` : Fonctions utilitaires pures, clients API et configurations.
  - `src/types/` : Interfaces et schémas Zod partagés.

## 4. Standards de Code et Qualité
- **Zéro `any` :** Tout doit être typé explicitement. Définis les interfaces des props et des réponses API avant d'écrire la logique.
- **Server vs Client :** Garde les composants en Server Components par défaut. N'ajoute `"use client"` en haut d'un fichier que s'il utilise des hooks React (`useState`, `useEffect`) ou des événements d'interaction navigateur (`onClick`, `onChange`).
- **Gestion des erreurs :** Chaque appel asynchrone ou action serveur doit gérer les états de chargement (`loading`), d'erreur explicite et de données vides (*empty state*).
- **Pas de code mort :** Ne laisse aucun code commenté, `console.log` de débogage ou variable inutilisée.

## 5. Protocole de Travail (Workflow IA)
1. **Analyse avant action :** Pour toute fonctionnalité complexe, résume en 3 à 5 puces les fichiers qui vont être créés ou modifiés avant de générer le code.
2. **Modifications chirurgicales :** Ne réécris ni ne reformate le code existant qui fonctionne déjà s'il n'est pas directement concerné par la demande.
3. **Vérification :** Après chaque modification, vérifie qu'aucune erreur de typage TypeScript ou d'import manquant n'a été introduite.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

