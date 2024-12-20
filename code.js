// langue ---------------------------------------------------------------------------------------
const lang = document.documentElement.lang;


// menu -----------------------------------------------------------------------------------------
const menu = document.getElementById('menu');
const menumobile = document.getElementById('menumobile');
const menumobile2 = document.getElementById('menumobile2');
const menumobile3 = document.getElementById('menumobile3');

menumobile2.addEventListener('click', () => { 
menu.style.display = 'block';
menumobile.style.display = 'none';
});

menumobile3.addEventListener('click', () => { 
menu.style.display = 'none';
menumobile.style.display = 'block';
});



const menuElements = document.querySelectorAll('.menu');
menuElements.forEach(element => {
element.addEventListener('click', function () {
if (window.innerWidth < 750 && menu) { 
menu.style.display = 'none';
menumobile.style.display = 'block';
}
});
});



// appartements ---------------------------------------------------------------------------------
let appartements;
const container = document.getElementById('appartements');

if (lang === "en") {
appartements = [
    {
      "titre": "Apartment 1",
      "capacite": "1 to 2 people",
      "description": [
        "2 rooms: kitchenette with dining area + bedroom: large window (garden view) + bathroom + toilet",
        "Kitchenette: microwave, fridge/freezer, mini oven, electric hob, kettle, toaster, coffee maker",
        "Bedroom with 140 cm bed, Canal+ TV, fan, clothes storage",
        "Bathroom (shower) WC, hair dryer, towel heater",
        "Shared comfort elements: washing machine, ironing boards and irons, 2 terraces, small library, board games, nearby parking, free WIFI"
      ],
      "photos": ["apt1/1.jpeg", "apt1/1.mp4", "apt1/2.jpeg", "apt1/3.jpeg", "apt1/5.jpeg", "apt1/6.jpeg", "apt1/7.jpeg", "apt1/8.jpeg"]
    },
    {
      "titre": "Apartment 2",
      "capacite": "1 to 2 people",
      "description": [
        "2 rooms: kitchenette with spacious dining area + bedroom + bathroom + toilet",
        "Kitchenette: microwave, fridge/freezer, mini oven, electric hob, kettle, toaster, coffee maker, Canal+ TV",
        "Very spacious bedroom with 140 cm bed (comfort+ mattress), convertible chair, sofa, Canal+ TV, fan, clothes storage, 2 large windows (garden view)",
        "Bathroom (shower) WC, hair dryer, towel heater",
        "Shared comfort elements: washing machine, ironing boards and irons, 2 terraces, small library, board games, nearby parking, free WIFI"
      ],
      "photos": ["apt2/1.jpeg", "apt2/2.jpeg", "apt2/3.jpeg", "apt2/4.jpeg", "apt2/5.jpeg", "apt2/6.jpeg", "apt2/7.jpeg", "apt2/8.jpeg", "apt2/9.jpeg", "apt2/10.jpeg", "apt2/11.jpeg"]
    },
    {
      "titre": "Apartment 3",
      "capacite": "1 to 3 people",
      "description": [
        "2 rooms: kitchenette with dining/living area + bedroom + bathroom + toilet",
        "Kitchenette: microwave, fridge/freezer, mini oven, electric hob, kettle, toaster, coffee maker, Canal+ TV *option to add a 140 cm sofa bed",
        "Bedroom with 140 cm bed (comfort+ mattress), wardrobe, Canal+ TV, fan, clothes storage, large window (garden view)",
        "Bathroom (shower) WC, hair dryer, towel heater",
        "Shared comfort elements: washing machine, ironing boards and irons, 2 terraces, small library, board games, nearby parking, free WIFI"
      ],
      "photos": ["apt3/1.jpeg", "apt3/2.jpeg", "apt3/3.jpeg", "apt3/4.jpeg", "apt3/5.jpeg", "apt3/6.jpeg", "apt3/7.jpeg", "apt3/8.jpeg", "apt3/9.jpeg"]
    },
    {
      "titre": "Apartment 4",
      "capacite": "1 to 2 people",
      "description": [
        "2 rooms: kitchenette with dining area + bedroom + bathroom + toilet",
        "Kitchenette: microwave, fridge/freezer, mini oven, electric hob, kettle, toaster, coffee maker",
        "Bedroom with 140 cm bed, wardrobe, Canal+ TV, fan, clothes storage, large window (garden view)",
        "Bathroom (shower cabin) WC, hair dryer, towel heater",
        "Shared comfort elements: washing machine, ironing boards and irons, 2 terraces, small library, board games, nearby parking, free WIFI"
      ],
      "photos": ["apt4/1.jpeg", "apt4/2.jpeg", "apt4/3.jpeg", "apt4/4.jpeg", "apt4/5.jpeg"]
    },
    {
      "titre": "Apartment 5",
      "capacite": "2 to 4 people",
      "description": [
        "2 rooms: kitchenette with dining/living area (140 cm sofa bed) + bedroom + bathroom + toilet",
        "Kitchenette: microwave, fridge/freezer, mini oven, electric hob, kettle, toaster, coffee maker, fan, Canal+ TV",
        "Very spacious bedroom with 140 cm bed (comfort+ mattress), garden view, very large wardrobe, Canal+ TV, air conditioner, clothes storage",
        "Bathroom (shower cabin) WC, hair dryer, towel heater",
        "Shared comfort elements: washing machine, ironing boards and irons, 2 terraces, small library, board games, nearby parking, free WIFI"
      ],
      "photos": ["apt5/1.jpeg","apt5/1.mp4", "apt5/2.jpeg", "apt5/3.jpeg", "apt5/4.jpeg", "apt5/5.jpeg", "apt5/6.jpeg", "apt5/7.jpeg", "apt5/8.jpeg", "apt5/9.jpeg", "apt5/10.jpeg", "apt5/11.jpeg"]
    },
    {
      "titre": "Apartment 6",
      "capacite": "2 to 4 people",
      "description": [
        "2 rooms: kitchenette with dining/living area (140 cm sofa bed) + bedroom + bathroom + toilet",
        "Kitchenette: microwave, fridge/freezer, mini oven, electric hob, kettle, toaster, coffee maker, Canal+ TV, fan",
        "Bedroom with 140 cm bed, garden view, wardrobe, Canal+ TV, air conditioner, clothes storage",
        "Spacious bathroom with window (shower cabin) WC, hair dryer, towel heater",
        "Shared comfort elements: washing machine, ironing boards and irons, 2 terraces, small library, board games, nearby parking, free WIFI"
      ],
      "photos": ["apt6/1.jpeg", "apt6/2.jpeg", "apt6/3.jpeg", "apt6/4.jpeg", "apt6/5.jpeg", "apt6/6.jpeg", "apt6/7.jpeg"]
    },
    {
      "titre": "Apartment Balcony Garden View",
      "capacite": "2 to 4 people",
      "description": [
        "This cozy apartment, located in another residence on the first floor (with elevator), 100 meters from Villa Julia, a bar/grocery store, and the free thermal bus stop, features two balconies overlooking Palm Tree Square and the park.",
        "2 rooms: kitchenette with dining/living area (140 cm sofa bed) + bedroom + bathroom + toilet",
        "Kitchenette: dishwasher, microwave, fridge/freezer, mini oven, electric hob, kettle, toaster, coffee maker, fan, Canal+ TV, balcony",
        "Bedroom with 140 cm bed, wardrobe, clothes storage, ironing board and iron, balcony",
        "Bathroom (bathtub) WC, hair dryer, washing machine",
        "Nearby parking (free), free WIFI"
      ],
      "photos": ["apt7/1.jpeg", "apt7/2.jpeg", "apt7/3.jpeg", "apt7/4.jpeg", "apt7/5.jpeg", "apt7/6.jpeg"]
    }
  ];


// Générer le HTML pour chaque appartement
appartements.forEach(e => {
  const html = `
      <div class="appartement" data-id="${e.titre}">
          <img src="${e.photos[0]}?w=250" srcset="${e.photos[0]}?w=250 250w" sizes="250px" loading="lazy">
          <div class="titre">${e.titre}</div>
          <div class="soustitre">${e.capacite}</div>
          <div class="btn">Book</div>
      </div>
  `;
  // Ajouter le HTML dans le conteneur
  container.insertAdjacentHTML('beforeend', html);
});

}

