import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed w-full max-w-[430px] bg-[#ffa500] text-white z-50">
      <div className="px-4">
        <div className="flex items-center justify-between h-14">
          {/* ロゴ */}
          <Link href="/" className="block">
            <Image
              src="/toplogo.png"
              alt="u-topia" 
              width={300}
              height={240}
              className="h-12 w-auto"
            />
          </Link>
          {/* コンセプト */}
          <p className="text-sm text-white/90">
            スタッフが輝き、成長し、<br />
            長く働き続けられるサロン
          </p>
        </div>
      </div>
    </header>
  );
}