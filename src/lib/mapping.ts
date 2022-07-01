const lines = {
  green: ["BUR", "ALT"],
  yellow: ["BUR", "PIC"],
  purple: ["ALT", "PIC"],
  "light-blue": ["ECC", "MEC", "ASH"],
};

const getDestinations = (station, line) => {
  return lines[line].filter((lineStation) => lineStation !== station);
};

export const stationPaths = {
  ABM: "abraham-moss",
  ASH: "ashton-under-lyne",
  ALT: "altrincham",
  ECC: "eccles",
  MEC: "mediacityuk",
  NIS: "new-islington",
  MAN: "manchester-airport",
  EDD: "east-didsbury",
  TRC: "the-trafford-centre",
  BUR: "bury",
  RTC: "rochdale-town-centre",
  SHC: "shaw-and-crompton",
  SPS: "st-peters-square",
};

export const getPath = (stationId) => stationPaths[stationId];

const stations = {
  // NIS: {
  //   code: "NIS",
  //   goesTo: ["ASH", "MEC", "ECC"],
  //   name: "New Islington",
  //   path: "new-islington",
  // },
  SPS: {
    code: "SPS",
    goesTo: [
      "ALT",
      "MAN",
      "ECC",
      "MEC",
      "EDD",
      "TRC",
      "BUR",
      "RTC",
      "SHC",
      "ASH",
    ],
    name: "St. Peter's Square",
    path: "st-peters-square",
  },
  // ALT: {
  //   code: "ALT",
  //   goesTo: ["ABM"],
  //   line: ["green", "purple"],
  //   name: "Altrincham",
  //   path: "altrincham",
  // },
};

