# ITYO — Site web agence

## Contexte

ITYO est une agence fondée par Yannis, basée à Paris.
Coeur de métier : concevoir et déployer des **applications IA sur mesure** pour les PME, TPE et startups françaises — facturation automatique, réception client, reporting, assistants, synchronisation d'outils.
Deuxième offre : **création de sites web** sur mesure, connectés aux automatisations dès le départ.

## Positionnement messaging (important)

- ITYO ne vend pas de l'automatisation abstraite. On construit l'**app** qui règle le problème précis du client.
- N8N est un outil d'implémentation interne, pas un argument de vente. Ne pas le mentionner en avant.
- Les exemples (facturation, réception client, reporting) illustrent ce qu'on peut faire — ils ne limitent pas l'offre.
- Chaque projet part de la situation du client, conçu avec lui. Le messaging insiste sur le sur-mesure infini.
- Création de site web : service complémentaire, présenté avec le label "Et aussi" pour signaler le registre différent.

## Stack technique du site

| Composant | Choix |
|---|---|
| Type | Single HTML file (vanilla) |
| Framework | Aucun — HTML/CSS/JS pur |
| Fonts | Google Fonts CDN (Cormorant Garamond + DM Sans) |
| Email | EmailJS CDN (@emailjs/browser@4) |
| Background | SVG paths animés vanilla JS |
| Hébergement recommandé | Netlify (drag & drop gratuit) |
| Domaine recommandé | `ityo.io` (OVH ou Namecheap) |

## Fichier principal

`ityo-site-final.html` — site complet 4 pages (routing JS pur, IDs : page-home / page-services / page-projects / page-vision)

## Identité visuelle — Obsidian & Or

### Palette
| Rôle | Hex |
|---|---|
| Fond principal | `#1B1B26` |
| Surface secondaire | `#23232F` |
| Surface tertiaire | `#2B2B39` |
| Or mat (accent) | `#C9A84C` |
| Or clair (hover) | `#E8C96A` |
| Texte principal | `#F8F5EE` |
| Texte secondaire | `rgba(248,245,238,0.80)` |
| Texte muted | `rgba(248,245,238,0.52)` |
| Bordures | `rgba(201,168,76,0.14)` |

### Typographie
- **Titres** : Cormorant Garamond (serif, 300/400, italic pour accents)
- **Corps/UI** : DM Sans (sans-serif, 300/400/500)

### Règles de style (impeccable)
- Pas de cadratins (—) dans le contenu visible. Remplacer par point, virgule, deux-points ou interpunct (·) selon le contexte.
- Pas de glassmorphism, pas de néon, pas de gradients purple/blue.
- Easing : `cubic-bezier(0.22,1,0.36,1)` (ease-out-expo) sur toutes les transitions.
- Séparateurs dans les tags et badges : `·` (interpunct).

### Logo
SVG inline — 5 noeuds interconnectés (référence aux noeuds N8N). Noeud central = ITYO. Satellites = outils/clients.

## EmailJS

| Clé | Valeur |
|---|---|
| Public Key | `r8aRG4eA8vmvhsJy2` |
| Service ID | `service_6e8oaar` |
| Template ID | `template_dx6z0ik` |

Variables template : `{{from_name}}`, `{{reply_to}}`, `{{secteur}}`, `{{message}}`

## Effets visuels

1. **Floating SVG Paths** — 1 SVG, 18 courbes de Bézier, mirror CSS via `scale(-1,-1)` sur un clone (opacity .5), `strokeDashoffset` oscillant. Mirror mis à jour 1 frame sur 2 pour la perf.
2. **Curseur** — curseur système natif (le curseur custom a été supprimé à la demande de Yannis)
3. **Scroll reveal** — IntersectionObserver, classes `reveal` + `reveal-d1/d2/d3/d4`
4. **Count-up** — compteur "20+" déclenché au scroll
5. **Nav scroll** — `backdrop-filter: blur(24px)` après 50px
6. **Marquee** — double piste CSS, 22s linear infinite, pausé au hover
7. **Hover cards** — barre top `scaleX 0→1`, glow radial, arrow translate
8. **`prefers-reduced-motion`** — transitions réduites, marquee stoppé, badge dot stoppé

