/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ColumnDef } from "@tanstack/react-table";

export const getTourColumns = (): ColumnDef<any>[] => [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "division",
    header: "Division",
  },
  {
    accessorKey: "tourType",
    header: "Type",
  },
  {
    accessorKey: "costFrom",
    header: "Cost From",
    cell: ({ row }) => `৳ ${row.original.costFrom.toLocaleString()}`,
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
    cell: ({ row }) =>
      new Date(row.original.startDate).toLocaleDateString("en-GB"),
  },
  {
    accessorKey: "endDate",
    header: "End Date",
    cell: ({ row }) =>
      new Date(row.original.endDate).toLocaleDateString("en-GB"),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <button
        className="px-2 py-1 text-sm bg-blue-500 text-white rounded"
        onClick={() => alert(`View tour: ${row.original.title}`)}
      >
        View
      </button>
    ),
  },
];
