const STORAGE_KEYS = {
  guests: "wedding_guests_v2",
  event: "wedding_event_v1"
};

const sampleGuests = [
  {
    "GuestID": "WED-G001",
    "GuestName": "Nissan Swoboda",
    "TableNumber": "01",
    "TableName": "Table 01",
    "GuestType": "VIP",
    "Notes": ""
  },
  {
    "GuestID": "WED-G002",
    "GuestName": "Jacob Swoboda",
    "TableNumber": "01",
    "TableName": "Table 01",
    "GuestType": "VIP",
    "Notes": ""
  },
  {
    "GuestID": "WED-G003",
    "GuestName": "Hilda Clarke",
    "TableNumber": "01",
    "TableName": "Table 01",
    "GuestType": "VIP",
    "Notes": ""
  },
  {
    "GuestID": "WED-G004",
    "GuestName": "Darin Clarke",
    "TableNumber": "01",
    "TableName": "Table 01",
    "GuestType": "VIP",
    "Notes": ""
  },
  {
    "GuestID": "WED-G005",
    "GuestName": "Nishel Futol",
    "TableNumber": "01",
    "TableName": "Table 01",
    "GuestType": "VIP",
    "Notes": ""
  },
  {
    "GuestID": "WED-G006",
    "GuestName": "Maristelle Futol",
    "TableNumber": "01",
    "TableName": "Table 01",
    "GuestType": "VIP",
    "Notes": ""
  },
  {
    "GuestID": "WED-G007",
    "GuestName": "Herflor Colita",
    "TableNumber": "01",
    "TableName": "Table 01",
    "GuestType": "VIP",
    "Notes": ""
  },
  {
    "GuestID": "WED-G008",
    "GuestName": "Hayden Colita",
    "TableNumber": "01",
    "TableName": "Table 01",
    "GuestType": "VIP",
    "Notes": ""
  },
  {
    "GuestID": "WED-G009",
    "GuestName": "Rael Lipao",
    "TableNumber": "01",
    "TableName": "Table 01",
    "GuestType": "VIP",
    "Notes": ""
  },
  {
    "GuestID": "WED-G010",
    "GuestName": "Jakeh Lipao",
    "TableNumber": "01",
    "TableName": "Table 01",
    "GuestType": "VIP",
    "Notes": ""
  },
  {
    "GuestID": "WED-G011",
    "GuestName": "Richie Lipao",
    "TableNumber": "01",
    "TableName": "Table 01",
    "GuestType": "VIP",
    "Notes": ""
  },
  {
    "GuestID": "WED-G012",
    "GuestName": "Vivian Lipao",
    "TableNumber": "01",
    "TableName": "Table 01",
    "GuestType": "VIP",
    "Notes": ""
  },
  {
    "GuestID": "WED-G013",
    "GuestName": "Maddison Lipao",
    "TableNumber": "01",
    "TableName": "Table 01",
    "GuestType": "VIP",
    "Notes": ""
  },
  {
    "GuestID": "WED-G014",
    "GuestName": "Reyniel Lipao",
    "TableNumber": "02",
    "TableName": "Table 02",
    "GuestType": "VIP",
    "Notes": ""
  },
  {
    "GuestID": "WED-G015",
    "GuestName": "Matthew Futol",
    "TableNumber": "02",
    "TableName": "Table 02",
    "GuestType": "VIP",
    "Notes": ""
  },
  {
    "GuestID": "WED-G016",
    "GuestName": "Lot Paje",
    "TableNumber": "02",
    "TableName": "Table 02",
    "GuestType": "VIP",
    "Notes": ""
  },
  {
    "GuestID": "WED-G017",
    "GuestName": "Julie Paje",
    "TableNumber": "02",
    "TableName": "Table 02",
    "GuestType": "VIP",
    "Notes": ""
  },
  {
    "GuestID": "WED-G018",
    "GuestName": "Archie Paje",
    "TableNumber": "02",
    "TableName": "Table 02",
    "GuestType": "VIP",
    "Notes": ""
  },
  {
    "GuestID": "WED-G019",
    "GuestName": "Josana Paje",
    "TableNumber": "02",
    "TableName": "Table 02",
    "GuestType": "VIP",
    "Notes": ""
  },
  {
    "GuestID": "WED-G020",
    "GuestName": "Ezekiel Paje",
    "TableNumber": "02",
    "TableName": "Table 02",
    "GuestType": "VIP",
    "Notes": ""
  },
  {
    "GuestID": "WED-G021",
    "GuestName": "Emma Robidere",
    "TableNumber": "02",
    "TableName": "Table 02",
    "GuestType": "VIP",
    "Notes": ""
  },
  {
    "GuestID": "WED-G022",
    "GuestName": "Gloria Paje",
    "TableNumber": "02",
    "TableName": "Table 02",
    "GuestType": "VIP",
    "Notes": ""
  },
  {
    "GuestID": "WED-G023",
    "GuestName": "Divina Pring",
    "TableNumber": "02",
    "TableName": "Table 02",
    "GuestType": "VIP",
    "Notes": ""
  },
  {
    "GuestID": "WED-G024",
    "GuestName": "Shane Paje",
    "TableNumber": "02",
    "TableName": "Table 02",
    "GuestType": "VIP",
    "Notes": ""
  },
  {
    "GuestID": "WED-G025",
    "GuestName": "Rosario Paje",
    "TableNumber": "03",
    "TableName": "Table 03",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G026",
    "GuestName": "Fides Bisquera",
    "TableNumber": "03",
    "TableName": "Table 03",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G027",
    "GuestName": "Fides's Husband",
    "TableNumber": "03",
    "TableName": "Table 03",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G028",
    "GuestName": "Jayfi Sigua",
    "TableNumber": "03",
    "TableName": "Table 03",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G029",
    "GuestName": "Ephraim Paje",
    "TableNumber": "03",
    "TableName": "Table 03",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G030",
    "GuestName": "Charm Paje",
    "TableNumber": "03",
    "TableName": "Table 03",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G031",
    "GuestName": "Rolando Hernandez",
    "TableNumber": "03",
    "TableName": "Table 03",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G032",
    "GuestName": "Jentzen Hernandez",
    "TableNumber": "03",
    "TableName": "Table 03",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G033",
    "GuestName": "Rolando Paje",
    "TableNumber": "03",
    "TableName": "Table 03",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G034",
    "GuestName": "Elsa Lipao",
    "TableNumber": "04",
    "TableName": "Table 04",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G035",
    "GuestName": "Don2 Lipao",
    "TableNumber": "04",
    "TableName": "Table 04",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G036",
    "GuestName": "Regie Lipao",
    "TableNumber": "04",
    "TableName": "Table 04",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G037",
    "GuestName": "Rhean Lipao",
    "TableNumber": "04",
    "TableName": "Table 04",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G038",
    "GuestName": "Yecko Lipao",
    "TableNumber": "04",
    "TableName": "Table 04",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G039",
    "GuestName": "Warren Lipao",
    "TableNumber": "04",
    "TableName": "Table 04",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G040",
    "GuestName": "Samuel Lipao",
    "TableNumber": "04",
    "TableName": "Table 04",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G041",
    "GuestName": "Nathaniel Lipao",
    "TableNumber": "04",
    "TableName": "Table 04",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G042",
    "GuestName": "Berly Lipao",
    "TableNumber": "04",
    "TableName": "Table 04",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G043",
    "GuestName": "Berlita Avila",
    "TableNumber": "04",
    "TableName": "Table 04",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G044",
    "GuestName": "Leyte Gansiko",
    "TableNumber": "05",
    "TableName": "Table 05",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G045",
    "GuestName": "Paulino Gansiko",
    "TableNumber": "05",
    "TableName": "Table 05",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G046",
    "GuestName": "Paulo Gansiko",
    "TableNumber": "05",
    "TableName": "Table 05",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G047",
    "GuestName": "Marie - Relatives",
    "TableNumber": "05",
    "TableName": "Table 05",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G048",
    "GuestName": "Prince - Relatives",
    "TableNumber": "05",
    "TableName": "Table 05",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G049",
    "GuestName": "Princes - Relatives",
    "TableNumber": "05",
    "TableName": "Table 05",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G050",
    "GuestName": "Des - Relatives",
    "TableNumber": "05",
    "TableName": "Table 05",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G051",
    "GuestName": "Lara - Relatives",
    "TableNumber": "05",
    "TableName": "Table 05",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G052",
    "GuestName": "Jessa - Relatives",
    "TableNumber": "05",
    "TableName": "Table 05",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G053",
    "GuestName": "Jennifer - Relatives",
    "TableNumber": "05",
    "TableName": "Table 05",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G054",
    "GuestName": "Manuel Labaso",
    "TableNumber": "06",
    "TableName": "Table 06",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G055",
    "GuestName": "Warlita Labaso",
    "TableNumber": "06",
    "TableName": "Table 06",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G056",
    "GuestName": "Laica Labaso",
    "TableNumber": "06",
    "TableName": "Table 06",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G057",
    "GuestName": "Lemuel Labaso",
    "TableNumber": "06",
    "TableName": "Table 06",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G058",
    "GuestName": "Nyken Labaso",
    "TableNumber": "06",
    "TableName": "Table 06",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G059",
    "GuestName": "Lovelle Labaso",
    "TableNumber": "06",
    "TableName": "Table 06",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G060",
    "GuestName": "Ephraim Labaso",
    "TableNumber": "06",
    "TableName": "Table 06",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G061",
    "GuestName": "Rex Labaso",
    "TableNumber": "06",
    "TableName": "Table 06",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G062",
    "GuestName": "Eden Labaso",
    "TableNumber": "06",
    "TableName": "Table 06",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G063",
    "GuestName": "Eden Anak",
    "TableNumber": "06",
    "TableName": "Table 06",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G064",
    "GuestName": "Hana Azarcon",
    "TableNumber": "07",
    "TableName": "Table 07",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G065",
    "GuestName": "Saldy Fuentes",
    "TableNumber": "07",
    "TableName": "Table 07",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G066",
    "GuestName": "Pina Fuentes",
    "TableNumber": "07",
    "TableName": "Table 07",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G067",
    "GuestName": "Gloria Torregoza",
    "TableNumber": "07",
    "TableName": "Table 07",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G068",
    "GuestName": "Mira Pacturan",
    "TableNumber": "07",
    "TableName": "Table 07",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G069",
    "GuestName": "Arthur Pacturan",
    "TableNumber": "07",
    "TableName": "Table 07",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G070",
    "GuestName": "Raquel Lago",
    "TableNumber": "07",
    "TableName": "Table 07",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G071",
    "GuestName": "Neliza Nada",
    "TableNumber": "07",
    "TableName": "Table 07",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G072",
    "GuestName": "Elena Damacio",
    "TableNumber": "07",
    "TableName": "Table 07",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G073",
    "GuestName": "Teresa Francas",
    "TableNumber": "08",
    "TableName": "Table 08",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G074",
    "GuestName": "Allan Francas",
    "TableNumber": "08",
    "TableName": "Table 08",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G075",
    "GuestName": "Rosal Parian",
    "TableNumber": "08",
    "TableName": "Table 08",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G076",
    "GuestName": "Roger Parian",
    "TableNumber": "08",
    "TableName": "Table 08",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G077",
    "GuestName": "Rowelyn Maturan",
    "TableNumber": "08",
    "TableName": "Table 08",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G078",
    "GuestName": "Caloy Maturan",
    "TableNumber": "08",
    "TableName": "Table 08",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G079",
    "GuestName": "Daday Lagat",
    "TableNumber": "08",
    "TableName": "Table 08",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G080",
    "GuestName": "Pedro Lagat",
    "TableNumber": "08",
    "TableName": "Table 08",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G081",
    "GuestName": "Hylene Bonita",
    "TableNumber": "08",
    "TableName": "Table 08",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G082",
    "GuestName": "Denton Uriarte",
    "TableNumber": "09",
    "TableName": "Table 09",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G083",
    "GuestName": "Elle Uriarte",
    "TableNumber": "09",
    "TableName": "Table 09",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G084",
    "GuestName": "Lenox Uriarte",
    "TableNumber": "09",
    "TableName": "Table 09",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G085",
    "GuestName": "Khailan Uriarte",
    "TableNumber": "09",
    "TableName": "Table 09",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G086",
    "GuestName": "Princess Uriarte",
    "TableNumber": "09",
    "TableName": "Table 09",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G087",
    "GuestName": "Candy Uriarte",
    "TableNumber": "09",
    "TableName": "Table 09",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G088",
    "GuestName": "Daday Uriarte",
    "TableNumber": "09",
    "TableName": "Table 09",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G089",
    "GuestName": "Raymond Uriarte",
    "TableNumber": "09",
    "TableName": "Table 09",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G090",
    "GuestName": "Gigi - Bacuag",
    "TableNumber": "09",
    "TableName": "Table 09",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G091",
    "GuestName": "Josephine Dejungoy",
    "TableNumber": "09",
    "TableName": "Table 09",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G092",
    "GuestName": "Sammy Cambaya",
    "TableNumber": "10",
    "TableName": "Table 10",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G093",
    "GuestName": "Marry Cambaya",
    "TableNumber": "10",
    "TableName": "Table 10",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G094",
    "GuestName": "Arcely Cordovez",
    "TableNumber": "10",
    "TableName": "Table 10",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G095",
    "GuestName": "Chiko Cambaya",
    "TableNumber": "10",
    "TableName": "Table 10",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G096",
    "GuestName": "Caryl Cambaya",
    "TableNumber": "10",
    "TableName": "Table 10",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G097",
    "GuestName": "Kesvan Cambaya",
    "TableNumber": "10",
    "TableName": "Table 10",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G098",
    "GuestName": "Sam Cambaya",
    "TableNumber": "10",
    "TableName": "Table 10",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G099",
    "GuestName": "Pelarts Cambaya",
    "TableNumber": "10",
    "TableName": "Table 10",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G100",
    "GuestName": "Mary Ann Cambaya",
    "TableNumber": "10",
    "TableName": "Table 10",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G101",
    "GuestName": "Dongkoy Cambaya",
    "TableNumber": "10",
    "TableName": "Table 10",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G102",
    "GuestName": "Kurt Sam Cambaya",
    "TableNumber": "11",
    "TableName": "Table 11",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G103",
    "GuestName": "Daryl Cambaya",
    "TableNumber": "11",
    "TableName": "Table 11",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G104",
    "GuestName": "Analyn Hosenilla",
    "TableNumber": "11",
    "TableName": "Table 11",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G105",
    "GuestName": "Nonoy Hosenilla",
    "TableNumber": "11",
    "TableName": "Table 11",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G106",
    "GuestName": "Kim Hosenilla",
    "TableNumber": "11",
    "TableName": "Table 11",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G107",
    "GuestName": "Kyle Hosenilla",
    "TableNumber": "11",
    "TableName": "Table 11",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G108",
    "GuestName": "Tonny Sayson",
    "TableNumber": "11",
    "TableName": "Table 11",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G109",
    "GuestName": "Carmen Sayson",
    "TableNumber": "11",
    "TableName": "Table 11",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G110",
    "GuestName": "Mariel Jumalon",
    "TableNumber": "11",
    "TableName": "Table 11",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G111",
    "GuestName": "Dysmel Jumalon",
    "TableNumber": "11",
    "TableName": "Table 11",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G112",
    "GuestName": "Marife Beberino",
    "TableNumber": "12",
    "TableName": "Table 12",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G113",
    "GuestName": "Oliver Beberino",
    "TableNumber": "12",
    "TableName": "Table 12",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G114",
    "GuestName": "Joshua Beberino",
    "TableNumber": "12",
    "TableName": "Table 12",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G115",
    "GuestName": "Maria Betonio",
    "TableNumber": "12",
    "TableName": "Table 12",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G116",
    "GuestName": "Joan Wang",
    "TableNumber": "12",
    "TableName": "Table 12",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G117",
    "GuestName": "Haotiu Wang",
    "TableNumber": "12",
    "TableName": "Table 12",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G118",
    "GuestName": "Jonard Gualvez",
    "TableNumber": "12",
    "TableName": "Table 12",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G119",
    "GuestName": "Jaziel Gualvez",
    "TableNumber": "12",
    "TableName": "Table 12",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G120",
    "GuestName": "Flor Jumalon",
    "TableNumber": "12",
    "TableName": "Table 12",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G121",
    "GuestName": "Marino Jumalon",
    "TableNumber": "12",
    "TableName": "Table 12",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G122",
    "GuestName": "Ester Mejala",
    "TableNumber": "13",
    "TableName": "Table 13",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G123",
    "GuestName": "Meme Mejala",
    "TableNumber": "13",
    "TableName": "Table 13",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G124",
    "GuestName": "Patrick Mejala",
    "TableNumber": "13",
    "TableName": "Table 13",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G125",
    "GuestName": "Phoebe Borja",
    "TableNumber": "13",
    "TableName": "Table 13",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G126",
    "GuestName": "Nora - Bacuag",
    "TableNumber": "13",
    "TableName": "Table 13",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G127",
    "GuestName": "Danny - Bacuag",
    "TableNumber": "13",
    "TableName": "Table 13",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G128",
    "GuestName": "Bebeth - Bacuag",
    "TableNumber": "13",
    "TableName": "Table 13",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G129",
    "GuestName": "Elly - Bacuag",
    "TableNumber": "13",
    "TableName": "Table 13",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G130",
    "GuestName": "Bebe Trugillo",
    "TableNumber": "13",
    "TableName": "Table 13",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G131",
    "GuestName": "Mr. Trugillo",
    "TableNumber": "13",
    "TableName": "Table 13",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G132",
    "GuestName": "Nisa - Noguerra",
    "TableNumber": "14",
    "TableName": "Table 14",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G133",
    "GuestName": "David - Noguerra",
    "TableNumber": "14",
    "TableName": "Table 14",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G134",
    "GuestName": "Kezza - Noguerra",
    "TableNumber": "14",
    "TableName": "Table 14",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G135",
    "GuestName": "Pon2 - Diamante",
    "TableNumber": "14",
    "TableName": "Table 14",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G136",
    "GuestName": "Kena - Diamante",
    "TableNumber": "14",
    "TableName": "Table 14",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G137",
    "GuestName": "Jun jun Lisondra",
    "TableNumber": "14",
    "TableName": "Table 14",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G138",
    "GuestName": "Florence Lisondra",
    "TableNumber": "14",
    "TableName": "Table 14",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G139",
    "GuestName": "Neneng Lisondra",
    "TableNumber": "14",
    "TableName": "Table 14",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G140",
    "GuestName": "KC Lisondra",
    "TableNumber": "14",
    "TableName": "Table 14",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G141",
    "GuestName": "Bebe Lisondra",
    "TableNumber": "14",
    "TableName": "Table 14",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G142",
    "GuestName": "Jim - Empleo",
    "TableNumber": "15",
    "TableName": "Table 15",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G143",
    "GuestName": "Phoebe Empleo",
    "TableNumber": "15",
    "TableName": "Table 15",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G144",
    "GuestName": "Marvin Pajuyo",
    "TableNumber": "15",
    "TableName": "Table 15",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G145",
    "GuestName": "Meagan Pajuyo",
    "TableNumber": "15",
    "TableName": "Table 15",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G146",
    "GuestName": "Scott Empleo",
    "TableNumber": "15",
    "TableName": "Table 15",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G147",
    "GuestName": "Jepoy Empleo",
    "TableNumber": "15",
    "TableName": "Table 15",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G148",
    "GuestName": "Jerah Empleo",
    "TableNumber": "15",
    "TableName": "Table 15",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G149",
    "GuestName": "Zee Empleo",
    "TableNumber": "15",
    "TableName": "Table 15",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G150",
    "GuestName": "Zuriel Diaz",
    "TableNumber": "15",
    "TableName": "Table 15",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G151",
    "GuestName": "Melyn Diaz",
    "TableNumber": "15",
    "TableName": "Table 15",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G152",
    "GuestName": "Gladys Caunsag",
    "TableNumber": "16",
    "TableName": "Table 16",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G153",
    "GuestName": "Mark Caunsag",
    "TableNumber": "16",
    "TableName": "Table 16",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G154",
    "GuestName": "Eliz Caunsag",
    "TableNumber": "16",
    "TableName": "Table 16",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G155",
    "GuestName": "Jr Gualvez",
    "TableNumber": "16",
    "TableName": "Table 16",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G156",
    "GuestName": "Jun Ruaya",
    "TableNumber": "16",
    "TableName": "Table 16",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G157",
    "GuestName": "Cla Ruaya",
    "TableNumber": "16",
    "TableName": "Table 16",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G158",
    "GuestName": "Nanay Sumacot",
    "TableNumber": "16",
    "TableName": "Table 16",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G159",
    "GuestName": "Tatay Sumacot",
    "TableNumber": "16",
    "TableName": "Table 16",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G160",
    "GuestName": "Lanie Rucat",
    "TableNumber": "16",
    "TableName": "Table 16",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G161",
    "GuestName": "Ben Rucat",
    "TableNumber": "16",
    "TableName": "Table 16",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G162",
    "GuestName": "Neneng Colita",
    "TableNumber": "17",
    "TableName": "Table 17",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G163",
    "GuestName": "John Colita",
    "TableNumber": "17",
    "TableName": "Table 17",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G164",
    "GuestName": "Salvador Palasan",
    "TableNumber": "17",
    "TableName": "Table 17",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G165",
    "GuestName": "Ruth Palasan",
    "TableNumber": "17",
    "TableName": "Table 17",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G166",
    "GuestName": "Ben Largadas",
    "TableNumber": "17",
    "TableName": "Table 17",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G167",
    "GuestName": "Ester Largadas",
    "TableNumber": "17",
    "TableName": "Table 17",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G168",
    "GuestName": "Eva Pantilo",
    "TableNumber": "17",
    "TableName": "Table 17",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G169",
    "GuestName": "Jan Ubalde",
    "TableNumber": "17",
    "TableName": "Table 17",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G170",
    "GuestName": "Rea Ubalde",
    "TableNumber": "17",
    "TableName": "Table 17",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G171",
    "GuestName": "Milca Labide",
    "TableNumber": "17",
    "TableName": "Table 17",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G172",
    "GuestName": "Elenita Daladar",
    "TableNumber": "18",
    "TableName": "Table 18",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G173",
    "GuestName": "Lorenzo Daladar",
    "TableNumber": "18",
    "TableName": "Table 18",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G174",
    "GuestName": "Len Daladar",
    "TableNumber": "18",
    "TableName": "Table 18",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G175",
    "GuestName": "Neth Pleños",
    "TableNumber": "18",
    "TableName": "Table 18",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G176",
    "GuestName": "Jethro Pleños",
    "TableNumber": "18",
    "TableName": "Table 18",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G177",
    "GuestName": "Pinky Aves",
    "TableNumber": "18",
    "TableName": "Table 18",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G178",
    "GuestName": "Jun Aves",
    "TableNumber": "18",
    "TableName": "Table 18",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G179",
    "GuestName": "Cristina",
    "TableNumber": "18",
    "TableName": "Table 18",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G180",
    "GuestName": "Ninyo Acug",
    "TableNumber": "18",
    "TableName": "Table 18",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G181",
    "GuestName": "Lilit Acug",
    "TableNumber": "18",
    "TableName": "Table 18",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G182",
    "GuestName": "Virgie Basilia",
    "TableNumber": "19",
    "TableName": "Table 19",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G183",
    "GuestName": "Rosenilo Basilia",
    "TableNumber": "19",
    "TableName": "Table 19",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G184",
    "GuestName": "Ginhel Basilia",
    "TableNumber": "19",
    "TableName": "Table 19",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G185",
    "GuestName": "Zaida Maamo",
    "TableNumber": "19",
    "TableName": "Table 19",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G186",
    "GuestName": "Sheila Petallo",
    "TableNumber": "19",
    "TableName": "Table 19",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G187",
    "GuestName": "Eday",
    "TableNumber": "19",
    "TableName": "Table 19",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G188",
    "GuestName": "Randy Sabandal",
    "TableNumber": "19",
    "TableName": "Table 19",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G189",
    "GuestName": "Cheryl Sabandal",
    "TableNumber": "19",
    "TableName": "Table 19",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G190",
    "GuestName": "Juniah Sabandal",
    "TableNumber": "19",
    "TableName": "Table 19",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G191",
    "GuestName": "Jerry Flores",
    "TableNumber": "20",
    "TableName": "Table 20",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G192",
    "GuestName": "Jing2 Flores",
    "TableNumber": "20",
    "TableName": "Table 20",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G193",
    "GuestName": "Joel Caturan",
    "TableNumber": "20",
    "TableName": "Table 20",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G194",
    "GuestName": "Concep Caturan",
    "TableNumber": "20",
    "TableName": "Table 20",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G195",
    "GuestName": "Ana Miñoza",
    "TableNumber": "20",
    "TableName": "Table 20",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G196",
    "GuestName": "Yan yan Duisa",
    "TableNumber": "20",
    "TableName": "Table 20",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G197",
    "GuestName": "Chardy Gulayan",
    "TableNumber": "20",
    "TableName": "Table 20",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G198",
    "GuestName": "Amik Gulayan",
    "TableNumber": "20",
    "TableName": "Table 20",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G199",
    "GuestName": "Glenda - Flores",
    "TableNumber": "20",
    "TableName": "Table 20",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G200",
    "GuestName": "Harold Flores",
    "TableNumber": "20",
    "TableName": "Table 20",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G201",
    "GuestName": "Eric Lipao",
    "TableNumber": "21",
    "TableName": "Table 21",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G202",
    "GuestName": "Beljeh Lipao",
    "TableNumber": "21",
    "TableName": "Table 21",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G203",
    "GuestName": "Grant Lipao",
    "TableNumber": "21",
    "TableName": "Table 21",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G204",
    "GuestName": "Mon mon Lipao",
    "TableNumber": "21",
    "TableName": "Table 21",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G205",
    "GuestName": "Errol Lipao",
    "TableNumber": "21",
    "TableName": "Table 21",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G206",
    "GuestName": "Jetty Lipao",
    "TableNumber": "21",
    "TableName": "Table 21",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G207",
    "GuestName": "Richie Delrosario",
    "TableNumber": "21",
    "TableName": "Table 21",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G208",
    "GuestName": "Felnie Delrosario",
    "TableNumber": "21",
    "TableName": "Table 21",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G209",
    "GuestName": "Tatay Benben",
    "TableNumber": "21",
    "TableName": "Table 21",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G210",
    "GuestName": "Nanay Sabel",
    "TableNumber": "21",
    "TableName": "Table 21",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G211",
    "GuestName": "Rem2 - Zaragoza",
    "TableNumber": "22",
    "TableName": "Table 22",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G212",
    "GuestName": "Carmina",
    "TableNumber": "22",
    "TableName": "Table 22",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G213",
    "GuestName": "Meme Esrupolo",
    "TableNumber": "22",
    "TableName": "Table 22",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G214",
    "GuestName": "Sherilou Esrupolo",
    "TableNumber": "22",
    "TableName": "Table 22",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G215",
    "GuestName": "Eta Monincillo",
    "TableNumber": "22",
    "TableName": "Table 22",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G216",
    "GuestName": "Susan Futol",
    "TableNumber": "22",
    "TableName": "Table 22",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G217",
    "GuestName": "Totsie Futol",
    "TableNumber": "22",
    "TableName": "Table 22",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G218",
    "GuestName": "Nono Futol",
    "TableNumber": "22",
    "TableName": "Table 22",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G219",
    "GuestName": "Jessa Futol",
    "TableNumber": "22",
    "TableName": "Table 22",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G220",
    "GuestName": "Jeward Futol",
    "TableNumber": "22",
    "TableName": "Table 22",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G221",
    "GuestName": "Nenen Aborque",
    "TableNumber": "23",
    "TableName": "Table 23",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G222",
    "GuestName": "Alot",
    "TableNumber": "23",
    "TableName": "Table 23",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G223",
    "GuestName": "Maryann",
    "TableNumber": "23",
    "TableName": "Table 23",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G224",
    "GuestName": "Maryann",
    "TableNumber": "23",
    "TableName": "Table 23",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G225",
    "GuestName": "Maryann",
    "TableNumber": "23",
    "TableName": "Table 23",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G226",
    "GuestName": "Maryann",
    "TableNumber": "23",
    "TableName": "Table 23",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G227",
    "GuestName": "Maryann",
    "TableNumber": "23",
    "TableName": "Table 23",
    "GuestType": "Regular",
    "Notes": ""
  },
  {
    "GuestID": "WED-G228",
    "GuestName": "Jr - Burlasoy",
    "TableNumber": "24",
    "TableName": "Table 24",
    "GuestType": "Burlasoy",
    "Notes": "Paimna Dajon!!"
  },
  {
    "GuestID": "WED-G229",
    "GuestName": "Juniel - Burlasoy",
    "TableNumber": "24",
    "TableName": "Table 24",
    "GuestType": "Burlasoy",
    "Notes": "Paimna Dajon!!"
  },
  {
    "GuestID": "WED-G230",
    "GuestName": "Lester - Burlasoy",
    "TableNumber": "24",
    "TableName": "Table 24",
    "GuestType": "Burlasoy",
    "Notes": "Paimna Dajon!!"
  },
  {
    "GuestID": "WED-G231",
    "GuestName": "Pao - pao - Burlasoy",
    "TableNumber": "24",
    "TableName": "Table 24",
    "GuestType": "Burlasoy",
    "Notes": "Paimna Dajon!!"
  },
  {
    "GuestID": "WED-G232",
    "GuestName": "Jekarls - Burlasoy",
    "TableNumber": "24",
    "TableName": "Table 24",
    "GuestType": "Burlasoy",
    "Notes": "Paimna Dajon!!"
  }
];