// const stations = {
//   ABM: {
//     code: "ABM",
//     goesTo: ["ALT"],
//     line: ["green", "yellow"],
//     name: "Abraham Moss",
//     path: "abraham-moss",
//   },
// ALT: {
//   code: "ALT",
//   goesTo: ["ABM"],
//   line: ["green", "purple"],
//   name: "Altrincham",
//   path: "altrincham",
// },
//   ANC: {
//     code: "ANC",
//     goesTo: ["ECC", "MEC", "ASH"],
//     name: "Anchorage",
//     path: "anchorage",
//   },
//   ASM: {
//     code: "ASM",
//     goesTo: ["ECC", "MEC", "ASH"],
//     name: "Ashton Moss",
//     path: "ashton-moss",
//   },
//   ASW: {
//     code: "ASW",
//     goesTo: ["ECC", "MEC", "ASH"],
//     name: "Ashton West",
//     path: "ashton-west",
//   },
//   ASH: {
//     code: "ASH",
//     goesTo: ["ECC", "MEC"],
//     name: "Ashton-Under-Lyne",
//     path: "ashton-under-lyne",
//   },
//   AUD: {
//     code: "AUD",
//     goesTo: ["ECC", "MEC", "ASH"],
//     name: "Audenshaw",
//     path: "audenshaw",
//   },
//   BAG: {
//     code: "BAG",
//     goesTo: ["AIR", "VIC"],
//     name: "Baguley",
//     path: "baguley",
//   },
//   BMR: {
//     code: "BMR",
//     goesTo: ["AIR", "VIC"],
//     name: "Barlow Moor Road",
//     path: "barlow-moor-road",
//   },
//   EVC: {
//     code: "EVC",
//     goesTo: ["TRC", "CNK"],
//     name: "Barton Dock Road",
//     path: "barton-dock-road",
//   },
//   BCH: {
//     code: "BCH",
//     goesTo: ["AIR", "VIC"],
//     name: "Benchill",
//     path: "benchill",
//   },
//   BOB: {
//     code: "BOB",
//     goesTo: ["BUR", "PIC", "ALT"],
//     name: "Besses O’ Th’ Barn",
//     path: "besses-o-th-barn",
//   },
//   BKV: {
//     code: "BKV",
//     goesTo: ["BUR", "PIC", "ALT"],
//     name: "Bowker Vale",
//     path: "bowker-vale",
//   },
//   BDW: {
//     code: "BDW",
//     goesTo: ["ECC", "MEC", "ASH"],
//     name: "Broadway",
//     path: "broadway",
//   },
//   BRK: {
//     code: "BRK",
//     goesTo: ["ALT", "BUR", "PIC"],
//     name: "Brooklands",
//     path: "brooklands",
//   },
//   BRT: {
//     code: "BRT",
//     goesTo: ["EDD", "RTC", "SHC"],
//     name: "Burton Road",
//     path: "burton-road",
//   },
//   BRY: {
//     code: "BRY",
//     goesTo: ["ALT", "PIC"],
//     name: "Bury",
//     path: "bury",
//   },
//   CER: {
//     code: "CER",
//     goesTo: ["ASH", "ECC", "MEC"],
//     name: "Cemetery Road",
//     path: "cemetery-road",
//   },
//   CEP: {
//     code: "CEP",
//     goesTo: ["RCT", "SCH", "EDD"],
//     name: "Central Park",
//     path: "central-park",
//   },
//   CHO: {
//     code: "CHO",
//     name: "Chorlton",
//     path: "chorlton",
//   },
//   CLA: {
//     code: "CLA",
//     goesTo: ["ASH", "MEC", "ECC"],
//     name: "Clayton Hall",
//     path: "clayton-hall",
//   },
//   CNK: {
//     code: "CNK",
//     goesTo: [
//       "ECC",
//       "MEC",
//       "TRC",
//       "ALT",
//       "AIR",
//       "EDD",
//       "BUR",
//       "SCH",
//       "RCT",
//       "ASH",
//       "PIC",
//       "VIC",
//     ],
//     name: "Cornbrook",
//     path: "cornbrook",
//   },
//   CRO: {
//     code: "CRO",
//     goesTo: ["AIR", "VIC"],
//     name: "Crossacres",
//     path: "crossacres",
//   },
//   CRP: {
//     code: "CRP",
//     name: "Crumpsall",
//     path: "crumpsall",
//   },
//   DAN: {
//     code: "DAN",
//     name: "Dane Road",
//     path: "dane-road",
//   },
//   GMX: {
//     code: "GMX",
//     name: "Deansgate - Castlefield",
//     path: "deansgate-castlefield",
//   },
//   DER: {
//     code: "DER",
//     name: "Derker",
//     path: "derker",
//   },
//   DDV: {
//     code: "DDV",
//     name: "Didsbury Village",
//     path: "didsbury-village",
//   },
//   DYL: {
//     code: "DYL",
//     name: "Droylsden",
//     path: "droylsden",
//   },
//   EDD: {
//     code: "EDD",
//     name: "East Didsbury",
//     path: "east-didsbury",
//   },
//   ECC: {
//     code: "ECC",
//     goesTo: ["ASH", "MEC"],
//     name: "Eccles",
//     path: "eccles",
//   },
//   EDL: {
//     code: "EDL",
//     name: "Edge Lane",
//     path: "edge-lane",
//   },
//   SPC: {
//     code: "SPC",
//     name: "Etihad Campus",
//     path: "etihad-campus",
//   },
//   EXQ: {
//     code: "EXQ",
//     name: "Exchange Quay",
//     path: "exchange-quay",
//   },
//   EXS: {
//     code: "EXS",
//     name: "Exchange Square",
//     path: "exchange-square",
//   },
//   FAL: {
//     code: "FAL",
//     name: "Failsworth",
//     path: "failsworth",
//   },
//   FIR: {
//     code: "FIR",
//     name: "Firswood",
//     path: "firswood",
//   },
//   FRE: {
//     code: "FRE",
//     name: "Freehold",
//     path: "freehold",
//   },
//   HBC: {
//     code: "HBC",
//     name: "Harbour City",
//     path: "harbour-city",
//   },
//   HPK: {
//     code: "HPK",
//     name: "Heaton Park",
//     path: "heaton-park",
//   },
//   HOL: {
//     code: "HOL",
//     name: "Hollinwood",
//     path: "hollinwood",
//   },
//   HOT: {
//     code: "HOT",
//     name: "Holt Town",
//     path: "holt-town",
//   },
//   IWM: {
//     code: "IWM",
//     name: "Imperial War Museum",
//     path: "imperial-war-museum",
//   },
//   KIN: {
//     code: "KIN",
//     name: "Kingsway Business Park",
//     path: "kingsway-business-park",
//   },
//   LDW: {
//     code: "LDW",
//     name: "Ladywell",
//     path: "ladywell",
//   },
//   LGW: {
//     code: "LGW",
//     name: "Langworthy",
//     path: "langworthy",
//   },
//   AIR: {
//     code: "AIR",
//     goesTo: ["VIC"],
//     name: "Manchester Airport",
//     path: "manchester-airport",
//   },
//   MKT: {
//     code: "MKT",
//     name: "Market Street",
//     path: "market-street",
//   },
//   MAR: {
//     code: "MAR",
//     name: "Martinscroft",
//     path: "martinscroft",
//   },
//   MEC: {
//     code: "MEC",
//     goesTo: ["ASH", "ECC"],
//     name: "MediacityUK",
//     path: "mediacityuk",
//   },
//   MIL: {
//     code: "MIL",
//     name: "Milnrow",
//     path: "milnrow",
//   },
//   MON: {
//     code: "MON",
//     name: "Monsall",
//     path: "monsall",
//   },
//   MRD: {
//     code: "MRD",
//     name: "Moor Road",
//     path: "moor-road",
//   },
//   NAV: {
//     code: "NAV",
//     name: "Navigation Road",
//     path: "navigation-road",
//   },
//   NIS: {
//     code: "NIS",
//     goesTo: ["ASH", "MEC", "ECC"],
//     name: "New Islington",
//     path: "new-islington",
//   },
//   NEB: {
//     code: "NEB",
//     name: "Newbold",
//     path: "newbold",
//   },
//   NEH: {
//     code: "NEH",
//     name: "Newhey",
//     path: "newhey",
//   },
//   NHM: {
//     code: "NHM",
//     name: "Newton Heath and Moston",
//     path: "newton-heath-and-moston",
//   },
//   NMR: {
//     code: "NMR",
//     name: "Northern Moor",
//     path: "northern-moor",
//   },
//   OLD: {
//     code: "OLD",
//     name: "Old Trafford",
//     path: "old-trafford",
//   },
//   OHC: {
//     code: "OHC",
//     name: "Oldham Central",
//     path: "oldham-central",
//   },
//   OHK: {
//     code: "OHK",
//     name: "Oldham King Street",
//     path: "oldham-king-street",
//   },
//   OHM: {
//     code: "OHM",
//     name: "Oldham Mumps",
//     path: "oldham-mumps",
//   },
//   PAR: {
//     code: "PAR",
//     name: "Parkway",
//     path: "parkway",
//   },
//   PLH: {
//     code: "PLH",
//     name: "Peel Hall",
//     path: "peel-hall",
//   },
//   PIC: {
//     code: "PIC",
//     name: "Piccadilly",
//     path: "piccadilly",
//   },
//   PCG: {
//     code: "PCG",
//     name: "Piccadilly Gardens",
//     path: "piccadilly-gardens",
//   },
//   POM: {
//     code: "POM",
//     name: "Pomona",
//     path: "pomona",
//   },
//   PRS: {
//     code: "PRS",
//     name: "Prestwich",
//     path: "prestwich",
//   },
//   QNS: {
//     code: "QNS",
//     name: "Queens Road",
//     path: "queens-road",
//   },
//   RAD: {
//     code: "RAD",
//     name: "Radcliffe",
//     path: "radcliffe",
//   },
//   RBN: {
//     code: "RBN",
//     name: "Robinswood Road",
//     path: "robinswood-road",
//   },
//   ROC: {
//     code: "ROC",
//     name: "Rochdale Railway Station",
//     path: "rochdale-railway-station",
//   },
//   RTC: {
//     code: "RTC",
//     name: "Rochdale Town Centre",
//     path: "rochdale-town-centre",
//   },
//   RTH: {
//     code: "RTH",
//     name: "Roundthorn",
//     path: "roundthorn",
//   },
//   SAL: {
//     code: "SAL",
//     name: "Sale",
//     path: "sale",
//   },
//   SWP: {
//     code: "SWP",
//     name: "Sale Water Park",
//     path: "sale-water-park",
//   },
//   SFQ: {
//     code: "SFQ",
//     name: "Salford Quays",
//     path: "salford-quays",
//   },
//   SHD: {
//     code: "SHD",
//     name: "Shadowmoss",
//     path: "shadowmoss",
//   },
//   SHC: {
//     code: "SHC",
//     name: "Shaw and Crompton",
//     path: "shaw-and-crompton",
//   },
//   SHL: {
//     code: "SHL",
//     goesTo: ["AIR", "BUR", "ALT", "PIC"],
//     name: "Shudehill",
//     path: "shudehill",
//   },
//   SOC: {
//     code: "SOC",
//     name: "South Chadderton",
//     path: "south-chadderton",
//   },
// SPS: {
//   code: "SPS",
//   name: "St Peter's Square",
//   path: "st-peters-square",
// },
//   SWR: {
//     code: "SWR",
//     name: "St Werburgh’s Road",
//     path: "st-werburghs-road",
//   },
//   STR: {
//     code: "STR",
//     name: "Stretford",
//     path: "stretford",
//   },
//   TRC: {
//     code: "TRC",
//     name: "The Trafford Centre",
//     path: "the-trafford-centre",
//   },
//   TMP: {
//     code: "TMP",
//     name: "Timperley",
//     path: "timperley",
//   },
//   TFB: {
//     code: "TFB",
//     name: "Trafford Bar",
//     path: "trafford-bar",
//   },
//   VEL: {
//     code: "VEL",
//     name: "Velopark",
//     path: "velopark",
//   },
//   VIC: {
//     code: "VIC",
//     name: "Victoria",
//     path: "victoria",
//   },
//   VLG: {
//     code: "VLG",
//     name: "Village",
//     path: "village",
//   },
//   WST: {
//     code: "WST",
//     name: "Weaste",
//     path: "weaste",
//   },
//   WDD: {
//     code: "WDD",
//     name: "West Didsbury",
//     path: "west-didsbury",
//   },
//   WWD: {
//     code: "WWD",
//     name: "Westwood",
//     path: "westwood",
//   },
//   WSD: {
//     code: "WSD",
//     name: "Wharfside",
//     path: "wharfside",
//   },
//   WFD: {
//     code: "WFD",
//     name: "Whitefield",
//     path: "whitefield",
//   },
//   WTH: {
//     code: "WTH",
//     name: "Withington",
//     path: "withington",
//   },
//   WPK: {
//     code: "WPK",
//     name: "Wythenshawe Park",
//     path: "wythenshawe-park",
//   },
//   WYC: {
//     code: "WYC",
//     name: "Wythenshawe Town Centre",
//     path: "wythenshawe-town-centre",
//   },
// };

export const allStations = () => stations;
