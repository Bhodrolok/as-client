class ProxyReplica {
    /**
     * Circular linked list for defined proxy server URLs 
     */
    constructor() {
        this._index = 0; 
        this._backups = [
            "https://aspxy1.bhodrolok.xyz",
            "https://aspxy2.bhodrolok.xyz",
            "https://aspxy3.bhodrolok.xyz",
            "https://adshare-proxy-server.onrender.com"
        ]
    }

    get current() {
        return this._backups[this._index];
    }

    next() {
        let current = this._backups[this._index];
        this._index = ++this._index % this._backups.length;
        return current;
    }
}

const proxy = new ProxyReplica();

document.querySelectorAll('.ad').forEach((ad, i) => {
    ad.setAttribute('src', `${proxy.current}/ad?i=${i}`);
    ad.addEventListener('error', () => {
        if (i === 0) {
            // only advance to next replica once if this is the first ad
            proxy.next();
        }
        ad.setAttribute('src', `${proxy.current}/ad?i=${i}`);
    });
});

function switchAd() {
    document.getElementById('switcher').src = "script.js";
}



