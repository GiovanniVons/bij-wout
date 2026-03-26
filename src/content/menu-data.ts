export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  tags?: string[];
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

/* ────────────────────────────────────────────────────────
   Wouts Favorietjes (bar snacks / borrel)
   ──────────────────────────────────────────────────────── */

export const favorietjes: MenuItem[] = [
  { name: "Rookvlees", description: "Slagerij Ketelaars | pompoen-crème", price: "5,35" },
  { name: "Garnalen kroket", description: "de Bourgondiër | citroenmayonaise", price: "5,35" },
  { name: "Jackfruit", description: "witte kool", price: "5,35", tags: ["V"] },
  { name: "Krabsalade", description: "augurk | little gem", price: "5,35" },
  { name: "Köfte", description: "crispy chili yoghurt", price: "5,35", tags: ["V"] },
  { name: "Moersmidden gehaktbrood", description: "Slagerij Ketelaars | piccalilly", price: "5,35" },
  { name: "Reijrink", description: "gerookte paling | dragonmayonaise | little gem", price: "5,35" },
  { name: "Gerookte zalm", description: "bieslookroomkaas | wasabimayonaise | little gem", price: "5,35" },
  { name: "Rundvlees kroket", description: "de Bourgondiër | mayonaise en/of mosterd", price: "5,35" },
  { name: "Krokante kaas", description: "de Bourgondiër | mango chutney", price: "5,35", tags: ["V"] },
  { name: "Carpaccio", description: "truffelmayonaise | zongedroogde tomaat | pijnboompitten | kappertjes | rode ui | Parmezaanse kaas", price: "5,35" },
];

/* ────────────────────────────────────────────────────────
   Lunch
   ──────────────────────────────────────────────────────── */

export const lunchMenu: MenuCategory[] = [
  {
    title: "Huisgemaakte Soepen",
    items: [
      { name: "Tomatensoep", description: "gehaktballetjes | prei | room", price: "7,00" },
      { name: "Maandsoep", price: "7,00" },
      { name: "Klein kopje soep", description: "bij favorietjes", price: "3,50" },
    ],
  },
  {
    title: "Tosti's",
    items: [
      { name: "Tosti", description: "ham | kaas", price: "7,50" },
      { name: "Boerentosti", description: "ham | kaas | bacon | champignons | rode ui | spiegelei", price: "11,50" },
    ],
  },
  {
    title: "Specials",
    items: [
      { name: "Pinsa warme beenham", description: "gebakken uien | mosterdsaus | little gem", price: "14,50" },
      { name: "Quiche Lorraine", description: "kaas | prei | spekjes | crème fraîche", price: "14,50" },
    ],
  },
  {
    title: "Klassiekers",
    items: [
      { name: "Knoflookgamba's", description: "10 stuks | licht pikante roomsaus | bosui | stokbrood", price: "16,00" },
      { name: "Gèsselse uitsmijter met 3 eieren", description: "opties: ham | kaas | spek (prijs per beleg 1.50)", price: "9,00" },
      { name: "Club gerookte kip", description: "van Slagerij Ketelaars | bacon | kaas | eiersalade | tomaat | komkommer", price: "14,50" },
      { name: "Boterham voor de kleintjes", description: "vraag wat voor lekkers we in huis hebben", price: "3,00" },
    ],
  },
  {
    title: "Salades",
    items: [
      { name: "Köfte", description: "krokante kikkererwten | rode ui | crispy chili yoghurt", price: "17,50", tags: ["V"] },
      { name: "Vis", description: "gerookte zalm | krabsalade | gamba's | paprika | bosui | cocktailsaus", price: "23,00" },
      { name: "Carpaccio", description: "truffelmayonaise | zongedroogde tomaat | pijnboompitten | kappertjes | rode ui | Parmezaanse kaas", price: "19,00" },
    ],
  },
];

/* ────────────────────────────────────────────────────────
   Wisselgerechten (rotating weekly specials)
   ──────────────────────────────────────────────────────── */

