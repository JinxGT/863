const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = "[Your Prefix]"

// THIS IS THE STATUS

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag} :)`);
    bot.user.setActivity("[your custom status]", { 
        type: "STREAMING", 
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
    });

}
)

//rainbow name

bot.on('ready', () => {
var colors = ['#8585ff','#fff681','#a073fd','#fd73b9'];
    var random = Math.floor(Math.random() * colors.length);
    var role = message.guild.roles.find("name", "role name");
    setInterval(() => {
        role.edit({
            color: colors[random]
        })
    }, 5000);

});

// THIS IS THE bot.login

bot.login(process.env.token);
