# ITYO — Site web agence

## Contexte

ITYO est une agence d'automation IA fondée par Yannis, basée à Paris.
Coeur de métier : concevoir et déployer des automatisations sur mesure via N8N pour les PME, TPE et startups françaises.

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

1. **Floating SVG Paths** — 2 couches SVG, 36 courbes de Bézier par couche, `strokeDashoffset` oscillant
2. **Film grain** — canvas overlay, opacity 0.025, rafraîchi toutes les 80ms
3. **Curseur custom** — point doré 10px + ring lag 12%
4. **Scroll reveal** — IntersectionObserver, classes `reveal` + `reveal-d1/d2/d3/d4`
5. **Count-up** — compteur "20+" déclenché au scroll
6. **Nav scroll** — `backdrop-filter: blur(24px)` après 50px
7. **Marquee** — double piste CSS, 22s linear infinite
8. **Hover cards** — barre top scaleX 0→1, glow radial, arrow translate

## Pages

| Page | ID | Contenu |
|---|---|---|
| Accueil | `page-home` | Hero, marquee, stats, citation, 6 services, urgency, CTA |
| Services | `page-services` | 3 services détaillés, timeline méthode 4 étapes |
| Projets | `page-projects` | "20+", 3 projets phares, 8 projets liste |
| Vision | `page-vision` | Manifesto, stats secteur, 3 horizons futur, formulaire contact |

## Projets réels

1. Réceptionniste IA — Salon de massage (↓ 70% appels entrants)
2. Assistant Telegram multi-fonctions (factures, mails, calendrier, banque)
3. Assistant vocal météo & style

## Roadmap

| Phase | Statut | Contenu |
|---|---|---|
| 1 — Structure initiale | ✅ DONE | HTML single file, 4 pages, tous effets visuels, EmailJS, design Obsidian & Or complet |

## Prochaines étapes

1. Nom de domaine — acheter `ityo.io` sur OVH ou Namecheap
2. Mise en ligne — Netlify drag & drop du HTML (gratuit)
3. Favicon — exporter le logo SVG en .ico / .png
4. EmailJS template — vérifier variables `{{from_name}}` etc. sur dashboard EmailJS
