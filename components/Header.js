import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '../assets/a-logo.svg';
import Cart from '../assets/empty_cart.svg';
import DownArrow from '../assets/vector.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const [path, setPath] = useState('')
  const router = useRouter();

  useEffect(() => {
    const { asPath } = router;
    if (asPath.includes('women')) {
      setPath('women')
    } else if (asPath.includes('men')) {
      setPath('men')
    } else if (asPath.includes('kids')) {
      setPath('kids')
    } else {
      setPath('');
    }
  }, [router]);

  return (
    <nav>
      <div className="flex justify-between items-center h-[80px] font-['Raleway'] text-[16px]">
        <ul className="flex gap-[32px] h-full leading-[20px]">
          <li className={`h-full flex items-center pl-4" ${path === 'women' ? 'border-solid border-b-2 border-b-[#5ECE7B]': ''}`}><Link href="/women">WOMEN</Link></li>
          <li className={`h-full flex items-center pl-4" ${path === 'men' ? 'border-solid border-b-2 border-b-[#5ECE7B]': ''}`}><Link href="/men" className={path === 'women' ? 'border-solid border-2': ''}>MEN</Link></li>
          <li className={`h-full flex items-center pl-4" ${path === 'kids' ? 'border-solid border-b-2 border-b-[#5ECE7B]': ''}`}><Link href="/kids" className={path === 'women' ? 'border-solid border-2': ''}>KIDS</Link></li>
        </ul>
        <div>
          <Link href="/"><Image src={Logo} alt="Logo" /></Link>
        </div>
        <div className="flex gap-[22px]">
          <div className="flex gap-2 align-middle">
            <span>$</span>
            <Image src={DownArrow} alt="Arrow Down" />
          </div>
          <Image src={Cart} alt="Cart" />
        </div>
      </div>
    </nav>
  )
};

export default Header;
