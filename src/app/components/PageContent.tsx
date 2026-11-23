"use client";

import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/dictionaries';
import {
  Send,
  Radio,
  Globe,
  Server,
  Network,
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  BadgeCheck,
  AlertTriangle,
  Shield,
  Lock,
  Award,
  CheckCircle,
  Eye,
  Info,
  MapPin,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion, MotionConfig } from 'framer-motion';
import GridBackground from './GridBackground';
import LanguageSwitcher from './LanguageSwitcher';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Entrance for first-screen blocks. */
const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease },
});

/** Entrance for blocks below the fold. */
const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease },
};

const panel = 'relative border border-white/10 bg-ink-900/90';

/** Blue registration marks on the four corners of a panel. */
function Corners() {
  const base = 'pointer-events-none absolute h-2.5 w-2.5 border-brand-400';
  return (
    <>
      <span className={`${base} -left-px -top-px border-l border-t`} />
      <span className={`${base} -right-px -top-px border-r border-t`} />
      <span className={`${base} -bottom-px -left-px border-b border-l`} />
      <span className={`${base} -bottom-px -right-px border-b border-r`} />
    </>
  );
}

function StatusDot() {
  return (
    <span className="relative flex h-1.5 w-1.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-400" />
    </span>
  );
}

/** Live UTC time. Empty until mounted so server and client markup match. */
function UtcClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => setTime(new Date().toISOString().slice(11, 19));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="flex items-center gap-2 font-mono text-[11px] text-slate-400 tabular-nums md:text-xs">
      <StatusDot />
      <span className="text-slate-500">UTC</span>
      <span className="min-w-[8ch] text-slate-200">{time || '--:--:--'}</span>
    </span>
  );
}

function IconBox({ Icon, className = '' }: { Icon: LucideIcon; className?: string }) {
  return (
    <span
      className={`grid h-8 w-8 shrink-0 place-items-center rounded-sm border border-brand-400/35 bg-brand-500/10 text-brand-300 md:h-11 md:w-11 ${className}`}
    >
      <Icon className="h-4 w-4 md:h-5 md:w-5" strokeWidth={1.75} />
    </span>
  );
}

function SectionHeader({
  index,
  Icon,
  badge,
  title,
  subtitle,
}: {
  index: string;
  Icon: LucideIcon;
  badge: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6 text-center md:mb-10">
      <div className="mb-4 inline-flex items-center gap-2.5 rounded-sm border border-brand-400/30 bg-brand-500/10 px-3 py-1.5 font-mono text-[11px] tracking-[0.12em] text-brand-200 uppercase md:text-xs">
        <span className="text-brand-400">{index}</span>
        <span className="h-3 w-px bg-brand-400/40" />
        <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
        <span>{badge}</span>
      </div>
      <h2 className="text-2xl font-bold text-white md:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400 md:text-base">{subtitle}</p>
      )}
    </div>
  );
}

/** 1px-divided grid, the way a rate table is ruled. */
function RuledGrid({ className, children }: { className: string; children: ReactNode }) {
  return (
    <div className="relative border border-white/10 bg-white/10">
      <Corners />
      <div className={`grid gap-px ${className}`}>{children}</div>
    </div>
  );
}

