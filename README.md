# <img src="https://github.com/callmebot-git/node-red-contrib-whatsapp-tmb/blob/main/nodes/icons/whatsapp.svg" width="60"> [node-red](http://nodered.org)-contrib-whatsapp-tmb

## Donation for Node-red node:
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg?style=flat&logo=PayPal)](https://www.paypal.com/donate/?hosted_button_id=NF8XH8AMXZV2J)

## Installation
[![NPM](https://nodei.co/npm/node-red-contrib-whatsapp-cmb.png)](https://npmjs.org/package/node-red-contrib-whatsapp-cmb)
[![Downloads](https://img.shields.io/npm/dm/node-red-contrib-whatsapp-cmb.svg)](https://www.npmjs.com/package/node-red-contrib-whatsapp-cmb)
[![Current Release](https://img.shields.io/github/v/release/PfisterDaniel/node-red-contrib-whatsapp-cmb.svg?colorB=4cc61e)](https://github.com/PfisterDaniel/node-red-contrib-whatsapp-cmb/releases/latest)

Install from your Node-RED Manage Palette

or

Install using npm

    $ npm install node-red-contrib-whatsapp-tmb

Redmatic:

    $ source /usr/local/addons/redmatic/home/.profile
    $ cd /usr/local/addons/redmatic/var
    $ npm install --save --no-package-lock --global-style --save-prefix="~" --production node-red-contrib-whatsapp-tmb
	
	
## Create API-KEY

WIP


## Example Flow:
```yaml
[
    {
        "id": "90eae997.db5198",
        "type": "node-red-contrib-whatsapp-tmb-send-message",
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
        "type": "node-red-contrib-whatsapp-tmb-account",
        "name": "WhatsApp API Account"
    }
]
 ```
## Bugs and feature requests
Please create an issue in [GitHub](https://github.com/callmebot-git/node-red-contrib-whatsapp-tmb/issues)
