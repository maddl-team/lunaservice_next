# Luna Service Design Guidelines

Questo documento definisce le linee guida operative per costruire nuove pagine interne mantenendo coerenza con la landing.

## 1) Principi base

- Layout editoriale premium, con ritmo verticale ampio.
- Contrasto tra superfici `paper` e blocchi scuri/colorati.
- Componenti modulari e ripetibili (badge, card, CTA, shell).
- Nessun valore "random": usare token e scale condivise.

## 2) Token ufficiali

Usare i token da `src/components/luna/design-tokens.ts`.

- **Colori**: `lunaColors`
- **Radii**: `lunaRadii`
- **Layout**: `lunaLayout`
- **Typography**: `lunaTypography`
- **Spacing**: `lunaSpacing`
- **Effects**: `lunaEffects`

## 3) Layout e contenitori

- Contenuto principale: `1440px`.
- Padding orizzontale standard interno: `56px`.
- Sezioni speciali full-bleed:
  - wrapper viewport-centered
  - larghezza sezione: `calc(100vw - 48px)`
  - effetto panna laterale: 24px per lato
  - contenuto interno sempre boxato a `1440px`

## 4) Angoli arrotondati

- `999px`: pill/bottoni capsule
- `32px`: shell principali (hero, dark sections, lime section, footer)
- `28px`: blocchi grandi secondari
- `24px`: card principali
- `20px`: FAQ item / card medie
- `14px`: input/chip/card compatte

## 5) Tipografia

- Serif per titoli display.
- Sans per body e UI.
- Mono per badge, meta e label uppercase.
- Tracking:
  - display: negativo
  - mono: positivo e uppercase

Scala consigliata:

- Hero: `84px`
- H2 sezioni: `72/68/64/60/56px`
- H3 card: `30/28/24/22px`
- Body: `18/17/16/15px`
- UI/meta: `14/13/12/11/10px`

## 6) Bottoni

- **Primary**: filled, pill, testo ad alto contrasto, con eventuale badge freccia.
- **Secondary**: outline/ghost, pill, bordo sottile.
- Coppia CTA standard: `Primary + Secondary`, gap 10-12px.

## 7) Card system

Pattern ufficiali:

- Stat card
- Service card (featured + standard)
- Feature card
- Review card
- FAQ item
- Area mini-card

Regole:

- Padding generoso.
- Bordi sottili con alpha.
- Gerarchia tipografica netta.
- Superfici alternate (white, dark translucent, accent).

## 8) Form system

- Input/select/textarea con raggio `14px`.
- Label `13px` semibold.
- Chip opzioni come radio visuale.
- CTA finale forte.
- Privacy microcopy in neutral soft.

## 9) Componenti riusabili disponibili

Da `src/components/luna/ui.tsx`:

- `SectionShell`
- `SectionBadge`
- `PrimaryCtaButton`
- `SecondaryCtaButton`
- `StatCard`
- `ServiceCard`
- `FeatureCard`
- `ReviewCard`
- `FaqItem`
- `InputField`
- `SelectField`
- `TextareaField`
- `ChoiceRadio` / `ChoiceCheckbox` (input reali nei form; non usare chip puramente decorativi al posto di campi inviabili)
- `FooterLinkColumn`

## 10) Regole operative per nuove pagine

- Aprire la sezione con badge + heading serif + intro body.
- Usare griglie 2/3 colonne con gap già adottati.
- Sezione dark/lime/footer: sempre `SectionShell` full-bleed.
- Evitare nuovi colori/radii/font-size fuori scala.
- Riutilizzare componenti esistenti prima di crearne di nuovi.

## 11) Do / Don't

### Do

- Usa token e componenti UI condivisi.
- Mantieni il pattern "panna laterale + box interno".
- Mantieni coerenza su spacing e border alpha.

### Don't

- Non introdurre nuovi valori arbitrari senza motivo.
- Non mischiare stili con raggi/scale fuori standard.
- Non creare varianti duplicate di componenti già presenti.
