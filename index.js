const jogo = {
  
  "embed": {
    "title": "**RPG DE ARENA COM JAVASCRIPT**",
    "description": "**Jogo RPG**",
    "url": "https://victorhugofny.github.io/RPG-DE-ARENA-POO-JS/",
    "color": 5673997,
    "timestamp": new Date(),
    "footer": {
      "icon_url": "https://victorhugofny.github.io/img/foto%20instagram.png",
      "text": "by victorhugofny"
    },
    "thumbnail": {
      "url": "https://i.pinimg.com/originals/c4/15/64/c41564c17acc2906ce9115ecafb1dac0.jpg"
    },
    "image": {
      "url": "https://pa1.narvii.com/6907/bc9e0d06029c2011d6115fe09825e90f4303b6f8r1-1200-744_hq.gif"
    },
    "author": {
      "name": "Victorhugofny",
      "url": "https://victorhugofny.github.io/RPG-DE-ARENA-POO-JS/",
      "icon_url": "https://i.pinimg.com/originals/c4/15/64/c41564c17acc2906ce9115ecafb1dac0.jpg"
    },
    "fields": [
      {
              "name": "Status:",
              "value": ":green_circle: **Online**"
          },
      
          {
              "name": "JOGAR: ",
              "value": "Clique aqui para jogar **[neste link](https://victorhugofny.github.io/RPG-DE-ARENA-POO-JS/)**."
          },
          {
              "name": "⠀",
              "value": "**Boa**"
          }

    ]
  }
}

const portifolio =
            {
                "embed": {
                  "title": "Portifólio",
                  "description": "\nSou Victor Hugo, Estudante de Ciencia da computação no IFBaiano, sou editor de videos trabalho como freelancer e com meu canal no youtube, e esse site foi desenvolvido por mim usando html e css. \n",
                  "url": "https://victorhugofny.github.io/",
                  "color": 15043121,
                  "timestamp": new Date(),
                   "footer": {
                      "text": "victorhugofny portifolio"
                    },
                  "thumbnail": {
                    "url": "https://victorhugofny.github.io/img/foto%20instagram.png"
                  },
                  "image": {
                    "url": "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/12/onlineshopping.gif"
                  },
                 "author": {
                      "name": "Victorhugofny",
                      "url": "https://victorhugofny.github.io/",
                      "icon_url": "https://victorhugofny.github.io/img/githubs.png"
                    },
                  "fields": [
                    {
                      "name": "victorhugofny",
                      "value": "portifolio"
                    }
                  
                  ]
                }
              }

const sobre = {
  
  "embed": {
    "title": "SOBRE - COMANDOS",
    "description": "Comandos do BOT\n\nCanal no youtube = **!canal !channel **\nSobre = **!sobre !servidor !info **\nPortifolio = **!portifolio !site**\nRPG GAME = **!jogar !game**\n Gif = **!gif !gifs**\n",
    "url": "https://victorhugofny.github.io/",
    "color": 5673997,
    "timestamp": new Date(),
    "footer": {
      "text": "by victorhugofny"
    },
    "thumbnail": {
      "url": "https://yt3.ggpht.com/ytc/AKedOLTLh1FwIpz3AsHORnkKVpsbgSTdOgtKPTyE9hzJEw=s900-c-k-c0x00ffffff-no-rj"
    },
    "image": {
      "url": "https://7midias.com.br/wp-content/uploads/2020/09/7midias-blog-robo-dancando.gif"
    },
    "author": {
      "name": "Victorhugofny",
      "url": "https://victorhugofny.github.io/",
      "icon_url": "https://exame.com/wp-content/uploads/2017/03/2017-03-01t184059z_1464666150_rc152fa29950_rtrmadp_3_telecoms-mobileworld.jpg"
    },
    "fields": [
      {
              "name": "Status:",
              "value": ":green_circle: **Online**"
          },
      
          {
              "name": "Portifolio: ",
              "value": "Meus estudos **[neste link](https://victorhugofny.github.io/)**."
          }

    ]
  }
}

const gifs = ["https://www.icegif.com/wp-content/uploads/icegif-540.gif","https://c.tenor.com/ixuFRFzUsQ8AAAAC/e-nois-alek.gif","https://c.tenor.com/Vou740E3HkgAAAAC/engracado-eversonzoio.gif","https://j.gifs.com/KzM8g3.gif","https://giphy.com/gifs/TOEIAnimationUK-dragon-ball-super-broky-1MdgKtLJ7rMw9wYWvH","https://thumbs.gfycat.com/CloseDirectJaeger-size_restricted.gif","https://s2.glbimg.com/X-E5LWsixEy6b0Q-PHO6C07gt5M=/607x607/smart/e.glbimg.com/og/ed/f/original/2018/12/19/88.gif","https://c.tenor.com/3YaztZFL3oEAAAAC/yoshi-yoshi-dan%C3%A7ando.gif","https://cdn.streamelements.com/uploads/9a174e1e-4043-472b-96e8-85259220638e.gif","https://thumbs.gfycat.com/ShrillSolidFennecfox-max-1mb.gif"]

const Discord = require('discord.js');
const bot = new Discord.Client();

const token = require("./meubot.js");

bot.login(token);
bot.on('ready',() =>{
    bot.user.setActivity('!comandos bot 0.1');
    console.log('estou pronto para ser usado');
});

bot.on('message',msg =>{
  prefixo = "!"
  mensagem = msg.content
  argumentos = mensagem.split(" ")
  comando = argumentos[0].slice(prefixo.length)
  console.log(comando)
  temprefixo = argumentos[0].startsWith(prefixo)
  

  if(temprefixo){
	  if(comando == "hugo" ){
		msg.reply("Ok")

	  }
	  else if (["canal","chanel","channel","Canal","c"].includes(comando)){
		  msg.reply("https://www.youtube.com/channel/UC0LxIVk-V0k6LsX_Z251iMw")
	  }
	  
	else if (["sobre","Sobre","servidor","Servidor","Info","info",'help','ajuda','comandos','comando'].includes(comando)){
		msg.reply(sobre)
	}
  else if (["portifolio","Portfólio","portfólio","portefólio","site"].includes(comando)){
    msg.reply(portifolio)
  }

	else if (["jogar","game","Jogo","Game","jogo","jogar","rpg"].includes(comando)){
		msg.reply(jogo)
    }
  else if("gif, gifs, Gifs, Gif"){
    let valorAleatorio = Math.floor(Math.random() * 10)
    console.log(valorAleatorio)
    msg.reply(gifs[valorAleatorio])
  }
  };
            

}
)

