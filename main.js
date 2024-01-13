// Before any action, you must to download NodeJS and Visual Studio Code ; Next, you start to download a first package: npm init and you select enter until it's finish
// It's necessary you go to the Discord Developper and you create an application if it isn't done yet ;
// It will do you add images in the tab named 'Rich Presence' --> 'Art Asset' --> 'Add Images' ;
// Next, you return in the tab named 'General Informations' and you copy the applicaton' ID ;
const DiscordRPC = require('discord-rpc'); // You must to download the NPM module in the terminal: npm install discord-rpc
const client = new DiscordRPC.Client({ transport: 'ipc' });
const clientId = 'Your Application ID'; // Here, you paste the application' ID

DiscordRPC.register(clientId)

async function setActivity() {
    if(!client) return;
    client.setActivity({
        detail: '', // The detail is the first line of the rich presence
        state: '', // The state is the second line of the rich presence (this line is not necessary, if you want, you can to delete it)
        startTimestamp: Date.now(), // This line serve to define a start point but if you want, you can replace that with an unix time code.
        largeImageKey: '', // The name of the image who will Large
          largeImageText: '', // The text of this Image
        smallImageKey: '', // The name of the image who will small (It's not necessary, you can to show only the large image and you delete the second one)
          smallImageText: '', // The text of this image
        instance: false, // This line depends if you want to include instance or no
        buttons: [
            {
                label: '', // The name of the first button
                url: '' // The URL of the first button
            },
            {
                label: '', // The name of the second button
                url: '' // The URL of the second button
            }
        ] // The second button is not necessary, if you want, you can to show only the first button and you delete the second one

    }); // If you want to know how define each things, you can go to your Discord Application, in the tabs 'Discord Rich Presence' --> 'Visualizer'.
};

client.on('ready', async () => {
    setActivity();
    setInterval(() => {
        setActivity();
    }, 15 * 1000);
}); // This lines permits to define event

client.login({ clientId }).catch(err => console.error(err)); // This line permit to identify the client (you), and show error if it have, in the terminal (console)


// I prefer to specify that, to create this repository, I got inspired any videos and documentations, so It's not me who created the project, I simply explain it more and a better way. !!
