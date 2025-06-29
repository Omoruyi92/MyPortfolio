import React from 'react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills }) => {
  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-sm border border-blue-300/30 p-6 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-blue-50/20 group">
      <div className="text-3xl text-blue-600 mb-3 group-hover:text-blue-700 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <ul className="space-y-1">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-700 flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 opacity-70"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;