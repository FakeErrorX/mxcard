(async () => {
    const { mxcard } = require("mxcard");
    const fs = require("fs");

    const card = new mxcard()
        .setName("MusicX")
        .setAuthor("REvilX")
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