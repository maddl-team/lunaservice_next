import Image from "next/image";

const services = [
  {
    n: "01",
    title: "Pulizie Hotel Roma",
    tag: "Core business",
    body: "Il nostro core business. Squadre dedicate, calendario sincronizzato con i tuoi check-in, supervisore assegnato alla tua struttura. Dalla camera alla lobby, dagli spazi comuni alle aree F&B.",
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1400&q=80",
  },
  {
    n: "02",
    title: "Pulizie B&B e Affittacamere",
    tag: "Flessibilità",
    body: "Flessibilità è la parola chiave. Interveniamo tra un check-out e il successivo, anche con preavviso breve, garantendo standard da struttura professionale anche per le realtà più piccole.",
    img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=900&q=80",
  },
  {
    n: "03",
    title: "Pulizie Case Vacanza e Affitti Brevi",
    tag: "Airbnb / Booking",
    body: "Gestisci un appartamento su Airbnb o Booking? Ci occupiamo del ricambio settimanale o a ogni rotazione ospiti, con report fotografico opzionale per ogni intervento.",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=80",
  },
  {
    n: "04",
    title: "Pulizie Condominiali",
    tag: "Continuativo",
    body: "Contratti continuativi per scale, aree comuni, garage e giardini condominiali. Collaboriamo direttamente con gli amministratori di condominio a Roma.",
    img: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=900&q=80",
  },
  {
    n: "05",
    title: "Pulizie Straordinarie",
    tag: "Interventi estremi",
    body: "Sgrosso post-ristrutturazione, pulizia balconi da escrementi di piccioni, cantine allagate, ambienti molto sporchi o degradati. Interveniamo dove altri non vogliono andare.",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=80",
  },
  {
    n: "06",
    title: "Sanificazione Ambienti",
    tag: "Ozono · Nebulizzazione",
    body: "Sanificazione professionale con ozono e nebulizzazione per hotel, uffici e ambienti privati. Certificata, documentata, efficace.",
    img: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=900&q=80",
  },
];

