import Link from 'next/link';
import { Clock, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Clinic Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-background/20 flex items-center justify-center">
                <span className="font-bold">D</span>
              </div>
              <span className="font-semibold">皮膚科クリニック</span>
            </div>
            <p className="text-background/70 text-sm">
              2004年以来、あらゆる年齢層の方に専門的な皮膚科ケアを提供しています。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">リンク</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  ホーム
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  診療内容
                </Link>
              </li>
              <li>
                <Link
                  href="/doctors"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  医師紹介
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  料金表
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">お問い合わせ</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2 items-start">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span className="text-background/70">(555) 123-4567</span>
              </div>
              <div className="flex gap-2 items-start">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span className="text-background/70">
                  contact@dermaclinic.com
                </span>
              </div>
              <div className="flex gap-2 items-start">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span className="text-background/70">
                  東京都港区医療プラザ123
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4 flex gap-2 items-center">
              <Clock size={18} /> 診療時間
            </h4>
            <div className="space-y-2 text-sm text-background/70">
              <div className="flex justify-between">
                <span>月 - 金</span>
                <span>9:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>土</span>
                <span>10:00 - 16:00</span>
              </div>
              <div className="flex justify-between">
                <span>日</span>
                <span>休診</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-background/70">
          <p>&copy; {currentYear} Dermatology Clinic. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-background transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
