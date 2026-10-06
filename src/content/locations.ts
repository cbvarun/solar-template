import type { Location } from "@/types/content";

export const locations: Location[] = [
  {
    slug: "hulimavu", name: "Hulimavu", kind: "locality", region: "South Bengaluru", state: "Karnataka",
    intro: "{{companyName}} is based on Hulimavu Lake Road, so Hulimavu and the neighbouring layouts are our home turf for rooftop solar surveys, installation and servicing.",
    highlights: [
      "Mix of independent houses and apartment communities",
      "Quick turnaround for surveys and service visits, since our office is nearby",
      "Net-metering support with BESCOM",
    ],
    nearby: ["bannerghatta-road", "jp-nagar", "btm-layout"],
  },
  {
    slug: "bannerghatta-road", name: "Bannerghatta Road", kind: "locality", region: "South Bengaluru", state: "Karnataka",
    intro: "Bannerghatta Road has many apartment complexes, gated communities and commercial buildings, and a lot of them have unused terraces.",
    highlights: [
      "Common-area systems for apartment associations",
      "Offices and commercial buildings with high daytime load",
      "Roof-access and safety planning for taller buildings",
    ],
    nearby: ["hulimavu", "jp-nagar", "btm-layout", "electronic-city"],
  },
  {
    slug: "jp-nagar", name: "JP Nagar", kind: "locality", region: "South Bengaluru", state: "Karnataka",
    intro: "JP Nagar's established layouts have many independent houses with open terraces, a good fit for home rooftop systems.",
    highlights: [
      "Home systems sized to household bills",
      "Terrace layouts planned around water tanks and staircase mumties",
      "Net-metering support with BESCOM",
    ],
    nearby: ["jayanagar", "hulimavu", "bannerghatta-road"],
  },
  {
    slug: "jayanagar", name: "Jayanagar", kind: "locality", region: "South Bengaluru", state: "Karnataka",
    intro: "Older houses in Jayanagar often have terraces with water tanks, mumties and nearby trees, so a careful shadow study matters before sizing a system.",
    highlights: [
      "Detailed shade analysis before sizing",
      "Structures suited to older RCC roofs",
      "Systems for homes and small commercial buildings",
    ],
    nearby: ["jp-nagar", "btm-layout"],
  },
  {
    slug: "btm-layout", name: "BTM Layout", kind: "locality", region: "South Bengaluru", state: "Karnataka",
    intro: "BTM Layout is dense, with many apartments and compact houses. We design to make the most of limited roof space.",
    highlights: [
      "Compact layouts for small terraces",
      "Common-area systems for apartment buildings",
      "Planning around shade from neighbouring buildings",
    ],
    nearby: ["jayanagar", "hulimavu", "bannerghatta-road", "electronic-city"],
  },
  {
    slug: "electronic-city", name: "Electronic City", kind: "locality", region: "South Bengaluru", state: "Karnataka",
    intro: "Electronic City combines IT campuses, light industry and large residential communities, all with sizeable rooftops.",
    highlights: [
      "Commercial and industrial rooftop systems",
      "Apartment communities with large terraces",
      "Load-based sizing for daytime-heavy users",
    ],
    nearby: ["bannerghatta-road", "btm-layout", "hulimavu"],
  },
  {
    slug: "whitefield", name: "Whitefield", kind: "locality", region: "East Bengaluru", state: "Karnataka",
    intro: "Whitefield has large apartment communities, tech parks and industrial units, all good candidates for rooftop solar.",
    highlights: [
      "Apartment-community and common-area systems",
      "Commercial rooftops with high daytime consumption",
      "Roof-access planning for larger buildings",
    ],
    nearby: ["btm-layout", "electronic-city"],
  },
  {
    slug: "mysuru", name: "Mysuru", kind: "city", region: "Mysuru district", state: "Karnataka",
    intro: "{{companyName}} takes on rooftop solar projects in Mysuru for homes, institutions and businesses.",
    highlights: [
      "Home and villa systems",
      "Institutional and commercial rooftops",
      "Mysuru is served by a different electricity supply company than Bengaluru (CESC Mysore). We handle the application with the right utility.",
    ],
    nearby: ["tumakuru"],
  },
  {
    slug: "tumakuru", name: "Tumakuru", kind: "city", region: "Tumakuru district", state: "Karnataka",
    intro: "Tumakuru's industrial belt and growing residential areas are a good fit for rooftop solar.",
    highlights: [
      "Factory and warehouse rooftops",
      "Home systems in expanding layouts",
      "Survey and installation visits planned in advance",
    ],
    nearby: ["mysuru"],
  },
];
