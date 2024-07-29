document.addEventListener('DOMContentLoaded', function() {  
    const genderData = {
        labels: ['Femenino', 'Masculino'],
        datasets: [{
            data: [150, 100],
            backgroundColor: ['#cd9804', '#002964'],
            hoverBackgroundColor: ['#e0a805', '#003c8f'],
            borderWidth: 1,
            borderColor: '#fff'
        }]
    };

    const careerData = {
        labels: ['Agronomía', 'Enfermería', 'Ebanistería', 'Metalmecánica', 'Electricidad', 'Informática', 'Alimentos', 'Refrigeración', 'Veterinaria'],
        datasets: [{
            data: [30, 40, 20, 25, 35, 50, 15, 20, 15],
            backgroundColor: [
                '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
                '#FF9F40', '#FF6384', '#C9CBCF', '#7CFC00'
            ],
            borderWidth: 1,
            borderColor: '#fff'
        }]
    };

    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    font: {
                        family: "'Barlow', sans-serif",
                        size: 14
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed !== null) {
                            label += context.parsed + ' estudiantes';
                        }
                        return label;
                    }
                }
            }
        }
    };

    new Chart(document.getElementById('genderChart').getContext('2d'), {
        type: 'pie',
        data: genderData,
        options: {
            ...commonOptions,
            plugins: {
                ...commonOptions.plugins,
                title: {
                    display: true,
                    text: 'Distribución de Estudiantes por Género',
                    color: '#002964',
                    font: {
                        size: 18,
                        family: "'Barlow', sans-serif",
                        weight: 'bold'
                    }
                }
            }
        }
    });

    new Chart(document.getElementById('careerChart').getContext('2d'), {
        type: 'pie',
        data: careerData,
        options: {
            ...commonOptions,
            plugins: {
                ...commonOptions.plugins,
                title: {
                    display: true,
                    text: 'Distribución de Estudiantes por Carrera',
                    color: '#002964',
                    font: {
                        size: 18,
                        family: "'Barlow', sans-serif",
                        weight: 'bold'
                    }
                }
            }
        }
    });

    const slide = document.querySelector('.carrusel-slide');
    const items = document.querySelectorAll('.carrusel-item');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let currentIndex = 0;

    function updateSlide() {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    next.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % items.length;
        updateSlide();
    });

    prev.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateSlide();
    });

    updateSlide();

    setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        updateSlide();
    }, 5000);


    const menu = document.querySelector('.menu');
    const menuToggle = document.getElementById('menu-toggle');
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            menu.classList.add('fixed');
        } else {
            menu.classList.remove('fixed');
        }
    });

    menuToggle.addEventListener('change', function() {
        navbar.classList.toggle('active');
    });



    //==========================================================//
    //                       Carreras                           //
    //==========================================================//

    

});