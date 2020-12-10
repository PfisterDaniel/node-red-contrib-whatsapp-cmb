# <img src="https://github.com/PfisterDaniel/node-red-contrib-whatsapp-cmb/blob/main/nodes/icons/whatsapp.svg" width="60"> [node-red](http://nodered.org)-contrib-whatsapp-cmb


## Installation
[![NPM](https://nodei.co/npm/node-red-contrib-whatsapp-cmb.png)](https://npmjs.org/package/node-red-contrib-whatsapp-cmb)

[![Current Release](https://img.shields.io/github/v/release/PfisterDaniel/node-red-contrib-whatsapp-cmb.svg?colorB=4cc61e)](https://github.com/PfisterDaniel/node-red-contrib-whatsapp-cmb/releases/latest)

Install from your Node-RED Manage Palette

or

Install using npm

    $ npm install node-red-contrib-whatsapp-cmb

Redmatic:

    $ source /usr/local/addons/redmatic/home/.profile
    $ cd /usr/local/addons/redmatic/var
    $ npm install --save --no-package-lock --global-style --save-prefix="~" --production node-red-contrib-whatsapp-cmb
	
	
## Create API-KEY

1. Add the phone number +34 644 53 78 49  into your Phone Contacts. (Name it it as you wish)
2. Send this message "I allow callmebot to send me messages" to the new Contact created (using WhatsApp of course)
3. Wait until you receive the message "API *Activated* for your phone number. Your APIKEY is *123123*" from the bot. As this is still in beta testing, the activation can take up to 2 minutes.
4. The WhatsApp message from the bot will contain the apikey needed to send messages using the API.

<img src="https://github.com/PfisterDaniel/node-red-contrib-whatsapp-cmb/blob/main/images/create_api_key_example.jpg" width="500" height="117">

## Example Flow:
```yaml
[
    {
        "id": "90eae997.db5198",
        "type": "node-red-contrib-whatsapp-cmb-send-message",
        "z": "898ead4d.1f05d",
        "name": "",
        "account": "80b99021.9a4",
        "text": "",
        "rejectssl": true,
        "x": 320,
        "y": 200,
        "wires": [
            [
                "b234123a.c95f5"
            ]
        ]
    },
    {
        "id": "9b666f3e.797cb",
        "type": "inject",
        "z": "898ead4d.1f05d",
        "name": "",
        "props": [
            {
                "p": "text",
                "v": "This is the Message Text",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "x": 130,
        "y": 140,
        "wires": [
            [
                "90eae997.db5198"
            ]
        ]
    },
    {
        "id": "b234123a.c95f5",
        "type": "debug",
        "z": "898ead4d.1f05d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 530,
        "y": 260,
        "wires": []
    },
    {
        "id": "80b99021.9a4",
        "type": "node-red-contrib-whatsapp-cmb-account",
        "name": "WhatsApp API Account"
    }
]
 ```
## Bugs and feature requests
Please create an issue in [GitHub](https://github.com/PfisterDaniel/node-red-contrib-whatsapp-cmb/issues)
