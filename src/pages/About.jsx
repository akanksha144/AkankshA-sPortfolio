import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import {  skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Akanksha
        </span>{" "}
        👋
      </h1>

      <div className='mt-3 flex flex-col gap-1 text-slate-500'>
        <p>
          An experienced Developer, specializing in technical
          education through hands-on learning and building applications.
        </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Experience</h3>
        <div className='mt-8 flex flex-wrap gap-8'>
        I am a highly skilled and motivated Developer with experience in web development and web designing. 
        I have worked as a Frontend Developer at TATA Consultancy Services, Noida, where I utilized my skills 
        in HTML, CSS, Javascript, Tailwind, Jquery, typescript, webful APIs, JSON, github and many other technologies to develop and implement front-end and software functionalities. 
        I was responsible for designing responsive web layouts, improving user experience, integrating, unit testing and debugging.
         I worked with cross-functional teams to deliver high-quality web solutions meeting client requirements. My 
         work at TATA Consultancy Services has provided me with valuable experience and expertise in web development.
          </div>
          </div>

      <div className='py-3 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-8 flex flex-wrap gap-8'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;