export const wisselgerechten: MenuCategory[] = [
  {
    title: "Maandsoep",
    items: [
      { name: "Spinazie-knoflooksoep", description: "ei", price: "7,00" },
    ],
  },
  {
    title: "Voorgerecht",
    items: [
      { name: "Sushi sandwich", description: "ceviche van makreel | sojagel | grapefruit", price: "13,50" },
    ],
  },
  {
    title: "Hoofdgerecht",
    items: [
      { name: "Kalfs rib-eye", description: "zwarte knoflookroomsaus", price: "29,50" },
    ],
  },
  {
    title: "Seizoensvis",
    items: [
      { name: "Doradefilet", description: "kerrie-roomsaus", price: "25,50" },
    ],
  },
  {
    title: "Nagerecht",
    items: [
      { name: "Slofje", description: "rode vodka-mascarpone crème | rood fruit", price: "8,00" },
    ],
  },
];

/* ────────────────────────────────────────────────────────
   Diner
   ──────────────────────────────────────────────────────── */

export const dinnerMenu: MenuCategory[] = [
  {
    title: "Brood",
    items: [
      { name: "Focaccia", description: "pinsa romana | olijfolie | zeezout | aïoli", price: "7,00" },
    ],
  },
  {
    title: "Huisgemaakte Soepen",
    items: [
      { name: "Tomatensoep", description: "gehaktballetjes | prei | room", price: "7,00" },
      { name: "Maandsoep", price: "7,00" },
    ],
  },
  {
    title: "Voorgerechten",
    items: [
      { name: "Rundercarpaccio", description: "zongedroogde tomaat | Parmezaanse kaas | rode ui | pijnboompitten | kappertjes | truffelmayonaise", price: "13,25" },
      { name: "Knoflook gamba's", description: "7 stuks | licht pikante roomsaus | bosui | stokbrood", price: "13,25" },
      { name: "Gerookte paling", description: "paling mousse | huisgemaakt mierikswortel-mayonaise", price: "13,75" },
      { name: "Vitello tonnato", description: "kapperappeltjes | rucola | zongedroogde tomaat | tonijnmayonaise", price: "11,75" },
      { name: "Uientaartje", description: "rookvlees | bierstroop", price: "9,75" },
      { name: "Krokante pompoen", description: "crème van oude kaas | piccalilly", price: "8,75", tags: ["V"] },
    ],
  },
  {
    title: "Hoofdgerechten",
    items: [
      { name: "Tournedos", description: "stroganoffsaus", price: "31,00" },
      { name: "Saté van kippendijen", description: "satésaus | atjar | kroepoek | gefrituurde ui", price: "19,50" },
      { name: "Zalmfilet", description: "orzo | doperwten-crème | tomatentapenade", price: "25,50" },
      { name: "Runderbavette", description: "tex-mex boter", price: "25,50" },
      { name: "Knoflook gamba's", description: "12 stuks | licht pikante roomsaus | bosui | stokbrood", price: "19,50" },
      { name: "Lamsschenkel", description: "aardappelpuree | jus van lam", price: "27,50" },
      { name: "Steak van knolselderij", description: "jus van miso", price: "17,50", tags: ["V"] },
      { name: "Seizoensvis", description: "wisselend | seizoen", price: "dagprijs" },
    ],
  },
  {
    title: "Salades",
    items: [
      { name: "Vis", description: "gerookte zalm | krabsalade | gamba's | paprika | bosui | cocktailsaus", price: "23,00" },
      { name: "Carpaccio", description: "truffelmayonaise | zongedroogde tomaat | pijnboompitten | kappertjes | rode ui | Parmezaanse kaas", price: "19,00" },
      { name: "Köfte", description: "krokante kikkererwten | rode ui | crispy chili yoghurt", price: "17,50", tags: ["V"] },
    ],
  },
  {
    title: "Nagerechten",
    items: [
      { name: "Dame Blanche", description: "boerenroomijs | chocoladesaus | slagroom | crumble", price: "8,00" },
      { name: "Bastogne parfait", description: "Licor 43 | Bastogne | dulce de leche", price: "8,50" },
      { name: "Mousse van popcorn en witte chocolade", description: "chocolade crumble", price: "8,50" },
      { name: "Cinnamon roll", description: "roomijs met bruine suiker", price: "8,50" },
      { name: "Koffieplankje 'Bij Wout'", description: "koffie of thee | ijslolly van 't Ijsboerinneke | likeurtje | zoete lekkernijen", price: "8,00" },
    ],
  },
  {
    title: "Speciale Koffies",
    items: [
      { name: "Irish Coffee", description: "Jameson Whiskey", price: "7,50" },
      { name: "Spanish Coffee", description: "Tia Maria of Licor 43", price: "7,50" },
      { name: "Italian Coffee", description: "Disaronno", price: "7,50" },
      { name: "French Coffee", description: "Grand Marnier", price: "8,00" },
      { name: "Brabantse Koffie", description: "Schrobbelèr", price: "7,50" },
    ],
  },
];

