"use client";

import { DataTable } from "../../table/reusableTable";
import data from "../../../../app/(dashboard)/user/overview/data.json";
import { FilterBar, FilterOption } from "../../table/reusableFilter";
import { useState } from "react";
import { getTourColumns } from "@/utils/table/getTourColumn";
const userFilters: FilterOption[] = [
  {
    key: "searchTerm",
    label: "Search by name/email",
    type: "text",
    enabled: true,
  },
  //   {
  //     key: "role",
  //     label: "Role",
  //     type: "select",
  //     options: [
  //       { value: "all", label: "All" },
  //       { value: role.ADMIN, label: "Admin" },
  //       { value: role.AGENT, label: "Agent" },
  //       { value: role.USER, label: "User" },
  //     ],
  //     enabled: true,
  //   },
];

export default function UserBookingsTable() {
      const [page, setPage] = useState(1);
      const [limit, setLimit] = useState(10);
      const [filters, setFilters] = useState<Record<string, string>>({});
      const [viewOpen, setViewOpen] = useState(false);
      const columns = getTourColumns();
  return (
    <div>
      <FilterBar
        filters={userFilters}
        limit={limit}
        onLimitChange={(newLimit) => {
          setLimit(newLimit);
          setPage(1);
        }}
        onFilterChange={(vals) => {
          const cleaned = { ...vals };
          if (cleaned.role === "all") delete cleaned.role;
          setFilters(cleaned);
          setPage(1);
        }}
      />

      {/* <div className="my-10 flex justify-center items-center">
        <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold">
          All Tours
        </h1>
      </div> */}

      <div className="overflow-x-auto">
        <DataTable
          columns={columns}
          data={data || []}
          meta={{ page, limit, total: 0, totalPage: 1 }}
          onPageChange={setPage}
          onLimitChange={(newLimit) => {
            setLimit(newLimit);
            setPage(1);
          }}
          onSearch={() => {}}
        />
      </div>
    </div>
  );
}
