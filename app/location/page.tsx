import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-secondary/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-foreground mb-4">アクセス</h1>
          <p className="text-xl text-foreground/70">
            医療地区の中心に位置しています
          </p>
        </div>
      </section>

      {/* Location Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-border h-96 md:h-full min-h-96">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                title="clinic location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00601592346934!3d40.71280707138067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3e32c2e6e5%3A0x1234567890abcdef!2sMedical%20Center!5e0!3m2!1sen!2sus!4v1234567890"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Info */}
            <div className="space-y-8">
              {/* Address */}
              <div className="space-y-3">
                <div className="flex gap-4 items-start">
                  <MapPin
                    size={24}
                    className="text-primary flex-shrink-0 mt-1"
                  />
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-2">
                      所在地
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      〒100-0001
                      <br />
                      東京都港区医療プラザ
                      <br />
                      200号室
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="space-y-3">
                <div className="flex gap-4 items-start">
                  <Clock
                    size={24}
                    className="text-primary flex-shrink-0 mt-1"
                  />
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-2">
                      診療時間
                    </h3>
                    <div className="space-y-2 text-foreground/70">
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
              </div>

              {/* Contact */}
              <div className="space-y-3 border-t border-border pt-8">
                <div className="flex gap-4 items-start">
                  <Phone
                    size={24}
                    className="text-primary flex-shrink-0 mt-1"
                  />
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-2">
                      電話番号
                    </h3>
                    <a
                      href="tel:+15551234567"
                      className="text-primary hover:underline"
                    >
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Mail size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-2">
                      メールアドレス
                    </h3>
                    <a
                      href="mailto:contact@dermaclinic.com"
                      className="text-primary hover:underline"
                    >
                      contact@dermaclinic.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Parking */}
              <div className="bg-secondary/30 rounded-xl p-6">
                <h4 className="font-bold text-foreground mb-2">
                  駐車場・アクセス
                </h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  十分な駐車スペースをご用意しております。車椅子対応のエントランス完備。1階に位置しており、アクセスも良好です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