let guests = [];
let stream = null;
let detector = null;
let scanning = false;
let lastScan = "";

const els = {
  totalGuests: document.getElementById("totalGuests"),
  checkedInGuests: document.getElementById("checkedInGuests"),
  notArrivedGuests: document.getElementById("notArrivedGuests"),
  totalTables: document.getElementById("totalTables"),
  vipGuests: document.getElementById("vipGuests"),
  scannerPanel: document.getElementById("scannerPanel"),
  searchPanel: document.getElementById("searchPanel"),
  tablesPanel: document.getElementById("tablesPanel"),
  openScannerBtn: document.getElementById("openScannerBtn"),
  openSearchBtn: document.getElementById("openSearchBtn"),
  openTablesBtn: document.getElementById("openTablesBtn"),
  startScannerBtn: document.getElementById("startScannerBtn"),
  stopScannerBtn: document.getElementById("stopScannerBtn"),
  preview: document.getElementById("preview"),
  scannerStatus: document.getElementById("scannerStatus"),
  manualCode: document.getElementById("manualCode"),
  manualLookupBtn: document.getElementById("manualLookupBtn"),
  scanResult: document.getElementById("scanResult"),
  searchInput: document.getElementById("searchInput"),
  searchResults: document.getElementById("searchResults"),
  tableCards: document.getElementById("tableCards"),
  tableGuestList: document.getElementById("tableGuestList"),
  csvFile: document.getElementById("csvFile"),
  loadSampleBtn: document.getElementById("loadSampleBtn"),
  exportCsvBtn: document.getElementById("exportCsvBtn"),
  resetCheckinsBtn: document.getElementById("resetCheckinsBtn"),
  eventTitle: document.getElementById("eventTitle"),
  eventMeta: document.getElementById("eventMeta"),
  eventTitleInput: document.getElementById("eventTitleInput"),
  eventMetaInput: document.getElementById("eventMetaInput"),
  saveEventBtn: document.getElementById("saveEventBtn"),
  offlineStatus: document.getElementById("offlineStatus")
};

