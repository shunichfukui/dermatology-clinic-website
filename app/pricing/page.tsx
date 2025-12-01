import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Check } from 'lucide-react';

const priceCategories = [
  {
    category: '一般皮膚科',
    items: [
      { service: '初診料', price: '¥3,000' },
      { service: '再診料', price: '¥1,000' },
      { service: '皮膚がん検診', price: '¥10,000' },
      { service: 'アレルギー検査', price: '¥8,000' },
    ],
  },
  {
    category: 'ニキビ治療',
    items: [
      { service: 'ニキビ診断・計画', price: '¥5,000' },
      { service: 'ケミカルピーリング', price: '¥15,000〜' },
      { service: 'レーザー治療', price: '¥20,000〜' },
      { service: 'ニキビ跡治療', price: '¥25,000〜' },
    ],
  },
  {
    category: '火傷・創傷ケア',
    items: [
      { service: '火傷診断', price: '¥5,000' },
      { service: '創傷処置', price: '¥3,000' },
      { service: '傷跡修正相談', price: '¥5,000' },
      { service: '高度傷跡治療', price: '¥30,000〜' },
    ],
  },
  {
    category: '美容皮膚科',
    items: [
      { service: 'マイクロダーマブレーション', price: '¥15,000' },
      { service: 'ケミカルピーリング', price: '¥15,000〜' },
      { service: 'レーザーリサーフェシング', price: '¥40,000〜' },
      { service: 'アンチエイジングパック (3回)', price: '¥80,000' },
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-secondary/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-foreground mb-4">料金表</h1>
          <p className="text-xl text-foreground/70">
            全てのサービスについて透明性のある価格設定を行っています
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {priceCategories.map((category, idx) => (
              <div
                key={idx}
                className="border border-border rounded-2xl p-8 bg-card hover:border-primary/30 transition-colors"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex justify-between items-center pb-4 border-b border-border/50 last:border-0 last:pb-0"
                    >
                      <span className="text-foreground/80">{item.service}</span>
                      <span className="font-semibold text-primary">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Notes */}
          <div className="max-w-3xl mx-auto bg-secondary/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              重要なお知らせ
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <Check size={20} className="text-primary flex-shrink-0" />
                <span className="text-foreground/80">
                  価格は予告なく変更される場合があります
                </span>
              </li>
              <li className="flex gap-3">
                <Check size={20} className="text-primary flex-shrink-0" />
                <span className="text-foreground/80">
                  保険適用の可否についてはお問い合わせください
                </span>
              </li>
              <li className="flex gap-3">
                <Check size={20} className="text-primary flex-shrink-0" />
                <span className="text-foreground/80">
                  複数回治療のパッケージ割引もご用意しています
                </span>
              </li>
              <li className="flex gap-3">
                <Check size={20} className="text-primary flex-shrink-0" />
                <span className="text-foreground/80">
                  分割払いのご相談も承ります
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
