'use strict';

var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
var fs = require('fs');

var personality_insights = new PersonalityInsightsV3({
  password: "TU_PASSWORD",
  username: "TU_USERNAME",
  version_date: '2016-10-19'
});


personality_insights.profile({
  text: 'Hola que tal, me llamo Evert. Soy un programador de Lima, Perú. Comence a programar en el año 2011 cuando ingresé a la universidad y fue increible la forma en la que pude descubrir como funcionaban los computadores. Ahora me dedico al desarrollo de software y estoycreando la siguiente version del ecommerce en el mundo. Cuando estoy solo disfruto de escuchar bastante musica y leer acerca de nuevas tecnologias. En ocasiones me gusta discutir y debatir diversos temas de actualidad en el mundo. Muchas veces prefiero estar solo y poder disfrutar de momentos de calma. Cuando estoy rodeado de personas prefiero aquellas que sepan escuchar y con las que se pueda entablar una conversacion racional y pasiva',
  headers: { 'Content-Language': 'es' }
  },
  function (err, response) {
    if (err)
      {console.log('error:', err);}
    else
      {console.log(JSON.stringify(response, null, 2));}
});
