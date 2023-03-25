class ProxyReplica {
    /**
     * Circular linked list for defined server URLs 
     */
    constructor() {
        this._index = 0; 
        this._backups = [
            "http://aspxy1.bhodrolok.xyz",
            "http://aspxy2.bhodrolok.xyz",
            "http://aspxy3.bhodrolok.xyz",
            "http://aspxy4.bhodrolok.xyz",
            "http://aspxy5.bhodrolok.xyz",
            "https://amazing-limiter-378022.uw.r.appspot.com",
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
    console.log(ad)
    setTimeout(() => {
        ad.setAttribute('src', `${proxy.current}/ad?t=${Date.now()}`);
        ad.addEventListener('error', () => {
            if (i === 0) {
                // only advance to next replica once if this is the first ad
                proxy.next();
            }
            ad.setAttribute('src', `${proxy.current}/ad?t=${Date.now()}`);
        });
    }, 500*i);
});



function myFunction() {
    document.getElementById('switcher').src = "images/background.jpg";
    }