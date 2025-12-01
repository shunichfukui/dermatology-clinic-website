import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import DoctorCard from '@/components/doctor-card';

const doctors = [
  {
    name: 'サラ・チェン 医師',
    title: '院長 / 皮膚科専門医',
    specialty: '一般皮膚科 & 美容皮膚科',
    experience: '20年以上',
    bio: '包括的な皮膚の健康と美容施術において専門知識を持つ認定皮膚科医。',
    credentials: [
      'スタンフォード大学医学部卒',
      '米国皮膚科学会認定医',
      '美容皮膚科フェローシップ',
    ],
    image: '/female-dermatologist-portrait.png',
  },
  {
    name: 'マイケル・ロバーツ 医師',
    title: '皮膚科医',
    specialty: 'ニキビ & 火傷治療',
    experience: '15年以上',
    bio: '最新の医療技術を用いたニキビ治療と火傷管理を専門とする。',
    credentials: [
      'ジョンズ・ホプキンス大学卒',
      '米国皮膚科学会認定医',
      '火傷ケア専門医',
    ],
    image: '/professional-male-dermatologist-portrait.jpg',
  },
  {
    name: 'リサ・ウォン 医師',
    title: '皮膚科医',
    specialty: '美容 & レーザー施術',
    experience: '12年以上',
    bio: '肌の若返りのための非侵襲的美容施術とレーザー治療の専門家。',
    credentials: [
      'カリフォルニア大学卒',
      '米国皮膚科学会認定医',
      'レーザー手術専門医',
    ],
    image: '/professional-female-dermatologist-aesthetic-specia.jpg',
  },
];

export default function DoctorsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-secondary/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-foreground mb-4">医師紹介</h1>
          <p className="text-xl text-foreground/70">
            認定皮膚科医のチームをご紹介します
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doctor, idx) => (
              <DoctorCard key={idx} {...doctor} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
