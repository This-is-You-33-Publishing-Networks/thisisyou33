export declare const FAUCET_PRIVATEKEY: string;
export declare const INFURA_APIKEY: string;
export declare function loadTests<T>(tag: string): Array<T>;
export declare function log(context: any, text: string): void;
export declare function stall(duration: number): Promise<void>;
export interface MochaRunnable {
    timeout: (value: number) => void;
    skip: () => void;
}
export declare function retryIt(name: string, func: (this: MochaRunnable) => Promise<void>): Promise<void>;
//# sourceMappingURL=utils.d.ts.map