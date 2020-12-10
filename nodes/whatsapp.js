
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
			}else{
				SendText = config.text;
			}
            
            //Build Request-Link
            var reqUrl = RootLink + "phone=" + this.credentials.phonenumber +"&text=" + encodeURIComponent(SendText)+ "&apikey=" + this.credentials.key + "&source=nodered";
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
                        }else{
                            msg.payload = "Message '" + SendText + "' was send successfully";
                            node.send(msg);
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