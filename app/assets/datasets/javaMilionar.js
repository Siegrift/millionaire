const dataset = [
  {
    question: 'Kto je prezident Ameriky?',
    options: ['George Busch', 'Barack Obama', 'Bystrik Slota', 'Skandar Obame'],
    correct: 1,
  },
  {
    question: 'Skratka SSS znamena:',
    options: ['Strucny slovnik slov', 'Slangove slovenske slova', 'synonimicky slovnik', 'Slovensky slovnik slov'],
    correct: 2,
  },
  {
    question: 'Kolko gramatickich chyb bude v tejto hre?',
    options: ['3', '5', '10', 'Omnoho viac'],
    correct: 4,
  },
  {
    question: 'Dinosaurus je:',
    options: ['australsky pes', 'praveký jaster', 'praveký mamut', 'praveký slon'],
    correct: 1,
  },
  {
    question: 'Dieta je:',
    options: ['uhorsky snem', 'kucharska kniha', 'prestavka vo versi', 'sposob stravovania'],
    correct: 3,
  },
  {
    question: 'S kolkymi statmi susedi Slovensko?',
    options: ['4', '5', '6', '7'],
    correct: 1,
  },
  {
    question: 'Ktoru planetu pozname pod nazvom Vecernica alebo Zornicka?',
    options: ['Mars', 'Jupiter', 'Venusa', 'Merkur'],
    correct: 2,
  },
  {
    question: 'Medzi riekami Eufrat a Tigris v staroveku lezalo uzemie nazyvane:',
    options: ['Mezopotamia', 'Cheticka risa', 'Perzia', 'Palestina'],
    correct: 0,
  },
  {
    question: 'Zatmenie Slnka nastava ak:',
    options: ['zakryju ho mraky', 'zakryje ho mesiac', 'zakryju ho zem', 'nastava v noci'],
    correct: 1,
  },
  {
    question: 'Človek dnesneho typu sa nazyva:',
    options: ['Homo sapiens', 'Homo sapiens sapiens', 'Homo habilis', 'Homo erectus'],
    correct: 1,
  },
  {
    question: 'Najväčší štát Európy mimo Ruska je:',
    options: ['Francúzsko', 'Ukrajina', 'Španielsko', 'Nemecko'],
    correct: 1,
  },
  {
    question: 'Česko neplánuje prijať euro skôr ako v roku:',
    options: ['2010', '2013', '2017', '2019'],
    correct: 3,
  },
  {
    question: 'V ktorých rokoch bol golf na programe Olympijkých hier?',
    options: ['1893 a 1901', '1900 a 1904', '1936 a 1940', '1966 a 1970'],
    correct: 1,
  },
  {
    question: 'Každý štvrtý človek v Európe trpí alergiou. Najčastejším typom je alergia:',
    options: ['na prach', 'na peľ', 'na púpavy', 'na trávu a slamu'],
    correct: 0,
  },
  {
    question: 'Formát papiera označovaný ako A0 má plochu:',
    options: ['0,5 m*m', '1 m*m', '1,5 m*m', '2 m*m'],
    correct: 1,
  },
  {
    question: 'Ľudské telo odbúra 1 promile alkoholu za:',
    options: ['1 hodinu', '5 hodiny', '10 hodín', '15 hodín'],
    correct: 2,
  },
  {
    question: 'Ktoré je prvé písmeno v abecede?',
    options: ['B', 'A', 'D', 'C'],
    correct: 1,
  },
  {
    question: 'V čom bol obutý rozprávkový kocúr?',
    options: ['V bunde', 'V sandáloch', 'V čižmách', 'Bol bosý'],
    correct: 2,
  },
  {
    question: 'Marek je vegetarián, na záhrade pestuje jabloň, na ktorej rastú jablká a pomaranče. Býva vo veľkom byte. Koľko rezňov zjedol u Jana včera?',
    options: ['5', '0', '2', '1'],
    correct: 1,
  },
  {
    question: 'Koľko vyhral víťaz majstrovstiev v počitačovej hre "Dota 2" v roku 2013?',
    options: ['$1,437,190', '$1,002,190', '$2,897,190', '$437,190'],
    correct: 0,
  },
  {
    question: 'Koľko by mal Ježis rokov v 2015?',
    options: ['nedá sa vypočítať', '1982', '2015', '2048'],
    correct: 2,
  },
  {
    question: 'Čo je androfóbia?',
    options: ['Strach z andromédy', 'Strach zo strachu pred strachom', 'Strach zo školy', 'Strach z mužov'],
    correct: 3,
  },
  {
    question: 'Ako sa volá cudzím slovom strach z pupka?',
    options: ['Parentofóbia', 'Omfalofóbia', 'Pupifóbia', 'Klaustrofóbia'],
    correct: 1,
  },
  {
    question: 'Čo je turofóbia?',
    options: ['Strach zo syra', 'Strach zo šunky', 'Strach z kukurice', 'Strach zo špenátu'],
    correct: 0,
  },
  {
    question: 'Výsledok výrazu "50*49*48....2*1*0" je:',
    options: ['9332621544394415268169923885626670049071596826438', '50!', '-1', '0'],
    correct: 3,
  },
  {
    question: 'Najdlhšie nohy na svete merajú...',
    options: ['74,3 cm', '131,8 cm', '94,8 cm', '150,7 cm'],
    correct: 1,
  },
  {
    question: 'V seriály 2 a pol chlapa nehral/a...',
    options: ['Charlie Sheen', 'Megan Fox', 'Jenifer Aniston', 'Conchata Ferrell'],
    correct: 2,
  },
  {
    question: 'Ktorý z týchto hercov nezískal Oscara?',
    options: ['Russel Crowe', 'Nicolas Cage', 'Tom Hanks', 'Leonardo di Caprio'],
    correct: 3,
  },
  {
    question: 'Akej farby sa nazýva nelegálny trh?',
    options: ['čierny', 'biely', 'modrý', 'ružový'],
    correct: 0,
  },
  {
    question: 'Ktoré z nasledovných možností označuje zbraň?',
    options: ['mp3', 'mp4', 'm4', 'msi'],
    correct: 2,
  },
  {
    question: 'Čo som robil ja (Eman) o 12:13 12.2.2015?',
    options: ['nič', 'spal', 'kreslil', 'písal otázky do milionára'],
    correct: 3,
  },
  {
    question: 'Národne jedlo Česka je?',
    options: ['Vepšoknedlozelo', 'halušky', 'rezance s makom', 'kari'],
    correct: 0,
  },
  {
    question: 'A akým naśtrojom patrí triangel?',
    options: ['dychovým', 'bicím', 'klávesovým', 'strunovým'],
    correct: 1,
  },
  {
    question: 'Najvyššie skóre v bowlingu je?',
    options: ['100', '150', '250', '300'],
    correct: 3,
  },
  {
    question: 'Strach z nekonečna sa nazýva?',
    options: ['Apeirofóbia', 'Akarofóbia', 'Amaxofóbia', 'Ataxofóbia'],
    correct: 0,
  },
  {
    question: 'Kto naspieval úvodnú pesničku z Hornej Dolnej?',
    options: ['Iné kafé', 'Helenine oči', 'Horkýže slíže', 'Rytmus'],
    correct: 2,
  },
  {
    question: 'Koľko zhliadnutí má "Gangnam Styl - Psy" na YouTube?',
    options: ['1,136,109,033', '816,968,304', '2,237,435,273', '814,225,000'],
    correct: 2,
  },
  {
    question: 'Čomu sa rovná súčet všetkých prirodzených čísel (čísla >= 1)?',
    options: ['-1/12', 'kladné nekonečno', '25000', '-5/2'],
    correct: 0,
  },
  {
    question: 'Ako sa nazýva hlavná postava v seriály Naruto?',
    options: ['Sasuke', 'Sakura', 'Neji', 'Naruto'],
    correct: 3,
  },
  {
    question: 'Ktoré z týchto je zelenina?',
    options: ['Artičok', 'Melón', 'Paradajka', 'Pomaranč'],
    correct: 0,
  },
  {
    question: 'Kto objavil Ameriku?',
    options: ['Nikto', 'Nevie sa', 'Armstrong', 'Columbus'],
    correct: 3,
  },
  {
    question: 'Z ktorého štátu pochádza Rihanna?',
    options: ['Ghana', 'Barbados', 'Maroko', 'Amerika'],
    correct: 1,
  },
  {
    question: 'Koľko veršov má grécka hymna?',
    options: ['32', '64', '125', '158'],
    correct: 3,
  },
  {
    question: 'Kdo zradil Ježiša?',
    options: ['Marek', 'Judáš', 'Šimon', 'Beyoncé'],
    correct: 1,
  },
  {
    question: 'Čo je genufóbia?',
    options: ['Strach z génov', 'Strach z kolien', 'Strach z geniov', 'Strach zo vzduchu'],
    correct: 1,
  },
  {
    question: 'Strach z čoho je Hippopotomonstrosesquippedaliofóbia?',
    options: ['hrochov', 'nevysvetlitelných javov', 'dlhých slov', 'kalkulačky'],
    correct: 2,
  },
  {
    question: 'Čo bolo najskôr?',
    options: ['Vajce', 'Kuriatko', 'Kura', 'Rezeň'],
    correct: 0,
  },
  {
    question: 'Ako sa volal drak v Mulanovi?',
    options: ['Mulan', 'Múšú', 'Alechandro', 'Mišú'],
    correct: 1,
  },
  {
    question: 'Kto vymyslel rozprávku Tom a Jerry?',
    options: ['Tom Nicholson', 'Wiliam Hanna and Marc Barbera', 'Tom Jones and Jerry Black', 'Mark Bush and Tom Jerry'],
    correct: 1,
  },
  {
    question: 'Čo znamená Schwarzeneger v nemčine?',
    options: ['Biely neger', 'Švarcvaldský neger', 'Čierny neger', 'Neznamená to nič'],
    correct: 3,
  },
  {
    question: 'Aký je rekord v najvyššej výhre v KHL?',
    options: ['11:5', '9:0', '15:0', '12:0'],
    correct: 3,
  },
  {
    question: 'Čo nejedia Moslimovia?',
    options: ['ľudí', 'lentilky', 'prasce', 'sú výnimky'],
    correct: 3,
  },
  {
    question: 'Ktoré z týchto slov je gramticky a spysovne správne?',
    options: ['sivú', 'čierno-bielu', 'bielo-čiernu', 'šedú'],
    correct: 0,
  },
  {
    question: 'Janka má 150 korún 2/3 zaplatí za autobus, zo zvišku si kúpi lízatko za 10 korún. Koľko takýchto lízatiek by si mohla ešte kúpiť?',
    options: ['1', '2', '3', '4'],
    correct: 3,
  },
  {
    question: 'Kto/čo je/bol Pascal?',
    options: ['znalca trojuholníkov', 'milovník tlaku', 'mŕtvy jazyk', 'Pascal bol výmyslom iluminátov'],
    correct: 2,
  },
]

export default {
  name: 'javaMilionar',
  getDataset: () => dataset,
}
