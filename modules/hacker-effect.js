export class HackerEffect {
    constructor(text, element_id){
        this.text = text.toUpperCase();
        this.letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.element = document.createElement('h1');
        this.element.id = element_id;
        this.element.innerHTML = this.text;
        this.element.dataset.value = this.text;

        this.element.classList.add("hacker-effect");
        this.element.addEventListener('pointerover', event => {
            let iterations = 0;

            const interval = setInterval(() => {
                event.target.innerText = event.target.innerText.split("")
                    .map((letter, index) => {
                        if (index < iterations){
                            return event.target.dataset.value[index];
                        }
                        return this.letters[Math.floor(Math.random() * 26)]
                    })
                    .join("");

                if (iterations >= event.target.dataset.value.length) {
                    clearInterval(interval);
                }

                iterations = iterations + 1/3;

            }, 30)
        });

        return this.element
    }
}

