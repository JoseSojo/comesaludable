import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="footer p-10">
          <div>
            <span className="footer-title">About Us</span>
            <p className="max-w-xs mt-2">
              Connecting health-conscious diners with nutritionist-approved restaurants for better eating choices.
            </p>
            <div className="flex gap-4 mt-4">
              <a className="btn btn-circle btn-outline btn-sm">
                <Facebook className="w-4 h-4" />
              </a>
              <a className="btn btn-circle btn-outline btn-sm">
                <Twitter className="w-4 h-4" />
              </a>
              <a className="btn btn-circle btn-outline btn-sm">
                <Instagram className="w-4 h-4" />
              </a>
              <a className="btn btn-circle btn-outline btn-sm">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <span className="footer-title">Quick Links</span>
            <a className="link link-hover">Find Restaurants</a>
            <a className="link link-hover">Meet Nutritionists</a>
            <a className="link link-hover">Healthy Menus</a>
            <a className="link link-hover">Join as Restaurant</a>
          </div>

          <div>
            <span className="footer-title">Support</span>
            <a className="link link-hover">Help Center</a>
            <a className="link link-hover">Terms of Service</a>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Contact Us</a>
          </div>

          <div>
            <span className="footer-title">Contact</span>
            <a className="link link-hover flex items-center gap-2">
              <Mail className="w-4 h-4" />
              contact@healthyeats.com
            </a>
            <a className="link link-hover flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +1 (555) 123-4567
            </a>
            <a className="link link-hover flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              123 Health Street, Foodie City
            </a>
          </div>
        </div>

        <div className="footer footer-center p-4 border-t border-base-300">
          <p>© 2025 HealthyEats. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;