function normalize(value) {
  return String(value || "").trim();
}

function saveGuests() {
  localStorage.setItem(STORAGE_KEYS.guests, JSON.stringify(guests));
  renderAll();
}

function loadGuests() {
  const saved = localStorage.getItem(STORAGE_KEYS.guests);
  if (saved) {
    guests = JSON.parse(saved);
  } else {
    guests = sampleGuests.map(g => ({ ...g, CheckedIn: "No", CheckedInAt: "" }));
    saveGuests();
  }
}

function loadEvent() {
  const saved = localStorage.getItem(STORAGE_KEYS.event);
  const event = saved ? JSON.parse(saved) : {
    title: "The Wedding Anniversary of Celebrant One & Celebrant Two",
    meta: "Monday • Venue Name"
  };
  els.eventTitle.textContent = event.title;
  els.eventMeta.textContent = event.meta;
  els.eventTitleInput.value = event.title;
  els.eventMetaInput.value = event.meta;
}

function saveEvent() {
  const event = {
    title: els.eventTitleInput.value || "Wedding Anniversary Guest Check-in",
    meta: els.eventMetaInput.value || "Monday • Venue Name"
  };
  localStorage.setItem(STORAGE_KEYS.event, JSON.stringify(event));
  loadEvent();
}

function showPanel(panel) {
  [els.scannerPanel, els.searchPanel, els.tablesPanel].forEach(p => p.classList.remove("active"));
  panel.classList.add("active");
}