else if (lang === "es") {
appartements = [
    {
      "titre": "Appartement 1",
      "capacite": "1 a 2 personas",
      "description": [
        "2 piezas: kitchenette con área de comedor + habitación: ventana grande (vista al jardín) + baño + WC",
        "Kitchenette: microondas, frigorífico/congelador, mini-horno, placa eléctrica, hervidor, tostadora, cafetera",
        "Habitación con cama de 140, TV canal +, ventilador, tendedero",
        "Baño (ducha) WC, secador de pelo, toallero eléctrico",
        "Elementos de confort comunes: lavadora, tablas de planchar y planchas, 2 terrazas, pequeña biblioteca, juegos de mesa, estacionamiento cercano, WIFI gratuito"
      ],
      "photos": [
        "apt1/1.jpeg",
        "apt1/1.mp4",
        "apt1/2.jpeg",
        "apt1/3.jpeg",
        "apt1/5.jpeg",
        "apt1/6.jpeg",
        "apt1/7.jpeg",
        "apt1/8.jpeg"
      ]
    },
    {
      "titre": "Appartement 2",
      "capacite": "1 a 2 personas",
      "description": [
        "2 piezas: kitchenette con área de comedor espaciosa + habitación + baño + WC",
        "Kitchenette: microondas, frigorífico/congelador, mini-horno, placa eléctrica, hervidor, tostadora, cafetera, TV canal+",
        "Habitación muy espaciosa con cama de 140 (colchón confort+), sillón convertible, sofá, TV canal +, ventilador, tendedero, 2 ventanas grandes (vista al jardín)",
        "Baño (ducha) WC, secador de pelo, toallero eléctrico",
        "Elementos de confort comunes: lavadora, tablas de planchar y planchas, 2 terrazas, pequeña biblioteca, juegos de mesa, estacionamiento cercano, WIFI gratuito"
      ],
      "photos": [
        "apt2/1.jpeg",
        "apt2/2.jpeg",
        "apt2/3.jpeg",
        "apt2/4.jpeg",
        "apt2/5.jpeg",
        "apt2/6.jpeg",
        "apt2/7.jpeg",
        "apt2/8.jpeg",
        "apt2/9.jpeg",
        "apt2/10.jpeg",
        "apt2/11.jpeg"
      ]
    },
    {
      "titre": "Appartement 3",
      "capacite": "1 a 3 personas",
      "description": [
        "2 piezas: kitchenette con área de comedor/sala de estar + habitación + baño + WC",
        "Kitchenette: microondas, frigorífico/congelador, mini-horno, placa eléctrica, hervidor, tostadora, cafetera, TV canal+ *posibilidad de añadir un sofá cama de 140",
        "Habitación con cama de 140 (colchón confort+), armario, TV canal +, ventilador, tendedero, ventana grande (vista al jardín)",
        "Baño (ducha) WC, secador de pelo, toallero eléctrico",
        "Elementos de confort comunes: lavadora, tablas de planchar y planchas, 2 terrazas, pequeña biblioteca, juegos de mesa, estacionamiento cercano, WIFI gratuito"
      ],
      "photos": [
        "apt3/1.jpeg",
        "apt3/2.jpeg",
        "apt3/3.jpeg",
        "apt3/4.jpeg",
        "apt3/5.jpeg",
        "apt3/6.jpeg",
        "apt3/7.jpeg",
        "apt3/8.jpeg",
        "apt3/9.jpeg"
      ]
    },
    {
      "titre": "Appartement 4",
      "capacite": "1 a 2 personas",
      "description": [
        "2 piezas: kitchenette con área de comedor + habitación + baño + WC",
        "Kitchenette: microondas, frigorífico/congelador, mini-horno, placa eléctrica, hervidor, tostadora, cafetera",
        "Habitación con cama de 140, armario, TV canal +, ventilador, tendedero, ventana grande (vista al jardín)",
        "Baño (cabina de ducha) WC, secador de pelo, toallero eléctrico",
        "Elementos de confort comunes: lavadora, tablas de planchar y planchas, 2 terrazas, pequeña biblioteca, juegos de mesa, estacionamiento cercano, WIFI gratuito"
      ],
      "photos": [
        "apt4/1.jpeg",
        "apt4/2.jpeg",
        "apt4/3.jpeg",
        "apt4/4.jpeg",
        "apt4/5.jpeg"
      ]
    },
    {
      "titre": "Appartement 5",
      "capacite": "2 a 4 personas",
      "description": [
        "2 piezas: kitchenette con área de comedor/sala de estar (sofá cama de 140) + habitación + baño + WC",
        "Kitchenette: microondas, frigorífico/congelador, mini-horno, placa eléctrica, hervidor, tostadora, cafetera, ventilador, TV canal+",
        "Habitación muy espaciosa con cama de 140 (colchón confort+), vista al jardín, armario muy grande, TV canal+, aire acondicionado, tendedero",
        "Baño (cabina de ducha) WC, secador de pelo, toallero eléctrico",
        "Elementos de confort comunes: lavadora, tablas de planchar y planchas, 2 terrazas, pequeña biblioteca, juegos de mesa, estacionamiento cercano, WIFI gratuito"
      ],
      "photos": [
        "apt5/1.jpeg",
        "apt5/1.mp4",
        "apt5/2.jpeg",
        "apt5/3.jpeg",
        "apt5/4.jpeg",
        "apt5/5.jpeg",
        "apt5/6.jpeg",
        "apt5/7.jpeg",
        "apt5/8.jpeg",
        "apt5/9.jpeg",
        "apt5/10.jpeg",
        "apt5/11.jpeg"
      ]
    },
    {
      "titre": "Appartement 6",
      "capacite": "2 a 4 personas",
      "description": [
        "2 piezas: kitchenette con área de comedor/sala de estar (sofá cama de 140) + habitación + baño + WC",
        "Kitchenette: microondas, frigorífico/congelador, mini-horno, placa eléctrica, hervidor, tostadora, cafetera, TV canal+, ventilador",
        "Habitación con cama de 140, vista al jardín, armario, TV canal+, aire acondicionado, tendedero",
        "Baño espacioso con ventana (cabina de ducha) WC, secador de pelo, toallero eléctrico",
        "Elementos de confort comunes: lavadora, tablas de planchar y planchas, 2 terrazas, pequeña biblioteca, juegos de mesa, estacionamiento cercano, WIFI gratuito"
      ],
      "photos": [
        "apt6/1.jpeg",
        "apt6/2.jpeg",
        "apt6/3.jpeg",
        "apt6/4.jpeg",
        "apt6/5.jpeg",
        "apt6/6.jpeg",
        "apt6/7.jpeg"
      ]
    },
    {
      "titre": "Appartement Balcony Garden View",
      "capacite": "2 a 4 personas",
      "description": [
        "Este acogedor apartamento, ubicado en otra residencia en el primer piso (con ascensor), a 100 metros de Villa Julia, de un bar/tienda de comestibles y de la parada del autobús termal gratuito, cuenta con dos balcones con vistas a la Plaza de las Palmas y al parque.",
        "2 piezas: kitchenette con área de comedor/sala de estar (sofá cama de 140) + habitación + baño + WC",
        "Kitchenette: lavavajillas, microondas, frigorífico/congelador, mini-horno, placa eléctrica, hervidor, tostadora, cafetera, ventilador, TV canal+, balcón",
        "Habitación con cama de 140, armario, tendedero, tabla de planchar y plancha, balcón",
        "Baño (bañera) WC, secador de pelo, lavadora",
        "Estacionamiento cercano (gratuito), WIFI gratuito"
      ],
      "photos": [
        "apt7/1.jpeg",
        "apt7/2.jpeg",
        "apt7/3.jpeg",
        "apt7/4.jpeg",
        "apt7/5.jpeg",
        "apt7/6.jpeg"
      ]
    }
  ];

// Générer le HTML pour chaque appartement
appartements.forEach(e => {
  const html = `
      <div class="appartement" data-id="${e.titre}">
          <img src="${e.photos[0]}?w=250" srcset="${e.photos[0]}?w=250 250w" sizes="250px" loading="lazy">
          <div class="titre">${e.titre}</div>
          <div class="soustitre">${e.capacite}</div>
          <div class="btn">Reservar</div>
      </div>
  `;
  // Ajouter le HTML dans le conteneur
  container.insertAdjacentHTML('beforeend', html);
});

}

