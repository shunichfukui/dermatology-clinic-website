import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ServiceDetail from '@/components/service-detail';

const servicesData = [
  {
    id: 'general',
    title: '一般皮膚科',
    icon: '🔍',
    description: '一般的な皮膚疾患の包括的な診断と治療を行います。',
    details: [
      '皮膚の健康評価と診断',
      '湿疹、乾癬、皮膚炎の治療',
      'ほくろや皮膚病変の評価',
      '皮膚がん検診',
      '処方外用薬による治療',
    ],
    benefits: [
      '皮膚疾患の早期発見',
      '個別の治療計画',
      '予防ケアの指導',
      '専門的な皮膚の健康アドバイス',
    ],
  },
  {
    id: 'acne',
    title: 'ニキビ治療',
    icon: '⚡',
    description: 'あらゆる肌タイプと年齢層に対応した高度なニキビ管理。',
    details: [
      'ニキビ重症度の評価',
      '外用薬および内服薬の選択肢',
      'ケミカルピーリング',
      'レーザーニキビ治療',
      'ニキビ跡の治療',
    ],
    benefits: [
      'クリアで健康的な肌',
      '吹き出物の減少',
      '副作用の最小化',
      '持続的な結果',
    ],
  },
  {
    id: 'burns',
    title: '火傷・創傷ケア',
    icon: '🤕',
    description: '火傷や傷の専門的な治療と管理。',
    details: [
      '急性期の火傷ケアと評価',
      '創傷処置とケア',
      '感染予防',
      '傷跡の管理と治療',
      '再建に関する相談',
    ],
    benefits: [
      '適切な治癒プロセス',
      '傷跡の最小化',
      '疼痛管理',
      '専門的な創傷ケア',
    ],
  },
  {
    id: 'aesthetic',
    title: '美容皮膚科',
    icon: '✨',
    description: '肌の見た目を改善するための非侵襲的な施術。',
    details: [
      'マイクロダーマブレーション',
      'ケミカルピーリング',
      'レーザーリサーフェシング',
      'アンチエイジング治療',
      '美白施術',
    ],
    benefits: [
      '肌質の改善',
      '小じわの減少',
      '均一な肌のトーン',
      '若々しい外見',
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-secondary/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-foreground mb-4">診療内容</h1>
          <p className="text-xl text-foreground/70">
            ニーズに合わせた包括的な皮膚科ソリューション
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {servicesData.map((service) => (
            <ServiceDetail key={service.id} {...service} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
