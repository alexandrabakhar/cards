export class Modal {
    constructor(gameStatus) {
        this.classes = [];
        this.modal = '';
        this.modalTitle = '';
        this.modalBtn = '';
        this.wrapper = '';
        this.modalText = '';
        this.time = '';
        this.modalImg = '';
        this.gameStatus = gameStatus;
    }

    buildModal(title) {
        this.wrapper = this.createDomNode(
            this.wrapper,
            'div',
            'modal__wrapper'
        );

        this.modal = this.createDomNode(this.modal, 'div', 'modal__content');

        this.modalTitle = this.createDomNode(
            this.modalTitle,
            'h2',
            'modal__title'
        );
        this.modalTitle.textContent = title;

        this.modalText = this.createDomNode(this.modalText, 'p', 'modal__text');
        this.modalText.textContent = 'Затраченное время:';
        this.time = this.createDomNode(this.time, 'h1', 'modal__time');
        this.time.textContent = window.application.gameTime;
        this.classes = ['btn', 'modal__btn'];
        this.modalBtn = this.createDomNode(
            this.modalBtn,
            'button',
            this.classes
        );
        this.modalBtn.textContent = 'Играть снова';
        this.buildImg(this.gameStatus);
        this.bindEvents();
        this.appendsModalElements();
    }

    buildImg(status) {
        this.modalImg = this.createDomNode(this.modalImg, 'img', 'modal__img');
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
    createDomNode(node, elemHTML, classes) {
        node = document.createElement(elemHTML);
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
        this.wrapper.append(this.modal);
        this.modal.append(this.modalImg);
        this.modal.append(this.modalTitle);
        this.modal.append(this.modalText);
        this.modal.append(this.time);
        this.modal.append(this.modalBtn);
    }

    bindEvents() {
        this.modalBtn.addEventListener('click', (event) => {
            event.preventDefault();
            window.application.renderScreen('difficulty');
        });
    }
    openModal() {
        document.querySelector('.content').append(this.wrapper);
    }

    closeModal() {
        this.wrapper.remove();
    }
}
