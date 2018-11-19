export function pick<T extends object, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> {
    const acc: Partial<T> = {};
    for (let i = 0; i < keys.length ; i++) {
        acc[keys[i]] = obj[keys[i]];
    }
    return acc as any;
}

type Callback<T> = (param: T) => any;

export function reSelect<T>(callback: Callback<T>): Callback<T> {
    let memoized: {[key: string]: Callback<T>} = {};
    return function(param: T): any {
        if (memoized[param as any]) {
            return memoized[param as any];
        } else {
            return memoized[param as any] = callback(param);
        }
    }
}

export function addClass(...classNames: (string | 0 | null | undefined | false)[]): string{
    return classNames.filter(Boolean).join(' ');
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
