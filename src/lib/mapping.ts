export const allStations = [
  // "ABM",
  "ALT",
  // "ANC",
  // "ASM",
  // "ASW",
  // "ASH",
  // "AUD",
  // "BAG",
  // "BMR",
  // "EVC",
  // "BCH",
  // "BOB",
  // "BKV",
  // "BDW",
  // "BRK",
  // "BRT",
  // "BRY",
  // "CER",
  // "CEP",
  // "CHO",
  // "CLA",
  // "CNK",
  // "CRO",
  // "CRP",
  // "DAN",
  // "GMX",
  // "DER",
  // "DDV",
  // "DYL",
  // "EDD",
  // "ECC",
  // "EDL",
  // "SPC",
  // "EXQ",
  // "EXS",
  // "FAL",
  // "FIR",
  // "FRE",
  // "HBC",
  // "HPK",
  // "HOL",
  // "HOT",
  // "IWM",
  // "KIN",
  // "LDW",
  // "LGW",
  // "AIR",
  // "MKT",
  // "MAR",
  // "MEC",
  // "MIL",
  // "MON",
  // "MRD",
  // "NAV",
  "NIS",
  // "NEB",
  // "NEH",
  // "NHM",
  // "NMR",
  // "OLD",
  // "OHC",
  // "OHK",
  // "OHM",
  // "PAR",
  // "PLH",
  // "PIC",
  // "PCG",
  // "POM",
  // "PRS",
  // "QNS",
  // "RAD",
  // "RBN",
  // "ROC",
  // "RTC",
  // "RTH",
  // "SAL",
  // "SWP",
  // "SFQ",
  // "SHD",
  // "SHC",
  // "SHL",
  // "SOC",
  "SPS",
  // "SWR",
  // "STR",
  // "TRC",
  // "TMP",
  // "TFB",
  // "VEL",
  // "VIC",
  // "VLG",
  // "WST",
  // "WDD",
  // "WWD",
  // "WSD",
  // "WFD",
  // "WTH",
  // "WPK",
  // "WYC",
];

export const allTerminus = [
  "ECC",
  "AIR",
  "RTC",
  "ALT",
  "ASH",
  "SHC",
  "EDD",
  "TRC",
  "BRY",
  "MEC",
  "PIC",
  "VIC",
];

export const codeToDestination = (destination: string): string => {
  const map = {
    ABM: "Abraham Moss",
    ALT: "Altrincham",
    ANC: "Anchorage",
    ASM: "Ashton Moss",
    ASW: "Ashton West",
    ASH: "Ashton-Under-Lyne",
    AUD: "Audenshaw",
    BAG: "Baguley",
    BMR: "Barlow Moor Road",
    EVC: "Barton Dock Road",
    BCH: "Benchill",
    BOB: "Besses O’ Th’ Barn",
    BKV: "Bowker Vale",
    BDW: "Broadway",
    BRK: "Brooklands",
    BRT: "Burton Road",
    BRY: "Bury",
    CER: "Cemetery Road",
    CEP: "Central Park",
    CHO: "Chorlton",
    CLA: "Clayton Hall",
    CNK: "Cornbrook",
    CRO: "Crossacres",
    CRP: "Crumpsall",
    DAN: "Dane Road",
    GMX: "Deansgate - Castlefield",
    DER: "Derker",
    DDV: "Didsbury Village",
    DYL: "Droylsden",
    EDD: "East Didsbury",
    ECC: "Eccles",
    EDL: "Edge Lane",
    SPC: "Etihad Campus",
    EXQ: "Exchange Quay",
    EXS: "Exchange Square",
    FAL: "Failsworth",
    FIR: "Firswood",
    FRE: "Freehold",
    HBC: "Harbour City",
    HPK: "Heaton Park",
    HOL: "Hollinwood",
    HOT: "Holt Town",
    IWM: "Imperial War Museum",
    KIN: "Kingsway Business Park",
    LDW: "Ladywell",
    LGW: "Langworthy",
    AIR: "Manchester Airport",
    MKT: "Market Street",
    MAR: "Martinscroft",
    MEC: "MediacityUK",
    MIL: "Milnrow",
    MON: "Monsall",
    MRD: "Moor Road",
    NAV: "Navigation Road",
    NIS: "New Islington",
    NEB: "Newbold",
    NEH: "Newhey",
    NHM: "Newton Heath and Moston",
    NMR: "Northern Moor",
    OLD: "Old Trafford",
    OHC: "Oldham Central",
    OHK: "Oldham King Street",
    OHM: "Oldham Mumps",
    PAR: "Parkway",
    PLH: "Peel Hall",
    PIC: "Piccadilly",
    PCG: "Piccadilly Gardens",
    POM: "Pomona",
    PRS: "Prestwich",
    QNS: "Queens Road",
    RAD: "Radcliffe",
    RBN: "Robinswood Road",
    ROC: "Rochdale Railway Station",
    RTC: "Rochdale Town Centre",
    RTH: "Roundthorn",
    SAL: "Sale",
    SWP: "Sale Water Park",
    SFQ: "Salford Quays",
    SHD: "Shadowmoss",
    SHC: "Shaw and Crompton",
    SHL: "Shudehill",
    SOC: "South Chadderton",
    SPS: "St. Peter's Square",
    SWR: "St Werburgh’s Road",
    STR: "Stretford",
    TRC: "The Trafford Centre",
    TMP: "Timperley",
    TFB: "Trafford Bar",
    VEL: "Velopark",
    VIC: "Victoria",
    VLG: "Village",
    WST: "Weaste",
    WDD: "West Didsbury",
    WWD: "Westwood",
    WSD: "Wharfside",
    WFD: "Whitefield",
    WTH: "Withington",
    WPK: "Wythenshawe Park",
    WYC: "Wythenshawe Town Centre",
  };
  return map[destination] || "";
};

