import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="group fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 
      rounded-full backdrop-blur-md bg-white/70 dark:bg-neutral-900/70 
      border border-neutral-200 dark:border-neutral-800
      text-neutral-700 dark:text-neutral-300
      text-sm font-medium
      transition-all duration-300 hover:scale-[1.03] hover:bg-white dark:hover:bg-neutral-800"
    >
      <ArrowLeft
        size={16}
        className="transition-transform duration-300 group-hover:-translate-x-1"
      />
      Back
    </button>
  );
}
