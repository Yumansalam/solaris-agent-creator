import { Building, Users, Shield } from "lucide-react";

export const About = () => {
  return (
    <div id="about" className="py-20 px-4 md:px-8 bg-gradient-to-b from-solaris-dark to-solaris-dark/90">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Solaris AI
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Empowering businesses with next-generation AI solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-solaris-primary/20">
            <Building className="w-12 h-12 text-solaris-primary mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Enterprise Solutions</h3>
            <p className="text-gray-400">
              Customized AI solutions designed to meet enterprise-level requirements
            </p>
          </div>
          
          <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-solaris-primary/20">
            <Users className="w-12 h-12 text-solaris-primary mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
            <p className="text-gray-400">
              Backed by a team of AI specialists and industry experts
            </p>
          </div>
          
          <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-solaris-primary/20">
            <Shield className="w-12 h-12 text-solaris-primary mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Security First</h3>
            <p className="text-gray-400">
              Enterprise-grade security and compliance measures
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};