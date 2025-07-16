import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HomeIcon as HouseIcon, PanelsTopLeftIcon } from "lucide-react";
import JobSpace from "./ui/jobSpace";

type Experience = {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string;
  skills: { title: string; icon: string }[];
};

const experience: Experience[] = [
  {
    title: "Frontend Developer & Diagnostics Experience Engineer",
    company: "COSMEE WORLD",
    location: "Remote - Freelance",
    date: "Jan 2023 - Jan 2024",
    description:
      "Designed and developed the cosmetic diagnostic web interface with a focus on UX and interactive visualizations. Integrated AI for facial analysis in collaboration with computer vision specialists. Connected the app with external platforms such as Shopify and Klaviyo. Optimized system logic to improve the accuracy of recommendations. Collaborated with multidisciplinary teams and managed technical deliveries in an agile environment.",
    skills: [
      { title: "React", icon: "/svg/react.svg" },
      { title: "Next.js", icon: "/svg/nextdotjs.svg" },
      { title: "OpenAI", icon: "/svg/openai.svg" },
      { title: "TypeScript", icon: "/svg/typescript.svg" },
      { title: "Tailwind CSS", icon: "/svg/tailwindcss.svg" },
      { title: "DaisyUI", icon: "/svg/daisyui.svg" },
      { title: "Firebase", icon: "/svg/firebase.svg" },
      { title: "Vercel", icon: "/svg/vercel.svg" },
    ],
  },
  {
    title: "Frontend Developer",
    company: "TICK Corp",
    location: "Remote",
    date: "October 2024 - March 2025",
    description:
      "Implemented accurate web designs based on client specifications. Optimized website performance with a focus on speed and user experience. Applied SEO strategies and web analytics. Adapted functionalities to meet specific requirements. Managed hosting and domains, ensuring system stability.",
    skills: [
      { title: "React", icon: "/svg/react.svg" },
      { title: "Next.js", icon: "/svg/nextdotjs.svg" },
      { title: "TypeScript", icon: "/svg/typescript.svg" },
      { title: "Tailwind CSS", icon: "/svg/tailwindcss.svg" },
      { title: "Bootstrap", icon: "/svg/bootstrap.svg" },
      { title: "Git", icon: "/svg/git.svg" },
      { title: "Vercel", icon: "/svg/vercel.svg" },
    ],
  },
  {
    title: "Frontend Developer",
    company: "Dazlabs",
    location: "Remote",
    date: "Jan 2023 - Jan 2024",
    description:
      "Designed and implemented high-quality user interfaces using ReactJS. Worked on projects following Figma design guidelines. Collaborated closely with both backend and frontend teams. Optimized frontend templates to enhance performance and efficiency. Applied problem-solving skills to overcome technical challenges.",
    skills: [
      { title: "React", icon: "/svg/react.svg" },
      { title: "Next.js", icon: "/svg/nextdotjs.svg" },
      { title: "TypeScript", icon: "/svg/typescript.svg" },
      { title: "Tailwind CSS", icon: "/svg/tailwindcss.svg" },
      { title: "Shadcn UI", icon: "/svg/shadcnui.svg" },
      { title: "Git", icon: "/svg/git.svg" },
      { title: "MongoDB", icon: "/svg/mongodb.svg" },
      { title: "PostgreSQL", icon: "/svg/postgresql.svg" },
    ],
  },
];

const projects: Experience[] = [
  {
    title: "Appointment booking system",
    company: "Full Stack project",
    location: "Remote",
    date: "Apr 2025 - Present",
    description:
      "Appointment system implementing a user portal and a vendor portal, where appointments can be managed and users can communicate with vendors.",
    skills: [
      { title: "Next.js", icon: "/svg/nextdotjs.svg" },
      { title: "Tailwind CSS", icon: "/svg/tailwindcss.svg" },
      { title: "TypeScript", icon: "/svg/typescript.svg" },
      { title: "NestJS", icon: "/svg/nestjs.svg" },
      { title: "MongoDB", icon: "/svg/mongodb.svg" },
      { title: "Vercel", icon: "/svg/vercel.svg" },
    ],
  },
  {
    title: "Consortium management system",
    company: "Full Stack project",
    location: "Remote",
    date: "Dic 2024 - Mar 2025",
    description:
      "System for managing consortia, tenants, and PDF invoicing. Includes workflows for automating registrations and document downloads.",
    skills: [
      { title: "Next.js", icon: "/svg/nextdotjs.svg" },
      { title: "Tailwind CSS", icon: "/svg/tailwindcss.svg" },
      { title: "TypeScript", icon: "/svg/typescript.svg" },
      { title: "Firebase", icon: "/svg/firebase.svg" },
      { title: "Vercel", icon: "/svg/vercel.svg" },
    ],
  },
  {
    title: "Talent Forge, a course platform",
    company: "Full Stack project",
    location: "Remote",
    date: "June 2023 - August 2023",
    description:
      "I participated in the creation of a web platform based on the purchase and sale of courses in which I gained knowledge in Figma, Git Flow and managed to implement the Mercado Pago payment gateway to make purchases on the web. I was part of the Frontend section directing its web design, declaring the color palette of the platform and distribution of the components and its responsive design. Using for the creation of the same Javascript, MongoDB, ExpressJS, React JS, CSS and Tailwind",
    skills: [
     {title: "Next.js", icon: "/svg/nextdotjs.svg"},
     {title: "Tailwind CSS", icon: "/svg/tailwindcss.svg"},
     {title: "Mercado Pago", icon: "/svg/mercado-pago.svg"},
     {title: "TypeScript", icon: "/svg/typescript.svg"},
     {title: "PostgreSQL", icon: "/svg/postgresql.svg"},
     {title: "Vercel", icon: "/svg/vercel.svg"},
    ],
  },
];

const Experience = () => {
  return (
    <div className="glass-card flex flex-col text-[#3e3e3e] dark:text-white h-96 lg:h-full rounded-2xl overflow-hidden hover:shadow-md hover:shadow-[#3e3e3e] transition-shadow">
      <Tabs defaultValue="tab-1" className="flex flex-col h-full">
        <div className="flex-shrink-0 p-5 lg:px-8 pb-0">
          <TabsList className="w-fit bg-transparent justify-start">
            <TabsTrigger value="tab-1" className="flex items-center gap-1.5">
              <HouseIcon className="opacity-60" size={16} aria-hidden="true" />
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="tab-2"
              className="group flex items-center gap-1.5"
            >
              <PanelsTopLeftIcon
                className="opacity-60"
                size={16}
                aria-hidden="true"
              />
              Projects
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="flex-1 min-h-0 px-5 lg:px-8 pb-5">
          <TabsContent
            value="tab-1"
            className="h-full mt-4 overflow-y-auto styled-scrollbar"
          >
            <div className="h-full flex flex-col">
              <ScrollArea className="flex-1">
                <JobSpace experience={experience} />
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent
            value="tab-2"
            className="h-full mt-4 overflow-y-auto styled-scrollbar"
          >
            <JobSpace experience={projects} />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default Experience;
