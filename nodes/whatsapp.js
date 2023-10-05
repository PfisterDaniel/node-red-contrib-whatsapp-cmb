
module.exports = function(RED) {

	/**
	 * Define Constanten
	 */
    const RootLink= "https://api.callmebot.com/whatsapp.php?";
    
    /**
	 * Function WhatsAppAccount
	 * @param {Config} config 
	 */
	function WhatsAppAccount(config) {
		RED.nodes.createNode(this, config);
        var node = this;
        node.key = this.credentials.key; 	
        node.phonenumber = this.credentials.phonenumber; 
	}




    /**
	 * Function SendMessage
	 * @param {Config} config 
	 */
	function SendMessage(config) {
		RED.nodes.createNode(this, config);
        var node = this;
        this.credentials = RED.nodes.getNode(config.account);
        
		this.on('input', function(msg) {
            var SendText = "";
			if(config.inputtypemessage === "msg"){
				var buildText = eval("msg." + config.text)
				SendText = buildText;
            }else if(config.inputtypemessage === "flow"){
                SendText = this.context().flow.get(config.text);
			}else if(config.inputtypemessage === "global"){
                SendText = this.context().global.get(config.text);
			}else{
				SendText = config.text;
			}
            
            //Build Request-Link
            var reqUrl = "";
            var phonenr = "";
            var key = "";

            if(config.credtype === "account"){
                phonenr = this.credentials.phonenumber;
                key = this.credentials.key;

                //reqUrl = RootLink + "phone=" + this.credentials.phonenumber +"&text=" + encodeURIComponent(SendText)+ "&apikey=" + this.credentials.key + "&source=nodered";
                //node.status({ fill: "red", shape: "dot", text: reqUrl });
            }else{
                reqUrl = RootLink + "phone=";
                if(config.phonenumberinputtypemessage === "msg"){
                    phonenr = eval("msg." + config.phonenumbervalue);
                }else if(config.phonenumberinputtypemessage === "flow"){
                    phonenr = this.context().flow.get(config.phonenumbervalue);
                }else if(config.phonenumberinputtypemessage === "global"){
                    phonenr = this.context().global.get(config.phonenumbervalue);
                }

                reqUrl += "&text=" + encodeURIComponent(SendText) + "&apikey=";

                if(config.apikeyinputtypemessage === "msg"){
                    key = eval("msg." + config.apikeyvalue);
                    
                }else if(config.apikeyinputtypemessage === "flow"){
                    key = this.context().flow.get(config.apikeyvalue);
                }else if(config.apikeyinputtypemessage === "global"){
                    key = this.context().global.get(config.apikeyvalue);
                }
            }

            reqUrl = RootLink + "phone=" + phonenr +"&text=" + encodeURIComponent(SendText)+ "&apikey=" + key + "&source=nodered";
            msg.requestUrl = reqUrl;
            msg.phoneNumber = phonenr;

            //Run Request
            var request;
            if(config.rejectssl){
                request = require('request').defaults({rejectUnauthorized:false});
            }else{
                request = require('request')
            }
            request(reqUrl, function(error, response, body) {
                try {
                    if (error) {
                        node.error(error)
                    } else {
                        if (body.includes('APIKey is invalid')){
                            node.error("API-KEY not valid! Please check your phone number or API-KEY!")
                            node.status({ fill: "red", shape: "dot", text: "Failed" });
                        }else{
                            msg.payload = "Message '" + SendText + "' was send successfully";
                            node.send(msg);
                            node.status({ fill: "green", shape: "dot", text: "Message was send to " + phonenr });
                        }
                    }
                } catch(error) {
                    node.error(error)
                }
            })
        })
    }


    
    /**
	 * Register Nodes
	 */
    RED.nodes.registerType('node-red-contrib-whatsapp-cmb-account', WhatsAppAccount,{
        credentials: {
            key: {type:"password"},
            phonenumber: {type:"text"}
        }
    });
    RED.nodes.registerType('node-red-contrib-whatsapp-cmb-send-message', SendMessage);
}