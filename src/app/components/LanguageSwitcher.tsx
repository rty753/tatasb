'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const otherLocale = locale === 'zh' ? 'en' : 'zh';
  const label = locale === 'zh' ? 'EN' : '中文';

  const handleSwitch = () => {
    // Set cookie for persistence
    document.cookie = `locale=${otherLocale};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;
    // Navigate to the other locale
    const newPath = pathname.replace(`/${locale}`, `/${otherLocale}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={handleSwitch}
      className="fixed top-4 right-4 md:top-6 md:right-6 z-50 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium hover:bg-white/20 transition-all duration-300 cursor-pointer select-none"
      aria-label={`Switch to ${otherLocale === 'en' ? 'English' : 'Chinese'}`}
    >
      <Globe className="w-4 h-4" />
      {label}
    </button>
  );
}
