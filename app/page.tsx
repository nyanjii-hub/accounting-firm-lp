import Image from "next/image";

const navItems = [
  { label: "悩み", href: "#problems" },
  { label: "理由", href: "#reasons" },
  { label: "サービス", href: "#services" },
  { label: "料金", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const problems = [
  "毎月の数字を見ても、経営判断にどう活かせばよいか分からない",
  "税務申告や決算の期限が近づくたびに不安になる",
  "資金繰りの見通しを立てたいが、相談できる相手がいない",
  "創業期から経理の仕組みを整え、無理なく成長したい",
];

const reasons = [
  {
    title: "経営数字を分かりやすく整理",
    body: "月次の試算表や資金繰り表を、経営者が判断に使いやすい形で確認します。",
  },
  {
    title: "税務と会計を一体で支援",
    body: "申告業務だけにとどまらず、日々の経理体制や決算前の見通し作りも支えます。",
  },
  {
    title: "中小企業・創業期に寄り添う体制",
    body: "事業規模や成長段階に合わせ、必要な支援を過不足なく提案します。",
  },
];

const services = [
  "税務顧問",
  "決算申告",
  "経理改善",
  "資金繰り相談",
  "創業支援",
  "事業計画作成サポート",
];

const prices = [
  { name: "個人事業主", monthly: "月額 22,000円から", note: "記帳状況・面談頻度により調整" },
  { name: "法人顧問", monthly: "月額 33,000円から", note: "決算申告料は別途お見積り" },
  { name: "創業相談", monthly: "初回 60分 5,500円", note: "顧問契約時は相談料を充当可能" },
];

const flow = [
  "お問い合わせ",
  "初回相談",
  "課題整理とご提案",
  "ご契約",
  "月次支援開始",
];

const voices = [
  {
    role: "製造業 経営者",
    text: "数字の見方を毎月確認できるようになり、設備投資の判断を落ち着いて進められました。",
  },
  {
    role: "個人事業主",
    text: "申告前だけでなく、日々の経理の進め方まで相談できるので安心感があります。",
  },
  {
    role: "スタートアップ代表",
    text: "資金繰り表と事業計画の作成を支援してもらい、社内で共有しやすくなりました。",
  },
];

const faqs = [
  {
    q: "初回相談では何を相談できますか？",
    a: "税務申告、経理体制、資金繰り、創業時の手続きなど、現在の不安を整理するところからご相談いただけます。",
  },
  {
    q: "オンライン相談は可能ですか？",
    a: "可能です。対面・オンラインのどちらにも対応し、継続支援ではチャットやメールでの連絡も想定しています。",
  },
  {
    q: "顧問契約を前提にしない相談もできますか？",
    a: "はい。まずは単発相談として状況を確認し、必要に応じて顧問契約やスポット支援をご提案します。",
  },
];

const stats = [
  { value: "42社", label: "顧問先実績" },
  { value: "18業種", label: "対応業種" },
  { value: "15年", label: "公認会計士歴" },
  { value: "98%", label: "顧客継続率" },
];

const steps = [
  {
    step: "01",
    title: "初回相談（60分）",
    body: "現在の税務・経理・資金繰りの不安をヒアリング。相談料5,500円（顧問契約時は充当）。",
  },
  {
    step: "02",
    title: "課題整理とご提案",
    body: "ヒアリング内容をもとに、最適な支援内容と費用感を分かりやすくご提案します。",
  },
  {
    step: "03",
    title: "顧問開始",
    body: "ご契約後すぐに月次支援をスタート。チャット・メール・電話で随時ご相談いただけます。",
  },
];

const founder = {
  name: "青葉 一郎",
  title: "公認会計士",
  license: "公認会計士 第XXXXX号",
  career:
    "大手監査法人に12年勤務後、独立開業。製造業・IT・小売など多業種の中小企業・スタートアップの経営支援を専門とする。「数字を経営の武器にする」をモットーに、申告業務にとどまらない伴走型支援を提供。",
  specialties: ["税務顧問", "資金繰り改善", "創業支援", "経営数字の見える化"],
};

export default function Home() {
  return (
    <main className="bg-white text-aoba-ink">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#" className="leading-tight" aria-label="青葉公認会計士事務所 トップへ">
            <span className="block text-lg font-bold text-aoba-navy sm:text-xl">青葉公認会計士事務所</span>
            <span className="block text-xs text-slate-500">Aoba CPA Office</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-aoba-blue">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-md bg-aoba-navy px-4 py-2 text-sm font-bold text-white shadow-calm transition hover:bg-aoba-blue"
          >
            初回相談
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-aoba-mist">
        <div className="absolute inset-0">
          <Image
            src="/images/aoba-office-hero.png"
            alt="会計相談を想起させる清潔なオフィスデスク"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/82 md:bg-gradient-to-r md:from-white md:via-white/88 md:to-white/28" />
        </div>
        <div className="relative mx-auto grid min-h-[calc(100svh-65px)] max-w-6xl content-center gap-8 px-4 py-14 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:py-20">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex rounded-md border border-aoba-blue/20 bg-white/80 px-3 py-1 text-sm font-bold text-aoba-blue">
              中小企業・個人事業主・創業期の会計支援
            </p>
            <h1 className="text-[2.35rem] font-bold leading-tight text-aoba-navy sm:text-5xl md:text-6xl">
              中小企業の経営を、会計と税務の面から支える。
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-700 sm:text-xl">
              税務申告だけでなく、資金繰り・経営数字の見える化・事業成長まで伴走する公認会計士事務所です。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="rounded-md bg-aoba-navy px-6 py-3 text-center text-base font-bold text-white shadow-calm hover:bg-aoba-blue">
                初回相談を申し込む
              </a>
              <a href="#services" className="rounded-md border border-aoba-navy bg-white px-6 py-3 text-center text-base font-bold text-aoba-navy hover:bg-aoba-sky">
                サービス内容を見る
              </a>
              <a href="tel:0312345678" className="rounded-md border border-slate-300 bg-white px-6 py-3 text-center text-base font-bold text-slate-800 hover:bg-slate-50">
                電話で相談する
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <dl className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-4xl font-bold text-aoba-navy sm:text-5xl">{stat.value}</dt>
                <dd className="mt-2 text-sm font-semibold text-slate-500">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="problems" className="bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Problem" title="このようなお悩みはありませんか" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {problems.map((problem) => (
              <div key={problem} className="rounded-md border border-slate-200 bg-white p-5 text-lg shadow-sm">
                <span className="mr-3 font-bold text-aoba-green">✓</span>
                {problem}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-aoba-navy px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-aoba-sky">How to Start</p>
          <h2 className="mt-2 text-3xl font-bold leading-tight text-white sm:text-4xl">
            3ステップで相談できます
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.step} className="rounded-md border border-white/20 bg-white/10 p-6">
                <span className="text-5xl font-bold text-white/25">{step.step}</span>
                <h3 className="mt-2 text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-base text-blue-100">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="#contact"
              className="inline-block rounded-md bg-white px-8 py-3 text-base font-bold text-aoba-navy hover:bg-aoba-sky"
            >
              初回相談を申し込む →
            </a>
          </div>
        </div>
      </section>

      <section id="reasons" className="bg-aoba-mist px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Strength" title="青葉公認会計士事務所が選ばれる理由" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {reasons.map((reason, index) => (
              <article key={reason.title} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-aoba-sky text-lg font-bold text-aoba-navy">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-aoba-navy">{reason.title}</h3>
                <p className="mt-3 text-base text-slate-700">{reason.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Representative" title="担当者のご紹介" />
          <div className="mt-10 flex flex-col items-center gap-8 rounded-md border border-slate-200 bg-aoba-mist p-8 shadow-sm md:flex-row">
            <div className="flex-shrink-0">
              <div className="flex h-36 w-36 items-center justify-center rounded-full bg-aoba-sky">
                <svg className="h-20 w-20 text-aoba-blue/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.337 0-10 1.676-10 5v2h20v-2c0-3.324-6.663-5-10-5z" />
                </svg>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap items-baseline gap-3">
                <p className="text-2xl font-bold text-aoba-navy">{founder.name}</p>
                <span className="rounded-md bg-aoba-sky px-3 py-1 text-sm font-bold text-aoba-blue">
                  {founder.title}
                </span>
              </div>
              <p className="mt-1 text-sm text-slate-500">{founder.license}</p>
              <p className="mt-4 text-slate-700">{founder.career}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {founder.specialties.map((s) => (
                  <li key={s} className="rounded-md border border-aoba-blue/30 bg-white px-3 py-1 text-sm font-semibold text-aoba-blue">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Service" title="サービス内容" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-aoba-navy">{service}</h3>
                <p className="mt-3 text-slate-700">
                  現状とご希望を伺い、必要な範囲を整理したうえで支援内容をご提案します。
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-aoba-sky px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Price" title="料金目安" />
          <p className="mt-4 max-w-3xl text-slate-700">
            下記は架空のポートフォリオ用料金例です。実際の業務量、面談頻度、記帳状況により個別にお見積りします。
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {prices.map((price) => (
              <article key={price.name} className="rounded-md border border-white bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-aoba-navy">{price.name}</h3>
                <p className="mt-4 text-2xl font-bold text-aoba-blue">{price.monthly}</p>
                <p className="mt-3 text-sm text-slate-600">{price.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Flow" title="相談の流れ" />
          <ol className="mt-8 grid gap-4 md:grid-cols-5">
            {flow.map((item, index) => (
              <li key={item} className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
                <span className="text-sm font-bold text-aoba-green">STEP {index + 1}</span>
                <p className="mt-2 text-lg font-bold text-aoba-navy">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-aoba-mist px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Voice" title="お客様の声" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {voices.map((voice) => (
              <article key={voice.role} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-slate-700">「{voice.text}」</p>
                <p className="mt-5 font-bold text-aoba-navy">{voice.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <SectionTitle eyebrow="FAQ" title="よくある質問" />
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-aoba-navy">{faq.q}</summary>
                <p className="mt-3 text-slate-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-aoba-mist px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle eyebrow="Office" title="事務所情報" />
            <p className="mt-4 text-slate-700">
              架空のポートフォリオ作品として制作した公認会計士事務所LPです。
            </p>
          </div>
          <dl className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
            {[
              ["事務所名", "青葉公認会計士事務所"],
              ["所在地", "東京都千代田区青葉町1-2-3"],
              ["受付時間", "平日 9:00〜18:00"],
              ["対応方法", "対面・オンライン"],
              ["主な対象", "中小企業、個人事業主、スタートアップ"],
            ].map(([term, desc]) => (
              <div key={term} className="grid gap-1 border-b border-slate-100 py-4 last:border-b-0 sm:grid-cols-[120px_1fr]">
                <dt className="font-bold text-aoba-navy">{term}</dt>
                <dd className="text-slate-700">{desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="contact" className="bg-aoba-navy px-4 py-16 text-white sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-aoba-sky">Contact</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">まずは初回相談で、現在の不安を整理しませんか。</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-50">
            税務・会計・資金繰りの状況を伺い、必要な支援範囲を分かりやすくご案内します。
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="mailto:info@example.com" className="rounded-md bg-white px-6 py-3 text-center text-base font-bold text-aoba-navy hover:bg-aoba-sky">
              初回相談を申し込む
            </a>
            <a href="tel:0312345678" className="rounded-md border border-white/60 px-6 py-3 text-center text-base font-bold text-white hover:bg-white/10">
              電話で相談する
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-4 py-8 text-white sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="font-bold">青葉公認会計士事務所</p>
          <p className="text-slate-300">© 2026 Aoba CPA Office. Portfolio sample.</p>
        </div>
      </footer>
    </main>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-aoba-green">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold leading-tight text-aoba-navy sm:text-4xl">{title}</h2>
    </div>
  );
}
