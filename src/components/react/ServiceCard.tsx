
import { Check } from 'lucide-react'
import ContactDialog from './contactDialog'

interface Props {
  service: {
    id: string
    title: string
    description: string
    benefits: string[]
    ctaLabel: string
  }
}

const ServiceCard = ({ service }: Props) => {

  return (
    <div
      className="group relative flex flex-col rounded-lg border border-border bg-card p-8 max-md:p-4 transition-colors hover:border-foreground/20"
    >
      <div className="flex-1 max-md:flex-0">
        <h3 className="text-2xl font-semibold text-card-foreground max-md:text-lg">{service.title}</h3>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground max-md:text-sm">{service.description}</p>

        <ul className="mt-6 space-y-3">
          {service.benefits.map((benefit) => (
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 shrink-0 text-foreground" />
              <span className="text-sm max-md:text-xs leading-relaxed text-card-foreground">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 border-t border-border pt-6 text-center">
       <ContactDialog label={service.ctaLabel}/>
      </div>
    </div>
  )
}

export default ServiceCard