function isCheckedIn(guest) {
  return normalize(guest.CheckedIn).toLowerCase() === "yes";
}

function isVip(guest) {
  const type = normalize(guest.GuestType).toLowerCase();
  const table = normalize(guest.TableName).toLowerCase();
  return type.includes("presidential") || type.includes("vip") || table.includes("presidential");
}

function renderStats() {
  const total = guests.length;
  const checked = guests.filter(isCheckedIn).length;
  const vip = guests.filter(isVip).length;
  const tableCount = new Set(guests.map(g => normalize(g.TableName || g.TableNumber || "No Table"))).size;
  els.totalGuests.textContent = total;
  els.checkedInGuests.textContent = checked;
  els.notArrivedGuests.textContent = total - checked;
  if (els.totalTables) els.totalTables.textContent = tableCount;
  els.vipGuests.textContent = vip;
}

function findGuestByCode(code) {
  const key = normalize(code).toLowerCase();
  return guests.find(g => normalize(g.GuestID).toLowerCase() === key);
}

function resultHTML(guest) {
  const checked = isCheckedIn(guest);
  const vip = isVip(guest);
  return `
    <div class="resultCard ${vip ? "vipResult" : ""}">
      <div class="resultTitle">
        <h3>${vip ? "Presidential / VIP Guest" : "Guest Found"}</h3>
        <span class="badge ${checked ? "checked" : "not"}">${checked ? "Already Checked In" : "Not Checked In"}</span>
      </div>

      <div class="detailGrid">
        <div class="detail"><span>Guest Name</span><strong>${escapeHTML(guest.GuestName)}</strong></div>
        <div class="detail"><span>Assigned Table</span><strong>${escapeHTML(guest.TableName || guest.TableNumber)}</strong></div>
        <div class="detail"><span>Guest ID</span><strong>${escapeHTML(guest.GuestID)}</strong></div>
        <div class="detail"><span>Guest Type</span><strong>${escapeHTML(guest.GuestType || "Regular")}</strong></div>
        <div class="detail"><span>Status</span><strong>${checked ? "Checked in at " + escapeHTML(guest.CheckedInAt || "") : "Not yet arrived"}</strong></div>
        <div class="detail"><span>Notes</span><strong>${escapeHTML(guest.Notes || "-")}</strong></div>
      </div>

      ${vip ? `<p><strong>Instruction:</strong> Please assist or escort this guest personally.</p>` : ""}
      <div class="buttonRow">
        <button onclick="markCheckedIn('${encodeURIComponent(guest.GuestID)}')">${checked ? "Update Check-in Time" : "Mark as Checked In"}</button>
        <button class="ghost" onclick="undoCheckIn('${encodeURIComponent(guest.GuestID)}')">Undo Check-in</button>
      </div>
    </div>
  `;
}

