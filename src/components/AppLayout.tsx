import React from 'react';
import Navigation from './Navigation';
import ProfileImage from './ProfileImage';
import SkillCard from './SkillCard';
import ProjectCard from './ProjectCard';
import ContactForm from './ContactForm';
import { Code, Database, Wrench, Palette, Smartphone, ArrowDown } from 'lucide-react';

const AppLayout: React.FC = () => {
  const skills = [
    {
      icon: <Code />,
      title: 'Front-End',
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'JavaScript (ES6+)']
    },
    {
      icon: <Database />,
      title: 'Back-End',
      skills: ['Node.js', 'Express.js', 'Spring', 'MongoDB', 'REST APIs']
    },
    {
      icon: <Wrench />,
      title: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'SQL']
    },
    {
      icon: <Palette />,
      title: 'Design & UX',
      skills: ['Figma', 'Material UI', 'Design Systems']
    },
    {
      icon: <Smartphone />,
      title: 'Mobile Development',
      skills: ['Android (Java)', 'iOS (Swift/SwiftUI)']
    }
  ];

  const projects = [
    {
      title: 'RentHub',
      description: 'A user-friendly rental platform connecting renters and property owners with seamless booking and payment features.',
      image: '/renthub.jpg',
      tools: 'React, Next.js, Tailwind CSS, Node.js, MongoDB',
      githubUrl: 'https://github.com/Omoruyi92/RentHub',
      liveUrl: 'https://rent-hub-1bac-42x4uuavg-omoruyi-idehens-projects-b78dcd86.vercel.app/'
    },
    {
      title: 'Driving School Application',
      description: 'An integrated online driving school platform including an admin portal, customer interface, and mobile apps for comprehensive driving education.',
      image: '/drivingschool.jpg',
      tools: 'React, Node.js, Express, Firebase, React Native',
      githubUrl: 'https://github.com/Omoruyi92/DrivingSchoolApp',
      liveUrl: 'https://driving-school-app-hazel.vercel.app/'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ProfileImage
            src="/RoadImage.jpeg"
            alt="Omoruyi Idehen"
            size={500}
            className="mx-auto mb-8 animate-fade-in"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 animate-fade-in-up">
            From Ideas to <span className="text-blue-600">Impact</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Hi, I'm Omoruyi Idehen, a passionate Front-End Developer with full-stack experience.
            I specialize in transforming creative designs into engaging, user-friendly experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
          <div className="mt-12 animate-bounce">
            <ArrowDown className="mx-auto text-gray-400" size={24} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">My Story</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I am a passionate Front-End Developer with full-stack experience.
                I love turning designs into delightful user experiences and building scalable, accessible applications.
                My journey started with a strong passion for solving technical problems using a result-oriented approach.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This drive led me to build real-world applications, including a Rent Hub site and a Driving School app using React.js.
                Through these projects, I've developed a solid understanding of building responsive,
                user-friendly interfaces and integrating them with back-end systems to deliver impactful solutions.
              </p>
            </div>
            <ProfileImage
              src="/IMG_4431.JPG"
              alt="Omoruyi Idehen"
              size={300}
              className="mx-auto"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800">Skills & Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <SkillCard
                  key={index}
                  icon={skill.icon}
                  title={skill.title}
                  skills={skill.skills}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Featured Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of the projects I've worked on that showcase my skills and passion for creating impactful solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Let's Work Together</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can work together.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Omoruyi Idehen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;