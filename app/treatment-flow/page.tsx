import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

const steps = [
  {
    number: 1,
    title: '予約・お問い合わせ',
    description:
      'Webまたはお電話でご予約ください。スタッフがご希望の日時を調整いたします。',
    details: ['簡単なWeb予約', '柔軟なスケジュール調整', '予約確認メール/SMS'],
  },
  {
    number: 2,
    title: '事前準備',
    description:
      '最適な結果のために、来院前の注意事項や準備についてご案内します。',
    details: ['肌の準備ガイド', '現在服用中の薬の確認', '問診票の記入'],
  },
  {
    number: 3,
    title: 'カウンセリング・診察',
    description: '医師が肌の状態を診断し、悩みや目標をお伺いします。',
    details: ['包括的な皮膚診断', '病歴の確認', '写真による記録'],
  },
  {
    number: 4,
    title: '治療計画の立案',
    description: '診断に基づき、あなたに最適な治療プランを作成します。',
    details: ['個別の推奨事項', '治療オプションの説明', '予想される期間と経過'],
  },
  {
    number: 5,
    title: '施術・治療',
    description: '熟練した専門スタッフが、細心の注意を払って施術を行います。',
    details: ['清潔な環境', '痛みの管理', '専門的な技術'],
  },
  {
    number: 6,
    title: 'アフターケア・経過観察',
    description:
      '詳細なアフターケアの説明と、必要に応じた経過観察の予約を行います。',
    details: ['ケア手順書のお渡し', 'フォローアップ予約', 'サポート体制'],
  },
];

export default function TreatmentFlowPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-secondary/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            治療の流れ
          </h1>
          <p className="text-xl text-foreground/70">
            来院から治療完了までのステップ
          </p>
        </div>
      </section>

      {/* Flow */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {steps.map((step, idx) => (
              <div key={idx}>
                <div className="flex gap-8 pb-12">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-4">
                      {step.number}
                    </div>
                    {idx < steps.length - 1 && (
                      <div className="w-1 h-32 bg-primary/20" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-foreground/70 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="space-y-2">
                      {step.details.map((detail, detailIdx) => (
                        <div
                          key={detailIdx}
                          className="flex gap-2 text-sm text-foreground/60"
                        >
                          <span className="text-primary">•</span>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
