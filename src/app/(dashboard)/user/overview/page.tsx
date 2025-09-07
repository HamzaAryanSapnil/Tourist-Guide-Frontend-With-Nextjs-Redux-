import { AppSidebar } from "@/components/app-sidebar";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import data from "./data.json";
import SectionCards from "@/components/section-cards";
import { UserRequestsChart } from "@/components/userChart";
import RecentToursTable from "@/components/modules/dashboard/user/RecentToursTable";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col dark:bg-background bg-muted">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards role="USER" />
          <div className="px-4 lg:px-6">
            {/* <ChartAreaInteractive /> */}
            <UserRequestsChart />
          </div>
          <RecentToursTable />
        </div>
      </div>
    </div>
  );
}