else if (lang === "fr") {
appartements = [
    {"titre":"Appartement 1","capacite":"1 à 2 personnes","description":["2 pièces: kitchenette avec coin repas + chambre: grande fenêtre (vue jardin)  + sdb + wc","Kitchenette: micro-ondes, frigo/congélateur, mini-four, plaque électrique, bouilloire, grille-pain, cafetière","Chambre avec lit en 140, TV canal +, ventilateur , endoir à linge","SDB (douche) WC, sèche-cheveux,  sèche-serviettes","Elements de confort communs: lave-linge, tables à repasser et fers à repasser, 2 terrasses, petite bibliothèque, jeux de table, parking à proximité, WIFI gratuit"],"photos":["apt1/1.jpeg","apt1/1.mp4","apt1/2.jpeg","apt1/3.jpeg","apt1/5.jpeg","apt1/6.jpeg","apt1/7.jpeg","apt1/8.jpeg"]},
    {"titre":"Appartement 2","capacite":"1 à 2 personnes","description":["2 pièces: kitchenette avec coin repas spacieux+ chambre + sdb + wc","Kitchenette: micro-ondes, frigo/congélateur, mini-four, plaque électrique, bouilloire, grille-pain, cafetière, TV canal+","Chambre très spacieuse avec lit en 140 (matelas confort+), fauteuil convertible, canapé, TV canal +, ventilateur , endoir à linge,  2 grandes fenêtres (vue jardin) ","SDB (douche) WC, sèche-cheveux, sèche-serviettes ","Elements de confort communs: lave-linge , tables à repasser et fers à repasser, 2 terrasses, petite bibliothèque, jeux de table, parking à proximité, WIFI gratuit"],"photos":["apt2/1.jpeg","apt2/2.jpeg","apt2/3.jpeg","apt2/4.jpeg","apt2/5.jpeg","apt2/6.jpeg","apt2/7.jpeg","apt2/8.jpeg","apt2/9.jpeg","apt2/10.jpeg","apt2/11.jpeg"]},
    {"titre":"Appartement 3","capacite":"1 à 3 personnes","description":["2 pièces: kitchenette avec coin repas/séjour + chambre + sdb + wc ","Kitchenette: micro-ondes, frigo/congélateur, mini-four, plaque électrique, bouilloire, grille-pain, cafetière, TV canal+ *possibilité d'ajouter un canapé convertible en 140","Chambre avec lit en 140 (matelas confort+), armoire, TV canal +, ventilateur , endoir à linge,  grand fenêtre (vue jardin) ","SDB (douche) WC, sèche-cheveux,  sèche-serviettes", "Elements de confort communs: lave-linge, tables à repasser et fers à repasser, 2 terrasses, petite bibliothèque, jeux de table, parking à proximité, WIFI gratuit"],"photos":["apt3/1.jpeg","apt3/2.jpeg","apt3/3.jpeg","apt3/4.jpeg","apt3/5.jpeg","apt3/6.jpeg","apt3/7.jpeg","apt3/8.jpeg","apt3/9.jpeg"]},
    {"titre":"Appartement 4","capacite":"1 à 2 personnes","description":["2 pièces: kitchenette avec coin repas + chambre + sdb + wc ","Kitchenette: micro-ondes, frigo/congélateur, mini-four, plaque électrique, bouilloire, grille-pain, cafetière","Chambre avec lit en 140, armoire, TV canal +, ventilateur, endoir à linge ,grande fenetre (vue jardin)","SDB (cabine de douche) WC, sèche-cheveux, sèche-serviettes ", "Elements de confort communs: lave-linge , tables à repasser et fers à repasser, 2 terrasses, petite bibliothèque, jeux de table, parking à proximité, WIFI gratuit"],"photos":["apt4/1.jpeg","apt4/2.jpeg","apt4/3.jpeg","apt4/4.jpeg","apt4/5.jpeg"]},
    {"titre":"Appartement 5","capacite":"2 à 4 personnes","description":["2 pièces: kitchenette avec coin repas/séjour (canapé convertible en 140) + chambre + sdb + wc ","Kitchenette: micro-ondes, frigo/congélateur, mini-four, plaque électrique, bouilloire, grille-pain, cafetière,  ventilateur, TV canal+","Chambre très spacieuse avec lit en 140 (matelas confort+), vue jardin, très grande armoire, TV canal+, climatiseur, endoir à linge","SDB (cabine de douche) WC, sèche-cheveux, sèche-serviettes ","Elements de confort communs: lave-linge, tables à repasser et fers à repasser, 2 terrasses, petite bibliothèque, jeux de table, parking à proximité, WIFI gratuit"],"photos":["apt5/1.jpeg","apt5/1.mp4","apt5/2.jpeg","apt5/3.jpeg","apt5/4.jpeg","apt5/5.jpeg","apt5/6.jpeg","apt5/7.jpeg","apt5/8.jpeg","apt5/9.jpeg","apt5/10.jpeg","apt5/11.jpeg"]},
    {"titre":"Appartement 6","capacite":"2 à 4 personnes","description":["2 pièces: kitchenette avec coin repas/séjour (canapé convertible en 140) + chambre + sdb + wc ","Kitchenette: micro-ondes, frigo/congélateur, mini-four, plaque électrique, bouilloire, grille-pain, cafetière, TV canal+, ventilateur ","Chambre avec lit en 140, vue jardin, armoire, TV canal+, climatiseur, endoir à linge ","SDB spacieuse avec fenêtre(cabine de douche) WC, sèche-cheveux, sèche-serviettes ","Elements de confort communs: lave-linge, tables à repasser et fers à repasser, 2 terrasses, petite bibliothèque, jeux de table, parking à proximité, WIFI gratuit"],"photos":["apt6/1.jpeg","apt6/2.jpeg","apt6/3.jpeg","apt6/4.jpeg","apt6/5.jpeg","apt6/6.jpeg","apt6/7.jpeg"]},
    {"titre":"Appartement Balcony Garden View","capacite":"2 à 4 personnes","description":["Cet appartement confortable, situé dans une autre résidence au premier étage (avec ascenseur), à 100 mètres de la Villa Julia, d’un bar/épicerie et de l’arrêt du bus thermal gratuit, dispose de deux balcons avec vue sur la Place des Palmiers et le parc.","2 pièces: kitchenette avec coin repas/séjour (canapé convertible en 140) + chambre + sdb + wc","Kitchenette: lave-vaisselle, micro-ondes, frigo/congélateur, mini-four, plaque électrique, bouilloire, grille-pain, cafetière, ventilateur, TV canal+, balcon","Chambre avec lit en 140, armoire, endoir à linge, table à repasser et fer à repasser, balcon","SDB (baignoire) WC, sèche-cheveux, lave-linge","Parking à proximité (gratuit), WIFI gratuit"],"photos":["apt7/1.jpeg","apt7/2.jpeg","apt7/3.jpeg","apt7/4.jpeg","apt7/5.jpeg","apt7/6.jpeg"]},
    ];

// Générer le HTML pour chaque appartement
appartements.forEach(e => {
  const html = `
      <div class="appartement" data-id="${e.titre}">
          <img src="${e.photos[0]}?w=250" srcset="${e.photos[0]}?w=250 250w" sizes="250px" loading="lazy">
          <div class="titre">${e.titre}</div>
          <div class="soustitre">${e.capacite}</div>
          <div class="btn">Réserver</div>
      </div>
  `;
  // Ajouter le HTML dans le conteneur
  container.insertAdjacentHTML('beforeend', html);
});


}