export default function PageContent({ locale }: { locale: string }) {
  const d = getDictionary(locale);
  const isWarning = d.noticeStyle === 'warning';
  const isZh = locale !== 'en';
  // Latin caption under the Chinese wordmark; the English page already leads with it.
  const heroCaption = isZh ? getDictionary('en').heroTitle : '';
  const home = locale === 'en' ? '/en/' : '/';

  const products = [
    { Icon: Server, title: d.product1Title, desc: d.product1Desc },
    { Icon: Network, title: d.product2Title, desc: d.product2Desc },
  ];

  const markets = [
    { country: d.market1Country, flag: d.market1Flag, methods: d.market1Methods },
    { country: d.market2Country, flag: d.market2Flag, methods: d.market2Methods },
    { country: d.market3Country, flag: d.market3Flag, methods: d.market3Methods },
    { country: d.market4Country, flag: d.market4Flag, methods: d.market4Methods },
    { country: d.market5Country, flag: d.market5Flag, methods: d.market5Methods },
    { country: d.market6Country, flag: d.market6Flag, methods: d.market6Methods },
  ].filter((m) => m.country);

  const certs = [
    { Icon: Shield, title: d.cert1Title, desc: d.cert1Desc },
    { Icon: Award, title: d.cert2Title, desc: d.cert2Desc },
    { Icon: Lock, title: d.cert3Title, desc: d.cert3Desc },
    { Icon: CheckCircle, title: d.cert4Title, desc: d.cert4Desc },
    { Icon: Globe, title: d.cert5Title, desc: d.cert5Desc },
    { Icon: Eye, title: d.cert6Title, desc: d.cert6Desc },
  ];

  // Section numbering stays continuous when the markets block is hidden.
  const sectionIndex = (n: number) => String(n).padStart(2, '0');
  const certIndex = d.showMarkets ? 3 : 2;

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen overflow-hidden bg-ink-950 text-slate-300">
        <GridBackground />

        <div className="relative z-10">
          {/* Top bar */}
          <header className="border-b border-white/[0.07] bg-ink-950/60">
            <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-3 md:h-14 md:px-4">
              <Link href={home} className="flex items-center gap-2.5">
                <span className="grid h-6 w-6 grid-cols-2 gap-0.5 border border-white/15 bg-white/[0.04] p-1">
                  <span className="bg-brand-500" />
                  <span className="bg-white" />
                  <span className="bg-white/25" />
                  <span className="bg-brand-400/70" />
                </span>
                <span className="font-mono text-sm font-medium tracking-tight text-white md:text-base">
                  {d.bookmarkDomain}
                </span>
              </Link>
              <div className="flex items-center gap-3 md:gap-5">
                <UtcClock />
                <LanguageSwitcher locale={locale} />
              </div>
            </div>
          </header>

          <main className="mx-auto max-w-6xl px-3 md:px-4">
            {/* Hero */}
            <motion.section className="pt-4 pb-4 text-center md:pt-7 md:pb-6" {...rise(0)}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1 pr-3 pl-1 md:gap-3 md:pr-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-500 px-2.5 py-1 font-mono text-xs font-semibold text-white md:px-3 md:text-sm">
                  <Bookmark className="h-3 w-3 md:h-3.5 md:w-3.5" />
                  {d.bookmarkDomain}
                </span>
                <span className="text-xs text-slate-200 md:text-sm">{d.bookmarkText}</span>
              </div>

              <h1
                className={`mt-3 bg-gradient-to-b from-white from-40% to-brand-300 bg-clip-text pb-1 text-[2.5rem] leading-[1.1] text-transparent md:mt-5 md:text-6xl lg:text-7xl ${
                  isZh ? 'font-black tracking-[0.04em]' : 'font-bold tracking-tight'
                }`}
              >
                {d.heroTitle}
              </h1>
              <div className="mt-3 flex items-center justify-center gap-3 md:mt-4 md:gap-4">
                <span className="h-px w-10 bg-gradient-to-r from-transparent to-brand-400 md:w-24" />
                {heroCaption ? (
                  <span className="font-mono text-[10px] tracking-[0.32em] text-brand-200 uppercase md:text-xs">
                    {heroCaption}
                  </span>
                ) : (
                  <span className="h-1 w-1 rotate-45 bg-brand-300" />
                )}
                <span className="h-px w-10 bg-gradient-to-l from-transparent to-brand-400 md:w-24" />
              </div>
            </motion.section>

            {/* Contact */}
            <div className="relative">
              <div
                aria-hidden
                className="horizon pointer-events-none absolute -top-32 left-1/2 h-[560px] w-screen -translate-x-1/2 overflow-hidden"
              >
                <div className="horizon-rim absolute top-28 left-1/2 h-[1100px] w-[1100px] -translate-x-1/2 rounded-full md:h-[3600px] md:w-[3600px]" />
              </div>
              <motion.section
                className={`${panel} shadow-[0_40px_120px_-40px_rgba(43,111,255,0.55)]`}
                {...rise(0.12)}
              >
                <Corners />
                <span className="pointer-events-none absolute inset-x-6 -top-px h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
                <div className="flex items-center justify-between border-b border-white/[0.07] px-3 py-2 md:px-6 md:py-3">
                  <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] text-brand-200 uppercase md:text-xs">
                    <BadgeCheck className="h-3.5 w-3.5 text-brand-400 md:h-4 md:w-4" />
                    <span>{d.contactBadge}</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500 md:text-xs">
                    <StatusDot />
                    <span>t.me</span>
                  </div>
                </div>

                <div className="p-3 md:px-7 md:pt-5 md:pb-6">
                  <h2 className="mb-2.5 text-center text-lg font-bold text-white md:mb-4 md:text-3xl">
                    {d.contactTitle}
                  </h2>

                  <div className="grid grid-cols-2 gap-2.5 md:gap-5">
                    {/* Primary: support */}
                    <motion.a
                      href="https://t.me/zfxt5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden border border-brand-400/80 bg-gradient-to-br from-brand-600 to-brand-700 p-3 text-white shadow-[0_16px_48px_-16px_rgba(43,111,255,0.9)] md:p-6"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_0%_0%,rgba(255,255,255,0.28),transparent_60%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="relative">
                        <div className="mb-2 flex items-center justify-between md:mb-5">
                          <span className="grid h-8 w-8 place-items-center rounded-sm bg-white text-brand-600 md:h-11 md:w-11">
                            <Send className="h-4 w-4 md:h-5 md:w-5" strokeWidth={1.75} />
                          </span>
                          <ArrowUpRight className="h-4 w-4 text-white/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white md:h-6 md:w-6" />
                        </div>
                        <h3 className="text-xs font-medium text-white/85 md:text-base">{d.tgSupportTitle}</h3>
                        <p className="mt-0.5 font-mono text-sm font-semibold break-all text-white md:mt-1 md:text-2xl">
                          {d.tgSupportHandle}
                        </p>
                        <p className="mt-2 hidden text-sm text-white/80 md:block">{d.tgSupportDesc}</p>
                      </div>
                    </motion.a>

                    {/* Secondary: channel */}
                    <motion.a
                      href="https://t.me/thirdpartypaybuild"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden border border-white/15 bg-white/[0.03] p-3 transition-colors duration-300 hover:border-brand-400/70 hover:bg-brand-500/10 md:p-6"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="mb-2 flex items-center justify-between md:mb-5">
                        <IconBox Icon={Radio} />
                        <ArrowUpRight className="h-4 w-4 text-slate-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white md:h-6 md:w-6" />
                      </div>
                      <h3 className="text-xs font-medium text-slate-400 md:text-base">{d.tgChannelTitle}</h3>
                      <p className="mt-0.5 font-mono text-[11px] leading-5 font-semibold tracking-tight break-all text-white sm:text-sm sm:tracking-normal md:mt-1 md:text-2xl md:leading-8">
                        {d.tgChannelHandle}
                      </p>
                      <p className="mt-2 hidden text-sm text-slate-400 md:block">{d.tgChannelDesc}</p>
                    </motion.a>
                  </div>

                  <div className="mt-2.5 flex justify-center md:mt-5">
                    <a
                      href="https://tatapaytech.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-sm bg-white px-5 py-2.5 text-sm font-semibold text-ink-950 shadow-[0_0_40px_-8px_rgba(183,208,255,0.55)] transition-colors duration-200 hover:bg-brand-100 sm:w-auto md:gap-3 md:px-9 md:py-3.5 md:text-base"
                    >
                      <Globe className="h-4 w-4 text-brand-600 md:h-5 md:w-5" />
                      {d.websiteBtnText}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 md:h-5 md:w-5" />
                    </a>
                  </div>
                </div>
              </motion.section>
            </div>

            {/* Products — first screen */}
            <motion.section className="mt-2.5 grid gap-2.5 md:grid-cols-2 md:mt-5 md:gap-5" {...rise(0.24)}>
              {products.map((p, i) => (
                <article
                  key={p.title}
                  className="group relative overflow-hidden border border-white/10 bg-ink-900/90 p-3 transition-colors duration-300 hover:border-brand-400/50 md:p-6"
                >
                  <span className="absolute top-0 left-0 h-px w-10 bg-brand-400 transition-all duration-500 group-hover:w-full" />
                  <div className="mb-2 flex items-center gap-3 md:mb-3">
                    <IconBox Icon={p.Icon} />
                    <h3 className="flex-1 text-[15px] leading-snug font-semibold text-white md:text-xl">
                      {p.title}
                    </h3>
                    <span className="self-start font-mono text-[11px] text-slate-600 md:text-xs">
                      {sectionIndex(i + 1)}
                    </span>
                  </div>
                  <p className="text-[13px] leading-relaxed text-slate-400 md:text-base">{p.desc}</p>
                </article>
              ))}
            </motion.section>

            <div className="mt-14 space-y-14 md:mt-28 md:space-y-28">
              {/* Notice / service overview */}
              <motion.section {...reveal}>
                <SectionHeader
                  index={sectionIndex(1)}
                  Icon={isWarning ? AlertTriangle : Info}
                  badge={d.noticeBadge}
                  title={d.noticeSectionTitle}
                />
                <div className={`${panel} mx-auto max-w-4xl p-5 md:p-10`}>
                  <Corners />
                  <span className="absolute top-5 bottom-5 left-0 w-0.5 bg-brand-500 md:top-10 md:bottom-10" />
                  <div className="mb-4 flex items-center gap-3 md:mb-6 md:gap-4">
                    <IconBox Icon={isWarning ? AlertTriangle : Info} />
                    <h3 className="text-lg font-semibold text-white md:text-2xl">{d.noticeHeading}</h3>
                  </div>
                  <p className="mb-3 text-[15px] leading-relaxed text-slate-300 md:text-lg">
                    {d.noticeP1}
                    <mark
                      className={`mx-0.5 box-decoration-clone px-1.5 py-0.5 font-semibold ${
                        isWarning ? 'bg-white text-ink-950' : 'bg-brand-500/25 text-white'
                      }`}
                    >
                      {d.noticeHighlight}
                    </mark>
                    {d.noticeP1End}
                  </p>
                  <p className="text-[15px] leading-relaxed text-slate-400 md:text-lg">{d.noticeP2}</p>
                </div>
              </motion.section>

              {/* Markets (English only) */}
              {d.showMarkets && (
                <motion.section {...reveal}>
                  <SectionHeader
                    index={sectionIndex(2)}
                    Icon={MapPin}
                    badge={d.marketsBadge}
                    title={d.marketsTitle}
                    subtitle={d.marketsSubtitle}
                  />
                  <RuledGrid className="grid-cols-2 md:grid-cols-4">
                    {markets.map((m) => (
                      <div
                        key={m.country}
                        className="bg-ink-900 p-4 transition-colors duration-300 hover:bg-ink-800 md:p-6"
                      >
                        <div className="mb-3 text-3xl leading-none md:text-4xl">{m.flag}</div>
                        <h4 className="mb-3 text-base font-semibold text-white md:text-lg">{m.country}</h4>
                        <ul className="flex flex-wrap gap-1.5">
                          {m.methods.split(' · ').map((method) => (
                            <li
                              key={method}
                              className="rounded-sm border border-brand-400/25 bg-brand-500/10 px-1.5 py-0.5 font-mono text-[11px] text-brand-200 md:text-xs"
                            >
                              {method}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </RuledGrid>
                </motion.section>
              )}

              {/* Certifications */}
              <motion.section {...reveal}>
                <SectionHeader
                  index={sectionIndex(certIndex)}
                  Icon={Award}
                  badge={d.certBadge}
                  title={d.certTitle}
                  subtitle={d.certSubtitle}
                />
                <RuledGrid className="sm:grid-cols-2 md:grid-cols-3">
                  {certs.map((cert, i) => (
                    <div
                      key={cert.title}
                      className="group bg-ink-900 p-5 transition-colors duration-300 hover:bg-ink-800 md:p-7"
                    >
                      <div className="mb-4 flex items-start justify-between">
                        <IconBox Icon={cert.Icon} />
                        <span className="font-mono text-[11px] text-slate-600 transition-colors duration-300 group-hover:text-brand-400 md:text-xs">
                          {sectionIndex(i + 1)}
                        </span>
                      </div>
                      <h4 className="mb-1.5 text-base font-semibold text-white md:text-lg">{cert.title}</h4>
                      <p className="text-sm text-slate-400">{cert.desc}</p>
                    </div>
                  ))}
                </RuledGrid>
              </motion.section>
            </div>
          </main>

          {/* Footer */}
          <footer className="mt-14 border-t border-white/[0.07] md:mt-28">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:flex-row sm:text-left md:py-8">
              <p className="text-xs text-slate-500">{d.copyright}</p>
              <span className="flex items-center gap-2 font-mono text-xs text-slate-500">
                <StatusDot />
                {d.bookmarkDomain}
              </span>
            </div>
          </footer>
        </div>
      </div>
    </MotionConfig>
  );
}
