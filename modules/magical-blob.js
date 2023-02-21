export class MagicalBlob {
    constructor(){
        this.trackingnumber = document.querySelectorAll(".magical-blob").length;

        this.blob = document.createElement('div');
        this.blob.id = `magical-blob-${this.trackingnumber}`;
        this.blob.classList.add('magical-blob');     

        document.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = event;

            this.blob.animate({
                left: `${clientX -200 }px`,
                top: `${clientY - 200 }px`
            }, { duration: 3000, fill: "forwards" });
        });

        return this.blob
    }
}