/* ────────────────────────────────────────────────────────
   Kindergerechten
   ──────────────────────────────────────────────────────── */

export const kinderMenu: MenuItem[] = [
  { name: "Klein kopje soep naar keuze", price: "4,00" },
  { name: "Friet met snack", description: "kroket, frikandel of kipnuggets | friet | appelmoes", price: "9,50" },
  { name: "Pizza (half)", description: "opties: kaas, salami, ham, champignons en/of rode ui", price: "8,50" },
  { name: "Pizza (heel)", description: "opties: kaas, salami, ham, champignons en/of rode ui", price: "13,50" },
  { name: "Raketje", price: "2,00" },
  { name: "Schatkistje", price: "2,50" },
];

/* ────────────────────────────────────────────────────────
   Maandagavond Menu
   ──────────────────────────────────────────────────────── */

export interface MondayMenuCourse {
  category: string;
  dishes: { name: string; description?: string }[];
}

export const mondayMenu = {
  date: "deze week",
  price: "23,50",
  courses: [
    {
      category: "Voorgerechten",
      dishes: [
        { name: "Tomatensoep" },
        { name: "Spinazie-knoflooksoep" },
        { name: "Sushi sandwich", description: "ceviche van makreel | sojagel | grapefruit" },
      ],
    },
    {
      category: "Hoofdgerechten",
      dishes: [
        { name: "Snoekbaarsfilet", description: "prei-mosterdsaus" },
        { name: "Varkenshaas", description: "champignonsaus" },
        { name: "Saté van kippendijen", description: "satésaus" },
      ],
    },
    {
      category: "Nagerechten",
      dishes: [
        { name: "Bastogneparfait" },
        { name: "Hazelino" },
        { name: "Meringue ring", description: "bosbessen coulis | bolletje ijs" },
      ],
    },
  ] as MondayMenuCourse[],
  terms: [
    "Elk seizoen, elke maandag",
    "Reserveren verplicht",
    "Het menu wisselt wekelijks",
    "Vol is vol, op is op",
    "Uitgezonderd feestdagen",
    "Vegetarische optie beschikbaar",
    "A la carte blijft beschikbaar tegen reguliere prijzen",
    "Allergieën? Geef het door bij reservering",
  ],
};

/* ────────────────────────────────────────────────────────
   Craft Bier
   ──────────────────────────────────────────────────────── */

export interface Beer {
  brewery: string;
  name: string;
  style: string;
  abv: string;
  price: string;
  tap?: boolean;
}

export interface BeerCategory {
  title: string;
  beers: Beer[];
}