else if (lang === "it") {
appartements = [
    {
      "titre": "Appartamento 1",
      "capacite": "1 a 2 persone",
      "description": [
        "2 stanze: angolo cottura con zona pranzo + camera: grande finestra (vista giardino) + bagno + WC",
        "Angolo cottura: microonde, frigorifero/congelatore, mini-forno, piastre elettriche, bollitore, tostapane, macchina da caffè",
        "Camera con letto da 140 cm, TV canale +, ventilatore, stendibiancheria",
        "Bagno (doccia) WC, asciugacapelli, scalda-salviette",
        "Elementi di comfort comuni: lavatrice, tavoli da stiro e ferri da stiro, 2 terrazze, piccola biblioteca, giochi da tavolo, parcheggio nelle vicinanze, WIFI gratuito"
      ],
      "photos": ["apt1/1.jpeg", "apt1/1.mp4", "apt1/2.jpeg", "apt1/3.jpeg", "apt1/5.jpeg", "apt1/6.jpeg", "apt1/7.jpeg", "apt1/8.jpeg"]
    },
    {
      "titre": "Appartamento 2",
      "capacite": "1 a 2 persone",
      "description": [
        "2 stanze: angolo cottura con zona pranzo spaziosa + camera + bagno + WC",
        "Angolo cottura: microonde, frigorifero/congelatore, mini-forno, piastre elettriche, bollitore, tostapane, macchina da caffè, TV canale+",
        "Camera molto spaziosa con letto da 140 cm (materasso comfort+), poltrona convertibile, divano, TV canale +, ventilatore, stendibiancheria, 2 grandi finestre (vista giardino)",
        "Bagno (doccia) WC, asciugacapelli, scalda-salviette",
        "Elementi di comfort comuni: lavatrice, tavoli da stiro e ferri da stiro, 2 terrazze, piccola biblioteca, giochi da tavolo, parcheggio nelle vicinanze, WIFI gratuito"
      ],
      "photos": ["apt2/1.jpeg", "apt2/2.jpeg", "apt2/3.jpeg", "apt2/4.jpeg", "apt2/5.jpeg", "apt2/6.jpeg", "apt2/7.jpeg", "apt2/8.jpeg", "apt2/9.jpeg", "apt2/10.jpeg", "apt2/11.jpeg"]
    },
    {
      "titre": "Appartamento 3",
      "capacite": "1 a 3 persone",
      "description": [
        "2 stanze: angolo cottura con zona pranzo/soggiorno + camera + bagno + WC",
        "Angolo cottura: microonde, frigorifero/congelatore, mini-forno, piastre elettriche, bollitore, tostapane, macchina da caffè, TV canale+ *possibilità di aggiungere un divano letto da 140 cm",
        "Camera con letto da 140 cm (materasso comfort+), armadio, TV canale +, ventilatore, stendibiancheria, grande finestra (vista giardino)",
        "Bagno (doccia) WC, asciugacapelli, scalda-salviette",
        "Elementi di comfort comuni: lavatrice, tavoli da stiro e ferri da stiro, 2 terrazze, piccola biblioteca, giochi da tavolo, parcheggio nelle vicinanze, WIFI gratuito"
      ],
      "photos": ["apt3/1.jpeg", "apt3/2.jpeg", "apt3/3.jpeg", "apt3/4.jpeg", "apt3/5.jpeg", "apt3/6.jpeg", "apt3/7.jpeg", "apt3/8.jpeg", "apt3/9.jpeg"]
    },
    {
      "titre": "Appartamento 4",
      "capacite": "1 a 2 persone",
      "description": [
        "2 stanze: angolo cottura con zona pranzo + camera + bagno + WC",
        "Angolo cottura: microonde, frigorifero/congelatore, mini-forno, piastre elettriche, bollitore, tostapane, macchina da caffè",
        "Camera con letto da 140 cm, armadio, TV canale +, ventilatore, stendibiancheria, grande finestra (vista giardino)",
        "Bagno (cabina doccia) WC, asciugacapelli, scalda-salviette",
        "Elementi di comfort comuni: lavatrice, tavoli da stiro e ferri da stiro, 2 terrazze, piccola biblioteca, giochi da tavolo, parcheggio nelle vicinanze, WIFI gratuito"
      ],
      "photos": ["apt4/1.jpeg", "apt4/2.jpeg", "apt4/3.jpeg", "apt4/4.jpeg", "apt4/5.jpeg"]
    },
    {
      "titre": "Appartamento 5",
      "capacite": "2 a 4 persone",
      "description": [
        "2 stanze: angolo cottura con zona pranzo/soggiorno (divano letto da 140 cm) + camera + bagno + WC",
        "Angolo cottura: microonde, frigorifero/congelatore, mini-forno, piastre elettriche, bollitore, tostapane, macchina da caffè, ventilatore, TV canale+",
        "Camera molto spaziosa con letto da 140 cm (materasso comfort+), vista giardino, armadio molto grande, TV canale+, climatizzatore, stendibiancheria",
        "Bagno (cabina doccia) WC, asciugacapelli, scalda-salviette",
        "Elementi di comfort comuni: lavatrice, tavoli da stiro e ferri da stiro, 2 terrazze, piccola biblioteca, giochi da tavolo, parcheggio nelle vicinanze, WIFI gratuito"
      ],
      "photos": ["apt5/1.jpeg", "apt5/1.mp4", "apt5/2.jpeg", "apt5/3.jpeg", "apt5/4.jpeg", "apt5/5.jpeg", "apt5/6.jpeg", "apt5/7.jpeg", "apt5/8.jpeg", "apt5/9.jpeg", "apt5/10.jpeg", "apt5/11.jpeg"]
    },
    {
      "titre": "Appartamento 6",
      "capacite": "2 a 4 persone",
      "description": [
        "2 stanze: angolo cottura con zona pranzo/soggiorno (divano letto da 140 cm) + camera + bagno + WC",
        "Angolo cottura: microonde, frigorifero/congelatore, mini-forno, piastre elettriche, bollitore, tostapane, macchina da caffè, TV canale+, ventilatore",
        "Camera con letto da 140 cm, vista giardino, armadio, TV canale+, climatizzatore, stendibiancheria",
        "Bagno spazioso con finestra (cabina doccia) WC, asciugacapelli, scalda-salviette",
        "Elementi di comfort comuni: lavatrice, tavoli da stiro e ferri da stiro, 2 terrazze, piccola biblioteca, giochi da tavolo, parcheggio nelle vicinanze, WIFI gratuito"
      ],
      "photos": ["apt6/1.jpeg", "apt6/2.jpeg", "apt6/3.jpeg", "apt6/4.jpeg", "apt6/5.jpeg", "apt6/6.jpeg", "apt6/7.jpeg"]
    },
    {
      "titre": "Appartamento con Balcone e Vista Giardino",
      "capacite": "2 a 4 persone",
      "description": [
        "Questo appartamento confortevole, situato in un’altra residenza al primo piano (con ascensore), a 100 metri da Villa Julia, da un bar/negozio di alimentari e dalla fermata del bus termale gratuito, dispone di due balconi con vista su Piazza delle Palme e sul parco.",
        "2 stanze: angolo cottura con zona pranzo/soggiorno (divano letto da 140 cm) + camera + bagno + WC",
        "Angolo cottura: lavastoviglie, microonde, frigorifero/congelatore, mini-forno, piastre elettriche, bollitore, tostapane, macchina da caffè, ventilatore, TV canale+, balcone",
        "Camera con letto da 140 cm, armadio, stendibiancheria, tavolo da stiro e ferro da stiro, balcone",
        "Bagno (vasca) WC, asciugacapelli, lavatrice",
        "Parcheggio nelle vicinanze (gratuito), WIFI gratuito"
      ],
      "photos": ["apt7/1.jpeg", "apt7/2.jpeg", "apt7/3.jpeg", "apt7/4.jpeg", "apt7/5.jpeg", "apt7/6.jpeg"]
    }
  ];


  // Générer le HTML pour chaque appartement
appartements.forEach(e => {
  const html = `
      <div class="appartement" data-id="${e.titre}">
          <img src="${e.photos[0]}?w=250" srcset="${e.photos[0]}?w=250 250w" sizes="250px" loading="lazy">
          <div class="titre">${e.titre}</div>
          <div class="soustitre">${e.capacite}</div>
          <div class="btn">Prenotare</div>
      </div>
  `;
  // Ajouter le HTML dans le conteneur
  container.insertAdjacentHTML('beforeend', html);
});

}

