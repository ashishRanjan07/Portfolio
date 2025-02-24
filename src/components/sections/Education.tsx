import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { education } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TEducation } from "../../types";
import { config } from "../../constants/config";

const EducationCard: React.FC<TEducation> = (education) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={education.dateRange}
      iconStyle={{ background: education.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={education.icon}
            alt={education.name}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{education.name}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {education.board}
        </p>
      </div>

      <ul className="ml-5 mt-5 list-disc space-y-2">
        {education.description.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 pl-1 text-[14px] tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.education} />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {education.map((experience, index) => (
            <EducationCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
