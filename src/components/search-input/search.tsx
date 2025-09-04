"use client";

import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";

function Search({id}: {id: string}) {
  return (
    <>
      <Input
        id={id}
        className="peer h-8 ps-8 pe-2"
        placeholder="Search..."
        type="search"
        aria-label="Search"
      />
      <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 peer-disabled:opacity-50">
        <SearchIcon size={16} />
      </div>
    </>
  );
}

export default Search;