else if (lang === "ru") {
appartements = [
    {
      "titre": "Апартамент 1",
      "capacite": "1 до 2 человек",
      "description": [
        "2 комнаты: мини-кухня с обеденной зоной + спальня: большое окно (вид на сад) + ванная комната + туалет",
        "Мини-кухня: микроволновая печь, холодильник/морозильник, мини-духовка, электрическая плита, чайник, тостер, кофеварка",
        "Спальня с кроватью 140 см, телевизор с каналом+, вентилятор, сушилка для белья",
        "Ванная комната (душ), туалет, фен, полотенцесушитель",
        "Элементы общего комфорта: стиральная машина, гладильные столы и утюги, 2 террасы, небольшая библиотека, настольные игры, парковка рядом, бесплатный Wi-Fi"
      ],
      "photos": ["apt1/1.jpeg", "apt1/1.mp4", "apt1/2.jpeg", "apt1/3.jpeg", "apt1/5.jpeg", "apt1/6.jpeg", "apt1/7.jpeg", "apt1/8.jpeg"]
    },
    {
      "titre": "Апартамент 2",
      "capacite": "1 до 2 человек",
      "description": [
        "2 комнаты: мини-кухня с просторной обеденной зоной + спальня + ванная комната + туалет",
        "Мини-кухня: микроволновая печь, холодильник/морозильник, мини-духовка, электрическая плита, чайник, тостер, кофеварка, телевизор с каналом+",
        "Очень просторная спальня с кроватью 140 см (комфортный матрас), раскладное кресло, диван, телевизор с каналом+, вентилятор, сушилка для белья, 2 больших окна (вид на сад)",
        "Ванная комната (душ), туалет, фен, полотенцесушитель",
        "Элементы общего комфорта: стиральная машина, гладильные столы и утюги, 2 террасы, небольшая библиотека, настольные игры, парковка рядом, бесплатный Wi-Fi"
      ],
      "photos": ["apt2/1.jpeg", "apt2/2.jpeg", "apt2/3.jpeg", "apt2/4.jpeg", "apt2/5.jpeg", "apt2/6.jpeg", "apt2/7.jpeg", "apt2/8.jpeg", "apt2/9.jpeg", "apt2/10.jpeg", "apt2/11.jpeg"]
    },
    {
      "titre": "Апартамент 3",
      "capacite": "1 до 3 человек",
      "description": [
        "2 комнаты: мини-кухня с обеденной зоной/гостиной + спальня + ванная комната + туалет",
        "Мини-кухня: микроволновая печь, холодильник/морозильник, мини-духовка, электрическая плита, чайник, тостер, кофеварка, телевизор с каналом+ *возможность добавить раскладной диван 140 см",
        "Спальня с кроватью 140 см (комфортный матрас), шкаф, телевизор с каналом+, вентилятор, сушилка для белья, большое окно (вид на сад)",
        "Ванная комната (душ), туалет, фен, полотенцесушитель",
        "Элементы общего комфорта: стиральная машина, гладильные столы и утюги, 2 террасы, небольшая библиотека, настольные игры, парковка рядом, бесплатный Wi-Fi"
      ],
      "photos": ["apt3/1.jpeg", "apt3/2.jpeg", "apt3/3.jpeg", "apt3/4.jpeg", "apt3/5.jpeg", "apt3/6.jpeg", "apt3/7.jpeg", "apt3/8.jpeg", "apt3/9.jpeg"]
    },
    {
      "titre": "Апартамент 4",
      "capacite": "1 до 2 человек",
      "description": [
        "2 комнаты: мини-кухня с обеденной зоной + спальня + ванная комната + туалет",
        "Мини-кухня: микроволновая печь, холодильник/морозильник, мини-духовка, электрическая плита, чайник, тостер, кофеварка",
        "Спальня с кроватью 140 см, шкаф, телевизор с каналом+, вентилятор, сушилка для белья, большое окно (вид на сад)",
        "Ванная комната (душевая кабина), туалет, фен, полотенцесушитель",
        "Элементы общего комфорта: стиральная машина, гладильные столы и утюги, 2 террасы, небольшая библиотека, настольные игры, парковка рядом, бесплатный Wi-Fi"
      ],
      "photos": ["apt4/1.jpeg", "apt4/2.jpeg", "apt4/3.jpeg", "apt4/4.jpeg", "apt4/5.jpeg"]
    },
    {
      "titre": "Апартамент 5",
      "capacite": "2 до 4 человек",
      "description": [
        "2 комнаты: мини-кухня с обеденной зоной/гостиной (раскладной диван 140 см) + спальня + ванная комната + туалет",
        "Мини-кухня: микроволновая печь, холодильник/морозильник, мини-духовка, электрическая плита, чайник, тостер, кофеварка, вентилятор, телевизор с каналом+",
        "Очень просторная спальня с кроватью 140 см (комфортный матрас), вид на сад, очень большой шкаф, телевизор с каналом+, кондиционер, сушилка для белья",
        "Ванная комната (душевая кабина), туалет, фен, полотенцесушитель",
        "Элементы общего комфорта: стиральная машина, гладильные столы и утюги, 2 террасы, небольшая библиотека, настольные игры, парковка рядом, бесплатный Wi-Fi"
      ],
      "photos": ["apt5/1.jpeg", "apt5/1.mp4", "apt5/2.jpeg", "apt5/3.jpeg", "apt5/4.jpeg", "apt5/5.jpeg", "apt5/6.jpeg", "apt5/7.jpeg", "apt5/8.jpeg", "apt5/9.jpeg", "apt5/10.jpeg", "apt5/11.jpeg"]
    },
    {
      "titre": "Апартамент 6",
      "capacite": "2 до 4 человек",
      "description": [
        "2 комнаты: мини-кухня с обеденной зоной/гостиной (раскладной диван 140 см) + спальня + ванная комната + туалет",
        "Мини-кухня: микроволновая печь, холодильник/морозильник, мини-духовка, электрическая плита, чайник, тостер, кофеварка, телевизор с каналом+, вентилятор",
        "Спальня с кроватью 140 см, вид на сад, шкаф, телевизор с каналом+, кондиционер, сушилка для белья",
        "Просторная ванная комната с окном (душевая кабина), туалет, фен, полотенцесушитель",
        "Элементы общего комфорта: стиральная машина, гладильные столы и утюги, 2 террасы, небольшая библиотека, настольные игры, парковка рядом, бесплатный Wi-Fi"
      ],
      "photos": ["apt6/1.jpeg", "apt6/2.jpeg", "apt6/3.jpeg", "apt6/4.jpeg", "apt6/5.jpeg", "apt6/6.jpeg", "apt6/7.jpeg"]
    },
    {
      "titre": "Апартамент с балконом и видом на сад",
      "capacite": "2 до 4 человек",
      "description": [
        "Эти уютные апартаменты, расположенные в другом жилом доме на первом этаже (с лифтом), в 100 метрах от Виллы Джулия, бара/продуктового магазина и остановки бесплатного термального автобуса, имеют два балкона с видом на Площадь Пальм и парк.",
        "2 комнаты: мини-кухня с обеденной зоной/гостиной (раскладной диван 140 см) + спальня + ванная комната + туалет",
        "Мини-кухня: посудомойка, микроволновая печь, холодильник/морозильник, мини-духовка, электрическая плита, чайник, тостер, кофеварка, вентилятор, телевизор с каналом+, балкон",
        "Спальня с кроватью 140 см, шкаф, сушилка для белья, гладильная доска и утюг, балкон",
        "Ванная комната (ванна), туалет, фен, стиральная машина",
        "Парковка рядом (бесплатно), бесплатный Wi-Fi"
      ],
      "photos": ["apt7/1.jpeg", "apt7/2.jpeg", "apt7/3.jpeg", "apt7/4.jpeg", "apt7/5.jpeg", "apt7/6.jpeg"]
    }
  ];


  // Générer le HTML pour chaque appartement
appartements.forEach(e => {
  const html = `
      <div class="appartement" data-id="${e.titre}">
          <img src="${e.photos[0]}?w=250" srcset="${e.photos[0]}?w=250 250w" sizes="250px" loading="lazy">
          <div class="titre">${e.titre}</div>
          <div class="soustitre">${e.capacite}</div>
          <div class="btn">Забронировать</div>
      </div>
  `;
  // Ajouter le HTML dans le conteneur
  container.insertAdjacentHTML('beforeend', html);
});
  
}



