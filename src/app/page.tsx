"use client";

import { MessageCircle, Globe, CreditCard, Coins, ArrowRight, Bookmark, AlertTriangle, Star, Shield, Lock, Award, CheckCircle, Eye, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          <motion.header 
            className="text-center mb-8 lg:mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block mb-6"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-2xl">
                <div className="bg-slate-900 px-6 py-3 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <Bookmark className="w-5 h-5 text-yellow-400" />
                    <span className="text-yellow-400 font-medium">永久域名 - 易记 - 请收藏</span>
                    <span className="text-white font-bold text-lg">tata.sb</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mb-12 tracking-tight leading-tight">
              塔塔支付系统
            </h1>
          </motion.header>

          {/* 联系我们 - 第一屏的主要内容 */}
          <motion.div 
            className="max-w-6xl mx-auto mb-20 lg:mb-32"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-4xl p-8 lg:p-12 border border-slate-400/20 shadow-2xl">
              <div className="text-center mb-8 lg:mb-12">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 rounded-full text-white font-medium mb-6">
                  <Star className="w-5 h-5" />
                  <span>官方认证</span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                  塔塔系统官方联系方式
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12">
                <motion.a
                  href="https://t.me/zfxt5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gradient-to-br from-blue-600/20 to-cyan-600/20 hover:from-blue-600/30 hover:to-cyan-600/30 backdrop-blur-lg rounded-3xl p-6 lg:p-8 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-500"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4 lg:mb-6">
                      <MessageCircle className="w-10 lg:w-12 h-10 lg:h-12 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                      <ArrowRight className="w-6 lg:w-8 h-6 lg:h-8 text-blue-400 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">Telegram 客服</h3>
                    <p className="text-blue-200 text-lg mb-3 lg:mb-4">@zfxt5</p>
                    <p className="text-slate-300 text-sm lg:text-base">7×24小时专业服务，实时解答问题</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://t.me/tatapay41"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gradient-to-br from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 backdrop-blur-lg rounded-3xl p-6 lg:p-8 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-500"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4 lg:mb-6">
                      <MessageCircle className="w-10 lg:w-12 h-10 lg:h-12 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                      <ArrowRight className="w-6 lg:w-8 h-6 lg:h-8 text-purple-400 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">Telegram 频道</h3>
                    <p className="text-purple-200 text-lg mb-3 lg:mb-4">@tatapay41</p>
                    <p className="text-slate-300 text-sm lg:text-base">最新资讯和系统更新通知</p>
                  </div>
                </motion.a>
              </div>

              <motion.div 
                className="text-center pb-4 lg:pb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <a
                  href="https://tatapaytech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 lg:px-12 py-4 lg:py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white font-bold text-lg lg:text-xl rounded-3xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
                >
                  <Globe className="w-6 lg:w-7 h-6 lg:h-7 mr-3 lg:mr-4" />
                  塔塔支付科技官网
                  <ArrowRight className="w-6 lg:w-7 h-6 lg:h-7 ml-3 lg:ml-4" />
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* 第二屏开始 - 重要通知 */}
          <section className="min-h-screen flex flex-col justify-start pt-8 lg:pt-16">
            <div className="text-center mb-8 lg:mb-12">
              <motion.div 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 px-6 py-2 rounded-full text-white font-medium mb-6"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <AlertTriangle className="w-5 h-5" />
                <span>重要通知</span>
              </motion.div>
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
                塔塔支付系统业务声明
              </h2>
            </div>

            <motion.div 
              className="max-w-4xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-red-500/30">
                <div className="flex items-center gap-4 mb-6">
                  <AlertTriangle className="w-10 h-10 text-red-400" />
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">塔塔支付系统重要声明</h3>
                </div>
                <p className="text-lg lg:text-xl text-red-200 leading-relaxed mb-4">
                  塔塔支付系统专注于海外业务，<span className="font-bold text-red-300">严禁一切国内业务</span>。
                </p>
                <p className="text-lg lg:text-xl text-red-200 leading-relaxed">
                  塔塔支付系统只为海外市场提供合规的支付解决方案，确保塔塔支付系统的专业性与合规性。
                </p>
              </div>
            </motion.div>

            {/* 产品介绍 */}
            <motion.div 
              className="grid md:grid-cols-2 gap-8 mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-lg rounded-3xl p-8 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 group">
                <CreditCard className="w-16 h-16 text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white mb-4">塔塔支付系统 - 第三方支付通道</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  塔塔支付系统提供专业的海外第三方支付解决方案，塔塔支付系统支持多种支付方式和货币结算，确保塔塔支付系统的安全稳定。
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-lg rounded-3xl p-8 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 group">
                <Coins className="w-16 h-16 text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white mb-4">塔塔支付系统 - 海外跑分系统</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  塔塔支付系统提供专业的海外跑分系统搭建服务，塔塔支付系统确保完整的系统部署配置，让塔塔支付系统稳定运行。
                </p>
              </div>
            </motion.div>

            {/* 权威认证区域 */}
            <motion.div 
              className="max-w-6xl mx-auto mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-orange-600 px-6 py-2 rounded-full text-white font-medium mb-6">
                  <Award className="w-5 h-5" />
                  <span>权威认证</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  专业保障 · 塔塔支付系统安全认证
                </h2>
                <p className="text-lg text-slate-300">
                  塔塔支付系统获得多项国际权威认证，确保塔塔支付系统的安全性与专业性
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <motion.div 
                  className="bg-gradient-to-br from-yellow-900/40 to-orange-900/40 backdrop-blur-lg rounded-2xl p-6 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 group text-center"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <Shield className="w-12 h-12 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-lg font-bold text-white mb-2">PCI DSS Level 1</h4>
                  <p className="text-slate-300 text-sm">支付卡行业最高安全标准认证</p>
                </motion.div>

                <motion.div 
                  className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-lg rounded-2xl p-6 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 group text-center"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <Award className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-lg font-bold text-white mb-2">ISO 27001</h4>
                  <p className="text-slate-300 text-sm">国际信息安全管理体系认证</p>
                </motion.div>

                <motion.div 
                  className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-lg rounded-2xl p-6 border border-green-400/30 hover:border-green-400/60 transition-all duration-300 group text-center"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <Lock className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-lg font-bold text-white mb-2">SSL 256位加密</h4>
                  <p className="text-slate-300 text-sm">银行级数据加密保护标准</p>
                </motion.div>

                <motion.div 
                  className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 group text-center"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <CheckCircle className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-lg font-bold text-white mb-2">反洗钱合规</h4>
                  <p className="text-slate-300 text-sm">AML/KYC 全球合规认证</p>
                </motion.div>

                <motion.div 
                  className="bg-gradient-to-br from-indigo-900/40 to-blue-900/40 backdrop-blur-lg rounded-2xl p-6 border border-indigo-400/30 hover:border-indigo-400/60 transition-all duration-300 group text-center"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <Globe className="w-12 h-12 text-indigo-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-lg font-bold text-white mb-2">多国监管许可</h4>
                  <p className="text-slate-300 text-sm">持有相关金融服务牌照</p>
                </motion.div>

                <motion.div 
                  className="bg-gradient-to-br from-red-900/40 to-orange-900/40 backdrop-blur-lg rounded-2xl p-6 border border-red-400/30 hover:border-red-400/60 transition-all duration-300 group text-center"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <Eye className="w-12 h-12 text-red-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-lg font-bold text-white mb-2">7×24安全监控</h4>
                  <p className="text-slate-300 text-sm">专业安全运维保障服务</p>
                </motion.div>
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
                <p className="text-sm text-slate-500">
                  © 2025 塔塔支付系统 - 塔塔支付科技 - 专业塔塔支付系统解决方案提供商
                </p>
              </div>
            </div>
          </motion.footer>
        </div>
      </div>
    </div>
  );
}