

export class ThreeDots {

    // 配列を結合する
    a(arr1: string[], arr2: string[]): string[] {
        return [...arr1, ...arr2];
    }

    // 文字列を配列に変換する
    b(str: string): Array<string> {
        return [...str];
    }

    // 数字配列の中の最大値もしくは最小値を返却する
    c(arr: number[], f: number): number {
        return f !== -1 ? Math.max(...arr) : Math.min(...arr);
    }

    // 配列をディープコピーする
    d(arr: string[]): string[] {
        return [...arr];
    }

    // 配列から重複を取り除く
    e(arr: string[]): string[] {
        return [...new Set(arr)];
    }
}
