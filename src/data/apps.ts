export type App = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: "active" | "beta" | "archived";
  tags: string[];
  links?: { label: string; href: string }[];
};

export const apps: App[] = [
  {
    slug: "printmonitor",
    name: "PrintMonitor",
    tagline: "Real-time printer monitoring for enterprise networks.",
    description:
      "PrintMonitor tracks toner levels, page counts, and printer status across your entire network, with automated alerts before supplies run out. It works with any SNMP-enabled printer, sets up in about 5 minutes, and includes historical usage analytics and multi-location monitoring. A self-hosted proxy architecture keeps printer data on your own network rather than sending it to the cloud.",
    status: "beta",
    tags: ["network-monitoring", "snmp", "self-hosted", "enterprise"],
    links: [{ label: "Visit prntr.org", href: "https://prntr.org/" }],
  },
  {
    slug: "snmp-scanner",
    name: "SNMP Scanner",
    tagline: "Scan your network's SNMP-enabled devices from the command line.",
    description:
      "snmp-scanner concurrently scans a CIDR range for SNMP-enabled devices, detects vendors (Cisco, Juniper, HP/Aruba, MikroTik, and more), and pulls per-interface details, exporting results to JSON or CSV. It ships with a FastAPI backend and a React dashboard for browsing scan results in the browser.",
    status: "beta",
    tags: ["cli", "snmp", "network-scanning", "python"],
    links: [],
  },
];
