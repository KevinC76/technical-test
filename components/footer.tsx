import React from 'react';
import IconButton from './icon';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import Image from 'next/image';

function Footer() {
  return (
    <div className='py-8 bg-white '>
      <div className="text-gray-400 border-t-2 px-4 py-2">
        <a href="#"> Tentang kami</a> | <a href="#">FAQ</a> |
        <a href="#">Syarat & Ketentuan</a> | <a href="#">Kebijakan Privasi</a> |{' '}
        <a href="#">Pusat Bantuan</a>
      </div>

      <div className="flex gap-4 px-4 py-2">
        <IconButton icon={<FaFacebook size={24} />} />
        <IconButton icon={<FaSquareInstagram size={24} />} />
        <IconButton icon={<FaXTwitter size={24} />} />
        <IconButton icon={<FaYoutube size={24} />} />
      </div>

      <div className='px-4'>
        <p>Gunakan Aplikasi Rumah Berkat</p>
        <div className="flex">
          <Image
            width={100}
            height={100}
            src="/pngwing.com.png"
            alt="playstore download"
          />
          <Image
            width={100}
            height={100}
            src="/appstore.png"
            alt="playstore download"
          />
        </div>
        <p>Copyright © 2025 Rumahberkat.com. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