function renderGuestResult(code) {
  const guest = findGuestByCode(code);
  if (!guest) {
    els.scanResult.innerHTML = `
      <div class="resultCard">
        <h3>Guest Not Found</h3>
        <p>No record matched: <strong>${escapeHTML(code)}</strong></p>
        <p>Try manual search by name or check the printed backup list.</p>
      </div>
    `;
    return;
  }
  els.scanResult.innerHTML = resultHTML(guest);
}

window.markCheckedIn = function(encodedId) {
  const id = decodeURIComponent(encodedId);
  const guest = findGuestByCode(id);
  if (!guest) return;
  guest.CheckedIn = "Yes";
  guest.CheckedInAt = new Date().toLocaleString();
  saveGuests();
  renderGuestResult(id);
};

window.undoCheckIn = function(encodedId) {
  const id = decodeURIComponent(encodedId);
  const guest = findGuestByCode(id);
  if (!guest) return;
  guest.CheckedIn = "No";
  guest.CheckedInAt = "";
  saveGuests();
  renderGuestResult(id);
};

function renderSearch() {
  const q = normalize(els.searchInput.value).toLowerCase();
  const filtered = guests.filter(g => {
    const haystack = `${g.GuestID} ${g.GuestName} ${g.TableNumber} ${g.TableName} ${g.GuestType} ${g.Notes}`.toLowerCase();
    return !q || haystack.includes(q);
  }).slice(0, 120);

  els.searchResults.innerHTML = filtered.map(g => `
    <div class="guestCard">
      <div>
        <strong>${escapeHTML(g.GuestName)}</strong><br>
        <span>${escapeHTML(g.GuestID)} • ${escapeHTML(g.TableName || g.TableNumber)} • ${escapeHTML(g.GuestType || "Regular")}</span>
      </div>
      <div>
        <span class="badge ${isCheckedIn(g) ? "checked" : "not"}">${isCheckedIn(g) ? "Checked In" : "Not Arrived"}</span>
        ${isVip(g) ? `<span class="badge vip">VIP</span>` : ""}
        <button onclick="showGuestFromSearch('${encodeURIComponent(g.GuestID)}')">Open</button>
      </div>
    </div>
  `).join("");
}