## Navigation & routing

- `showPage(name)` — navigue vers une page (scroll top instant)
- `goToContact()` — navigue vers la page Vision ET scrolle directement au formulaire de contact (#contact-form). Utilisé sur tous les CTAs principaux ("Démarrer", "Décrivez votre process", "Contact" en footer, etc.)
- Le lien nav "Vision" utilise `showPage('vision')` (haut de page, pas le formulaire).

## Pages

| Page | ID | Contenu |
|---|---|---|
| Accueil | `page-home` | Hero, marquee, stats, "Comment ça marche" (4 étapes), citation, services (6 exemples + bannière web), urgency, témoignages, CTA |
| Services | `page-services` | 4 services détaillés (3 automation + 1 web), timeline méthode 4 étapes |
| Projets | `page-projects` | "20+", 3 projets phares (avec avant/après), 8 projets liste |
| Vision | `page-vision` | Manifesto, stats secteur, 3 horizons futur, formulaire contact |

## Structure page Accueil — ordre des sections

1. Hero — "Dites-nous ce qui vous prend le plus de temps. On construit l'app."
2. Marquee
3. Stats bar (4 chiffres : 20+ projets, 100% sur mesure, 48h prototype, J+5 livraison)
4. "Comment ça marche" — 4 étapes : Vous décrivez → On conçoit ensemble → On livre en 5 jours → Ça tourne sans vous
5. Citation — "Il n'y a pas d'app standard pour un problème sur mesure..."
6. "Ce que nos clients nous ont demandé" — 6 cartes en citations client + bannière "Et aussi · Création web"
7. "Ce que ça coûte de ne rien faire" — urgency grid asymétrique (28%, concurrents, J+30)
8. Témoignages — 3 avis (placeholders, à remplacer par les vrais)
9. CTA final — "Quel process vous coûte le plus de temps cette semaine ?"

## Services détaillés (page Services)

1. **Exemple client · Relation client** — "Je passe ma journée à répondre aux mêmes questions"
2. **Exemple client · Documents & facturation** — "Je génère encore mes factures à la main"
3. **Exemple client · Pilotage & reporting** — "Je n'ai jamais la vraie photo de mon business"
4. **Et aussi · Création web** — "Mon site ne reflète plus ce qu'on fait"

## Projets réels

1. Réceptionniste IA — Salon de massage (↓ 70% appels entrants)
2. Assistant Telegram multi-fonctions (factures, mails, calendrier, banque)
3. Assistant vocal météo & style

## Témoignages (placeholders — à remplacer)

- Marie D., Directrice associée · Conseil & stratégie
- Thomas R., Co-fondateur · SaaS B2B
- Julien M., Gérant · PME Île-de-France

## Roadmap

| Phase | Statut | Contenu |
|---|---|---|
| 1 — Structure initiale | ✅ DONE | HTML single file, 4 pages, tous effets visuels, EmailJS, design Obsidian & Or complet |
| 2 — Marketing rewrite | ✅ DONE | Messaging sur-mesure infini, parcours client, exemples en citations, avant/après projets |
| 3 — Polish | ✅ DONE | Audit impeccable, suppression cadratins, scroll direct formulaire, témoignages, service web |

## Prochaines étapes

1. Remplacer les 3 témoignages placeholders par les vrais avis clients
2. Nom de domaine — acheter `ityo.io` sur OVH ou Namecheap
3. Mise en ligne — Netlify drag & drop du HTML (gratuit)
4. Favicon — exporter le logo SVG en .ico / .png
5. EmailJS template — vérifier variables `{{from_name}}` etc. sur dashboard EmailJS
