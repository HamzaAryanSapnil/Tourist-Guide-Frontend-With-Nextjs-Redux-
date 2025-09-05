export default function Logo() {
  return (
    <div className="flex justify-center items-center gap-x-2" >
      <i>
        <img src="/assets/icons/logo.svg" alt="logo" className="w-10 h-10" />
      </i>
      <span className="font-bold text-2xl hidden md:block" >Tourvisto</span>
    </div>
  );
}
