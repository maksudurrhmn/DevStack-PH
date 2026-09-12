import React from 'react';
import FooterLogo from '../assets/logo-text.png';

function Footer() {
  return (
    <footer className="container mx-auto">
      <div className="flex justify-center items-center  py-12">
        <div className="w-1/2">
          <img src={FooterLogo} alt=""></img>
          <p className="py-8 w-[65%] text-[#64748B]">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <ul className="flex gap-6">
            <li>
              <a href="#">GitHub</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <ul className="w-1/3">
            <li className="font-semibold mb-4">
              <a href="">PRODUCT</a>
            </li>
            <li className="mb-2">
              <a className="text-[#64748B]" href="">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a className="text-[#64748B]" href="">
                Technologies
              </a>
            </li>
            <li>
              <a className="text-[#64748B]" href="">
                Projects
              </a>
            </li>
          </ul>
          <ul className="w-1/3">
            <li className="font-semibold mb-4">
              <a href="">COMPANY</a>
            </li>
            <li className="mb-2">
              <a className="text-[#64748B]" href="">
                About
              </a>
            </li>
            <li className="mb-2">
              <a className="text-[#64748B]" href="">
                Contact
              </a>
            </li>
            <li>
              <a className="text-[#64748B]" href="">
                Careers
              </a>
            </li>
          </ul>
          <ul className="w-1/3">
            <li className="font-semibold mb-4">
              <a href="">LEGAL</a>
            </li>
            <li className="mb-2">
              <a className="text-[#64748B]" href="">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="text-[#64748B]" href="">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-8 flex justify-between items-center">
        <p className="text-[#94A3B8]">© 2026 Dev Stack. All rights reserved.</p>
        <ul className="flex justify-center items-center gap-8">
          <li className="text-[#94A3B8] cursor-pointer">Privacy</li>
          <li className="text-[#94A3B8] cursor-pointer">Terms</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
