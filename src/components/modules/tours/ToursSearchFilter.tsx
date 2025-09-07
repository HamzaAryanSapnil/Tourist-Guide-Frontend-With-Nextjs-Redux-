"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ToursSearchFilter() {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("all");

  const handleSearch = () => {
    // এখানে আপনার API call বা filter logic বসাতে পারেন
    console.log("Search Text:", searchText);
    console.log("Category:", category);
  };

  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4 my-6">
      {/* Search Input */}
      <div className="flex-1">
        <Input
          type="text"
          placeholder="Search tours by location or name..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full"
        />
      </div>

      {/* Category Select */}
      <div className="w-full md:w-60">
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="adventure">Adventure</SelectItem>
            <SelectItem value="beach">Beach</SelectItem>
            <SelectItem value="cultural">Cultural</SelectItem>
            <SelectItem value="wildlife">Wildlife</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Search Button */}
      <div>
        <Button
          variant="default"
          className="w-full md:w-auto"
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
    </div>
  );
}
