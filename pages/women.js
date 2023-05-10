import MainCard from '../components/MainCard';
import ProductD from '../assets/Product D.png';
import ProductA from '../assets/Product A.png';
import ProductB from '../assets/Product B.png';
import ProductC from '../assets/Product C.png';

export default function Women({ symbol }) {
  return (
    <div>
      <h1 className="text-[42px] font-[400] text-[#1D1F22] leading-relaxed">Women</h1>
      <div className="mt-[88px] flex gap-[40px] flex-wrap">
        <MainCard price={50.00} symbol={symbol} name="Apollo Running Short" product={ProductD} />
        <MainCard price={50.00} symbol={symbol} name="Apollo Running Short" product={ProductB} />
        <MainCard price={50.00} symbol={symbol} name="Apollo Running Short" product={ProductC} />
        <MainCard price={50.00} symbol={symbol} name="Apollo Running Short" product={ProductA} />
        <MainCard price={50.00} symbol={symbol} name="Apollo Running Short" product={ProductD} />
        <MainCard price={50.00} symbol={symbol} name="Apollo Running Short" product={ProductC} />
      </div>
    </div>
  );
}
