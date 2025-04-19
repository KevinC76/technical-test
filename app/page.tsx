import IconButton from '@/components/icon';
import { FaGoogle, FaApple } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-w-md max-w-md flex flex-col items-center justify-top bg-white gap-4 p-4 h-screen">
      <h1 className="font-bold">Masuk</h1>
      <div className="flex gap-16">
        <IconButton icon={<FaGoogle size={24} />} />
        <IconButton icon={<FaApple size={24} />} />
      </div>
      <div className="flex items-center w-full max-w-xs gap-4">
        <div className="flex-1 h-px bg-gray-300" />
        <span className="text-sm font-semibold text-gray-500">Atau</span>
        <div className="flex-1 h-px bg-gray-300" />
      </div>
      <div className="w-full">
        <form action="\" className="flex flex-col w-full gap-4">
          <input
            type="text"
            className="border border-gray-400 rounded-md p-2"
            placeholder="Email"
          />
          <input
            type="password"
            className="border border-gray-400 rounded-md p-2"
            placeholder="Password"
          />

          <div className="flex items-end justify-end ">
            <a href="#" className="text-[#17a1fa]">
              Lupa Kata Sandi
            </a>
          </div>

          <button className="w-full bg-[#17a1fa] text-white py-3 rounded-full font-semibold hover:bg-blue-600 transition">
            Masuk
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center">
        <p className="font-medium">
          Belum punya akun?{' '}
          <a href="#" className="text-[#17a1fa]">
            Daftar
          </a>
        </p>
      </div>
    </div>
  );
}
