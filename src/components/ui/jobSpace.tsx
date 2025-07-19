import type { Job } from "@/lib/types";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";





const jobSpace = ({ experience }: { experience: Job[] }) => {
  return (
    <div className="space-y-4 pr-4">
      {experience.map((exp: Job, index: number) => (
        <div
          key={index}
          className="border border-[#3e3e3e] p-4 lg:p-5 rounded-lg space-y-3"
        >
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2">
            <div className="flex-1">
              <h3 className="font-semibold text-sm lg:text-base leading-tight">
                {exp.title}
              </h3>
              <p className="font-medium text-[#3e3e3e] dark:text-white/90 text-sm">{exp.company}</p>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-2 text-xs lg:text-sm">
              <p className="text-[#858585] italic">{exp.location}</p>
              <p className="text-[#3e3e3e] dark:text-white/80">{exp.date}</p>
            </div>
          </div>

          {/* Descripción */}
          <p className="text-[#858585] text-xs lg:text-sm leading-relaxed">
            {exp.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {exp.skills.map((skill, skillIndex) => (
              <div
                key={skillIndex}
                className="w-6 h-6 lg:w-7 lg:h-7 rounded-md bg-[#3e3e3e] dark:bg-white/5 p-1 flex items-center justify-center"
              >
                <Tooltip>
                    <TooltipTrigger>
                    <img
                  src={skill.icon || "/placeholder.svg"}
                  alt={skill.title}
                  className="w-full h-full object-contain"
                />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{skill.title}</p>
                    </TooltipContent>
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default jobSpace;
