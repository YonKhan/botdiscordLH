const Discord = require('discord.js');

const bot = new Discord.Client()


bot.on('ready', function(message) {
})

bot.on('guildMemberAdd', function(member) {
  member.createDM().then(function (channel) {
    return channel.send("Ola Moussaillon ! Bienvenue dans l'aventure COWABUNGA ! N'oublies pas de te rendre sur le channel read_first et de t'ajouter au roster via le lien suivant https://bit.ly/2LTPY0A")
  }).catch(console.error)
})

bot.on('message', function(message) {
  if (message.content === '!roster') {
    message.reply("Aye! Voilà le lien du google sheet contenant le roster de la guilde https://bit.ly/2LTPY0A, inscris-toi si c'est pas fait!")
  }

  if (message.content === '!trailer') {
    message.reply("Hissez ho ! Voilà le lien du trailer Moussaillon https://www.youtube.com/watch?v=kS5nmzE3QKA")
  }

  if (message.content === '!video') {
    message.channel.send("https://www.youtube.com/watch?v=kS5nmzE3QKA");
  }


  if (message.content === '!site') {
    message.reply("Morbleu ! Le site c'est à barbord par ici http://www.cowabungaaa.fr/")
  }

  if (message.content === '!help') {
    const embed = "Voici la liste des commandes : "
  }


  if (message.content === "!test_embed") {
    const embed = {
  "description": "<COWABUNGA> est une guilde axée PVE semi hardcore, accompagnée de premade en guilde. Le noyau de la guilde est composé de joueurs ayant une expérience très poussé du contenu WOW Vanilla.Notre objectif est de rassembler les joueurs FR les plus vaillants de ce monde pour pouvoir jouer ensemble sur Northdale.\nNe restez plus seul ici bas.\nEt affrontez les dangers d'Azeroth à nos côtés !\n \u200b",
  "url": "http://cowabungaaa.fr/",
  "color": 12354897,
  "thumbnail": {
    "url": "https://preview.ibb.co/bHNdsd/iconecawabunga.png"
  },
//  "image": {
//    "url": "https://img.youtube.com/vi/kS5nmzE3QKA/0.jpg"
//  },
  "author": {
    "name": "Bienvenue dans la jungle, COWABUNGA !",
    "url": "http://cowabungaaa.fr/",
    "icon_url": "https://preview.ibb.co/bHNdsd/iconecawabunga.png"
  },
  "fields": [
    {
      "name": "Activités",
      "value": "A plus ou moins long terme, en joignant <Cowabunga> vous pourrez :\n→ Rejoindre un roster PVE fixe pour clean le contenu existant.\n→ Profiter des conseils et de l'expérience vanilla de nos officiers.\n→ Trouver des coéquipiers francophones pour level ensemble.\n→ Participer à l’activité du pvp sauvage sur le serveur. \n→ Partir en premade le weekend & autres soirs de la semaine.\n→ Profiter d’un vocal familial où politesse, maturité et bonne humeur sont de mises.\n \u200b"
    },
    {
      "name": "\nRecrutement",
      "value": "Nous recherchons des joueurs :\n→ Motivés et faisant passer les activités de guilde comme une priorité IG.\n→ Respectueux envers les autres joueurs. \n→ Etre francophone ou avoir un accent à couper au couteau.\n→ Etre Majeur.\n \u200b"
    },
    {
      "name": "Roster",
      "value": "Afin de vous passer membre nous vous demandons de remplir le google sheet ici https://bit.ly/2LTPY0A en indiquant la classe que vous souhaiteriez jouer. Attention rien de définitif vous pouvez à tout moment modifier votre rôle si vous le désirez, cela nous donne juste une idée à nous et aux membres pour nous permmettre de mieux nous préparer.\n \u200b"
    }
  ]
};
    message.channel.send({embed});
    //bot.channels.get("452478373160288266).send('My Message');

  }
})

bot.login("NDUyNDg1ODk5NzUwNzM1ODgy.DfRCPg.L-49tTz--3Gk2CTU5IahWGXgz8Y")
