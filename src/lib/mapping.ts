export default (destination: string): string => {
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
