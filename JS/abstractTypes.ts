interface cardsObject {
    id: number;
    name: string;
    img: string;
};

// interface InputRender {
//     [key: string]: () => void
// }

interface Application {
    answer: string[];
    level: number;
    gameTime: string;
    gameStatus: {};
    timers: string[];
    blocks: {
        [key: string]: (container: HTMLElement) => void;
    };
    screens: {
        [key: string]: () => void
    };
    renderBlock: (blockName: string, container: HTMLElement) => void;
    renderScreen: (screenName: string) => void;
    stopInterval: () => void;
}
