import type { GuideInput } from "@/types/content";

/**
 * Guides (/guides/<slug>/): practical articles for Bengaluru and Karnataka customers.
 * Keep facts sourced and dated: list every source in `sources`, and update `updated`
 * whenever figures change. Loan rates, subsidy amounts and DISCOM rules change often.
 */
export const guides: GuideInput[] = [
  {
    slug: "solar-loan-karnataka",
    title: "Solar loans in Karnataka: PM Surya Ghar bank loans explained",
    seoTitle: "Solar Loans in Karnataka: PM Surya Ghar Rates and How to Apply",
    seoDescription:
      "How to finance rooftop solar in Bengaluru and Karnataka with a PM Surya Ghar bank loan: current SBI rates, margin, tenure, documents and the steps to apply.",
    summary:
      "You can pay for home rooftop solar with a low-interest bank loan under PM Surya Ghar, and the subsidy is paid into the loan account. Here's how the loans work and how to apply.",
    published: "2026-10-24",
    updated: "2026-10-24",
    sections: [
      {
        heading: "The short version",
        body: [
          "Homes installing rooftop solar under the PM Surya Ghar scheme can take a bank loan for the system. Public sector banks offer these loans at concessional rates, and when your subsidy is approved it is credited to the loan account, which brings down what you owe.",
          "You apply in two places: first on the national PM Surya Ghar portal, then for the loan on the government's Jan Samarth portal. The bank pays the installer directly once the required feasibility reports are in.",
        ],
      },
      {
        heading: "Current loan terms: SBI as an example",
        body: [
          "State Bank of India publishes its terms openly, so we use them here. Other public sector banks offer similar loans through Jan Samarth, and their terms can differ. These figures are from SBI's page, last updated 19 October 2026. Rates are floating, so check the current rate before you apply.",
        ],
        table: {
          head: ["", "Loans up to ₹2 lakh", "Loans above ₹2 lakh, up to ₹6 lakh"],
          rows: [
            ["Interest rate (floating)", "6.00% a year (EBLR − 2.15%)", "8.15% a year (EBLR)"],
            ["Credit score", "No minimum CIBIL score", "CIBIL 650 or above"],
            ["PAN", "Optional", "Required"],
            ["Income", "No minimum", "At least ₹3 lakh a year"],
            ["Documents", "KYC and an electricity bill", "KYC, 2 years' ITR or Form 16, 6 months' salary statement, electricity bill"],
          ],
        },
        list: [
          "Margin: you pay at least 10% of the project cost yourself; the loan covers the rest.",
          "Tenure: up to 10 years (120 months), including a 6-month moratorium.",
          "Processing fee: nil. No penalty for paying the loan off early.",
          "Security: the solar system itself is hypothecated to the bank.",
          "Insurance: not required for 1–3 kW systems; required for larger systems, at your cost.",
          "Age: up to 65 (the loan must close before 70), or up to 75 with a co-borrower.",
        ],
      },
      {
        heading: "What would the EMI be?",
        body: [
          "As a rough guide, for every ₹1 lakh borrowed over the full 10 years, the monthly instalment works out to about ₹1,190 at 6.00%, or about ₹1,315 at 8.15%. That assumes interest builds up during the 6-month moratorium and is then repaid over the remaining 114 months.",
          "When the subsidy reaches your loan account, the balance falls, so you repay less overall. Ask the bank how it applies the subsidy: to shorten the loan or to lower the EMI.",
        ],
        note: "These are illustrations, not a quote. The bank's sanction letter gives your exact rate and EMI.",
      },
      {
        heading: "Who can apply",
        list: [
          "Homeowners installing rooftop solar on a residential connection",
          "You must have rights to the roof where the system goes, and enough roof area as the scheme requires",
          "A savings account with the bank and a recent electricity bill",
          "Loans for home systems only; businesses and factories need commercial financing instead",
        ],
      },
      {
        heading: "How to apply, step by step",
        ordered: true,
        list: [
          "Register on the PM Surya Ghar national portal (pmsuryaghar.gov.in) with your electricity consumer number. You'll get an application reference.",
          "Choose a vendor registered on the portal and get feasibility approval from your electricity company: BESCOM in Bengaluru, or CESC in Mysuru.",
          "Apply for the loan on the Jan Samarth portal (jansamarth.in) and pick your bank. You can apply yourself or with help from the bank.",
          "Once the feasibility reports are submitted, the bank pays the vendor directly: the loan amount plus your margin.",
          "The system is installed, the new bidirectional meter is fitted and the electricity company inspects the installation.",
          "Claim the subsidy on the national portal, giving your loan account number so it's credited there.",
        ],
      },
      {
        heading: "Things to check before you sign",
        list: [
          "Your sanctioned load: BESCOM won't approve a system larger than it, so increase the load first if you need to",
          "That the name on your electricity bill matches the applicant; mismatches are a common cause of delays",
          "The vendor's quote lists the exact panels, inverter and warranties",
          "Whether the bank applies the subsidy to the EMI or the loan term",
        ],
      },
      {
        heading: "How we help",
        body: [
          "{{companyName}} designs the system to your bills and terrace, prepares the documents and takes you through the PM Surya Ghar and BESCOM steps, so the loan, the meter and the subsidy line up. Ask us about financing when you request a quote.",
        ],
      },
    ],
    faqs: [
      { question: "Is the solar loan interest rate fixed?", answer: "No. SBI's rooftop solar loans are floating-rate, linked to its External Benchmark Lending Rate (EBLR), so the rate can change over the loan's life." },
      { question: "Can I repay the solar loan early?", answer: "Yes. SBI states there is no pre-payment penalty on these loans." },
      { question: "Do I get the subsidy if I take a loan?", answer: "Yes, if your system and application meet the scheme's rules. The subsidy is claimed on the PM Surya Ghar portal and credited to your loan account." },
      { question: "Who receives the loan money?", answer: "The bank pays the vendor directly, together with your margin, after the required feasibility reports are submitted." },
    ],
    sources: [
      { label: "SBI: Surya Ghar loan for solar rooftop (terms updated 19 Oct 2026)", url: "https://sbi.bank.in/web/personal-banking/loans/pm-surya-ghar-loan-for-solar-roof-top" },
      { label: "PM Surya Ghar: national rooftop solar portal", url: "https://pmsuryaghar.gov.in/" },
      { label: "Jan Samarth: government loan portal", url: "https://www.jansamarth.in/" },
    ],
    related: ["net-metering-subsidy-assistance", "residential-rooftop-solar"],
    relatedGuides: ["solar-subsidy-karnataka", "bescom-net-metering-guide"],
  },
  {
    slug: "bescom-net-metering-guide",
    title: "BESCOM net metering for rooftop solar: a step-by-step guide",
    seoTitle: "BESCOM Net Metering: Step-by-Step Application Guide (2026)",
    seoDescription:
      "How to apply for BESCOM net metering for rooftop solar in Bengaluru: what to check first, documents, each step on the BESCOM portal, and how to avoid delays.",
    summary:
      "Before your rooftop solar can send power to the grid, BESCOM has to approve it, sign an agreement with you and fit a new meter. Here's the whole process, step by step.",
    published: "2026-10-24",
    updated: "2026-10-24",
    sections: [
      {
        heading: "What net metering means",
        body: [
          "With net metering, your solar system powers your home first and sends any surplus to the BESCOM grid. A bidirectional meter records both what you take from the grid and what you send back, and BESCOM bills you on the difference.",
          "BESCOM also offers gross metering, where all the power your system generates is sold to BESCOM at a tariff set by KERC, and your consumption is billed separately. Most homes choose net metering. You pick one when you apply.",
        ],
      },
      {
        heading: "Check these before you apply",
        list: [
          "Your account ID and RR number, from your BESCOM bill",
          "Your sanctioned load: BESCOM's portal won't accept a solar capacity above it, so apply for a load increase first if needed",
          "The name on the bill matches the person applying",
          "Enough shadow-free roof area for the system you want",
          "Aadhaar details and PAN, for e-signing the agreement",
          "An email address and mobile number for OTPs",
        ],
      },
      {
        heading: "The application, step by step",
        ordered: true,
        list: [
          "Register on the PM Surya Ghar national portal. You'll get a registration or application reference code, which BESCOM asks for.",
          "On BESCOM's solar rooftop portal, enter the reference code and your rooftop details: capacity, net or gross metering, panel type (DCR or non-DCR), shadow-free area and location.",
          "Upload your latest electricity bill and the sanction document (each as a PDF under 2 MB), pay the fee and e-sign the Power Purchase Agreement with BESCOM. The agreement runs for 25 years from commissioning.",
          "BESCOM checks technical feasibility. Small home systems can often be cleared online; larger or unusual ones may need a site visit.",
          "Your installer completes the installation and submits the completion details.",
          "BESCOM inspects the installation and fits the bidirectional meter. The system is then commissioned.",
          "If you're eligible, claim the PM Surya Ghar subsidy on the national portal.",
        ],
        note: "In practice your installer usually prepares and files most of this with you. You still e-sign the agreement and approve the details yourself.",
      },
      {
        heading: "How long it takes",
        body: [
          "There's no fixed timeline. It depends on your BESCOM sub-division's workload and how complete your file is. Feasibility usually comes first and quickest; the inspection and meter change is often the slowest stage. A complete, consistent file avoids the delays you can control.",
        ],
      },
      {
        heading: "Common reasons applications get stuck",
        list: [
          "Proposed capacity is higher than the sanctioned load",
          "The bill is in a different name, such as a parent who has passed away or a previous owner",
          "A wrong or inactive account ID",
          "Documents over 2 MB or not in PDF format",
          "Missing installation or completion details from the vendor",
        ],
      },
      {
        heading: "Your agreement and tariff",
        body: [
          "The Power Purchase Agreement you e-sign sets out how BESCOM credits or pays for exported power, using tariffs set by KERC. Tariffs are revised from time to time, and the agreement includes rules for what happens if commissioning is delayed. Read the tariff and capacity on the agreement carefully before you e-sign.",
          "Note that the agreement also states BESCOM isn't liable if power can't be taken during grid outages.",
        ],
      },
      {
        heading: "BESCOM solar helpline",
        body: [
          "For questions about your application, BESCOM's solar rooftop helpline is 080 2234 0816 or 080 2234 0817, and the email is solar_helpdesk@bescom.co.in.",
        ],
      },
      {
        heading: "How we help",
        body: [
          "{{companyName}} prepares your documents, checks your sanctioned load and bill details before anything is filed, and follows the application through BESCOM's feasibility, inspection and meter stages.",
        ],
      },
    ],
    faqs: [
      { question: "Can I install more solar than my sanctioned load?", answer: "No. BESCOM's portal rejects a proposed capacity above your sanctioned load. Apply for a load enhancement first; BESCOM has a fast-track process for this." },
      { question: "Net metering or gross metering: which is better?", answer: "For most homes, net metering, because you use your own solar power first and only the surplus goes to BESCOM. Gross metering sells everything to BESCOM at a KERC tariff and suits fewer cases." },
      { question: "What are DCR panels, and do I need them?", answer: "DCR panels use domestically manufactured cells. The PM Surya Ghar home subsidy requires them, so choose DCR panels if you want the subsidy." },
      { question: "Who files the BESCOM application?", answer: "You can, but your installer usually prepares it with you. You'll still e-sign the agreement yourself." },
    ],
    sources: [
      { label: "BESCOM: Solar rooftop application portal", url: "https://srtpv.bescom.org/SRTPV/national_portal_for_solar_rooftop.jsp" },
      { label: "PM Surya Ghar: national rooftop solar portal", url: "https://pmsuryaghar.gov.in/" },
    ],
    related: ["net-metering-subsidy-assistance", "residential-rooftop-solar", "site-survey-energy-audit"],
    relatedGuides: ["solar-subsidy-karnataka", "solar-loan-karnataka"],
  },
  {
    slug: "5kw-solar-system-cost-bengaluru",
    title: "What a 5 kW solar system costs in Bengaluru, and what decides the price",
    seoTitle: "5 kW Solar System Price in Bangalore: What Decides the Cost",
    seoDescription:
      "What decides the price of a 5 kW rooftop solar system in Bengaluru: panels, inverter, structure and wiring, plus the ₹78,000 subsidy and how to compare quotes.",
    summary:
      "Two 5 kW quotes can differ a lot, and the cheaper one isn't always the better deal. Here's what decides the price, what the subsidy covers and how to compare quotes fairly.",
    published: "2026-10-24",
    updated: "2026-10-24",
    sections: [
      {
        heading: "Why we don't publish a single price",
        body: [
          "A 5 kW system on one Bengaluru terrace can cost noticeably more or less than on the next, because the panels, inverter, structure and wiring all change with the roof and with your choices. A single number online would be wrong for most homes, so we give a written, itemised quote after seeing your terrace and bills.",
          "What we can do is explain exactly what you're paying for, so you can read any quote with confidence.",
        ],
      },
      {
        heading: "What's in a 5 kW system",
        list: [
          "About 10 solar panels of around 550 W each",
          "A 5 kW on-grid inverter (or a hybrid inverter if you want battery backup)",
          "Mounting structure, fixed to your RCC terrace",
          "DC and AC cables, protection devices, earthing and a lightning arrester",
          "BESCOM net-metering paperwork and the bidirectional meter",
          "Installation, commissioning and a monitoring app",
        ],
        note: "A 5 kW system needs about 500 sq ft of shade-free terrace and generates roughly 600 units a month on average in Bengaluru, more in the dry months and less in the monsoon.",
      },
      {
        heading: "What makes the price go up or down",
        table: {
          head: ["Part", "Costs less", "Costs more"],
          rows: [
            ["Panels", "Non-DCR panels, older cell types", "DCR panels (needed for the subsidy), newer high-efficiency cells"],
            ["Inverter", "Standard on-grid inverter", "Premium brands, or a hybrid inverter for batteries"],
            ["Structure", "Low structure on an open terrace", "Elevated structure over a water tank, or to keep the terrace usable"],
            ["Terrace", "Simple, single-level RCC roof", "Split levels, obstructions or difficult access"],
            ["Wiring", "Short run from roof to meter", "Long cable runs down several floors"],
            ["Connection", "Existing three-phase supply", "Single-phase supply that needs a load or phase upgrade first"],
            ["Extras", "Basic package", "Bird-proofing mesh, advanced monitoring, extended warranties or AMC"],
          ],
        },
      },
      {
        heading: "How the subsidy applies to 5 kW",
        body: [
          "Under {{subsidyScheme}}, the central subsidy for homes is ₹30,000 per kW for the first 2 kW and ₹18,000 for the third kW, capped at ₹78,000. A 5 kW home system therefore gets the same ₹78,000 as a 3 kW one.",
          "The subsidy needs DCR panels and a registered vendor, and it's paid into your bank account (or your loan account) after the system is installed and inspected. See our Karnataka subsidy guide for the details.",
        ],
      },
      {
        heading: "How to compare 5 kW quotes",
        list: [
          "Check each quote names the panel and inverter brand, model and wattage. A low price with no models is a warning sign",
          "Compare the same panel type: DCR versus non-DCR changes both the price and your subsidy",
          "Look at the structure: height, material and whether it suits your terrace",
          "Ask who files the BESCOM application and who handles the meter change",
          "Compare warranties: panel performance, inverter and workmanship",
          "Check what after-sales service is included, and the payment schedule",
        ],
      },
      {
        heading: "Paying for it",
        body: [
          "If you're financing the system, PM Surya Ghar bank loans cover home rooftop solar at concessional rates, with the subsidy credited to the loan. Our solar loans guide has current rates and the steps to apply.",
        ],
      },
    ],
    faqs: [
      { question: "Is a 5 kW system worth it over 3 kW?", answer: "If your bill is high or you run several ACs, a pump or plan an EV, often yes. The subsidy is the same for both, so the extra 2 kW is paid in full and earns back through larger savings. We size from your bills, not a package." },
      { question: "Does 5 kW need a three-phase connection?", answer: "Often it does, or a sanctioned-load increase. BESCOM won't approve a system larger than your sanctioned load, so we check this first." },
      { question: "Why do 5 kW quotes vary so much?", answer: "Mainly the panel type (DCR or not), the inverter brand, the structure height and the wiring. Comparing itemised quotes side by side shows where the difference comes from." },
    ],
    sources: [
      { label: "PM Surya Ghar: subsidy amounts (national portal)", url: "https://pmsuryaghar.gov.in/" },
      { label: "BESCOM: Solar rooftop application portal", url: "https://srtpv.bescom.org/SRTPV/national_portal_for_solar_rooftop.jsp" },
    ],
    related: ["residential-rooftop-solar", "site-survey-energy-audit", "net-metering-subsidy-assistance"],
    relatedGuides: ["solar-subsidy-karnataka", "solar-loan-karnataka"],
  },
  {
    slug: "solar-battery-backup-power-cuts-bengaluru",
    title: "Solar with battery backup for Bengaluru power cuts",
    seoTitle: "Solar Battery Backup for Power Cuts in Bengaluru",
    seoDescription:
      "Why standard rooftop solar switches off in a power cut, how hybrid solar with a battery keeps your home running in Bengaluru, and how to size the battery you need.",
    summary:
      "Many people are surprised that ordinary rooftop solar switches off during a power cut. Here's why, and how a hybrid system with a battery keeps your essentials running.",
    published: "2026-10-24",
    updated: "2026-10-24",
    sections: [
      {
        heading: "Why standard solar goes off in a power cut",
        body: [
          "A grid-connected (on-grid) solar system is designed to shut down when the grid fails. This protects line workers repairing the lines, who could otherwise be hurt by power flowing back from your roof. So even on a sunny afternoon, a standard system can't power your home during an outage.",
        ],
      },
      {
        heading: "How a hybrid system keeps the lights on",
        body: [
          "A hybrid system adds a battery and a hybrid inverter. During the day, solar powers your home and charges the battery. When the grid goes down, the inverter switches your essential loads to the battery within moments; with many hybrid inverters the switch is fast enough that lights don't even flicker. When the grid is back, any surplus can still go to BESCOM where net metering allows.",
        ],
        list: [
          "Backup for the circuits you choose: lights, fans, fridge, Wi-Fi, a TV or a work-from-home setup",
          "The battery recharges from solar, not only from the grid",
          "It replaces an old inverter and lead-acid batteries in many homes",
        ],
      },
      {
        heading: "How much battery do you need?",
        body: [
          "Battery size depends on what you want to run and for how long. Add up the power of the essential appliances, multiply by the hours of backup you want, and allow for losses. Here's an example for a typical 4-hour summer power cut.",
        ],
        table: {
          head: ["Appliance", "Power"],
          rows: [
            ["4 ceiling fans (75 W each)", "300 W"],
            ["6 LED lights (10 W each)", "60 W"],
            ["Fridge (average draw)", "100 W"],
            ["Wi-Fi router", "15 W"],
            ["TV", "80 W"],
            ["Total", "555 W"],
          ],
        },
        note: "555 W for 4 hours is about 2.2 kWh. Allowing for inverter losses and how much of the battery can be used, that points to a battery of roughly 3 kWh. ACs, geysers and water pumps need far more, so most homes keep them off the backup circuit.",
      },
      {
        heading: "Lithium (LiFePO₄) or lead-acid?",
        list: [
          "Lithium iron phosphate (LiFePO₄) batteries last many more charge cycles, can use more of their capacity and need no topping up",
          "They're compact and wall-mountable, with no acid fumes",
          "Lead-acid batteries cost less up front but wear out sooner and need maintenance",
        ],
      },
      {
        heading: "Adding a battery to an existing system",
        body: [
          "If you already have on-grid solar, a battery can often be added: either by replacing the inverter with a hybrid one, or by adding a separate battery system. Which works depends on your current inverter, so we check it first.",
        ],
      },
      {
        heading: "Subsidy and costs",
        body: [
          "The {{subsidyScheme}} subsidy applies to the solar part of a grid-connected home system, not to the battery. Battery capacity is the biggest factor in a hybrid system's cost, so sizing it to what you actually need matters.",
        ],
      },
    ],
    faqs: [
      { question: "Will my solar work during a power cut without a battery?", answer: "No. Standard on-grid systems switch off when the grid fails, for safety. You need a hybrid inverter and a battery for backup." },
      { question: "Can a solar battery run my AC?", answer: "It can, but an AC needs a much larger battery and inverter. Most homes back up fans, lights, the fridge and Wi-Fi, and leave the AC on grid power." },
      { question: "Can I keep my old inverter batteries?", answer: "Usually a hybrid system replaces the old inverter and lead-acid batteries. We'll tell you if any of your existing equipment can be reused." },
    ],
    sources: [
      { label: "PM Surya Ghar: national rooftop solar portal", url: "https://pmsuryaghar.gov.in/" },
      { label: "BESCOM: Solar rooftop application portal (net and gross metering)", url: "https://srtpv.bescom.org/SRTPV/national_portal_for_solar_rooftop.jsp" },
    ],
    related: ["hybrid-solar-battery-backup", "residential-rooftop-solar", "solar-repair-troubleshooting"],
    relatedGuides: ["5kw-solar-system-cost-bengaluru"],
  },
  {
    slug: "how-often-clean-solar-panels-bengaluru",
    title: "How often should you clean solar panels in Bengaluru?",
    seoTitle: "How Often to Clean Solar Panels in Bengaluru",
    seoDescription:
      "A season-by-season cleaning schedule for rooftop solar in Bengaluru, how to clean panels safely, avoiding hard-water marks, and when to call a professional.",
    summary:
      "Dust, construction and pigeons make Bengaluru panels dirty faster than you might think. Here's a practical cleaning schedule and how to do it without damaging the panels.",
    published: "2026-10-24",
    updated: "2026-10-24",
    sections: [
      {
        heading: "Why cleaning matters here",
        body: [
          "Bengaluru's dry months coat panels with road dust and fine construction grime, and pigeons love terraces. Dirt on the glass blocks sunlight, so the panels produce less power, often long before they look dirty from the ground.",
          "The easiest way to tell is your monitoring app: if generation drops on clear, sunny days compared with a few weeks earlier, the panels probably need cleaning.",
        ],
      },
      {
        heading: "A cleaning schedule through the year",
        table: {
          head: ["Season", "Months", "How often"],
          rows: [
            ["Dry season", "December to May", "Every 2–4 weeks, more often near busy roads or construction"],
            ["Southwest monsoon", "June to September", "Rain rinses off dust; check monthly and remove bird droppings"],
            ["Northeast monsoon and after", "October to November", "A thorough clean once the rains ease"],
          ],
        },
      },
      {
        heading: "How to clean panels safely yourself",
        ordered: true,
        list: [
          "Clean early in the morning or in the evening, when the glass is cool. Cold water on hot glass can stress it.",
          "Switch the system off at the inverter if your installer recommends it.",
          "Rinse with plain water, then wipe gently with a soft brush or sponge on a long handle.",
          "Don't use detergents, scrubbers, high-pressure jets or hard brushes. They can damage the glass coating and void the warranty.",
          "Never stand or kneel on the panels.",
        ],
        note: "If your water leaves white marks when it dries (common with hard borewell water), use filtered or RO water for the final rinse so you don't leave a mineral film on the glass.",
      },
      {
        heading: "Bird droppings and pigeons",
        body: [
          "Droppings cover individual cells and cut output more than an even layer of dust, so remove them promptly. If pigeons nest under the panels, a bird-proofing mesh around the edge of the array keeps them out and protects the wiring.",
        ],
      },
      {
        heading: "When to call a professional",
        list: [
          "The panels are on a high or hard-to-reach terrace, or near the parapet edge",
          "Generation stays low even after cleaning, which may point to a fault",
          "You'd like cleaning and a system check on a schedule, without remembering it yourself",
        ],
      },
      {
        heading: "How we help",
        body: [
          "{{companyName}}'s cleaning visits include a quick check of the inverter, cables and earthing, and our AMC plans schedule cleaning around Bengaluru's seasons.",
        ],
      },
    ],
    faqs: [
      { question: "Can I clean solar panels with a pressure washer?", answer: "No. High pressure can damage the glass coating and seals, and may void the panel warranty. Use plain water and a soft brush." },
      { question: "Does rain clean solar panels?", answer: "Partly. It rinses loose dust, but not droppings, sticky grime or mineral marks. Panels usually need a proper clean after the monsoon." },
      { question: "How do I know my panels need cleaning?", answer: "Compare your daily generation on clear days in the monitoring app. A steady drop with no change in weather usually means dirt." },
    ],
    related: ["solar-panel-cleaning-maintenance", "annual-maintenance-contract", "solar-repair-troubleshooting"],
    relatedGuides: ["solar-battery-backup-power-cuts-bengaluru"],
  },
  {
    slug: "solar-subsidy-karnataka",
    title: "Solar subsidy in Karnataka: who qualifies and how much you get",
    seoTitle: "Solar Subsidy in Karnataka (2026): Who Qualifies and How Much",
    seoDescription:
      "The PM Surya Ghar rooftop solar subsidy for Karnataka homes: current amounts by system size, who qualifies, the rules for housing societies and how to apply.",
    summary:
      "Karnataka homes can get up to ₹78,000 towards rooftop solar under PM Surya Ghar. Here's how much you get for each system size, who qualifies and how the subsidy is paid.",
    published: "2026-10-24",
    updated: "2026-10-24",
    sections: [
      {
        heading: "How much is the subsidy?",
        body: [
          "The central government's {{subsidyScheme}} scheme gives homes a fixed subsidy (called central financial assistance) based on system size. These are the amounts on the national portal as of October 2026.",
        ],
        table: {
          head: ["System size", "Subsidy"],
          rows: [
            ["1 kW", "₹30,000"],
            ["2 kW", "₹60,000"],
            ["3 kW", "₹78,000"],
            ["Above 3 kW", "₹78,000 (the maximum)"],
          ],
        },
        note: "The rate is ₹30,000 per kW for the first 2 kW and ₹18,000 for the third kW. Capacity above 3 kW doesn't increase the subsidy.",
      },
      {
        heading: "What size suits your home?",
        body: ["The national portal suggests a system size based on your average monthly electricity use:"],
        table: {
          head: ["Average monthly use", "Suggested system"],
          rows: [
            ["0–150 units", "1–2 kW"],
            ["150–300 units", "2–3 kW"],
            ["Above 300 units", "Above 3 kW"],
          ],
        },
      },
      {
        heading: "Who qualifies",
        list: [
          "Residential households with a valid domestic electricity connection, in the applicant's name",
          "You own the house, with a roof suitable for solar panels and enough shadow-free area",
          "You haven't already received a subsidy for rooftop solar under another scheme",
          "The system uses DCR panels (with domestically manufactured cells) and is installed by a vendor registered on the national portal",
          "Commercial and industrial buildings aren't covered by the home subsidy",
        ],
      },
      {
        heading: "Apartments and housing societies",
        body: [
          "Group housing societies and resident welfare associations can get ₹18,000 per kW for systems serving common facilities, such as lifts, pumps, common lighting and EV charging. This is allowed up to 500 kW, at 3 kW per house, and the limit includes any individual systems residents have installed.",
        ],
      },
      {
        heading: "How to apply",
        ordered: true,
        list: [
          "Register on pmsuryaghar.gov.in with your mobile number, then fill in your profile.",
          "Apply for rooftop solar by selecting Karnataka, your district and your electricity company (BESCOM in Bengaluru), and entering your consumer account number.",
          "Choose a registered vendor and get feasibility approval from your electricity company.",
          "Get the system installed. The electricity company inspects it and fits the bidirectional meter.",
          "Submit your bank details (or loan account number) on the portal to receive the subsidy.",
        ],
        note: "The national PM Surya Ghar helpline is 15555 (toll free).",
      },
      {
        heading: "How the subsidy is paid",
        body: [
          "You pay for the system first (or take a loan), and the subsidy is credited after installation and inspection. If you take a PM Surya Ghar bank loan, the subsidy goes into the loan account, reducing what you owe. See our solar loans guide for current loan terms.",
        ],
      },
    ],
    faqs: [
      { question: "Is there an extra Karnataka state subsidy for home solar?", answer: "The central PM Surya Ghar subsidy is the main one for homes. Check the national portal and BESCOM for any current state additions before you apply, as schemes change." },
      { question: "Do I get more subsidy for a 5 kW system?", answer: "No. The home subsidy is capped at ₹78,000 from 3 kW upwards." },
      { question: "Can my business claim this subsidy?", answer: "No. PM Surya Ghar's subsidy is for residential households and housing societies, not commercial or industrial buildings." },
      { question: "Can I choose any installer?", answer: "To get the subsidy, the installer must be a vendor registered on the national portal, and the panels must be DCR." },
    ],
    sources: [
      { label: "PM Surya Ghar: national portal (subsidy amounts, size guide, registration steps)", url: "https://pmsuryaghar.gov.in/" },
      { label: "Government of West Bengal: PM Surya Ghar scheme details (eligibility)", url: "https://wb.gov.in/government-schemes-details-pm-surya-ghar-muft-bijli-yojana-scheme.aspx" },
      { label: "BESCOM: Solar rooftop application portal", url: "https://srtpv.bescom.org/SRTPV/national_portal_for_solar_rooftop.jsp" },
    ],
    related: ["net-metering-subsidy-assistance", "residential-rooftop-solar"],
    relatedGuides: ["solar-loan-karnataka", "bescom-net-metering-guide"],
  },
];