export const beerCategories: BeerCategory[] = [
  {
    title: "IPA",
    beers: [
      { brewery: "Brouwerij Frontaal", name: "You Had Me At Hello", style: "Session IPA", abv: "4.5%", price: "5,80", tap: true },
      { brewery: "Brouwerij De Molen", name: "Mosaiik Vienna IPA", style: "Vienna IPA", abv: "6.9%", price: "5,80" },
      { brewery: "Stadsbrouwerij 013", name: "Handlanger", style: "Double IPA", abv: "8.2%", price: "6,50" },
      { brewery: "Brouwerij Frontaal", name: "Gaia", style: "IPA", abv: "7%", price: "6,20" },
      { brewery: "BrewDog", name: "Hazy Jane Tropical", style: "Hazy IPA", abv: "5.0%", price: "5,50" },
      { brewery: "Brouwerij Frontaal", name: "Green Mountain", style: "Session IPA", abv: "4.3%", price: "5,70" },
      { brewery: "Stadsbrouwerij 013", name: "Wingman", style: "Session IPA", abv: "4.3%", price: "4,60" },
    ],
  },
  {
    title: "Wit",
    beers: [
      { brewery: "Moergestels Brouwcollectief", name: "Witte Simmie", style: "Witbier", abv: "5.2%", price: "5,40" },
      { brewery: "Brouwerij Poesiat & Kansen", name: "Gin Wit", style: "Witbier", abv: "6.0%", price: "5,30" },
      { brewery: "Brouwerij Frontaal", name: "Wizard Wit", style: "Witbier", abv: "6%", price: "5,60" },
      { brewery: "Brouwerij St. Bernardus", name: "Watou", style: "Witbier", abv: "5.0%", price: "5,20" },
      { brewery: "Jopen", name: "Orange Sunshine", style: "Witbier", abv: "5.5%", price: "6,90" },
    ],
  },
  {
    title: "Blond",
    beers: [
      { brewery: "Brouwerij Frontaal", name: "Paasij", style: "Blond", abv: "7.0%", price: "5,70", tap: true },
      { brewery: "Moergestels Brouwcollectief", name: "Bloesem Blond", style: "Blond", abv: "6.2%", price: "5,70" },
      { brewery: "Stadsbrouwerij 013", name: "40 Watt", style: "Blond", abv: "6.3%", price: "5,80" },
      { brewery: "Van Moll", name: "Surf Ale", style: "Blond Ale", abv: "6.4%", price: "6,40" },
      { brewery: "Brouwerij Huyghe", name: "Delirium Tremens", style: "Strong Blond", abv: "8.5%", price: "6,20" },
    ],
  },
  {
    title: "Tripel",
    beers: [
      { brewery: "Brouwerij Bosteels", name: "Karmeliet", style: "Tripel", abv: "8.4%", price: "5,60" },
      { brewery: "Brouwerij De Halve Maan", name: "Brugge Tripel", style: "Tripel", abv: "8.7%", price: "5,50" },
      { brewery: "Brouwerij Het Anker", name: "Gouden Carolus Tripel", style: "Tripel", abv: "8%", price: "5,70" },
      { brewery: "Stadsbrouwerij 013", name: "Piranha Tripel", style: "Tripel", abv: "8%", price: "5,30" },
      { brewery: "Moergestels Brouwcollectief", name: "Zeezuiper", style: "Tripel", abv: "8%", price: "5,70" },
      { brewery: "Van Moll", name: "Triple Trouble", style: "Tripel", abv: "8.2%", price: "6,10" },
      { brewery: "Brouwerij Frontaal", name: "Non de Jus", style: "Tripel", abv: "8.8%", price: "6,70" },
    ],
  },
  {
    title: "Bockbier",
    beers: [
      { brewery: "Brouwerij De Koningshoeven", name: "La Trappe Bock", style: "Bock", abv: "7%", price: "5,40" },
      { brewery: "Texelse Brouwerij", name: "Jutters Bock", style: "Bock", abv: "7.0%", price: "5,80" },
      { brewery: "Brouwerij 't IJ", name: "IJbok", style: "Bock", abv: "6.5%", price: "5,70" },
    ],
  },
  {
    title: "Donkere bieren",
    beers: [
      { brewery: "Brouwerij Frontaal", name: "Noche Buena 3.0", style: "Imperial Stout", abv: "10.5%", price: "9,50" },
      { brewery: "Brouwerij Frontaal", name: "Ostara", style: "Dark Ale", abv: "5%", price: "6,50" },
      { brewery: "Van Moll", name: "Imperial Coffee & Coconut Stout", style: "Imperial Stout", abv: "7.1%", price: "9,50" },
      { brewery: "Stadsbrouwerij 013", name: "Kop & Schotel", style: "Imperial Stout", abv: "10.7%", price: "11,00" },
      { brewery: "De Molen", name: "Smoked Imperial Stout", style: "Smoked Stout", abv: "10%", price: "10,60" },
      { brewery: "De Molen", name: "Smoked Imperial Stout BA", style: "Barrel Aged Stout", abv: "11%", price: "11,50" },
    ],
  },
];