export const destinationToCode = (destination: string): string => {
  const map = {
    "Abraham Moss": "ABM",
    Altrincham: "ALT",
    Anchorage: "ANC",
    "Ashton Moss": "ASM",
    "Ashton West": "ASW",
    "Ashton-Under-Lyne": "ASH",
    Audenshaw: "AUD",
    Baguley: "BAG",
    "Barlow Moor Road": "BMR",
    "Barton Dock Road": "EVC",
    Benchill: "BCH",
    "Besses O’ Th’ Barn": "BOB",
    "Bowker Vale": "BKV",
    Broadway: "BDW",
    Brooklands: "BRK",
    "Burton Road": "BRT",
    Bury: "BRY",
    "Cemetery Road": "CER",
    "Central Park": "CEP",
    Chorlton: "CHO",
    "Clayton Hall": "CLA",
    Cornbrook: "CNK",
    Crossacres: "CRO",
    Crumpsall: "CRP",
    "Dane Road": "DAN",
    "Deansgate - Castlefield": "GMX",
    Derker: "DER",
    "Didsbury Village": "DDV",
    Droylsden: "DYL",
    "East Didsbury": "EDD",
    Eccles: "ECC",
    "Edge Lane": "EDL",
    "Etihad Campus": "SPC",
    "Exchange Quay": "EXQ",
    "Exchange Square": "EXS",
    Failsworth: "FAL",
    Firswood: "FIR",
    Freehold: "FRE",
    "Harbour City": "HBC",
    "Heaton Park": "HPK",
    Hollinwood: "HOL",
    "Holt Town": "HOT",
    "Imperial War Museum": "IWM",
    "Kingsway Business Park": "KIN",
    Ladywell: "LDW",
    Langworthy: "LGW",
    "Manchester Airport": "AIR",
    "Market Street": "MKT",
    Martinscroft: "MAR",
    MediacityUK: "MEC",
    Milnrow: "MIL",
    Monsall: "MON",
    "Moor Road": "MRD",
    "Navigation Road": "NAV",
    "New Islington": "NIS",
    Newbold: "NEB",
    Newhey: "NEH",
    "Newton Heath and Moston": "NHM",
    "Northern Moor": "NMR",
    "Old Trafford": "OLD",
    "Oldham Central": "OHC",
    "Oldham King Street": "OHK",
    "Oldham Mumps": "OHM",
    Parkway: "PAR",
    "Peel Hall": "PLH",
    Piccadilly: "PIC",
    "Piccadilly Gardens": "PCG",
    Pomona: "POM",
    Prestwich: "PRS",
    "Queens Road": "QNS",
    Radcliffe: "RAD",
    "Robinswood Road": "RBN",
    "Rochdale Railway Station": "ROC",
    "Rochdale Town Centre": "RTC",
    Roundthorn: "RTH",
    Sale: "SAL",
    "Sale Water Park": "SWP",
    "Salford Quays": "SFQ",
    Shadowmoss: "SHD",
    "Shaw and Crompton": "SHC",
    Shudehill: "SHL",
    "South Chadderton": "SOC",
    "St. Peter's Square": "SPS",
    "St Werburgh’s Road": "SWR",
    Stretford: "STR",
    "The Trafford Centre": "TRC",
    Timperley: "TMP",
    "Trafford Bar": "TFB",
    Velopark: "VEL",
    Victoria: "VIC",
    Village: "VLG",
    Weaste: "WST",
    "West Didsbury": "WDD",
    Westwood: "WWD",
    Wharfside: "WSD",
    Whitefield: "WFD",
    Withington: "WTH",
    "Wythenshawe Park": "WPK",
    "Wythenshawe Town Centre": "WYC",
  };
  return map[destination] || "";
};

