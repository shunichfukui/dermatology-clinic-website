'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
              <span className="w-2 h-2 bg-accent rounded-full" />
              最新の皮膚科治療
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
              あなたの肌の
              <br />
              専門家として
            </h1>

            <p className="text-xl text-foreground/70 leading-relaxed text-balance">
              ニキビ治療から火傷のケア、美容施術まで、認定皮膚科医があらゆる年齢層の方に包括的なスキンケアソリューションを提供します。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 font-semibold"
              >
                カウンセリングを予約
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 border border-border rounded-lg hover:bg-secondary transition-colors duration-200 font-semibold"
              >
                診療内容を見る
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 grid grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-2xl font-bold text-primary">20+</div>
                <div className="text-foreground/60">年の実績</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">5000+</div>
                <div className="text-foreground/60">人以上の患者様</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-foreground/60">満足度</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-full min-h-[500px] animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl" />
            <img
              src="/modern-dermatology-clinic-interior-with-comfortabl.jpg"
              alt="現代的な皮膚科クリニックの内装"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
