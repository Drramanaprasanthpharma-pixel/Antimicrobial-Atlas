"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchBar({
  placeholder = "Search antibiotics, classes or organisms\u2026",
  onSearch,
  large = false,
}: {
  placeholder?: string;
  onSearch?: (value: string) => void;
  large?: boolean;
}) {
  const [value, setValue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch?.(value);
      }}
      className={`glass flex items-center gap-3 rounded-xl px-4 ${large ? "py-4" : "py-2.5"} w-full`}
    >
      <Search className="text-teal shrink-0" size={large ? 22 : 18} />
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onSearch?.(e.target.value);
        }}
        type="text"
        placeholder={placeholder}
        className={`bg-transparent outline-none w-full text-ink-0 placeholder:text-ink-2 ${
          large ? "text-lg" : "text-sm"
        }`}
      />
    </form>
  );
}
