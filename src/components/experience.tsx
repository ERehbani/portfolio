import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HomeIcon as HouseIcon, PanelsTopLeftIcon, SquareArrowOutUpRight } from "lucide-react";
import JobSpace from "./ui/jobSpace";
import type { ContentExperience } from "@/lib/types";
import AnimatedStarButton from "./ui/animatedStarButton";

const Experience = ({ content }: { content: ContentExperience }) => {
  return (
    <div className="glass-card flex flex-col text-[#3e3e3e] dark:text-white h-96 lg:h-full rounded-2xl overflow-hidden hover:shadow-md hover:shadow-[#3e3e3e] transition-shadow">
      <Tabs defaultValue="tab-1" className="flex flex-col h-full">
        <div className="shrink-0 p-5 lg:px-8 pb-0 flex items-center">
          <TabsList className="w-fit bg-transparent justify-start items-center z-50">
            <TabsTrigger value="tab-1" className="flex items-center gap-1.5">
              <HouseIcon className="opacity-60" size={16} aria-hidden="true" />
              {content.title}
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
              {content.second_title}
            </TabsTrigger>
          </TabsList>
            <div className="hidden sm:block w-fit  bg-[#393939] rounded-sm">
              <AnimatedStarButton text={content.services_title.title} href={content.services_title.href} />
            </div>
        </div>

        <div className="flex-1 min-h-0 px-3 lg:px-8 pb-5">
          <TabsContent
            value="tab-1"
            className="h-full mt-4 overflow-y-auto styled-scrollbar "
          >
            <div className="h-full flex flex-col">
              <ScrollArea className="flex-1">
                <JobSpace experience={content.jobs} />
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent
            value="tab-2"
            className="h-full mt-4 overflow-y-auto styled-scrollbar"
          >
            <JobSpace experience={content.projects} />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default Experience;
