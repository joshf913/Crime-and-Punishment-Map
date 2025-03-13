// Defines all the markers on the maps
const storyLocations = {
    locations: [
        {
            id: "raskolnikov_house",
            name: "Raskolnikov's Apartment",
            type: "character_home",
            coordinates: [-50.485474, -43.989258],
            map: "petersburg",
            description: {
                short: "Cramped and impoverished.",
                long: "His apartment is described as a small, cramped garret (habitable attic) at the top of a building. The room is triangular and poorly lit, with just a single window. He has little furniture, including a sofa, a little table, three chairs, and a small furnace. The wallpaper is discolored and peeling.",
            },
            characters: ["raskolnikov"],
            timelineEvents: [0],
            bookExcerpt: "\"It was a tiny cupboard of a room about six paces in length. It had a poverty-stricken appearance with its dusty yellow paper peeling off the walls, and it was so low-pitched that a man of more than average height was ill at ease in it and felt every moment that he would knock his head against the ceiling. The furniture was in keeping with the room: there were three old chairs, rather rickety; a painted table in the corner on which lay a few manuscripts and books; the dust that lay thick upon them showed that they had been long untouched. A big clumsy sofa occupied almost the whole of one wall and half the floor space of the room; it was once covered with chintz, but was now in rags and served Raskolnikov as a bed. Often he went to sleep on it,...with his head on one little pillow, under which he heaped up all the linen he had, clean and dirty, by way of a bolster. A little table stood in front of the sofa.\" (Part I, Chapter III)",
            audioFile: "test.mp3",
            modernPhoto: "../assets/images/modern_photos/pastors_test_image.jpg"
        },
        {
            id: "sonya_house",
            name: "Sonya's Apartment",
            type: "character_home",
            coordinates: [-51.917168, -39.858398],
            map: "petersburg",
            description: {
                short: "Irregularly shaped and dilapidated.",
                long: "Her room is described as a large, irregular quadrangle with a slanted wall and three windows overlooking the canal. The room was barely furnished, with a bed in the one corner, a plain table, two chairs, and a chest of drawers. The yellow wallpaper was blackened in the corners, which made the room seem damp and shabby.",
            },
            characters: ["sonya"],
            timelineEvents: [20],
            bookExcerpt: "\"Sonya's room looked like a barn; it was a very irregular quadrangle and this gave it a grotesque appearance. A wall with three windows looking out on to the canal ran aslant so that one corner formed a very acute angle, and it was difficult to see in it without very strong light. The other corner was disproportionately obtuse. There was scarcely any furniture in the big room: in the corner on the right was a bedstead, beside it, nearest the door, a chair. A plain, deal table covered by a blue cloth stood against the same wall, close to the door into the other flat. Two rush-bottom chairs stood by the table. On the opposite wall near the acute angle stood a small plain wooden chest of drawers looking, as it were, lost in a desert. That was all there was in the room. The yellow, scratched and shabby wall-paper was black in the corners. It must have been damp and full of fumes in the winter. There was every sign of poverty; even the bedstead had no curtain.\" (Part IV, Chapter IV)",
            audioFile: "",
            modernPhoto: ""
        },
        {
            id: "pawnbroker_house",
            name: "The Pawnbroker's Apartment",
            type: "crime,character_home",
            coordinates: [-54.851315, -52.734375],
            map: "petersburg",
            description: {
                short: "An orderly dwelling turned into a bloody murder scene.",
                long: "A small, clean room with yellowed wallpaper and old furniture. A sofa with a curved wooden back, an oval table, and a dressing-table were neatly arranged, while a lamp flickered before a small icon in the corner. The apartment became the site of a double homicide caused by Raskolnikov.",
            },
            characters: ["alyona", "lizaveta"],
            timelineEvents: [20],
            bookExcerpt: "\"The little room into which the young man walked, with yellow paper on the walls, geraniums and muslin curtains in the windows, was brightly lighted up at that moment by the setting sun. \'So the sun will shine like this then too!\' flashed as it were by chance through Raskolnikov's mind, and with a rapid glance he scanned everything in the room, trying as far as possible to notice and remember its arrangement. But there was nothing special in the room. The furniture, all very old and of yellow wood, consisted of a sofa with a huge bent wooden back, an oval table in front of the sofa, a dressing-table with a looking-glass fixed on it between the windows, chairs along the walls and two or three half-penny prints in yellow frames, representing German damsels with birds in their hands--that was all. In the corner a light was burning before a small ikon. Everything was very clean; the floor and the furniture were brightly polished; everything shone. \'Lizaveta's work,\' thought the young man. There was not a speck of dust to be seen in the whole flat.\" (Part I, Chapter I)",
            audioFile: "",
            modernPhoto: ""
        },
        {
            id: "voznesenskii_bridge",
            name: "Voznesenskii Bridge",
            type: "tragedy",
            coordinates: [-52.749594, -47.373047],
            map: "petersburg",
            description: {
                short: "A lady's attempted suicide by drowning.",
                long: "A bridge spanning the dark waters of the canal, where Raskolnikov often wandered in deep thought. Here, as he stared at the sunset, he witnessed a woman silently throwing herself into the water. She was rescued immediately by bystanders.",
            },
            characters: [],
            timelineEvents: [20],
            bookExcerpt: "\"Raskolnikov went straight to -skii bridge, stood in the centre by the railings, leaned on them with both elbows and began to stare out into the distance. [...] Leaning over the water, he mechanically looked at the last pink rays of sunset, at the row of buildings looming in the thickening twilight, at a single far-off window in an attic somewhere on the left embankment, glowing like a flame from the last rays of the sun, which had fallen on it for a moment, at the darkening water of the canal and, it seemed, was staring at the water attentively. [...] He felt someone was standing right next to him, to the right; he glanced round, and saw a woman, tall, with a scarf on her head, with a yellow, elongaged, gaunt face and red, sunken eyes. She was looking straight at him, but obviously saw nothing and was unable to make anyone out. Suddenly she leaned over the railing with her right arm, raised her right leg and flung it over the lattice, then the left, and threw herself into the canal.\" (Part II, Chapter VI)",
            audioFile: "",
            modernPhoto: ""
        },
        {
            id: "razumikhin_house",
            name: "Razumikhin's House",
            type: "character_home",
            coordinates: [-15.199386, -73.300781],
            map: "petersburg",
            description: {
                short: "A cramped garret on the fifth floor.",
                long: "Razumikhin's lodging is a small, shabby garret on the fifth floor of an old building. The room is cluttered with books and papers, and the furniture is worn. There's a battered American leather sofa, a simple desk covered in notes, and a few chairs."
            },
            characters: ["razumikhin"],
            timelineEvents: [20],
            bookExcerpt: "\"He stopped suddenly, on coming out on the bank of the Little Neva, near the bridge to Vassilyevsky Ostrov. 'Why, he lives here, in that house,' he thought, 'why, I have not come to Razumikhin of my own accord! Here it's the same thing over again.... Very interesting to know, though; have I come on purpose or have I simply walked here by chance? Never mind, I said the day before yesterday that I would go and see him the day after; well, and so I will! Besides I really cannot go further now.' He went up to Razumikhin's room on the fifth floor.\" (Part II, Chapter II)",
            audioFile: "",
            modernPhoto: ""
        },
        {
            id: "marmeladov_house",
            name: "Marmeladov's apartment, Kozel's House",
            type: "character_home",
            coordinates: [-57.515823, -50.888672],
            map: "petersburg",
            description: {
                short: "A cramped, squalid attic room.",
                long: "Located on the fourth floor of Kozel's house, a building owned by a German cabinetmaker, the Marmeladovs' apartment is a single, grimy room at the top of a dark staircase. The small space is filled with rags, particularly children's clothing, and is poorly furnished with only two chairs, a battered American leather sofa full of holes, and an unpainted kitchen table. A ragged sheet in one corner likely hides the family's bed. A single tallow candle provides dim lighting. Though the family has a room to themselves, it functions as a passageway, with an open door leading to the rest of Amalia Lippevechsel's flat, where other tenants are often heard drinking, playing cards, and shouting."
            },
            characters: ["marmeladov"],
            timelineEvents: [20],
            bookExcerpt: "\"'Please take me... Kozel's House, where the yard is...'; A grimy little door at the very top of the staircase stood open. A candle stub illuminated a wretched room about ten paces long; it was completely visible from the landing. Everything was thrown about and in disorder, particularly various items of ragged children's clothing. A sheet full of holes had been stretched over the far corner. Behind it there probably stood a bed.\" (Part II, Chapter II)",
            audioFile: "",
            modernPhoto: ""
        },
        {
            id: "spasskii_district_police_station",
            name: "Spasskii District Police Station",
            type: "police",
            coordinates: [-58.516652, -49.833984],
            map: "petersburg",
            description: {
                short: "The bureaucratic office where Porfiry works.",
                long: "The Spasskii District Police Station is a typical government office. Porfiry Petrovich's office is modest, furnished with a large writing desk, a checkered-upholstered sofa, a bookcase in the corner, and polished yellow-wood government chairs."
            },
            characters: ["porfiry"],
            timelineEvents: [20],
            bookExcerpt: "\"When the next morning, at precisely eleven o'clock, Raskolnikov entered the building of the - District Police Station, went into the investigations department and asked to see Porfiry Petrovich, he was even surprised when they didn't attend to him for so long; it was at least ten minutes before he was called.\" (Part IV, Chapter V)",
            audioFile: "",
            modernPhoto: ""
        },
        {
            id: "spasskii_district_police_bureau",
            name: "Spasskii District Police Bureau",
            type: "police",
            coordinates: [-59.333189, -50.976563],
            map: "petersburg",
            description: {
                short: "A cramped, stuffy, and chaotic government office.",
                long: "Raskolnikov is summoned to the Spasskii District Police Bureau, where he believes he will be questioned about the murder. The building is cramped, with steep, narrow stairs leading up to the small, low-ceilinged rooms. The air is thick with heat, the smell of fresh paint and stale oil from newly decorated rooms, and the stench from open kitchens below. The police station is filled with porters, clerks, and peasants coming and going. Despite the discomfort, Raskolnikov nervously enters. Raskolnikov, nervous and on edge, anticipates being confronted about his crime, but to his surprise, the issue at hand is not the murder, but his unpaid bills."
            },
            characters: ["raskolnikov"],
            timelineEvents: [20],
            bookExcerpt: "\"The police bureau was about a quarter of a verst from where he lived. It had recently moved to new quarters on the fourth floor of a new building. He had been once briefly in the old office but long ago. Turning in at the gateway, he saw a flight of stairs on the right, down which a peasant was coming with a book in his hand. 'A yardkeeper, no doubt; that means the bureau's up there,' and he began ascending the stairs on the off chance.\" (Part II, Chapter I)",
            audioFile: "",
            modernPhoto: ""
        },
        {
            id: "crystal_palace_tavern",
            name: "Crystal Palace Tavern",
            type: "meeting_place",
            coordinates: [-58.054632, -48.076172],
            map: "petersburg",
            description: {
                short: "Palais de Kristal",
                long: "The Crystal Palace Tavern is the gathering spot where Razumikhin and Zossimov discuss the ongoing events surrounding Raskolnikov's illness and the murder of the old pawnbroker. Razumikhin invites Zossimov to his housewarming party."
            },
            characters: ["raskolnikov", "razumikhin", "zossimov"],
            timelineEvents: [20],
            bookExcerpt: "\"Tomorrow evening I'll take him out for a walk,' decided Razumikhin, 'to the Iusupov gardens, and then we'll call in at the 'Palais de Kristal'\" (Part II, Chapter IV)",
            audioFile: "",
            modernPhoto: ""
        },
        {
            id: "iusupov_gardens",
            name: "Iusupov Gardens",
            type: "ancillary",
            coordinates: [-56.072035, -42.539063],
            map: "petersburg",
            description: {
                short: "A public garden in St. Petersburg with fountains and greenery.",
                long: "As Raskolnikov walked past the gardens, he became absorbed in thoughts about the construction of great fountains and their potential effect on the atmosphere in the city's squares. He also considered the idea of extending the Summer Garden to the Field of Mars and joining it with the garden of the Mikhailovsky Palace. He found himself contemplating why people tend to live in areas of the city that are far from gardens, fountains, and cleanliness, recalling his own walks through the Hay Market. He soon dismissed these thoughts, deciding it was better not to think at all."
            },
            characters: ["raskolnikov"],
            timelineEvents: [20],
            bookExcerpt: "\"As he passed the Iusupov garden, he was deeply absorbed in considering the building of great fountains, and of their refreshing effect on the atmosphere in all the squares. By degrees he passed to the conviction that if the summer garden were extended to the field of Mars, and perhaps joined to the garden of the Mihailovsky Palace, it would be a splendid thing and a great benefit to the town. Then he was interested by the question why in all great towns men are not simply driven by necessity, but in some peculiar way inclined to live in those parts of the town where there are no gardens nor fountains; where there is most dirt and smell and all sorts of nastiness. Then his own walks through the Hay Market came back to his mind, and for a moment he waked up to reality. 'What nonsense!' he thought, 'better think of nothing at all!'\" (Part I, Chapter VI)",
            audioFile: "",
            modernPhoto: ""
        },
        {
            id: "gavrilov_house",
            name: "Gavrilov House",
            type: "crime",
            coordinates: [-47.100045, -48.339844],
            map: "petersburg",
            description: {
                short: "A secluded yard where Raskolnikov hides the stolen items.",
                long: "A deserted courtyard enclosed by blank walls, located near V-Prospekt. Against the outer wall, near the gates and a street gutter, rests a large, rough-hewn stone. Beneath it, in a small hollow, Raskolnikov conceals the purse and stolen trinkets, discarding them without even checking their contents."
            },
            characters: ["raskolnikov"],
            timelineEvents: [20],
            bookExcerpt: "\"Coming out from V- prospekt onto the Square, he suddenly saw in his left the entrance to a yard surrounded by completely blank walls. To the right, just inside the gate, the blank, unpainted wall of a neighbouring four-storey house stretched far into the yard. [...] Seeing no-one in the yard, he strode through the gate [...] Casting another look round, he was already slipping his hand into his pocket when suddenly, right by the outer wall, between the gates and the gutter, which stood at a distance of just over two feet from each other, a large, he noticed a large, rough hewn stone weighing perhaps fifty pounds and resting against the stone street wall. [...] He bent down to the stone, seized the top of it firmly in both hands, gathered all his strength and turned the stone over. Underneath the stone was a small hollow; he immediately began to throw everything from his pocket into it.\" (Part II, Chapter II)",
            audioFile: "",
            modernPhoto: ""
        },
        {
            id: "watchtower",
            name: "Police/Fire Watchtower",
            type: "tragedy",
            coordinates: [1.362176, -62.666016],
            map: "petersburg",
            description: {
                short: "A watchtower where Svidrigailov meets his end.",
                long: "A tall watchtower near --skaia Street, part of a large building with heavy closed gates. Desperate and seeking an 'official witness' for his final act, Svidrigailov chooses this spot for his suicide. A short soldier in a grey greatcoat and brass helmet stands by the entrance as he arrives, moments before pulling the trigger."
            },
            characters: ["svidrigailov"],
            timelineEvents: [20],
            bookExcerpt: "\"A tall watchtower caught his eye on the left. 'Aha!' he shouted, 'This is the place. Why go to Petrovsky? At least I'll have an official witness...' He almost smiled at this new thought and turned into --skaia street. Here was the large building with the watchtower. By the building's large, closed gates, leaning his shoulder against them, stood a short little man wrapped in a grey soldier's greatcoat, with a brass Achilles helmet on his head.\" (Part VI, Chapter VI)",
            audioFile: "",
            modernPhoto: ""
        },
        {
            id: "adrianopol_hotel",
            name: "Adrianopol Hotel",
            type: "tragedy",
            coordinates: [22.715390, -44.736328],
            map: "petersburg",
            description: {
                short: "A run-down wooden hotel on Y. Prospect where Svidrigailov spends his final night.",
                long: "A long, blackened wooden building in a desolate part of Y. Prospect, the Adrianopol Hotel is where Svidrigailov rents a tiny, cramped room under the stairs late at night. Here, he orders tea and veal, thinking about his fate before leaving for the watchtower at dawn."
            },
            characters: ["svidrigailov"],
            timelineEvents: [20],
            bookExcerpt: "\"...but he never stopped looking with curiosity for something on the right side of the Prospekt. Somewhere down here, towards the end of the Prospekt, he had noticed while he had been going past recently a wooden hotel, though a large one, that was called, as far as he could remember, something like the Adrianopol. He was not mistaken in his calculation; in a backwater like this such a hotel was an obvious landmark that it was impossible not to see it, even in the dark. It was a long, blackened, wooden building, and despite the late hour, lights were still burning and there were considerable signs of life. He went in and asked the ragamuffin who met him in the corridor for a room.\" (Part VI, Chapter VI)",
            audioFile: "",
            modernPhoto: ""
        },
        {
            id: "elagin_island",
            name: "Elagin Island",
            type: "ancillary",
            coordinates: [51.508742, -104.677734],
            map: "petersburg",
            description: {
                short: "A place Svidrigailov claims he is going, but really doesn't intend to.",
                long: "Svidrigailov mentions Elagin Island as his intended destination while speaking to Raskolnikov, claiming he's off to the island for a time of leisure. However, he never actually goes there. Instead, he quickly exits the cab when he arrives at a bridge, where he unexpectedly meets Dunya."
            },
            characters: ["svidrigailov", "raskolnikov"],
            timelineEvents: [20],
            bookExcerpt: "\"I'm off to the Islands. Do you want a lift? I'm taking this cab as far as Elagin.\" (Part VI, Chapter V)",
            audioFile: "",
            modernPhoto: ""
        },
        {
            id: "nikolaevskii_bridge",
            name: "Nikolaevskii Bridge",
            type: "ancillary",
            coordinates: [-40.178873, -68.510742],
            map: "petersburg",
            description: {
                short: "A bridge where Raskolnikov is forced to snap back to reality.",
                long: "After leaving Razumikhin's, he crosses the bridge, deeply lost in thought. A coachman, noticing him stumbling in the street, strikes him with a whip after shouting at him several times. The strike infuriates Raskolnikov, and as he stands by the bridge railing, he hears mocking comments from passersby. In his anger and confusion, he is approached by an elderly woman and her daughter, who mistake him for a beggar and offer him twenty copecks."
            },
            characters: ["raskolnikov"],
            timelineEvents: [20],
            bookExcerpt: "\"At Nikolaevskii bridge he was once more forced to wake fully from his trance as the consequence of an extremely unpleasant occurrence. The driver of a carriage gave him a sound blow on his back because he had almost fallen under the horses, though the driver had shouted to him three or four times. The blow made him so furious that having jumped to the side railings (for some reason he had been walking down the very middle of the bridge, which is used by vehicles, not pedestrians), he began to gnash and grind his teeth in fury.\" (Part II, Chapter II)",
            audioFile: "",
            modernPhoto: ""
        },
        {
            id: "haymarket",
            name: "Haymarket Square",
            type: "meeting_place",
            coordinates: [-52.448108, -35.381472],
            map: "petersburg",
            description: {
                short: "A hot and bustling place full of ragged people.",
                long: "The Haymarket area is a chaotic and oppressive part of St. Petersburg, filled with dust, noise, and the stench of nearby pot-houses. Raskolnikov walks through the area, weighed down by the heat, the airlessness, and the crowd. The streets are full of drunken men and working-class people, which only increases his sense of alienation. His ragged appearance blends in with the surroundings, yet his self-consciousness grows as he obsesses over minor details of his appearance, like his shabby hat, which he worries will give away his plans."
            },
            characters: ["raskolnikov"],
            timelineEvents: [20],
            bookExcerpt: "\"The proximity of the Haymarket, the abundance of notorious establishments, and the population, made up for the most part of trademen and craftsmen, crowded into these streets and lanes of central Petersbsurg, the general panorama abounded in such colourful subjects that it would have been strange to be surprised at encountering any sort of figure.\" (Part I, Chapter I)",
            audioFile: "",
            modernPhoto: ""
        },
        {
            id: "earrings_tavern",
            name: "Dushkin's Tavern",
            type: "meeting_place,crime",
            coordinates: [-54.342149, -51.833496],
            map: "petersburg",
            description: {
                short: "Tavern where Nikolai tries to pawn the stolen earrings.",
                long: "A tavern owned by Dushkin, located opposite the building where the pawnbroker was murdered. Three days after the crime, the painter Nikolai (Mikolka) attempted to pawn a small jewel case with gold earrings, claiming to have found them on the street. Suspicious, Dushkin took the earrings but later reported the incident to the police, bringing the case as evidence. This event contributed to the suspicion surrounding Nikolai as a possible culprit."
            },
            characters: ["mikolka"],
            timelineEvents: [20],
            bookExcerpt: "\"The day before yesterday, just after eight o'clock--mark the date and the hour! understand?--a decorator by trade, he'd dropped in before, Mikolka, he brought me this box with gold earrings and precious stones, and asked me to give him two rubles for it, and when I asked where he'd got them he said he'd picked them up off the pavement.\" (Part II, Chapter IV)",
            audioFile: "",
            modernPhoto: ""
        },
        {
            id: "razumikhin_house_new",
            name: "Razumikhin's New House",
            type: "character_home,meeting_place",
            coordinates: [-54.265224, -41.660156],
            map: "petersburg",
            description: {
                short: "Razumikhin's new apartment, where he hosts a housewarming party.",
                long: "Razumikhin's recently rented apartment, where he invites Raskolnikov and Zossimov for the housewarming party."
            },
            characters: ["razumikhin", "zossimov", "raskolnikov"],
            timelineEvents: [20],
            bookExcerpt: "\"The day before yesterday, just after eight o'clock--mark the date and the hour! understand?--a decorator by trade, he'd dropped in before, Mikolka, he brought me this box with gold earrings and precious stones, and asked me to give him two rubles for it, and when I asked where he'd got them he said he'd picked them up off the pavement.\" (Part II, Chapter IV)",
            audioFile: "",
            modernPhoto: ""
        },
        {
            id: "svid_tavern",
            name: "Tavern where Raskolnikov meets Svidrigailov",
            type: "meeting_place",
            coordinates: [-53.969012, -35.705566],
            map: "petersburg",
            description: {
                short: "A tavern on the second floor of a building where Raskolnikov meets Svidrigailov.",
                long: "The tavern is located on the second floor of a building on X. Prospect. The windows are wide open, and the sounds of singing, a clarinet, a violin, and a Turkish drum can be heard from inside. The tavern is crowded, with people drinking and making noise. Raskolnikov notices Svidrigailov sitting at a tea table by a window with a pipe in his mouth. When they see each other, Svidrigailov smiles and invites Raskolnikov inside. Inside, Raskolnikov finds Svidrigailov in a small back room, surrounded by a young girl singing and a boy with a hand organ. Despite the noisy surroundings, Svidrigailov seems calm and unaffected. They have a tense conversation, during which Raskolnikov is disturbed by his suspicions about Svidrigailov's intentions toward his sister, Dunya."
            },
            characters: ["svidrigailov", "raskolnikov"],
            timelineEvents: [20],
            bookExcerpt: "\"The whole of the second floor of the building on his left was taken up with an inn. All the windows were wide open. [...] suddenly he saw, sitting right by a window, at a tea-table, with a pipe in his mouth, Svidrigailov. [...] Raskolnikov went into the inn. [...] The inn was dirty, rotten and not even of average quality. [...] 'Well, well, come in if you want me; I am here!' he shouted from the window.\" (Part VI, Chapter III)",
            audioFile: "",
            modernPhoto: ""
        },
        {
            id: "marmaledov_tavern",
            name: "Tavern where Raskolnikov meets Marmeladov",
            type: "meeting_place",
            coordinates: [-55.216490, -49.790039],
            map: "petersburg",
            description: {
                short: "The tavern where Raskolnikov, in deep agitation, meets Marmeladov.",
                long: "Raskolnikov, feeling overwhelmed by confusion and disgust after leaving Alyona Ivanovna's, stumbles upon a tavern with an entrance down some stairs. He enters the basement-level tavern and sits down, ordering beer to soothe his burning thirst. The place is dirty, with only a few patrons: two drunken men, a girl with a concertina, and a man who seems like a retired government clerk. It is in this tavern that Raskolnikov meets Marmeladov, who begins to share his tragic story about his wife, Katerina Ivanovna."
            },
            characters: ["marmeladov", "raskolnikov"],
            timelineEvents: [20],
            bookExcerpt: "\"Looking around, he noticed that he was stood next to a tavern, the entrance to which lay down some stairs from the pavement, at basement level. At just that moment, two drunks came through the door and clambered up to street level, supporting each other and cursing. Without thinking about it, Raskolnikov immediately went down the stairs. He had never visited a tavern before, but now his head was spinning and he was tormented by a burning thirst.\" (Part I, Chapter I)",
            audioFile: "",
            modernPhoto: ""
        },
        {
            id: "marmaledov_grave_injury",
            name: "Marmeladov's Accident",
            type: "tragedy",
            coordinates: [-55.491304, -50.273438],
            map: "petersburg",
            description: {
                short: "The scene where Raskolnikov discovers Marmeladov injured after a carriage accident.",
                long: "Raskolnikov, standing at a crossroads in St. Petersburg, is drawn to a crowd and a lighted carriage. He discovers that a man has been run over by the carriage and is badly injured. Upon closer inspection, Raskolnikov realizes that the man is Marmeladov, a retired government clerk and a local drunkard that he met right at the tavern nearby. Raskolnikov, moved by a sense of responsibility, insists on having Marmeladov taken to his home for medical attention, offering money to ensure he is cared for. Despite the crowd's chatter and the coachman's explanation of the accident, Raskolnikov remains determined to help."
            },
            characters: ["marmeladov", "raskolnikov"],
            timelineEvents: [20],
            bookExcerpt: "\"'Well, should I go there or not?' Raskolnikov thought, standing in the middle of the roadway at the crossroads, and looking around him as though expecting someone to give him the final word. [...] Suddenly, in the distance, some two hundred steps from where he stood, at the end of the street, in the thickening darkness, he could make out a crowd, voices, cries... In the midst of the crowd there was some sort of carriage... A light gleamed in the middle of the street. 'What's that?' Raskolnikov turned right and walked up to the crowd.\" (Part II, Chapter VI)",
            audioFile: "",
            modernPhoto: ""
        },
        {
            id: "marinskaia_square",
            name: "Marinskaia Square",
            type: "ancillary",
            coordinates: [-36.084621, -45.571289],
            map: "petersburg",
            description: {
                short: "Raskolnikov enters after hiding the trinkets.",
                long: "This is where Raskolnikov heads shortly after hiding the trinkets he stole after murdering the pawnbroker."
            },
            characters: ["raskolnikov"],
            timelineEvents: [20],
            bookExcerpt: "\"Then he left the yard and headed towards the square.\" (Part II, Chapter II)",
            audioFile: "",
            modernPhoto: ""
        },
        {
            id: "nikolaevskii_chapel",
            name: "Chapel on Nikolaevskii Bridge",
            type: "ancillary",
            coordinates: [-37.282795, -70.158691],
            map: "petersburg",
            description: {
                short: "A chapel Raskolnikov spots on the bridge.",
                long: ""
            },
            characters: ["raskolnikov"],
            timelineEvents: [20],
            bookExcerpt: "\"The dome of the cathedral, which from no other spot is better delineated than from here on the bridge, not twenty paces from the chapel, gleamed in the sunlight.\" (Part II, Chapter II)",
            audioFile: "",
            modernPhoto: ""
        },
        {
            id: "winter_palace",
            name: "Chapel on Nikolaevskii Bridge",
            type: "ancillary",
            coordinates: [-27.994401, -41.066895],
            map: "petersburg",
            description: {
                short: "",
                long: ""
            },
            characters: ["raskolnikov"],
            timelineEvents: [20],
            bookExcerpt: "\"He closed his hand round the twenty copecks, walked ten paces further on, and turned his face to the Neva, in the direction of the palace.\" (Part II, Chapter II)",
            audioFile: "",
            modernPhoto: ""
        },
        {
            id: "fiancees_parents_house",
            name: "Svidrigailov's fiancee's parents house",
            type: "character_home",
            coordinates: [-11.436955, -79.738770],
            map: "petersburg",
            description: {
                short: "Svidrigailov visits late one rainy night to deliver a mysterious gift of 15,000 roubles to his fiancee's family.",
                long: "At precisely 11:20 p.m., Svidrigailov arrives soaked and disheveled, knocking at the door of the flat. Though his unexpected arrival causes alarm, he quickly charms the parents with his confidence and charm, leading them to believe his strange behavior is simply the result of his high social standing. He delivers the large sum of money under the pretense of a wedding gift, though his sudden and urgent visit under such bizarre circumstances raises suspicion. His words leave the family with lingering doubts, but the gratitude is undeniable. The mother, in particular, reassures the others that Svidrigailov is a man of wealth and importance, whose actions are simply eccentric. The family locks away the money, and the visit becomes a subject of speculation. Despite the strangeness of his visit, the parents assure themselves that it is of Svidrigailov's kindness, choosing to rationalize."
            },
            characters: ["svidrigailov", "dunya"],
            timelineEvents: [20],
            bookExcerpt: "\"It appeared afterwards that on the same evening, at twenty past eleven, he made another very eccentric and unexpected visit. The rain still persisted. Drenched to the skin, he walked into the little flat where the parents of his betrothed lived, in Third Street in Vassilyevsky Island. He knocked some time before he was admitted, and his visit at first caused great perturbation; but Svidrigailov could be very fascinating when he liked...\" (Part VI, Chapter VI)",
            audioFile: "",
            modernPhoto: ""
        },
        {
            id: "tuchkov_bridge",
            name: "Tuchkov Bridge",
            type: "ancillary",
            coordinates: [-8.798225, -70.949707],
            map: "petersburg",
            description: {
                short: "",
                long: ""
            },
            characters: ["raskolnikov"],
            timelineEvents: [20],
            bookExcerpt: "\"When with a start he raised his head again and looked around, he immediately forgot what he had been thinking about and even where he was walking. In this manner he crossed the whole of Vasilevskii island, came out on the Malaia Neva, crossed the bridge and turned to the islands.\" (Part I, Chapter V)",
            audioFile: "",
            modernPhoto: ""
        },
        {
            id: "petrovskii_island",
            name: "Petrovskii Island",
            type: "ancillary",
            coordinates: [17.999632, -101.469727],
            map: "petersburg",
            description: {
                short: "",
                long: ""
            },
            characters: ["raskolnikov"],
            timelineEvents: [20],
            bookExcerpt: "\"He set off home; but when he got as far as Petrovskii island, he stopped in total exhaustion, went off the road into the bushes, sank down to the grass and instantly fell asleep.\" (Part I, Chapter V)",
            audioFile: "",
            modernPhoto: ""
        },
        {
            id: "five_corners",
            name: "Five Corners",
            type: "ancillary",
            coordinates: [-50.289339, -2.526855],
            map: "petersburg",
            description: {
                short: "A junction of Zagorodnyi prospekt, Chernyshevskii pereulov [ul. Lomonosov], ul. Raz'ezzhaia, ul. Troitskoi [Rubinshtein]",
                long: ""
            },
            characters: ["razumikhin", "sonya"],
            timelineEvents: [20],
            bookExcerpt: "\"Well, as for your old room, I remembered that it was at Five Corners, Kharlamov's Tenements, so I kept looking for Kharlamov's Tenements.\" (Part II, Chapter III)",
            audioFile: "",
            modernPhoto: ""
        },
        {
            id: "summer_gardens",
            name: "Summer Gardens",
            type: "ancillary",
            coordinates: [-19.539084, -16.083984],
            map: "petersburg",
            description: {
                short: "",
                long: ""
            },
            characters: ["raskolnikov"],
            timelineEvents: [20],
            bookExcerpt: "\"By degrees he passed to the conviction that if the summer garden were extended to the field of Mars, and perhaps joined to the garden of the Mihailovsky Palace, it would be a splendid thing and a great benefit to the town.\" (Part I, Chapter VI)",
            audioFile: "",
            modernPhoto: ""
        },
        {
            id: "field_mars",
            name: "Field of Mars",
            type: "ancillary",
            coordinates: [-20.385825, -21.533203],
            map: "petersburg",
            description: {
                short: "",
                long: ""
            },
            characters: ["raskolnikov"],
            timelineEvents: [20],
            bookExcerpt: "\"By degrees he passed to the conviction that if the summer garden were extended to the field of Mars, and perhaps joined to the garden of the Mihailovsky Palace, it would be a splendid thing and a great benefit to the town.\" (Part I, Chapter VI)",
            audioFile: "",
            modernPhoto: ""
        },
        {
            id: "nikolaevskii_railway_station",
            name: "Nikolaevskii Railway Station",
            type: "ancillary",
            coordinates: [-48.502048, 14.985352],
            map: "petersburg",
            description: {
                short: "",
                long: ""
            },
            characters: ["sonya"],
            timelineEvents: [20],
            bookExcerpt: "\"You see, he promised to meet us right at the station; instead of that he sent a servant to bring us the address of these lodgings and to show us the way.\" (Part III, Chapter II)",
            audioFile: "",
            modernPhoto: ""
        },
        {
            id: "znamenskaia_hotel",
            name: "Znamenskaia Hotel",
            type: "ancillary",
            coordinates: [-45.058001, 15.073242],
            map: "petersburg",
            description: {
                short: "",
                long: ""
            },
            characters: ["svidrigailov"],
            timelineEvents: [20],
            bookExcerpt: "\"'I charmed the old lady by depositing a sum of money with her to provide for Katerina Ivanovna's three fledglings, and beside that I donated some money to the institution. I ended by telling her the story of Sofia Semenovna in full detail, concealing nothing. It produced an indescribable effect on her. That's why Sofia Semenovna has an appointment with her today at the -- Hotel where the lady is spending some time away from her dacha.'\" (Part VI, Chapter V)",
            audioFile: "",
            modernPhoto: ""
        },



        {
            id: "omsk_link",
            name: "Omsk",
            type: "confinement",
            coordinates: [14.541050, -116.499023],
            map: "siberia",
            description: {
                short: "The city where Raskolnikov was likely imprisoned.",
                long: "The Omsk Fortress was established in 1716 in Siberia. In the 1850s, Fyodor Dostoyevsky was exiled to this fortress after being sentenced to hard labor for being involved with revolutionary activities. This is likely the place that Raskolnikov was sentenced to for the murders he committed."
            },
            characters: ["raskolnikov", "sonya"],
            timelineEvents: [20],
            bookExcerpt: "",
            audioFile: "",
            modernPhoto: ""
        },



        
    ],
    timelineEvents: [
        {
            id: 0,
            locations: ["test_location"]
        }
    ]
};
