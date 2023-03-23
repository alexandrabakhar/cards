export class Modal {
    classes?: string[];
    modal?: HTMLElement;
    modalTitle?: HTMLElement;
    modalBtn?: HTMLElement;
    wrapper?: HTMLElement;
    modalText?: HTMLElement;
    time?: HTMLElement;
    modalImg?: HTMLElement;
    gameStatus: string;
    constructor(gameStatus: string) {
        this.gameStatus = gameStatus;
    }

    buildModal(title: string) {
        this.wrapper = this.createDomNode('div', 'modal__wrapper');

        this.modal = this.createDomNode('div', 'modal__content');

        this.modalTitle = this.createDomNode('h2', 'modal__title');
        this.modalTitle.textContent = title;

        this.modalText = this.createDomNode('p', 'modal__text');
        this.modalText.textContent = 'Затраченное время:';
        this.time = this.createDomNode('h1', 'modal__time');
        this.time.textContent = window.application.gameTime;
        this.classes = ['btn', 'modal__btn'];
        this.modalBtn = this.createDomNode('button', this.classes);
        this.modalBtn.textContent = 'Играть снова';
        this.buildImg(this.gameStatus);
        this.bindEvents();
        this.appendsModalElements();
    }

    buildImg(status: string) {
        this.modalImg = this.createDomNode('img', 'modal__img');
        if (status === 'win') {
            this.modalImg.setAttribute('src', '../static/images/win.png');
            this.modalImg.setAttribute('alt', 'WIN');
            return;
        }
        if (status === 'loose') {
            this.modalImg.setAttribute('src', '../static/images/loose.png');
            this.modalImg.setAttribute('alt', 'LOOSE');
            return;
        }
    }
    createDomNode(elemHTML: string, classes: string | string[]) {
        const node = document.createElement(elemHTML);
        if (classes) {
            if (Array.isArray(classes)) {
                node.classList.add(...classes);
                return node;
            }
            node.classList.add(classes);
        }

        return node;
    }

    appendsModalElements() {
        if (
            !this.wrapper ||
            !this.modal ||
            !this.modal ||
            !this.modal ||
            !this.modal ||
            !this.modal
        ) {
            return;
        }
        this.wrapper.appendChild(this.modal);
        this.modal.appendChild(this.modalImg as HTMLElement);
        this.modal.appendChild(this.modalTitle as HTMLElement);
        this.modal.appendChild(this.modalText as HTMLElement);
        this.modal.appendChild(this.time as HTMLElement);
        this.modal.appendChild(this.modalBtn as HTMLElement);
    }

    bindEvents() {
        if (!this.modalBtn) {
            return;
        }
        this.modalBtn.addEventListener('click', (event) => {
            event.preventDefault();
            window.application.renderScreen('difficulty');
        });
    }
    openModal() {
        if (!this.wrapper) {
            return;
        }
        document.querySelector('.content')?.append(this.wrapper);
    }

    closeModal() {
        if (!this.wrapper) {
            return;
        }
        this.wrapper.remove();
    }
}
