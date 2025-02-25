import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";
import { Dialog, Tab } from "@headlessui/react";
import { useState } from "react";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image, 
  sourceCodeLink,
  androidImages,
  iosImages,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Android");
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = selectedTab === "Android" ? androidImages : iosImages;

  // const nextImage = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };

  // const prevImage = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  // };


  return (
    <>
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}  onClick={() => setIsOpen(true)}>
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        glareColor="#aaa6c3"
      >
        <div className="bg-tertiary w-full rounded-2xl p-5 sm:w-[300px]">
          <div className="relative h-[230px] w-full">
            <img
              src={image}
              alt={name}
              className="h-full w-full rounded-2xl object-cover"
            />
            <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
              <div
                onClick={() => window.open(sourceCodeLink, "_blank")}
                className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              >
                <img
                  src={github}
                  alt="github"
                  className="h-1/2 w-1/2 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-[24px] font-bold text-white">{name}</h3>
            <p className="text-secondary mt-2 text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
    {/* <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg max-w-lg w-full">
          <Tab.Group selectedIndex={selectedTab === "Android" ? 0 : 1} onChange={(index) => setSelectedTab(index === 0 ? "Android" : "iOS")}>
            <Tab.List className="flex space-x-4 mb-4">
              <Tab className={({ selected }) => `${selected ? "text-blue-600" : "text-gray-600"} py-2 px-4 border-b-2`}>Android</Tab>
              <Tab className={({ selected }) => `${selected ? "text-blue-600" : "text-gray-600"} py-2 px-4 border-b-2`}>iOS</Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <div className="relative flex items-center">
                  <button onClick={prevImage} className="absolute left-0 bg-gray-200 p-2 rounded-full">❮</button>
                  <img src={images[currentIndex]} alt="App Screenshot" className="w-full h-64 object-cover" />
                  <button onClick={nextImage} className="absolute right-0 bg-gray-200 p-2 rounded-full">❯</button>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="relative flex items-center">
                  <button onClick={prevImage} className="absolute left-0 bg-gray-200 p-2 rounded-full">❮</button>
                  <img src={images[currentIndex]} alt="App Screenshot" className="w-full h-64 object-cover" />
                  <button onClick={nextImage} className="absolute right-0 bg-gray-200 p-2 rounded-full">❯</button>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
          <button onClick={() => setIsOpen(false)} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">Close</button>
        </div>
      </Dialog> */}

      {/* Modal */}
<Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
  <div className="bg-white p-6 rounded-lg max-w-2xl w-full">
    <Tab.Group selectedIndex={selectedTab === "Android" ? 0 : 1} onChange={(index) => setSelectedTab(index === 0 ? "Android" : "iOS")}>
      <Tab.List className="flex space-x-4 mb-4">
        <Tab className={({ selected }) => `${selected ? "text-blue-600" : "text-gray-600"} py-2 px-4 border-b-2`}>Android</Tab>
        <Tab className={({ selected }) => `${selected ? "text-blue-600" : "text-gray-600"} py-2 px-4 border-b-2`}>iOS</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <div className="relative flex items-center space-x-2">
            {/* Left Button */}
            <button 
              onClick={() => setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0))} 
              className="absolute left-0 bg-gray-200 p-2 rounded-full"
            >
              ❮
            </button>

            {/* Image Display */}
            <div className="flex w-full overflow-hidden justify-center">
              {images.slice(currentIndex, currentIndex + 3).map((img, index) => (
                <img 
                  key={index} 
                  src={img} 
                  alt="App Screenshot" 
                  className="w-1/3 h-64 object-contain mx-1 rounded-md shadow-md"
                />
              ))}
            </div>

            {/* Right Button */}
            <button 
              onClick={() => setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 3))} 
              className="absolute right-0 bg-gray-200 p-2 rounded-full"
            >
              ❯
            </button>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="relative flex items-center space-x-2">
            {/* Left Button */}
            <button 
              onClick={() => setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0))} 
              className="absolute left-0 bg-gray-200 p-2 rounded-full"
            >
              ❮
            </button>

            {/* Image Display */}
            <div className="flex w-full overflow-hidden justify-center">
              {images.slice(currentIndex, currentIndex + 3).map((img, index) => (
                <img 
                  key={index} 
                  src={img} 
                  alt="App Screenshot" 
                  className="w-1/3 h-64 object-contain mx-1 rounded-md shadow-md"
                />
              ))}
            </div>

            {/* Right Button */}
            <button 
              onClick={() => setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 3))} 
              className="absolute right-0 bg-gray-200 p-2 rounded-full"
            >
              ❯
            </button>
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
    <button onClick={() => setIsOpen(false)} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">Close</button>
  </div>
</Dialog>

    </>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />
      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

    </>
  );
};

export default SectionWrapper(Works, "project");

