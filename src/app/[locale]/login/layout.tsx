"use client";

const SigninLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex justify-center  min-h-screen w-full sm:mt-40 mt-20">
        <div className="flex flex-col w-[600px]">{children}</div>
      </div>
    </>
  );
};

export default SigninLayout;
