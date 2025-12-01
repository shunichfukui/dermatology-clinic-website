import { Check } from 'lucide-react';

export default function ServiceDetail({
  id,
  title,
  icon,
  description,
  details,
  benefits,
  image,
}: {
  id: string;
  title: string;
  icon: string;
  description: string;
  details: string[];
  benefits: string[];
  image?: string;
}) {
  const isEven = Math.random() > 0.5; // 注: SSRでハイドレーションエラーになる可能性がありますが、元のコードを維持します

  return (
    <div id={id} className="scroll-mt-24">
      <div
        className={`grid md:grid-cols-2 gap-12 items-center ${
          !isEven && 'md:grid-flow-dense'
        }`}
      >
        {/* Image */}
        <div className="relative h-80">
          <div className="absolute inset-0 bg-primary/5 rounded-2xl" />
          <img
            src={image || '/placeholder.jpg'}
            alt={title}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Content */}
        <div>
          <div className="text-4xl mb-4">{icon}</div>
          <h2 className="text-4xl font-bold text-foreground mb-4">{title}</h2>
          <p className="text-lg text-foreground/70 mb-8">{description}</p>

          <div className="mb-10">
            <h3 className="font-semibold text-foreground mb-4">
              当院の提供内容
            </h3>
            <ul className="space-y-3">
              {details.map((detail, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check size={14} className="text-primary" />
                  </div>
                  <span className="text-foreground/80">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-secondary/30 rounded-xl p-6">
            <h3 className="font-semibold text-foreground mb-4">メリット</h3>
            <ul className="space-y-2">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="text-foreground/70 flex gap-2">
                  <span className="text-accent">→</span> {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
