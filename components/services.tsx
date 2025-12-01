import Link from 'next/link';
import { Zap, Flame, Sparkles, Package } from 'lucide-react';

const services = [
  {
    icon: Package,
    title: '一般皮膚科',
    description: '一般的な皮膚疾患の包括的な診断と治療を行います。',
    link: '/services#general',
  },
  {
    icon: Zap,
    title: 'ニキビ治療',
    description:
      'あらゆる肌タイプに対応した高度なニキビ管理と個別の治療計画を提供します。',
    link: '/services#acne',
  },
  {
    icon: Flame,
    title: '火傷・創傷ケア',
    description: '火傷や傷の専門的な治療と、傷跡の管理を行います。',
    link: '/services#burns',
  },
  {
    icon: Sparkles,
    title: '美容皮膚科',
    description:
      '肌の見た目を改善し、エイジングサインを軽減する非侵襲的な施術を行います。',
    link: '/services#aesthetic',
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">診療内容</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            あなたの肌の悩みに合わせた専門的な皮膚科ケア
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Link key={idx} href={service.link}>
                <div className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
