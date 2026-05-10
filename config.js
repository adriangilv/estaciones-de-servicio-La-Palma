var config = {
    style: 'mapbox://styles/adriangil/cmoyqcckz002j01sbbzs86pes',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiYWRyaWFuZ2lsIiwiYSI6ImNtb3lxMjQ3bjA4N3UycHIyeWl2ZnFweG0ifQ._BF-IB5GspZz2j7fmkXexA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Estaciones de servicio en La Palma',
    subtitle: 'Distribución geográfica de las estaciones de servicio en la isla',
    byline: 'By Adrián Gil',
    footer: 'Fuente: Gobierno de España. <br> Creado a través de <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Mapa de calor',
            image: false,
            description: 'El mapa evidencia una distribución desigual de estaciones de servicio en La Palma: las áreas en rojo señalan los puntos con mayor concentración, mientras que las zonas en azul reflejan una presencia significativamente menor. Esta variabilidad territorial permite identificar claramente los corredores con mayor oferta frente a las áreas con menor cobertura.',
            location: {
                center: [-17.84969, 28.65612],
                zoom: 10,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Norte',
            image: false,
            description: 'En el norte de la isla se encuentran 5 compañias de estaciones de servicios diferentes, como Disa, Shell, Repsol y Pcan. DISA y Shell no son la misma compañía, pero están vinculadas comercialmente en Canarias. Estas dos compañias son las principales empresas de toda la isla.',
            location: {
                center: [-17.83579, 28.78237],
                zoom: 11,
                pitch: 40,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Centro Este',
            image: 'https://diariodeavisos.elespanol.com/wp-content/uploads/2018/06/gasolinera-digital.jpg',
            description: 'El centro de la isla es la más poblada en cuanto estaciones de servicio. Al Este de La Palma se observan 5 comeptidoras, con predominancia de estaciones Disa-Shell.',
            location: {
                center: [-17.77230, 28.67996],
                zoom: 13,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
                {
            id: 'fourth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Centro Oeste',
            image: 'https://descuentos.ccoo.es/cms/g/public/servicios/7295.png',
            description: 'El Oeste de La Palma posee la mayor concentración de estaciones de servicio, dominada totalmente por la alianza Disa-Shell.',
            location: {
                center: [-17.93283, 28.64692],
                zoom: 13,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fiveth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Sur',
            image: false,
            description: 'El sur de La Palma posee una única estacion de servicio perteneciente a Pcan.',
            location: {
                center: [-17.84031, 28.51160],
                zoom: 12,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Conclusión',
            image: false,
            description: 'El mercado de La Palma está dominado por operadores canarios: la alianza DISA-Shell y PCAN (menor participación) concentran la mayoría de las estaciones. Su presencia es especialmente fuerte en los principales corredores urbanos, mientras que existen zonas con baja cobertura. Esta estructura abre una oportunidad clara para que una nueva compañía entre reforzando la oferta en áreas poco atendidas o con una propuesta diferenciada.',
            location: {
                center: [-17.84699, 28.65311],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }

    ]
};
