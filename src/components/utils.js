export class Utils {
	static randomClassName(length = 8) {
		const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
		let result = '';
		result += characters[Math.floor(Math.random() * 26)];
		for (let i = 1; i < length; i++) {
			result += characters[Math.floor(Math.random() * characters.length)];
		}
		return result;
	}

	static showSuccess(message) {
		let toast = new Notyf();
		toast.success({message:message});
	}

	static showError(message) {
		let toast = new Notyf();
		toast.error({duration: 10000, message:message});
	}

	static copyTextToClipboard(text) {
        navigator.clipboard.writeText(text).then(function() {
			//Utils.showSuccess('copy');
        }, function(err) {
            
        });
    }

	static encodeUnicodeToBase64(str) {
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) => 
          String.fromCharCode('0x' + p1)
        ));
      }
      
    static decodeBase64ToUnicode(base64) {
        return decodeURIComponent(Array.prototype.map.call(
          atob(base64), 
          c => '%' + c.charCodeAt(0).toString(16).padStart(2, '0')
        ).join(''));
      }

	static strToInt(str) {
		return parseInt(str);
	}

	static intToStr(int) {
		return int.toString();
	}
}