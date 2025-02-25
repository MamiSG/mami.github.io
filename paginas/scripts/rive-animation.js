document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("riveBox");
    const ctx = canvas.getContext("2d");
    const scaleFactor = window.devicePixelRatio || 1;
    canvas.width = canvas.parentElement.clientWidth * scaleFactor;
    canvas.height = canvas.parentElement.clientHeight * scaleFactor;
    ctx.scale(scaleFactor, scaleFactor);

    const riveInstance = new rive.Rive({
        src: "./assets/untitled.riv", 
        canvas: canvas,
        autoplay: true,
        stateMachines: "State Machine 1",
        onLoad: () => {
            console.log("Animação carregada!");

            const inputs = riveInstance.stateMachineInputs("State Machine 1");
            console.log("Inputs do State Machine:", inputs);

            const trigger = inputs.find(input => input.name === "Trigger 1");

            if (trigger) {
                canvas.addEventListener("click", () => {
                    console.log("Caixa clicada! Disparando Trigger 1.");
                    trigger.fire();
                });
            } else {
                console.error("Trigger 1 não encontrado. Verifique o nome no Rive.");
            }
        }
    });
});
