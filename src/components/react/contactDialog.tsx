'use client'

import { useState, useEffect } from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { DialogTrigger } from '@radix-ui/react-dialog'



const ContactDialog = ({ label }: { label: string }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const setValue = () => {
    if (label === "Consultar Landing" || label === "Consult Landing") {
      return "Landing"
    } else if (label === "Quiero mi tienda" || label === "I want my store") {
      return "E-commerce"
    } else if (label === "Hablemos de tu sistema" || label === "Talk about your system") {
      return "Mini SaaS"
    } else if (label === "Mejorar mi proyecto" || label === "Improve my project") {
      return "Mejorar mi proyecto"
    } else if (label === "Otro" || label === "Other") {
      return "Otro"
    }
  }

  useEffect(() => {
    const handleOpenDialog = (e: Event) => {
      const target = e.target as HTMLElement

      const button = target.closest('[data-open-dialog]')
      if (button) {
        const service = button.getAttribute('data-service') || ''
        setSelectedService(service)
        setIsSubmitted(false)
        setIsOpen(true)
      }
    }

    document.addEventListener('click', handleOpenDialog)
    return () => document.removeEventListener('click', handleOpenDialog)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Error al enviar el mensaje");
      }

      setIsSubmitted(true);

      setTimeout(() => {
        setIsOpen(false);
        setIsSubmitted(false);
        e.currentTarget.reset();
      }, 3000);

    } catch (err) {
      console.error(err);
      alert("Hubo un error al enviar el mensaje.");
    }
  };


  const translateModal = () => {
    const url = window.location.pathname;
    if (url === "/services") {
      return {
        title: "Let's talk about your project",
        description: "Fill out these details and I'll contact you within 24 hours with a diagnosis or a custom proposal.",
        labels: {
          name: "Name",
          email: {
            label: "Email",
            aclaration: "Please enter a real email so I can contact you."
          },
          select: {
            placeholder: "Select a project type",
            landing: "Landing",
            e_commerce: "E-commerce",
            mini_saaS: "Mini SaaS",
            mejorar_mi_proyecto: "Upgrade my project",
            otro: "Other"
          },
          project: "Project",
          message: {
            label: "Message",
            placeholder: "Describe your idea or problem"
          }
        },
        submit: "Send message",
        thanks: "Thank you for your message. I'll get back to you within 24 hours."
      }
    } else {
      return {
        title: "Hablemos de tu proyecto",
        description: "Llená estos datos y te contactaré en 24 horas con un diagnóstico o una propuesta personalizada.",
        labels: {
          name: "Nombre",
          email: {
            label: "Email",
            aclaration: "Por favor, ingrese un email real para poder comunicarme contigo."
          },
          select: {
            placeholder: "Selecciona el tipo de proyecto",
            landing: "Landing",
            e_commerce: "E-commerce",
            mini_saaS: "Mini SaaS",
            mejorar_mi_proyecto: "Mejorar mi proyecto",
            otro: "Otro"
          },
          project: "Tipo de proyecto",
          message: {
            label: "Contame tu idea o problema",
            placeholder: "Contame tu idea o problema"
          }
        },
        submit: "Enviar mensaje",
        thanks: "Gracias por tu mensaje. Te voy a responder dentro de las próximas 24 horas."
      }
    }

  }

  const { title, description, labels, submit, thanks } = translateModal()

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className='w-full max-w-sm mx-auto rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors'>{label}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription className="text-base">
            {description}
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <Check className="h-6 w-6 text-primary-foreground" />
            </div>
            <p className="text-lg font-medium text-foreground">
              {thanks}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">{labels.name}</Label>
              <Input
                id="name"
                name="name"
                placeholder={labels.name}
                required
                className="h-11"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{labels.email.label}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={labels.email.label}
                required
                className="h-11"
              />
              <p className="text-xs text-muted-foreground italic">{labels.email.aclaration}</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="project">{labels.project}</Label>
              <Select name="project" defaultValue={setValue()} required>
                <SelectTrigger className="h-11">
                  <SelectValue placeholder={labels.select.placeholder} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Landing">{labels.select.landing}</SelectItem>
                  <SelectItem value="E-commerce">{labels.select.e_commerce}</SelectItem>
                  <SelectItem value="Mini SaaS">{labels.select.mini_saaS}</SelectItem>
                  <SelectItem value="Mejorar mi proyecto">{labels.select.mejorar_mi_proyecto}</SelectItem>
                  <SelectItem value="Otro">{labels.select.otro}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">{labels.message.label}</Label>
              <Textarea
                id="message"
                name="message"
                placeholder={labels.message.placeholder}
                rows={5}
                required
                className="resize-none"
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              {submit}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
export default ContactDialog