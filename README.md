[![Current Release](https://img.shields.io/github/v/release/PfisterDaniel/node-red-contrib-whatsapp-cmb.svg?colorB=4cc61e)](https://github.com/PfisterDaniel/node-red-contrib-whatsapp-cmb/releases/latest)


# [node-red](http://nodered.org)-contrib-whatsapp-cmb


## Installation
[![NPM](https://nodei.co/npm/node-red-contrib-whatsapp-cmb.png)](https://npmjs.org/package/node-red-contrib-whatsapp-cmb)

Install from your Node-RED Manage Palette

or

Install using npm

    $ npm install node-red-contrib-whatsapp-cmb

Redmatic:

    $ source /usr/local/addons/redmatic/home/.profile
    $ cd /usr/local/addons/redmatic/var
    $ npm install --save --no-package-lock --global-style --save-prefix="~" --production node-red-contrib-whatsapp-cmb
	
	
##Create API-KEY

1. Add the phone number +34 644 53 78 49  into your Phone Contacts. (Name it it as you wish)
2. Send this message "I allow callmebot to send me messages" to the new Contact created (using WhatsApp of course)
3. Wait until you receive the message "API *Activated* for your phone number. Your APIKEY is *123123*" from the bot. As this is still in beta testing, the activation can take up to 2 minutes.
4. The WhatsApp message from the bot will contain the apikey needed to send messages using the API.

![Example Conversation](/images/create_api_key_example.jpg =500x117)