// appartement -----------------------------------------------------------------------------------
// montrer fenêtre appartement
let apt;
const clicappartement = document.querySelectorAll('.appartement');
const fermer = document.getElementById('fermer');
const fenetre = document.getElementById('appartement');
const grand = document.getElementById('grand');

clicappartement.forEach(el => {
el.addEventListener('click', (event) => {
apt = event.currentTarget.getAttribute('data-id');
montrerapt(apt);
});
});


function montrerapt(apt) {
fenetre.style.display = 'block';
document.getElementById('appartement').scrollIntoView();
const appartementcontenu = document.getElementById("appartementcontenu");
const appartement = appartements.find(appartement => appartement.titre === apt);
    
if (appartement) {

appartementcontenu.innerHTML = "";
grand.innerHTML = `<img src="${appartement.photos[0]}">`;
let contenu= "";
appartement.photos.forEach(photo => { 
if (photo.endsWith(".mp4")) { contenu += `<video class="photo"><source src="${photo}" type="video/mp4"></video>`; }
else { contenu += `<img class="photo" src="${photo}?w=250" srcset="${photo}?w=250 250w" sizes="250px">`; }
});
contenu += `<div class="titre">${appartement.titre}</div>`;
appartement.description.forEach(description => { contenu += `<div class="texte">${description}</div>`; });
if (lang === "en") {contenu += `<div class="texte">${appartement.capacite}</div><a href="#reserver" class="btn">Book this apartment</a>`;}
else if (lang === "es") {contenu += `<div class="texte">${appartement.capacite}</div><a href="#reserver" class="btn">Reservar este apartamento</a>`;}
else if (lang === "fr") {contenu += `<div class="texte">${appartement.capacite}</div><a href="#reserver" class="btn">Réserver cet appartement</a>`;}
else if (lang === "it") {contenu += `<div class="texte">${appartement.capacite}</div><a href="#reserver" class="btn">Prenotare questo appartamento</a>`;}
else if (lang === "ru") {contenu += `<div class="texte">${appartement.capacite}</div><a href="#reserver" class="btn">Забронировать эту квартиру</a>`;}
appartementcontenu.innerHTML = contenu;
}

}

