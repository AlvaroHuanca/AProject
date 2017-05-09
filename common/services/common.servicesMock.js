(function() {
        "use strict";

        var app = angular.module('common.servicesMock', ["ngMockE2E"]);

        app.run(function($httpBackend) {

                var categories = ["Jovenes", "Accion", "Terror", "Gore", "Ecchi"];
                var categoriesUrl = "/api/categorias";

                $httpBackend.whenGET(categoriesUrl).respond(categories);

                var shounen = [{
                    "idShounen": 1,
                    "codigoShounen": "NWD-93883",
                    "tituloShounen": "ONE PIECE",
                    "descripcionShounen": "Una historia épica de piratas, donde narra la historia de Monkey D. Luffy quien cuando tenia 7 años, comió accidentalmente una Akuma no mi(Fruta del diablo) la cual le convirtió en un hombre de goma. Por otra parte Gol D. Roger conocido como El rey de los Piratas quien fuera ejecutado por la Marine, habló antes de morir, acerca de su mayor tesoro,el One Piece escondido en la Gran line. Esta noticia desató la gran era de los piratas lanzando a incontables piratas a ese lugar, en busca del One Piece el tesoro perdido. Diez años después, Luffy inspirado en Gol D. Roger y un pirata de nombre Akagami no Shanks (Shanks el pelirrojo) se convierte en pirata deseando ser el próximo Rey de los Piratas y zarpar para conocer amigos y tener aventuras con ellos, teniendo como meta encontrar el one Piece",
                    "fechaPublicacion": new Date(),
                    "banner": "http://wallpapercave.com/wp/ENo3Kxx.jpg",
                    "destacado": true,
                    "Categoria": "Jovenes",
                    "tags": ["accion", "jovenes", "mangas"]
                }, {
                    "idShounen": 2,
                    "codigoShounen": "NWD-93883",
                    "tituloShounen": "NARUTO SHIPPUDEN",
                    "descripcionShounen": "Pasan dos años después de que Naruto y Sakura se fueran a entrenar cada uno con su maestro sannin, en este caso, Naruto se fue con Jiraya y Sakura con Tsunade. Ya tienen 14 años y son unos geniales ninjas, Naruto ha aprendido muchas técnicas nuevas y ha perfeccionado el Kage Bunshin aparte de otras que ya las verán a lo largo de la serie, más una técnica secreta. Sakura ha aprendido todo sobre la medicina ninja, y se ha convertido en una ninja médico. Los otros personajes sin olvidarlos, también han evolucionado subiendo de rango de ninja (todos menos Naruto) y también los temas amorosos, Shikamaru ya tiene novia. Pero durante esos 2 años, los Akatsuki se han preparado para lo que viene. Empiezan a mover ficha yendo a buscar a los 9 demonios de chakra legendario (Kyubi, Shukaku de la arena y siete más).",
                    "fechaPublicacion": new Date(),
                    "banner": "http://3.bp.blogspot.com/-xQbvX5q7zj0/UWiff124czI/AAAAAAAADWk/w3O2qLSOw9s/s1600/02-03.jpg",
                    "destacado": true,
                    "Categoria": "Accion",
                    "tags": ["accion", "jovenes", "mangas"]
                }, {
                    "idShounen": 3,
                    "codigoShounen": "NWD-93883",
                    "tituloShounen": "FAIRY TAIL",
                    "descripcionShounen": "Fairy Tail cuenta la historia de un joven mago llamado Natsu en la búsqueda de su maestro y padre adoptivo Igneel que resulta ser un dragón. Por ello se unió a Fairy Tail, un gremio de magos que es famoso por los destrozos y daños que provocan en diversas ciudades (lo cual no debería ser así). El mundo de Fairy Tail gira alrededor de los magos (los cuales poco tienen que ver con la idea general del mago común) que realizan encargos a cambio de dinero, similar a un cazarecompensas. Natsu conoce a Lucy, una guapa muchacha cuyo sueño era ingresar a un gremio de magos, específicamente, a Fairy Tail, lo cual consigue gracias a la ayuda de Natsu. De ahí en adelante, la historia sigue los movimientos de esta pareja de magos los cuales se ven envueltos en un sin número de aventuras antes de conseguir la meta final de encontrar a Igneel.",
                    "fechaPublicacion": new Date(),
                    "banner": "http://images.iskans.com/data/original/2518fe4c5754ba4074bd9b04d9fcb32c47f0a1d2.jpg",
                    "destacado": true,
                    "Categoria": "Terror",
                    "tags": ["accion", "jovenes", "mangas"]
                }, {
                    "idShounen": 4,
                    "codigoShounen": "NWD-93883",
                    "tituloShounen": "BLEACH",
                    "descripcionShounen": "Kurosaki Ichigo es un estudiante de instituto de 15 años, que tiene una peculiaridad: es capaz de ver, oír y hablar con fantasmas. Pero no sabe hasta dónde puede abarcar la clasificación de espíritus, ni lo que conlleva el saberlo. Un buen día, una extraña chica de pequeña estatura que viste ropas negras de samurai entra en su cuarto. Se llama Rukia Kuchiki, y es una Shinigami (Dios de la Muerte). Ante la incredulidad de Ichigo, le explica que su trabajo es mandar a las almas buenas o plus a un lugar llamado la Sociedad de Almas, y eliminar a las almas malignas o hollows. Luego junto a Inoue Orihime, Ishida Uryū y Sado Yasutora se veran envueltos en diferentes batallas, las cuales iran desarrollando sus diferentes habilidades que le otorgaran a cada uno su importancia en la serie.",
                    "fechaPublicacion": new Date(),
                    "banner": "https://dailyanimeart.files.wordpress.com/2012/07/bleach_wallpaper_by_minato_naruto_zero-d4seyim.jpg",
                    "destacado": true,
                    "Categoria": "Accion",
                    "tags": ["accion", "jovenes", "mangas"]
                }, {
                    "idShounen": 5,
                    "codigoShounen": "NWD-93883",
                    "tituloShounen": "SHINGEKY NO KYOGIN TEMPORADA 2",
                    "descripcionShounen": "Esta es la segunda temporada de Attack on Titan.El mundo está gobernado por los titanes. La humanidad es la presa de estos titanes, por esto los hombres han construidos murallas de 50 metros de alto para protegerse de los Titanes. A cambio de esto, los humanos han perdido la libertad de explorar el mundo de afuera.Eren Yeager es un chico de 10 años que nunca ha visto cómo es el mundo de allá afuera. Él se siente incómodo estando rodeado de personas que han desistido de ir más allá de las murallas y prefieren disfrutar de la tranquilidad del encierro. Eren se refiere a ellos como ‘rebaño’, mientras que ellos lo llaman a él ‘extranjero’.Sin embargo, un día todo esto cambia cuando un Titan aparece destruyendo a su paso los sueños de Eren y los sueños de toda la sociedad de vivir en paz.",
                    "fechaPublicacion": new Date(),
                    "banner": "http://3.bp.blogspot.com/-IRvFtit2djs/UfBNZuq-yPI/AAAAAAAAFvs/OgyGg6H1FD4/w1920/Shingeki-NCOP1BD-02.png",
                    "destacado": false,
                    "Categoria": "Jovenes",
                    "tags": ["accion", "jovenes", "mangas"]
                }];

                var shounenUrl = "/api/shounen";

                $httpBackend.whenGET(shounenUrl).respond(shounen);

                var editingRegExp = new RegExp(shounenUrl + "/[0-9][0-9]*", '');
                $httpBackend.whenGET(editingRegExp).respond(function(method, url, data) {
                        var shounenItem = { idShounen: 0 };
                        var parameters = url.split('/');
                        var length = parameters.length;
                        var shounenItemId = parameters[length - 1];


                        if (shounenItemId > 0) {
                            for (var i = 0; i < shounen.length; i++) {
                                if (shounen[i].idShounen == shounenItemId) {
                                    shounenItem = shounen[i];
                                    break;
                                    }
                                }
                            }
                            return [200, shounenItem, {}];
                        });

                    $httpBackend.whenGET(/app/).passThrough();
                });

        }());