export const stationCodeToPath = (code) => {
  const map = {
    ABM: "abraham-moss",
    ALT: "altrincham",
    ANC: "anchorage",
    ASM: "ashton-moss",
    ASW: "ashton-west",
    ASH: "ashton-under-lyne",
    AUD: "audenshaw",
    BAG: "baguley",
    BMR: "barlow-moor-road",
    EVC: "barton-dock-road",
    BCH: "benchill",
    BOB: "besses-o-th-barn",
    BKV: "bowker-vale",
    BDW: "broadway",
    BRK: "brooklands",
    BRT: "burton-road",
    BRY: "bury",
    CER: "cemetery-road",
    CEP: "central-park",
    CHO: "chorlton",
    CLA: "clayton-hall",
    CNK: "cornbrook",
    CRO: "crossacres",
    CRP: "crumpsall",
    DAN: "dane-road",
    GMX: "deansgate-castlefield",
    DER: "derker",
    DDV: "didsbury-village",
    DYL: "droylsden",
    EDD: "east-didsbury",
    ECC: "eccles",
    EDL: "edge-lane",
    SPC: "etihad-campus",
    EXQ: "exchange-quay",
    EXS: "exchange-square",
    FAL: "failsworth",
    FIR: "firswood",
    FRE: "freehold",
    HBC: "harbour-city",
    HPK: "heaton-park",
    HOL: "hollinwood",
    HOT: "holt-town",
    IWM: "imperial-war-museum",
    KIN: "kingsway-business-park",
    LDW: "ladywell",
    LGW: "langworthy",
    AIR: "manchester-airport",
    MKT: "market-street",
    MAR: "martinscroft",
    MEC: "mediacityuk",
    MIL: "milnrow",
    MON: "monsall",
    MRD: "moor-road",
    NAV: "navigation-road",
    NIS: "new-islington",
    NEB: "newbold",
    NEH: "newhey",
    NHM: "newton-heath-and-moston",
    NMR: "northern-moor",
    OLD: "old-trafford",
    OHC: "oldham-central",
    OHK: "oldham-king-street",
    OHM: "oldham-mumps",
    PAR: "parkway",
    PLH: "peel-hall",
    PIC: "piccadilly",
    PCG: "piccadilly-gardens",
    POM: "pomona",
    PRS: "prestwich",
    QNS: "queens-road",
    RAD: "radcliffe",
    RBN: "robinswood-road",
    ROC: "rochdale-railway-station",
    RTC: "rochdale-town-centre",
    RTH: "roundthorn",
    SAL: "sale",
    SWP: "sale-water-park",
    SFQ: "salford-quays",
    SHD: "shadowmoss",
    SHC: "shaw-and-crompton",
    SHL: "shudehill",
    SOC: "south-chadderton",
    SPS: "st-peters-square",
    SWR: "st-werburghs-road",
    STR: "stretford",
    TRC: "the-trafford-centre",
    TMP: "timperley",
    TFB: "trafford-bar",
    VEL: "velopark",
    VIC: "victoria",
    VLG: "village",
    WST: "weaste",
    WDD: "west-didsbury",
    WWD: "westwood",
    WSD: "wharfside",
    WFD: "whitefield",
    WTH: "withington",
    WPK: "wythenshawe-park",
    WYC: "wythenshawe-town-centre",
  };
  return map[code];
};

// export const getPath = (stationId) => stationPaths[stationId];

// const stations = {
//   ABM: {
//     code: "ABM",
//     goesTo: ["ALT"],
//     line: ["green", "yellow"],
//     name: "Abraham Moss",
//     path: "abraham-moss",
//   },
//   ALT: {
//     code: "ALT",
//     goesTo: ["ABM"],
//     line: ["green", "purple"],
//     name: "Altrincham",
//     path: "altrincham",
//   },
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
//     goesTo: [
//       "ALT",
//       "MAN",
//       "ECC",
//       "MEC",
//       "EDD",
//       "TRC",
//       "BUR",
//       "RTC",
//       "SHC",
//       "ASH",
//     ],
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
//     goesTo: allTerminus,
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
//     goesTo: [
//       "ALT",
//       "MAN",
//       "ECC",
//       "MEC",
//       "EDD",
//       "TRC",
//       "BUR",
//       "RTC",
//       "SHC",
//       "ASH",
//     ],
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
//   SPS: {
//     code: "SPS",
//     goesTo: [
//       "ALT",
//       "MAN",
//       "ECC",
//       "MEC",
//       "EDD",
//       "TRC",
//       "BUR",
//       "RTC",
//       "SHC",
//       "ASH",
//     ],
//     name: "St. Peter's Square",
//     path: "st-peters-square",
//   },
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
//     goesTo: ["BUR", "SHC", "RTC", "PIC", "MAN", "ALT", "EDD"],
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