window.showGuestFromSearch = function(encodedId) {
  const id = decodeURIComponent(encodedId);
  showPanel(els.scannerPanel);
  renderGuestResult(id);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function renderTables() {
  const grouped = {};
  guests.forEach(g => {
    const key = normalize(g.TableName || g.TableNumber || "No Table");
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(g);
  });

  const tableNames = Object.keys(grouped).sort((a, b) => {
    const aVip = a.toLowerCase().includes("presidential") || a.toLowerCase().includes("vip");
    const bVip = b.toLowerCase().includes("presidential") || b.toLowerCase().includes("vip");
    if (aVip !== bVip) return aVip ? -1 : 1;
    const aNum = Number((a.match(/\d+/) || [Infinity])[0]);
    const bNum = Number((b.match(/\d+/) || [Infinity])[0]);
    if (aNum !== bNum) return aNum - bNum;
    return a.localeCompare(b, undefined, { numeric: true });
  });

  els.tableCards.innerHTML = tableNames.map(name => {
    const list = grouped[name];
    const checked = list.filter(isCheckedIn).length;
    const vip = name.toLowerCase().includes("presidential") || list.some(isVip);
    return `
      <div class="tableCard ${vip ? "vipTable" : ""}" onclick="openTable('${encodeURIComponent(name)}')">
        <h3>${escapeHTML(name)}</h3>
        <p>${list.length} assigned guests</p>
        <strong>${checked} checked in</strong><br>
        <span>${list.length - checked} not arrived</span>
      </div>
    `;
  }).join("");
}

window.openTable = function(encodedName) {
  const name = decodeURIComponent(encodedName);
  const list = guests.filter(g => normalize(g.TableName || g.TableNumber || "No Table") === name);
  els.tableGuestList.innerHTML = `
    <div class="resultCard">
      <h3>${escapeHTML(name)}</h3>
      <ul>
        ${list.map(g => `<li>${isCheckedIn(g) ? "✓" : "○"} <strong>${escapeHTML(g.GuestName)}</strong> — ${escapeHTML(g.GuestID)} ${isVip(g) ? '<span class="badge vip">VIP</span>' : ""}</li>`).join("")}
      </ul>
    </div>
  `;
};

function renderAll() {
  renderStats();
  renderSearch();
  renderTables();
}

function escapeHTML(str) {
  return String(str || "").replace(/[&<>"']/g, s => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[s]));
}

function parseCSV(text) {
  const rows = [];
  let current = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"' && inQuotes && next === '"') {
      field += '"';
      i++;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      current.push(field);
      field = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (field || current.length) {
        current.push(field);
        rows.push(current);
      }
      field = "";
      current = [];
      if (char === "\r" && next === "\n") i++;
    } else {
      field += char;
    }
  }
  if (field || current.length) {
    current.push(field);
    rows.push(current);
  }

  const headers = rows.shift().map(h => normalize(h));
  return rows.filter(r => r.some(cell => normalize(cell))).map(row => {
    const obj = {};
    headers.forEach((h, i) => obj[h] = normalize(row[i]));
    return {
      GuestID: obj.GuestID || obj["Guest ID"] || obj.guest_id || obj.ID || obj.Id || obj.id,
      GuestName: obj.GuestName || obj["Guest Name"] || obj.Name || obj.name,
      TableNumber: obj.TableNumber || obj["Table Number"] || obj.Table || obj.table,
      TableName: obj.TableName || obj["Table Name"] || obj.Table || obj.table,
      GuestType: obj.GuestType || obj["Guest Type"] || "Regular",
      Notes: obj.Notes || obj.notes || "",
      CheckedIn: obj.CheckedIn || obj["Checked In"] || "No",
      CheckedInAt: obj.CheckedInAt || obj["Checked In At"] || ""
    };
  }).filter(g => g.GuestID && g.GuestName);
}

async function startScanner() {
  if (!("BarcodeDetector" in window)) {
    els.scannerStatus.textContent = "This browser does not support native offline QR scanning. Use Android Chrome/Edge or use Manual Search.";
    return;
  }

  try {
    detector = new BarcodeDetector({ formats: ["qr_code"] });
    stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment" },
      audio: false
    });
    els.preview.srcObject = stream;
    els.preview.style.display = "block";
    await els.preview.play();
    scanning = true;
    els.scannerStatus.textContent = "Scanner running. Point camera at guest QR code.";
    scanLoop();
  } catch (err) {
    els.scannerStatus.textContent = "Camera could not start. Check HTTPS, camera permission, or use manual search.";
    console.error(err);
  }
}

