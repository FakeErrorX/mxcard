# __About__
**Musicard** is a futuristic music card library designed for Discord bots.

# __Installation__
```
npm install git+https://github.com/fakeerrorx/mxcard
```

# __Example__
This example code will generate a music card image and save it.
```js
(async () => {
    const { mxcard } = require("mxcard");
    const fs = require("fs");

    const card = new mxcard()
        .setName("Biru Baru")
        .setAuthor("Sejenak")
        .setColor("auto")
        .setTheme("classic")
        .setBrightness(50)
        .setThumbnail("https://cdn.is-a.fun/mewwme/mewwme.png")
        .setProgress(10)
        .setStartTime("0:00")
        .setEndTime("04:27")

    const cardBuffer = await card.build();

    fs.writeFileSync(`mxcard.png`, cardBuffer);
    console.log("Done!");
})()
```

# __Output__
This is the **classic** output of musicard.
[![Discord Icon](https://cdn.discordapp.com/attachments/1190508552104718397/1194854717042479234/mikoradio.png?ex=65b1de2b&is=659f692b&hm=96c92f44381e618042b2218f0f18df4a3e595ef3ffcbebba52c5d01cd02dfc36)](https://your-discord-server-link.com)



# Originial Source

```
https://github.com/a3pire
```
# Projects
|  Sr.  |            Name            |  Platform  |
|:-----:|:--------------------------:|:----------:|
| **1** | [Miko Radio](https://discord.com/oauth2/authorize?response_type=code&client_id=1176036435523022969&scope=guilds.join%20bot%20applications.commands&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.gg%2FYZR9YF96Fs) | discord.js |
