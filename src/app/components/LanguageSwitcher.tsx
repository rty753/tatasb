'use client';

import { useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher({ locale }: { locale: string }) {
  const router = useRouter();

  const isZh = locale === 'zh';
  const label = isZh ? 'EN' : '中文';
  const targetPath = isZh ? '/en/' : '/';
  const targetLocale = isZh ? 'en' : 'zh';

  const handleSwitch = () => {
    document.cookie = `locale=${targetLocale};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;
    router.push(targetPath);
  };

  return (
    <button
      onClick={handleSwitch}
      className="flex cursor-pointer select-none items-center gap-1.5 rounded-sm border border-white/15 bg-white/[0.04] px-2.5 py-1.5 font-mono text-xs font-medium text-white transition-colors duration-200 hover:border-brand-400/70 hover:bg-brand-500/15 lg:px-3"
      aria-label={`Switch to ${isZh ? 'English' : 'Chinese'}`}
    >
      <Globe className="h-3.5 w-3.5 text-brand-300" />
      {label}
    </button>
  );
}
