import { Check } from 'lucide-react';

const reasons = [
  '豊富な経験を持つ認定皮膚科専門医',
  '最新鋭の機器と現代的な施設',
  '患者様一人ひとりに合わせた治療計画',
  '全年齢（20代〜60代以上）に対応した優しいアプローチ',
  '快適で温かみのあるクリニック環境',
  '柔軟な予約スケジュール',
];

export default function WhyUs() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/dermatologist-performing-skin-examination-with-mod.jpg"
              alt="診療風景"
              className="rounded-2xl w-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              当院が選ばれる理由
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              私たちは医学的専門知識と患者様第一のアプローチを組み合わせ、卓越した皮膚科ケアを提供します。
            </p>

            <div className="space-y-4">
              {reasons.map((reason, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 items-start animate-slide-up"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/10">
                      <Check size={16} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="text-foreground font-medium">{reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
