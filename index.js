document.querySelectorAll('.ad').forEach((ad, i) => {
    console.log(ad)
    setTimeout(() => {
        ad.setAttribute('src', `https://amazing-limiter-378022.uw.r.appspot.com/ad?t=${Date.now()}`);
    }, 500*i);
});