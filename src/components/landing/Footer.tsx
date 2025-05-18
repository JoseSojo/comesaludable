import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'wouter';

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
              <Link href='#' target='_blank' className="btn btn-circle btn-outline btn-sm">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href='#' target='_blank' className="btn btn-circle btn-outline btn-sm">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href='#' target='_blank' className="btn btn-circle btn-outline btn-sm">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href='#' target='_blank' className="btn btn-circle btn-outline btn-sm">
                <Youtube className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div>
            <span className="footer-title">Enlaces Rápidos</span>
            <Link href='/admin/login' className="link link-hover">Administración</Link>
            <Link href='/search/restaurant' target='_blank' className="link link-hover">Restaurantes</Link>
            <Link href='/search/menus' target='_blank' className="link link-hover">Menus</Link>
            <Link href='#' target='_blank' className="link link-hover"></Link>
          </div>

          <div>
            <span className="footer-title">Support</span>
            <Link href='#' target='_blank' className="link link-hover">Help Center</Link>
            <Link href='#' target='_blank' className="link link-hover">Terms of Service</Link>
            <Link href='#' target='_blank' className="link link-hover">Privacy Policy</Link>
            <Link href='#' target='_blank' className="link link-hover">Contact Us</Link>
          </div>

          <div>
            <span className="footer-title">Contact</span>
            <Link href='#' target='_blank' className="link link-hover flex items-center gap-2">
              <Mail className="w-4 h-4" />
              contact@healthyeats.com
            </Link>
            <Link href='#' target='_blank' className="link link-hover flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +1 (555) 123-4567
            </Link>
            <Link href='#' target='_blank' className="link link-hover flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              123 Health Street, Foodie City
            </Link>
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