/* Contenido de la receta. Cada paso puede tener "min" (timer en minutos) y "tip". */
const RECETA = [
  {
    id:'trago', nombre:'Momento Moment', titulo:'Momento<br>Moment', sub:'Para abrir mientras cocinan',
    ingredientes:[
      ['Canada Dry bien helada','1 lata c/u'],
      ['Hielo','a gusto'],
      ['Momentum','a gusto'],
      ['Fruta a elección','un puñado']
    ],
    pasos:[
      {t:'Enfriar los vasos', p:'Llenen los vasos con hielo y déjenlos un rato mientras cortan la fruta.', min:3},
      {t:'Cortar la fruta', p:'En rodajas o cubos chicos, lo que haya elegido cada uno.'},
      {t:'Servir', p:'Botar el agua del hielo, poner hielo nuevo, el Momentum a gusto y completar con Canada Dry. Fruta arriba.'},
      {t:'Brindar', p:'Chocar vasos por el episodio uno de la temporada dos.'}
    ]
  },
  {
    id:'plato', nombre:'The Glow Up', titulo:'The Glow<br>Up', sub:'Pollo crocante con salsa de miel, mantequilla y ajo',
    grupos:[
      {titulo:'Pollo', items:[
        ['Trutro de pollo deshuesado, en trozos chicos','600 g'],
        ['Salsa de soya','2 cdas'],
        ['Ajo en polvo','1 cdta'],
        ['Pimienta negra','1 cdta'],
        ['Azúcar','1 cdta'],
        ['Ajo molido','1 cdta'],
        ['Jengibre rallado','1 cdta'],
        ['Maicena','70 g'],
        ['Aceite para freír','1 cm en la sartén']
      ]},
      {titulo:'Salsa', items:[
        ['Mantequilla','100 g'],
        ['Miel','80 ml'],
        ['Ajo picado fino','6 a 8 dientes'],
        ['Maicena disuelta en un poco de agua','2 cdtas'],
        ['Limón','un chorrito'],
        ['Sal','½ cdta'],
        ['Merquén','1 cdta'],
        ['Sésamo','2 cdtas']
      ]},
      {titulo:'Para servir', items:[
        ['Arroz blanco','1 taza'],
        ['Palta','1'],
        ['Cebollín','2 ramas']
      ]}
    ],
    pasos:[
      {t:'Poner el arroz', p:'Lavar 1 taza de arroz hasta que el agua salga clara. Cocer con 2 tazas de agua y sal, tapado a fuego bajo.', min:18},
      {t:'Marinar el pollo', p:'En un bowl, mezclar el pollo con la soya, el ajo en polvo, la pimienta, el azúcar, el ajo molido y el jengibre. Revolver bien con las manos.', min:10, tip:'Mientras marina, avancen con la palta y el cebollín si quieren.'},
      {t:'Maicena en dos tandas', p:'Agregar la mitad de la maicena y mezclar. Cuando el pollo esté cubierto, agregar el resto y mezclar de nuevo. Tiene que quedar seco al tacto.'},
      {t:'Calentar el aceite', p:'Más o menos 1 cm de aceite en una sartén amplia a fuego medio. Está listo cuando un trocito de pollo chisporrotea al tiro.'},
      {t:'Freír por tandas', p:'Sin amontonar. Dorar por ambos lados hasta que quede crocante, unos 3 a 4 minutos por lado. Sacar a un plato con toalla de papel.', min:4, tip:'Si se amontona, se cuece al vapor y pierde lo crocante.'},
      {t:'Palta y cebollín', p:'Picar el cebollín fino. Cortar la palta en láminas y ponerle sal y limón.'},
      {t:'Base de la salsa', p:'En otra olla a fuego bajo, derretir la mantequilla con la miel. Agregar el ajo picado y dejar que se perfume sin que se dore.', min:2, tip:'Fuego bajo de verdad: si el ajo se quema, la salsa queda amarga.'},
      {t:'Espesar', p:'Agregar la maicena disuelta y revolver hasta que espese. Si queda muy espesa, un chorrito de agua. Si queda muy líquida, un par de minutos más.'},
      {t:'Sazonar', p:'Limón, sal, merquén y sésamo. Probar y ajustar.'},
      {t:'El glow up', p:'Volver el pollo frito a la salsa y mezclar hasta que quede todo brillante y cubierto.'},
      {t:'Armar el bowl', p:'Arroz abajo, pollo encima, palta al lado y cebollín arriba de todo. Foto antes de comer.'}
    ]
  },
  {
    id:'postre', nombre:'Double Dip', titulo:'Double<br>Dip', sub:'Cookie fries de mantequilla tostada con dos chocolates para mojar',
    grupos:[
      {titulo:'Masa', items:[
        ['Mantequilla sin sal','168 g'],
        ['Azúcar rubia','200 g'],
        ['Azúcar granulada','50 g'],
        ['Huevo a temperatura ambiente','1'],
        ['Yema a temperatura ambiente','1'],
        ['Esencia de vainilla','1 cda'],
        ['Harina','220 g'],
        ['Bicarbonato','¾ cdta'],
        ['Sal','¾ cdta'],
        ['Chips de chocolate semiamargo','255 g'],
        ['Flor de sal','para espolvorear']
      ]},
      {titulo:'Para mojar', items:[
        ['Chocolate semiamargo','100 g'],
        ['Chocolate blanco','100 g']
      ]}
    ],
    pasos:[
      {t:'Tostar la mantequilla', p:'En una olla chica a fuego medio bajo. Revolver y raspar el fondo cada 10 a 15 segundos. Primero hace espuma, después las burbujas se achican y empieza a oler a nuez. Está lista cuando toma color y aparecen puntitos cafés en el fondo.', min:6, tip:'Fuego bajo es la clave para que se tueste parejo.'},
      {t:'Dejar enfriar', p:'Sacar del fuego y dejarla en la olla unos minutos.', min:5},
      {t:'Mezclar con los azúcares', p:'En un bowl grande, la mantequilla tostada con el azúcar rubia y la granulada. Mezclar con espátula.'},
      {t:'Huevo, yema y vainilla', p:'Agregar y mezclar bien hasta que quede integrado.'},
      {t:'Secos', p:'Harina, bicarbonato y sal. Incorporar con movimientos envolventes solo hasta que no se vea harina. Sin sobremezclar.', tip:'La masa tiene que quedar suave pero no pegajosa.'},
      {t:'Chips', p:'Agregar los chips de chocolate y repartirlos sin revolver de más.'},
      {t:'Al refri', p:'Tapar el bowl y guardar en el refri.', min:60, tip:'Esta es la hora en que hacen el trago y el pollo.'},
      {t:'Temperar y prender el horno', p:'Sacar la masa y dejarla a temperatura ambiente hasta que se pueda trabajar. Mientras, precalentar el horno a 175°C.', min:20},
      {t:'Cortar las papas', p:'Sobre papel mantequilla, estirar la masa en un rectángulo de 1,5 cm de alto. Cortar en tiras largas tipo papas fritas y separarlas un poco en la bandeja.'},
      {t:'Al horno', p:'Hornear hasta que los bordes estén dorados y el centro todavía se vea blandito. Apenas salen, flor de sal encima.', min:11, tip:'Revisen desde el minuto 9, cada horno es distinto.'},
      {t:'Los dips', p:'Derretir cada chocolate por separado, a baño maría o en el microondas en tandas de 30 segundos revolviendo entre cada una.'},
      {t:'Double dip', p:'Servir las papas con los dos chocolates al lado. Mojar dos veces está permitido.'}
    ]
  }
];