// fermer fenêtre appartement
fermer.addEventListener('click', () => { 
  fenetre.style.display = 'none';
  document.getElementById('appartements').scrollIntoView();
 });



fenetre.addEventListener("click", function(event) {
grand.innerHTML = "";
if (event.target.tagName === "IMG" && event.target.classList.contains("photo")) { grand.innerHTML = `<img src="${event.target.src}">`; }
else if (event.target.tagName === "VIDEO" && event.target.classList.contains("photo")) { grand.innerHTML = `<video class="photo" autoplay loop><source src="${event.target.currentSrc}" type="video/mp4"></video>`; }
});




// slider accueil ---------------------------------------------------------------------------------
const tableau_accueil = [
'url(facade.jpg)',
'url(entree.jpg)',
'url(jardin.jpg)',
'url(terrasse.jpg)',
];



let index_accueil = 0;
const slider_accueil = document.getElementById('slider-accueil');

function slider_suivant() {
index_accueil += 1;
if (index_accueil >= tableau_accueil.length) {index_accueil = 0;}
slider_accueil.style.backgroundImage = tableau_accueil[index_accueil];
}

function slider_precedent() {
index_accueil -= 1;
if (index_accueil < 0) {index_accueil = tableau_accueil.length-1; }
slider_accueil.style.backgroundImage = tableau_accueil[index_accueil];
}

