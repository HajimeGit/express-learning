window.addEventListener("DOMContentLoaded", function() {
    document.getElementById('simple-form').addEventListener("submit", function(e) {
        e.preventDefault();
        this.classList.add('hide');
        document.getElementById('telegram').classList.remove('hide');
    })

    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });

    setTimeout(() => {
        scroll.on('call', (value, way, obj) => {

            if (way === 'enter') {
                switch (value) {
                    case "pageColor":
                        // get color code from data-scroll-id  assigned to body by obj.id
                        document.querySelector('body').style.backgroundColor = obj.id;
                        break;
                }
            }

        });
    }, 800);
});