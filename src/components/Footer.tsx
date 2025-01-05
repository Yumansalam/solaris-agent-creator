import { Mail, Phone, Linkedin, Twitter, Globe, Copyright } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-solaris-dark/95 text-gray-300 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">About Solaris AI</h3>
          <p className="text-sm">
            Pioneering the future of AI solutions with cutting-edge technology and innovative approaches to business automation.
          </p>
        </div>
        
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
          <div className="space-y-2">
            <a href="mailto:contact@solarisai.com" className="flex items-center gap-2 hover:text-solaris-primary">
              <Mail className="w-4 h-4" />
              contact@solarisai.com
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-solaris-primary">
              <Phone className="w-4 h-4" />
              +1 (234) 567-890
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-solaris-primary">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-solaris-primary">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Global Presence</h3>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <span>Operating Worldwide</span>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2">
            <Copyright className="w-4 h-4" />
            <span>{new Date().getFullYear()} Solaris AI. All rights reserved.</span>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-solaris-primary">Privacy Policy</a>
            <a href="#" className="hover:text-solaris-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};