slider_suivant();
let interval_slider = setInterval(slider_suivant, 3000);

slider_accueil.addEventListener('click', function(event) {
  clearInterval(interval_slider);
  if (event.target.classList.contains('suivant')) {
    slider_suivant();
  }
  if (event.target.classList.contains('precedent')) {
    slider_precedent();
  }
});


// boutons sliders -------------------------------------------------------------------------------
document.querySelectorAll('.slider').forEach(slider => {
slider.innerHTML += '<img class="precedent" src="precedent.svg"><img class="suivant" src="suivant.svg">';
});


// formulaire ---------------------------------------------------------------------------------------------
document.getElementById('formulaire').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    fetch('https://script.google.com/macros/s/AKfycbznjkbNC77gpep8h6OaChYwGmZgoCLt2-oO3VxlumTK1vPPxzIqToVirDg23zVO11yTng/exec', {
        method: 'POST',
        body: formData
    })

    document.getElementById('un').style.display = 'none';
    document.getElementById('deux').style.display = 'block';

});


// calendrier --------------------------------------------------------------------------------------

let options,contenu,date,div;
// let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

// jours de la semaine
date = new Date(2024, 0, 0);
for (let i = 0; i <= 6; i++) {
date.setDate(date.getDate() + 1);
contenu = date.toLocaleDateString('default', { weekday: 'long' }).substring(0, 2);
div = document.createElement('div');
div.textContent = contenu;
div.classList.add("semaine");
document.getElementById('semaine').appendChild(div);
}

// générer calendrer 
date = new Date();
aujourdhui = new Date();
aujourdhui.setHours(0, 0, 0, 0);

function generer_calendrier(date) {

document.getElementById("mois").innerHTML = "";
document.getElementById("dates").innerHTML = "";

document.getElementById('mois').textContent = date.toLocaleDateString('default', { year: 'numeric', month: 'long' });

let premierjour = new Date(date.getFullYear(), date.getMonth(), 1);
let dernierjour = new Date(date.getFullYear(), date.getMonth() + 1, 0);

let espace = document.createElement('div');
espace.id = "espace";
if (premierjour.getDay() === 2) { espace.style.cssText = 'display:inline-block; width:40px;'; }
if (premierjour.getDay() === 3) { espace.style.cssText = 'display:inline-block; width:80px;'; }
if (premierjour.getDay() === 4) { espace.style.cssText = 'display:inline-block; width:120px;'; }
if (premierjour.getDay() === 5) { espace.style.cssText = 'display:inline-block; width:160px;'; }
if (premierjour.getDay() === 6) { espace.style.cssText = 'display:inline-block; width:200px;'; }
if (premierjour.getDay() === 0) { espace.style.cssText = 'display:inline-block; width:240px;'; }
document.getElementById('dates').appendChild(espace);

let i = premierjour;
while (i <= dernierjour) {
let contenu = i.toLocaleString('default', { day: 'numeric' });
let div = document.createElement('div');
div.textContent = contenu;
div.classList.add("date");
if (i.getTime() >= aujourdhui.getTime()) {div.classList.add('noir');}
document.getElementById('dates').appendChild(div);
i.setDate(i.getDate() + 1);
}

}

generer_calendrier(date);

// générer mois suivant 
document.getElementById('mois-suivant').addEventListener('click', function() { date.setMonth(date.getMonth() + 1); generer_calendrier(date); });

// générer mois précédent 
document.getElementById('mois-precedent').addEventListener('click', function() { date.setMonth(date.getMonth() - 1); generer_calendrier(date); });

// bouton calendrier-reserver 
document.getElementById('bouton-reserver').addEventListener('click', function() {
    document.getElementById('calendrier').style.display = 'block';
});