export function LunaMiddleSections() {
  const whyItems = [
    {
      num: "01",
      title: "Squadre formate per ambienti alberghieri",
      body: "Il nostro personale non è personale generico riqualificato. È formato specificamente sulle procedure di pulizia e igienizzazione di camere, bagni, spazi comuni e aree ristorazione, secondo gli standard richiesti dalle strutture ricettive di categoria.",
    },
    {
      num: "02",
      title: "Nessuna gestione HR da parte tua",
      body: "Assenze, sostituzione, ferie, malattie: li gestiamo noi. Tu ricevi il servizio concordato, ogni volta, senza dover gestire niente. Questo è il vantaggio reale dell'outsourcing professionale.",
    },
    {
      num: "03",
      title: "Intervento programmato o urgente",
      body: "Che tu abbia bisogno di un servizio ricorrente settimanale o di un intervento straordinario entro poche ore, Luna Service è operativa su tutta Roma e provincia.",
    },
    {
      num: "04",
      title: "Preventivo gratuito con sopralluogo",
      body: "Prima di darti un prezzo, veniamo a vedere la struttura. Nessun preventivo alla cieca: ogni offerta è calcolata sulla tua realtà specifica.",
    },
  ];

  const reviews = [
    {
      quote:
        "Da quando abbiamo affidato le pulizie a Luna Service, le nostre recensioni sulla pulizia su Booking sono passate da 7.8 a 9.2 in sei mesi. Il team è puntuale, professionale e non ho mai dovuto rincorrere nessuno.",
      author: "[Nome]",
      role: "Direttore",
      org: "Hotel [Nome]",
      city: "Roma",
    },
    {
      quote:
        "Gestisco tre appartamenti su Airbnb nel centro di Roma. Luna Service fa i cambi tra un ospite e l'altro con una precisione che non avevo trovato da nessun'altra parte. Non potrei farne a meno.",
      author: "[Nome]",
      role: "Host Airbnb",
      org: "Roma",
      city: "Centro Storico",
    },
    {
      quote:
        "Come amministratrice di condominio ho un contratto continuativo con Luna Service per le pulizie delle scale. Nessun problema in due anni: sempre puntuali, sempre al livello concordato.",
      author: "[Nome]",
      role: "Amministratrice di Condominio",
      org: "Roma",
      city: "Roma Nord",
    },
  ];

  return (
    <>
      <section className="px-[56px] pb-[120px] pt-[160px]">
        <div className="grid grid-cols-[1.1fr_1fr] items-start gap-[80px]">
          <div>
            <div className="mb-[32px] inline-flex items-center gap-[8px] rounded-[999px] border border-[rgba(0,0,0,0.08)] bg-white px-[14px] py-[6px] font-mono text-[11px] uppercase tracking-[0.08em] text-[#3a3b36]">
              <span className="h-[6px] w-[6px] rounded-full bg-[#cc3333]" />
              Il problema
            </div>
            <h2 className="m-0 font-serif text-[64px] leading-[1.04] tracking-[-0.025em]">
              Un hotel sporco è un hotel con <em className="not-italic text-[#3a3b36]">recensioni negative.</em> Noi lo
              sappiamo meglio di chiunque.
            </h2>
            <p className="mt-[40px] max-w-[560px] text-[18px] leading-[1.6] text-[#3a3b36]">
              Su Booking, TripAdvisor e Google, la parola <strong className="text-[#161714]">&quot;sporco&quot;</strong>{" "}
              compare nelle recensioni negative più di qualsiasi altra. Un ospite deluso non torna. E lo dice a tutti.
            </p>
            <p className="mt-[20px] max-w-[560px] text-[18px] leading-[1.6] text-[#3a3b36]">
              Gestire internamente le pulizie di un hotel a Roma significa fare i conti ogni giorno con assenze,
              turnover del personale, costi fissi e standard difficili da mantenere costanti. Significa che il tuo
              direttore di piano smette di fare il direttore di piano e diventa un coordinatore di emergenze.
            </p>
            <p className="mt-[20px] max-w-[560px] text-[18px] font-semibold leading-[1.6] text-[#161714]">
              Luna Service risolve esattamente questo problema.
            </p>
          </div>
          <div className="flex flex-col gap-[16px]">
            <div className="rounded-[24px] bg-[#99cc33] px-[36px] py-[40px] text-[#1a1f0d]">
              <div className="font-mono text-[11px] uppercase tracking-[0.08em] opacity-70">Statistica · settore alberghiero</div>
              <div className="mt-[16px] font-serif text-[156px] leading-[0.9] tracking-[-0.04em]">
                1<span className="text-[90px]">/3</span>
              </div>
              <p className="mt-[20px] max-w-[360px] text-[16px] leading-[1.5]">
                degli ospiti che lasciano una recensione negativa cita problemi di pulizia tra le motivazioni
                principali.
              </p>
            </div>
            <div className="rounded-[24px] bg-[#161714] p-[36px] text-[#fbf9f3]">
              <svg width="36" height="28" viewBox="0 0 36 28" fill="none" className="mb-[20px]">
                <path
                  d="M0 28V14C0 6.27 5.6 0 14 0v6c-4.42 0-8 3.13-8 8h8v14H0zm22 0V14c0-7.73 5.6-14 14-14v6c-4.42 0-8 3.13-8 8h8v14H22z"
                  fill="#99cc33"
                />
              </svg>
              <p className="m-0 font-serif text-[26px] leading-[1.3]">
                Luna Service risolve esattamente questo problema. Tu gestisci l&apos;hotel, noi gestiamo la pulizia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 w-screen -translate-x-1/2 text-[#fbf9f3]">
        <div className="mx-auto w-[calc(100vw-48px)] rounded-t-[32px] bg-[#161714]">
          <div className="mx-auto w-[1440px] max-w-[1440px] px-[56px] pb-[120px] pt-[120px]">
          <div className="mb-[64px] grid grid-cols-2 items-end gap-[80px]">
          <div>
            <div className="mb-[28px] inline-flex items-center gap-[8px] rounded-[999px] border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.08)] px-[14px] py-[6px] font-mono text-[11px] uppercase tracking-[0.08em] text-[rgba(255,255,255,0.7)]">
              <span className="h-[6px] w-[6px] rounded-full bg-[#99cc33]" />
              Servizi
            </div>
            <h2 className="m-0 font-serif text-[64px] leading-[1] tracking-[-0.025em]">
              I nostri servizi di <em className="not-italic text-[#99cc33]">pulizia professionale</em> a Roma
            </h2>
          </div>
          <p className="m-0 max-w-[520px] text-[17px] leading-[1.6] text-[rgba(251,249,243,0.7)]">
            Lavoriamo con hotel, B&B, case vacanza, affittacamere, ostelli e condomini. Ogni tipologia di struttura ha
            esigenze diverse: per questo ogni nostro intervento è progettato su misura, non standardizzato.
          </p>
          </div>

            <div className="grid grid-cols-6 gap-[16px]">
            {services.map((service, index) => (
              <article
                key={service.n}
                className={`${index === 0 ? "col-span-6 grid grid-cols-2 bg-[#99cc33] text-[#1a1f0d]" : "col-span-2 border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] text-[#fbf9f3]"} overflow-hidden rounded-[24px]`}
              >
                <div className={`${index === 0 ? "px-[48px] py-[40px]" : "px-[24px] pb-[28px] pt-[24px]"}`}>
                  {index === 0 ? (
                    <div className="mb-[32px] flex justify-between font-mono text-[11px] uppercase tracking-[0.08em] opacity-70">
                      <span>№ {service.n} — In evidenza</span>
                      <span>{service.tag}</span>
                    </div>
                  ) : (
                    <div className="mb-[16px] flex justify-between font-mono text-[10px] uppercase tracking-[0.08em] text-[rgba(255,255,255,0.5)]">
                      <span>№ {service.n}</span>
                      <span>{service.tag}</span>
                    </div>
                  )}
                  <h3 className={`${index === 0 ? "text-[64px] leading-[0.95]" : "text-[28px] leading-[1.05]"} m-0 font-serif tracking-[-0.02em]`}>
                    {service.title}
                  </h3>
                  <p className={`${index === 0 ? "mt-[24px] max-w-[480px] text-[17px]" : "mt-[12px] text-[14px] text-[rgba(251,249,243,0.7)]"} leading-[1.55] opacity-85`}>
                    {service.body}
                  </p>
                  {index === 0 ? (
                    <>
                      <div className="mt-[32px] flex flex-wrap gap-[8px]">
                        {["Camere", "Bagni privati", "Lobby", "Sala colazione", "Spazi comuni", "Aree F&B"].map((tag) => (
                          <span key={tag} className="rounded-[999px] border border-[rgba(0,0,0,0.2)] px-[12px] py-[6px] text-[12px]">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a className="mt-[32px] inline-flex cursor-pointer items-center gap-[10px] text-[14px] font-medium">
                        Scopri il servizio
                        <span className="inline-flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#1a1f0d] text-[#99cc33]">
                          →
                        </span>
                      </a>
                    </>
                  ) : (
                    <a className="mt-[20px] inline-flex cursor-pointer items-center gap-[6px] text-[13px] text-[#99cc33]">
                      Scopri il servizio →
                    </a>
                  )}
                </div>
                <div className={`relative ${index === 0 ? "min-h-[480px]" : "min-h-[200px]"}`}>
                  <Image src={service.img} alt={service.title} fill className="object-cover" sizes="(max-width: 1536px) 33vw, 480px" />
                </div>
              </article>
            ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 w-screen -translate-x-1/2 text-[#fbf9f3]">
        <div className="mx-auto w-[calc(100vw-48px)] rounded-b-[32px] bg-[#161714]">
          <div className="mx-auto w-[1440px] max-w-[1440px] px-[56px] pb-[160px] pt-[80px]">
            <div className="border-t border-t-[rgba(255,255,255,0.12)] pt-[80px]">
            <div className="mb-[64px] grid grid-cols-2 items-end gap-[80px]">
              <div>
                <div className="mb-[28px] inline-flex items-center gap-[8px] rounded-[999px] border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.08)] px-[14px] py-[6px] font-mono text-[11px] uppercase tracking-[0.08em] text-[rgba(255,255,255,0.7)]">
                  <span className="h-[6px] w-[6px] rounded-full bg-[#99cc33]" />
                  Perché Luna
                </div>
                <h2 className="m-0 font-serif text-[56px] leading-[1.04] tracking-[-0.025em]">
                  Perché scegliere Luna Service come <em className="not-italic text-[#99cc33]">impresa di pulizie</em> a
                  Roma
                </h2>
              </div>
              <p className="m-0 max-w-[540px] text-[17px] leading-[1.6] text-[rgba(251,249,243,0.7)]">
                Ci sono decine di imprese di pulizie a Roma. La differenza non sta nel prezzo: sta in quello che succede
                quando qualcosa va storto, quando l&apos;operatore non si presenta, quando l&apos;hotel ha un&apos;ispezione dell&apos;ASL
                domani mattina.
              </p>
            </div>
              <div className="grid grid-cols-2 gap-[16px]">
              {whyItems.map((item, idx) => (
                <div key={item.num} className="flex flex-col gap-[20px] rounded-[24px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] px-[36px] py-[40px]">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[13px] text-[#99cc33]">{item.num}</span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[rgba(255,255,255,0.4)]">
                      0{idx + 1} di 04
                    </span>
                  </div>
                  <h3 className="m-0 font-serif text-[30px] leading-[1.1] tracking-[-0.015em]">{item.title}</h3>
                  <p className="m-0 text-[15.5px] leading-[1.6] text-[rgba(251,249,243,0.7)]">{item.body}</p>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf9f3] px-[56px] pb-[120px] pt-[160px]">
        <div className="mb-[80px] text-center">
          <div className="mb-[28px] inline-flex items-center gap-[8px] rounded-[999px] border border-[rgba(0,0,0,0.08)] bg-white px-[14px] py-[6px] font-mono text-[11px] uppercase tracking-[0.08em] text-[#3a3b36]">
            <span className="inline-flex gap-[1px] text-[10px] text-[#99cc33]">★★★★★</span>
            4.9 / 5 su Google · 87 recensioni
          </div>
          <h2 className="m-0 font-serif text-[72px] leading-[1] tracking-[-0.025em]">Cosa dicono di noi</h2>
          <p className="mx-auto mt-[32px] max-w-[620px] text-[18px] leading-[1.55] text-[#3a3b36]">
            Lavoriamo con hotel, gestori di B&B e amministratori di condominio a Roma da anni. Queste sono alcune delle
            loro esperienze.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-[16px]">
          {reviews.map((review) => (
            <figure key={review.quote.slice(0, 20)} className="m-0 flex min-h-[380px] flex-col rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[36px] py-[40px]">
              <div className="mb-[24px] text-[16px] tracking-[2px] text-[#99cc33]">★★★★★</div>
              <blockquote className="m-0 flex-1 font-serif text-[22px] leading-[1.4] tracking-[-0.005em]">
                &quot;{review.quote}&quot;
              </blockquote>
              <figcaption className="mt-[28px] flex items-center gap-[14px] border-t border-t-[rgba(0,0,0,0.08)] pt-[24px]">
                <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#161714] font-serif text-[16px] text-[#99cc33]">
                  {review.author.charAt(1) || "A"}
                </div>
                <div>
                  <div className="text-[14px] font-medium">{review.author}</div>
                  <div className="text-[12px] text-[#6e6f68]">
                    {review.role} · {review.org}
                  </div>
                  <div className="mt-[2px] font-mono text-[11px] uppercase text-[#99cc33]">{review.city}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-[32px] flex flex-wrap items-center justify-between gap-[24px] rounded-[999px] border border-[rgba(0,0,0,0.06)] bg-white px-[32px] py-[20px]">
          <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#6e6f68]">Garanzie & certificazioni</div>
          <div className="flex items-center gap-[32px] text-[13.5px] text-[#3a3b36]">
            <span>
              Google Reviews <strong>4.9★</strong>
            </span>
            <span>Certificazione ISO 9001</span>
            <span>Assicurazione RC € 2M</span>
            <span>DUVRI a norma</span>
          </div>
        </div>
      </section>
    </>
  );
}