const NOTA = [
  'Jotita, si estás leyendo esto es porque sobrevivimos a cocinar algo juntos después de harto tiempo, y algo difícil de cocinar. Eso ya es harto jajaja.',
  'Gracias por permitirme esta instancia, por haber conversado todo y que podamos estar acá, por cocinar conmigo y tener la disposición y ganas de crecer juntos.',
  'Que esta temporada de SiempreLab tenga muchos capítulos más.'
];


/* Plan de la noche: el orden real para que todo calce. "ir" es la pestaña a la que lleva. */
const PLAN = [
  {t:'Masa del Double Dip', d:'Mantequilla tostada, mezcla y chips. Termina en el refri.', dur:'20 min', ir:'postre'},
  {t:'Momento Moment', d:'Mientras la masa se enfría, el trago.', dur:'10 min', ir:'trago'},
  {t:'The Glow Up', d:'Arroz, marinar, freír y la salsa.', dur:'45 min', ir:'plato'},
  {t:'Sacar la masa y a comer', d:'La masa se tempera 20 min mientras comen el pollo.', dur:'20 min', ir:'postre'},
  {t:'Horno y dips', d:'Cortar las papas, hornear y derretir los chocolates.', dur:'20 min', ir:'postre'},
  {t:'Double dip', d:'Y al final, lo que se abre cuando terminen.', dur:'', ir:'nota'}
];
