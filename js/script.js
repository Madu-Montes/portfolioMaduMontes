document.addEventListener("DOMContentLoaded", function () {
    const events = document.querySelectorAll(".timeline-event");
    const infosFormacao = document.querySelector(".infos-formacao span");

    const descriptions = {
        "2020": "Em 2020, entrei para o curso técnico em Desenvolvimento de Sistemas na Etec, onde tive meu primeiro contato com TI, e em especial com o desenvolvimento front-end e design, apesar de ter caido de paraquedas nesse universo, aos poucos fui me acostumando com a ideia de seguir na área.",
        "2022": "Em 2022, concluí o curso Técnico em Desenvolvimento de Sistemas na Etec Jardim Ângela, já sabendo que queria seguir em Tech, mas ainda sem ter certeza do curso.",
        "2023": "Em 2023, iniciei minha graduação em Análise e Desenvolvimento de Sistemas na PUCRS. Através do ProUni consegui uma bolsa integral e passei a me dedicar ao curso.",
        "2024": "Em 2024, comecei a explorar cursos livres, incluindo EHT, principalmente depois de passar a trabalhar na área de Audioria de SI, onde meus colegas passaram a me inserir em Cybersegurança. "
    };

    events.forEach(event => {
        event.addEventListener("mouseover", function () {
            const year = event.querySelector(".timeline-event-icon").textContent.trim();
            infosFormacao.textContent = descriptions[year] || "Informação não disponível.";
        });

        event.addEventListener("mouseout", function () {
            infosFormacao.textContent = "";
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
});
