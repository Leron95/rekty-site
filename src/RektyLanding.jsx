import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaTelegram, FaGlobe, FaExchangeAlt } from "react-icons/fa";
import logo from "./assets/logo.png";
import whitepaperEN from "./assets/Whitepaper_EN.pdf";
import whitepaperRU from "./assets/Whitepaper_RU.pdf";
import whitepaperZH from "./assets/Whitepaper_ZH.pdf";

export default function RektyLanding() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "en");

  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  const SectionBlock = ({ title, children, delay = 0 }) => (
    <motion.div
      className="mt-10 bg-zinc-900 p-6 rounded-xl max-w-2xl mx-auto transition hover:scale-[1.02] hover:ring-2 hover:ring-white/20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
    >
      <h2 className="text-xl font-bold mb-3">{title}</h2>
      {children}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-black text-white p-4">
      {/* Шапка */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 md:gap-0">
        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          <a href="https://t.me/+PoosMrsrDUs1MWQ6" target="_blank" rel="noreferrer" className="btn">
            <FaTelegram className="mr-1" /> Telegram
          </a>
          <a href="https://yourwebsite.com" target="_blank" rel="noreferrer" className="btn">
            <FaGlobe className="mr-1" /> Website
          </a>
          <a href="https://app.uniswap.org" target="_blank" rel="noreferrer" className="btn">
            <FaExchangeAlt className="mr-1" /> {t("buy.button")}
          </a>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => toggleLanguage("en")}
            className={`btn ${language === "en" ? "bg-white text-black" : ""}`}
          >
            EN
          </button>
          <button
            onClick={() => toggleLanguage("ru")}
            className={`btn ${language === "ru" ? "bg-white text-black" : ""}`}
          >
            RU
          </button>
          <button
            onClick={() => toggleLanguage("zh")}
            className={`btn ${language === "zh" ? "bg-white text-black" : ""}`}
          >
            ZH
          </button>
        </div>
      </div>

      {/* Логотип */}
      <div className="text-center">
        <img src={logo} alt="REKTY Logo" className="mx-auto w-24 h-24 mb-2" />
        <p className="text-lg">{t("subtitle")}</p>
      </div>

      {/* Секции */}
      <SectionBlock title={t("tokenomics.title")} delay={0.2}>
        <ul className="list-disc list-inside space-y-1">
          <li>{t("tokenomics.totalSupply")}: 770,000,000</li>
          <li>{t("tokenomics.community")}: 50%</li>
          <li>{t("tokenomics.team")}: 20%</li>
          <li>{t("tokenomics.liquidity")}: 20%</li>
          <li>{t("tokenomics.marketing")}: 10%</li>
        </ul>
      </SectionBlock>

      <SectionBlock title={t("howToBuy.title")} delay={0.4}>
        <ol className="list-decimal list-inside space-y-1">
          <li>{t("howToBuy.step1")}</li>
          <li>{t("howToBuy.step2")}</li>
          <li>{t("howToBuy.step3")}</li>
        </ol>
        <a
          href="https://metamask.io"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-orange-400 hover:underline"
        >
          🦊 MetaMask — {t("buy.metamask")}
        </a>
      </SectionBlock>

      <SectionBlock title={t("roadmap.title")} delay={0.6}>
        <ul className="space-y-1">
          <li>😈 {t("roadmap.phase1")}</li>
          <li>😈 {t("roadmap.phase2")}</li>
          <li>😈 {t("roadmap.phase3")}</li>
          <li>😈 {t("roadmap.phase4")}</li>
          <li>😈 {t("roadmap.phase5")}</li>
        </ul>
      </SectionBlock>

      {/* Whitepaper Section */}
      <SectionBlock title={t("whitepaper.title")} delay={0.8}>
        <div className="flex flex-wrap gap-4 mt-4 justify-center">
  <a href={whitepaperEN} download className="btn bg-white text-black hover:bg-gray-300">
    📄 Whitepaper (EN)
  </a>
  <a href={whitepaperRU} download className="btn bg-white text-black hover:bg-gray-300">
    📄 Whitepaper (RU)
  </a>
  <a href={whitepaperZH} download className="btn bg-white text-black hover:bg-gray-300">
    📄 Whitepaper (ZH)
  </a>
</div>

      </SectionBlock>

      {/* Футер */}
      <footer className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-white/60">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto px-4 gap-4">
          <p>© 2025 REKTY. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://t.me/+PoosMrsrDUs1MWQ6" target="_blank" rel="noreferrer" className="hover:underline">
              Telegram
            </a>
            <a href="https://yourwebsite.com" target="_blank" rel="noreferrer" className="hover:underline">
              Website
            </a>
            <a href="https://app.uniswap.org" target="_blank" rel="noreferrer" className="hover:underline">
              Buy on Uniswap
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
