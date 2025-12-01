export default function DoctorCard({
  name,
  title,
  specialty,
  experience,
  bio,
  credentials,
  image,
}: {
  name: string
  title: string
  specialty: string
  experience: string
  bio: string
  credentials: string[]
  image: string
}) {
  return (
    <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
      <div className="relative h-80 overflow-hidden bg-secondary">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-foreground mb-1">{name}</h3>
        <p className="text-primary font-semibold text-sm mb-4">{title}</p>

        <div className="mb-4 pb-4 border-b border-border">
          <p className="text-sm text-foreground/70 mb-2">
            <span className="font-medium text-foreground">Specialty:</span> {specialty}
          </p>
          <p className="text-sm text-foreground/70">
            <span className="font-medium text-foreground">Experience:</span> {experience}
          </p>
        </div>

        <p className="text-foreground/70 text-sm mb-4 leading-relaxed">{bio}</p>

        <div className="bg-secondary/30 rounded-lg p-4">
          <p className="font-semibold text-sm text-foreground mb-3">Credentials</p>
          <ul className="space-y-2">
            {credentials.map((cred, idx) => (
              <li key={idx} className="text-sm text-foreground/70 flex gap-2">
                <span className="text-primary">✓</span>
                {cred}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