async function scanLoop() {
  if (!scanning || !detector || !els.preview.videoWidth) {
    if (scanning) requestAnimationFrame(scanLoop);
    return;
  }

  try {
    const codes = await detector.detect(els.preview);
    if (codes.length) {
      const code = codes[0].rawValue;
      if (code && code !== lastScan) {
        lastScan = code;
        renderGuestResult(code);
        els.scannerStatus.textContent = `Scanned: ${code}`;
        setTimeout(() => { lastScan = ""; }, 2200);
      }
    }
  } catch (err) {
    console.error(err);
  }

  if (scanning) requestAnimationFrame(scanLoop);
}

function stopScanner() {
  scanning = false;
  if (stream) {
    stream.getTracks().forEach(track => track.stop());
    stream = null;
  }
  els.preview.style.display = "none";
  els.scannerStatus.textContent = "Scanner stopped.";
}

function exportCSV() {
  const headers = ["GuestID", "GuestName", "TableNumber", "TableName", "GuestType", "Notes", "CheckedIn", "CheckedInAt"];
  const rows = guests.map(g => headers.map(h => csvCell(g[h] || "")));
  const csv = [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `wedding-checkin-export-${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

function csvCell(value) {
  const str = String(value || "");
  return /[",\n]/.test(str) ? `"${str.replace(/"/g, '""')}"` : str;
}

