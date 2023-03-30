export interface cardsObject {
    id: number;
    name: string;
    img: string;
}

export interface Application {
    answer: string[];
    level: number;
    gameTime: string;
    gameStatus: object;
    timers: NodeJS.Timer[];
    blocks: {
        [key: string]: (container: HTMLElement) => void;
    };
    screens: {
        [key: string]: () => void;
    };
    renderBlock: (blockName: string, container: HTMLElement) => void;
    renderScreen: (screenName: string) => void;
    stopInterval: () => void;
}
