import LoginForm from "@/components/UI/login-form";
import { FaRegCopyright } from "react-icons/fa6";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="hidden sm:block w-full items-end rounded-lg shadow-md shadow-[#06b6d4] p-3">
          <div>
            <div className="flex flex-row gap-1 mt-20">
              <h1 className="text-3xl font-sans  tracking-tight">
                OBAIDAH <span className="font-bold text-[#06b6d4]">Shop</span>
              </h1>
              <div className="mt-2">
                <FaRegCopyright size={10} />
              </div>
            </div>
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