function resetCheckins() {
  if (!confirm("Reset all check-ins? Do this only before final event testing or before actual event start.")) return;
  guests = guests.map(g => ({ ...g, CheckedIn: "No", CheckedInAt: "" }));
  saveGuests();
}

function updateOfflineStatus() {
  const secure = window.isSecureContext ? "Secure camera context" : "Not secure: camera may not work";
  const online = navigator.onLine ? "Online" : "Offline";
  const detectorStatus = ("BarcodeDetector" in window) ? "Scanner supported" : "Native scanner not supported";
  els.offlineStatus.textContent = `${online} • ${secure} • ${detectorStatus}`;
}

function registerSW() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(console.error);
  }
}

els.openScannerBtn.addEventListener("click", () => showPanel(els.scannerPanel));
els.openSearchBtn.addEventListener("click", () => showPanel(els.searchPanel));
els.openTablesBtn.addEventListener("click", () => showPanel(els.tablesPanel));
els.startScannerBtn.addEventListener("click", startScanner);
els.stopScannerBtn.addEventListener("click", stopScanner);
els.manualLookupBtn.addEventListener("click", () => renderGuestResult(els.manualCode.value));
els.manualCode.addEventListener("keydown", e => { if (e.key === "Enter") renderGuestResult(els.manualCode.value); });
els.searchInput.addEventListener("input", renderSearch);
els.loadSampleBtn.addEventListener("click", () => {
  guests = sampleGuests.map(g => ({ ...g, CheckedIn: "No", CheckedInAt: "" }));
  saveGuests();
});
els.csvFile.addEventListener("change", async e => {
  const file = e.target.files[0];
  if (!file) return;
  const text = await file.text();
  const parsed = parseCSV(text);
  if (!parsed.length) {
    alert("No valid guests found. Check your CSV headers.");
    return;
  }
  guests = parsed.map(g => ({ CheckedIn: "No", CheckedInAt: "", ...g }));
  saveGuests();
  alert(`${guests.length} guests imported successfully.`);
});
els.exportCsvBtn.addEventListener("click", exportCSV);
els.resetCheckinsBtn.addEventListener("click", resetCheckins);
els.saveEventBtn.addEventListener("click", saveEvent);
window.addEventListener("online", updateOfflineStatus);
window.addEventListener("offline", updateOfflineStatus);

loadGuests();
loadEvent();
renderAll();
updateOfflineStatus();
registerSW();
