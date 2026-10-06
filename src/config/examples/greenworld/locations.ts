import type { Location } from "@/types/content";

export const locations: Location[] = [
  {
    slug: "kalambukad", name: "Kalambukad and Kallara", kind: "locality", region: "Kottayam district", state: "Kerala",
    intro: "{{companyName}} is based in Kalambukad, so Kalambukad, South Kallara and the villages around them are our home turf for surveys, installation and servicing.",
    highlights: ["Homes with tile, RCC and sheet roofs", "Quick turnaround for surveys and service visits from a nearby base", "KSEB net-metering support"],
    nearby: ["kottayam"],
  },
  {
    slug: "kottayam", name: "Kottayam", kind: "city", region: "Kottayam district", state: "Kerala",
    intro: "Kottayam town and its surroundings have many independent houses with tiled and flat roofs, plus shops, hospitals and institutions.",
    highlights: ["Home systems for tile and RCC roofs", "Rooftops for shops, clinics and institutions", "KSEB net-metering support"],
    nearby: ["kalambukad", "pathanamthitta", "alappuzha", "idukki"],
  },
  {
    slug: "ernakulam", name: "Ernakulam", kind: "district", region: "Ernakulam district", state: "Kerala",
    intro: "Ernakulam district has apartments, offices and industrial units well suited to rooftop solar.",
    highlights: ["Apartment and commercial rooftops", "Industrial units with large roof area", "Roof-access planning for taller buildings"],
    nearby: ["alappuzha", "kottayam"],
  },
  {
    slug: "alappuzha", name: "Alappuzha", kind: "district", region: "Alappuzha district", state: "Kerala",
    intro: "Alappuzha's coastal air is humid and salty, so structure materials and coatings matter as much as panel choice.",
    highlights: ["Corrosion-resistant structures and fasteners", "Systems for homes, resorts and small businesses", "Regular cleaning to remove salt deposits"],
    nearby: ["kottayam", "ernakulam"],
  },
  {
    slug: "idukki", name: "Idukki", kind: "district", region: "Idukki district", state: "Kerala",
    intro: "Idukki's hilly terrain affects roof orientation, shading and site access, so we plan each visit carefully.",
    highlights: ["Careful shade study for hillside plots", "Planning for transport and access to remote sites", "Home, homestay and resort systems"],
    nearby: ["kottayam", "pathanamthitta"],
  },
  {
    slug: "pathanamthitta", name: "Pathanamthitta", kind: "district", region: "Pathanamthitta district", state: "Kerala",
    intro: "Pathanamthitta has many large homes and institutions, often with sloped tile roofs that need the right mounting approach.",
    highlights: ["Mounting for sloped tile roofs", "Homes and institutions with large roof area", "KSEB net-metering support"],
    nearby: ["kottayam", "idukki", "alappuzha"],
  },
];
