const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = "="

// THIS IS THE STATUS

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag} :)`);
    bot.user.setActivity("the key series", { 
        type: "Watching", 
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
    });

}
)

//rainbow name

bot.on('ready', () => {
var colors = ['#8585ff','#fff681','#a073fd','#fd73b9'];
    var random = Math.floor(Math.random() * colors.length);
    var role = guild.roles.cache.get("817857046875340821");
    setInterval(() => {
        role.edit({
            color: colors[random]
        })
    }, 5000);

});

// THIS IS THE bot.login

bot.login(process.env.token);
