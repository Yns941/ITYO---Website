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
5. **Nav scroll** — `backdrop-filter: blur(24px)` après 50px (désactivé sur mobile pour éviter bug position:fixed du drawer)
6. **Marquee** — double piste CSS, 22s linear infinite, pausé au hover
7. **Hover cards** — barre top `scaleX 0→1`, glow radial, arrow translate
8. **`prefers-reduced-motion`** — transitions réduites, marquee stoppé, badge dot stoppé
9. **Testimonials carousel** — fan stack vanilla JS : éventail 3 cartes desktop (rotateZ ±19°, scale), swipe 1 carte mobile, drag souris, auto-advance 4.2s, dots or. Cartes fond `#F4F3F1`, bordure or, border-radius 16px.

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

## Typographie — Échelle de tailles (après refonte police)

| Rôle | Taille |
|---|---|
| Labels uppercase / eyebrow (anciens 9px) | 11px |
| Labels uppercase / nav / badges (anciens 10px) | 12px |
| Boutons / footer / étoiles (anciens 11px) | 13px |
| Corps de texte | 16px |
| Titres | clamp() Cormorant Garamond |

## Mobile (≤ 640px) — spécificités

- `.hero-sub` : 16px (réduit depuis 18px)
- `.hero-reassurance` : `text-align: center`
- Inputs formulaire : `font-size: 16px` (évite l'auto-zoom iOS Safari)
- Nav burger : **drawer latéral depuis la droite** (72vw, max 300px), fond `#1B1B26`, bordure dorée, backdrop semi-transparent, ferme au tap extérieur
- Sections : padding 88px (vs 64px avant)
- Cards (svc, testi, proj, urgency, future) : padding 40px 28px
- Background SVG : 8 chemins au lieu de 18, mise à jour toutes les 4 frames (évite le freeze)
- `backdrop-filter` supprimé du menu (performance)
- Marquee hover-pause désactivé (inutile sur touch)

## Desktop — spécificités

- Nav : un seul CTA "Démarrer →" (bouton doré `nav-cta`), le doublon `nav-cta-mobile` masqué via `:has()`
- Background SVG : 18 chemins, mise à jour toutes les 2 frames

## Logo — exports disponibles

Dossier `logo-exports/` :
- `logo-icon.svg` / `logo-full.svg` / `logo-dark-bg.svg` — sources vectorielles
- `logo-icon-512/256/192/64.png` — icône seule (fond transparent)
- `logo-full-800/400.png` — icône + wordmark (fond transparent)
- `logo-dark-800.png` — icône + wordmark (fond #1B1B26)
- `favicon-32.png` / `favicon-16.png` — à renommer en `.ico` pour Netlify

## Marketing psychology — éléments clés en place

- **Loss aversion** : section "Ce que ça coûte de ne rien faire"
- **Zero-price effect + regret aversion** : ligne `Analyse offerte · Réponse sous 24h · Sans engagement` dans le hero (classe `.hero-reassurance`)
- **Jobs to Be Done** : tous les h3 services en voix client ("On perd 2h/jour...")
- **Urgency** : "Vos concurrents s'équipent maintenant" + stats 73% PME
- **Social proof** : stats McKinsey, 3 témoignages, résultats chiffrés (70%, 28%)

## Roadmap

| Phase | Statut | Contenu |
|---|---|---|
| 1 — Structure initiale | ✅ DONE | HTML single file, 4 pages, tous effets visuels, EmailJS, design Obsidian & Or complet |
| 2 — Marketing rewrite | ✅ DONE | Messaging sur-mesure infini, parcours client, exemples en citations, avant/après projets |
| 3 — Polish | ✅ DONE | Audit impeccable, suppression cadratins, scroll direct formulaire, témoignages, service web |
| 4 — Responsive | ✅ DONE | Mobile-first, burger nav, tous les breakpoints, fix iOS auto-zoom |
| 5 — Typographie & Marketing | ✅ DONE | Refonte complète des tailles de police, ligne réassurance hero, exports logo |
| 6 — Mise en ligne | ✅ DONE | Netlify (GitHub auto-deploy), domaine ityo.fr (DNS Hostinger), SSL auto |
| 7 — Formulaire contact | ✅ DONE | Web3Forms (remplace EmailJS), clé `35b35ab9-cf1f-4ccd-8893-f7f19b39062a` |
| 8 — Polish mobile | ✅ DONE | Drawer nav latéral, aération sections, optimisation animation, nav desktop nettoyée |
| 9 — Email & fix mobile | ✅ DONE | ImprovMX forwarding contact@ityo.fr, fix drawer menu scrollé (backdrop-filter désactivé mobile) |
| 10 — Carousel témoignages | ✅ DONE | Fan stack vanilla JS : éventail desktop, swipe 1 carte mobile, fond crème #F4F3F1, bordure or, hauteur dynamique |

## Déploiement

- **Hébergement** : Netlify (auto-deploy depuis GitHub, branche `main`)
- **Domaine** : `ityo.fr` — DNS Hostinger : A `@ → 75.2.60.5`, CNAME `www → mellow-arithmetic-1d2e5b.netlify.app`
- **Formulaire** : Web3Forms, emails reçus sur `ityo94190@gmail.com`
- **Fichier principal** : `index.html` (renommé depuis `ityo-site-final.html`)

## Email professionnel

- **Adresse** : `contact@ityo.fr` → redirige vers `ityo94190@gmail.com`
- **Service** : ImprovMX (plan gratuit, forwarding uniquement)
- **DNS Hostinger** : MX 10 `mx1.improvmx.com`, MX 20 `mx2.improvmx.com`, TXT SPF `v=spf1 include:spf.improvmx.com ~all`
- **Statut** : Forwarding opérationnel et testé ✅
- **Gmail Send As** : non configuré (2FA non souhaité, ImprovMX SMTP = payant) — les réponses partent depuis ityo94190@gmail.com
- **Adresse affichée sur le site** : contact@ityo.fr (mis à jour dans index.html)

## Prochaines étapes

1. Remplacer les 3 témoignages placeholders par les vrais avis clients
2. Favicon — utiliser `favicon-32.png` depuis `logo-exports/` (ajouter dans Netlify)
