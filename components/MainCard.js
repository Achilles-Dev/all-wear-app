import React from 'react';
import Image from 'next/image';

export default function MainCard({ price, symbol, name, product }) {
  return (
    <div className="flex flex-col w-[386px] h-[444px] p-[16px] gap-5">
      <Image className="w-full h-[330px]" src={product} alt="Item" />
      <div className="text-[#1D1F22] leading-[160%] font-[300] text-[18px]">
        <p className="font-[300]">{name}</p>
        <span className="font-[500]">{symbol}{ price }</span>
      </div>
    </div>
  );
}
