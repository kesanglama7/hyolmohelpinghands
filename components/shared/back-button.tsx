"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <button
      onClick={handleBack}
      className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-zinc-700 transition hover:text-zinc-900 bg-white cursor-pointer shadow-md hover:shadow-lg hover:bg-white/85"
    >
      <ArrowLeft className="h-4 w-4" />
      Back
    </button>
  );
}
