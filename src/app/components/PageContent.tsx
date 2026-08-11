"use client";

import { getDictionary } from '@/i18n/dictionaries';
import {
  MessageCircle,
  Globe,
  CreditCard,
  Coins,
  ArrowRight,
  Bookmark,
  AlertTriangle,
  Star,
  Shield,
  Lock,
  Award,
  CheckCircle,
  Eye,
  Info,
  MapPin,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Grid3DBackground from './Grid3DBackground';
import LanguageSwitcher from './LanguageSwitcher';

export default function PageContent({ locale }: { locale: string }) {
  const d = getDictionary(locale);
  const isWarning = d.noticeStyle === 'warning';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-hidden">
      <Grid3DBackground />
      <LanguageSwitcher locale={locale} />

      <div className="relative z-10">
        <div className="container mx-auto px-3 lg:px-4 py-4 lg:py-10">
          {/* Header */}
          <motion.header
            className="text-center mb-3 lg:mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-3 lg:mb-5"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-0.5 lg:p-1 rounded-2xl">
                <div className="bg-slate-900 px-3 py-1.5 lg:px-6 lg:py-3 rounded-2xl">
                  <div className="flex items-center gap-2 lg:gap-3">
                    <Bookmark className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400" />
                    <span className="text-yellow-400 font-medium text-xs lg:text-base">
                      {d.bookmarkText}
                    </span>
                    <span className="text-white font-bold text-sm lg:text-lg">
                      {d.bookmarkDomain}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mb-2 lg:mb-4 tracking-tight leading-tight">
              {d.heroTitle}
            </h1>
          </motion.header>

          {/* Contact Section */}
          <motion.div
            className="max-w-6xl mx-auto mb-4 lg:mb-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-3xl lg:rounded-4xl p-3 lg:p-10 border border-slate-400/20 shadow-2xl">
              <div className="text-center mb-3 lg:mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1 lg:px-6 lg:py-2 rounded-full text-white font-medium mb-2 lg:mb-4 text-xs lg:text-base">
                  <Star className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span>{d.contactBadge}</span>
                </div>
                <h2 className="text-xl lg:text-4xl font-bold text-white mb-2 lg:mb-4">
                  {d.contactTitle}
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-3 lg:gap-8 mb-4 lg:mb-8">
                <motion.a
                  href="https://t.me/zfxt5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gradient-to-br from-blue-600/20 to-cyan-600/20 hover:from-blue-600/30 hover:to-cyan-600/30 backdrop-blur-lg rounded-2xl lg:rounded-3xl p-3 lg:p-8 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-500"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2 lg:mb-6">
                      <MessageCircle className="w-6 lg:w-12 h-6 lg:h-12 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                      <ArrowRight className="w-4 lg:w-8 h-4 lg:h-8 text-blue-400 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                    <h3 className="text-sm lg:text-2xl font-bold text-white mb-1 lg:mb-2">{d.tgSupportTitle}</h3>
                    <p className="text-blue-200 text-sm lg:text-lg mb-1 lg:mb-4 break-all">{d.tgSupportHandle}</p>
                    <p className="text-slate-300 text-sm lg:text-base hidden md:block">{d.tgSupportDesc}</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://t.me/thirdpartypaybuild"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gradient-to-br from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 backdrop-blur-lg rounded-2xl lg:rounded-3xl p-3 lg:p-8 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-500"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2 lg:mb-6">
                      <MessageCircle className="w-6 lg:w-12 h-6 lg:h-12 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                      <ArrowRight className="w-4 lg:w-8 h-4 lg:h-8 text-purple-400 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                    <h3 className="text-sm lg:text-2xl font-bold text-white mb-1 lg:mb-2">{d.tgChannelTitle}</h3>
                    <p className="text-purple-200 text-sm lg:text-lg mb-1 lg:mb-4 break-all">{d.tgChannelHandle}</p>
                    <p className="text-slate-300 text-sm lg:text-base hidden md:block">{d.tgChannelDesc}</p>
                  </div>
                </motion.a>
              </div>

              <motion.div
                className="text-center pb-1 lg:pb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <a
                  href="https://tatapaytech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 lg:px-12 py-2.5 lg:py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white font-bold text-sm lg:text-xl rounded-2xl lg:rounded-3xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
                >
                  <Globe className="w-4 lg:w-7 h-4 lg:h-7 mr-2 lg:mr-4" />
                  {d.websiteBtnText}
                  <ArrowRight className="w-4 lg:w-7 h-4 lg:h-7 ml-2 lg:ml-4" />
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Products — first screen */}
          <motion.div
            className="max-w-6xl mx-auto grid md:grid-cols-2 gap-3 lg:gap-8 mb-10 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-lg rounded-2xl lg:rounded-3xl p-3 lg:p-8 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-2 lg:mb-4">
                <CreditCard className="w-7 h-7 lg:w-14 lg:h-14 text-blue-400 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-base lg:text-2xl font-bold text-white">{d.product1Title}</h3>
              </div>
              <p className="text-slate-300 text-sm leading-snug lg:text-lg lg:leading-relaxed">{d.product1Desc}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-lg rounded-2xl lg:rounded-3xl p-3 lg:p-8 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-2 lg:mb-4">
                <Coins className="w-7 h-7 lg:w-14 lg:h-14 text-purple-400 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-base lg:text-2xl font-bold text-white">{d.product2Title}</h3>
              </div>
              <p className="text-slate-300 text-sm leading-snug lg:text-lg lg:leading-relaxed">{d.product2Desc}</p>
            </div>
          </motion.div>

          {/* Notice / Service Overview */}
          <section className="pt-4 lg:pt-8">
            <div className="text-center mb-8 lg:mb-12">
              <motion.div
                className={`inline-flex items-center gap-2 px-6 py-2 rounded-full text-white font-medium mb-6 ${
                  isWarning
                    ? 'bg-gradient-to-r from-red-600 to-orange-600'
                    : 'bg-gradient-to-r from-blue-600 to-cyan-600'
                }`}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                {isWarning ? <AlertTriangle className="w-5 h-5" /> : <Info className="w-5 h-5" />}
                <span>{d.noticeBadge}</span>
              </motion.div>
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
                {d.noticeSectionTitle}
              </h2>
            </div>

            <motion.div
              className="max-w-4xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <div
                className={`backdrop-blur-lg rounded-3xl p-8 lg:p-12 border ${
                  isWarning
                    ? 'bg-gradient-to-r from-red-900/30 to-orange-900/30 border-red-500/30'
                    : 'bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border-blue-500/30'
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  {isWarning ? (
                    <AlertTriangle className="w-10 h-10 text-red-400" />
                  ) : (
                    <Info className="w-10 h-10 text-blue-400" />
                  )}
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">{d.noticeHeading}</h3>
                </div>
                <p className={`text-lg lg:text-xl leading-relaxed mb-4 ${isWarning ? 'text-red-200' : 'text-blue-200'}`}>
                  {d.noticeP1}
                  <span className={`font-bold ${isWarning ? 'text-red-300' : 'text-cyan-300'}`}>{d.noticeHighlight}</span>
                  {d.noticeP1End}
                </p>
                <p className={`text-lg lg:text-xl leading-relaxed ${isWarning ? 'text-red-200' : 'text-blue-200'}`}>
                  {d.noticeP2}
                </p>
              </div>
            </motion.div>

            {/* Markets (English only) */}
            {d.showMarkets && (
              <motion.div
                className="max-w-6xl mx-auto mb-16"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.7 }}
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-2 rounded-full text-white font-medium mb-6">
                    <MapPin className="w-5 h-5" />
                    <span>{d.marketsBadge}</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{d.marketsTitle}</h2>
                  <p className="text-lg text-slate-300">{d.marketsSubtitle}</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { country: d.market1Country, flag: d.market1Flag, methods: d.market1Methods },
                    { country: d.market2Country, flag: d.market2Flag, methods: d.market2Methods },
                    { country: d.market3Country, flag: d.market3Flag, methods: d.market3Methods },
                    { country: d.market4Country, flag: d.market4Flag, methods: d.market4Methods },
                    { country: d.market5Country, flag: d.market5Flag, methods: d.market5Methods },
                    { country: d.market6Country, flag: d.market6Flag, methods: d.market6Methods },
                  ].filter((m) => m.country).map((m) => (
                    <motion.div
                      key={m.country}
                      className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-lg rounded-2xl p-6 border border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-300 group text-center"
                      whileHover={{ scale: 1.02, y: -3 }}
                    >
                      <div className="text-4xl mb-3">{m.flag}</div>
                      <h4 className="text-lg font-bold text-white mb-2">{m.country}</h4>
                      <p className="text-slate-300 text-sm">{m.methods}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Certifications */}
            <motion.div
              className="max-w-6xl mx-auto mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-orange-600 px-6 py-2 rounded-full text-white font-medium mb-6">
                  <Award className="w-5 h-5" />
                  <span>{d.certBadge}</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{d.certTitle}</h2>
                <p className="text-lg text-slate-300">{d.certSubtitle}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { Icon: Shield, title: d.cert1Title, desc: d.cert1Desc, color: 'yellow' },
                  { Icon: Award, title: d.cert2Title, desc: d.cert2Desc, color: 'blue' },
                  { Icon: Lock, title: d.cert3Title, desc: d.cert3Desc, color: 'green' },
                  { Icon: CheckCircle, title: d.cert4Title, desc: d.cert4Desc, color: 'purple' },
                  { Icon: Globe, title: d.cert5Title, desc: d.cert5Desc, color: 'indigo' },
                  { Icon: Eye, title: d.cert6Title, desc: d.cert6Desc, color: 'red' },
                ].map((cert) => {
                  const colorMap: Record<string, string> = {
                    yellow: 'from-yellow-900/40 to-orange-900/40 border-yellow-400/30 hover:border-yellow-400/60',
                    blue: 'from-blue-900/40 to-cyan-900/40 border-blue-400/30 hover:border-blue-400/60',
                    green: 'from-green-900/40 to-emerald-900/40 border-green-400/30 hover:border-green-400/60',
                    purple: 'from-purple-900/40 to-pink-900/40 border-purple-400/30 hover:border-purple-400/60',
                    indigo: 'from-indigo-900/40 to-blue-900/40 border-indigo-400/30 hover:border-indigo-400/60',
                    red: 'from-red-900/40 to-orange-900/40 border-red-400/30 hover:border-red-400/60',
                  };
                  const iconColor: Record<string, string> = {
                    yellow: 'text-yellow-400', blue: 'text-blue-400', green: 'text-green-400',
                    purple: 'text-purple-400', indigo: 'text-indigo-400', red: 'text-red-400',
                  };
                  return (
                    <motion.div
                      key={cert.title}
                      className={`bg-gradient-to-br ${colorMap[cert.color]} backdrop-blur-lg rounded-2xl p-6 border transition-all duration-300 group text-center`}
                      whileHover={{ scale: 1.02, y: -3 }}
                    >
                      <cert.Icon className={`w-12 h-12 ${iconColor[cert.color]} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
                      <h4 className="text-lg font-bold text-white mb-2">{cert.title}</h4>
                      <p className="text-slate-300 text-sm">{cert.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </section>

          {/* Footer */}
          <motion.footer
            className="text-center text-slate-400 pb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-slate-800/40 to-slate-900/40 backdrop-blur-lg rounded-2xl p-8 border border-slate-600/20">
                <p className="text-sm text-slate-500">{d.copyright}</p>
              </div>
            </div>
          </motion.footer>
        </div>
      </div>
    </div>
  );
}
