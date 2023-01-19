import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dropdown } from '@nextui-org/react';
import { useRouter } from 'next/router';
import Logo from '../assets/a-logo.svg';
import Cart from '../assets/empty_cart.svg';
import DownArrow from '../assets/vector.svg';

const Header = () => {
  const [path, setPath] = useState('');
  const [symbol, setSymbol] = useState(<span className="text-slate-900">&#36;</span>)
  const router = useRouter();

  useEffect(() => {
    const { asPath } = router;
    if (asPath.includes('women')) {
      setPath('women');
    } else if (asPath.includes('men')) {
      setPath('men');
    } else if (asPath.includes('kids')) {
      setPath('kids');
    } else {
      setPath('');
    }
  }, [router]);

  const handleSymbol = (e) => {
    if (e === 'EUR') {
      setSymbol(<span className="text-slate-900">&#8364;</span>)
    } else if (e == 'JPY') {
      setSymbol(<span className="text-slate-900">&#165;</span>)
    } else {
      setSymbol(<span className="text-slate-900">&#36;</span>)
    }
  }

  return (
    <nav>
      <div className="flex justify-between items-center h-[80px] font-['Raleway'] text-[16px]">
        <ul className="flex gap-[16px] h-full leading-[20px]">
          <li className={`h-full flex items-center px-2 ${path === 'women' ? 'border-solid border-b-2 border-b-[#5ECE7B]' : ''}`}><Link href="/women">WOMEN</Link></li>
          <li className={`h-full flex items-center px-2 ${path === 'men' ? 'border-solid border-b-2 border-b-[#5ECE7B]' : ''}`}><Link href="/men">MEN</Link></li>
          <li className={`h-full flex items-center px-2 ${path === 'kids' ? 'border-solid border-b-2 border-b-[#5ECE7B]' : ''}`}><Link href="/kids">KIDS</Link></li>
        </ul>
        <div>
          <Link href="/"><Image src={Logo} alt="Logo" /></Link>
        </div>
        <div className="flex gap-[22px]">
          <Dropdown>
            <Dropdown.Button className="px-0">
            <div className="flex gap-2 align-middle">
              {symbol}
              <Image src={DownArrow} alt="Arrow Down" />
            </div>
            </Dropdown.Button>
            <Dropdown.Menu className="font-['Raleway'] text-[16px]" color="secondary" onAction={(e) => handleSymbol(e)}>
              <Dropdown.Item key="USD" className="text-slate-900 hover:bg-[#EEEEEE] focus:bg-[#EEEEEE]">&#36; USD</Dropdown.Item>
              <Dropdown.Item key="EUR" className="text-slate-900 hover:bg-[#EEEEEE] focus:bg-[#EEEEEE]">&#8364; EUR</Dropdown.Item>
              <Dropdown.Item key="JPY" className="text-slate-900 hover:bg-[#EEEEEE] focus:bg-[#EEEEEE]">&#165; JPY</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Image src={Cart} alt="Cart" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
