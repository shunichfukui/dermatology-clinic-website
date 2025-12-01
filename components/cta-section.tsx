import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-foreground mb-6">
          美しい肌への第一歩を踏み出しませんか？
        </h2>
        <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
          今すぐカウンセリングをご予約ください。専門医があなたに最適な治療計画をご提案します。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/booking"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 font-semibold text-lg"
          >
            今すぐ予約する
            <ArrowRight size={20} />
          </Link>
          <Link
            href="tel:+1234567890"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors duration-200 font-semibold text-lg"
          >
            <Phone size={20} />
            電話をかける
          </Link>
        </div>
      </div>
    </section>
  );
}
