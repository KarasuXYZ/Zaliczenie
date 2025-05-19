
particlesJS('particles-js',
    {
        "particles": {
            "number": {
                "value": 80,  // Ilość cząsteczek
                "density": {
                    "enable": true,
                    "value_area": 500
                }
            },
            "color": {
                "value": "#ffffff"  // Kolor cząsteczek
            },
            "shape": {
                "type": "circle"  // Wybiram kształt np. może być kółko trójkąt czy kwadrat
            },
            "opacity": {
                "value": 0.5, //przezroczystoć
                "random": false
            },
            "size": {
                "value": 4,  // Rozmiar cząsteczek
                "random": true
            },
            "line_linked": {    //łączenie się ich liniami
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.3,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 4,  // Prędkość ruchu
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": true
            }
        },
        // Kod nie zawiera żadnych interaktywnych elementów bo jest w tle za wszystkimi elementami a nie chce mi się z tym męczyć xD
        "retina_detect": true
    });