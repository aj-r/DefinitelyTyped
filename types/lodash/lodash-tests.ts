declare const $: any, jQuery: any;

interface IFoodOrganic {
    name: string;
    organic: boolean;
}

interface IFoodType {
    name: string;
    type: string;
}

interface IFoodCombined {
    name: string;
    organic: boolean;
    type: string;
}

interface IStoogesQuote {
    name: string;
    quotes: string[];
}

interface IStoogesAge {
    name: string;
    age: number;
}

interface IStoogesCombined {
    name: string;
    age: number;
    quotes: string[];
}

interface IKey {
    dir: string;
    code: number;
}

interface IDictionary<T> {
    [index: string]: T;
}

const foodsOrganic: IFoodOrganic[] = [
    { name: 'banana', organic: true },
    { name: 'beet', organic: false },
];
const foodsType: IFoodType[] = [
    { name: 'apple', type: 'fruit' },
    { name: 'banana', type: 'fruit' },
    { name: 'beet', type: 'vegetable' }
];
const foodsCombined: IFoodCombined[] = [
    { 'name': 'apple', 'organic': false, 'type': 'fruit' },
    { 'name': 'carrot', 'organic': true, 'type': 'vegetable' }
];

const stoogesQuotes: IStoogesQuote[] = [
    { 'name': 'curly', 'quotes': ['Oh, a wise guy, eh?', 'Poifect!'] },
    { 'name': 'moe', 'quotes': ['Spread out!', 'You knucklehead!'] }
];
const stoogesAges: IStoogesAge[] = [
    { 'name': 'moe', 'age': 40 },
    { 'name': 'larry', 'age': 50 }
];
const stoogesAgesDict: IDictionary<IStoogesAge> = {
    first: { 'name': 'moe', 'age': 40 },
    second: { 'name': 'larry', 'age': 50 }
};
const stoogesCombined: IStoogesCombined[] = [
    { 'name': 'curly', 'age': 30, 'quotes': ['Oh, a wise guy, eh?', 'Poifect!'] },
    { 'name': 'moe', 'age': 40, 'quotes': ['Spread out!', 'You knucklehead!'] }
];

const keys: IKey[] = [
    { 'dir': 'left', 'code': 97 },
    { 'dir': 'right', 'code': 100 }
];

class Dog {
    constructor(public name: string) { }

    bark() {
        // Woof
    }
}

let any: any;

interface TResult {
    a: number;
    b: string;
    c: boolean;
}

// _.MapCache
let testMapCache: _.MapCache = {
    delete(key: string) { return true; },
    get(key: string): any { return 1; },
    has(key: string) { return true; },
    set(key: string, value: any): _.Dictionary<any> { return {}; },
    clear() { },
};

// _
namespace TestWrapper {
    {
        let result: _.LoDashImplicitWrapper<string>;
        result = _('');
    }

    {
        let result: _.LoDashImplicitWrapper<number>;
        result = _(42);
    }

    {
        let result: _.LoDashImplicitWrapper<boolean>;
        result = _(true);
    }

    {
        let result: _.LoDashImplicitWrapper<string[]>;
        result = _(['']);
    }

    {
        let result: _.LoDashImplicitWrapper<{a: string}>;
        result = _({a: ''});
    }

    {
        let result: _.LoDashImplicitWrapper<TResult[] | null | undefined>;
        let a: TResult[] | null | undefined = any;
        result = _(a);
    }

    {
        let result: _.LoDashExplicitWrapper<string>;
        result = _.chain('');
        result = _('').chain();
        result = _('').chain().chain();
    }

    {
        let result: _.LoDashExplicitWrapper<number>;
        result = _.chain(42);
        result = _(42).chain();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;
        result = _.chain(true);
        result = _(true).chain();
    }

    {
        let result: _.LoDashExplicitWrapper<string[]>;
        result = _.chain(['']);
        result = _(['']).chain();
    }

    {
        let result: _.LoDashExplicitWrapper<{a: string}>;
        result = _.chain({a: ''});
        result = _({a: ''}).chain();
    }

    {
        let result: _.LoDashExplicitWrapper<TResult[] | null | undefined>;
        let a: TResult[] | null | undefined = any;
        result = _.chain(a);
        result = _(a).chain();
    }
}

// Wrapped array shortcut methods
{
    let result: _.LoDashImplicitWrapper<number[]>;
    let valueResult: number | undefined;
    valueResult = _([1, 2, 3, 4]).pop();
    result = _([1, 2, 3, 4]).push(5, 6, 7);
    valueResult = _([1, 2, 3, 4]).shift();
    result = _([1, 2, 3, 4]).sort((a, b) => 1);
    result = _([1, 2, 3, 4]).splice(1);
    result = _([1, 2, 3, 4]).splice(1, 2, 5, 6);
    result = _([1, 2, 3, 4]).unshift(5, 6);
}

{
    let result: _.LoDashExplicitWrapper<number[]>;
    let valueResult: _.LoDashExplicitWrapper<number | undefined>;
    valueResult = _.chain([1, 2, 3, 4]).pop();
    result = _.chain([1, 2, 3, 4]).push(5, 6, 7);
    valueResult = _.chain([1, 2, 3, 4]).shift();
    result = _.chain([1, 2, 3, 4]).sort((a, b) => 1);
    result = _.chain([1, 2, 3, 4]).splice(1);
    result = _.chain([1, 2, 3, 4]).splice(1, 2, 5, 6);
    result = _.chain([1, 2, 3, 4]).unshift(5, 6);
}

/*********
 * Array *
 *********/

// _.chunk
namespace TestChunk {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    {
        let result: TResult[][];

        result = _.chunk(array);
        result = _.chunk(array, 42);

        result = _.chunk(list);
        result = _.chunk(list, 42);

        result = _(array).chunk().value();
        result = _(array).chunk(42).value();

        result = _(list).chunk<TResult>().value();
        result = _(list).chunk<TResult>(42).value();

        result = _.chain(array).chunk().value();
        result = _.chain(array).chunk(42).value();

        result = _.chain(list).chunk<TResult>().value();
        result = _.chain(list).chunk<TResult>(42).value();
    }
}

// _.compact
namespace TestCompact {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let array2: Array<TResult | null | undefined | false | "" | 0> | null | undefined = any;
    let list2: _.List<TResult | null | undefined | false | "" | 0> | null | undefined = any;

    {
        let result: TResult[];

        result = _.compact<TResult>();
        result = _.compact(array);
        result = _.compact(list);
        result = _.compact(array2);
        result = _.compact(list2);

        result = _(array).compact().value();
        result = _(list).compact().value();

        result = _.chain(array).compact().value();
        result = _.chain(list).compact().value();
    }
}

// _.concat
namespace TestConcat {
    {
        let result: number[];

        result = _.concat([1]);
        result = _.concat(1);
        result = _.concat(1, 2);
        result = _.concat([1], 2, 3);
        result = _.concat([1], [2, 3]);
        result = _.concat([1], [2, 3], [4]);

        result = _([1]).concat().value();
        result = _(1).concat().value();
        result = _(1).concat(2).value();
        result = _([1]).concat(2, 3).value();
        result = _([1]).concat([2, 3]).value();
        result = _([1]).concat([2, 3], [4]).value();

        result = _.chain([1]).concat().value();
        result = _.chain(1).concat().value();
        result = _.chain(1).concat(2).value();
        result = _.chain([1]).concat(2, 3).value();
        result = _.chain([1]).concat([2, 3]).value();
        result = _.chain([1]).concat([2, 3], [4]).value();
    }

    {
        let result: Array<number | string | boolean>;

        result = _.concat<number | string | boolean>([1], "a", true);
        result = _.concat<number | string | boolean>([1], ["a", true]);

        result = _([1]).concat<number | string | boolean>("a", true).value();
        result = _([1]).concat<number | string | boolean>(["a", true]).value();

        result = _.chain([1]).concat<number | string | boolean>("a", true).value();
        result = _.chain([1]).concat<number | string | boolean>(["a", true]).value();
    }
}

// _.difference
namespace TestDifference {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    {
        let result: TResult[];

        result = _.difference(array);
        result = _.difference(array, array!);
        result = _.difference(array, list!, array!);
        result = _.difference(array, array!, list!, array!);

        result = _.difference(list);
        result = _.difference(list, list!);
        result = _.difference(list, array!, list!);
        result = _.difference(list, list!, array!, list!);

        result = _(array).difference().value();
        result = _(array).difference(array!).value();
        result = _(array).difference(list!, array!).value();
        result = _(array).difference(array!, list!, array!).value();

        result = _(list).difference().value();
        result = _(list).difference(list!).value();
        result = _(list).difference(array!, list!).value();
        result = _(list).difference(list!, array!, list!).value();

        result = _(array).chain().difference().value();
        result = _(array).chain().difference(array!).value();
        result = _(array).chain().difference(list!, array!).value();
        result = _(array).chain().difference(array!, list!, array!).value();

        result = _(list).chain().difference().value();
        result = _(list).chain().difference(list!).value();
        result = _(list).chain().difference(array!, list!).value();
        result = _(list).chain().difference(list!, array!, list!).value();
    }
}

// _.differenceBy
namespace TestDifferenceBy {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let iteratee: (value: TResult) => any = (value: TResult) => 1;

    {
        let result: TResult[];

        result = _.differenceBy(array, array!);
        result = _.differenceBy(array, list!, array!);
        result = _.differenceBy(array, array!, list!, array!);
        result = _.differenceBy(array, list!, array!, list!, array!);
        result = _.differenceBy(array, array!, list!, array!, list!, array!);
        result = _.differenceBy(array, list!, array!, list!, array!, list!, array!);

        result = _.differenceBy(array, array!, iteratee);
        result = _.differenceBy(array, list!, array!, iteratee);
        result = _.differenceBy(array, array!, list!, array!, iteratee);
        result = _.differenceBy(array, list!, array!, list!, array!, iteratee);
        result = _.differenceBy(array, array!, list!, array!, list!, array!, iteratee);
        result = _.differenceBy(array, list!, array!, list!, array!, list!, array!, iteratee);

        result = _.differenceBy(array, array!, 'a');
        result = _.differenceBy(array, list!, array!, 'a');
        result = _.differenceBy(array, array!, list!, array!, 'a');
        result = _.differenceBy(array, list!, array!, list!, array!, 'a');
        result = _.differenceBy(array, array!, list!, array!, list!, array!, 'a');
        result = _.differenceBy(array, list!, array!, list!, array!, list!, array!, 'a');

        result = _.differenceBy(array, array!, {a: 1});
        result = _.differenceBy(array, list!, array!, {a: 1});
        result = _.differenceBy(array, array!, list!, array!, {a: 1});
        result = _.differenceBy(array, list!, array!, list!, array!, {a: 1});
        result = _.differenceBy(array, array!, list!, array!, list!, array!, {a: 1});
        result = _.differenceBy(array, list!, array!, list!, array!, list!, array!, {a: 1});

        result = _.differenceBy(list, list!);
        result = _.differenceBy(list, array!, list!);
        result = _.differenceBy(list, list!, array!, list!);
        result = _.differenceBy(list, array!, list!, array!, list!);
        result = _.differenceBy(list, list!, array!, list!, array!, list!);
        result = _.differenceBy(list, array!, list!, array!, list!, array!, list!);

        result = _.differenceBy(list, list!, iteratee);
        result = _.differenceBy(list, array!, list!, iteratee);
        result = _.differenceBy(list, list!, array!, list!, iteratee);
        result = _.differenceBy(list, array!, list!, array!, list!, iteratee);
        result = _.differenceBy(list, list!, array!, list!, array!, list!, iteratee);
        result = _.differenceBy(list, array!, list!, array!, list!, array!, list!, iteratee);

        result = _.differenceBy(list, list!, 'a');
        result = _.differenceBy(list, array!, list!, 'a');
        result = _.differenceBy(list, list!, array!, list!, 'a');
        result = _.differenceBy(list, array!, list!, array!, list!, 'a');
        result = _.differenceBy(list, list!, array!, list!, array!, list!, 'a');
        result = _.differenceBy(list, array!, list!, array!, list!, array!, list!, 'a');

        result = _.differenceBy(list, list!, {a: 1});
        result = _.differenceBy(list, array!, list!, {a: 1});
        result = _.differenceBy(list, list!, array!, list!, {a: 1});
        result = _.differenceBy(list, array!, list!, array!, list!, {a: 1});
        result = _.differenceBy(list, list!, array!, list!, array!, list!, {a: 1});
        result = _.differenceBy(list, array!, list!, array!, list!, array!, list!, {a: 1});

        result = _(array).differenceBy(array!).value();
        result = _(array).differenceBy(list!, array!).value();
        result = _(array).differenceBy(array!, list!, array!).value();
        result = _(array).differenceBy(list!, array!, list!, array!).value();
        result = _(array).differenceBy(array!, list!, array!, list!, array!).value();
        result = _(array).differenceBy(list!, array!, list!, array!, list!, array!).value();

        result = _(array).differenceBy(array!, iteratee).value();
        result = _(array).differenceBy(list!, array!, iteratee).value();
        result = _(array).differenceBy(array!, list!, array!, iteratee).value();
        result = _(array).differenceBy(list!, array!, list!, array!, iteratee).value();
        result = _(array).differenceBy(array!, list!, array!, list!, array!, iteratee).value();
        result = _(array).differenceBy(list!, array!, list!, array!, list!, array!, iteratee).value();

        result = _(array).differenceBy(array!, 'a').value();
        result = _(array).differenceBy(list!, array!, 'a').value();
        result = _(array).differenceBy(array!, list!, array!, 'a').value();
        result = _(array).differenceBy(list!, array!, list!, array!, 'a').value();
        result = _(array).differenceBy(array!, list!, array!, list!, array!, 'a').value();
        result = _(array).differenceBy(list!, array!, list!, array!, list!, array!, 'a').value();

        result = _(array).differenceBy(array!, {a: 1}).value();
        result = _(array).differenceBy(list!, array!, {a: 1}).value();
        result = _(array).differenceBy(array!, list!, array!, {a: 1}).value();
        result = _(array).differenceBy(list!, array!, list!, array!, {a: 1}).value();
        result = _(array).differenceBy(array!, list!, array!, list!, array!, {a: 1}).value();
        result = _(array).differenceBy(list!, array!, list!, array!, list!, array!, {a: 1}).value();

        result = _(list).differenceBy(list!).value();
        result = _(list).differenceBy(array!, list!).value();
        result = _(list).differenceBy(list!, array!, list!).value();
        result = _(list).differenceBy(array!, list!, array!, list!).value();
        result = _(list).differenceBy(list!, array!, list!, array!, list!).value();
        result = _(list).differenceBy(array!, list!, array!, list!, array!, list!).value();

        result = _(list).differenceBy(list!, iteratee).value();
        result = _(list).differenceBy(array!, list!, iteratee).value();
        result = _(list).differenceBy(list!, array!, list!, iteratee).value();
        result = _(list).differenceBy(array!, list!, array!, list!, iteratee).value();
        result = _(list).differenceBy(list!, array!, list!, array!, list!, iteratee).value();
        result = _(list).differenceBy(array!, list!, array!, list!, array!, list!, iteratee).value();

        result = _(list).differenceBy(list!, 'a').value();
        result = _(list).differenceBy(array!, list!, 'a').value();
        result = _(list).differenceBy(list!, array!, list!, 'a').value();
        result = _(list).differenceBy(array!, list!, array!, list!, 'a').value();
        result = _(list).differenceBy(list!, array!, list!, array!, list!, 'a').value();
        result = _(list).differenceBy(array!, list!, array!, list!, array!, list!, 'a').value();

        result = _(list).differenceBy(list!, {a: 1}).value();
        result = _(list).differenceBy(array!, list!, {a: 1}).value();
        result = _(list).differenceBy(list!, array!, list!, {a: 1}).value();
        result = _(list).differenceBy(array!, list!, array!, list!, {a: 1}).value();
        result = _(list).differenceBy(list!, array!, list!, array!, list!, {a: 1}).value();
        result = _(list).differenceBy(array!, list!, array!, list!, array!, list!, {a: 1}).value();

        result = _.chain(array).differenceBy(array!).value();
        result = _.chain(array).differenceBy(list!, array!).value();
        result = _.chain(array).differenceBy(array!, list!, array!).value();
        result = _.chain(array).differenceBy(list!, array!, list!, array!).value();
        result = _.chain(array).differenceBy(array!, list!, array!, list!, array!).value();
        result = _.chain(array).differenceBy(list!, array!, list!, array!, list!, array!).value();

        result = _.chain(array).differenceBy(array!, iteratee).value();
        result = _.chain(array).differenceBy(list!, array!, iteratee).value();
        result = _.chain(array).differenceBy(array!, list!, array!, iteratee).value();
        result = _.chain(array).differenceBy(list!, array!, list!, array!, iteratee).value();
        result = _.chain(array).differenceBy(array!, list!, array!, list!, array!, iteratee).value();
        result = _.chain(array).differenceBy(list!, array!, list!, array!, list!, array!, iteratee).value();

        result = _.chain(array).differenceBy(array!, 'a').value();
        result = _.chain(array).differenceBy(list!, array!, 'a').value();
        result = _.chain(array).differenceBy(array!, list!, array!, 'a').value();
        result = _.chain(array).differenceBy(list!, array!, list!, array!, 'a').value();
        result = _.chain(array).differenceBy(array!, list!, array!, list!, array!, 'a').value();
        result = _.chain(array).differenceBy(list!, array!, list!, array!, list!, array!, 'a').value();

        result = _.chain(array).differenceBy(array!, {a: 1}).value();
        result = _.chain(array).differenceBy(list!, array!, {a: 1}).value();
        result = _.chain(array).differenceBy(array!, list!, array!, {a: 1}).value();
        result = _.chain(array).differenceBy(list!, array!, list!, array!, {a: 1}).value();
        result = _.chain(array).differenceBy(array!, list!, array!, list!, array!, {a: 1}).value();
        result = _.chain(array).differenceBy(list!, array!, list!, array!, list!, array!, {a: 1}).value();

        result = _.chain(list).differenceBy(list!).value();
        result = _.chain(list).differenceBy(array!, list!).value();
        result = _.chain(list).differenceBy(list!, array!, list!).value();
        result = _.chain(list).differenceBy(array!, list!, array!, list!).value();
        result = _.chain(list).differenceBy(list!, array!, list!, array!, list!).value();
        result = _.chain(list).differenceBy(array!, list!, array!, list!, array!, list!).value();

        result = _.chain(list).differenceBy(list!, iteratee).value();
        result = _.chain(list).differenceBy(array!, list!, iteratee).value();
        result = _.chain(list).differenceBy(list!, array!, list!, iteratee).value();
        result = _.chain(list).differenceBy(array!, list!, array!, list!, iteratee).value();
        result = _.chain(list).differenceBy(list!, array!, list!, array!, list!, iteratee).value();
        result = _.chain(list).differenceBy(array!, list!, array!, list!, array!, list!, iteratee).value();

        result = _.chain(list).differenceBy(list!, 'a').value();
        result = _.chain(list).differenceBy(array!, list!, 'a').value();
        result = _.chain(list).differenceBy(list!, array!, list!, 'a').value();
        result = _.chain(list).differenceBy(array!, list!, array!, list!, 'a').value();
        result = _.chain(list).differenceBy(list!, array!, list!, array!, list!, 'a').value();
        result = _.chain(list).differenceBy(array!, list!, array!, list!, array!, list!, 'a').value();

        result = _.chain(list).differenceBy(list!, {a: 1}).value();
        result = _.chain(list).differenceBy(array!, list!, {a: 1}).value();
        result = _.chain(list).differenceBy(list!, array!, list!, {a: 1}).value();
        result = _.chain(list).differenceBy(array!, list!, array!, list!, {a: 1}).value();
        result = _.chain(list).differenceBy(list!, array!, list!, array!, list!, {a: 1}).value();
        result = _.chain(list).differenceBy(array!, list!, array!, list!, array!, list!, {a: 1}).value();
    }
}

// _.differenceWith
namespace TestDifferenceWith {
    let array: TResult[] | null | undefined = any;
    let list: _.List<TResult> | null | undefined = any;
    let comparator: (arrVal: TResult, othVal: TResult) => boolean = _.isEqual;

    {
        let result: TResult[];

        result = _.differenceWith(array, array!);
        result = _.differenceWith(array, list!, array!, list!, array!, list!, array!);

        result = _.differenceWith(array, array!, comparator);
        result = _.differenceWith(array, list!, array!, list!, array!, list!, array!, comparator);

        result = _.differenceWith(list, list!);
        result = _.differenceWith(list, array!, list!, array!, list!, array!, list!);

        result = _.differenceWith(list, list!, comparator);
        result = _.differenceWith(list, array!, list!, array!, list!, array!, list!, comparator);

        result = _(array).differenceWith(array!).value();
        result = _(array).differenceWith(list!, array!, list!, array!, list!, array!).value();

        result = _(array).differenceWith(array!, comparator).value();
        result = _(array).differenceWith(list!, array!, list!, array!, list!, array!, comparator).value();

        result = _(list).differenceWith(list!).value();
        result = _(list).differenceWith(array!, list!, array!, list!, array!, list!).value();

        result = _(list).differenceWith(list!, comparator).value();
        result = _(list).differenceWith(array!, list!, array!, list!, array!, list!, comparator).value();

        result = _.chain(array).differenceWith(array!).value();
        result = _.chain(array).differenceWith(list!, array!, list!, array!, list!, array!).value();

        result = _.chain(array).differenceWith(array!, comparator).value();
        result = _.chain(array).differenceWith(list!, array!, list!, array!, list!, array!, comparator).value();

        result = _.chain(list).differenceWith(list!).value();
        result = _.chain(list).differenceWith(array!, list!, array!, list!, array!, list!).value();

        result = _.chain(list).differenceWith(list!, comparator).value();
        result = _.chain(list).differenceWith(array!, list!, array!, list!, array!, list!, comparator).value();
    }
}

// _.drop
{
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    {
        let result: TResult[];
        result = _.drop(array);
        result = _.drop(array, 42);
        result = _.drop(list);
        result = _.drop(list, 42);

        result = _(array).drop().value();
        result = _(array).drop(42).value();
        result = _(list).drop().value();
        result = _(list).drop(42).value();

        result = _.chain(array).drop().value();
        result = _.chain(array).drop(42).value();
        result = _.chain(list).drop().value();
        result = _.chain(list).drop(42).value();
    }
}

// _.dropRight
namespace TestDropRight {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    {
        let result: TResult[];
        result = _.dropRight(array);
        result = _.dropRight(array, 42);
        result = _.dropRight(list);
        result = _.dropRight(list, 42);

        result = _(array).dropRight().value();
        result = _(array).dropRight(42).value();
        result = _(list).dropRight().value();
        result = _(list).dropRight(42).value();

        result = _.chain(array).dropRight().value();
        result = _.chain(array).dropRight(42).value();
        result = _.chain(list).dropRight().value();
        result = _.chain(list).dropRight(42).value();
    }
}

// _.dropRightWhile
namespace TestDropRightWhile {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    {
        let result: TResult[];

        result = _.dropRightWhile(array);
        result = _.dropRightWhile(array, '');
        result = _.dropRightWhile(array, {a: 42});
        result = _.dropRightWhile(array, ['a', 42]);
        result = _.dropRightWhile(array, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
            return true;
        });

        result = _.dropRightWhile(list);
        result = _.dropRightWhile(list, '');
        result = _.dropRightWhile(list, {a: 42});
        result = _.dropRightWhile(list, ['a', 42]);
        result = _.dropRightWhile(list, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
            return 1;
        });
        
        result = _(array).dropRightWhile().value();
        result = _(array).dropRightWhile('').value();
        result = _(array).dropRightWhile({a: 42}).value();
        result = _(array).dropRightWhile(['a', 42]).value();
        result = _(array).dropRightWhile((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
            return 1;
        }).value();

        result = _.chain(list).dropRightWhile().value();
        result = _.chain(list).dropRightWhile('').value();
        result = _.chain(list).dropRightWhile({a: 42}).value();
        result = _.chain(list).dropRightWhile(['a', 42]).value();
        result = _.chain(list).dropRightWhile((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
            return true;
        }).value();
        
        result = _.chain(array).dropRightWhile().value();
        result = _.chain(array).dropRightWhile('').value();
        result = _.chain(array).dropRightWhile({a: 42}).value();
        result = _.chain(array).dropRightWhile(['a', 42]).value();
        result = _.chain(array).dropRightWhile((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
            return 1;
        }).value();

        result = _.chain(list).dropRightWhile().value();
        result = _.chain(list).dropRightWhile('').value();
        result = _.chain(list).dropRightWhile({a: 42}).value();
        result = _.chain(list).dropRightWhile(['a', 42]).value();
        result = _.chain(list).dropRightWhile((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
            return true;
        }).value();
    }
}

// _.dropWhile
namespace TestDropWhile {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    {
        let result: TResult[];

        result = _.dropWhile(array);
        result = _.dropWhile(array, '');
        result = _.dropWhile(array, {a: 42});
        result = _.dropWhile(array, ['a', 42]);
        result = _.dropWhile(array, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
            return true;
        });

        result = _.dropWhile(list);
        result = _.dropWhile(list, '');
        result = _.dropWhile(list, {a: 42});
        result = _.dropWhile(list, ['a', 42]);
        result = _.dropWhile(list, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
            return 1;
        });
        
        result = _(array).dropWhile().value();
        result = _(array).dropWhile('').value();
        result = _(array).dropWhile({a: 42}).value();
        result = _(array).dropWhile(['a', 42]).value();
        result = _(array).dropWhile((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
            return 1;
        }).value();

        result = _.chain(list).dropWhile().value();
        result = _.chain(list).dropWhile('').value();
        result = _.chain(list).dropWhile({a: 42}).value();
        result = _.chain(list).dropWhile(['a', 42]).value();
        result = _.chain(list).dropWhile((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
            return true;
        }).value();
        
        result = _.chain(array).dropWhile().value();
        result = _.chain(array).dropWhile('').value();
        result = _.chain(array).dropWhile({a: 42}).value();
        result = _.chain(array).dropWhile(['a', 42]).value();
        result = _.chain(array).dropWhile((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
            return 1;
        }).value();

        result = _.chain(list).dropWhile().value();
        result = _.chain(list).dropWhile('').value();
        result = _.chain(list).dropWhile({a: 42}).value();
        result = _.chain(list).dropWhile(['a', 42]).value();
        result = _.chain(list).dropWhile((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
            return true;
        }).value();
    }
}

// _.fill
namespace TestFill {
    let array: number[] | null | undefined = [] as any;
    let list: _.List<number> | null | undefined = [] as any;

    {
        let result: number[];

        result = _.fill(array, 42);
        result = _.fill(array, 42, 0);
        result = _.fill(array, 42, 0, 10);

        result = _(array).fill(42).value();
        result = _(array).fill(42, 0).value();
        result = _(array).fill(42, 0, 10).value();

        result = _.chain(array).fill(42).value();
        result = _.chain(array).fill(42, 0).value();
        result = _.chain(array).fill(42, 0, 10).value();
    }

    {
        let result: _.List<number>;

        result = _.fill(list, 42);
        result = _.fill(list, 42, 0);
        result = _.fill(list, 42, 0, 10);

        result = _(list).fill(42).value();
        result = _(list).fill(42, 0).value();
        result = _(list).fill(42, 0, 10).value();

        result = _.chain(list).fill(42).value();
        result = _.chain(list).fill(42, 0).value();
        result = _.chain(list).fill(42, 0, 10).value();
    }

    {
        let result: _.List<number | string>;

        result = _.fill(list, "42", 0, 1);
        result = _(list).fill("42", 0, 1).value();
        result = _.chain(list).fill("42", 0, 1).value();
    }
}

// _.findIndex
namespace TestFindIndex {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let fromIndex: number = 0;

    {
        let result: number;

        result = _.findIndex(array);
        result = _.findIndex(array, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
        result = _.findIndex(array, '');
        result = _.findIndex(array, {a: 42});
        result = _.findIndex(array, ['a', 42]);
        result = _.findIndex(array, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        }, fromIndex);

        result = _.findIndex(list);
        result = _.findIndex(list, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
        result = _.findIndex(list, '');
        result = _.findIndex(list, {a: 42});
        result = _.findIndex(list, ['a', 42]);
        result = _.findIndex(list, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        }, fromIndex);

        result = _(array).findIndex();
        result = _(array).findIndex((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
        result = _(array).findIndex('');
        result = _(array).findIndex({a: 42});
        result = _(array).findIndex(['a', 42]);
        result = _(array).findIndex((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        }, fromIndex);

        result = _(list).findIndex();
        result = _(list).findIndex((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
        result = _(list).findIndex('');
        result = _(list).findIndex({a: 42});
        result = _(list).findIndex(['a', 42]);
        result = _(list).findIndex((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        }, fromIndex);

        result = _.chain(array).findIndex().value();
        result = _.chain(array).findIndex((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        }).value();
        result = _.chain(array).findIndex('').value();
        result = _.chain(array).findIndex({a: 42}).value();
        result = _.chain(array).findIndex(['a', 42]).value();
        result = _.chain(array).findIndex((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        }, fromIndex).value();

        result = _.chain(list).findIndex().value();
        result = _.chain(list).findIndex((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        }).value();
        result = _.chain(list).findIndex('').value();
        result = _.chain(list).findIndex({a: 42}).value();
        result = _.chain(list).findIndex(['a', 42]).value();
        result = _.chain(list).findIndex((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        }, fromIndex).value();
    }
}

// _.findLastIndex
namespace TestFindLastIndex {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let fromIndex: number = 0;

    {
        let result: number;

        result = _.findLastIndex(array);
        result = _.findLastIndex(array, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
        result = _.findLastIndex(array, '');
        result = _.findLastIndex(array, {a: 42});
        result = _.findLastIndex(array, ['a', 42]);
        result = _.findLastIndex(array, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        }, fromIndex);

        result = _.findLastIndex(list);
        result = _.findLastIndex(list, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
        result = _.findLastIndex(list, '');
        result = _.findLastIndex(list, {a: 42});
        result = _.findLastIndex(list, ['a', 42]);
        result = _.findLastIndex(list, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        }, fromIndex);

        result = _(array).findLastIndex();
        result = _(array).findLastIndex((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
        result = _(array).findLastIndex('');
        result = _(array).findLastIndex({a: 42});
        result = _(array).findLastIndex(['a', 42]);
        result = _(array).findLastIndex((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        }, fromIndex);

        result = _(list).findLastIndex();
        result = _(list).findLastIndex((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
        result = _(list).findLastIndex('');
        result = _(list).findLastIndex({a: 42});
        result = _(list).findLastIndex(['a', 42]);
        result = _(list).findLastIndex((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        }, fromIndex);

        result = _.chain(array).findLastIndex().value();
        result = _.chain(array).findLastIndex((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        }).value();
        result = _.chain(array).findLastIndex('').value();
        result = _.chain(array).findLastIndex({a: 42}).value();
        result = _.chain(array).findLastIndex(['a', 42]).value();
        result = _.chain(array).findLastIndex((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        }, fromIndex).value();

        result = _.chain(list).findLastIndex().value();
        result = _.chain(list).findLastIndex((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        }).value();
        result = _.chain(list).findLastIndex('').value();
        result = _.chain(list).findLastIndex({a: 42}).value();
        result = _.chain(list).findLastIndex(['a', 42]).value();
        result = _.chain(list).findLastIndex((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        }, fromIndex).value();
    }
}

// _.first
namespace TestFirst {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    {
        let result: string | undefined;

        result = _.first('abc');
        result = _('abc').first();
    }

    {
        let result: TResult | undefined;

        result = _.first(array);
        result = _.first(list);

        result = _(array).first();
        result = _(list).first();

        result = _.chain(array).first().value();
        result = _.chain(list).first().value();
    }
}

// _.flatten
namespace TestFlatten {
    let array: number[][] | null | undefined = [] as any;
    let list: _.List<number[]> | null | undefined = [] as any;

    {
        let result: string[];

        result = _.flatten('abc');
        result = _('abc').flatten().value();
        result = _.chain('abc').flatten().value();
    }

    {
        let result: number[];

        result = _.flatten(array);
        result = _.flatten([1, 2, 3]);
        result = _.flatten([1, [2, 3]]);
        result = _.flatten<number>([1, [2, [3]]], true);
        result = _.flatten<number>([1, [2, [3]], [[4]]], true);

        result = _.flatten(list);
        result = _.flatten({0: 1, 1: 2, 2: 3, length: 3});
        result = _.flatten({0: 1, 1: [2, 3], length: 2});
        result = _.flatten<number>({0: 1, 1: [2, [3]], length: 2}, true);
        result = _.flatten<number>({0: 1, 1: [2, [3]], 2: [[4]], length: 3}, true);

        result = _(array).flatten().value();
        result = _([1, 2, 3]).flatten().value();
        result = _([1, [2, 3]]).flatten().value();
        result = _([1, [2, [3]]]).flatten<number>(true).value();
        result = _([1, [2, [3]], [[4]]]).flatten<number>(true).value();

        result = _(list).flatten().value();
        result = _({0: 1, 1: 2, 2: 3, length: 3}).flatten().value();
        result = _({0: 1, 1: [2, 3], length: 2}).flatten().value();
        result = _({0: 1, 1: [2, [3]], length: 2}).flatten<number>(true).value();
        result = _({0: 1, 1: [2, [3]], 2: [[4]], length: 3}).flatten<number>(true).value();

        result = _.chain(array).flatten().value();
        result = _.chain([1, 2, 3]).flatten().value();
        result = _.chain([1, [2, 3]]).flatten().value();
        result = _.chain([1, [2, [3]]]).flatten<number>(true).value();
        result = _.chain([1, [2, [3]], [[4]]]).flatten<number>(true).value();

        result = _.chain(list).flatten().value();
        result = _.chain({0: 1, 1: 2, 2: 3, length: 3}).flatten().value();
        result = _.chain({0: 1, 1: [2, 3], length: 2}).flatten().value();
        result = _.chain({0: 1, 1: [2, [3]], length: 2}).flatten<number>(true).value();
        result = _.chain({0: 1, 1: [2, [3]], 2: [[4]], length: 3}).flatten<number>(true).value();
    }

    {
        let result: _.RecursiveArray<number>;

        result = _.flatten([1, [2, [3]]]);
        result = _.flatten([1, [2, [3]], [[4]]]);

        result = _.flatten({0: 1, 1: [2, [3]], length: 2});
        result = _.flatten({0: 1, 1: [2, [3]], 2: [[4]], length: 3});

        result = _([1, [2, [3]]]).flatten().value();
        result = _([1, [2, [3]], [[4]]]).flatten().value();

        result = _({0: 1, 1: [2, [3]], length: 2}).flatten().value();
        result = _({0: 1, 1: [2, [3]], 2: [[4]], length: 3}).flatten().value();

        result = _.chain([1, [2, [3]]]).flatten().value();
        result = _.chain([1, [2, [3]], [[4]]]).flatten().value();

        result = _.chain({0: 1, 1: [2, [3]], length: 2}).flatten().value();
        result = _.chain({0: 1, 1: [2, [3]], 2: [[4]], length: 3}).flatten().value();
    }
}

// _.flattenDeep
namespace TestFlattenDeep {
    let array: number[][] | null | undefined = [] as any;
    let list: _.List<number[]> | null | undefined = [] as any;

    {
        let result: string[];

        result = _.flattenDeep('abc');
        result = _('abc').flattenDeep().value();
        result = _.chain('abc').flattenDeep().value();
    }

    {
        let result: number[];

        result = _.flattenDeep<number>(array);
        result = _.flattenDeep([1, 2, 3]);
        result = _.flattenDeep<number>([1, [2, 3]]);
        result = _.flattenDeep<number>([1, [2, [3]]]);
        result = _.flattenDeep<number>([1, [2, [3]], [[4]]]);

        result = _.flattenDeep<number>(list);
        result = _.flattenDeep({0: 1, 1: 2, 2: 3, length: 3});
        result = _.flattenDeep<number>({0: 1, 1: [2, 3], length: 2});
        result = _.flattenDeep<number>({0: 1, 1: [2, [3]], length: 2});
        result = _.flattenDeep<number>({0: 1, 1: [2, [3]], 2: [[4]], length: 3});

        result = _(array).flattenDeep<number>().value();
        result = _([1, 2, 3]).flattenDeep().value();
        result = _([1, [2, 3]]).flattenDeep<number>().value();
        result = _([1, [2, [3]]]).flattenDeep<number>().value();
        result = _([1, [2, [3]], [[4]]]).flattenDeep<number>().value();

        result = _(list).flattenDeep<number>().value();
        result = _({0: 1, 1: 2, 2: 3, length: 3}).flattenDeep().value();
        result = _({0: 1, 1: [2, 3], length: 2}).flattenDeep<number>().value();
        result = _({0: 1, 1: [2, [3]], length: 2}).flattenDeep<number>().value();
        result = _({0: 1, 1: [2, [3]], 2: [[4]], length: 3}).flattenDeep<number>().value();

        result = _.chain(array).flattenDeep<number>().value();
        result = _.chain([1, 2, 3]).flattenDeep().value();
        result = _.chain([1, [2, 3]]).flattenDeep<number>().value();
        result = _.chain([1, [2, [3]]]).flattenDeep<number>().value();
        result = _.chain([1, [2, [3]], [[4]]]).flattenDeep<number>().value();

        result = _.chain(list).flattenDeep<number>().value();
        result = _.chain({0: 1, 1: 2, 2: 3, length: 3}).flattenDeep().value();
        result = _.chain({0: 1, 1: [2, 3], length: 2}).flattenDeep<number>().value();
        result = _.chain({0: 1, 1: [2, [3]], length: 2}).flattenDeep<number>().value();
        result = _.chain({0: 1, 1: [2, [3]], 2: [[4]], length: 3}).flattenDeep<number>().value();
    }
}

// _.flattenDepth
namespace TestFlattenDepth {
    let array: number[][] | null | undefined = [] as any;
    let list: _.List<number[]> | null | undefined = [] as any;

    {
        let result: string[];

        result = _.flattenDepth('abc');
        result = _.flattenDepth('abc', 2);
        result = _('abc').flattenDepth().value();
        result = _('abc').flattenDepth(2).value();
        result = _.chain('abc').flattenDepth().value();
        result = _.chain('abc').flattenDepth(2).value();
    }

    {
        let result: number[];

        result = _.flattenDepth<number>(array, 2);
        result = _.flattenDepth([1, 2, 3], 2);
        result = _.flattenDepth<number>([1, [2, 3]], 2);
        result = _.flattenDepth<number>([1, [2, [3]]], 3);
        result = _.flattenDepth<number>([1, [2, [3]], [[4]]], 4);

        result = _.flattenDepth<number>(list, 2);
        result = _.flattenDepth({0: 1, 1: 2, 2: 3, length: 3}, 2);
        result = _.flattenDepth<number>({0: 1, 1: [2, 3], length: 2}, 2);
        result = _.flattenDepth<number>({0: 1, 1: [2, [3]], length: 2}, 3);
        result = _.flattenDepth<number>({0: 1, 1: [2, [3]], 2: [[4]], length: 3}, 4);

        result = _(array).flattenDepth<number>(2).value();
        result = _([1, 2, 3]).flattenDepth(2).value();
        result = _([1, [2, 3]]).flattenDepth<number>(2).value();
        result = _([1, [2, [3]]]).flattenDepth<number>(3).value();
        result = _([1, [2, [3]], [[4]]]).flattenDepth<number>(4).value();

        result = _(list).flattenDepth<number>(2).value();
        result = _({0: 1, 1: 2, 2: 3, length: 3}).flattenDepth(2).value();
        result = _({0: 1, 1: [2, 3], length: 2}).flattenDepth<number>(2).value();
        result = _({0: 1, 1: [2, [3]], length: 2}).flattenDepth<number>(3).value();
        result = _({0: 1, 1: [2, [3]], 2: [[4]], length: 3}).flattenDepth<number>(4).value();

        result = _.chain(array).flattenDepth<number>(2).value();
        result = _.chain([1, 2, 3]).flattenDepth(2).value();
        result = _.chain([1, [2, 3]]).flattenDepth<number>(2).value();
        result = _.chain([1, [2, [3]]]).flattenDepth<number>(3).value();
        result = _.chain([1, [2, [3]], [[4]]]).flattenDepth<number>(4).value();

        result = _.chain(list).flattenDepth<number>(2).value();
        result = _.chain({0: 1, 1: 2, 2: 3, length: 3}).flattenDepth(2).value();
        result = _.chain({0: 1, 1: [2, 3], length: 2}).flattenDepth<number>(2).value();
        result = _.chain({0: 1, 1: [2, [3]], length: 2}).flattenDepth<number>(3).value();
        result = _.chain({0: 1, 1: [2, [3]], 2: [[4]], length: 3}).flattenDepth<number>(4).value();
    }
}

// _.fromPairs
namespace TestFromPairs {
    let twoDimensionalArray: string[][] | null | undefined = [] as any;
    let numberTupleArray: [string, number][] | null | undefined = [] as any;
    let stringDict: _.Dictionary<string>;

    {
        stringDict = _.fromPairs(twoDimensionalArray);
        // Ensure we're getting the parameterized overload rather than the 'any' catch-all.
        _.fromPairs(numberTupleArray); // $ExpectType Dictionary<number>
        // This doesn't compile because you can't assign arrays to tuples.
        // stringDict = _.fromPairs<string>(twoDimensionalArray);

        stringDict = _(twoDimensionalArray).fromPairs().value();
        _(numberTupleArray).fromPairs().value(); // $ExpectType Dictionary<number>

        stringDict = _.chain(twoDimensionalArray).fromPairs().value();
        _.chain(numberTupleArray).fromPairs().value(); // $ExpectType Dictionary<number>
    }
}

// _.head
namespace TestHead {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    {
        let result: string | undefined;

        result = _.head('abc');
        result = _('abc').head();
    }

    {
        let result: TResult | undefined;

        result = _.head(array);
        result = _.head(list);

        result = _(array).head();
        result = _(list).head();

        result = _.chain(array).head().value();
        result = _.chain(list).head().value();
    }
}

// _.indexOf
namespace TestIndexOf {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let value: TResult = { a: 1, b: "", c: true };

    {
        let result: number;

        result = _.indexOf(array, value);
        result = _.indexOf(array, value, true);
        result = _.indexOf(array, value, 42);

        result = _.indexOf(list, value);
        result = _.indexOf(list, value, true);
        result = _.indexOf(list, value, 42);

        result = _(array).indexOf(value);
        result = _(array).indexOf(value, true);
        result = _(array).indexOf(value, 42);

        result = _(list).indexOf(value);
        result = _(list).indexOf(value, true);
        result = _(list).indexOf(value, 42);

        result = _(array).chain().indexOf(value).value();
        result = _(array).chain().indexOf(value, true).value();
        result = _(array).chain().indexOf(value, 42).value();

        result = _(list).chain().indexOf(value).value();
        result = _(list).chain().indexOf(value, true).value();
        result = _(list).chain().indexOf(value, 42).value();
    }
}

// _.sortedIndexOf
namespace TestIndexOf {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let value: TResult = { a: 1, b: "", c: true };

    let result: number;

    result = _.sortedIndexOf(array, value);
    result = _.sortedIndexOf(list, value);
    result = _(array).sortedIndexOf(value);
    result = _(list).sortedIndexOf(value);
    result = _.chain(array).sortedIndexOf(value).value();
    result = _.chain(list).sortedIndexOf(value).value();
}

//_.initial
namespace TestInitial {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    let result: TResult[];

    result = _.initial(array);
    result = _.initial(list);

    result = _(array).initial().value();
    result = _(list).initial().value();

    result = _.chain(array).initial().value();
    result = _.chain(list).initial().value();
}

// _.intersection
namespace TestIntersection {
    let array: TResult[] = any;
    let list: _.List<TResult> = any;

    let result: TResult[];

    result = _.intersection(array, list);
    result = _.intersection(list, array, list, array);

    result = _(array).intersection(array).value();
    result = _(array).intersection(list, array, list, array).value();

    result = _(list).intersection(array).value();
    result = _(list).intersection(list, array, list, array).value();

    result = _.chain(array).intersection(array).value();
    result = _.chain(array).intersection(list, array, list, array).value();

    result = _.chain(list).intersection(array).value();
    result = _.chain(list).intersection(list, array, list, array).value();
}

// _.intersectionBy
namespace TestIntersectionBy {
    let array: TResult[] = any;
    let list: _.List<TResult> = any;

    let result: TResult[];

    result = _.intersectionBy(array, list);
    result = _.intersectionBy(list, array, "a");
    result = _.intersectionBy(array, list, {a: 42});
    result = _.intersectionBy(list, array, ['a', 42]);
    result = _.intersectionBy(array, list, (value) => {
        value; // $ExpectType TResult
    });
    result = _.intersectionBy(list, array, list, array, (value) => {
        value; // $ExpectType TResult
    });

    result = _(array).intersectionBy(list).value();
    result = _(list).intersectionBy(array, "a").value();
    result = _(array).intersectionBy(list, {a: 42}).value();
    result = _(list).intersectionBy(array, ['a', 42]).value();
    result = _(array).intersectionBy(list, (value) => {
        value; // $ExpectType TResult
    }).value();
    result = _(list).intersectionBy(array, list, array, (value) => {
        value; // $ExpectType TResult
    }).value();

    result = _.chain(array).intersectionBy(list).value();
    result = _.chain(list).intersectionBy(array, "a").value();
    result = _.chain(array).intersectionBy(list, {a: 42}).value();
    result = _.chain(list).intersectionBy(array, ['a', 42]).value();
    result = _.chain(array).intersectionBy(list, (value) => {
        value; // $ExpectType TResult
    }).value();
    result = _.chain(list).intersectionBy(array, list, array, (value) => {
        value; // $ExpectType TResult
    }).value();
}

// _.intersectionWith
namespace TestDifferenceWith {
    let array: TResult[] | null | undefined = any;
    let list: _.List<TResult> | null | undefined = any;
    let comparator: (arrVal: TResult, othVal: TResult) => boolean = _.isEqual;

    let result: TResult[];

    result = _.intersectionWith(array, array!);
    result = _.intersectionWith(array, list!, array!, list!, array!, list!, array!);

    result = _.intersectionWith(array, array!, comparator);
    result = _.intersectionWith(array, list!, array!, list!, array!, list!, array!, comparator);

    result = _.intersectionWith(list, list!);
    result = _.intersectionWith(list, array!, list!, array!, list!, array!, list!);

    result = _.intersectionWith(list, list!, comparator);
    result = _.intersectionWith(list, array!, list!, array!, list!, array!, list!, comparator);

    result = _(array).intersectionWith(array!).value();
    result = _(array).intersectionWith(list!, array!, list!, array!, list!, array!).value();

    result = _(array).intersectionWith(array!, comparator).value();
    result = _(array).intersectionWith(list!, array!, list!, array!, list!, array!, comparator).value();

    result = _(list).intersectionWith(list!).value();
    result = _(list).intersectionWith(array!, list!, array!, list!, array!, list!).value();

    result = _(list).intersectionWith(list!, comparator).value();
    result = _(list).intersectionWith(array!, list!, array!, list!, array!, list!, comparator).value();

    result = _.chain(array).intersectionWith(array!).value();
    result = _.chain(array).intersectionWith(list!, array!, list!, array!, list!, array!).value();

    result = _.chain(array).intersectionWith(array!, comparator).value();
    result = _.chain(array).intersectionWith(list!, array!, list!, array!, list!, array!, comparator).value();

    result = _.chain(list).intersectionWith(list!).value();
    result = _.chain(list).intersectionWith(array!, list!, array!, list!, array!, list!).value();

    result = _.chain(list).intersectionWith(list!, comparator).value();
    result = _.chain(list).intersectionWith(array!, list!, array!, list!, array!, list!, comparator).value();
}

// _.join
namespace TestJoin {
    let array = [1, 2];
    let list = {0: 1, 1: 2, length: 2};
    let nilArray: string[] | null | undefined = undefined as any;
    let nilList: _.List<string> | null | undefined = undefined as any;

    {
        let result: string;

        result = _.join('abc');
        result = _.join('abc', '_');
        result = _.join(array);
        result = _.join(array, '_');
        result = _.join(list);
        result = _.join(list, '_');
        result = _.join(nilArray);
        result = _.join(nilArray, '_');
        result = _.join(nilList);
        result = _.join(nilList, '_');

        result = _('abc').join();
        result = _('abc').join('_');
        result = _(array).join();
        result = _(array).join('_');
        result = _(list).join();
        result = _(list).join('_');
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('abc').chain().join();
        result = _('abc').chain().join('_');
        result = _(array).chain().join();
        result = _(array).chain().join('_');
        result = _(list).chain().join();
        result = _(list).chain().join('_');
    }
}

// _.reverse
namespace TestReverse {
    {
        let array: TResult[] = [] as any;
        let result: TResult[];

        result = _.reverse(array);
        result = _(array).reverse().value();
        result = _.chain(array).reverse().value();
    }
    {
        let list: _.List<TResult> = [] as any;
        let result: _.List<TResult>;

        result = _.reverse(list);
        result = _(list).reverse().value();
        result = _.chain(list).reverse().value();
    }
}

// _.last
namespace TestLast {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    {
        let result: string | undefined;

        result = _.last('abc');
        result = _('abc').last();
        result = _.chain('abc').last().value();
    }

    {
        let result: TResult | undefined;

        result = _.last(array);
        result = _.last(list);

        result = _(array).last();
        result = _(list).last();

        result = _.chain(array).last().value();
        result = _.chain(list).last().value();
    }
}

// _.lastIndexOf
namespace TestLastIndexOf {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let value: TResult = { a: 1, b: "", c: true };

    {
        let result: number;

        result = _.lastIndexOf<TResult>(array, value);
        result = _.lastIndexOf<TResult>(array, value, true);
        result = _.lastIndexOf<TResult>(array, value, 42);

        result = _.lastIndexOf<TResult>(list, value);
        result = _.lastIndexOf<TResult>(list, value, true);
        result = _.lastIndexOf<TResult>(list, value, 42);

        result = _(array).lastIndexOf(value);
        result = _(array).lastIndexOf(value, true);
        result = _(array).lastIndexOf(value, 42);

        result = _(list).lastIndexOf<TResult>(value);
        result = _(list).lastIndexOf<TResult>(value, true);
        result = _(list).lastIndexOf<TResult>(value, 42);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(array).chain().lastIndexOf(value);
        result = _(array).chain().lastIndexOf(value, true);
        result = _(array).chain().lastIndexOf(value, 42);

        result = _(list).chain().lastIndexOf<TResult>(value);
        result = _(list).chain().lastIndexOf<TResult>(value, true);
        result = _(list).chain().lastIndexOf<TResult>(value, 42);
    }
}

// _.nth
namespace TestNth {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let value: number = 0;

    {
        let result: TResult | undefined;

        result = _.nth(array);

        result = _.nth(array, 42);

        result = _(array).nth();
        result = _(array).nth(42);

        result = _(list).nth();
        result = _(list).nth(42);
    }

    {
        let result: _.LoDashExplicitWrapper<TResult | undefined>;

        result = _(array).chain().nth();
        result = _(array).chain().nth(42);

        result = _(list).chain().nth();
        result = _(list).chain().nth(42);
    }
}

// _.pull
namespace TestPull {
    let array: TResult[] = [];
    let list: _.List<TResult> = [];
    let value: TResult = { a: 1, b: "", c: true };

    {
        let result: TResult[];

        result = _.pull(array);
        result = _.pull(array, value);
        result = _.pull(array, value, value, value);
        result = _(array).pull().value();
        result = _(array).pull(value).value();
        result = _(array).pull(value, value, value).value();
        result = _.chain(array).pull().value();
        result = _.chain(array).pull(value).value();
        result = _.chain(array).pull(value, value, value).value();
    }

    {
        let result: _.List<TResult>;

        result = _.pull<TResult>(list);
        result = _.pull<TResult>(list, value);
        result = _.pull<TResult>(list, value, value, value);
        result = _(list).pull().value();
        result = _(list).pull(value).value();
        result = _(list).pull(value, value, value).value();
        result = _.chain(list).pull().value();
        result = _.chain(list).pull(value).value();
        result = _.chain(list).pull(value, value, value).value();
    }
}

// _.pullAt
namespace TestPullAt {
    {
        let array: TResult[] = [];
        let result: TResult[];

        result = _.pullAt(array);
        result = _.pullAt(array, 1);
        result = _.pullAt(array, [2, 3], 1);
        result = _.pullAt(array, 4, [2, 3], 1);
        result = _(array).pullAt().value();
        result = _(array).pullAt(1).value();
        result = _(array).pullAt([2, 3], 1).value();
        result = _(array).pullAt(4, [2, 3], 1).value();
        result = _.chain(array).pullAt().value();
        result = _.chain(array).pullAt(1).value();
        result = _.chain(array).pullAt([2, 3], 1).value();
        result = _.chain(array).pullAt(4, [2, 3], 1).value();
    }
    {
        let list: _.List<TResult> = [];
        let result: _.List<TResult>;

        result = _.pullAt(list);
        result = _.pullAt(list, 1);
        result = _.pullAt(list, [2, 3], 1);
        result = _.pullAt(list, 4, [2, 3], 1);
        result = _(list).pullAt().value();
        result = _(list).pullAt(1).value();
        result = _(list).pullAt([2, 3], 1).value();
        result = _(list).pullAt(4, [2, 3], 1).value();
        result = _.chain(list).pullAt().value();
        result = _.chain(list).pullAt(1).value();
        result = _.chain(list).pullAt([2, 3], 1).value();
        result = _.chain(list).pullAt(4, [2, 3], 1).value();
    }
}

// _.pullAll
namespace TestPullAll {
    let array: TResult[] = [];
    let list: _.List<TResult> = [];
    let value: TResult = { a: 1, b: "", c: true };

    {
        let result: TResult[];

        result = _.pullAll(array);
        result = _.pullAll(array, [value, value]);
        result = _.pullAll(array, list);

        result = _(array).pullAll().value();
        result = _(array).pullAll([value, value]).value();
        result = _(array).pullAll(list).value();

        result = _.chain(array).pullAll().value();
        result = _.chain(array).pullAll([value, value]).value();
        result = _.chain(array).pullAll(list).value();
    }

    {
        let result: _.List<TResult>;

        result = _.pullAll(list);
        result = _.pullAll(list, [value, value]);
        result = _.pullAll(list, list);

        result = _(list).pullAll().value();
        result = _(list).pullAll([value, value]).value();
        result = _(list).pullAll(list).value();

        result = _.chain(list).pullAll().value();
        result = _.chain(list).pullAll([value, value]).value();
        result = _.chain(list).pullAll(list).value();
    }
}

// _.pullAllBy
namespace TestPullAllBy {
    let array: TResult[] = [];
    let list: _.List<TResult> = [];
    let value: TResult = { a: 1, b: "", c: true };

    {
        let result: TResult[];

        result = _.pullAllBy(array);
        result = _.pullAllBy(array, [value, value]);
        result = _.pullAllBy(array, [value, value], (value2) => {
            value2; // $ExpectType TResult
        });
        result = _.pullAllBy(array, list);
        result = _.pullAllBy(array, list, (value2) => {
            value2; // $ExpectType TResult
        });

        result = _(array).pullAllBy().value();
        result = _(array).pullAllBy([value, value]).value();
        result = _(array).pullAllBy([value, value], (value2) => {
            value2; // $ExpectType TResult
        }).value();
        result = _(array).pullAllBy(list).value();
        result = _(array).pullAllBy(list, (value2) => {
            value2; // $ExpectType TResult
        }).value();

        result = _.chain(array).pullAllBy().value();
        result = _.chain(array).pullAllBy([value, value]).value();
        result = _.chain(array).pullAllBy([value, value], (value2) => {
            value2; // $ExpectType TResult
        }).value();
        result = _.chain(array).pullAllBy(list).value();
        result = _.chain(array).pullAllBy(list, (value2) => {
            value2; // $ExpectType TResult
        }).value();
    }

    {
        let result: _.List<TResult>;

        result = _.pullAllBy(list);
        result = _.pullAllBy(list, [value, value]);
        result = _.pullAllBy(list, [value, value], (value2) => {
            value2; // $ExpectType TResult
        });
        result = _.pullAllBy(list, list);
        result = _.pullAllBy(list, list, (value2) => {
            value2; // $ExpectType TResult
        });

        result = _(list).pullAllBy().value();
        result = _(list).pullAllBy([value, value]).value();
        result = _(list).pullAllBy([value, value], (value2) => {
            value2; // $ExpectType TResult
        }).value();
        result = _(list).pullAllBy(list).value();
        result = _(list).pullAllBy(list, (value2) => {
            value2; // $ExpectType TResult
        }).value();

        result = _.chain(list).pullAllBy().value();
        result = _.chain(list).pullAllBy([value, value]).value();
        result = _.chain(list).pullAllBy([value, value], (value2) => {
            value2; // $ExpectType TResult
        }).value();
        result = _.chain(list).pullAllBy(list).value();
        result = _.chain(list).pullAllBy(list, (value2) => {
            value2; // $ExpectType TResult
        }).value();
    }
}

// _.pullAllWith
namespace TestPullAllWith {
    let array: TResult[] = [];
    let list: _.List<TResult> = [];
    let value: TResult = { a: 1, b: "", c: true };

    {
        let result: TResult[];

        result = _.pullAllWith(array);
        result = _.pullAllWith(array, [value, value]);
        result = _.pullAllWith(array, [value, value], (value1, value2) => {
            value1; // $ExpectType TResult
            value2; // $ExpectType TResult
            return true;
        });
        result = _.pullAllWith(array, list);
        result = _.pullAllWith(array, list, (value1, value2) => {
            value1; // $ExpectType TResult
            value2; // $ExpectType TResult
            return true;
        });

        result = _(array).pullAllWith().value();
        result = _(array).pullAllWith([value, value]).value();
        result = _(array).pullAllWith([value, value], (value1, value2) => {
            value1; // $ExpectType TResult
            value2; // $ExpectType TResult
            return true;
        }).value();
        result = _(array).pullAllWith(list).value();
        result = _(array).pullAllWith(list, (value1, value2) => {
            value1; // $ExpectType TResult
            value2; // $ExpectType TResult
            return true;
        }).value();

        result = _.chain(array).pullAllWith().value();
        result = _.chain(array).pullAllWith([value, value]).value();
        result = _.chain(array).pullAllWith([value, value], (value1, value2) => {
            value1; // $ExpectType TResult
            value2; // $ExpectType TResult
            return true;
        }).value();
        result = _.chain(array).pullAllWith(list).value();
        result = _.chain(array).pullAllWith(list, (value1, value2) => {
            value1; // $ExpectType TResult
            value2; // $ExpectType TResult
            return true;
        }).value();
    }

    {
        let result: _.List<TResult>;

        result = _.pullAllWith(list);
        result = _.pullAllWith(list, [value, value]);
        result = _.pullAllWith(list, [value, value], (value1, value2) => {
            value1; // $ExpectType TResult
            value2; // $ExpectType TResult
            return true;
        });
        result = _.pullAllWith(list, list);
        result = _.pullAllWith(list, list, (value1, value2) => {
            value1; // $ExpectType TResult
            value2; // $ExpectType TResult
            return true;
        });

        result = _(list).pullAllWith().value();
        result = _(list).pullAllWith([value, value]).value();
        result = _(list).pullAllWith([value, value], (value1, value2) => {
            value1; // $ExpectType TResult
            value2; // $ExpectType TResult
            return true;
        }).value();
        result = _(list).pullAllWith(list).value();
        result = _(list).pullAllWith(list, (value1, value2) => {
            value1; // $ExpectType TResult
            value2; // $ExpectType TResult
            return true;
        }).value();

        result = _.chain(list).pullAllWith().value();
        result = _.chain(list).pullAllWith([value, value]).value();
        result = _.chain(list).pullAllWith([value, value], (value1, value2) => {
            value1; // $ExpectType TResult
            value2; // $ExpectType TResult
            return true;
        }).value();
        result = _.chain(list).pullAllWith(list).value();
        result = _.chain(list).pullAllWith(list, (value1, value2) => {
            value1; // $ExpectType TResult
            value2; // $ExpectType TResult
            return true;
        }).value();
    }
}

// _.remove
namespace TestRemove {
    let array: TResult[] = [];
    let list: _.List<TResult> = [];

    let result: TResult[];

    result = _.remove(array);
    result = _.remove(array, '');
    result = _.remove(array, {a: 42});
    result = _.remove(array, ['a', 42]);
    result = _.remove(array, (value, index, collection) => {
        value; // $ExpectType TResult
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<TResult>
    });
    result = _.remove(list);
    result = _.remove(list, '');
    result = _.remove(list, {a: 42});
    result = _.remove(list, ['a', 42]);
    result = _.remove(list, (value, index, collection) => {
        value; // $ExpectType TResult
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<TResult>
    });

    result = _(array).remove().value();
    result = _(array).remove('').value();
    result = _(array).remove({a: 42}).value();
    result = _(array).remove(['a', 42]).value();
    result = _(array).remove((value, index, collection) => {
        value; // $ExpectType TResult
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<TResult>
    }).value();
    result = _(list).remove().value();
    result = _(list).remove('').value();
    result = _(list).remove({a: 42}).value();
    result = _(list).remove(['a', 42]).value();
    result = _(list).remove((value, index, collection) => {
        value; // $ExpectType TResult
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<TResult>
    }).value();

    result = _.chain(array).remove().value();
    result = _.chain(array).remove('').value();
    result = _.chain(array).remove({a: 42}).value();
    result = _.chain(array).remove(['a', 42]).value();
    result = _.chain(array).remove((value, index, collection) => {
        value; // $ExpectType TResult
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<TResult>
    }).value();
    result = _.chain(list).remove().value();
    result = _.chain(list).remove('').value();
    result = _.chain(list).remove({a: 42}).value();
    result = _.chain(list).remove(['a', 42]).value();
    result = _.chain(list).remove((value, index, collection) => {
        value; // $ExpectType TResult
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<TResult>
    }).value();
}

// _.tail
namespace TestTail {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    let result: TResult[];

    result = _.tail(array);
    result = _.tail(list);
    result = _(array).tail().value();
    result = _(list).tail().value();
    result = _.chain(array).tail().value();
    result = _.chain(list).tail().value();
}

// _.slice
namespace TestSlice {
    let array: TResult[] | null | undefined = [] as any;

    let result: TResult[];

    result = _.slice(array);
    result = _.slice(array, 42);
    result = _.slice(array, 42, 42);

    result = _(array).slice().value();
    result = _(array).slice(42).value();
    result = _(array).slice(42, 42).value();

    result = _(array).chain().slice().value();
    result = _(array).chain().slice(42).value();
    result = _(array).chain().slice(42, 42).value();
}

// _.sortedIndex
namespace TestSortedIndex {
    type SampleType = {a: number; b: string; c: boolean;};

    let array: SampleType[] = [];
    let list: _.List<SampleType> = [];

    let value: SampleType = { a: 1, b: "", c: true };

    let stringIterator: (x: string) => number;
    let arrayIterator: (x: SampleType) => number;
    let listIterator: (x: SampleType) => number;

    {
        let result: number;

        result = _.sortedIndex<string>('', '');

        result = _.sortedIndex<SampleType>(array, value);

        result = _.sortedIndex<SampleType>(list, value);

        result = _('').sortedIndex('');

        result = _(array).sortedIndex(value);

        result = _(list).sortedIndex<SampleType>(value);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _('').chain().sortedIndex('');

        result = _(array).chain().sortedIndex(value);

        result = _(list).chain().sortedIndex<SampleType>(value);
    }
}

// _.sortedIndexBy
namespace TestSortedIndexBy {
    type SampleType = {a: number; b: string; c: boolean;};

    let array: SampleType[] = [];
    let list: _.List<SampleType> = [];
    let value: SampleType = { a: 1, b: "", c: true };

    let result: number;

    result = _.sortedIndexBy('', '', (value2) => {
        value2; // $ExpectType string
    });
    result = _.sortedIndexBy(array, value, '');
    result = _.sortedIndexBy(array, value, {a: 42});
    result = _.sortedIndexBy(array, value, ['a', 42]);
    result = _.sortedIndexBy(array, value, (value2) => {
        value2; // $ExpectType SampleType
    });
    result = _.sortedIndexBy(list, value, '');
    result = _.sortedIndexBy(list, value, {a: 42});
    result = _.sortedIndexBy(list, value, ['a', 42]);
    result = _.sortedIndexBy(list, value, (value2) => {
        value2; // $ExpectType SampleType
    });

    result = _('').sortedIndexBy('', (value2) => {
        value2; // $ExpectType string
    });
    result = _(array).sortedIndexBy(value, '');
    result = _(array).sortedIndexBy(value, {a: 42});
    result = _(array).sortedIndexBy(value, ['a', 42]);
    result = _(array).sortedIndexBy(value, (value2) => {
        value2; // $ExpectType SampleType
    });
    result = _(list).sortedIndexBy(value, '');
    result = _(list).sortedIndexBy(value, {a: 42});
    result = _(list).sortedIndexBy(value, ['a', 42]);
    result = _(list).sortedIndexBy(value, (value2) => {
        value2; // $ExpectType SampleType
    });

    result = _.chain('').sortedIndexBy('', (value2) => {
        value2; // $ExpectType string
    }).value();
    result = _.chain(array).sortedIndexBy(value, '').value();
    result = _.chain(array).sortedIndexBy(value, {a: 42}).value();
    result = _.chain(array).sortedIndexBy(value, ['a', 42]).value();
    result = _.chain(array).sortedIndexBy(value, (value2) => {
        value2; // $ExpectType SampleType
    }).value();
    result = _.chain(list).sortedIndexBy(value, '').value();
    result = _.chain(list).sortedIndexBy(value, {a: 42}).value();
    result = _.chain(list).sortedIndexBy(value, ['a', 42]).value();
    result = _.chain(list).sortedIndexBy(value, (value2) => {
        value2; // $ExpectType SampleType
    }).value();
}

// _.sortedLastIndex
namespace TestSortedLastIndex {
    type SampleType = {a: number; b: string; c: boolean;};

    let array: SampleType[] = [];
    let list: _.List<SampleType> = [];

    let value: SampleType = { a: 1, b: "", c: true };

    {
        let result: number;

        result = _.sortedLastIndex<string>('', '');

        result = _.sortedLastIndex<SampleType>(array, value);

        result = _.sortedLastIndex<SampleType>(list, value);

        result = _('').sortedLastIndex('');

        result = _(array).sortedLastIndex(value);

        result = _(list).sortedLastIndex<SampleType>(value);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _('').chain().sortedLastIndex('');

        result = _(array).chain().sortedLastIndex(value);

        result = _(list).chain().sortedLastIndex<SampleType>(value);
    }
}

// _.sortedLastIndexBy
namespace TestSortedLastIndexBy {
    type SampleType = {a: number; b: string; c: boolean;};

    let array: SampleType[] = [];
    let list: _.List<SampleType> = [];
    let value: SampleType = { a: 1, b: "", c: true };

    let result: number;

    result = _.sortedLastIndexBy('', '', (value2) => {
        value2; // $ExpectType string
    });
    result = _.sortedLastIndexBy(array, value, '');
    result = _.sortedLastIndexBy(array, value, {a: 42});
    result = _.sortedLastIndexBy(array, value, ['a', 42]);
    result = _.sortedLastIndexBy(array, value, (value2) => {
        value2; // $ExpectType SampleType
    });
    result = _.sortedLastIndexBy(list, value, '');
    result = _.sortedLastIndexBy(list, value, {a: 42});
    result = _.sortedLastIndexBy(list, value, ['a', 42]);
    result = _.sortedLastIndexBy(list, value, (value2) => {
        value2; // $ExpectType SampleType
    });

    result = _('').sortedLastIndexBy('', (value2) => {
        value2; // $ExpectType string
    });
    result = _(array).sortedLastIndexBy(value, '');
    result = _(array).sortedLastIndexBy(value, {a: 42});
    result = _(array).sortedLastIndexBy(value, ['a', 42]);
    result = _(array).sortedLastIndexBy(value, (value2) => {
        value2; // $ExpectType SampleType
    });
    result = _(list).sortedLastIndexBy(value, '');
    result = _(list).sortedLastIndexBy(value, {a: 42});
    result = _(list).sortedLastIndexBy(value, ['a', 42]);
    result = _(list).sortedLastIndexBy(value, (value2) => {
        value2; // $ExpectType SampleType
    });

    result = _.chain('').sortedLastIndexBy('', (value2) => {
        value2; // $ExpectType string
    }).value();
    result = _.chain(array).sortedLastIndexBy(value, '').value();
    result = _.chain(array).sortedLastIndexBy(value, {a: 42}).value();
    result = _.chain(array).sortedLastIndexBy(value, ['a', 42]).value();
    result = _.chain(array).sortedLastIndexBy(value, (value2) => {
        value2; // $ExpectType SampleType
    }).value();
    result = _.chain(list).sortedLastIndexBy(value, '').value();
    result = _.chain(list).sortedLastIndexBy(value, {a: 42}).value();
    result = _.chain(list).sortedLastIndexBy(value, ['a', 42]).value();
    result = _.chain(list).sortedLastIndexBy(value, (value2) => {
        value2; // $ExpectType SampleType
    }).value();
}

// _.sortedLastIndexOf
namespace TestSortedLastIndex {
    type SampleType = {a: number; b: string; c: boolean;};

    let array: SampleType[] = [];
    let list: _.List<SampleType> = [];

    let value: SampleType = { a: 1, b: "", c: true };

    {
        let result: number;

        result = _.sortedLastIndexOf('', '');

        result = _.sortedLastIndexOf(array, value);

        result = _.sortedLastIndex(list, value);

        result = _('').sortedLastIndexOf('');

        result = _(array).sortedLastIndexOf(value);

        result = _(list).sortedLastIndexOf(value);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _('').chain().sortedLastIndexOf('');

        result = _(array).chain().sortedLastIndexOf(value);

        result = _(list).chain().sortedLastIndexOf(value);
    }
}

// _.take
namespace TestTake {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    {
        let result: TResult[];

        result = _.take<TResult>(array);
        result = _.take<TResult>(array, 42);

        result = _.take<TResult>(list);
        result = _.take<TResult>(list, 42);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).take();
        result = _(array).take(42);

        result = _(list).take<TResult>();
        result = _(list).take<TResult>(42);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().take();
        result = _(array).chain().take(42);

        result = _(list).chain().take<TResult>();
        result = _(list).chain().take<TResult>(42);
    }
}

// _.takeRight
namespace TestTakeRight {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    {
        let result: TResult[];

        result = _.takeRight<TResult>(array);
        result = _.takeRight<TResult>(array, 42);

        result = _.takeRight<TResult>(list);
        result = _.takeRight<TResult>(list, 42);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).takeRight();
        result = _(array).takeRight(42);

        result = _(list).takeRight<TResult>();
        result = _(list).takeRight<TResult>(42);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().takeRight();
        result = _(array).chain().takeRight(42);

        result = _(list).chain().takeRight<TResult>();
        result = _(list).chain().takeRight<TResult>(42);
    }
}

// _.takeRightWhile
namespace TestTakeRightWhile {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let predicateFn = (value: TResult, index: number, collection: _.List<TResult>) => true;

    {
        let result: TResult[];

        result = _.takeRightWhile<TResult>(array);
        result = _.takeRightWhile<TResult>(array, predicateFn);
        result = _.takeRightWhile<TResult>(array, '');
        result = _.takeRightWhile<{a: number;}, TResult>(array, {a: 42});

        result = _.takeRightWhile<TResult>(list);
        result = _.takeRightWhile<TResult>(list, predicateFn);
        result = _.takeRightWhile<TResult>(list, '');
        result = _.takeRightWhile<{a: number;}, TResult>(list, {a: 42});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).takeRightWhile();
        result = _(array).takeRightWhile(predicateFn);
        result = _(array).takeRightWhile('');
        result = _(array).takeRightWhile<{a: number;}>({a: 42});

        result = _(list).takeRightWhile<TResult>();
        result = _(list).takeRightWhile<TResult>(predicateFn);
        result = _(list).takeRightWhile<TResult>('');
        result = _(list).takeRightWhile<{a: number;}, TResult>({a: 42});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().takeRightWhile();
        result = _(array).chain().takeRightWhile(predicateFn);
        result = _(array).chain().takeRightWhile('');
        result = _(array).chain().takeRightWhile<{a: number;}>({a: 42});

        result = _(list).chain().takeRightWhile<TResult>();
        result = _(list).chain().takeRightWhile<TResult>(predicateFn);
        result = _(list).chain().takeRightWhile<TResult>('');
        result = _(list).chain().takeRightWhile<{a: number;}, TResult>({a: 42});
    }
}

// _.takeWhile
namespace TestTakeWhile {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let predicateFn = (value: TResult, index: number, collection: _.List<TResult>) => true;

    {
        let result: TResult[];

        result = _.takeWhile<TResult>(array);
        result = _.takeWhile<TResult>(array, predicateFn);
        result = _.takeWhile<TResult>(array, '');
        result = _.takeWhile<{a: number;}, TResult>(array, {a: 42});

        result = _.takeWhile<TResult>(list);
        result = _.takeWhile<TResult>(list, predicateFn);
        result = _.takeWhile<TResult>(list, '');
        result = _.takeWhile<{a: number;}, TResult>(list, {a: 42});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).takeWhile();
        result = _(array).takeWhile(predicateFn);
        result = _(array).takeWhile('');
        result = _(array).takeWhile<{a: number;}>({a: 42});

        result = _(list).takeWhile<TResult>();
        result = _(list).takeWhile<TResult>(predicateFn);
        result = _(list).takeWhile<TResult>('');
        result = _(list).takeWhile<{a: number;}, TResult>({a: 42});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().takeWhile();
        result = _(array).chain().takeWhile(predicateFn);
        result = _(array).chain().takeWhile('');
        result = _(array).chain().takeWhile<{a: number;}>({a: 42});

        result = _(list).chain().takeWhile<TResult>();
        result = _(list).chain().takeWhile<TResult>(predicateFn);
        result = _(list).chain().takeWhile<TResult>('');
        result = _(list).chain().takeWhile<{a: number;}, TResult>({a: 42});
    }
}

// _.union
namespace TestUnion {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    {
        let result: TResult[];

        result = _.union<TResult>();

        result = _.union<TResult>(array);
        result = _.union<TResult>(array, list);
        result = _.union<TResult>(array, list, array);

        result = _.union<TResult>(list);
        result = _.union<TResult>(list, array);
        result = _.union<TResult>(list, array, list);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).union();
        result = _(array).union(list);
        result = _(array).union(list, array);

        result = _(array).union<TResult>();
        result = _(array).union<TResult>(list);
        result = _(array).union<TResult>(list, array);

        result = _(list).union<TResult>();
        result = _(list).union<TResult>(array);
        result = _(list).union<TResult>(array, list);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().union();
        result = _(array).chain().union(list);
        result = _(array).chain().union(list, array);

        result = _(array).chain().union<TResult>();
        result = _(array).chain().union<TResult>(list);
        result = _(array).chain().union<TResult>(list, array);

        result = _(list).chain().union<TResult>();
        result = _(list).chain().union<TResult>(array);
        result = _(list).chain().union<TResult>(array, list);
    }
}

// _.unionBy
namespace TestUnionBy {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let iteratee: (value: TResult) => any = (value: TResult) => 1;

    {
        let result: TResult[];

        result = _.unionBy<TResult>(array, array);
        result = _.unionBy<TResult>(array, list, array);
        result = _.unionBy<TResult>(array, array, list, array);
        result = _.unionBy<TResult>(array, list, array, list, array);
        result = _.unionBy<TResult>(array, array, list, array, list, array);

        result = _.unionBy<TResult>(array, array, iteratee);
        result = _.unionBy<TResult>(array, list, array, iteratee);
        result = _.unionBy<TResult>(array, array, list, array, iteratee);
        result = _.unionBy<TResult>(array, list, array, list, array, iteratee);
        result = _.unionBy<TResult>(array, array, list, array, list, array, iteratee);

        result = _.unionBy<TResult>(array, array, 'a');
        result = _.unionBy<TResult>(array, list, array, 'a');
        result = _.unionBy<TResult>(array, array, list, array, 'a');
        result = _.unionBy<TResult>(array, list, array, list, array, 'a');
        result = _.unionBy<TResult>(array, array, list, array, list, array, 'a');

        result = _.unionBy<TResult, {a: number}>(array, array, {a: 1});
        result = _.unionBy<TResult, {a: number}>(array, list, array, {a: 1});
        result = _.unionBy<TResult, {a: number}>(array, array, list, array, {a: 1});
        result = _.unionBy<TResult, {a: number}>(array, list, array, list, array, {a: 1});
        result = _.unionBy<TResult>(array, list, array, list, array, list, {a: 1});

        result = _.unionBy<TResult>(list, list);
        result = _.unionBy<TResult>(list, array, list);
        result = _.unionBy<TResult>(list, list, array, list);
        result = _.unionBy<TResult>(list, array, list, array, list);
        result = _.unionBy<TResult>(list, list, array, list, array, list);

        result = _.unionBy<TResult>(list, list, iteratee);
        result = _.unionBy<TResult>(list, array, list, iteratee);
        result = _.unionBy<TResult>(list, list, array, list, iteratee);
        result = _.unionBy<TResult>(list, array, list, array, list, iteratee);
        result = _.unionBy<TResult>(list, list, array, list, array, list, iteratee);

        result = _.unionBy<TResult>(list, list, 'a');
        result = _.unionBy<TResult>(list, array, list, 'a');
        result = _.unionBy<TResult>(list, list, array, list, 'a');
        result = _.unionBy<TResult>(list, array, list, array, list, 'a');
        result = _.unionBy<TResult>(list, list, array, list, array, list, 'a');

        result = _.unionBy<TResult, {a: number}>(list, list, {a: 1});
        result = _.unionBy<TResult, {a: number}>(list, array, list, {a: 1});
        result = _.unionBy<TResult, {a: number}>(list, list, array, list, {a: 1});
        result = _.unionBy<TResult, {a: number}>(list, array, list, array, list, {a: 1});
        result = _.unionBy<TResult>(list, array, list, array, list, array, {a: 1});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).unionBy<TResult>(array);
        result = _(array).unionBy<TResult>(list, array);
        result = _(array).unionBy<TResult>(array, list, array);
        result = _(array).unionBy<TResult>(list, array, list, array);
        result = _(array).unionBy<TResult>(array, list, array, list, array);

        result = _(array).unionBy<TResult>(array, iteratee);
        result = _(array).unionBy<TResult>(list, array, iteratee);
        result = _(array).unionBy<TResult>(array, list, array, iteratee);
        result = _(array).unionBy<TResult>(list, array, list, array, iteratee);
        result = _(array).unionBy<TResult>(array, list, array, list, array, iteratee);

        result = _(array).unionBy<TResult>(array, 'a');
        result = _(array).unionBy<TResult>(list, array, 'a');
        result = _(array).unionBy<TResult>(array, list, array, 'a');
        result = _(array).unionBy<TResult>(list, array, list, array, 'a');
        result = _(array).unionBy<TResult>(array, list, array, list, array, 'a');

        result = _(array).unionBy<TResult, {a: number}>(array, {a: 1});
        result = _(array).unionBy<TResult, {a: number}>(list, array, {a: 1});
        result = _(array).unionBy<TResult, {a: number}>(array, list, array, {a: 1});
        result = _(array).unionBy<TResult, {a: number}>(list, array, list, array, {a: 1});
        result = _(array).unionBy<TResult>(list, array, list, array, list, {a: 1});

        result = _(list).unionBy<TResult>(list);
        result = _(list).unionBy<TResult>(array, list);
        result = _(list).unionBy<TResult>(list, array, list);
        result = _(list).unionBy<TResult>(array, list, array, list);
        result = _(list).unionBy<TResult>(list, array, list, array, list);

        result = _(list).unionBy<TResult>(list, iteratee);
        result = _(list).unionBy<TResult>(array, list, iteratee);
        result = _(list).unionBy<TResult>(list, array, list, iteratee);
        result = _(list).unionBy<TResult>(array, list, array, list, iteratee);
        result = _(list).unionBy<TResult>(list, array, list, array, list, iteratee);

        result = _(list).unionBy<TResult>(list, 'a');
        result = _(list).unionBy<TResult>(array, list, 'a');
        result = _(list).unionBy<TResult>(list, array, list, 'a');
        result = _(list).unionBy<TResult>(array, list, array, list, 'a');
        result = _(list).unionBy<TResult>(list, array, list, array, list, 'a');

        result = _(list).unionBy<TResult, {a: number}>(list, {a: 1});
        result = _(list).unionBy<TResult, {a: number}>(array, list, {a: 1});
        result = _(list).unionBy<TResult, {a: number}>(list, array, list, {a: 1});
        result = _(list).unionBy<TResult, {a: number}>(array, list, array, list, {a: 1});
        result = _(list).unionBy<TResult>(array, list, array, list, array, {a: 1});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().unionBy<TResult>(array);
        result = _(array).chain().unionBy<TResult>(list, array);
        result = _(array).chain().unionBy<TResult>(array, list, array);
        result = _(array).chain().unionBy<TResult>(list, array, list, array);
        result = _(array).chain().unionBy<TResult>(array, list, array, list, array);

        result = _(array).chain().unionBy<TResult>(array, iteratee);
        result = _(array).chain().unionBy<TResult>(list, array, iteratee);
        result = _(array).chain().unionBy<TResult>(array, list, array, iteratee);
        result = _(array).chain().unionBy<TResult>(list, array, list, array, iteratee);
        result = _(array).chain().unionBy<TResult>(array, list, array, list, array, iteratee);

        result = _(array).chain().unionBy<TResult>(array, 'a');
        result = _(array).chain().unionBy<TResult>(list, array, 'a');
        result = _(array).chain().unionBy<TResult>(array, list, array, 'a');
        result = _(array).chain().unionBy<TResult>(list, array, list, array, 'a');
        result = _(array).chain().unionBy<TResult>(array, list, array, list, array, 'a');

        result = _(array).chain().unionBy<TResult, {a: number}>(array, {a: 1});
        result = _(array).chain().unionBy<TResult, {a: number}>(list, array, {a: 1});
        result = _(array).chain().unionBy<TResult, {a: number}>(array, list, array, {a: 1});
        result = _(array).chain().unionBy<TResult, {a: number}>(list, array, list, array, {a: 1});
        result = _(array).chain().unionBy<TResult>(list, array, list, array, list, {a: 1});

        result = _(list).chain().unionBy<TResult>(list);
        result = _(list).chain().unionBy<TResult>(array, list);
        result = _(list).chain().unionBy<TResult>(list, array, list);
        result = _(list).chain().unionBy<TResult>(array, list, array, list);
        result = _(list).chain().unionBy<TResult>(list, array, list, array, list);

        result = _(list).chain().unionBy<TResult>(list, iteratee);
        result = _(list).chain().unionBy<TResult>(array, list, iteratee);
        result = _(list).chain().unionBy<TResult>(list, array, list, iteratee);
        result = _(list).chain().unionBy<TResult>(array, list, array, list, iteratee);
        result = _(list).chain().unionBy<TResult>(list, array, list, array, list, iteratee);

        result = _(list).chain().unionBy<TResult>(list, 'a');
        result = _(list).chain().unionBy<TResult>(array, list, 'a');
        result = _(list).chain().unionBy<TResult>(list, array, list, 'a');
        result = _(list).chain().unionBy<TResult>(array, list, array, list, 'a');
        result = _(list).chain().unionBy<TResult>(list, array, list, array, list, 'a');

        result = _(list).chain().unionBy<TResult, {a: number}>(list, {a: 1});
        result = _(list).chain().unionBy<TResult, {a: number}>(array, list, {a: 1});
        result = _(list).chain().unionBy<TResult, {a: number}>(list, array, list, {a: 1});
        result = _(list).chain().unionBy<TResult, {a: number}>(array, list, array, list, {a: 1});
        result = _(list).chain().unionBy<TResult>(array, list, array, list, array, {a: 1});
    }
}

// _.uniq
namespace TestUniq {
    type SampleObject = {a: number; b: string; c: boolean};

    let array: SampleObject[] | null | undefined = [] as any;
    let list: _.List<SampleObject> | null | undefined = [] as any;

    {
        let result: string[];
        result = _.uniq('abc');
        result = _('abc').uniq().value();
        result = _.chain('abc').uniq().value();
    }

    {
        let result: SampleObject[];

        result = _.uniq(array);
        result = _.uniq(list);
        result = _(array).uniq().value();
        result = _(list).uniq().value();
        result = _.chain(array).uniq().value();
        result = _.chain(list).uniq().value();
    }
}

// _.uniqBy
namespace TestUniqBy {
    type SampleObject = {a: number; b: string; c: boolean};

    let array: SampleObject[] | null | undefined = [] as any;
    let list: _.List<SampleObject> | null | undefined = [] as any;

    let stringIterator = (value: string, index: number, collection: string) => "";
    let listIterator = (value: SampleObject, index: number, collection: _.List<SampleObject>) => 0;

    {
        let result: string[];

        result = _.uniqBy('abc', stringIterator);
        result = _('abc').uniqBy(stringIterator);
        result = _.chain('abc').uniqBy(stringIterator);
    }

    {
        let result: SampleObject[];

        result = _.uniqBy(array, listIterator);
        result = _.uniqBy(array, 'a');
        result = _.uniqBy(array, {a: 42});
        result = _.uniqBy(array, ['a', 42]);
        result = _(array).uniqBy(listIterator).value();
        result = _(array).uniqBy('a').value();
        result = _(array).uniqBy({a: 42}).value();
        result = _(array).uniqBy(['a', 42]).value();
        result = _.chain(array).uniqBy(listIterator).value();
        result = _.chain(array).uniqBy('a').value();
        result = _.chain(array).uniqBy({a: 42}).value();
        result = _.chain(array).uniqBy(['a', 42]).value();

        result = _.uniqBy(list, listIterator);
        result = _.uniqBy(list, 'a');
        result = _.uniqBy(list, {a: 42});
        result = _.uniqBy(list, ['a', 42]);
        result = _(list).uniqBy(listIterator).value();
        result = _(list).uniqBy('a').value();
        result = _(list).uniqBy({a: 42}).value();
        result = _(list).uniqBy(['a', 42]).value();
        result = _.chain(list).uniqBy(listIterator).value();
        result = _.chain(list).uniqBy('a').value();
        result = _.chain(list).uniqBy({a: 42}).value();
        result = _.chain(list).uniqBy(['a', 42]).value();
    }
}

// _.sortedUniq
namespace TestSortedUniq {
    type SampleObject = {a: number; b: string; c: boolean};

    let array: SampleObject[] | null | undefined = [] as any;
    let list: _.List<SampleObject> | null | undefined = [] as any;

    {
        let result: string[];
        result = _.sortedUniq('abc');
        result = _('abc').sortedUniq().value();
        result = _.chain('abc').sortedUniq().value();
    }

    {
        let result: SampleObject[];

        result = _.sortedUniq(array);
        result = _.sortedUniq(list);
        result = _(array).sortedUniq().value();
        result = _(list).sortedUniq().value();
        result = _.chain(array).sortedUniq().value();
        result = _.chain(list).sortedUniq().value();
    }
}

// _.sortedUniqBy
namespace TestSortedUniqBy {
    type SampleObject = {a: number; b: string; c: boolean};

    let array: SampleObject[] | null | undefined = [] as any;
    let list: _.List<SampleObject> | null | undefined = [] as any;

    let stringIterator = (value: string, index: number, collection: string) => "";
    let listIterator = (value: SampleObject, index: number, collection: _.List<SampleObject>) => 0;

    {
        let result: string[];

        result = _.sortedUniqBy('abc', stringIterator);
        result = _('abc').sortedUniqBy(stringIterator);
        result = _.chain('abc').sortedUniqBy(stringIterator);
    }

    {
        let result: SampleObject[];

        result = _.sortedUniqBy(array, listIterator);
        result = _.sortedUniqBy(array, 'a');
        result = _.sortedUniqBy(array, {a: 42});
        result = _.sortedUniqBy(array, ['a', 42]);
        result = _(array).sortedUniqBy(listIterator).value();
        result = _(array).sortedUniqBy('a').value();
        result = _(array).sortedUniqBy({a: 42}).value();
        result = _(array).sortedUniqBy(['a', 42]).value();
        result = _.chain(array).sortedUniqBy(listIterator).value();
        result = _.chain(array).sortedUniqBy('a').value();
        result = _.chain(array).sortedUniqBy({a: 42}).value();
        result = _.chain(array).sortedUniqBy(['a', 42]).value();

        result = _.sortedUniqBy(list, listIterator);
        result = _.sortedUniqBy(list, 'a');
        result = _.sortedUniqBy(list, {a: 42});
        result = _.sortedUniqBy(list, ['a', 42]);
        result = _(list).sortedUniqBy(listIterator).value();
        result = _(list).sortedUniqBy('a').value();
        result = _(list).sortedUniqBy({a: 42}).value();
        result = _(list).sortedUniqBy(['a', 42]).value();
        result = _.chain(list).sortedUniqBy(listIterator).value();
        result = _.chain(list).sortedUniqBy('a').value();
        result = _.chain(list).sortedUniqBy({a: 42}).value();
        result = _.chain(list).sortedUniqBy(['a', 42]).value();
    }
}

// _.unzip
namespace TestUnzip {
    let array = [['a', 'b'], [1, 2], [true, false]];

    let list: _.List<_.List<string|number|boolean>> = {
        0: {0: 'a', 1: 'b', length: 2},
        1: {0: 1, 1: 2, length: 2},
        2: {0: true, 1: false, length: 2},
        length: 3
    };
    let nilArray: TResult[][] | null | undefined = [] as any;
    let nilList: _.List<_.List<TResult>> | null | undefined = [] as any;

    {
        let result: TResult[][];

        result = _.unzip(nilArray);
        result = _.unzip(nilList);
    }

    {
        let result: (string|number|boolean)[][];

        result = _.unzip<string|number|boolean>(array);
        result = _.unzip<string|number|boolean>(list);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<(string|number|boolean)[]>;

        result = _(array).unzip<string|number|boolean>();
        result = _(list).unzip<string|number|boolean>();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<(string|number|boolean)[]>;

        result = _(array).chain().unzip<string|number|boolean>();
        result = _(list).chain().unzip<string|number|boolean>();
    }
}

// _.unzipWith
{
    let testUnzipWithArray: (number[]|_.List<number>)[] | null | undefined = [] as any;
    let testUnzipWithList: _.List<number[]|_.List<number>> | null | undefined = [] as any;
    let testUnzipWithIterator: {(prev: TResult, curr: number, index?: number, list?: number[]): TResult} = (prev: TResult, curr: number, index?: number, list?: number[]) => ({ a: 1, b: "", c: true });
    let result: TResult[];
    result = _.unzipWith<number, TResult>(testUnzipWithArray);
    result = _.unzipWith<number, TResult>(testUnzipWithArray, testUnzipWithIterator);
    result = _.unzipWith<number, TResult>(testUnzipWithList);
    result = _.unzipWith<number, TResult>(testUnzipWithList, testUnzipWithIterator);
    result = _(testUnzipWithArray).unzipWith<number, TResult>(testUnzipWithIterator).value();
    result = _(testUnzipWithList).unzipWith<number, TResult>(testUnzipWithIterator).value();
}

// _.without
namespace TestWithout {
    let array: number[] | null | undefined = [] as any;
    let list: _.List<number> | null | undefined = [] as any;

    {
        let result: number[];

        result = _.without<number>(array);
        result = _.without<number>(array, 1);
        result = _.without<number>(array, 1, 2);
        result = _.without<number>(array, 1, 2, 3);

        result = _.without<number>(list);
        result = _.without<number>(list, 1);
        result = _.without<number>(list, 1, 2);
        result = _.without<number>(list, 1, 2, 3);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<number>;

        result = _(array).without();
        result = _(array).without(1);
        result = _(array).without(1, 2);
        result = _(array).without(1, 2, 3);
        result = _(list).without<number>();
        result = _(list).without<number>(1);
        result = _(list).without<number>(1, 2);
        result = _(list).without<number>(1, 2, 3);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<number>;

        result = _(array).chain().without();
        result = _(array).chain().without(1);
        result = _(array).chain().without(1, 2);
        result = _(array).chain().without(1, 2, 3);

        result = _(list).chain().without<number>();
        result = _(list).chain().without<number>(1);
        result = _(list).chain().without<number>(1, 2);
        result = _(list).chain().without<number>(1, 2, 3);
    }
}

// _.xor
namespace TestXor {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    {
        let result: TResult[];

        result = _.xor<TResult>();

        result = _.xor<TResult>(array);
        result = _.xor<TResult>(array, list);
        result = _.xor<TResult>(array, list, array);

        result = _.xor<TResult>(list);
        result = _.xor<TResult>(list, array);
        result = _.xor<TResult>(list, array, list);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).xor();
        result = _(array).xor(list);
        result = _(array).xor(list, array);

        result = _(list).xor<TResult>();
        result = _(list).xor<TResult>(array);
        result = _(list).xor<TResult>(array, list);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().xor();
        result = _(array).chain().xor(list);
        result = _(array).chain().xor(list, array);

        result = _(list).chain().xor<TResult>();
        result = _(list).chain().xor<TResult>(array);
        result = _(list).chain().xor<TResult>(array, list);
    }
}

// _.zip
namespace TestZip {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    {
        let result: TResult[][];

        result = _.zip<TResult>(array);
        result = _.zip<TResult>(array, list);
        result = _.zip<TResult>(array, list, array);

        result = _.zip<TResult>(list);
        result = _.zip<TResult>(list, array);
        result = _.zip<TResult>(list, array, list);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult[]>;

        result = _(array).zip<TResult>(list);
        result = _(array).zip<TResult>(list, array);

        result = _(list).zip<TResult>(array);
        result = _(list).zip<TResult>(array, list);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult[]>;

        result = _(array).chain().zip<TResult>(list);
        result = _(array).chain().zip<TResult>(list, array);

        result = _(list).chain().zip<TResult>(array);
        result = _(list).chain().zip<TResult>(array, list);
    }
}

// _.zipObject
namespace TestZipObject {
    let arrayOfKeys: string[] = [];
    let arrayOfValues: number[] = [];
    let arrayOfKeyValuePairs: (string|number)[][] = [];

    let listOfKeys: _.List<string> = [];
    let listOfValues: _.List<number> = [];
    let listOfKeyValuePairs: _.List<_.List<string|number>> = [];

    {
        let result: _.Dictionary<void>;

        result = _.zipObject<_.Dictionary<void>>(arrayOfKeys);
        result = _.zipObject<_.Dictionary<void>>(listOfKeys);
    }

    {
        let result: _.Dictionary<number>;

        result = _.zipObject<_.Dictionary<number>>(arrayOfKeys, arrayOfValues);
        result = _.zipObject<_.Dictionary<number>>(arrayOfKeys, listOfValues);
        result = _.zipObject<_.Dictionary<number>>(listOfKeys, listOfValues);
        result = _.zipObject<_.Dictionary<number>>(listOfKeys, arrayOfValues);

        result = _.zipObject<number, _.Dictionary<number>>(arrayOfKeys, arrayOfValues);
        result = _.zipObject<number, _.Dictionary<number>>(arrayOfKeys, listOfValues);
        result = _.zipObject<number, _.Dictionary<number>>(listOfKeys, listOfValues);
        result = _.zipObject<number, _.Dictionary<number>>(listOfKeys, arrayOfValues);

        result = _.zipObject<_.Dictionary<number>>(arrayOfKeyValuePairs);
        result = _.zipObject<_.Dictionary<number>>(listOfKeyValuePairs);
    }

    {
        let result: _.Dictionary<any>;

        result = _.zipObject(arrayOfKeys);
        result = _.zipObjectDeep(arrayOfKeys);
        result = _.zipObject(arrayOfKeys, arrayOfValues);
        result = _.zipObjectDeep(arrayOfKeys, arrayOfValues);
        result = _.zipObject(arrayOfKeys, listOfValues);
        result = _.zipObjectDeep(arrayOfKeys, listOfValues);

        result = _.zipObject(listOfKeys);
        result = _.zipObjectDeep(listOfKeys);
        result = _.zipObject(listOfKeys, listOfValues);
        result = _.zipObjectDeep(listOfKeys, listOfValues);
        result = _.zipObject(listOfKeys, arrayOfValues);
        result = _.zipObjectDeep(listOfKeys, arrayOfValues);

        result = _.zipObject<_.Dictionary<number>>(arrayOfKeyValuePairs);
        result = _.zipObject<_.Dictionary<number>>(listOfKeyValuePairs);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<void>>;

        result = _(arrayOfKeys).zipObject<_.Dictionary<void>>();
        result = _(listOfKeys).zipObject<_.Dictionary<void>>();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<number>>;

        result = _(arrayOfKeys).zipObject<_.Dictionary<number>>(arrayOfValues);
        result = _(arrayOfKeys).zipObject<_.Dictionary<number>>(listOfValues);
        result = _(listOfKeys).zipObject<_.Dictionary<number>>(listOfValues);
        result = _(listOfKeys).zipObject<_.Dictionary<number>>(arrayOfValues);

        result = _(arrayOfKeys).zipObject<number, _.Dictionary<number>>(arrayOfValues);
        result = _(arrayOfKeys).zipObject<number, _.Dictionary<number>>(listOfValues);
        result = _(listOfKeys).zipObject<number, _.Dictionary<number>>(listOfValues);
        result = _(listOfKeys).zipObject<number, _.Dictionary<number>>(arrayOfValues);

        result = _(listOfKeys).zipObject<_.Dictionary<number>>(arrayOfKeyValuePairs);
        result = _(listOfKeys).zipObject<_.Dictionary<number>>(listOfKeyValuePairs);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<any>>;

        result = _(arrayOfKeys).zipObject();
        result = _(arrayOfKeys).zipObjectDeep();
        result = _(arrayOfKeys).zipObject(arrayOfValues);
        result = _(arrayOfKeys).zipObjectDeep(arrayOfValues);
        result = _(arrayOfKeys).zipObject(listOfValues);
        result = _(arrayOfKeys).zipObjectDeep(listOfValues);

        result = _(listOfKeys).zipObject();
        result = _(listOfKeys).zipObjectDeep();
        result = _(listOfKeys).zipObject(listOfValues);
        result = _(listOfKeys).zipObjectDeep(listOfValues);
        result = _(listOfKeys).zipObject(arrayOfValues);
        result = _(listOfKeys).zipObjectDeep(arrayOfValues);

        result = _(listOfKeys).zipObject(arrayOfKeyValuePairs);
        result = _(listOfKeys).zipObjectDeep(arrayOfKeyValuePairs);
        result = _(listOfKeys).zipObject(listOfKeyValuePairs);
        result = _(listOfKeys).zipObjectDeep(listOfKeyValuePairs);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<void>>;

        result = _(arrayOfKeys).chain().zipObject<_.Dictionary<void>>();
        result = _(listOfKeys).chain().zipObject<_.Dictionary<void>>();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<number>>;

        result = _(arrayOfKeys).chain().zipObject<_.Dictionary<number>>(arrayOfValues);
        result = _(arrayOfKeys).chain().zipObject<_.Dictionary<number>>(listOfValues);
        result = _(listOfKeys).chain().zipObject<_.Dictionary<number>>(listOfValues);
        result = _(listOfKeys).chain().zipObject<_.Dictionary<number>>(arrayOfValues);

        result = _(arrayOfKeys).chain().zipObject<number, _.Dictionary<number>>(arrayOfValues);
        result = _(arrayOfKeys).chain().zipObject<number, _.Dictionary<number>>(listOfValues);
        result = _(listOfKeys).chain().zipObject<number, _.Dictionary<number>>(listOfValues);
        result = _(listOfKeys).chain().zipObject<number, _.Dictionary<number>>(arrayOfValues);

        result = _(listOfKeys).chain().zipObject<_.Dictionary<number>>(arrayOfKeyValuePairs);
        result = _(listOfKeys).chain().zipObject<_.Dictionary<number>>(listOfKeyValuePairs);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<any>>;

        result = _(arrayOfKeys).chain().zipObject();
        result = _(arrayOfKeys).chain().zipObjectDeep();
        result = _(arrayOfKeys).chain().zipObject(arrayOfValues);
        result = _(arrayOfKeys).chain().zipObjectDeep(arrayOfValues);
        result = _(arrayOfKeys).chain().zipObject(listOfValues);
        result = _(arrayOfKeys).chain().zipObjectDeep(listOfValues);

        result = _(listOfKeys).chain().zipObject();
        result = _(listOfKeys).chain().zipObjectDeep();
        result = _(listOfKeys).chain().zipObject(listOfValues);
        result = _(listOfKeys).chain().zipObjectDeep(listOfValues);
        result = _(listOfKeys).chain().zipObject(arrayOfValues);
        result = _(listOfKeys).chain().zipObjectDeep(arrayOfValues);

        result = _(listOfKeys).chain().zipObject(arrayOfKeyValuePairs);
        result = _(listOfKeys).chain().zipObjectDeep(arrayOfKeyValuePairs);
        result = _(listOfKeys).chain().zipObject(listOfKeyValuePairs);
        result = _(listOfKeys).chain().zipObjectDeep(listOfKeyValuePairs);
    }
}

// _.zipWith
interface TestZipWithFn {
    (a1: number, a2: number): number;
}
let testZipWithFn: TestZipWithFn = (a1, a2) => 1;
result = <number[]>_.zipWith<number>([1, 2]);
result = <number[]>_.zipWith<number>([1, 2], testZipWithFn);
result = <number[]>_.zipWith<number>([1, 2], [1, 2], testZipWithFn);
result = <number[]>_.zipWith<number>([1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], testZipWithFn);
result = <number[]>_([1, 2]).zipWith<number>().value();
result = <number[]>_([1, 2]).zipWith<number>(testZipWithFn).value();
result = <number[]>_([1, 2]).zipWith<number>([1, 2], testZipWithFn).value();
result = <number[]>_([1, 2]).zipWith<number>([1, 2], [1, 2], [1, 2], [1, 2], [1, 2], testZipWithFn).value();

/*********
 * Chain *
 *********/

// _.chain
namespace TestChain {
    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _.chain('');
        result = _('').chain();

        result = _.chain('').chain();
        result = _('').chain().chain();
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _.chain(42);
        result = _(42).chain();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _.chain(true);
        result = _(true).chain();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _.chain(['']);
        result = _(['']).chain();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{a: string}>;

        result = _.chain<{a: string}>({a: ''});
        result = _<{a: string}>({a: ''}).chain();
    }
}

// _.tap
namespace TestTap {
    {
        let interceptor = (value: string) => {};
        let result: string;

        _.tap('', interceptor);
    }

    {
        let interceptor = (value: string[]) => {};
        let result: _.LoDashImplicitArrayWrapper<string>;

        _.tap([''], interceptor);
    }

    {
        let interceptor = (value: {a: string}) => {};
        let result: _.LoDashImplicitObjectWrapper<{a: string}>;

        _.tap({a: ''}, interceptor);
    }

    {
        let interceptor = (value: string) => {};
        let result: _.LoDashImplicitWrapper<string>;

        _.chain('').tap(interceptor);

        _('').tap(interceptor);
    }

    {
        let interceptor = (value: string[]) => {};
        let result: _.LoDashImplicitArrayWrapper<string>;

        _.chain(['']).tap(interceptor);

        _(['']).tap(interceptor);
    }

    {
        let interceptor = (value: {a: string}) => {};
        let result: _.LoDashImplicitObjectWrapper<{a: string}>;

        _.chain({a: ''}).tap(interceptor);

        _({a: ''}).tap(interceptor);
    }

    {
        let interceptor = (value: string) => {};
        let result: _.LoDashExplicitWrapper<string>;

        _.chain('').tap(interceptor);

        _('').chain().tap(interceptor);
    }

    {
        let interceptor = (value: string[]) => {};
        let result: _.LoDashExplicitArrayWrapper<string>;

        _.chain(['']).tap(interceptor);

        _(['']).chain().tap(interceptor);
    }

    {
        let interceptor = (value: {a: string}) => {};
        let result: _.LoDashExplicitObjectWrapper<{a: string}>;

        _.chain({a: ''}).tap(interceptor);

        _({a: ''}).chain().tap(interceptor);
    }
}

// _.thru
namespace TestThru {
    interface Interceptor<T> {
        (value: T): T;
    }

    {
        let interceptor: Interceptor<number> = (x) => x;
        let result: number;

        result = _.thru<number, number>(1, interceptor);
    }

    {
        let interceptor: Interceptor<number> = (x) => x;
        let result: _.LoDashImplicitWrapper<number>;

        result = _(1).thru<number>(interceptor);
    }

    {
        let interceptor: Interceptor<string> = (x) => x;
        let result: _.LoDashImplicitWrapper<string>;

        result = _('').thru<string>(interceptor);
    }

    {
        let interceptor: Interceptor<boolean> = (x) => x;
        let result: _.LoDashImplicitWrapper<boolean>;

        result = _(true).thru<boolean>(interceptor);
    }

    {
        let interceptor: Interceptor<{a: string}> = (x) => x;
        let result: _.LoDashImplicitObjectWrapper<{a: string}>;

        result = _({a: ''}).thru<{a: string}>(interceptor);
    }

    {
        let interceptor: Interceptor<number[]> = (x) => x;
        let result: _.LoDashImplicitArrayWrapper<number>;

        result = _([1, 2, 3]).thru<number>(interceptor);
    }

    {
        let interceptor: Interceptor<number> = (x) => x;
        let result: _.LoDashExplicitWrapper<number>;

        result = _(1).chain().thru<number>(interceptor);
    }

    {
        let interceptor: Interceptor<string> = (x) => x;
        let result: _.LoDashExplicitWrapper<string>;

        result = _('').chain().thru<string>(interceptor);
    }

    {
        let interceptor: Interceptor<boolean> = (x) => x;
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(true).chain().thru<boolean>(interceptor);
    }

    {
        let interceptor: Interceptor<{a: string}> = (x) => x;
        let result: _.LoDashExplicitObjectWrapper<{a: string}>;

        result = _({a: ''}).chain().thru<{a: string}>(interceptor);
    }

    {
        let interceptor: Interceptor<number[]> = (x) => x;
        let result: _.LoDashExplicitArrayWrapper<number>;

        result = _([1, 2, 3]).chain().thru<number>(interceptor);
    }
}

// _.prototype.commit
namespace TestCommit {
    {
        let result: _.LoDashImplicitWrapper<number>;
        result = _(42).commit();
    }

    {
        let result: _.LoDashImplicitArrayWrapper<any>;
        result = _<any>([]).commit();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<any>;
        result = _({}).commit();
    }

    {
        let result: _.LoDashExplicitWrapper<number>;
        result = _(42).chain().commit();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<any>;
        result = _<any>([]).chain().commit();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<any>;
        result = _({}).chain().commit();
    }
}

// _.prototype.plant
namespace TestPlant {
    {
        let result: _.LoDashImplicitWrapper<number>;
        result = _(any).plant(42);
    }

    {
        let result: _.LoDashImplicitWrapper<string>;
        result = _(any).plant('');
    }

    {
        let result: _.LoDashImplicitWrapper<boolean>;
        result = _(any).plant(true);
    }

    {
        let result: _.LoDashImplicitWrapper<number[]>;
        result = _(any).plant([42]);
    }

    {
        let result: _.LoDashImplicitWrapper<any[]>;
        result = _(any).plant([]);
    }

    {
        let result: _.LoDashImplicitWrapper<{}>;
        result = _(any).plant({});
    }

    {
        let result: _.LoDashExplicitWrapper<number>;
        result = _(any).chain().plant(42);
    }

    {
        let result: _.LoDashExplicitWrapper<string>;
        result = _(any).chain().plant('');
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;
        result = _(any).chain().plant(true);
    }

    {
        let result: _.LoDashExplicitWrapper<number[]>;
        result = _(any).chain().plant([42]);
    }

    {
        let result: _.LoDashExplicitWrapper<any[]>;
        result = _(any).chain().plant([]);
    }

    {
        let result: _.LoDashExplicitWrapper<{}>;
        result = _(any).chain().plant({});
    }
}

// _.prototype.reverse
namespace TestReverse {
    {
        let result: _.LoDashImplicitArrayWrapper<number>;
        result = _([42]).reverse();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<number>;
        result = _([42]).chain().reverse();
    }
}

// _.prototype.toJSON
namespace TestToJSON {
    {
        let result: string;

        result = _('').toJSON();
        result = _('').chain().toJSON();
    }

    {
        let result: number;

        result = _(42).toJSON();
        result = _(42).chain().toJSON();
    }

    {
        let result: boolean;

        result = _(true).toJSON();
        result = _(true).chain().toJSON();
    }

    {
        let result: string[];

        result = _<string>([]).toJSON();
        result = _<string>([]).chain().toJSON();
    }

    {
        let result: {a: string};

        result = _({a: ''}).toJSON();
        result = _({a: ''}).chain().toJSON();
    }
}

// _.prototype.toString
namespace TestToString {
    let result: string;

    result = _('').toString();
    result = _(42).toString();
    result = _(true).toString();
    result = _<string>(['']).toString();
    result = _({}).toString();

    result = _('').chain().toString();
    result = _(42).chain().toString();
    result = _(true).chain().toString();
    result = _<string>(['']).chain().toString();
    result = _({}).chain().toString();
}

// _.prototype.value
namespace TestValue {
    {
        let result: string;

        result = _('').value();
        result = _('').chain().value();
    }

    {
        let result: number;

        result = _(42).value();
        result = _(42).chain().value();
    }

    {
        let result: boolean;

        result = _(true).value();
        result = _(true).chain().value();
    }

    {
        let result: string[];

        result = _<string>([]).value();
        result = _<string>([]).chain().value();
    }

    {
        let result: {a: string};

        result = _({a: ''}).value();
        result = _({a: ''}).chain().value();
    }
}

// _.prototype.valueOf
namespace TestValueOf {
    {
        let result: string;

        result = _('').valueOf();
        result = _('').chain().valueOf();
    }

    {
        let result: number;

        result = _(42).valueOf();
        result = _(42).chain().valueOf();
    }

    {
        let result: boolean;

        result = _(true).valueOf();
        result = _(true).chain().valueOf();
    }

    {
        let result: string[];

        result = _<string>([]).valueOf();
        result = _<string>([]).chain().valueOf();
    }

    {
        let result: {a: string};

        result = _({a: ''}).valueOf();
        result = _({a: ''}).chain().valueOf();
    }
}

/**************
 * Collection *
 **************/

// _.at
namespace TestAt {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let dictionary: _.Dictionary<TResult> | null | undefined = any;

    {
        let result: TResult[];

        result = _.at<TResult>(array, 0, '1', [2], ['3'], [4, '5']);
        result = _.at<TResult>(list, 0, '1', [2], ['3'], [4, '5']);
        result = _.at<TResult>(dictionary, 0, '1', [2], ['3'], [4, '5']);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).at(0, '1', [2], ['3'], [4, '5']);
        result = _(list).at<TResult>(0, '1', [2], ['3'], [4, '5']);
        result = _(dictionary).at<TResult>(0, '1', [2], ['3'], [4, '5']);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().at(0, '1', [2], ['3'], [4, '5']);
        result = _(list).chain().at<TResult>(0, '1', [2], ['3'], [4, '5']);
        result = _(dictionary).chain().at<TResult>(0, '1', [2], ['3'], [4, '5']);
    }
}

// _.countBy
namespace TestCountBy {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<TResult> | null | undefined = obj;
    let numericDictionary: _.NumericDictionary<TResult> | null | undefined = obj;

    let stringIterator: (value: string, index: number, collection: string) => any = (value: string, index: number, collection: string) => 1;
    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => any = (value: TResult, index: number, collection: _.List<TResult>) => 1;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => any = (value: TResult, key: string, collection: _.Dictionary<TResult>) => 1;
    let numericDictionaryIterator: (value: TResult, key: number, collection: _.NumericDictionary<TResult>) => any = (value: TResult, key: number, collection: _.NumericDictionary<TResult>) => 1;

    {
        let result: _.Dictionary<number>;

        result = _.countBy('');
        result = _.countBy('', stringIterator);
        result = _('').countBy().value();
        result = _('').countBy(stringIterator).value();
        result = _.chain('').countBy().value();
        result = _.chain('').countBy(stringIterator).value();

        result = _.countBy(array);
        result = _.countBy(array, listIterator);
        result = _.countBy(array, '');
        result = _.countBy(array, {a: 42});
        result = _.countBy(array, ['a', 42]);
        result = _(array).countBy().value();
        result = _(array).countBy(listIterator).value();
        result = _(array).countBy('').value();
        result = _(array).countBy({a: 42}).value();
        result = _(array).countBy(['a', 42]).value();
        result = _.chain(array).countBy().value();
        result = _.chain(array).countBy(listIterator).value();
        result = _.chain(array).countBy('').value();
        result = _.chain(array).countBy({a: 42}).value();
        result = _.chain(array).countBy(['a', 42]).value();

        result = _.countBy(list);
        result = _.countBy(list, listIterator);
        result = _.countBy(list, '');
        result = _.countBy(list, {a: 42});
        result = _.countBy(list, ['a', 42]);
        result = _(list).countBy().value();
        result = _(list).countBy(listIterator).value();
        result = _(list).countBy('').value();
        result = _(list).countBy({a: 42}).value();
        result = _(list).countBy(['a', 42]).value();
        result = _.chain(list).countBy().value();
        result = _.chain(list).countBy(listIterator).value();
        result = _.chain(list).countBy('').value();
        result = _.chain(list).countBy({a: 42}).value();
        result = _.chain(list).countBy(['a', 42]).value();

        result = _.countBy(dictionary);
        result = _.countBy(dictionary, dictionaryIterator);
        result = _.countBy(dictionary, '');
        result = _.countBy(dictionary, {a: 42});
        result = _.countBy(dictionary, ['a', 42]);
        result = _(dictionary).countBy().value();
        result = _(dictionary).countBy(listIterator).value();
        result = _(dictionary).countBy('').value();
        result = _(dictionary).countBy({a: 42}).value();
        result = _(dictionary).countBy(['a', 42]).value();
        result = _.chain(dictionary).countBy().value();
        result = _.chain(dictionary).countBy(listIterator).value();
        result = _.chain(dictionary).countBy('').value();
        result = _.chain(dictionary).countBy({a: 42}).value();
        result = _.chain(dictionary).countBy(['a', 42]).value();

        result = _.countBy(numericDictionary);
        result = _.countBy(numericDictionary, numericDictionaryIterator);
        result = _.countBy(numericDictionary, '');
        result = _.countBy(numericDictionary, {a: 42});
        result = _.countBy(numericDictionary, ['a', 42]);
        result = _(numericDictionary).countBy().value();
        result = _(numericDictionary).countBy(listIterator).value();
        result = _(numericDictionary).countBy('').value();
        result = _(numericDictionary).countBy({a: 42}).value();
        result = _(numericDictionary).countBy(['a', 42]).value();
        result = _.chain(numericDictionary).countBy().value();
        result = _.chain(numericDictionary).countBy(listIterator).value();
        result = _.chain(numericDictionary).countBy('').value();
        result = _.chain(numericDictionary).countBy({a: 42}).value();
        result = _.chain(numericDictionary).countBy(['a', 42]).value();
    }

    {
        let resutl: _.LoDashImplicitObjectWrapper<_.Dictionary<number>>;



        result = _(list).countBy();
        result = _(list).countBy(listIterator);
        result = _(list).countBy('');
        result = _(list).countBy<{a: number}>({a: 42});
        result = _(list).countBy({a: 42});

        result = _(dictionary).countBy();
        result = _(dictionary).countBy(dictionaryIterator);
        result = _(dictionary).countBy('');
        result = _(dictionary).countBy<{a: number}>({a: 42});
        result = _(dictionary).countBy({a: 42});

        result = _(numericDictionary).countBy();
        result = _(numericDictionary).countBy(numericDictionaryIterator);
        result = _(numericDictionary).countBy('');
        result = _(numericDictionary).countBy<{a: number}>({a: 42});
        result = _(numericDictionary).countBy({a: 42});
    }

    {
        let resutl: _.LoDashExplicitObjectWrapper<_.Dictionary<number>>;

        result = _('').chain().countBy();
        result = _('').chain().countBy(stringIterator);

        result = _(array).chain().countBy();
        result = _(array).chain().countBy(listIterator);
        result = _(array).chain().countBy('');
        result = _(array).chain().countBy<{a: number}>({a: 42});
        result = _(array).chain().countBy({a: 42});

        result = _(list).chain().countBy();
        result = _(list).chain().countBy(listIterator);
        result = _(list).chain().countBy('');
        result = _(list).chain().countBy<{a: number}>({a: 42});
        result = _(list).chain().countBy({a: 42});

        result = _(dictionary).chain().countBy();
        result = _(dictionary).chain().countBy(dictionaryIterator);
        result = _(dictionary).chain().countBy('');
        result = _(dictionary).chain().countBy<{a: number}>({a: 42});
        result = _(dictionary).chain().countBy({a: 42});

        result = _(numericDictionary).chain().countBy();
        result = _(numericDictionary).chain().countBy(numericDictionaryIterator);
        result = _(numericDictionary).chain().countBy('');
        result = _(numericDictionary).chain().countBy<{a: number}>({a: 42});
        result = _(numericDictionary).chain().countBy({a: 42});
    }
}

// _.each
namespace TestEach {
    let array: TResult[] = [];
    let list: _.List<TResult> = [];
    let dictionary: _.Dictionary<TResult> = {};
    let nilArray: TResult[] | null | undefined = [] as any;
    let nilList: _.List<TResult> | null | undefined = [] as any;
    let nilDictionary: _.Dictionary<TResult> | null | undefined = any;

    let stringIterator: (char: string, index: number, string: string) => any = (char: string, index: number, string: string) => 1;
    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => any = (value: TResult, index: number, collection: _.List<TResult>) => 1;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => any = (value: TResult, key: string, collection: _.Dictionary<TResult>) => 1;

    {
        let result: string;

        result = _.each('', stringIterator);
    }

    {
        let result: string | null | undefined;

        result = _.each('' as (string | null | undefined), stringIterator);
    }

    {
        let result: TResult[];

        result = _.each(array, listIterator);
    }

    {
        let result: TResult[] | null | undefined;

        result = _.each(nilArray, listIterator);
    }

    {
        let result: _.List<TResult>;

        result = _.each(list, listIterator);
    }

    {
        let result: _.List<TResult> | null | undefined;

        result = _.each(nilList, listIterator);
    }

    {
        let result: _.Dictionary<TResult | null | undefined>;

        result = _.each(dictionary, dictionaryIterator);
    }

    {
        let result: _.Dictionary<TResult> | null | undefined;

        result = _.each(nilDictionary, dictionaryIterator);
    }

    {
        let result: _.LoDashImplicitWrapper<string>;

        result = _('').each(stringIterator);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).each(listIterator);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.List<TResult>>;

        result = _(list).each<TResult>(listIterator);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<TResult>>;

        result = _(dictionary).each<TResult>(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('').chain().each(stringIterator);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().each(listIterator);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.List<TResult>>;

        result = _(list).chain().each<TResult>(listIterator);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<TResult>>;

        result = _(dictionary).chain().each<TResult>(dictionaryIterator);
    }
}

// _.eachRight
namespace TestEachRight {
    let array: TResult[] = [];
    let list: _.List<TResult> = [];
    let dictionary: _.Dictionary<TResult> = {};
    let nilArray: TResult[] | null | undefined = [] as any;
    let nilList: _.List<TResult> | null | undefined = [] as any;
    let nilDictionary: _.Dictionary<TResult> | null | undefined = any;

    let stringIterator: (char: string, index: number, string: string) => any = (char: string, index: number, string: string) => 1;
    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => any = (value: TResult, index: number, collection: _.List<TResult>) => 1;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => any = (value: TResult, key: string, collection: _.Dictionary<TResult>) => 1;

    {
        let result: string;

        result = _.eachRight('', stringIterator);
    }

    {
        let result: string | null | undefined;

        result = _.eachRight('' as (string | null | undefined), stringIterator);
    }

    {
        let result: TResult[];

        result = _.eachRight(array, listIterator);
    }

    {
        let result: TResult[] | null | undefined;

        result = _.eachRight(nilArray, listIterator);
    }

    {
        let result: _.List<TResult>;

        result = _.eachRight(list, listIterator);
    }

    {
        let result: _.List<TResult> | null | undefined;

        result = _.eachRight(nilList, listIterator);
    }

    {
        let result: _.Dictionary<TResult | null | undefined>;

        result = _.eachRight(dictionary, dictionaryIterator);
    }

    {
        let result: _.Dictionary<TResult> | null | undefined;

        result = _.eachRight(nilDictionary, dictionaryIterator);
    }

    {
        let result: _.LoDashImplicitWrapper<string>;

        result = _('').eachRight(stringIterator);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).eachRight(listIterator);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.List<TResult>>;

        result = _(list).eachRight<TResult>(listIterator);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<TResult>>;

        result = _(dictionary).eachRight<TResult>(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('').chain().eachRight(stringIterator);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().eachRight(listIterator);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.List<TResult>>;

        result = _(list).chain().eachRight<TResult>(listIterator);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<TResult>>;

        result = _(dictionary).chain().eachRight<TResult>(dictionaryIterator);
    }
}

// _.every
namespace TestEvery {
    type SampleObject = {a: number; b: string; c: boolean;};

    let array: SampleObject[] | null | undefined = [] as any;
    let list: _.List<SampleObject> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<SampleObject> | null | undefined = obj;
    let numericDictionary: _.NumericDictionary<SampleObject> | null | undefined = obj;

    let listIterator = (value: SampleObject, index: number, collection: _.List<SampleObject>) => true;
    let dictionaryIterator = (value: SampleObject, key: string, collection: _.Dictionary<SampleObject>) => true;
    let numericDictionaryIterator = (value: SampleObject, key: number, collection: _.NumericDictionary<SampleObject>) => true;

    {
        let result: boolean;

        result = _.every<SampleObject>(array);
        result = _.every<SampleObject>(array, listIterator);
        result = _.every<SampleObject>(array, 'a');
        result = _.every<SampleObject>(array, ['a', 42]);
        result = _.every<SampleObject>(array, {a: 42});

        result = _.every<SampleObject>(list);
        result = _.every<SampleObject>(list, listIterator);
        result = _.every<SampleObject>(list, 'a');
        result = _.every<SampleObject>(list, ['a', 42]);
        result = _.every<SampleObject>(list, {a: 42});

        result = _.every<SampleObject>(dictionary);
        result = _.every<SampleObject>(dictionary, dictionaryIterator);
        result = _.every<SampleObject>(dictionary, 'a');
        result = _.every<SampleObject>(dictionary, ['a', 42]);
        result = _.every<SampleObject>(dictionary, {a: 42});

        result = _.every<SampleObject>(numericDictionary);
        result = _.every<SampleObject>(numericDictionary, numericDictionaryIterator);
        result = _.every<SampleObject>(numericDictionary, 'a');
        result = _.every<SampleObject>(numericDictionary, ['a', 42]);
        result = _.every<SampleObject>(numericDictionary, {a: 42});

        result = _(array).every();
        result = _(array).every(listIterator);
        result = _(array).every('a');
        result = _(array).every(['a', 42]);
        result = _(array).every({a: 42});

        result = _(list).every<SampleObject>();
        result = _(list).every<SampleObject>(listIterator);
        result = _(list).every('a');
        result = _(list).every(['a', 42]);
        result = _(list).every({a: 42});

        result = _(dictionary).every<SampleObject>();
        result = _(dictionary).every<SampleObject>(dictionaryIterator);
        result = _(dictionary).every('a');
        result = _(dictionary).every(['a', 42]);
        result = _(dictionary).every({a: 42});

        result = _(numericDictionary).every<SampleObject>();
        result = _(numericDictionary).every<SampleObject>(numericDictionaryIterator);
        result = _(numericDictionary).every('a');
        result = _(numericDictionary).every(['a', 42]);
        result = _(numericDictionary).every({a: 42});
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(array).chain().every();
        result = _(array).chain().every(listIterator);
        result = _(array).chain().every('a');
        result = _(array).chain().every(['a', 42]);
        result = _(array).chain().every({a: 42});

        result = _(list).chain().every<SampleObject>();
        result = _(list).chain().every<SampleObject>(listIterator);
        result = _(list).chain().every('a');
        result = _(list).chain().every(['a', 42]);
        result = _(list).chain().every<SampleObject>({a: 42});

        result = _(dictionary).chain().every<SampleObject>();
        result = _(dictionary).chain().every<SampleObject>(dictionaryIterator);
        result = _(dictionary).chain().every('a');
        result = _(dictionary).chain().every(['a', 42]);
        result = _(dictionary).chain().every<SampleObject>({a: 42});

        result = _(numericDictionary).chain().every<SampleObject>();
        result = _(numericDictionary).chain().every<SampleObject>(numericDictionaryIterator);
        result = _(numericDictionary).chain().every('a');
        result = _(numericDictionary).chain().every(['a', 42]);
        result = _(numericDictionary).chain().every<{a: number}>({a: 42});
    }
}

// _.filter
namespace TestFilter {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<TResult> | null | undefined = obj;

    let stringIterator: (char: string, index: number, string: string) => any = (char: string, index: number, string: string) => 1;
    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => any = (value: TResult, index: number, collection: _.List<TResult>) => 1;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => any = (value: TResult, key: string, collection: _.Dictionary<TResult>) => 1;

    {
        let result: string[];

        result = _.filter('', stringIterator);
    }

    {
        let result: TResult[];

        result = _.filter<TResult>(array, listIterator);
        result = _.filter<TResult>(array, '');
        result = _.filter<TResult>(array, /./);
        result = _.filter<TResult>(array, {a: 42});
        result = _.filter<TResult>(array, ['a', 42]);

        result = _.filter<TResult>(list, listIterator);
        result = _.filter<TResult>(list, '');
        result = _.filter<TResult>(list, /./);
        result = _.filter<TResult>(list, {a: 42});
        result = _.filter<TResult>(list, ['a', 42]);

        result = _.filter<TResult>(dictionary, dictionaryIterator);
        result = _.filter<TResult>(dictionary, '');
        result = _.filter<TResult>(dictionary, /./);
        result = _.filter<TResult>(dictionary, {a: 42});
        result = _.filter<TResult>(dictionary, ['a', 42]);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _('').filter(stringIterator);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).filter(listIterator);
        result = _(array).filter('');
        result = _(array).filter(/./);
        result = _(array).filter({a: 42});
        result = _(array).filter(['a', 42]);

        result = _(list).filter<TResult>(listIterator);
        result = _(list).filter<TResult>('');
        result = _(list).filter<TResult>(/./);
        result = _(list).filter<TResult>({a: 42});
        result = _(list).filter<TResult>(['a', 42]);

        result = _(dictionary).filter<TResult>(dictionaryIterator);
        result = _(dictionary).filter<TResult>('');
        result = _(dictionary).filter<TResult>(/./);
        result = _(dictionary).filter<TResult>({a: 42});
        result = _(dictionary).filter<TResult>(['a', 42]);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _('').chain().filter(stringIterator);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().filter(listIterator);
        result = _(array).chain().filter('');
        result = _(array).chain().filter(/./);
        result = _(array).chain().filter({a: 42});
        result = _(array).chain().filter(['a', 42]);

        result = _(list).chain().filter<TResult>(listIterator);
        result = _(list).chain().filter<TResult>('');
        result = _(list).chain().filter<TResult>(/./);
        result = _(list).chain().filter<TResult>({a: 42});
        result = _(list).chain().filter<TResult>(['a', 42]);

        result = _(dictionary).chain().filter<TResult>(dictionaryIterator);
        result = _(dictionary).chain().filter<TResult>('');
        result = _(dictionary).chain().filter<TResult>(/./);
        result = _(dictionary).chain().filter<TResult>({a: 42});
        result = _(dictionary).chain().filter<TResult>(['a', 42]);
    }

    {
        // Test filtering with type guard
        let a2: Array<string | number> | null | undefined = any;
        let d2: _.Dictionary<string | number> | null | undefined = any;

        _.filter(a2, (item: string | number): item is number => typeof item === "number"); // $ExpectType number[]
        _.filter(d2, (item: string | number): item is number => typeof item === "number"); // $ExpectType number[]
        _(a2).filter((item: string | number): item is number => typeof item === "number"); // $ExpectType LoDashImplicitArrayWrapper<number>
        _(d2).filter((item: string | number): item is number => typeof item === "number"); // $ExpectType LoDashImplicitArrayWrapper<number>
        _(a2).chain().filter((item: string | number): item is number => typeof item === "number"); // $ExpectType LoDashExplicitArrayWrapper<number>
        _(d2).chain().filter((item: string | number): item is number => typeof item === "number"); // $ExpectType LoDashExplicitArrayWrapper<number>
    }
}

// _.find
namespace TestFind {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<TResult> | null | undefined = obj;

    let listIterator = (value: TResult, index: number, collection: _.List<TResult>) => true;
    let dictionaryIterator = (value: TResult, key: string, collection: _.Dictionary<TResult>) => true;

    let result: TResult | undefined;

    result = _.find(array);
    result = _.find<TResult>(array);
    result = _.find<TResult>(array, listIterator);
    result = _.find<TResult>(array, listIterator, 1);
    result = _.find<TResult>(array, '');
    result = _.find<TResult>(array, '', 1);
    result = _.find<TResult>(array, {a: 42});
    result = _.find<TResult>(array, {a: 42}, 1);
    result = _.find(array, ['a', 5]);
    result = _.find(array, ['a', 5], 1);

    result = _.find(list);
    result = _.find<TResult>(list);
    result = _.find<TResult>(list, listIterator);
    result = _.find<TResult>(list, listIterator, 1);
    result = _.find<TResult>(list, '');
    result = _.find<TResult>(list, '', 1);
    result = _.find<TResult>(list, {a: 42});
    result = _.find<TResult>(list, {a: 42}, 1);
    result = _.find(list, ['a', 5]);
    result = _.find(list, ['a', 5], 1);

    result = _.find(dictionary);
    result = _.find<TResult>(dictionary);
    result = _.find<TResult>(dictionary, dictionaryIterator);
    result = _.find<TResult>(dictionary, dictionaryIterator, 1);
    result = _.find<TResult>(dictionary, '');
    result = _.find<TResult>(dictionary, '', 1);
    result = _.find<TResult>(dictionary, {a: 42});
    result = _.find<TResult>(dictionary, {a: 42}, 1);
    result = _.find(dictionary, ['a', 5]);
    result = _.find(dictionary, ['a', 5], 1);

    result = _(array).find();
    result = _(array).find(listIterator);
    result = _(array).find(listIterator, 1);
    result = _(array).find('');
    result = _(array).find('', 1);
    result = _(array).find({a: 42});
    result = _(array).find({a: 42}, 1);
    result = _(array).find(['a', 5]);
    result = _(array).find(['a', 5], 1);

    result = _(list).find<TResult>();
    result = _(list).find<TResult>(listIterator);
    result = _(list).find<TResult>(listIterator, 1);
    result = _(list).find<TResult>('');
    result = _(list).find<TResult>('', 1);
    result = _(list).find<TResult>({a: 42});
    result = _(list).find<TResult>({a: 42}, 1);
    result = _(list).find<TResult>(['a', 5]);
    result = _(list).find<TResult>(['a', 5], 1);

    result = _(dictionary).find<TResult>();
    result = _(dictionary).find<TResult>(dictionaryIterator);
    result = _(dictionary).find<TResult>(dictionaryIterator, 1);
    result = _(dictionary).find<TResult>('');
    result = _(dictionary).find<TResult>('', 1);
    result = _(dictionary).find<TResult>({a: 42});
    result = _(dictionary).find<TResult>({a: 42}, 1);
    result = _(dictionary).find<TResult>(['a', 5]);
    result = _(dictionary).find<TResult>(['a', 5], 1);

    result = _.find([any as TResult, null, undefined], (value: TResult | null | undefined): value is TResult | undefined => value !== null);
    result = _([any as TResult, null, undefined]).find((value: TResult | null | undefined): value is TResult | undefined => value !== null);
}

// _.findLast
namespace TestFindLast {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<TResult> | null | undefined = obj;

    let listIterator = (value: TResult, index: number, collection: _.List<TResult>) => true;
    let dictionaryIterator = (value: TResult, key: string, collection: _.Dictionary<TResult>) => true;

    let result: TResult | undefined;

    result = _.findLast(array);
    result = _.findLast(array, listIterator);
    result = _.findLast(array, listIterator, 1);
    result = _.findLast(array, '');
    result = _.findLast(array, '', 1);
    result = _.findLast(array, {a: 42});
    result = _.findLast(array, {a: 42}, 1);
    result = _.findLast(array, ['a', 5]);
    result = _.findLast(array, ['a', 5], 1);
    result = _(array).findLast();
    result = _(array).findLast(listIterator);
    result = _(array).findLast(listIterator, 1);
    result = _(array).findLast('');
    result = _(array).findLast('', 1);
    result = _(array).findLast({a: 42});
    result = _(array).findLast({a: 42}, 1);
    result = _(array).findLast(['a', 5]);
    result = _(array).findLast(['a', 5], 1);
    result = _.chain(array).findLast().value();
    result = _.chain(array).findLast(listIterator).value();
    result = _.chain(array).findLast(listIterator, 1).value();
    result = _.chain(array).findLast('').value();
    result = _.chain(array).findLast('', 1).value();
    result = _.chain(array).findLast({a: 42}).value();
    result = _.chain(array).findLast({a: 42}, 1).value();
    result = _.chain(array).findLast(['a', 5]).value();
    result = _.chain(array).findLast(['a', 5], 1).value();

    result = _.findLast(list);
    result = _.findLast(list);
    result = _.findLast(list, listIterator);
    result = _.findLast(list, listIterator, 1);
    result = _.findLast(list, '');
    result = _.findLast(list, '', 1);
    result = _.findLast(list, {a: 42});
    result = _.findLast(list, {a: 42}, 1);
    result = _.findLast(list, ['a', 5]);
    result = _.findLast(list, ['a', 5], 1);
    result = _(list).findLast();
    result = _(list).findLast(listIterator);
    result = _(list).findLast(listIterator, 1);
    result = _(list).findLast('');
    result = _(list).findLast('', 1);
    result = _(list).findLast({a: 42});
    result = _(list).findLast({a: 42}, 1);
    result = _(list).findLast(['a', 5]);
    result = _(list).findLast(['a', 5], 1);
    result = _.chain(list).findLast().value();
    result = _.chain(list).findLast(listIterator).value();
    result = _.chain(list).findLast(listIterator, 1).value();
    result = _.chain(list).findLast('').value();
    result = _.chain(list).findLast('', 1).value();
    result = _.chain(list).findLast({a: 42}).value();
    result = _.chain(list).findLast({a: 42}, 1).value();
    result = _.chain(list).findLast(['a', 5]).value();
    result = _.chain(list).findLast(['a', 5], 1).value();

    result = _.findLast(dictionary);
    result = _.findLast(dictionary);
    result = _.findLast(dictionary, dictionaryIterator);
    result = _.findLast(dictionary, dictionaryIterator, 1);
    result = _.findLast(dictionary, '');
    result = _.findLast(dictionary, '', 1);
    result = _.findLast(dictionary, {a: 42});
    result = _.findLast(dictionary, {a: 42}, 1);
    result = _.findLast(dictionary, ['a', 5]);
    result = _.findLast(dictionary, ['a', 5], 1);
    result = _(dictionary).findLast();
    result = _(dictionary).findLast(dictionaryIterator);
    result = _(dictionary).findLast(dictionaryIterator, 1);
    result = _(dictionary).findLast('');
    result = _(dictionary).findLast('', 1);
    result = _(dictionary).findLast({a: 42});
    result = _(dictionary).findLast({a: 42}, 1);
    result = _(dictionary).findLast(['a', 5]);
    result = _(dictionary).findLast(['a', 5], 1);
    result = _.chain(dictionary).findLast().value();
    result = _.chain(dictionary).findLast(dictionaryIterator).value();
    result = _.chain(dictionary).findLast(dictionaryIterator, 1).value();
    result = _.chain(dictionary).findLast('').value();
    result = _.chain(dictionary).findLast('', 1).value();
    result = _.chain(dictionary).findLast({a: 42}).value();
    result = _.chain(dictionary).findLast({a: 42}, 1).value();
    result = _.chain(dictionary).findLast(['a', 5]).value();
    result = _.chain(dictionary).findLast(['a', 5], 1).value();

    result = _.findLast([any as TResult, null, undefined], (value: TResult | null | undefined): value is TResult | undefined => value !== null);
    result = _([any as TResult, null, undefined]).findLast((value: TResult | null | undefined): value is TResult | undefined => value !== null);
}

// _.flatMap
namespace TestFlatMap {
    let numArray: (number|number[])[] | null | undefined = [1, [2, 3]] as any;
    let objArray: ({a: number}|{a: number}[])[] | null | undefined = [{a: 1}, [{a: 2}, {a: 3}]] as any;

    let obj: any = {};
    let numList: _.List<number|number[]> | null | undefined = obj;
    let objList: _.List<{a: number}|{a: number}[]> | null | undefined = obj;

    let numDictionary: _.Dictionary<number|number[]> | null | undefined = obj;
    let objDictionary: _.Dictionary<{a: number}|{a: number}[]> | null | undefined = obj;

    let numNumericDictionary: _.NumericDictionary<number|number[]> | null | undefined = obj;
    let objNumericDictionary: _.NumericDictionary<{a: number}|{a: number}[]> | null | undefined = obj;

    let stringIterator: (value: string, index: number, collection: _.List<string>) => string|string[] = (a, b, c) => "";

    let listIterator: (value: number|number[], index: number, collection: _.List<number|number[]>) => number|number[] = (a, b, c) => 1;

    let dictionaryIterator: (value: number|number[], key: string, collection: _.Dictionary<number|number[]>) => number|number[] = (a, b, c) => 1;

    let numericDictionaryIterator: (value: number|number[], key: number, collection: _.NumericDictionary<number|number[]>) => number|number[] = (a, b, c) => 1;

    {
        let result: string[];

        result = _.flatMap<string>('abc');
        result = _.flatMap('abc');

        result = _.flatMap<string, string>('abc', stringIterator);
        result = _.flatMap('abc', stringIterator);
    }

    {
        let result: number[];

        result = _.flatMap(numArray);
        result = _.flatMap<number>(numArray);

        result = _.flatMap(numArray, listIterator);
        result = _.flatMap<number|number[], number>(numArray, listIterator);

        result = _.flatMap<number>(objArray, 'a');

        result = _.flatMap(numList);
        result = _.flatMap<number>(numList);

        result = _.flatMap(numList, listIterator);
        result = _.flatMap<number|number[], number>(numList, listIterator);

        result = _.flatMap<number>(objList, 'a');

        result = _.flatMap(numDictionary);
        result = _.flatMap<number>(numDictionary);

        result = _.flatMap(numDictionary, dictionaryIterator);
        result = _.flatMap<number|number[], number>(numDictionary, dictionaryIterator);

        result = _.flatMap<number>(objDictionary, 'a');

        result = _.flatMap(numNumericDictionary);
        result = _.flatMap<number>(numNumericDictionary);

        result = _.flatMap(numNumericDictionary, numericDictionaryIterator);
        result = _.flatMap<number|number[], number>(numNumericDictionary, numericDictionaryIterator);

        result = _.flatMap<_.NumericDictionary<{a: number}|{a: number}[]>, number>(objNumericDictionary, 'a');
    }

    {
        let result: boolean[];

        result = _.flatMap(objArray, ['a', 42]);
        result = _.flatMap(objArray, {'a': 42});

        result = _.flatMap(objList, ['a', 42]);
        result = _.flatMap(objList, {'a': 42});

        result = _.flatMap(objDictionary, ['a', 42]);
        result = _.flatMap(objDictionary, {'a': 42});

        result = _.flatMap(objNumericDictionary, ['a', 42]);
        result = _.flatMap(objNumericDictionary, {'a': 42});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _('abc').flatMap();
        result = _('abc').flatMap<string>(stringIterator);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<number>;

        result = _(numArray).flatMap<number>();
        result = _(numArray).flatMap<number>(listIterator);
        result = _(objArray).flatMap<number>('a');

        result = _(numList).flatMap<number>();
        result = _(numList).flatMap<number|number[], number>(listIterator);
        result = _(objList).flatMap<number>('a');

        result = _(numDictionary).flatMap<number>();
        result = _(numDictionary).flatMap<number|number[], number>(dictionaryIterator);
        result = _(objDictionary).flatMap<number>('a');

        result = _(numNumericDictionary).flatMap<number>();
        result = _(numNumericDictionary).flatMap<number|number[], number>(numericDictionaryIterator);
        result = _(objNumericDictionary).flatMap<number>('a');
    }

    {
        let result: _.LoDashImplicitArrayWrapper<boolean>;

        result = _(objArray).flatMap(['a', 42]);
        result = _(objArray).flatMap({a: 42});

        result = _(objList).flatMap(['a', 42]);
        result = _(objList).flatMap({a: 42});

        result = _(objDictionary).flatMap(['a', 42]);
        result = _(objDictionary).flatMap({a: 42});

        result = _(objNumericDictionary).flatMap(['a', 42]);
        result = _(objNumericDictionary).flatMap({a: 42});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _('abc').chain().flatMap();
        result = _('abc').chain().flatMap<string>(stringIterator);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<number>;

        result = _(numArray).chain().flatMap<number>();
        result = _(numArray).chain().flatMap<number>(listIterator);
        result = _(objArray).chain().flatMap<number>('a');

        result = _(numList).chain().flatMap<number>();
        result = _(numList).chain().flatMap<number|number[], number>(listIterator);
        result = _(objList).chain().flatMap<number>('a');

        result = _(numDictionary).chain().flatMap<number>();
        result = _(numDictionary).chain().flatMap<number|number[], number>(dictionaryIterator);
        result = _(objDictionary).chain().flatMap<number>('a');

        result = _(numNumericDictionary).chain().flatMap<number>();
        result = _(numNumericDictionary).chain().flatMap<number|number[], number>(numericDictionaryIterator);
        result = _(objNumericDictionary).chain().flatMap<number>('a');
    }

    {
        let result: _.LoDashExplicitArrayWrapper<boolean>;

        result = _(objArray).chain().flatMap(['a', 42]);
        result = _(objArray).chain().flatMap({a: 42});

        result = _(objList).chain().flatMap(['a', 42]);
        result = _(objList).chain().flatMap({a: 42});

        result = _(objDictionary).chain().flatMap(['a', 42]);
        result = _(objDictionary).chain().flatMap({a: 42});

        result = _(objNumericDictionary).chain().flatMap(['a', 42]);
        result = _(objNumericDictionary).chain().flatMap({a: 42});
    }
}

// _.forEach
namespace TestForEach {
    let array: TResult[] = [];
    let list: _.List<TResult> = [];
    let dictionary: _.Dictionary<TResult> = {};
    let nilArray: TResult[] | null | undefined = [] as any;
    let nilList: _.List<TResult> | null | undefined = [] as any;
    let nilDictionary: _.Dictionary<TResult> | null | undefined = any;

    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => any = (value, index, collection) => 1;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => any = (value, key, collection) => 1;
    let objectIterator: (value: number | string | boolean, key: string, collection: TResult) => any = (value, key, collection) => 1;

    {
        let result: string;

        result = _.forEach('', (value, index, collection) => {
            value; // $ExpectType string
            index; // $ExpectType number
            collection; // $ExpectType string
        });
    }

    {
        let result: string | null | undefined;

        result = _.forEach('' as (string | null | undefined), (value, index, collection) => {
            value; // $ExpectType string
            index; // $ExpectType number
            collection; // $ExpectType string
        });
    }

    {
        let result: TResult[];
        result = _.forEach(array, (value, index, collection: TResult[]) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
        });
        result = _.forEach(array, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            // Note: ideally we'd like collection TResult[], but it seems the best we can get is List<TResult>.
            collection; // $ExpectType ArrayLike<TResult>
        });
    }

    {
        let result: TResult[] | null | undefined;

        result = _.forEach(array, (value, index, collection: TResult[]) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
        });
        result = _.forEach(nilArray, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            // Note: ideally we'd like collection TResult[], but it seems the best we can get is List<TResult>.
            collection; // $ExpectType ArrayLike<TResult>
        });
    }

    {
        let result: _.List<TResult>;

        result = _.forEach(list, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
    }

    {
        let result: _.List<TResult> | null | undefined;

        result = _.forEach(nilList, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
    }

    {
        let result: _.Dictionary<TResult>;

        result = _.forEach(dictionary, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<TResult>
        });
    }

    {
        let result: _.Dictionary<TResult> | null | undefined;

        result = _.forEach(nilDictionary, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<TResult>
        });
    }

    {
        let sample1: TResult = any;
        sample1 = _.forEach(sample1, objectIterator);

        let sample2: TResult | null | undefined = any;
        sample2 = _.forEach(sample2, objectIterator);
    }

    {
        let result: _.LoDashImplicitWrapper<string>;

        result = _('').forEach((value, index, collection) => {
            value; // $ExpectType string
            index; // $ExpectType number
            collection; // $ExpectType string
        });
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).forEach((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
    }

    {
        let result: _.LoDashImplicitNillableArrayWrapper<TResult>;

        result = _(nilArray).forEach((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.List<TResult>>;

        result = _(list).forEach<TResult>(listIterator);
    }

    {
        let result: _.LoDashImplicitNillableObjectWrapper<_.List<TResult>>;

        result = _(nilList).forEach<TResult>(listIterator);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<TResult>>;

        result = _(dictionary).forEach<TResult>(dictionaryIterator);
    }

    {
        let result: _.LoDashImplicitNillableObjectWrapper<_.Dictionary<TResult>>;

        result = _(nilDictionary).forEach<TResult>(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('').chain().forEach((value, index, collection) => {
            value; // $ExpectType string
            index; // $ExpectType number
            collection; // $ExpectType string
        });
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().forEach((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
    }

    {
        let result: _.LoDashExplicitNillableArrayWrapper<TResult>;

        result = _(nilArray).chain().forEach((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.List<TResult>>;

        result = _(list).chain().forEach<TResult>(listIterator);
    }

    {
        let result: _.LoDashExplicitNillableObjectWrapper<_.List<TResult>>;

        result = _(nilList).chain().forEach<TResult>(listIterator);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<TResult>>;

        result = _(dictionary).chain().forEach<TResult>(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitNillableObjectWrapper<_.Dictionary<TResult>>;

        result = _(nilDictionary).chain().forEach<TResult>(dictionaryIterator);
    }
}

// _.forEachRight
namespace TestForEachRight {
    let array: TResult[] = [];
    let list: _.List<TResult> = [];
    let dictionary: _.Dictionary<TResult> = {};
    let nilArray: TResult[] | null | undefined = [] as any;
    let nilList: _.List<TResult> | null | undefined = [] as any;
    let nilDictionary: _.Dictionary<TResult> | null | undefined = any;

    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => any = (value: TResult, index: number, collection: _.List<TResult>) => 1;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => any = (value: TResult, key: string, collection: _.Dictionary<TResult>) => 1;

    {
        let result: string;

        result = _.forEachRight('', (value, index, collection) => {
            value; // $ExpectType string
            index; // $ExpectType number
            collection; // $ExpectType string
        });
    }

    {
        let result: string | null | undefined;

        result = _.forEachRight('' as (string | null | undefined), (value, index, collection) => {
            value; // $ExpectType string
            index; // $ExpectType number
            collection; // $ExpectType string
        });
    }

    {
        let result: TResult[];

        result = _.forEachRight(array, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
    }

    {
        let result: TResult[] | null | undefined;

        result = _.forEachRight(nilArray, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
    }

    {
        let result: _.List<TResult>;

        result = _.forEachRight(list, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
    }

    {
        let result: _.List<TResult> | null | undefined;

        result = _.forEachRight(nilList, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
    }

    {
        let result: _.Dictionary<TResult>;

        result = _.forEachRight(dictionary, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<TResult>
        });
    }

    {
        let result: _.Dictionary<TResult> | null | undefined;

        result = _.forEachRight(nilDictionary, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<TResult>
        });
    }

    {
        let result: _.LoDashImplicitWrapper<string>;

        result = _('').forEachRight((value, index, collection) => {
            value; // $ExpectType string
            index; // $ExpectType number
            collection; // $ExpectType string
        });
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).forEachRight(listIterator);
    }

    {
        let result: _.LoDashImplicitNillableArrayWrapper<TResult>;

        result = _(nilArray).forEachRight(listIterator);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.List<TResult>>;

        result = _(list).forEachRight<TResult>(listIterator);
    }

    {
        let result: _.LoDashImplicitNillableObjectWrapper<_.List<TResult>>;

        result = _(nilList).forEachRight<TResult>(listIterator);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<TResult>>;

        result = _(dictionary).forEachRight<TResult>(dictionaryIterator);
    }

    {
        let result: _.LoDashImplicitNillableObjectWrapper<_.Dictionary<TResult>>;

        result = _(nilDictionary).forEachRight<TResult>(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('').chain().forEachRight((value, index, collection) => {
            value; // $ExpectType string
            index; // $ExpectType number
            collection; // $ExpectType string
        });
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().forEachRight((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
    }

    {
        let result: _.LoDashExplicitNillableArrayWrapper<TResult>;

        result = _(nilArray).chain().forEachRight((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.List<TResult>>;

        result = _(list).chain().forEachRight(listIterator);
    }

    {
        let result: _.LoDashExplicitNillableObjectWrapper<_.List<TResult>>;

        result = _(nilList).chain().forEachRight<TResult>(listIterator);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<TResult>>;

        result = _(dictionary).chain().forEachRight<TResult>(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitNillableObjectWrapper<_.Dictionary<TResult>>;

        result = _(nilDictionary).chain().forEachRight<TResult>(dictionaryIterator);
    }
}

// _.groupBy
namespace TestGroupBy {
    type SampleType = {a: number; b: string; c: boolean;};

    let list: _.List<SampleType> | null | undefined = [] as any;
    let dictionary: _.Dictionary<SampleType> | null | undefined = any;

    let stringIterator = (char: string, index: number, string: string) => 0;
    let listIterator = (value: SampleType, index: number, collection: _.List<SampleType>) => 0;
    let dictionaryIterator = (value: SampleType, key: string, collection: _.Dictionary<SampleType>) => 0;

    {
        let result: _.Dictionary<string[]>;

        result = _.groupBy('');
        result = _.groupBy('', stringIterator);
        result = _('').groupBy();
        result = _('').groupBy(stringIterator);
        result = _.chain('').groupBy();
        result = _.chain('').groupBy(stringIterator);
    }

    {
        let result: _.Dictionary<SampleType[]>;

        result = _.groupBy(list);
        result = _.groupBy(list, listIterator);
        result = _.groupBy(list, '');
        result = _.groupBy(list, {a: 42});
        result = _.groupBy(list, ['a', 42]);
        result = _(list).groupBy().value();
        result = _(list).groupBy(listIterator).value();
        result = _(list).groupBy('').value();
        result = _(list).groupBy({a: 42}).value();
        result = _(list).groupBy(['a', 42]).value();
        result = _.chain(list).groupBy().value();
        result = _.chain(list).groupBy(listIterator).value();
        result = _.chain(list).groupBy('').value();
        result = _.chain(list).groupBy({a: 42}).value();
        result = _.chain(list).groupBy(['a', 42]).value();

        result = _.groupBy(dictionary);
        result = _.groupBy(dictionary, dictionaryIterator);
        result = _.groupBy(dictionary, '');
        result = _.groupBy(dictionary, {a: 42});
        result = _.groupBy(dictionary, ['a', 42]);
        result = _(dictionary).groupBy().value();
        result = _(dictionary).groupBy(dictionaryIterator).value();
        result = _(dictionary).groupBy('').value();
        result = _(dictionary).groupBy({a: 42}).value();
        result = _(dictionary).groupBy(['a', 42]).value();
        result = _.chain(dictionary).groupBy().value();
        result = _.chain(dictionary).groupBy(dictionaryIterator).value();
        result = _.chain(dictionary).groupBy('').value();
        result = _.chain(dictionary).groupBy({a: 42}).value();
        result = _.chain(dictionary).groupBy(['a', 42]).value();
    }
}

// _.includes
namespace TestIncludes {
    type SampleType = {a: string; b: number; c: boolean;};

    let array: SampleType[] | null | undefined = [] as any;
    let list: _.List<SampleType> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<SampleType> | null | undefined = obj;

    let target: SampleType = { a: "", b: 1, c: true };

    {
        let result: boolean;

        result = _.includes<SampleType>(array, target);
        result = _.includes<SampleType>(array, target, 42);

        result = _.includes<SampleType>(list, target);
        result = _.includes<SampleType>(list, target, 42);

        result = _.includes<SampleType>(dictionary, target);
        result = _.includes<SampleType>(dictionary, target, 42);

        result = _(array).includes(target);
        result = _(array).includes(target, 42);

        result = _(list).includes<SampleType>(target);
        result = _(list).includes<SampleType>(target, 42);

        result = _(dictionary).includes<SampleType>(target);
        result = _(dictionary).includes<SampleType>(target, 42);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(array).chain().includes(target);
        result = _(array).chain().includes(target, 42);

        result = _(list).chain().includes<SampleType>(target);
        result = _(list).chain().includes<SampleType>(target, 42);

        result = _(dictionary).chain().includes<SampleType>(target);
        result = _(dictionary).chain().includes<SampleType>(target, 42);
    }
}

// _.keyBy
namespace TestKeyBy {
    type SampleObject = {a: number; b: string; c: boolean;};

    let array: SampleObject[] | null | undefined = [] as any;
    let list: _.List<SampleObject> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<SampleObject> | null | undefined = obj;
    let numericDictionary: _.NumericDictionary<SampleObject> | null | undefined = obj;

    let stringIterator: (value: string, index: number, collection: string) => any = (value: string, index: number, collection: string) => 1;
    let listIterator: (value: SampleObject, index: number, collection: _.List<SampleObject>) => any = (value: SampleObject, index: number, collection: _.List<SampleObject>) => 1;
    let dictionaryIterator: (value: SampleObject, key: string, collection: _.Dictionary<SampleObject>) => any = (value: SampleObject, key: string, collection: _.Dictionary<SampleObject>) => 1;
    let numericDictionaryIterator: (value: SampleObject, key: number, collection: _.NumericDictionary<SampleObject>) => any = (value: SampleObject, key: number, collection: _.NumericDictionary<SampleObject>) => 1;

    {
        let result: _.Dictionary<string>;

        result = _.keyBy('abcd');
        result = _.keyBy('abcd', stringIterator);
        result = _('abcd').keyBy().value();
        result = _('abcd').keyBy(stringIterator).value();
        result = _.chain('abcd').keyBy().value();
        result = _.chain('abcd').keyBy(stringIterator).value();
    }

    {
        let result: _.Dictionary<SampleObject>;

        result = _.keyBy(array);
        result = _.keyBy(array, listIterator);
        result = _.keyBy(array, 'a');
        result = _.keyBy(array, {a: 42});
        result = _.keyBy(array, listIterator);
        result = _(array).keyBy().value();
        result = _(array).keyBy(listIterator).value();
        result = _(array).keyBy('a').value();
        result = _(array).keyBy({a: 42}).value();
        result = _.chain(array).keyBy().value();
        result = _.chain(array).keyBy(listIterator).value();
        result = _.chain(array).keyBy('a').value();
        result = _.chain(array).keyBy({a: 42}).value();

        result = _.keyBy(list);
        result = _.keyBy(list, listIterator);
        result = _.keyBy(list, 'a');
        result = _.keyBy(list, {a: 42});
        result = _(list).keyBy().value();
        result = _(list).keyBy(listIterator).value();
        result = _(list).keyBy('a').value();
        result = _(list).keyBy({a: 42}).value();
        result = _.chain(list).keyBy().value();
        result = _.chain(list).keyBy(listIterator).value();
        result = _.chain(list).keyBy('a').value();
        result = _.chain(list).keyBy({a: 42}).value();

        result = _.keyBy(numericDictionary);
        result = _.keyBy(numericDictionary, numericDictionaryIterator);
        result = _.keyBy(numericDictionary, 'a');
        result = _.keyBy(numericDictionary, {a: 42});
        result = _(numericDictionary).keyBy().value();
        result = _(numericDictionary).keyBy(listIterator).value();
        result = _(numericDictionary).keyBy('a').value();
        result = _(numericDictionary).keyBy({a: 42}).value();
        result = _.chain(numericDictionary).keyBy().value();
        result = _.chain(numericDictionary).keyBy(listIterator).value();
        result = _.chain(numericDictionary).keyBy('a').value();
        result = _.chain(numericDictionary).keyBy({a: 42}).value();

        result = _.keyBy(dictionary);
        result = _.keyBy(dictionary, dictionaryIterator);
        result = _.keyBy(dictionary, 'a');
        result = _.keyBy(dictionary, {a: 42});
        result = _(dictionary).keyBy().value();
        result = _(dictionary).keyBy(listIterator).value();
        result = _(dictionary).keyBy('a').value();
        result = _(dictionary).keyBy({a: 42}).value();
        result = _.chain(dictionary).keyBy().value();
        result = _.chain(dictionary).keyBy(listIterator).value();
        result = _.chain(dictionary).keyBy('a').value();
        result = _.chain(dictionary).keyBy({a: 42}).value();
    }
}

//_.invoke
namespace TestInvoke {
    let boolArray: boolean[] = [true, false];

    let nestedDict: _.Dictionary<Array<number>> = {
        a: [0, 1, 2]
    }

    let numDict: _.Dictionary<number> = {
        a: 1,
        b: 2,
        c: 3,
        d: 4
    }

    let result: string;

    result = _.invoke<string>(boolArray, "[1]");
    result = _.invoke<string>(boolArray, "[1]", 2);
    result = _.invoke<string>(boolArray, [1, "toString"]);
    result = _.invoke<string>(boolArray, [1, "toString"], 2);

    result = _.invoke<boolean, string>(boolArray, "[1]");
    result = _.invoke<boolean, string>(boolArray, "[1]", 2);
    result = _.invoke<boolean, string>(boolArray, [1, "toString"]);
    result = _.invoke<boolean, string>(boolArray, [1, "toString"], 2);

    result = _.invoke<string>(numDict, "a.toString");
    result = _.invoke<string>(numDict, "a.toString", 2);
    result = _.invoke<string>(numDict, ["a", "toString"]);
    result = _.invoke<string>(numDict, ["a", "toString"], 2);

    result = _.invoke<number, string>(numDict, "a.toString");
    result = _.invoke<number, string>(numDict, "a.toString", 2);
    result = _.invoke<number, string>(numDict, ["a", "toString"]);
    result = _.invoke<number, string>(numDict, ["a", "toString"], 2);

    result = _.invoke<string>(nestedDict, ["a[0].toString"]);
    result = _.invoke<string>(nestedDict, ["a[0].toString"], 2);
    result = _.invoke<string>(nestedDict, ["a", 0, "toString"]);
    result = _.invoke<string>(nestedDict, ["a", 0, "toString"], 2);

    result = _.invoke<Array<number>, string>(nestedDict, ["a[0].toString"]);
    result = _.invoke<Array<number>, string>(nestedDict, ["a[0].toString"], 2);
    result = _.invoke<Array<number>, string>(nestedDict, ["a", 0, "toString"]);
    result = _.invoke<Array<number>, string>(nestedDict, ["a", 0, "toString"], 2);

    result = _(boolArray).invoke<string>("[1]");
    result = _(boolArray).invoke<string>("[1]", 2);
    result = _(boolArray).invoke<string>([1, "toString"]);
    result = _(boolArray).invoke<string>([1, "toString"], 2);

    result = _(numDict).invoke<string>("a.toString");
    result = _(numDict).invoke<string>("a.toString", 2);
    result = _(numDict).invoke<string>(["a", "toString"]);
    result = _(numDict).invoke<string>(["a", "toString"], 2);

    result = _(nestedDict).invoke<string>("a[0].toString");
    result = _(nestedDict).invoke<string>("a[0].toString", 2);
    result = _(nestedDict).invoke<string>(["a", 0, "toString"]);
    result = _(nestedDict).invoke<string>(["a", 0, "toString"], 2);

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _(boolArray).chain().invoke<_.LoDashExplicitWrapper<string>>("[1]");
        result = _(boolArray).chain().invoke<_.LoDashExplicitWrapper<string>>("[1]", 2);
        result = _(boolArray).chain().invoke<_.LoDashExplicitWrapper<string>>([1, "toString"]);
        result = _(boolArray).chain().invoke<_.LoDashExplicitWrapper<string>>([1, "toString"], 2);

        result = _(numDict).chain().invoke<_.LoDashExplicitWrapper<string>>("a.toString");
        result = _(numDict).chain().invoke<_.LoDashExplicitWrapper<string>>("a.toString", 2);
        result = _(numDict).chain().invoke<_.LoDashExplicitWrapper<string>>(["a", "toString"]);
        result = _(numDict).chain().invoke<_.LoDashExplicitWrapper<string>>(["a", "toString"], 2);

        result = _(nestedDict).chain().invoke<_.LoDashExplicitWrapper<string>>("a[0].toString");
        result = _(nestedDict).chain().invoke<_.LoDashExplicitWrapper<string>>("a[0].toString", 2);
        result = _(nestedDict).chain().invoke<_.LoDashExplicitWrapper<string>>(["a", 0, "toString"]);
        result = _(nestedDict).chain().invoke<_.LoDashExplicitWrapper<string>>(["a", 0, "toString"], 2);
    }
}

//_.invokeMap
namespace TestInvokeMap {
    let numArray: number[] | null | undefined = [4, 2, 1, 3] as any;
    let obj: _.Dictionary<number> = {
        a: 1,
        b: 2,
        c: 3,
        d: 4
    };
    let numDict: _.Dictionary<number> | null | undefined = obj as any;

    let result: string[];
    result = _.invokeMap<number, string>(numArray, 'toString');
    result = _.invokeMap<number, string>(numArray, 'toString', 2);
    result = _.invokeMap<string>(numArray, 'toString');
    result = _.invokeMap<string>(numArray, 'toString', 2);
    result = _(numArray).invokeMap<string>('toString').value();
    result = _(numArray).invokeMap<string>('toString', 2).value();
    result = _(numArray).chain().invokeMap<string>('toString').value();
    result = _(numArray).chain().invokeMap<string>('toString', 2).value();

    result = _.invokeMap<number, string>(numArray, Number.prototype.toString);
    result = _.invokeMap<number, string>(numArray, Number.prototype.toString, 2);
    result = _.invokeMap<string>(numArray, Number.prototype.toString);
    result = _.invokeMap<string>(numArray, Number.prototype.toString, 2);
    result = _(numArray).invokeMap<string>(Number.prototype.toString).value();
    result = _(numArray).invokeMap<string>(Number.prototype.toString, 2).value();
    result = _(numArray).chain().invokeMap<string>(Number.prototype.toString).value();
    result = _(numArray).chain().invokeMap<string>(Number.prototype.toString, 2).value();

    result = _.invokeMap<number, string>(numDict, 'toString');
    result = _.invokeMap<number, string>(numDict, 'toString', 2);
    result = _.invokeMap<string>(numDict, 'toString');
    result = _.invokeMap<string>(numDict, 'toString', 2);
    result = _(numDict).invokeMap<string>('toString').value();
    result = _(numDict).invokeMap<string>('toString', 2).value();
    result = _(numDict).chain().invokeMap<string>('toString').value();
    result = _(numDict).chain().invokeMap<string>('toString', 2).value();

    result = _.invokeMap<number, string>(numDict, Number.prototype.toString);
    result = _.invokeMap<number, string>(numDict, Number.prototype.toString, 2);
    result = _.invokeMap<string>(numDict, Number.prototype.toString);
    result = _.invokeMap<string>(numDict, Number.prototype.toString, 2);
    result = _(numDict).invokeMap<string>(Number.prototype.toString).value();
    result = _(numDict).invokeMap<string>(Number.prototype.toString, 2).value();
    result = _(numDict).chain().invokeMap<string>(Number.prototype.toString).value();
    result = _(numDict).chain().invokeMap<string>(Number.prototype.toString, 2).value();
}

// _.map
namespace TestMap {
    let array: number[] | null | undefined = [] as any;
    let list: _.List<number> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<number> | null | undefined = obj;

    let listIterator: (value: number, index: number, collection: _.List<number>) => TResult = (value: number, index: number, collection: _.List<number>) => ({ a: 1, b: "", c: true });
    let dictionaryIterator: (value: number, key: string, collection: _.Dictionary<number>) => TResult = (value: number, key: string, collection: _.Dictionary<number>) => ({ a: 1, b: "", c: true });

    {
        _.map(array);  // $ExpectType number[]
        _.map(array, listIterator);  // $ExpectType TResult[]

        _.map(list);  // $ExpectType number[]
        _.map(list, listIterator);  // $ExpectType TResult[]

        _.map(dictionary);  // $ExpectType number[]
        _.map(dictionary, dictionaryIterator);  // $ExpectType TResult[]
    }

    {
        // _.matches iteratee shorthand.
        _.map(array, {});  // $ExpectType boolean[]
        _.map(list, {});  // $ExpectType boolean[]
        _.map(dictionary, {});  // $ExpectType boolean[]
    }

    {
        _(array).map().value();  // $ExpectType number[]
        _(array).map(listIterator).value();  // $ExpectType TResult[]

        _(list).map().value();  // $ExpectType number[]
        _(list).map(listIterator).value();  // $ExpectType TResult[]

        _(dictionary).map().value();  // $ExpectType number[]
        _(dictionary).map(dictionaryIterator).value();  // $ExpectType TResult[]
    }

    {
        _(array).map({}).value();  // $ExpectType boolean[]
        _(list).map({}).value();  // $ExpectType boolean[]
        _(dictionary).map({}).value();  // $ExpectType boolean[]
    }

    {
        _(array).chain().map().value();  // $ExpectType number[]
        _(array).chain().map(listIterator).value();  // $ExpectType TResult[]

        _(list).chain().map().value();  // $ExpectType number[]
        _(list).chain().map(listIterator).value();  // $ExpectType TResult[]

        _(dictionary).chain().map().value();  // $ExpectType number[]
        _(dictionary).chain().map(dictionaryIterator).value();  // $ExpectType TResult[]
    }

    {
        let result: _.LoDashExplicitArrayWrapper<boolean>;

        result = _<number>(array).chain().map({});
        result = _(list).chain().map({});
        result = _(dictionary).chain().map({});
    }

    {
        // "pluck"-style map.
        _.map([{a: 1}, {a: 2}], 'a');  // $ExpectType number[]
        _.map({a: {b: 'str'}, c: {b: 1}}, 'b');  // ExpectType (string | number)[]

        _([{a: 1}, {a: 2}]).map('a').value();  // $ExpectType number[]
        _.chain([{a: 1}, {a: 2}]).map('a').value();  // $ExpectType number[]
        _([{a: 1}, {a: 2}]).chain().map('a').value();  // $ExpectType number[]
    }

    {
        // $ExpectType number[]
        _.map(['a', 'b', 'c'], (
            v,  // $ExpectType string
            k  // $ExpectType number
          ) => k);
    }
}

// _.partition
result = <string[][]>_.partition<string>('abcd', (n) => n < 'c');
result = <string[][]>_.partition<string>(['a', 'b', 'c', 'd'], (n) => n < 'c');
result = <number[][]>_.partition<number>([1, 2, 3, 4], (n) => n < 3);
result = <number[][]>_.partition<number>({0: 1, 1: 2, 2: 3, 3: 4, length: 4}, (n) => n < 3);
result = <number[][]>_.partition<number>({a: 1, b: 2, c: 3, d: 4}, (n) => n < 3);
result = <{a: number}[][]>_.partition<{a: number}, {a: number}>([{a: 1}, {a: 2}], {a: 2});
result = <{a: number}[][]>_.partition<{a: number}, {a: number}>({0: {a: 1}, 1: {a: 2}, length: 2}, {a: 2});
result = <{a: number}[][]>_.partition<{a: number}, {a: number}>({0: {a: 1}, 1: {a: 2}}, {a: 2});
result = <{a: number}[][]>_.partition<{a: number}>([{a: 1}, {a: 2}], 'a');
result = <{a: number}[][]>_.partition<{a: number}>([{a: 1}, {a: 2}], 'a', 2);
result = <{a: number}[][]>_.partition<{a: number}>({0: {a: 1}, 1: {a: 2}, length: 2}, 'a');
result = <{a: number}[][]>_.partition<{a: number}>({0: {a: 1}, 1: {a: 2}, length: 2}, 'a', 2);
result = <{a: number}[][]>_.partition<{a: number}>({0: {a: 1}, 1: {a: 2}}, 'a');
result = <{a: number}[][]>_.partition<{a: number}>({0: {a: 1}, 1: {a: 2}}, 'a', 2);
result = <{a: number}[][]>_.partition<{a: number}>(null, 'a');
result = <string[][]>_('abcd').partition((n) => n < 'c').value();
result = <string[][]>_(['a', 'b', 'c', 'd']).partition((n) => n < 'c').value();
result = <number[][]>_([1, 2, 3, 4]).partition((n) => n < 3).value();
result = <number[][]>_({0: 1, 1: 2, 2: 3, 3: 4, length: 4}).partition<number>((n) => n < 3).value();
result = <number[][]>_({a: 1, b: 2, c: 3, d: 4}).partition<number>((n) => n < 3).value();
result = <{a: number}[][]>_([{a: 1}, {a: 2}]).partition<{a: number}>({a: 2}).value();
result = <{a: number}[][]>_({0: {a: 1}, 1: {a: 2}, length: 2}).partition<{a: number}, {a: number}>({a: 2}).value();
result = <{a: number}[][]>_({0: {a: 1}, 1: {a: 2}}).partition<{a: number}, {a: number}>({a: 2}).value();
result = <{a: number}[][]>_([{a: 1}, {a: 2}]).partition('a').value();
result = <{a: number}[][]>_([{a: 1}, {a: 2}]).partition('a', 2).value();
result = <{a: number}[][]>_({0: {a: 1}, 1: {a: 2}}).partition<{a: number}>('a').value();
result = <{a: number}[][]>_({0: {a: 1}, 1: {a: 2}}).partition<{a: number}>('a', 2).value();

// TODO
// _.map with iteratee shorthand
// module TestMapInsteadOfPluck {
//     interface SampleObject {
//         d: {b: TResult}[];
//     }
//
//     let array: SampleObject[] = [];
//     let list: _.List<SampleObject> = [];
//     let dictionary: _.Dictionary<SampleObject> = {};
//
//     {
//         let result: any[];
//
//         result = _.map<SampleObject>(array, 'd.0.b');
//         result = _.map<SampleObject>(array, ['d', 0, 'b']);
//
//         result = _.map<SampleObject>(list, 'd.0.b');
//         result = _.map<SampleObject>(list, ['d', 0, 'b']);
//
//         result = _.map<SampleObject>(dictionary, 'd.0.b');
//         result = _.map<SampleObject>(dictionary, ['d', 0, 'b']);
//     }
//
//     {
//         let result: TResult[];
//
//         result = _.map<SampleObject, TResult>(array, 'd.0.b');
//         result = _.map<SampleObject, TResult>(array, ['d', 0, 'b']);
//
//         result = _.map<SampleObject, TResult>(list, 'd.0.b');
//         result = _.map<SampleObject, TResult>(list, ['d', 0, 'b']);
//
//         result = _.map<SampleObject, TResult>(dictionary, 'd.0.b');
//         result = _.map<SampleObject, TResult>(dictionary, ['d', 0, 'b']);
//     }
//
//     {
//         let result: _.LoDashImplicitArrayWrapper<TResult>;
//
//         result = _(array).map<TResult>('d.0.b');
//         result = _(array).map<TResult>(['d', 0, 'b']);
//
//         result = _(list).map<TResult>('d.0.b');
//         result = _(list).map<TResult>(['d', 0, 'b']);
//
//         result = _(dictionary).map<TResult>('d.0.b');
//         result = _(dictionary).map<TResult>(['d', 0, 'b']);
//     }
//
//     {
//         let result: _.LoDashExplicitArrayWrapper<TResult>;
//
//         result = _(array).chain().map<TResult>('d.0.b');
//         result = _(array).chain().map<TResult>(['d', 0, 'b']);
//
//         result = _(list).chain().map<TResult>('d.0.b');
//         result = _(list).chain().map<TResult>(['d', 0, 'b']);
//
//         result = _(dictionary).chain().map<TResult>('d.0.b');
//         result = _(dictionary).chain().map<TResult>(['d', 0, 'b']);
//     }
// }
namespace TestReduce {
    interface ABC {
        [index: string]: number;
        a: number;
        b: number;
        c: number;
    }

    result = <number>_.reduce<number, number>([1, 2, 3], (sum: number, num: number) => sum + num);
    result = <number>_.reduce<number, number>(null, (sum: number, num: number) => sum + num);

    // chained
    result = _([1, 2 ,3]).reduce((sum: number, num: number) => sum + num);
    result = _.chain([1, 2 ,3]).reduce((sum: number, num: number) => sum + num).value();

    result = <ABC>_.reduce({ 'a': 1, 'b': 2, 'c': 3 }, (r: ABC, num: number, key: string) => {
        r[key] = num * 3;
        return r;
    }, {});

    result = <number>_([1, 2, 3]).reduce<number>((sum: number, num: number) => sum + num);
    result = <ABC>_({ 'a': 1, 'b': 2, 'c': 3 }).reduce<number, ABC>((r: ABC, num: number, key: string) => {
        r[key] = num * 3;
        return r;
    }, { a: 1, b: 2, c: 3 });

    result = <number[]>_.reduceRight([[0, 1], [2, 3], [4, 5]], (a: number[], b: number[]) => a.concat(b), <number[]>[]);
}
// _.reject
namespace TestReject {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<TResult> | null | undefined = obj;

    let stringIterator: (char: string, index: number, string: string) => any = (char: string, index: number, string: string) => 1;
    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => any = (value: TResult, index: number, collection: _.List<TResult>) => 1;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => any = (value: TResult, key: string, collection: _.Dictionary<TResult>) => 1;

    {
        let result: string[];

        result = _.reject('', stringIterator);
    }

    {
        let result: TResult[];

        result = _.reject<TResult>(array, listIterator);
        result = _.reject<TResult>(array, '');
        result = _.reject<{a: number}, TResult>(array, {a: 42});

        result = _.reject<TResult>(list, listIterator);
        result = _.reject<TResult>(list, '');
        result = _.reject<{a: number}, TResult>(list, {a: 42});

        result = _.reject<TResult>(dictionary, dictionaryIterator);
        result = _.reject<TResult>(dictionary, '');
        result = _.reject<{a: number}, TResult>(dictionary, {a: 42});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _('').reject(stringIterator);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).reject(listIterator);
        result = _(array).reject('');
        result = _(array).reject<{a: number}>({a: 42});

        result = _(list).reject<TResult>(listIterator);
        result = _(list).reject<TResult>('');
        result = _(list).reject<{a: number}, TResult>({a: 42});

        result = _(dictionary).reject<TResult>(dictionaryIterator);
        result = _(dictionary).reject<TResult>('');
        result = _(dictionary).reject<{a: number}, TResult>({a: 42});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _('').chain().reject(stringIterator);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().reject(listIterator);
        result = _(array).chain().reject('');
        result = _(array).chain().reject<{a: number}>({a: 42});

        result = _(list).chain().reject<TResult>(listIterator);
        result = _(list).chain().reject<TResult>('');
        result = _(list).chain().reject<{a: number}, TResult>({a: 42});

        result = _(dictionary).chain().reject<TResult>(dictionaryIterator);
        result = _(dictionary).chain().reject<TResult>('');
        result = _(dictionary).chain().reject<{a: number}, TResult>({a: 42});
    }
}

// _.sample
namespace TestSample {
    let array: string[] | null | undefined = [] as any;
    let list: _.List<string> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<string> | null | undefined = obj;
    let numericDictionary: _.NumericDictionary<string>  | null | undefined= obj;

    {
        let result: string | undefined;

        result = _.sample('abc');
        result = _.sample(array);
        result = _.sample(list);
        result = _.sample(dictionary);
        result = _.sample(numericDictionary);
        result = _.sample({a: 'foo'});
        result = _.sample<string>({a: 'foo'});

        result = _('abc').sample();
        result = _(array).sample();
        result = _(list).sample<string>();
        result = _(dictionary).sample<string>();
        result = _(numericDictionary).sample<string>();
        result = _({a: 'foo'}).sample<string>();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('abc').chain().sample();
        result = _(array).chain().sample<_.LoDashExplicitWrapper<string>>();
        result = _(list).chain().sample<_.LoDashExplicitWrapper<string>>();
        result = _(dictionary).chain().sample<_.LoDashExplicitWrapper<string>>();
        result = _(numericDictionary).chain().sample<_.LoDashExplicitWrapper<string>>();
        result = _({a: 'foo'}).chain().sample<_.LoDashExplicitWrapper<string>>();
    }
}

// _.sampleSize
namespace TestSampleSize {
    let array: string[] | null | undefined = [] as any;
    let list: _.List<string> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<string> | null | undefined = obj;
    let numericDictionary: _.NumericDictionary<string> | null | undefined = obj;

    {
        let result: string[];

        result = _.sampleSize('abc');
        result = _.sampleSize('abc', 42);
        result = _.sampleSize(array);
        result = _.sampleSize(array, 42);
        result = _.sampleSize(list);
        result = _.sampleSize(list, 42);
        result = _.sampleSize(dictionary);
        result = _.sampleSize(dictionary, 42);
        result = _.sampleSize(numericDictionary);
        result = _.sampleSize(numericDictionary, 42);
        result = _.sampleSize<{a: string}, string>({a: 'foo'});
        result = _.sampleSize<{a: string}, string>({a: 'foo'}, 42);
        result = _.sampleSize<string>({a: 'foo'});
        result = _.sampleSize<string>({a: 'foo'}, 42);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _('abc').sampleSize();
        result = _('abc').sampleSize(42);
        result = _(array).sampleSize();
        result = _(array).sampleSize(42);
        result = _(list).sampleSize<string>();
        result = _(list).sampleSize<string>(42);
        result = _(dictionary).sampleSize<string>();
        result = _(dictionary).sampleSize<string>(42);
        result = _(numericDictionary).sampleSize<string>();
        result = _(numericDictionary).sampleSize<string>(42);
        result = _({a: 'foo'}).sampleSize<string>();
        result = _({a: 'foo'}).sampleSize<string>(42);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _('abc').chain().sampleSize();
        result = _('abc').chain().sampleSize(42);
        result = _(array).chain().sampleSize();
        result = _(array).chain().sampleSize(42);
        result = _(list).chain().sampleSize<string>();
        result = _(list).chain().sampleSize<string>(42);
        result = _(dictionary).chain().sampleSize<string>();
        result = _(dictionary).chain().sampleSize<string>(42);
        result = _(numericDictionary).chain().sampleSize<string>();
        result = _(numericDictionary).chain().sampleSize<string>(42);
        result = _({a: 'foo'}).chain().sampleSize<string>();
        result = _({a: 'foo'}).chain().sampleSize<string>(42);
    }
}

// _.shuffle
namespace TestShuffle {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<TResult> | null | undefined = obj;

    {
        let result: string[];

        result = _.shuffle('abc');
    }

    {
        let result: TResult[];

        result = _.shuffle<TResult>(array);
        result = _.shuffle<TResult>(list);
        result = _.shuffle<TResult>(dictionary);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _('abc').shuffle();
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).shuffle();
        result = _(list).shuffle<TResult>();
        result = _(dictionary).shuffle<TResult>();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _('abc').chain().shuffle();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().shuffle();
        result = _(list).chain().shuffle<TResult>();
        result = _(dictionary).chain().shuffle<TResult>();
    }
}

// _.size
namespace TestSize {
    type SampleType = {a: string; b: number; c: boolean;};

    let array: SampleType[] | null | undefined = [] as any;
    let list: _.List<SampleType> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<SampleType> | null | undefined = obj;

    {
        let result: number;

        result = _.size<SampleType>(array);
        result = _.size<SampleType>(list);
        result = _.size<SampleType>(dictionary);
        result = _.size('');

        result = _(array).size();
        result = _(list).size();
        result = _(dictionary).size();
        result = _('').size();
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(array).chain().size();
        result = _(list).chain().size();
        result = _(dictionary).chain().size();
        result = _('').chain().size();
    }
}

// _.some
namespace TestSome {
    type SampleObject = {a: number; b: string; c: boolean;};

    let array: SampleObject[] | null | undefined = [] as any;
    let list: _.List<SampleObject> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<SampleObject> | null | undefined = obj;
    let numericDictionary: _.NumericDictionary<SampleObject> | null | undefined = obj;
    let sampleObject: SampleObject | null | undefined = obj;

    let listIterator = (value: SampleObject, index: number, collection: _.List<SampleObject>) => true;
    let dictionaryIterator = (value: SampleObject, key: string, collection: _.Dictionary<SampleObject>) => true;
    let numericDictionaryIterator = (value: SampleObject, key: number, collection: _.NumericDictionary<SampleObject>) => true;
    let objectIterator = (value: any, key: string, collection: any) => true;

    {
        let result: boolean;

        result = _.some<SampleObject>(array);
        result = _.some<SampleObject>(array, listIterator);
        result = _.some<SampleObject>(array, 'a');
        result = _.some<SampleObject>(array, ['a', 42]);
        result = _.some<SampleObject>(array, {a: 42});

        result = _.some<SampleObject>(list);
        result = _.some<SampleObject>(list, listIterator);
        result = _.some<SampleObject>(list, 'a');
        result = _.some<SampleObject>(list, ['a', 42]);
        result = _.some<SampleObject>(list, {a: 42});

        result = _.some<SampleObject>(dictionary);
        result = _.some<SampleObject>(numericDictionary, dictionaryIterator);
        result = _.some<SampleObject>(dictionary, (value, key, collection) => {
            value.a--;
            key.substr(0);
            value = collection[key];
            return true;
        });
        result = _.some<SampleObject>(dictionary, 'a');
        result = _.some<SampleObject>(dictionary, ['a', 42]);
        result = _.some<SampleObject>(dictionary, {a: 42});

        result = _.some<SampleObject>(numericDictionary);
        result = _.some<SampleObject>(numericDictionary, numericDictionaryIterator);
        result = _.some<SampleObject>(numericDictionary, 'a');
        result = _.some<SampleObject>(numericDictionary, ['a', 42]);
        result = _.some<SampleObject>(numericDictionary, {a: 42});

        result = _.some(sampleObject);
        result = _.some(sampleObject, objectIterator);
        result = _.some(sampleObject, 'a');
        result = _.some(sampleObject, ['a', 42]);
        result = _.some<{a: number}>(sampleObject, {a: 42});

        result = _(array).some();
        result = _(array).some(listIterator);
        result = _(array).some('a');
        result = _(array).some(['a', 42]);
        result = _(array).some({a: 42});

        result = _(list).some<SampleObject>();
        result = _(list).some<SampleObject>(listIterator);
        result = _(list).some('a');
        result = _(list).some(['a', 42]);
        result = _(list).some<SampleObject>({a: 42});

        result = _(dictionary).some<SampleObject>();
        result = _(dictionary).some<SampleObject>(dictionaryIterator);
        result = _(dictionary).some('a');
        result = _(dictionary).some(['a', 42]);
        result = _(dictionary).some<SampleObject>({a: 42});

        result = _(numericDictionary).some<SampleObject>();
        result = _(numericDictionary).some<SampleObject>(numericDictionaryIterator);
        result = _(numericDictionary).some('a');
        result = _(numericDictionary).some(['a', 42]);
        result = _(numericDictionary).some<SampleObject>({a: 42});

        result = _(sampleObject).some();
        result = _(sampleObject).some(objectIterator);
        result = _(sampleObject).some('a');
        result = _(sampleObject).some(['a', 42]);
        result = _(sampleObject).some<SampleObject>({a: 42});
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(array).chain().some();
        result = _(array).chain().some(listIterator);
        result = _(array).chain().some('a');
        result = _(array).chain().some(['a', 42]);
        result = _(array).chain().some({a: 42});

        result = _(list).chain().some<SampleObject>();
        result = _(list).chain().some<SampleObject>(listIterator);
        result = _(list).chain().some('a');
        result = _(list).chain().some(['a', 42]);
        result = _(list).chain().some<SampleObject>({a: 42});

        result = _(dictionary).chain().some<SampleObject>();
        result = _(dictionary).chain().some<SampleObject>(dictionaryIterator);
        result = _(dictionary).chain().some('a');
        result = _(dictionary).chain().some(['a', 42]);
        result = _(dictionary).chain().some<SampleObject>({a: 42});

        result = _(numericDictionary).chain().some<SampleObject>();
        result = _(numericDictionary).chain().some<SampleObject>(numericDictionaryIterator);
        result = _(numericDictionary).chain().some('a');
        result = _(numericDictionary).chain().some(['a', 42]);
        result = _(numericDictionary).chain().some<SampleObject>({a: 42});

        result = _(sampleObject).chain().some();
        result = _(sampleObject).chain().some(objectIterator);
        result = _(sampleObject).chain().some('a');
        result = _(sampleObject).chain().some(['a', 42]);
        result = _(sampleObject).chain().some<TResult>({a: 42});
    }
}

// _.sortBy
namespace TestSortBy {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<TResult> | null | undefined = obj;

    let listIterator = (value: TResult, index: number, collection: _.List<TResult>) => 0;
    let dictionaryIterator = (value: TResult, key: string, collection: _.Dictionary<TResult>) => 0;

    {
        let result: TResult[];

        result = _.sortBy<TResult>(array);
        result = _.sortBy<TResult, number>(array, listIterator);
        result = _.sortBy<TResult>(array, '');
        result = _.sortBy<{a: number}, TResult>(array, {a: 42});

        result = _.sortBy<TResult>(list);
        result = _.sortBy<TResult, number>(list, listIterator);
        result = _.sortBy<TResult>(list, '');
        result = _.sortBy<{a: number}, TResult>(list, {a: 42});

        result = _.sortBy<TResult>(dictionary);
        result = _.sortBy<TResult, number>(dictionary, dictionaryIterator);
        result = _.sortBy<TResult>(dictionary, '');
        result = _.sortBy<{a: number}, TResult>(dictionary, {a: 42});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).sortBy();
        result = _(array).sortBy<number>(listIterator);
        result = _(array).sortBy('');
        result = _(array).sortBy<{a: number}>({a: 42});

        result = _(list).sortBy<TResult>();
        result = _(list).sortBy<TResult, number>(listIterator);
        result = _(list).sortBy<TResult>('');
        result = _(list).sortBy<{a: number}, TResult>({a: 42});

        result = _(dictionary).sortBy<TResult>();
        result = _(dictionary).sortBy<TResult, number>(dictionaryIterator);
        result = _(dictionary).sortBy<TResult>('');
        result = _(dictionary).sortBy<{a: number}, TResult>({a: 42});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().sortBy();
        result = _(array).chain().sortBy<number>(listIterator);
        result = _(array).chain().sortBy('');
        result = _(array).chain().sortBy<{a: number}>({a: 42});

        result = _(list).chain().sortBy<TResult>();
        result = _(list).chain().sortBy<TResult, number>(listIterator);
        result = _(list).chain().sortBy<TResult>('');
        result = _(list).chain().sortBy<{a: number}, TResult>({a: 42});

        result = _(dictionary).chain().sortBy<TResult>();
        result = _(dictionary).chain().sortBy<TResult, number>(dictionaryIterator);
        result = _(dictionary).chain().sortBy<TResult>('');
        result = _(dictionary).chain().sortBy<{a: number}, TResult>({a: 42});
    }
}

result = <IStoogesAge[]>_.sortBy(stoogesAges, stooge => Math.sin(stooge.age), stooge => stooge.name.slice(1));
result = <IStoogesAge[]>_.sortBy(stoogesAges, ['name', 'age']);
result = <IStoogesAge[]>_.sortBy(stoogesAges, 'name', stooge => Math.sin(stooge.age));

result = <IFoodOrganic[]>_(foodsOrganic).sortBy('organic', (food) => food.name, { organic: true }).value();

// _.orderBy
namespace TestorderBy {
    type SampleObject = {a: number; b: string; c: boolean};

    let array: SampleObject[] | null | undefined = [] as any;
    let list: _.List<SampleObject> | null | undefined = [] as any;
    let numericDictionary: _.NumericDictionary<SampleObject> | null | undefined = any;
    let dictionary: _.Dictionary<SampleObject> | null | undefined = any;
    let orders: boolean|string|(boolean|string)[] = true as any;

    {
        let iteratees: (value: string) => any|((value: string) => any)[] = (value) => 1;
        let result: string[];

        result = _.orderBy('acbd', iteratees);
        result = _.orderBy('acbd', iteratees, orders);
    }

    {
        let iteratees: (value: SampleObject) => any|string|{a: number}|((value: SampleObject) => any|string|{a: number})[] = (value) => 1;
        let result: SampleObject[];

        result = _.orderBy(array, iteratees);
        result = _.orderBy(array, iteratees, orders);
        result = _(array).orderBy(iteratees).value();
        result = _(array).orderBy(iteratees, orders).value();
        result = _.chain(array).orderBy(iteratees).value();
        result = _.chain(array).orderBy(iteratees, orders).value();

        result = _.orderBy(list, iteratees);
        result = _.orderBy(list, iteratees, orders);
        result = _(list).orderBy(iteratees).value();
        result = _(list).orderBy(iteratees, orders).value();
        result = _.chain(list).orderBy(iteratees).value();
        result = _.chain(list).orderBy(iteratees, orders).value();

        result = _.orderBy(numericDictionary, iteratees);
        result = _.orderBy(numericDictionary, iteratees, orders);
        result = _(numericDictionary).orderBy(iteratees).value();
        result = _(numericDictionary).orderBy(iteratees, orders).value();
        result = _.chain(numericDictionary).orderBy(iteratees).value();
        result = _.chain(numericDictionary).orderBy(iteratees, orders).value();

        result = _.orderBy(dictionary, iteratees);
        result = _.orderBy(dictionary, iteratees, orders);
        result = _(dictionary).orderBy(iteratees).value();
        result = _(dictionary).orderBy(iteratees, orders).value();
        result = _.chain(dictionary).orderBy(iteratees).value();
        result = _.chain(dictionary).orderBy(iteratees, orders).value();
        
        result = _.orderBy(dictionary, (value, index, collection) => {
            value; // $ExpectType SampleObject
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<SampleObject>
        });
        result = _.orderBy(dictionary, [(value, index, collection) => {
            value; // $ExpectType SampleObject
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<SampleObject>
        }, (value, index, collection) => {
            value; // $ExpectType SampleObject
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<SampleObject>
        }]);
    }
}

/********
 * Date *
 ********/

namespace TestNow {
    {
        let result: number;

        result = _.now();
        result = _(42).now();
        result = _<any>([]).now();
        result = _({}).now();
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(42).chain().now();
        result = _<any>([]).chain().now();
        result = _({}).chain().now();
    }
}

/*************
 * Functions *
 *************/
// _.after
namespace TestAfter {
    interface Func {
        (a: string, b: number): boolean;
    }

    let func: Func = (a, b) => true;

    {
        let result: Func;

        _.after(42, func);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<Func>;

        _(42).after(func);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<Func>;

        _(42).chain().after(func);
    }
}

// _.ary
namespace TestAry {
    type SampleFunc = (a: number, b: string) => boolean;

    let func: SampleFunc = (a, b) => true;

    {
        let result: SampleFunc;

        result = _.ary<SampleFunc>(func);
        result = _.ary<SampleFunc>(func, 2);
        result = _.ary<SampleFunc, SampleFunc>(func);
        result = _.ary<SampleFunc, SampleFunc>(func, 2);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<SampleFunc>;

        result = _(func).ary<SampleFunc>();
        result = _(func).ary<SampleFunc>(2);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<SampleFunc>;

        result = _(func).chain().ary<SampleFunc>();
        result = _(func).chain().ary<SampleFunc>(2);
    }
}

// _.before
namespace TestBefore {
    interface Func {
        (a: string, b: number): boolean;
    }

    let func: Func = (a, b) => true;

    {
        let result: Func;

        _.before(42, func);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<Func>;

        _(42).before(func);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<Func>;

        _(42).chain().before(func);
    }
}

// _.bind
namespace TestBind {
    type SampleFunc = (a: number, b: string) => boolean;

    let func: SampleFunc = (a, b) => true;

    {
        type SampleResult = (a: number, b: string) => boolean;

        let result: SampleResult;

        result = _.bind<SampleFunc, SampleResult>(func, any);
        result = _.bind<SampleResult>(func, any);
    }

    {
        type SampleResult = (b: string) => boolean;

        let result: SampleResult;

        result = _.bind<SampleFunc, SampleResult>(func, any, 42);
        result = _.bind<SampleResult>(func, any, 42);
    }

    {
        type SampleResult = () => boolean;

        let result: SampleResult;

        result = _.bind<SampleFunc, SampleResult>(func, any, 42, '');
        result = _.bind<SampleResult>(func, any, 42, '');
    }

    {
        type SampleResult = (a: number, b: string) => boolean;

        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(func).bind<SampleResult>(any);
    }

    {
        type SampleResult = (b: string) => boolean;

        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(func).bind<SampleResult>(any, 42);
    }

    {
        type SampleResult = () => boolean;

        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(func).bind<SampleResult>(any, 42, '');
    }

    {
        type SampleResult = (a: number, b: string) => boolean;

        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(func).chain().bind<SampleResult>(any);
    }

    {
        type SampleResult = (b: string) => boolean;

        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(func).chain().bind<SampleResult>(any, 42);
    }

    {
        type SampleResult = () => boolean;

        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(func).chain().bind<SampleResult>(any, 42, '');
    }
}

// _.bindAll
namespace TestBindAll {
    interface SampleObject {
        a: Function;
        b: Function;
        c: Function;
    }

    let object: SampleObject = { a: () => {}, b: () => {}, c: () => {} };

    {
        let result: SampleObject;

        result = _.bindAll<SampleObject>(object);
        result = _.bindAll<SampleObject>(object, 'c');
        result = _.bindAll<SampleObject>(object, ['b'], 'c');
        result = _.bindAll<SampleObject>(object, 'a', ['b'], 'c');
    }

    {
        let result: _.LoDashImplicitObjectWrapper<SampleObject>;

        result = _(object).bindAll();
        result = _(object).bindAll('c');
        result = _(object).bindAll(['b'], 'c');
        result = _(object).bindAll('a', ['b'], 'c');
    }

    {
        let result: _.LoDashExplicitObjectWrapper<SampleObject>;

        result = _(object).chain().bindAll();
        result = _(object).chain().bindAll('c');
        result = _(object).chain().bindAll(['b'], 'c');
        result = _(object).chain().bindAll('a', ['b'], 'c');
    }
}

// _.bindKey
namespace TestBindKey {
    let object = {
        foo: (a: number, b: string) => true,
    };

    {
        type SampleResult = (a: number, b: string) => boolean;

        let result: SampleResult;

        result = _.bindKey<Object, SampleResult>(object, 'foo');
        result = _.bindKey<SampleResult>(object, 'foo');
    }

    {
        type SampleResult = (b: string) => boolean;

        let result: SampleResult;

        result = _.bindKey<Object, SampleResult>(object, 'foo', 42);
        result = _.bindKey<SampleResult>(object, 'foo', 42);
    }

    {
        type SampleResult = () => boolean;

        let result: SampleResult;

        result = _.bindKey<Object, SampleResult>(object, 'foo', 42, '');
        result = _.bindKey<SampleResult>(object, 'foo', 42, '');
    }

    {
        type SampleResult = (a: number, b: string) => boolean;

        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(object).bindKey<SampleResult>('foo');
    }

    {
        type SampleResult = (b: string) => boolean;

        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(object).bindKey<SampleResult>('foo', 42);
    }

    {
        type SampleResult = () => boolean;

        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(object).bindKey<SampleResult>('foo', 42, '');
    }

    {
        type SampleResult = (a: number, b: string) => boolean;

        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(object).chain().bindKey<SampleResult>('foo');
    }

    {
        type SampleResult = (b: string) => boolean;

        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(object).chain().bindKey<SampleResult>('foo', 42);
    }

    {
        type SampleResult = () => boolean;

        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(object).chain().bindKey<SampleResult>('foo', 42, '');
    }
}

const createCallbackObj: { [index: string]: string; } = { name: 'Joe' };
result = <() => any>_.createCallback('name');
result = <() => boolean>_.createCallback(createCallbackObj);
result = <_.LoDashImplicitObjectWrapper<() => any>>_('name').createCallback();
result = <_.LoDashImplicitObjectWrapper<() => boolean>>_(createCallbackObj).createCallback();

// _.curry
const testCurryFn = (a: number, b: number, c: number) => [a, b, c];
let curryResult0: number[]
let curryResult1: _.CurriedFunction1<number, number[]>
let curryResult2: _.CurriedFunction2<number, number, number[]>

curryResult0 = _.curry(testCurryFn)(1, 2, 3);
curryResult1 = _.curry(testCurryFn)(1, 2);
curryResult0 = _.curry(testCurryFn)(1, 2)(3);
curryResult0 = _.curry(testCurryFn)(1)(2)(3);
curryResult2 = _.curry(testCurryFn)(1);
curryResult1 = _.curry(testCurryFn)(1)(2);
curryResult0 = _.curry(testCurryFn)(1)(2)(3);
curryResult0 = _.curry(testCurryFn)(1)(2, 3);
curryResult0 = _(testCurryFn).curry().value()(1, 2, 3);
curryResult2 = _(testCurryFn).curry().value()(1);

declare function testCurry2(a: string, b: number, c: boolean): [string, number, boolean];
let curryResult3: [string, number, boolean];
let curryResult4: _.CurriedFunction1<boolean, [string, number, boolean]>;
let curryResult5: _.CurriedFunction2<number, boolean, [string, number, boolean]>;
let curryResult6: _.CurriedFunction3<string, number, boolean, [string, number, boolean]>;
curryResult3 = _.curry(testCurry2)("1", 2, true);
curryResult3 = _.curry(testCurry2)("1", 2)(true);
curryResult3 = _.curry(testCurry2)("1")(2, true);
curryResult3 = _.curry(testCurry2)("1")(2)(true);
curryResult4 = _.curry(testCurry2)("1", 2);
curryResult4 = _.curry(testCurry2)("1")(2);
curryResult5 = _.curry(testCurry2)("1");
curryResult6 = _.curry(testCurry2);

// _.curryRight
const testCurryRightFn = (a: number, b: number, c: number) => [a, b, c];
curryResult0 = _.curryRight(testCurryRightFn)(1, 2, 3);
curryResult2 = _.curryRight(testCurryRightFn)(1);
curryResult0 = _(testCurryRightFn).curryRight().value()(1, 2, 3);
curryResult2 = _(testCurryRightFn).curryRight().value()(1);
let curryResult7: _.RightCurriedFunction1<string, [string, number, boolean]>;
let curryResult8: _.RightCurriedFunction2<string,number , [string, number, boolean]>;
let curryResult9: _.RightCurriedFunction3<string, number, boolean, [string, number, boolean]>;
curryResult3 = _.curryRight(testCurry2)("1", 2, true);
curryResult3 = _.curryRight(testCurry2)( 2,true)("1");
curryResult3 = _.curryRight(testCurry2)(true)( "1",2);
curryResult3 = _.curryRight(testCurry2)(true)(2)("1");
curryResult7 = _.curryRight(testCurry2)(2,true);
curryResult7 = _.curryRight(testCurry2)(true)(2);
curryResult8 = _.curryRight(testCurry2)(true);
curryResult9 = _.curryRight(testCurry2);

// _.debounce
namespace TestDebounce {
    interface SampleFunc {
        (n: number, s: string): boolean;
    }

    interface Options {
        leading?: boolean;
        maxWait?: number;
        trailing?: boolean;
    }

    interface ResultFunc {
        (n: number, s: string): boolean;
        cancel(): void;
    }

    let func: SampleFunc = (a, b) => true;
    let options: Options = {};

    {
        let result: ResultFunc;

        result = _.debounce<SampleFunc>(func);
        result = _.debounce<SampleFunc>(func, 42);
        result = _.debounce<SampleFunc>(func, 42, options);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<ResultFunc>;

        result = _(func).debounce();
        result = _(func).debounce(42);
        result = _(func).debounce(42, options);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<ResultFunc>;

        result = _(func).chain().debounce();
        result = _(func).chain().debounce(42);
        result = _(func).chain().debounce(42, options);
    }
}

// _.defer
namespace TestDefer {
    type SampleFunc = (a: number, b: string) => boolean;

    let func: SampleFunc = (a, b) => true;

    {
        let result: number;

        result = _.defer<SampleFunc>(func);
        result = _.defer<SampleFunc>(func, any);
        result = _.defer<SampleFunc>(func, any, any);
        result = _.defer<SampleFunc>(func, any, any, any);
    }

    {
        let result: _.LoDashImplicitWrapper<number>;

        result = _(func).defer();
        result = _(func).defer(any);
        result = _(func).defer(any, any);
        result = _(func).defer(any, any, any);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(func).chain().defer();
        result = _(func).chain().defer(any);
        result = _(func).chain().defer(any, any);
        result = _(func).chain().defer(any, any, any);
    }
}

// _.delay
namespace TestDelay {
    type SampleFunc = (a: number, b: string) => boolean;

    let func: SampleFunc = (a, b) => true;

    {
        let result: number;

        result = _.delay<SampleFunc>(func, 1);
        result = _.delay<SampleFunc>(func, 1, 2);
        result = _.delay<SampleFunc>(func, 1, 2, '');
    }

    {
        let result: _.LoDashImplicitWrapper<number>;

        result = _(func).delay(1);
        result = _(func).delay(1, 2);
        result = _(func).delay(1, 2, '');
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(func).chain().delay(1);
        result = _(func).chain().delay(1, 2);
        result = _(func).chain().delay(1, 2, '');
    }
}

// _.flip
namespace TestFlip {
    interface Func {
        (a: number, b: string): boolean;
    }

    let func: Func = (a, b) => true;

    {
        let result: Func;

        result = _.flip(func);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<Func>;

        result = _(func).flip();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<Func>;

        result = _(func).chain().flip();
    }
}

// _.flow
namespace TestFlow {
    let Fn1 = (n: number) => 0;
    let Fn2 = (m: number, n: number) => 0;
    let Fn3 = (a: number) => "";
    let Fn4 = (a: string) => 0;

    {
        // type infer test
        let result: (m: number, n: number) => number;

        result = _.flow(Fn2, Fn1);
        result = _.flow(Fn2, Fn1, Fn1);
        result = _.flow(Fn2, Fn1, Fn1, Fn1);
        result = _.flow(Fn2, Fn1, Fn1, Fn1, Fn1);
        result = _.flow(Fn2, Fn1, Fn1, Fn1, Fn1, Fn1);
        result = _.flow(Fn2, Fn1, Fn1, Fn1, Fn1, Fn1, Fn1);
        result = _.flow(Fn2, Fn1, Fn3, Fn4);
        result = _.flow<(m: number, n: number) => number>([Fn2, Fn1, Fn3, Fn4]);
    }

    {
        let result: (m: number, n: number) => number;

        result = _.flow<(m: number, n: number) => number>(Fn1, Fn2);
        result = _.flow<(m: number, n: number) => number>(Fn1, Fn1, Fn2);
        result = _.flow<(m: number, n: number) => number>(Fn1, Fn1, Fn1, Fn2);
        result = _.flow<(m: number, n: number) => number>([Fn1, Fn1, Fn1, Fn2]);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(m: number, n: number) => number>;

        result = _(Fn1).flow<(m: number, n: number) => number>(Fn2);
        result = _(Fn1).flow<(m: number, n: number) => number>(Fn1, Fn2);
        result = _(Fn1).flow<(m: number, n: number) => number>(Fn1, Fn1, Fn2);
        result = _(Fn1).flow<(m: number, n: number) => number>([Fn1, Fn1, Fn2]);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(m: number, n: number) => number>;

        result = _(Fn1).chain().flow<(m: number, n: number) => number>(Fn2);
        result = _(Fn1).chain().flow<(m: number, n: number) => number>(Fn1, Fn2);
        result = _(Fn1).chain().flow<(m: number, n: number) => number>(Fn1, Fn1, Fn2);
        result = _(Fn1).chain().flow<(m: number, n: number) => number>([Fn1, Fn1, Fn2]);
    }
}

// _.flowRight
namespace TestFlowRight {
    let Fn1 = (n: number) => 0;
    let Fn2 = (m: number, n: number) => 0;

    {
        let result: (m: number, n: number) => number;

        result = _.flowRight<(m: number, n: number) => number>(Fn1, Fn2);
        result = _.flowRight<(m: number, n: number) => number>(Fn1, Fn1, Fn2);
        result = _.flowRight<(m: number, n: number) => number>(Fn1, Fn1, Fn1, Fn2);
        result = _.flowRight<(m: number, n: number) => number>([Fn1, Fn1, Fn1, Fn2]);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(m: number, n: number) => number>;

        result = _(Fn1).flowRight<(m: number, n: number) => number>(Fn2);
        result = _(Fn1).flowRight<(m: number, n: number) => number>(Fn1, Fn2);
        result = _(Fn1).flowRight<(m: number, n: number) => number>(Fn1, Fn1, Fn2);
        result = _(Fn1).flowRight<(m: number, n: number) => number>([Fn1, Fn1, Fn2]);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(m: number, n: number) => number>;

        result = _(Fn1).chain().flowRight<(m: number, n: number) => number>(Fn2);
        result = _(Fn1).chain().flowRight<(m: number, n: number) => number>(Fn1, Fn2);
        result = _(Fn1).chain().flowRight<(m: number, n: number) => number>(Fn1, Fn1, Fn2);
        result = _(Fn1).chain().flowRight<(m: number, n: number) => number>([Fn1, Fn1, Fn2]);
    }
}

// _.memoize
namespace TestMemoize {
    {
        let fn: any = () => {};
        let memoizedFunction: _.MemoizedFunction = fn;
        let cache: _.MapCache = memoizedFunction.cache;
    }

    interface MemoizedResultFn extends _.MemoizedFunction {
        (a1: string, a2: number): boolean;
    }

    let memoizeFn = (a1: string, a2: number) => true;
    let memoizeResolverFn = (a1: string, a2: number) => "";

    {
        let result: MemoizedResultFn;

        result = _.memoize(memoizeFn);
        result = _.memoize(memoizeFn, memoizeResolverFn);

        result('foo', 1);
        result.cache.get('foo1');
    }

    {
        let result: _.LoDashImplicitObjectWrapper<MemoizedResultFn>;

        result = _(memoizeFn).memoize();
        result = _(memoizeFn).memoize(memoizeResolverFn);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<MemoizedResultFn>;

        result = _(memoizeFn).chain().memoize();
        result = _(memoizeFn).chain().memoize(memoizeResolverFn);
    }

    interface MemoizeCache<K, V> {
        delete(key: K): boolean;
        get(key: K): V;
        has(key: K): boolean;
        set(key: K, value: V): this;
        clear(): void;
    }
    class MemoizeCacheClass implements MemoizeCache<any, any> {
        delete: (key: any) => true;
        get: (key: any) => 1;
        has: (key: any) => true;
        set: (key: any, value: any) => this;
        clear: () => { };
    }

    _.memoize.Cache = MemoizeCacheClass;
}

// _.overArgs
namespace TestOverArgs {
    type Func1 = (a: boolean) => boolean;
    type Func2 = (a: boolean, b: boolean) => boolean;

    let func1: Func1 = (a) => true;
    let func2: Func2 = (a, b) => true;

    let transform1 = (a: string) => true;
    let transform2 = (b: number) => true;

    {
        let result: (a: string) => boolean;

        result = _.overArgs<Func1, (a: string) => boolean>(func1, transform1);
        result = _.overArgs<Func1, (a: string) => boolean>(func1, [transform1]);
    }

    {
        let result: (a: string, b: number) => boolean;

        result = _.overArgs<Func2, (a: string, b: number) => boolean>(func2, transform1, transform2);
        result = _.overArgs<Func2, (a: string, b: number) => boolean>(func2, [transform1, transform2]);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(a: string) => boolean>;

        result = _(func1).overArgs<(a: string) => boolean>(transform1);
        result = _(func1).overArgs<(a: string) => boolean>([transform1]);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(a: string, b: number) => boolean>;

        result = _(func2).overArgs<(a: string, b: number) => boolean>(transform1, transform2);
        result = _(func2).overArgs<(a: string, b: number) => boolean>([transform1, transform2]);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(a: string) => boolean>;

        result = _(func1).chain().overArgs<(a: string) => boolean>(transform1);
        result = _(func1).chain().overArgs<(a: string) => boolean>([transform1]);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(a: string, b: number) => boolean>;

        result = _(func2).chain().overArgs<(a: string, b: number) => boolean>(transform1, transform2);
        result = _(func2).chain().overArgs<(a: string, b: number) => boolean>([transform1, transform2]);
    }
}

// _.negate
namespace TestNegate {
    interface PredicateFn {
        (a1: number, a2: number): boolean;
    }

    interface ResultFn {
        (a1: number, a2: number): boolean;
    }

    const predicate = (a1: number, a2: number) => a1 > a2;

    {
        let result: ResultFn;

        result = _.negate<PredicateFn>(predicate);
        result = _.negate<PredicateFn, ResultFn>(predicate);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<ResultFn>;

        result = _(predicate).negate();
        result = _(predicate).negate<ResultFn>();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<ResultFn>;

        result = _(predicate).chain().negate();
        result = _(predicate).chain().negate<ResultFn>();
    }
}

// _.once
namespace TestOnce {
    interface Func {
        (a: number, b: string): boolean;
    }

    let func: Func = (a, b) => true;

    {
        let result: Func;

        result = _.once(func);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<Func>;

        result = _(func).once();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<Func>;

        result = _(func).chain().once();
    }
}

const greetPartial = (greeting: string, name: string) => greeting + ' ' + name;
const hi = _.partial(greetPartial, 'hi');
hi('moe');

const defaultsDeep = <Function>_.partialRight(_.merge, _.defaults);

const optionsPartialRight = {
    'variable': 'data',
    'imports': { 'jq': $ }
};

defaultsDeep(optionsPartialRight, _.templateSettings);

//_.rearg
const testReargFn = (a: string, b: string, c: string) => [a, b, c];
interface TestReargResultFn {
    (b: string, c: string, a: string): string[];
}
result = <string[]>(_.rearg<TestReargResultFn>(testReargFn, 2, 0, 1))('b', 'c', 'a');
result = <string[]>(_.rearg<TestReargResultFn>(testReargFn, [2, 0, 1]))('b', 'c', 'a');
result = <string[]>(_(testReargFn).rearg<TestReargResultFn>(2, 0, 1).value())('b', 'c', 'a');
result = <string[]>(_(testReargFn).rearg<TestReargResultFn>([2, 0, 1]).value())('b', 'c', 'a');

// _.rest
namespace TestRest {
    type Func = (a: string, b: number[]) => boolean;
    type ResultFunc = (a: string, ...b: number[]) => boolean;

    let func: Func = (a, b) => true;

    {
        let result: ResultFunc;

        result = _.rest<ResultFunc>(func);
        result = _.rest<ResultFunc>(func, 1);

        result = _.rest<ResultFunc, Func>(func);
        result = _.rest<ResultFunc, Func>(func, 1);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<ResultFunc>;

        result = _(func).rest<ResultFunc>();
        result = _(func).rest<ResultFunc>(1);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<ResultFunc>;

        result = _(func).chain().rest<ResultFunc>();
        result = _(func).chain().rest<ResultFunc>(1);
    }
}

//_.spread
namespace TestSpread {
    type SampleFunc = (args: (number|string)[]) => boolean;
    type SampleResult = (a: number, b: string) => boolean;

    let func: SampleFunc = (a) => true;

    {
        let result: SampleResult;

        result = _.spread<SampleFunc, SampleResult>(func);
        result = _.spread<SampleResult>(func);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(func).spread<SampleResult>();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(func).chain().spread<SampleResult>();
    }
}

// _.throttle
namespace TestThrottle {
    interface SampleFunc {
        (n: number, s: string): boolean;
    }

    interface Options {
        leading?: boolean;
        trailing?: boolean;
    }

    interface ResultFunc {
        (n: number, s: string): boolean;
        cancel(): void;
    }

    let func: SampleFunc = (a, b) => true;
    let options: Options = {};

    {
        let result: ResultFunc;

        result = _.throttle<SampleFunc>(func);
        result = _.throttle<SampleFunc>(func, 42);
        result = _.throttle<SampleFunc>(func, 42, options);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<ResultFunc>;

        result = _(func).throttle();
        result = _(func).throttle(42);
        result = _(func).throttle(42, options);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<ResultFunc>;

        result = _(func).chain().throttle();
        result = _(func).chain().throttle(42);
        result = _(func).chain().throttle(42, options);
    }
}

// _.unary
namespace TestUnary {
    interface Func {
        (a: number, b: string): boolean;
    }

    let func: Func = (a, b) => true;

    {
        let result: Func;

        result = _.unary(func);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<Func>;

        result = _(func).unary();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<Func>;

        result = _(func).chain().unary();
    }
}

// _.wrap
namespace TestWrap {
    type SampleValue = {a: number; b: string; c: boolean}
    type SampleResult = (arg2: number, arg3: string) => boolean;

    {
        type SampleWrapper = (arg1: SampleValue, arg2: number, arg3: string) => boolean;

        let value: SampleValue = { a: 1, b: "", c: true };
        let wrapper: SampleWrapper = (a, b, c) => true;
        let result: SampleResult;

        result = _.wrap<SampleValue, SampleWrapper, SampleResult>(value, wrapper);
        result = _.wrap<SampleValue, SampleResult>(value, wrapper);
        result = _.wrap<SampleResult>(value, wrapper);
    }

    {
        type SampleWrapper = (arg1: number, arg2: number, arg3: string) => boolean;

        let value: number = 0;
        let wrapper: SampleWrapper = (a, b, c) => true;
        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(value).wrap<SampleWrapper, SampleResult>(wrapper);
        result = _(value).wrap<SampleResult>(wrapper);
    }

    {
        type SampleWrapper = (arg1: number[], arg2: number, arg3: string) => boolean;

        let value: number[] = [];
        let wrapper: SampleWrapper = (a, b, c) => true;
        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(value).wrap<SampleWrapper, SampleResult>(wrapper);
        result = _(value).wrap<SampleResult>(wrapper);
    }

    {
        type SampleWrapper = (arg1: SampleValue, arg2: number, arg3: string) => boolean;

        let value: SampleValue = { a: 1, b: "", c: true };
        let wrapper: SampleWrapper = (a, b, c) => true;
        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(value).wrap<SampleWrapper, SampleResult>(wrapper);
        result = _(value).wrap<SampleResult>(wrapper);
    }

    {
        type SampleWrapper = (arg1: number, arg2: number, arg3: string) => boolean;

        let value: number = 0;
        let wrapper: SampleWrapper = (a, b, c) => true;
        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(value).chain().wrap<SampleWrapper, SampleResult>(wrapper);
        result = _(value).chain().wrap<SampleResult>(wrapper);
    }

    {
        type SampleWrapper = (arg1: number[], arg2: number, arg3: string) => boolean;

        let value: number[] = [];
        let wrapper: SampleWrapper = (a, b, c) => true;
        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(value).chain().wrap<SampleWrapper, SampleResult>(wrapper);
        result = _(value).chain().wrap<SampleResult>(wrapper);
    }

    {
        type SampleWrapper = (arg1: SampleValue, arg2: number, arg3: string) => boolean;

        let value: SampleValue = { a: 1, b: "", c: true };
        let wrapper: SampleWrapper = (a, b, c) => true;
        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(value).chain().wrap<SampleWrapper, SampleResult>(wrapper);
        result = _(value).chain().wrap<SampleResult>(wrapper);
    }
}

/********
 * Lang *
 ********/

// _.castArray
namespace TestCastArray {
    {
        let result: number[];

        result = _.castArray(42);
        result = _.castArray([42]);
        result = _(42).castArray().value();
        result = _([42]).castArray().value();
        result = _(42).chain().castArray().value();
        result = _([42]).chain().castArray().value();
    }

    {
        let result: {a: number}[];

        result = _.castArray({a: 42});
        result = _.castArray([{a: 42}]);
        result = _({a: 42}).castArray().value();
        result = _([{a: 42}]).castArray().value();
        result = _({a: 42}).chain().castArray().value();
        result = _([{a: 42}]).chain().castArray().value();
    }
}

// _.clone
namespace TestClone {
    {
        let result: number;

        result = _.clone<number>(42);
        result = _(42).clone();
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(42).chain().clone();
    }

    {
        let result: string[];

        result = _.clone<string[]>(['']);
        result = _<string>(['']).clone();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _(['']).chain().clone();
    }

    {
        let result: {a: {b: number;};};

        result = _.clone<{a: {b: number;};}>({a: {b: 42}});
        result = _({a: {b: 42}}).clone();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{a: {b: number;};}>;

        result = _({a: {b: 42}}).chain().clone();
    }
}

// _.cloneDeep
namespace TestCloneDeep {
    {
        let result: number;

        result = _.cloneDeep<number>(42);
        result = _(42).cloneDeep();
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(42).chain().cloneDeep();
    }

    {
        let result: string[];

        result = _.cloneDeep<string[]>(['']);
        result = _<string>(['']).cloneDeep();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _(['']).chain().cloneDeep();
    }

    {
        let result: {a: {b: number;};};

        result = _.cloneDeep<{a: {b: number;};}>({a: {b: 42}});
        result = _({a: {b: 42}}).cloneDeep();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{a: {b: number;};}>;

        result = _({a: {b: 42}}).chain().cloneDeep();
    }
}

// _.cloneDeepWith
namespace TestCloneDeepWith {
    interface CloneDeepWithCustomizer<V, R> {
        (value: V): R;
    }

    {
        let customizer: CloneDeepWithCustomizer<number, string> = (x) => "";
        let reslut: string;

        result = _.cloneDeepWith<string>(42, customizer);
        result = _.cloneDeepWith<number, string>(42, customizer);
        result = _(42).cloneDeepWith<string>(customizer);
    }

    {
        let customizer: CloneDeepWithCustomizer<number, string> = (x) => "";
        let result: _.LoDashExplicitWrapper<string>;

        result = _(42).chain().cloneDeepWith<string>(customizer);
    }

    {
        let customizer: CloneDeepWithCustomizer<number[], string[]> = (x) => [];
        let reslut: string[];

        result = _.cloneDeepWith<string[]>([42], customizer);
        result = _.cloneDeepWith<number[], string[]>([42], customizer);
        result = _([42]).cloneDeepWith<string[]>(customizer);
    }

    {
        let customizer: CloneDeepWithCustomizer<number[], string[]> = (x) => [];
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _([42]).chain().cloneDeepWith<string>(customizer);
    }

    {
        let customizer: CloneDeepWithCustomizer<{a: {b: number;};}, {a: {b: string;};}> = (x) => ({ a: { b: "" } });
        let reslut: {a: {b: string;};};

        result = _.cloneDeepWith<{a: {b: string;};}>({a: {b: 42}}, customizer);
        result = _.cloneDeepWith<{a: {b: number;};}, {a: {b: string;};}>({a: {b: 42}}, customizer);
        result = _({a: {b: 42}}).cloneDeepWith<{a: {b: string;};}>(customizer);
    }

    {
        let customizer: CloneDeepWithCustomizer<{a: {b: number;};}, {a: {b: string;};}> = (x) => ({ a: { b: "" } });
        let result: _.LoDashExplicitObjectWrapper<{a: {b: string;};}>;

        result = _({a: {b: 42}}).chain().cloneDeepWith<{a: {b: string;};}>(customizer);
    }
}

// _.cloneWith
namespace TestCloneWith {
    interface CloneWithCustomizer<V, R> {
        (value: V): R;
    }

    {
        let customizer: CloneWithCustomizer<number, string> = (x) => "";
        let reslut: string;

        result = _.cloneWith<string>(42, customizer);
        result = _.cloneWith<number, string>(42, customizer);
        result = _(42).cloneWith<string>(customizer);
    }

    {
        let customizer: CloneWithCustomizer<number, string> = (x) => "";
        let result: _.LoDashExplicitWrapper<string>;

        result = _(42).chain().cloneWith<string>(customizer);
    }

    {
        let customizer: CloneWithCustomizer<number[], string[]> = (x) => [];
        let reslut: string[];

        result = _.cloneWith<string[]>([42], customizer);
        result = _.cloneWith<number[], string[]>([42], customizer);
        result = _([42]).cloneWith<string[]>(customizer);
    }

    {
        let customizer: CloneWithCustomizer<number[], string[]> = (x) => [];
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _([42]).chain().cloneWith<string>(customizer);
    }

    {
        let customizer: CloneWithCustomizer<{a: {b: number;};}, {a: {b: string;};}> = (x) => ({ a: { b: "" } });
        let reslut: {a: {b: string;};};

        result = _.cloneWith<{a: {b: string;};}>({a: {b: 42}}, customizer);
        result = _.cloneWith<{a: {b: number;};}, {a: {b: string;};}>({a: {b: 42}}, customizer);
        result = _({a: {b: 42}}).cloneWith<{a: {b: string;};}>(customizer);
    }

    {
        let customizer: CloneWithCustomizer<{a: {b: number;};}, {a: {b: string;};}> = (x) => ({ a: { b: "" } });
        let result: _.LoDashExplicitObjectWrapper<{a: {b: string;};}>;

        result = _({a: {b: 42}}).chain().cloneWith<{a: {b: string;};}>(customizer);
    }
}

// _.conforms
namespace TestConforms {
    let result: boolean = _.conforms({foo: (v: string) => false})({foo: "foo"});
    let result2: boolean = _.conforms({})({foo: "foo"});
}

// _.conformsTo
namespace TestConformsTo {
    let result: boolean = _.conformsTo({foo: "foo"}, {foo: (v: string) => false});
    let result2: boolean = _.conformsTo({}, {foo: (v: string) => false});
}

// _.eq
namespace TestEq {
    let customizer: (value: any, other: any, indexOrKey?: number|string) => boolean;

    {
        let result: boolean;

        result = _.eq(any, any);

        result = _(any).eq(any);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(any).chain().eq(any);
    }
}

// _.gt
namespace TestGt {
    {
        let result: boolean;

        result = _.gt(any, any);
        result = _(1).gt(any);
        result = _([]).gt(any);
        result = _({}).gt(any);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().gt(any);
        result = _([]).chain().gt(any);
        result = _({}).chain().gt(any);
    }
}

// _.gte
namespace TestGte {
    {
        let result: boolean;

        result = _.gte(any, any);
        result = _(1).gte(any);
        result = _([]).gte(any);
        result = _({}).gte(any);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().gte(any);
        result = _([]).chain().gte(any);
        result = _({}).chain().gte(any);
    }
}

// _.isArguments
namespace TestisArguments {
    {
        let value: number|IArguments = 0;

        if (_.isArguments(value)) {
            let result: IArguments = value;
        }
        else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        result = _.isArguments(any);
        result = _(1).isArguments();
        result = _<any>([]).isArguments();
        result = _({}).isArguments();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isArguments();
        result = _<any>([]).chain().isArguments();
        result = _({}).chain().isArguments();
    }
}

// _.isArray
namespace TestIsArray {
    {
        let value: number|string[]|boolean[] = any;

        if (_.isArray(value)) {
            value; // $ExpectType string[] | boolean[]
        }
        else {
            value; // $ExpectType number
        }
    }

    {
        let result: boolean;

        result = _.isArray(any);
        result = _(1).isArray();
        result = _<any>([]).isArray();
        result = _({}).isArray();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isArray();
        result = _<any>([]).chain().isArray();
        result = _({}).chain().isArray();
    }
}

// _.isArrayBuffer
namespace TestIsArrayBuffer {
    {
        let value: ArrayBuffer|number = any;

        if (_.isArrayBuffer(value)) {
            value; // $ExpectType ArrayBuffer
        }
        else {
            value; // $ExpectType number
        }
    }

    {
        let result: boolean;

        result = _.isArrayBuffer(any);
        result = _(1).isArrayBuffer();
        result = _<any>([]).isArrayBuffer();
        result = _({}).isArrayBuffer();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isArrayBuffer();
        result = _<any>([]).chain().isArrayBuffer();
        result = _({}).chain().isArrayBuffer();
    }
}

// _.isArrayLike
namespace TestIsArrayLike {
    {
        let value: string | string[] | { [index: number]: boolean, length: number } | [number, boolean]
            | number | Function | { length: string } | { a: string }
            = any;

        if (_.isArrayLike(value)) {
            let result: string | string[] | { [index: number]: boolean, length: number } | [number, boolean] = value;
        }
        else {
            let result: number | Function | { length: string } | { a: string; } = value;
        }
    }

    {
        let value: boolean[] = any;

        if (_.isArrayLike(value)) {
            let result: boolean[] = value;
        }
        else {
            value; // $ExpectType never
        }
    }

    {
        let value: Function = any;

        if (_.isArrayLike(value)) {
            value; // $ExpectType never
        }
        else {
            value; // $ExpectType Function
        }
    }

    {
        let value: { a: string } = any;

        if (_.isArrayLike(value)) {
            let result: { a: string, length: number } = value;
        }
        else {
            value; // $ExpectType { a: string; }
        }
    }

    {
        let value: any = any;

        if (_.isArrayLike(value)) {
            value; // $ExpectType any
        }
        else {
            value; // $ExpectType any
        }
    }

    {
        let result: boolean;

        result = _.isArrayLike(any);
        result = _(1).isArrayLike();
        result = _<any>([]).isArrayLike();
        result = _({}).isArrayLike();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isArrayLike();
        result = _<any>([]).chain().isArrayLike();
        result = _({}).chain().isArrayLike();
    }
}

// _.isArrayLikeObject
namespace TestIsArrayLikeObject {
    {
        let value: string[] | { [index: number]: boolean, length: number } | [number, boolean]
            | number | string | Function | { length: string } | { a: string }
            = any;

        if (_.isArrayLikeObject(value)) {
            let result: string[] | { [index: number]: boolean, length: number } | [number, boolean] = value;
        }
        else {
            let result: string | number | Function | { length: string; } | { a: string; } = value;
        }
    }

    {
        let value: boolean[] = any;

        if (_.isArrayLikeObject(value)) {
            let result: boolean[] = value;
        }
        else {
            value; // $ExpectType never
        }
    }

    {
        let value: string | Function = any;

        if (_.isArrayLikeObject(value)) {
            value; // $ExpectType never
        }
        else {
            value; // $ExpectType string | Function
        }
    }

    {
        let value: { a: string } = any;

        if (_.isArrayLikeObject(value)) {
            let result: { a: string, length: number } = value;
        }
        else {
            value; // $ExpectType { a: string; }
        }
    }

    {
        let value: any = any;

        if (_.isArrayLikeObject(value)) {
            value; // $ExpectType any
        }
        else {
            value; // $ExpectType any
        }
    }

    {
        let result: boolean;

        result = _.isArrayLikeObject(any);
        result = _(1).isArrayLikeObject();
        result = _<any>([]).isArrayLikeObject();
        result = _({}).isArrayLikeObject();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isArrayLikeObject();
        result = _<any>([]).chain().isArrayLikeObject();
        result = _({}).chain().isArrayLikeObject();
    }
}

// _.isBoolean
namespace TestIsBoolean {
    {
        let value: number|boolean = 0;

        if (_.isBoolean(value)) {
            let result: boolean = value;
        }
        else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        result = _.isBoolean(any);
        result = _(1).isBoolean();
        result = _<any>([]).isBoolean();
        result = _({}).isBoolean();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isBoolean();
        result = _<any>([]).chain().isBoolean();
        result = _({}).chain().isBoolean();
    }
}

// _.isBuffer
namespace TestIsBuffer {
    {
        let result: boolean;

        result = _.isBuffer(any);
        result = _(1).isBuffer();
        result = _<any>([]).isBuffer();
        result = _({}).isBuffer();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isBuffer();
        result = _<any>([]).chain().isBuffer();
        result = _({}).chain().isBuffer();
    }
}

// _.isDate
namespace TestIsBoolean {
    {
        let value: number|Date = 0;

        if (_.isDate(value)) {
            let result: Date = value;
        }
        else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        result = _.isDate(any);
        result = _(42).isDate();
        result = _<any>([]).isDate();
        result = _({}).isDate();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(42).chain().isDate();
        result = _<any>([]).chain().isDate();
        result = _({}).chain().isDate();
    }
}

// _.isElement
namespace TestIsElement {
    {
        let result: boolean;

        result = _.isElement(any);

        result = _(42).isElement();
        result = _<any>([]).isElement();
        result = _({}).isElement();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(42).chain().isElement();
        result = _<any>([]).chain().isElement();
        result = _({}).chain().isElement();
    }
}

// _.isEmpty
namespace TestIsEmpty {
    {
        let result: boolean;

        result = _.isEmpty(any);
        result = _(1).isEmpty();
        result = _('').isEmpty();
        result = _<any>([]).isEmpty();
        result = _({}).isEmpty();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isEmpty();
        result = _('').chain().isEmpty();
        result = _<any>([]).chain().isEmpty();
        result = _({}).chain().isEmpty();
    }
}

// _.isEqual
namespace TestIsEqual {
    let customizer: (value: any, other: any, indexOrKey?: number|string) => boolean;

    {
        let result: boolean;

        result = _.isEqual(any, any);

        result = _(any).isEqual(any);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(any).chain().isEqual(any);
    }
}

// _.isEqualWith
namespace TestIsEqualWith {
    let customizer = (value: any, other: any, indexOrKey: number|string|undefined, parent: any, otherParent: any, stack: any) => {
        return value ? undefined : true;
    };

    {
        let result: boolean;

        result = _.isEqualWith(any, any, customizer);

        result = _(any).isEqualWith(any, customizer);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(any).chain().isEqualWith(any, customizer);
    }
}

// _.isError
namespace TestIsError {
    let x: any = 1;
    {
        let value: number|Error = x;

        if (_.isError(value)) {
            let result: Error = value;
        }
        else {
            let result: number = value;
        }
    }

    {
        class CustomError extends Error {
            custom: string
        }

        let value: number|CustomError = x;

        if (_.isError(value)) {
            let result: CustomError = value;
        }
        else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        result = _.isError(any);
        result = _(1).isError();
        result = _<any>([]).isError();
        result = _({}).isError();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isError();
        result = _<any>([]).chain().isError();
        result = _({}).chain().isError();
    }
}

// _.isFinite
namespace TestIsFinite {
    {
        let result: boolean;

        result = _.isFinite(any);
        result = _(1).isFinite();
        result = _<any>([]).isFinite();
        result = _({}).isFinite();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isFinite();
        result = _<any>([]).chain().isFinite();
        result = _({}).chain().isFinite();
    }
}

// _.isFunction
namespace TestIsFunction {
    {
        let value: number|Function = () => {};

        if (_.isFunction(value)) {
            let result: Function = value;
        }
        else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        result = _.isFunction(any);
        result = _(1).isFunction();
        result = _<any>([]).isFunction();
        result = _({}).isFunction();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isFunction();
        result = _<any>([]).chain().isFunction();
        result = _({}).chain().isFunction();
    }
}

// _.isInteger
namespace TestIsInteger {
    {
        let result: boolean;

        result = _.isInteger(any);

        result = _(1).isInteger();
        result = _<any>([]).isInteger();
        result = _({}).isInteger();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isInteger();
        result = _<any>([]).chain().isInteger();
        result = _({}).chain().isInteger();
    }
}

// _.isLength
namespace TestIsLength {
    {
        let result: boolean;

        result = _.isLength(any);

        result = _(1).isLength();
        result = _<any>([]).isLength();
        result = _({}).isLength();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isLength();
        result = _<any>([]).chain().isLength();
        result = _({}).chain().isLength();
    }
}

// _.isMap
namespace TestIsMap {
    {
        let value: number|Map<string, number> = 0;

        if (_.isMap<string, number>(value)) {
            let result: Map<string, number> = value;
        }
        else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        result = _.isMap(any);
        result = _(1).isMap();
        result = _<any>([]).isMap();
        result = _({}).isMap();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isMap();
        result = _<any>([]).chain().isMap();
        result = _({}).chain().isMap();
    }
}

// _.isMatch
namespace TestIsMatch {
    let testIsMatchCustiomizerFn: (value: any, other: any, indexOrKey: number|string) => boolean;

    let result: boolean;

    result = <boolean>_.isMatch({}, {});
    result = <boolean>_({}).isMatch({});
}

// _.isMatchWith
namespace TestIsMatchWith {
    let testIsMatchCustiomizerFn = (value: any, other: any, indexOrKey: number|string) => true;

    let result: boolean;

    result = <boolean>_.isMatchWith({}, {}, testIsMatchCustiomizerFn);
    result = <boolean>_({}).isMatchWith({}, testIsMatchCustiomizerFn);
}

// _.isNaN
namespace TestIsNaN {
    {
        let result: boolean;

        result = _.isNaN(any);

        result = _(1).isNaN();
        result = _<any>([]).isNaN();
        result = _({}).isNaN();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isNaN();
        result = _<any>([]).chain().isNaN();
        result = _({}).chain().isNaN();
    }
}

// _.isNative
namespace TestIsNative {
    {
        let value: number|Function = () => {};

        if (_.isNative(value)) {
            let result: Function = value;
        }
        else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        result = _.isNative(any);

        result = _(1).isNative();
        result = _<any>([]).isNative();
        result = _({}).isNative();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isNative();
        result = _<any>([]).chain().isNative();
        result = _({}).chain().isNative();
    }
}

// _.isNil
namespace TestIsNil {
    {
        let result: boolean;

        result = _.isNil(any);

        result = _(1).isNil();
        result = _<any>([]).isNil();
        result = _({}).isNil();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isNil();
        result = _<any>([]).chain().isNil();
        result = _({}).chain().isNil();
    }
}

// _.isNull
namespace TestIsNull {
    {
        let result: boolean;

        result = _.isNull(any);

        result = _(1).isNull();
        result = _<any>([]).isNull();
        result = _({}).isNull();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isNull();
        result = _<any>([]).chain().isNull();
        result = _({}).chain().isNull();
    }
}

// _.isNumber
namespace TestIsNumber {
    {
        let value: string|number = 0;

        if (_.isNumber(value)) {
            let result: number = value;
        }
        else {
            let result: string = value;
        }
    }

    {
        let result: boolean;

        result = _.isNumber(any);

        result = _(1).isNumber();
        result = _<any>([]).isNumber();
        result = _({}).isNumber();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isNumber();
        result = _<any>([]).chain().isNumber();
        result = _({}).chain().isNumber();
    }
}

// _.isObject
namespace TestIsObject {
    {
        let result: boolean;

        result = _.isObject(any);
        result = _(1).isObject();
        result = _<any>([]).isObject();
        result = _({}).isObject();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isObject();
        result = _<any>([]).chain().isObject();
        result = _({}).chain().isObject();
    }
}

// _.isObjectLike
namespace TestIsObjectLike {
    {
        let result: boolean;

        result = _.isObjectLike(any);
        result = _(1).isObjectLike();
        result = _<any>([]).isObjectLike();
        result = _({}).isObjectLike();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isObjectLike();
        result = _<any>([]).chain().isObjectLike();
        result = _({}).chain().isObjectLike();
    }
}

// _.isPlainObject
namespace TestIsPlainObject {
    {
        let result: boolean;

        result = _.isPlainObject(any);
        result = _(1).isPlainObject();
        result = _<any>([]).isPlainObject();
        result = _({}).isPlainObject();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isPlainObject();
        result = _<any>([]).chain().isPlainObject();
        result = _({}).chain().isPlainObject();
    }
}

// _.isRegExp
namespace TestIsRegExp {
    {
        let value: number|RegExp = /./;

        if (_.isRegExp(value)) {
            let result: RegExp = value;
        }
        else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        result = _.isRegExp(any);
        result = _(1).isRegExp();
        result = _<any>([]).isRegExp();
        result = _({}).isRegExp();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isRegExp();
        result = _<any>([]).chain().isRegExp();
        result = _({}).chain().isRegExp();
    }
}

// _.isSafeInteger
namespace TestIsSafeInteger {
    {
        let result: boolean;

        result = _.isSafeInteger(any);

        result = _(1).isSafeInteger();
        result = _<any>([]).isSafeInteger();
        result = _({}).isSafeInteger();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isSafeInteger();
        result = _<any>([]).chain().isSafeInteger();
        result = _({}).chain().isSafeInteger();
    }
}

// _.isSet
namespace TestIsSet {
    {
        let value: number|Set<string> = 0;

        if (_.isSet<string>(value)) {
            let result: Set<string> = value;
        }
        else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        result = _.isSet(any);
        result = _(1).isSet();
        result = _<any>([]).isSet();
        result = _({}).isSet();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isSet();
        result = _<any>([]).chain().isSet();
        result = _({}).chain().isSet();
    }
}

// _.isString
namespace TestIsString {
    {
        let value: number|string = '';

        if (_.isString(value)) {
            let result: string = value;
        }
        else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        result = _.isString(any);
        result = _(1).isString();
        result = _<any>([]).isString();
        result = _({}).isString();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isString();
        result = _<any>([]).chain().isString();
        result = _({}).chain().isString();
    }
}

// _.isSymbol
namespace TestIsSymbol {
    {
        let result: boolean;

        result = _.isSymbol(any);

        result = _(1).isSymbol();
        result = _<any>([]).isSymbol();
        result = _({}).isSymbol();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isSymbol();
        result = _<any>([]).chain().isSymbol();
        result = _({}).chain().isSymbol();
    }
}

// _.isTypedArray
namespace TestIsTypedArray {
    {
        let result: boolean;

        result = _.isTypedArray([]);
        result = _([]).isTypedArray();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _([]).chain().isTypedArray();
    }
}

// _.isUndefined
namespace TestIsUndefined {
    {
        let result: boolean;

        result = _.isUndefined(any);

        result = _(1).isUndefined();
        result = _<any>([]).isUndefined();
        result = _({}).isUndefined();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isUndefined();
        result = _<any>([]).chain().isUndefined();
        result = _({}).chain().isUndefined();
    }
}

// _.isWeakMap
namespace TestIsWeakMap {
    {
        interface Obj { a: string };

        let value: number|WeakMap<Obj, number> = 0;

        if (_.isWeakMap<Obj, number>(value)) {
            let result: WeakMap<Obj, number> = value;
        }
        else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        result = _.isWeakMap(any);
        result = _(1).isWeakMap();
        result = _<any>([]).isWeakMap();
        result = _({}).isWeakMap();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isWeakMap();
        result = _<any>([]).chain().isWeakMap();
        result = _({}).chain().isWeakMap();
    }
}

// _.isWeakSet
namespace TestIsWeakSet {
    {
        let value: number|WeakSet<string> = 0;

        if (_.isWeakSet<string>(value)) {
            let result: WeakSet<string> = value;
        }
        else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        result = _.isWeakSet(any);
        result = _(1).isWeakSet();
        result = _<any>([]).isWeakSet();
        result = _({}).isWeakSet();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isWeakSet();
        result = _<any>([]).chain().isWeakSet();
        result = _({}).chain().isWeakSet();
    }
}

// _.lt
namespace TestLt {
    {
        let result: boolean;

        result = _.lt(any, any);
        result = _(1).lt(any);
        result = _([]).lt(any);
        result = _({}).lt(any);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().lt(any);
        result = _([]).chain().lt(any);
        result = _({}).chain().lt(any);
    }
}

// _.lte
namespace TestLte {
    {
        let result: boolean;

        result = _.lte(any, any);
        result = _(1).lte(any);
        result = _([]).lte(any);
        result = _({}).lte(any);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().lte(any);
        result = _([]).chain().lte(any);
        result = _({}).chain().lte(any);
    }
}

// _.toArray
namespace TestToArray {
    let array: TResult[] = [];
    let list: _.List<TResult> = [];
    let dictionary: _.Dictionary<TResult> = {};
    let numericDictionary: _.NumericDictionary<TResult> = {};

    {
        let result: string[];

        result = _.toArray<string>('');
        result = _.toArray('');
    }

    {
        let result: TResult[];

        result = _.toArray<TResult>(array);
        result = _.toArray<TResult>(list);
        result = _.toArray<TResult>(dictionary);
        result = _.toArray<TResult>(numericDictionary);

        result = _.toArray(array);
        result = _.toArray(list);
        result = _.toArray(dictionary);
        result = _.toArray(numericDictionary);
    }

    {
        let result: any[];

        result = _.toArray();
        result = _.toArray(42);
        result = _.toArray(true);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).toArray();
        result = _(list).toArray<TResult>();
        result = _(dictionary).toArray<TResult>();
        result = _(numericDictionary).toArray<TResult>();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().toArray();
        result = _(list).chain().toArray<TResult>();
        result = _(dictionary).chain().toArray<TResult>();
        result = _(numericDictionary).chain().toArray<TResult>();
    }
}

// _.toPlainObject
namespace TestToPlainObject {
    {
        let result: TResult;
        result = _.toPlainObject<TResult>();
        result = _.toPlainObject<TResult>(true);
        result = _.toPlainObject<TResult>(1);
        result = _.toPlainObject<TResult>('a');
        result = _.toPlainObject<TResult>([]);
        result = _.toPlainObject<TResult>({});
    }

    {
        let result: _.LoDashImplicitObjectWrapper<TResult>;

        result = _(true).toPlainObject<TResult>();
        result = _(1).toPlainObject<TResult>();
        result = _('a').toPlainObject<TResult>();
        result = _([1]).toPlainObject<TResult>();
        result = _<string>([]).toPlainObject<TResult>();
        result = _({}).toPlainObject<TResult>();
    }
}

// _.toFinite
namespace TestToFinite {
   {
       let result: number;
       result = _.toFinite(true);
       result = _.toFinite(1);
       result = _.toFinite('3.2');
       result = _.toFinite([]);
       result = _.toFinite({});
   }

   {
       let result: _.LoDashImplicitWrapper<number>;

       result = _(true).toFinite();
       result = _(1).toFinite();
       result = _('3.2').toFinite();
       result = _([1]).toFinite();
       result = _<string>([]).toFinite();
       result = _({}).toFinite();
   }
}

// _.toInteger
namespace TestToInteger {
   {
       let result: number;
       result = _.toInteger(true);
       result = _.toInteger(1);
       result = _.toInteger('3.2');
       result = _.toInteger([]);
       result = _.toInteger({});
   }

   {
       let result: _.LoDashImplicitWrapper<number>;

       result = _(true).toInteger();
       result = _(1).toInteger();
       result = _('a').toInteger();
       result = _([1]).toInteger();
       result = _<string>([]).toInteger();
       result = _({}).toInteger();
   }
}

// _.toLength
namespace TestToLength {
   {
       let result: number;
       result = _.toLength(true);
       result = _.toLength(1);
       result = _.toLength('a');
       result = _.toLength([]);
       result = _.toLength({});
   }

   {
       let result: _.LoDashImplicitWrapper<number>;

       result = _(true).toLength();
       result = _(1).toLength();
       result = _('a').toLength();
       result = _([1]).toLength();
       result = _<string>([]).toLength();
       result = _({}).toLength();
   }
}

// _.toNumber
namespace TestToNumber {
   {
       let result: number;
       result = _.toNumber(true);
       result = _.toNumber(1);
       result = _.toNumber('a');
       result = _.toNumber([]);
       result = _.toNumber({});
   }

   {
       let result: _.LoDashImplicitWrapper<number>;

       result = _(true).toNumber();
       result = _(1).toNumber();
       result = _('a').toNumber();
       result = _([1]).toNumber();
       result = _<string>([]).toNumber();
       result = _({}).toNumber();
   }
}

// _.toSafeInteger
namespace TestToSafeInteger {
   {
       let result: number;
       result = _.toSafeInteger(true);
       result = _.toSafeInteger(1);
       result = _.toSafeInteger('a');
       result = _.toSafeInteger([]);
       result = _.toSafeInteger({});
   }

   {
       let result: _.LoDashImplicitWrapper<number>;

       result = _(true).toSafeInteger();
       result = _(1).toSafeInteger();
       result = _('a').toSafeInteger();
       result = _([1]).toSafeInteger();
       result = _<string>([]).toSafeInteger();
       result = _({}).toSafeInteger();
   }
}

/********
 * Math *
 ********/

// _.add
namespace TestAdd {
    {
        let result: number;

        result = _.add(1, 1);
        result = _(1).add(1);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(1).chain().add(1);
    }
}

// _.ceil
namespace TestCeil {
    {
        let result: number;

        result = _.ceil(6.004);
        result = _.ceil(6.004, 2);

        result = _(6.004).ceil();
        result = _(6.004).ceil(2);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(6.004).chain().ceil();
        result = _(6.004).chain().ceil(2);
    }
}

// _.divide
namespace TestDivide {
    {
        let result: number;

        result = _.divide(6, 4);

        result = _(6).divide(4);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(6).chain().floor(4);
    }
}

// _.floor
namespace TestFloor {
    {
        let result: number;

        result = _.floor(4.006);
        result = _.floor(0.046, 2);
        result = _.floor(4060, -2);

        result = _(4.006).floor();
        result = _(0.046).floor(2);
        result = _(4060).floor(-2);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(4.006).chain().floor();
        result = _(0.046).chain().floor(2);
        result = _(4060).chain().floor(-2);
    }
}

// _.max
namespace TestMax {
    let array: number[] = [];
    let list: _.List<number> = [];

    let result: number | undefined;

    result = _.max<number>(array);
    result = _.max<number>(list);

    result = _(array).max();
    result = _(list).max<number>();
}

// _.maxBy
namespace TestMaxBy {
    let array: number[] = [];
    let list: _.List<number> = [];
    let dictionary: _.Dictionary<number> = {};

    let listIterator = (value: number, index: number, collection: _.List<number>) => 0;
    let dictionaryIterator = (value: number, key: string, collection: _.Dictionary<number>) => 0;

    let result: number | undefined;

    result = _.maxBy<number>(array);
    result = _.maxBy<number>(array, listIterator);
    result = _.maxBy<number>(array, '');
    result = _.maxBy<{a: number}, number>(array, {a: 42});

    result = _.maxBy<number>(list);
    result = _.maxBy<number>(list, listIterator);
    result = _.maxBy<number>(list, '');
    result = _.maxBy<{a: number}, number>(list, {a: 42});

    result = _.maxBy<number>(dictionary);
    result = _.maxBy<number>(dictionary, dictionaryIterator);
    result = _.maxBy<number>(dictionary, '');
    result = _.maxBy<{a: number}, number>(dictionary, {a: 42});

    result = _(array).maxBy();
    result = _(array).maxBy(listIterator);
    result = _(array).maxBy('');
    result = _(array).maxBy<{a: number}>({a: 42});

    result = _(list).maxBy<number>();
    result = _(list).maxBy<number>(listIterator);
    result = _(list).maxBy<number>('');
    result = _(list).maxBy<{a: number}, number>({a: 42});

    result = _(dictionary).maxBy<number>();
    result = _(dictionary).maxBy<number>(dictionaryIterator);
    result = _(dictionary).maxBy<number>('');
    result = _(dictionary).maxBy<{a: number}, number>({a: 42});
}

// _.mean
namespace TestMean {
    let array: number[] = [];

    let result: number;

    result = _.mean(array);
    result = _.mean<number>(array);

    result = _(array).mean();
}

// _.meanBy
namespace TestMean {
    let array: TResult[] = [];

    let result: number;

    result = _.meanBy(array, (x) => x.a);
    result = _.meanBy(array, 'a');

    result = _(array).mean();
}

// _.min
namespace TestMin {
    let array: number[] = [];
    let list: _.List<number> = [];

    let result: number | undefined;

    result = _.min<number>(array);
    result = _.min<number>(list);

    result = _(array).min();
    result = _(list).min<number>();
}

// _.minBy
namespace TestMinBy {
    let array: number[] = [];
    let list: _.List<number> = [];
    let dictionary: _.Dictionary<number> = {};

    let listIterator = (value: number, index: number, collection: _.List<number>) => 0;
    let dictionaryIterator = (value: number, key: string, collection: _.Dictionary<number>) => 0;

    let result: number | undefined;

    result = _.minBy<number>(array);
    result = _.minBy<number>(array, listIterator);
    result = _.minBy<number>(array, '');
    result = _.minBy<{a: number}, number>(array, {a: 42});

    result = _.minBy<number>(list);
    result = _.minBy<number>(list, listIterator);
    result = _.minBy<number>(list, '');
    result = _.minBy<{a: number}, number>(list, {a: 42});

    result = _.minBy<number>(dictionary);
    result = _.minBy<number>(dictionary, dictionaryIterator);
    result = _.minBy<number>(dictionary, '');
    result = _.minBy<{a: number}, number>(dictionary, {a: 42});

    result = _(array).minBy();
    result = _(array).minBy(listIterator);
    result = _(array).minBy('');
    result = _(array).minBy<{a: number}>({a: 42});

    result = _(list).minBy<number>();
    result = _(list).minBy<number>(listIterator);
    result = _(list).minBy<number>('');
    result = _(list).minBy<{a: number}, number>({a: 42});

    result = _(dictionary).minBy<number>();
    result = _(dictionary).minBy<number>(dictionaryIterator);
    result = _(dictionary).minBy<number>('');
    result = _(dictionary).minBy<{a: number}, number>({a: 42});
}

// _.multiply
namespace TestMultiply {
    {
        let result: number;

        result = _.multiply(6, 4);

        result = _(6).multiply(4);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(6).chain().multiply(4);
    }
}

// _.round
namespace TestRound {
    {
        let result: number;

        result = _.round(4.006);
        result = _.round(4.006, 2);

        result = _(4.006).round();
        result = _(4.006).round(2);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(4.006).chain().round();
        result = _(4.006).chain().round(2);
    }
}

// _.sum
namespace TestSum {
    let array: number[] | null | undefined = [] as any;
    let list: _.List<number> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<number> | null | undefined = obj;

    let listIterator = (value: number, index: number, collection: _.List<number>) => 0;
    let dictionaryIterator = (value: number, key: string, collection: _.Dictionary<number>) => 0;

    {
        let result: number;

        result = _.sum(array);
        result = _.sum<number>(array);

        result = _.sum(list);
        result = _.sum<number>(list);

        result = _(array).sum();

        result = _(list).sum();

        result = _(dictionary).sum();
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(array).chain().sum();

        result = _(list).chain().sum();

        result = _(dictionary).chain().sum();
    }
}

// _.sumBy
namespace TestSumBy {
    let array: number[] | null | undefined = [] as any;
    let objectArray: { 'age': number }[] | null | undefined = [] as any;

    let list: _.List<number> | null | undefined = [] as any;
    let objectList: _.List<{ 'age': number }> | null | undefined = [] as any;

    let listIterator = (value: number, index: number, collection: _.List<number>) => 0;

    {
        let result: number;

        result = _.sumBy(array);
        result = _.sumBy(array, listIterator);
        result = _.sumBy(objectArray, 'age');
        result = _.sumBy(objectArray, { 'age': 30 });

        result = _.sumBy(list);
        result = _.sumBy(list, listIterator);
        result = _.sumBy(objectList, 'age');
        result = _.sumBy(objectList, { 'age': 30 });

        result = _(array).sumBy(listIterator);
        result = _(objectArray).sumBy('age');

        result = _(list).sumBy(listIterator);
        result = _(objectList).sumBy('age');
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(array).chain().sumBy(listIterator);
        result = _(objectArray).chain().sumBy('age');

        result = _(list).chain().sumBy(listIterator);
        result = _(objectList).chain().sumBy('age');
    }
}

/**********
 * Number *
 **********/

 // _.subtract
 namespace subtract {
     {
         let result: number;

         result = _.subtract(3, 2);

         result = _(3).subtract(2);
     }

     {
         let result: _.LoDashExplicitWrapper<number>;

         result = _(3).chain().subtract(2);
     }
 }

// _.clamp
namespace TestInClamp {
    {
        let result: number;

        result = _.clamp(3, 2, 4);

        result = _(3).clamp(2, 4);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(3).chain().clamp(2, 4);
    }
}

// _.inRange
namespace TestInRange {
    {
        let result: boolean;

        result = _.inRange(3, 2, 4);
        result = _.inRange(4, 8);

        result = _(3).inRange(2, 4);
        result = _(4).inRange(8);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(3).chain().inRange(2, 4);
        result = _(4).chain().inRange(8);
    }
}

// _.random
namespace TestRandom {
    {
        let result: number;

        result = _.random();
        result = _.random(1);
        result = _.random(1, 2);
        result = _.random(1, 2, true);
        result = _.random(1, true);
        result = _.random(true);

        result = _(1).random();
        result = _(1).random(2);
        result = _(1).random(2, true);
        result = _(1).random(true);
        result = _(true).random();
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(1).chain().random();
        result = _(1).chain().random(2);
        result = _(1).chain().random(2, true);
        result = _(1).chain().random(true);
        result = _(true).chain().random();
    }
}

/**********
 * Object *
 **********/

// _.assign
namespace TestAssign {
    interface Obj { a: string };
    interface S1 { a: number };
    interface S2 { b: number };
    interface S3 { c: number };
    interface S4 { d: number };
    interface S5 { e: number };

    let obj: Obj = { a: "" };
    let s1: S1 = { a: 1 };
    let s2: S2 = { b: 1 };
    let s3: S3 = { c: 1 };
    let s4: S4 = { d: 1 };
    let s5: S5 = { e: 1 };

    {
        let result: Obj;

        result = _.assign(obj);
    }

    {
        let result: { a: number };

        result = _.assign(obj, s1);
    }

    {
        let result: { a: number, b: number };

        result = _.assign(obj, s1, s2);
    }

    {
        let result: { a: number, b: number, c: number };

        result = _.assign(obj, s1, s2, s3);
    }

    {
        let result: { a: number, b: number, c: number, d: number };

        result = _.assign(obj, s1, s2, s3, s4);
    }

    {
        let result: { a: number, b: number, c: number, d: number, e: number };

        result = _.assign<{ a: number, b: number, c: number, d: number, e: number }>(obj, s1, s2, s3, s4, s5);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<Obj>;

        result = _(obj).assign();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number }>;

        result = _(obj).assign(s1);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number, b: number }>;

        result = _(obj).assign(s1, s2);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number, b: number, c: number }>;

        result = _(obj).assign(s1, s2, s3);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number, b: number, c: number, d: number }>;

        result = _(obj).assign(s1, s2, s3, s4);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number, b: number, c: number, d: number, e: number }>;

        result = _(obj).assign<{ a: number, b: number, c: number, d: number, e: number }>(s1, s2, s3, s4, s5);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<Obj>;

        result = _(obj).chain().assign();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number }>;

        result = _(obj).chain().assign(s1);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number, b: number }>;

        result = _(obj).chain().assign(s1, s2);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number, b: number, c: number }>;

        result = _(obj).chain().assign(s1, s2, s3);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number, b: number, c: number, d: number }>;

        result = _(obj).chain().assign(s1, s2, s3, s4);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number, b: number, c: number, d: number, e: number }>;

        result = _(obj).chain().assign<{ a: number, b: number, c: number, d: number, e: number }>(s1, s2, s3, s4, s5);
    }
}

// _.assignWith
namespace TestAssignWith {
    interface Obj { a: string };
    interface S1 { a: number };
    interface S2 { b: number };
    interface S3 { c: number };
    interface S4 { d: number };
    interface S5 { e: number };

    let obj: Obj = { a: "" };
    let s1: S1 = { a: 1 };
    let s2: S2 = { b: 1 };
    let s3: S3 = { c: 1 };
    let s4: S4 = { d: 1 };
    let s5: S5 = { e: 1 };

    let customizer: (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => any = (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => 1;

    {
        let result: Obj;

        result = _.assignWith(obj);
    }

    {
        let result: { a: number };
        result = _.assignWith(obj, s1, customizer);
    }

    {
        let result: { a: number, b: number };
        result = _.assignWith(obj, s1, s2, customizer);
    }

    {
        let result: { a: number, b: number, c: number };
        result = _.assignWith(obj, s1, s2, s3, customizer);
    }

    {
        let result: { a: number, b: number, c: number, d: number };
        result = _.assignWith(obj, s1, s2, s3, s4, customizer);
    }

    {
        let result: { a: number, b: number, c: number, d: number, e: number };
        result = _.assignWith<{ a: number, b: number, c: number, d: number, e: number }>(obj, s1, s2, s3, s4, s5, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<Obj>;

        result = _(obj).assignWith();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number }>;
        result = _(obj).assignWith(s1, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number, b: number }>;
        result = _(obj).assignWith(s1, s2, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number, b: number, c: number }>;
        result = _(obj).assignWith(s1, s2, s3, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number, b: number, c: number, d: number }>;
        result = _(obj).assignWith(s1, s2, s3, s4, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number, b: number, c: number, d: number, e: number }>;
        result = _(obj).assignWith<{ a: number, b: number, c: number, d: number, e: number }>(s1, s2, s3, s4, s5, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<Obj>;

        result = _(obj).chain().assignWith();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number }>;
        result = _(obj).chain().assignWith(s1, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number, b: number }>;
        result = _(obj).chain().assignWith(s1, s2, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number, b: number, c: number }>;
        result = _(obj).chain().assignWith(s1, s2, s3, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number, b: number, c: number, d: number }>;
        result = _(obj).chain().assignWith(s1, s2, s3, s4, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number, b: number, c: number, d: number, e: number }>;
        result = _(obj).chain().assignWith<{ a: number, b: number, c: number, d: number, e: number }>(s1, s2, s3, s4, s5, customizer);
    }
}

// _.assignIn
namespace TestAssignIn {
    interface Obj { a: string };
    interface S1 { a: number };
    interface S2 { b: number };
    interface S3 { c: number };
    interface S4 { d: number };
    interface S5 { e: number };

    let obj: Obj = { a: "" };
    let s1: S1 = { a: 1 };
    let s2: S2 = { b: 1 };
    let s3: S3 = { c: 1 };
    let s4: S4 = { d: 1 };
    let s5: S5 = { e: 1 };

    let customizer: (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => any = (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => 1;

    {
        let result: Obj;

        result = _.assignIn(obj);
    }

    {
        let result: { a: number };

        result = _.assignIn(obj, s1);
    }

    {
        let result: { a: number, b: number };

        result = _.assignIn(obj, s1, s2);
    }

    {
        let result: { a: number, b: number, c: number };

        result = _.assignIn(obj, s1, s2, s3);
    }

    {
        let result: { a: number, b: number, c: number, d: number };

        result = _.assignIn(obj, s1, s2, s3, s4);
    }

    {
        let result: { a: number, b: number, c: number, d: number, e: number };

        result = _.assignIn<{ a: number, b: number, c: number, d: number, e: number }>(obj, s1, s2, s3, s4, s5);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<Obj>;

        result = _(obj).assignIn();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number }>;

        result = _(obj).assignIn(s1);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number, b: number }>;

        result = _(obj).assignIn(s1, s2);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number, b: number, c: number }>;

        result = _(obj).assignIn(s1, s2, s3);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number, b: number, c: number, d: number }>;

        result = _(obj).assignIn(s1, s2, s3, s4);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number, b: number, c: number, d: number, e: number }>;

        result = _(obj).assignIn<{ a: number, b: number, c: number, d: number, e: number }>(s1, s2, s3, s4, s5);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<Obj>;

        result = _(obj).chain().assignIn();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number }>;

        result = _(obj).chain().assignIn(s1);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number, b: number }>;

        result = _(obj).chain().assignIn(s1, s2);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number, b: number, c: number }>;

        result = _(obj).chain().assignIn(s1, s2, s3);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number, b: number, c: number, d: number }>;

        result = _(obj).chain().assignIn(s1, s2, s3, s4);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number, b: number, c: number, d: number, e: number }>;

        result = _(obj).chain().assignIn<{ a: number, b: number, c: number, d: number, e: number }>(s1, s2, s3, s4, s5);
    }
}

// _.assignInWith
namespace TestAssignInWith {
    interface Obj { a: string };
    interface S1 { a: number };
    interface S2 { b: number };
    interface S3 { c: number };
    interface S4 { d: number };
    interface S5 { e: number };

    let obj: Obj = { a: "" };
    let s1: S1 = { a: 1 };
    let s2: S2 = { b: 1 };
    let s3: S3 = { c: 1 };
    let s4: S4 = { d: 1 };
    let s5: S5 = { e: 1 };

    let customizer: (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => any = (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => 1;

    {
        let result: Obj;

        result = _.assignInWith(obj);
    }

    {
        let result: { a: number };
        result = _.assignInWith(obj, s1, customizer);
    }

    {
        let result: { a: number, b: number };
        result = _.assignInWith(obj, s1, s2, customizer);
    }

    {
        let result: { a: number, b: number, c: number };
        result = _.assignInWith(obj, s1, s2, s3, customizer);
    }

    {
        let result: { a: number, b: number, c: number, d: number };
        result = _.assignInWith(obj, s1, s2, s3, s4, customizer);
    }

    {
        let result: { a: number, b: number, c: number, d: number, e: number };
        result = _.assignInWith<{ a: number, b: number, c: number, d: number, e: number }>(obj, s1, s2, s3, s4, s5, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<Obj>;

        result = _(obj).assignInWith();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number }>;
        result = _(obj).assignInWith(s1, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number, b: number }>;
        result = _(obj).assignInWith(s1, s2, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number, b: number, c: number }>;
        result = _(obj).assignInWith(s1, s2, s3, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number, b: number, c: number, d: number }>;
        result = _(obj).assignInWith(s1, s2, s3, s4, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number, b: number, c: number, d: number, e: number }>;
        result = _(obj).assignInWith<{ a: number, b: number, c: number, d: number, e: number }>(s1, s2, s3, s4, s5, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<Obj>;

        result = _(obj).chain().assignInWith();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number }>;
        result = _(obj).chain().assignInWith(s1, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number, b: number }>;
        result = _(obj).chain().assignInWith(s1, s2, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number, b: number, c: number }>;
        result = _(obj).chain().assignInWith(s1, s2, s3, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number, b: number, c: number, d: number }>;
        result = _(obj).chain().assignInWith(s1, s2, s3, s4, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number, b: number, c: number, d: number, e: number }>;
        result = _(obj).chain().assignInWith<{ a: number, b: number, c: number, d: number, e: number }>(s1, s2, s3, s4, s5, customizer);
    }
}

// _.create
namespace TestCreate {
    type SampleProto = {a: number};
    type SampleProps = {b: string};

    let prototype: SampleProto = { a: 1 };
    let properties: SampleProps = { b: "" };

    {
        let result: {a: number; b: string};

        result = _.create<SampleProto, SampleProps>(prototype, properties);
        result = _.create(prototype, properties);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{a: number; b: string}>;

        result = _(prototype).create<SampleProps>(properties);
        result = _(prototype).create(properties);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{a: number; b: string}>;

        result = _(prototype).chain().create<SampleProps>(properties);
        result = _(prototype).chain().create(properties);
    }
}

// _.defaults
namespace TestDefaults {
  interface Obj { a: string };
  interface S1 { a: number };
  interface S2 { b: number };
  interface S3 { c: number };
  interface S4 { d: number };
  interface S5 { e: number };

    let obj: Obj = { a: "" };
    let s1: S1 = { a: 1 };
    let s2: S2 = { b: 1 };
    let s3: S3 = { c: 1 };
    let s4: S4 = { d: 1 };
    let s5: S5 = { e: 1 };

    {
    let result: Obj;

    result = _.defaults(obj);
    }

    {
    let result: { a: string };

    result = _.defaults(obj, s1);
    }

    {
    let result: { a: string, b: number };

    result = _.defaults(obj, s1, s2);
    }

    {
    let result: { a: string, b: number, c: number };

    result = _.defaults(obj, s1, s2, s3);
    }

    {
    let result: { a: string, b: number, c: number, d: number };

    result = _.defaults(obj, s1, s2, s3, s4);
    }

    {
    let result: { a: string, b: number, c: number, d: number, e: number };

    result = _.defaults<{ a: string, b: number, c: number, d: number, e: number }>(obj, s1, s2, s3, s4, s5);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<Obj>;

        result = _(obj).defaults();
    }

    {
    let result: _.LoDashImplicitObjectWrapper<{ a: string }>;

    result = _(obj).defaults(s1);
    }

    {
    let result: _.LoDashImplicitObjectWrapper<{ a: string, b: number }>;

    result = _(obj).defaults(s1, s2);
    }

    {
    let result: _.LoDashImplicitObjectWrapper<{ a: string, b: number, c: number }>;

    result = _(obj).defaults(s1, s2, s3);
    }

    {
    let result: _.LoDashImplicitObjectWrapper<{ a: string, b: number, c: number, d: number }>;

    result = _(obj).defaults(s1, s2, s3, s4);
    }

    {
    let result: _.LoDashImplicitObjectWrapper<{ a: string, b: number, c: number, d: number, e: number }>;

    result = _(obj).defaults<{ a: string, b: number, c: number, d: number, e: number }>(s1, s2, s3, s4, s5);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<Obj>;

        result = _(obj).chain().defaults();
    }

    {
    let result: _.LoDashExplicitObjectWrapper<{ a: string }>;

    result = _(obj).chain().defaults(s1);
    }

    {
    let result: _.LoDashExplicitObjectWrapper<{ a: string, b: number }>;

    result = _(obj).chain().defaults(s1, s2);
    }

    {
    let result: _.LoDashExplicitObjectWrapper<{ a: string, b: number, c: number }>;

    result = _(obj).chain().defaults(s1, s2, s3);
    }

    {
    let result: _.LoDashExplicitObjectWrapper<{ a: string, b: number, c: number, d: number }>;

    result = _(obj).chain().defaults(s1, s2, s3, s4);
    }

    {
    let result: _.LoDashExplicitObjectWrapper<{ a: string, b: number, c: number, d: number, e: number }>;

    result = _(obj).chain().defaults<{ a: string, b: number, c: number, d: number, e: number }>(s1, s2, s3, s4, s5);
    }
}

//_.defaultsDeep
interface DefaultsDeepResult {
    user: {
        name: string;
        age: number;
    }
}
const TestDefaultsDeepObject = { 'user': { 'name': 'barney' } };
const TestDefaultsDeepSource = { 'user': { 'name': 'fred', 'age': 36 } };
result = <DefaultsDeepResult>_.defaultsDeep(TestDefaultsDeepObject, TestDefaultsDeepSource);
result = <DefaultsDeepResult>_(TestDefaultsDeepObject).defaultsDeep<DefaultsDeepResult>(TestDefaultsDeepSource).value();

// _.extend
namespace TestExtend {
    type Obj = { a: string };
    type S1 = { a: number };
    type S2 = { b: number };
    type S3 = { c: number };
    type S4 = { d: number };
    type S5 = { e: number };

    let obj: Obj = { a: "" };
    let s1: S1 = { a: 1 };
    let s2: S2 = { b: 1 };
    let s3: S3 = { c: 1 };
    let s4: S4 = { d: 1 };
    let s5: S5 = { e: 1 };

    let customizer: (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => any = (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => 1;

    {
        let result: Obj;

        result = _.extend(obj);
    }

    {
        let result: { a: number };

        result = _.extend(obj, s1);
    }

    {
        let result: { a: number, b: number };

        result = _.extend(obj, s1, s2);
    }

    {
        let result: { a: number, b: number, c: number };

        result = _.extend(obj, s1, s2, s3);
    }

    {
        let result: { a: number, b: number, c: number, d: number };

        result = _.extend(obj, s1, s2, s3, s4);
    }

    {
        let result: { a: number, b: number, c: number, d: number, e: number };

        result = _.extend<{ a: number, b: number, c: number, d: number, e: number }>(obj, s1, s2, s3, s4, s5);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<Obj>;

        result = _(obj).extend();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number }>;

        result = _(obj).extend(s1);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number, b: number }>;

        result = _(obj).extend(s1, s2);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number, b: number, c: number }>;

        result = _(obj).extend(s1, s2, s3);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number, b: number, c: number, d: number }>;

        result = _(obj).extend(s1, s2, s3, s4);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number, b: number, c: number, d: number, e: number }>;

        result = _(obj).extend<{ a: number, b: number, c: number, d: number, e: number }>(s1, s2, s3, s4, s5);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<Obj>;

        result = _(obj).chain().extend();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number }>;

        result = _(obj).chain().extend(s1);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number, b: number }>;

        result = _(obj).chain().extend(s1, s2);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number, b: number, c: number }>;

        result = _(obj).chain().extend(s1, s2, s3);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number, b: number, c: number, d: number }>;

        result = _(obj).chain().extend(s1, s2, s3, s4);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number, b: number, c: number, d: number, e: number }>;

        result = _(obj).chain().extend<{ a: number, b: number, c: number, d: number, e: number }>(s1, s2, s3, s4, s5);
    }
}

// _.extendWith
namespace TestExtendWith {
    type Obj = { a: string };
    type S1 = { a: number };
    type S2 = { b: number };
    type S3 = { c: number };
    type S4 = { d: number };
    type S5 = { e: number };

    let obj: Obj = { a: "" };
    let s1: S1 = { a: 1 };
    let s2: S2 = { b: 1 };
    let s3: S3 = { c: 1 };
    let s4: S4 = { d: 1 };
    let s5: S5 = { e: 1 };

    let customizer: (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => any = (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => 1;

    {
        let result: Obj;

        result = _.extendWith(obj);
    }

    {
        let result: { a: number };

        result = _.extendWith(obj, s1, customizer);
    }

    {
        let result: { a: number, b: number };

        result = _.extendWith(obj, s1, s2, customizer);
    }

    {
        let result: { a: number, b: number, c: number };

        result = _.extendWith(obj, s1, s2, s3, customizer);
    }

    {
        let result: { a: number, b: number, c: number, d: number };

        result = _.extendWith(obj, s1, s2, s3, s4, customizer);
    }

    {
        let result: { a: number, b: number, c: number, d: number, e: number };

        result = _.extendWith<{ a: number, b: number, c: number, d: number, e: number }>(obj, s1, s2, s3, s4, s5, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<Obj>;

        result = _(obj).extendWith();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number }>;

        result = _(obj).extendWith(s1, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number, b: number }>;

        result = _(obj).extendWith(s1, s2, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number, b: number, c: number }>;

        result = _(obj).extendWith(s1, s2, s3, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number, b: number, c: number, d: number }>;

        result = _(obj).extendWith(s1, s2, s3, s4, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number, b: number, c: number, d: number, e: number }>;

        result = _(obj).extendWith<{ a: number, b: number, c: number, d: number, e: number }>(s1, s2, s3, s4, s5, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<Obj>;

        result = _(obj).chain().extendWith();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number }>;

        result = _(obj).chain().extendWith(s1, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number, b: number }>;

        result = _(obj).chain().extendWith(s1, s2, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number, b: number, c: number }>;

        result = _(obj).chain().extendWith(s1, s2, s3, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number, b: number, c: number, d: number }>;

        result = _(obj).chain().extendWith(s1, s2, s3, s4, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number, b: number, c: number, d: number, e: number }>;

        result = _(obj).chain().extendWith<{ a: number, b: number, c: number, d: number, e: number }>(s1, s2, s3, s4, s5, customizer);
    }
}

// _.findKey
namespace TestFindKey {
    {
        let a: keyof undefined;
        let predicateFn = (value: any, key: string, object: {}) => true;
        let result: string | undefined;

        result = _.findKey<{a: string;}>({a: ''});

        result = _.findKey<{a: string;}>({a: ''}, predicateFn);

        result = _.findKey<{a: string;}>({a: ''}, '');

        result = _.findKey<{a: number;}, {a: string;}>({a: ''}, {a: 42});

        result = _.findKey({a: { b: 5 }}, ['b', 5]);

        result = _<{a: string;}>({a: ''}).findKey();

        result = _<{a: string;}>({a: ''}).findKey(predicateFn);

        result = _<{a: string;}>({a: ''}).findKey('');

        result = _<{a: string;}>({a: ''}).findKey<{a: number;}>({a: 42});
    }

    {
        let predicateFn = (value: string, key: string, collection: _.Dictionary<string>) => true;
        let result: string | undefined;

        result = _.findKey<string, {a: string;}>({a: ''}, predicateFn);

        result = _<{a: string;}>({a: ''}).findKey<string>(predicateFn);
    }

    {
        let predicateFn = (value: any, key: string, object: {}) => true;
        let result: _.LoDashExplicitWrapper<string | undefined>;

        result = _<{a: string;}>({a: ''}).chain().findKey();

        result = _<{a: string;}>({a: ''}).chain().findKey(predicateFn);

        result = _<{a: string;}>({a: ''}).chain().findKey('');

        result = _<{a: string;}>({a: ''}).chain().findKey<{a: number;}>({a: 42});
    }

    {
        let predicateFn = (value: string, key: string, collection: _.Dictionary<string>) => true;
        let result: _.LoDashExplicitWrapper<string | undefined>;

        result = _<{a: string;}>({a: ''}).chain().findKey<string>(predicateFn);
    }
}

// _.findLastKey
namespace TestFindLastKey {
    {
        let predicateFn = (value: any, key: string, object: {}) => true;
        let result: string | undefined;

        result = _.findLastKey<{a: string;}>({a: ''});

        result = _.findLastKey<{a: string;}>({a: ''}, predicateFn);

        result = _.findLastKey<{a: string;}>({a: ''}, '');

        result = _.findLastKey<{a: number;}, {a: string;}>({a: ''}, {a: 42});

        result = _.findLastKey({a: { b: 5 }}, ['b', 5]);

        result = _<{a: string;}>({a: ''}).findLastKey();

        result = _<{a: string;}>({a: ''}).findLastKey(predicateFn);

        result = _<{a: string;}>({a: ''}).findLastKey('');

        result = _<{a: string;}>({a: ''}).findLastKey<{a: number;}>({a: 42});
    }

    {
        let predicateFn = (value: string, key: string, collection: _.Dictionary<string>) => true;
        let result: string | undefined;

        result = _.findLastKey<string, {a: string;}>({a: ''}, predicateFn);

        result = _<{a: string;}>({a: ''}).findLastKey<string>(predicateFn);
    }

    {
        let predicateFn = (value: any, key: string, object: {}) => true;
        let result: _.LoDashExplicitWrapper<string | undefined>;

        result = _<{a: string;}>({a: ''}).chain().findLastKey();

        result = _<{a: string;}>({a: ''}).chain().findLastKey(predicateFn);

        result = _<{a: string;}>({a: ''}).chain().findLastKey('');

        result = _<{a: string;}>({a: ''}).chain().findLastKey<{a: number;}>({a: 42});
    }

    {
        let predicateFn = (value: string, key: string, collection: _.Dictionary<string>) => true;
        let result: _.LoDashExplicitWrapper<string | undefined>;

        result = _<{a: string;}>({a: ''}).chain().findLastKey<string>(predicateFn);
    }
}

// _.forIn
namespace TestForIn {
    type SampleObject = {a: number; b: string; c: boolean;};

    let dictionary: _.Dictionary<number> = {};
    let nilDictionary: _.Dictionary<number> | null | undefined = any;
    let dictionaryIterator: (value: number, key: string, collection: _.Dictionary<number>) => any = (value: number, key: string, collection: _.Dictionary<number>) => 1;

    let object: SampleObject = { a: 1, b: "", c: true };
    let nilObject: SampleObject | null | undefined = any;
    let objectIterator: (element: any, key?: string, collection?: any) => any = (element: any, key?: string, collection?: any) => 1;

    {
        let result: _.Dictionary<number>;

        result = _.forIn<number>(dictionary);
        result = _.forIn<number>(dictionary, dictionaryIterator);
    }

    {
        let result: _.Dictionary<number> | null | undefined;

        result = _.forIn<number>(nilDictionary);
        result = _.forIn<number>(nilDictionary, dictionaryIterator);
    }

    {
        let result: SampleObject;

        result = _.forIn<SampleObject>(object);
        result = _.forIn<SampleObject>(object, objectIterator);
    }

    {
        let result: SampleObject | null | undefined;

        result = _.forIn<SampleObject | null | undefined>(nilObject);
        result = _.forIn<SampleObject | null | undefined>(nilObject, objectIterator);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<number>>;

        result = _(dictionary).forIn<number>();
        result = _(dictionary).forIn<number>(dictionaryIterator);
    }

    {
        let result: _.LoDashImplicitNillableObjectWrapper<_.Dictionary<number>>;

        result = _(nilDictionary).forIn<number>();
        result = _(nilDictionary).forIn<number>(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<number>>;

        result = _(dictionary).chain().forIn<number>();
        result = _(dictionary).chain().forIn<number>(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitNillableObjectWrapper<_.Dictionary<number>>;

        result = _(nilDictionary).chain().forIn<number>();
        result = _(nilDictionary).chain().forIn<number>(dictionaryIterator);
    }
}

// _.forInRight
namespace TestForInRight {
    type SampleObject = {a: number; b: string; c: boolean;};

    let dictionary: _.Dictionary<number> = {};
    let nilDictionary: _.Dictionary<number> | null | undefined = any;
    let dictionaryIterator: (value: number, key: string, collection: _.Dictionary<number>) => any = (value: number, key: string, collection: _.Dictionary<number>) => 1;

    let object: SampleObject = { a: 1, b: "", c: true };
    let nilObject: SampleObject | null | undefined = any;
    let objectIterator: (element: any, key?: string, collection?: any) => any = (element: any, key?: string, collection?: any) => 1;

    {
        let result: _.Dictionary<number>;

        result = _.forInRight<number>(dictionary);
        result = _.forInRight<number>(dictionary, dictionaryIterator);
    }

    {
        let result: _.Dictionary<number> | null | undefined;

        result = _.forInRight<number>(nilDictionary);
        result = _.forInRight<number>(nilDictionary, dictionaryIterator);
    }

    {
        let result: SampleObject;

        result = _.forInRight<SampleObject>(object);
        result = _.forInRight<SampleObject>(object, objectIterator);
    }

    {
        let result: SampleObject | null | undefined;

        result = _.forInRight<SampleObject | null | undefined>(nilObject);
        result = _.forInRight<SampleObject | null | undefined>(nilObject, objectIterator);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<number>>;

        result = _(dictionary).forInRight<number>();
        result = _(dictionary).forInRight<number>(dictionaryIterator);
    }

    {
        let result: _.LoDashImplicitNillableObjectWrapper<_.Dictionary<number>>;

        result = _(nilDictionary).forInRight<number>();
        result = _(nilDictionary).forInRight<number>(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<number>>;

        result = _(dictionary).chain().forInRight<number>();
        result = _(dictionary).chain().forInRight<number>(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitNillableObjectWrapper<_.Dictionary<number>>;

        result = _(nilDictionary).chain().forInRight<number>();
        result = _(nilDictionary).chain().forInRight<number>(dictionaryIterator);
    }
}

// _.forOwn
namespace TestForOwn {
    type SampleObject = {a: number; b: string; c: boolean;};

    let dictionary: _.Dictionary<number> = {};
    let nilDictionary: _.Dictionary<number> | null | undefined = any;
    let dictionaryIterator: (value: number, key: string, collection: _.Dictionary<number>) => any = (value: number, key: string, collection: _.Dictionary<number>) => 1;

    let object: SampleObject = { a: 1, b: "", c: true };
    let nilObject: SampleObject | null | undefined = any;
    let objectIterator: (element: any, key?: string, collection?: any) => any = (element: any, key?: string, collection?: any) => 1;

    {
        let result: _.Dictionary<number>;

        result = _.forOwn<number>(dictionary);
        result = _.forOwn<number>(dictionary, dictionaryIterator);
    }

    {
        let result: _.Dictionary<number> | null | undefined;

        result = _.forOwn<number>(nilDictionary);
        result = _.forOwn<number>(nilDictionary, dictionaryIterator);
    }

    {
        let result: SampleObject;

        result = _.forOwn<SampleObject>(object);
        result = _.forOwn<SampleObject>(object, objectIterator);
    }

    {
        let result: SampleObject | null | undefined;

        result = _.forOwn<SampleObject | null | undefined>(nilObject);
        result = _.forOwn<SampleObject | null | undefined>(nilObject, objectIterator);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<number>>;

        result = _(dictionary).forOwn<number>();
        result = _(dictionary).forOwn<number>(dictionaryIterator);
    }

    {
        let result: _.LoDashImplicitNillableObjectWrapper<_.Dictionary<number>>;

        result = _(nilDictionary).forOwn<number>();
        result = _(nilDictionary).forOwn<number>(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<number>>;

        result = _(dictionary).chain().forOwn<number>();
        result = _(dictionary).chain().forOwn<number>(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitNillableObjectWrapper<_.Dictionary<number>>;

        result = _(nilDictionary).chain().forOwn<number>();
        result = _(nilDictionary).chain().forOwn<number>(dictionaryIterator);
    }
}

// _.forOwnRight
namespace TestForOwnRight {
    type SampleObject = {a: number; b: string; c: boolean;};

    let dictionary: _.Dictionary<number> = {};
    let nilDictionary: _.Dictionary<number> | null | undefined = any;
    let dictionaryIterator: (value: number, key: string, collection: _.Dictionary<number>) => any = (value: number, key: string, collection: _.Dictionary<number>) => 1;

    let object: SampleObject = { a: 1, b: "", c: true };
    let nilObject: SampleObject | null | undefined = any;
    let objectIterator: (element: any, key?: string, collection?: any) => any = (element: any, key?: string, collection?: any) => 1;

    {
        let result: _.Dictionary<number>;

        result = _.forOwnRight<number>(dictionary);
        result = _.forOwnRight<number>(dictionary, dictionaryIterator);
    }

    {
        let result: _.Dictionary<number> | null | undefined;

        result = _.forOwnRight<number>(nilDictionary);
        result = _.forOwnRight<number>(nilDictionary, dictionaryIterator);
    }

    {
        let result: SampleObject;

        result = _.forOwnRight<SampleObject>(object);
        result = _.forOwnRight<SampleObject>(object, objectIterator);
    }

    {
        let result: SampleObject | null | undefined;

        result = _.forOwnRight<SampleObject | null | undefined>(nilObject);
        result = _.forOwnRight<SampleObject | null | undefined>(nilObject, objectIterator);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<number>>;

        result = _(dictionary).forOwnRight<number>();
        result = _(dictionary).forOwnRight<number>(dictionaryIterator);
    }

    {
        let result: _.LoDashImplicitNillableObjectWrapper<_.Dictionary<number>>;

        result = _(nilDictionary).forOwnRight<number>();
        result = _(nilDictionary).forOwnRight<number>(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<number>>;

        result = _(dictionary).chain().forOwnRight<number>();
        result = _(dictionary).chain().forOwnRight<number>(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitNillableObjectWrapper<_.Dictionary<number>>;

        result = _(nilDictionary).chain().forOwnRight<number>();
        result = _(nilDictionary).chain().forOwnRight<number>(dictionaryIterator);
    }
}

// _.functions
namespace TestFunctions {
    type SampleObject = {a: number; b: string; c: boolean;};

    let object: SampleObject = { a: 1, b: "", c: true };

    {
        let result: string[];

        result = _.functions<SampleObject>(object);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _(object).functions();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _(object).chain().functions();
    }
}

// _.functionsIn
namespace TestFunctionsIn {
    type SampleObject = {a: number; b: string; c: boolean;};

    let object: SampleObject = { a: 1, b: "", c: true };

    {
        let result: string[];

        result = _.functionsIn<SampleObject>(object);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _(object).functionsIn();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _(object).chain().functionsIn();
    }
}

// _.get
namespace TestGet {
    {
        let result: string;

        result = _.get<string, string>('abc', '0');
        result = _.get<string, string>('abc', '0', '_');
        result = _.get<string, string>('abc', ['0']);
        result = _.get<string, string>('abc', ['0'], '_');

        result = _.get<string>('abc', '0');
        result = _.get<string>('abc', '0', '_');
        result = _.get<string>('abc', ['0']);
        result = _.get<string>('abc', ['0'], '_');

        result = _('abc').get<string>('0');
        result = _('abc').get<string>('0', '_');
        result = _('abc').get<string>(['0']);
        result = _('abc').get<string>(['0'], '_');
    }

    {
        let result: number;

        result = _.get<number[], number>([42], '0');
        result = _.get<number[], number>([42], '0', -1);
        result = _.get<number[], number>([42], ['0']);
        result = _.get<number[], number>([42], ['0'], -1);

        result = _.get<number>([42], '0');
        result = _.get<number>([42], '0', -1);
        result = _.get<number>([42], ['0']);
        result = _.get<number>([42], ['0'], -1);

        result = _([42]).get<number>('0');
        result = _([42]).get<number>('0', -1);
        result = _([42]).get<number>(['0']);
        result = _([42]).get<number>(['0'], -1);
    }

    {
        let result: boolean;

        result = _.get<{a: boolean}, boolean>({a: true}, 'a');
        result = _.get<{a: boolean}, boolean>({a: true}, 'a', false);
        result = _.get<{a: boolean}, boolean>({a: true}, ['a']);
        result = _.get<{a: boolean}, boolean>({a: true}, ['a'], false);

        result = _.get<boolean>({a: true}, 'a');
        result = _.get<boolean>({a: true}, 'a', false);
        result = _.get<boolean>({a: true}, ['a']);
        result = _.get<boolean>({a: true}, ['a'], false);

        result = _({a: true}).get<boolean>('a');
        result = _({a: true}).get<boolean>('a', false);
        result = _({a: true}).get<boolean>(['a']);
        result = _({a: true}).get<boolean>(['a'], false);
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('abc').chain().get<_.LoDashExplicitWrapper<string>>('0');
        result = _('abc').chain().get<_.LoDashExplicitWrapper<string>>('0', '_');
        result = _('abc').chain().get<_.LoDashExplicitWrapper<string>>(['0']);
        result = _('abc').chain().get<_.LoDashExplicitWrapper<string>>(['0'], '_');
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _([42]).chain().get<_.LoDashExplicitWrapper<number>>('0');
        result = _([42]).chain().get<_.LoDashExplicitWrapper<number>>('0', -1);
        result = _([42]).chain().get<_.LoDashExplicitWrapper<number>>(['0']);
        result = _([42]).chain().get<_.LoDashExplicitWrapper<number>>(['0'], -1);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _({a: true}).chain().get<_.LoDashExplicitWrapper<boolean>>('a');
        result = _({a: true}).chain().get<_.LoDashExplicitWrapper<boolean>>('a', false);
        result = _({a: true}).chain().get<_.LoDashExplicitWrapper<boolean>>(['a']);
        result = _({a: true}).chain().get<_.LoDashExplicitWrapper<boolean>>(['a'], false);
    }
}

// _.has
namespace TestHas {
    type SampleObject = {a: number; b: string; c: boolean;};

    let object: SampleObject = { a: 1, b: "", c: true };

    {
        let result: boolean;

        result = _.has<SampleObject>(object, '');
        result = _.has<SampleObject>(object, 42);
        result = _.has<SampleObject>(object, true);
        result = _.has<SampleObject>(object, ['', 42, true]);

        result = _(object).has('');
        result = _(object).has(42);
        result = _(object).has(true);
        result = _(object).has(['', 42, true]);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(object).chain().has('');
        result = _(object).chain().has(42);
        result = _(object).chain().has(true);
        result = _(object).chain().has(['', 42, true]);
    }
}

// _.hasIn
namespace TestHasIn {
    type SampleObject = {a: number; b: string; c: boolean;};

    let object: SampleObject = { a: 1, b: "", c: true };

    {
        let result: boolean;

        result = _.hasIn<SampleObject>(object, '');
        result = _.hasIn<SampleObject>(object, 42);
        result = _.hasIn<SampleObject>(object, true);
        result = _.hasIn<SampleObject>(object, ['', 42, true]);

        result = _(object).hasIn('');
        result = _(object).hasIn(42);
        result = _(object).hasIn(true);
        result = _(object).hasIn(['', 42, true]);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(object).chain().hasIn('');
        result = _(object).chain().hasIn(42);
        result = _(object).chain().hasIn(true);
        result = _(object).chain().hasIn(['', 42, true]);
    }
}

// _.invert
namespace TestInvert {
    {
        let result: TResult;

        result = _.invert<Object, TResult>({});
        result = _.invert<Object, TResult>({}, true);

        result = _.invert<TResult>({});
        result = _.invert<TResult>({}, true);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<TResult>;

        result = _({}).invert<TResult>();
        result = _({}).invert<TResult>(true);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<TResult>;

        result = _({}).chain().invert<TResult>();
        result = _({}).chain().invert<TResult>(true);
    }
}

// _.invertBy
namespace TestInvertBy {
    let array: ({a: number;})[] = [];
    let list: _.List<{a: number;}> = [];
    let dictionary: _.Dictionary<{a: number;}> = {};
    let numericDictionary: _.NumericDictionary<{a: number;}> = {};

    let stringIterator: (value: string) => any = (value: string) => 1;
    let arrayIterator: (value: {a: number;}) => any = (value: {a: number;}) => 1;
    let listIterator: (value: {a: number;}) => any = (value: {a: number;}) => 1;
    let dictionaryIterator: (value: {a: number;}) => any = (value: {a: number;}) => 1;
    let numericDictionaryIterator: (value: {a: number;}) => any = (value: {a: number;}) => 1;

    {
        let result: _.Dictionary<string[]>;

        result = _.invertBy('foo');
        result = _.invertBy('foo', stringIterator);

        result = _.invertBy(array);
        result = _.invertBy<{a: number;}>(array, 'a');
        result = _.invertBy<{a: number;}>(array, arrayIterator);
        result = _.invertBy<{a: number;}>(array, {a: 1});

        result = _.invertBy(list);
        result = _.invertBy<{a: number;}>(list, 'a');
        result = _.invertBy<{a: number;}>(list, listIterator);
        result = _.invertBy<{a: number;}>(list, {a: 1});

        result = _.invertBy(dictionary);
        result = _.invertBy<{a: number;}>(dictionary, 'a');
        result = _.invertBy<{a: number;}>(dictionary, dictionaryIterator);
        result = _.invertBy<{a: number;}>(dictionary, {a: 1});

        result = _.invertBy(numericDictionary);
        result = _.invertBy<{a: number;}>(numericDictionary, 'a');
        result = _.invertBy<{a: number;}>(numericDictionary, numericDictionaryIterator);
        result = _.invertBy<{a: number;}>(numericDictionary, {a: 1});
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<string[]>>;

        result = _('foo').invertBy();
        result = _('foo').invertBy(stringIterator);

        result = _(array).invertBy();
        result = _(array).invertBy('a');
        result = _(array).invertBy(arrayIterator);
        result = _(array).invertBy({a: 1});

        result = _(list).invertBy();
        result = _(list).invertBy('a');
        result = _(list).invertBy(listIterator);
        result = _(list).invertBy<{a: number;}>({a: 1});

        result = _(dictionary).invertBy();
        result = _(dictionary).invertBy('a');
        result = _(dictionary).invertBy(dictionaryIterator);
        result = _(dictionary).invertBy<{a: number;}>({a: 1});

        result = _(numericDictionary).invertBy();
        result = _(numericDictionary).invertBy('a');
        result = _(numericDictionary).invertBy(numericDictionaryIterator);
        result = _(numericDictionary).invertBy<{a: number;}>({a: 1});
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<string[]>>;

        result = _('foo').chain().invertBy();
        result = _('foo').chain().invertBy(stringIterator);

        result = _(array).chain().invertBy();
        result = _(array).chain().invertBy('a');
        result = _(array).chain().invertBy(arrayIterator);
        result = _(array).chain().invertBy({a: 1});

        result = _(list).chain().invertBy();
        result = _(list).chain().invertBy('a');
        result = _(list).chain().invertBy(listIterator);
        result = _(list).chain().invertBy<{a: number;}>({a: 1});

        result = _(dictionary).chain().invertBy();
        result = _(dictionary).chain().invertBy('a');
        result = _(dictionary).chain().invertBy(dictionaryIterator);
        result = _(dictionary).chain().invertBy<{a: number;}>({a: 1});

        result = _(numericDictionary).chain().invertBy();
        result = _(numericDictionary).chain().invertBy('a');
        result = _(numericDictionary).chain().invertBy(numericDictionaryIterator);
        result = _(numericDictionary).chain().invertBy<{a: number;}>({a: 1});
    }
}

// _.keys
namespace TestKeys {
    let object: _.Dictionary<any> | null | undefined = any;

    {
        let result: string[];

        result = _.keys(object);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _(object).keys();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _(object).chain().keys();
    }
}

// _.keysIn
namespace TestKeysIn {
    let object: _.Dictionary<any> | null | undefined = any;

    {
        let result: string[];

        result = _.keysIn(object);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _(object).keysIn();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _(object).chain().keysIn();
    }
}

// _.mapKeys
namespace TestMapKeys {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult>| null | undefined = [] as any;
    let dictionary: _.Dictionary<TResult> | null | undefined = any;

    let listIterator = (value: TResult, index: number, collection: _.List<TResult>) => "";
    let dictionaryIterator = (value: TResult, key: string, collection: _.Dictionary<TResult>) => "";

    {
        let result: _.Dictionary<TResult>;

        result = _.mapKeys<TResult, string>(array);
        result = _.mapKeys<TResult, string>(array, listIterator);
        result = _.mapKeys<TResult>(array, '');
        result = _.mapKeys<TResult, {}>(array, {});

        result = _.mapKeys<TResult, string>(list);
        result = _.mapKeys<TResult, string>(list, listIterator);
        result = _.mapKeys<TResult>(list, '');
        result = _.mapKeys<TResult, {}>(list, {});

        result = _.mapKeys<TResult, string>(dictionary);
        result = _.mapKeys<TResult, string>(dictionary, dictionaryIterator);
        result = _.mapKeys<TResult>(dictionary, '');
        result = _.mapKeys<TResult, {}>(dictionary, {});
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<TResult>>;

        result = _(array).mapKeys<string>();
        result = _(array).mapKeys<string>(listIterator);
        result = _(array).mapKeys('');
        result = _(array).mapKeys<{}>({});

        result = _(list).mapKeys<TResult, string>();
        result = _(list).mapKeys<TResult, string>(listIterator);
        result = _(list).mapKeys<TResult>('');
        result = _(list).mapKeys<TResult, {}>({});

        result = _(dictionary).mapKeys<TResult, string>();
        result = _(dictionary).mapKeys<TResult, string>(dictionaryIterator);
        result = _(dictionary).mapKeys<TResult>('');
        result = _(dictionary).mapKeys<TResult, {}>({});
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<TResult>>;

        result = _(array).chain().mapKeys<string>();
        result = _(array).chain().mapKeys<string>(listIterator);
        result = _(array).chain().mapKeys('');
        result = _(array).chain().mapKeys<{}>({});

        result = _(list).chain().mapKeys<TResult, string>();
        result = _(list).chain().mapKeys<TResult, string>(listIterator);
        result = _(list).chain().mapKeys<TResult>('');
        result = _(list).chain().mapKeys<TResult, {}>({});

        result = _(dictionary).chain().mapKeys<TResult, string>();
        result = _(dictionary).chain().mapKeys<TResult, string>(dictionaryIterator);
        result = _(dictionary).chain().mapKeys<TResult>('');
        result = _(dictionary).chain().mapKeys<TResult, {}>({});
    }
}

// _.merge
namespace TestMerge {
    type InitialValue = { a : number };
    type MergingValue = { b : string };

    const initialValue  = { a : 1 };
    const mergingValue  = { b : "hi" };

    type ExpectedResult = { a: number, b: string };
    let result: ExpectedResult;

    // Test for basic merging

    result = _.merge(initialValue, mergingValue);

    result = _.merge(initialValue, {}, mergingValue);

    result = _.merge(initialValue, {}, {}, mergingValue);

    result = _.merge(initialValue, {}, {}, {}, mergingValue);

    // Once we get to the varargs version, you have to specify the result explicitly
    result = _.merge<ExpectedResult>(initialValue, {}, {}, {}, {}, mergingValue);

    type ComplicatedExpectedType = { a: number, b: string, c: {}, d: number[], e: boolean };

    let complicatedResult: ComplicatedExpectedType = _.merge({ a: 1 },
                                                             { b: "string" },
                                                             { c: {} },
                                                             { d: [1] },
                                                             { e: true });
    // Test for type overriding

    type ExpectedTypeAfterOverriding = { a: boolean };

    let overriddenResult: ExpectedTypeAfterOverriding = _.merge({ a: 1 },
                                                                { a: "string" },
                                                                { a: {} },
                                                                { a: [1] },
                                                                { a: true });

    // Tests for basic chaining with merge

    result = _(initialValue).merge(mergingValue).value();

    result = _(initialValue).merge({}, mergingValue).value();

    result = _(initialValue).merge({}, {}, mergingValue).value();

    result = _(initialValue).merge({}, {}, {}, mergingValue).value();

    // Once we get to the varargs version, you have to specify the result explicitly
    result = _(initialValue).merge<ExpectedResult>({}, {}, {}, {}, mergingValue).value();

    // Test complex multiple combinations with chaining

    complicatedResult = _({ a: 1 }).merge({ b: "string" },
                                                                       { c: {} },
                                                                       { d: [1] },
                                                                       { e: true }).value();

    // Test for type overriding with chaining

    overriddenResult = _({ a: 1 }).merge({ a: "string" },
                                                                          { a: {} },
                                                                          { a: [1] },
                                                                          { a: true }).value();

    {
        let result: _.LoDashExplicitObjectWrapper<ExpectedResult>;
        // result = _(initialValue).chain().merge(mergingValue);
        // result = _(initialValue).chain().merge({}, mergingValue);
        // result = _(initialValue).chain().merge({}, {}, mergingValue);
        // result = _(initialValue).chain().merge({}, {}, {}, mergingValue);
        // result = _(initialValue).chain().merge<ExpectedResult>({}, {}, {}, {}, mergingValue);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<ComplicatedExpectedType>;

        //result = _({ a: 1 }).chain().merge({ b: "string" }, { c: {} }, { d: [1] }, { e: true });
    }

    {
        let result: _.LoDashExplicitObjectWrapper<ExpectedTypeAfterOverriding>;

        //result = _({ a: 1 }).chain().merge({ a: "string" }, { a: {} }, { a: [1] }, { a: true });
    }
}

// _.mergeWith
namespace TestMergeWith {
    type InitialValue = { a : number };
    type MergingValue = { b : string };

    const initialValue  = { a : 1 };
    const mergingValue  = { b : "hi" };

    type ExpectedResult = { a: number, b: string };
    let result: ExpectedResult;

    let customizer: (value: any, srcValue: any, key?: string, object?: InitialValue, source?: MergingValue) => any = (value: any, srcValue: any, key?: string, object?: InitialValue, source?: MergingValue) => 1;

    // Test for basic merging
    result = _.mergeWith(initialValue, mergingValue, customizer);
    result = _.mergeWith(initialValue, {}, mergingValue, customizer);
    result = _.mergeWith(initialValue, {}, {}, mergingValue, customizer);
    result = _.mergeWith(initialValue, {}, {}, {}, mergingValue, customizer);

    // Once we get to the varargs version, you have to specify the result explicitl
    result = _.mergeWith<ExpectedResult>(initialValue, {}, {}, {}, {}, mergingValue, customizer);

    // Tests for basic chaining with mergeWith
    result = _(initialValue).mergeWith(mergingValue, customizer).value();
    result = _(initialValue).mergeWith({}, mergingValue, customizer).value();
    result = _(initialValue).mergeWith({}, {}, mergingValue, customizer).value();
    result = _(initialValue).mergeWith({}, {}, {}, mergingValue, customizer).value();

    // Once we get to the varargs version, you have to specify the result explicitl
    result = _(initialValue).mergeWith<ExpectedResult>({}, {}, {}, {}, mergingValue, customizer).value();
}

// _.omit
namespace TestOmit {
    let obj: {} | null | undefined = any;
    let predicate: (element: any, key: string, collection: any) => boolean;

    {
        let result: TResult;

        result = _.omit<TResult, Object>(obj, 'a');
        result = _.omit<TResult, Object>(obj, 0, 'a');
        result = _.omit<TResult, Object>(obj, true, 0, 'a');
        result = _.omit<TResult, Object>(obj, ['b', 1, false], true, 0, 'a');
    }

    {
        let result: _.LoDashImplicitObjectWrapper<TResult>;

        result = _(obj).omit<TResult>('a');
        result = _(obj).omit<TResult>(0, 'a');
        result = _(obj).omit<TResult>(true, 0, 'a');
        result = _(obj).omit<TResult>(['b', 1, false], true, 0, 'a');
    }

    {
        let result: _.LoDashExplicitObjectWrapper<TResult>;

        result = _(obj).chain().omit<TResult>('a');
        result = _(obj).chain().omit<TResult>(0, 'a');
        result = _(obj).chain().omit<TResult>(true, 0, 'a');
        result = _(obj).chain().omit<TResult>(['b', 1, false], true, 0, 'a');
    }
}

// _.omitBy
namespace TestOmitBy {
    let obj: {} | null | undefined = any;
    let predicate = (element: any, key: string, collection: any) => true;

    {
        let result: TResult;

        result = _.omitBy<TResult, Object>(obj, predicate);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<TResult>;

        result = _(obj).omitBy<TResult>(predicate);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<TResult>;

        result = _(obj).chain().omitBy<TResult>(predicate);
    }
}

// _.pick
namespace TestPick {
    let obj: {} | null | undefined = any;

    {
        let result: TResult;

        result = _.pick<TResult, Object>(obj, 'a');
        result = _.pick<TResult, Object>(obj, 0, 'a');
        result = _.pick<TResult, Object>(obj, true, 0, 'a');
        result = _.pick<TResult, Object>(obj, ['b', 1, false], true, 0, 'a');
    }

    {
        let result: _.LoDashImplicitObjectWrapper<TResult>;

        result = _(obj).pick<TResult>('a');
        result = _(obj).pick<TResult>(0, 'a');
        result = _(obj).pick<TResult>(true, 0, 'a');
        result = _(obj).pick<TResult>(['b', 1, false], true, 0, 'a');
    }

    {
        let result: _.LoDashExplicitObjectWrapper<TResult>;

        result = _(obj).chain().pick<TResult>('a');
        result = _(obj).chain().pick<TResult>(0, 'a');
        result = _(obj).chain().pick<TResult>(true, 0, 'a');
        result = _(obj).chain().pick<TResult>(['b', 1, false], true, 0, 'a');
    }
}

// _.pickBy
namespace TestPickBy {
    let obj: {} | null | undefined = any;
    let predicate = (element: any, key: string, collection: any) => true;

    {
        let result: TResult;

        result = _.pickBy<TResult, Object>(obj, predicate);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<TResult>;

        result = _(obj).pickBy<TResult>(predicate);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<TResult>;

        result = _(obj).chain().pickBy<TResult>(predicate);
    }
}

// _.result
namespace TestResult {
    {
        let result: string;

        result = _.result<string, string>('abc', '0');
        result = _.result<string, string>('abc', '0', '_');
        result = _.result<string, string>('abc', '0', () => '_');
        result = _.result<string, string>('abc', ['0']);
        result = _.result<string, string>('abc', ['0'], '_');
        result = _.result<string, string>('abc', ['0'], () => '_');

        result = _.result<string>('abc', '0');
        result = _.result<string>('abc', '0', '_');
        result = _.result<string>('abc', '0', () => '_');
        result = _.result<string>('abc', ['0']);
        result = _.result<string>('abc', ['0'], '_');
        result = _.result<string>('abc', ['0'], () => '_');

        result = _('abc').result<string>('0');
        result = _('abc').result<string>('0', '_');
        result = _('abc').result<string>('0', () => '_');
        result = _('abc').result<string>(['0']);
        result = _('abc').result<string>(['0'], '_');
        result = _('abc').result<string>(['0'], () => '_');
    }

    {
        let result: number;

        result = _.result<number[], number>([42], '0');
        result = _.result<number[], number>([42], '0', -1);
        result = _.result<number[], number>([42], '0', () => -1);
        result = _.result<number[], number>([42], ['0']);
        result = _.result<number[], number>([42], ['0'], -1);
        result = _.result<number[], number>([42], ['0'], () => -1);

        result = _.result<number>([42], '0');
        result = _.result<number>([42], '0', -1);
        result = _.result<number>([42], '0', () => -1);
        result = _.result<number>([42], ['0']);
        result = _.result<number>([42], ['0'], -1);
        result = _.result<number>([42], ['0'], () => -1);

        result = _([42]).result<number>('0');
        result = _([42]).result<number>('0', -1);
        result = _([42]).result<number>('0', () => -1);
        result = _([42]).result<number>(['0']);
        result = _([42]).result<number>(['0'], -1);
        result = _([42]).result<number>(['0'], () => -1);
    }

    {
        let result: boolean;

        result = _.result<{a: boolean}, boolean>({a: true}, 'a');
        result = _.result<{a: boolean}, boolean>({a: true}, 'a', false);
        result = _.result<{a: boolean}, boolean>({a: true}, 'a', () => false);
        result = _.result<{a: boolean}, boolean>({a: true}, ['a']);
        result = _.result<{a: boolean}, boolean>({a: true}, ['a'], false);
        result = _.result<{a: boolean}, boolean>({a: true}, ['a'], () => false);

        result = _.result<boolean>({a: true}, 'a');
        result = _.result<boolean>({a: true}, 'a', false);
        result = _.result<boolean>({a: true}, 'a', () => false);
        result = _.result<boolean>({a: true}, ['a']);
        result = _.result<boolean>({a: true}, ['a'], false);
        result = _.result<boolean>({a: true}, ['a'], () => false);

        result = _({a: true}).result<boolean>('a');
        result = _({a: true}).result<boolean>('a', false);
        result = _({a: true}).result<boolean>('a', () => false);
        result = _({a: true}).result<boolean>(['a']);
        result = _({a: true}).result<boolean>(['a'], false);
        result = _({a: true}).result<boolean>(['a'], () => false);
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('abc').chain().result<_.LoDashExplicitWrapper<string>>('0');
        result = _('abc').chain().result<_.LoDashExplicitWrapper<string>>('0', '_');
        result = _('abc').chain().result<_.LoDashExplicitWrapper<string>>('0', '_');
        result = _('abc').chain().result<_.LoDashExplicitWrapper<string>>(['0']);
        result = _('abc').chain().result<_.LoDashExplicitWrapper<string>>(['0'], () => '_');
        result = _('abc').chain().result<_.LoDashExplicitWrapper<string>>(['0'], () => '_');
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _([42]).chain().result<_.LoDashExplicitWrapper<number>>('0');
        result = _([42]).chain().result<_.LoDashExplicitWrapper<number>>('0', -1);
        result = _([42]).chain().result<_.LoDashExplicitWrapper<number>>('0', () => -1);
        result = _([42]).chain().result<_.LoDashExplicitWrapper<number>>(['0']);
        result = _([42]).chain().result<_.LoDashExplicitWrapper<number>>(['0'], -1);
        result = _([42]).chain().result<_.LoDashExplicitWrapper<number>>(['0'], () => -1);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _({a: true}).chain().result<_.LoDashExplicitWrapper<boolean>>('a');
        result = _({a: true}).chain().result<_.LoDashExplicitWrapper<boolean>>('a', false);
        result = _({a: true}).chain().result<_.LoDashExplicitWrapper<boolean>>('a', () => false);
        result = _({a: true}).chain().result<_.LoDashExplicitWrapper<boolean>>(['a']);
        result = _({a: true}).chain().result<_.LoDashExplicitWrapper<boolean>>(['a'], false);
        result = _({a: true}).chain().result<_.LoDashExplicitWrapper<boolean>>(['a'], () => false);
    }
}

// _.set
namespace TestSet {
    type SampleObject = {a: {}};
    type SampleResult = {a: {b: number[]}};

    let object: SampleObject = { a: {} };
    let value: number = 0;

    {
        let result: SampleResult;

        result = _.set<SampleResult>(object, 'a.b[1]', value);
        result = _.set<SampleResult>(object, ['a', 'b', 1], value);

        result = _.set<number, SampleResult>(object, 'a.b[1]', value);
        result = _.set<number, SampleResult>(object, ['a', 'b', 1], value);

        result = _.set<SampleObject, number, SampleResult>(object, 'a.b[1]', value);
        result = _.set<SampleObject, number, SampleResult>(object, ['a', 'b', 1], value);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(object).set<SampleResult>('a.b[1]', value);
        result = _(object).set<SampleResult>(['a', 'b', 1], value);

        result = _(object).set<number, SampleResult>('a.b[1]', value);
        result = _(object).set<number, SampleResult>(['a', 'b', 1], value);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(object).chain().set<SampleResult>('a.b[1]', value);
        result = _(object).chain().set<SampleResult>(['a', 'b', 1], value);

        result = _(object).chain().set<number, SampleResult>('a.b[1]', value);
        result = _(object).chain().set<number, SampleResult>(['a', 'b', 1], value);
    }
}

// _.setWith
namespace TestSetWith {
    type SampleObject = {a: {}};
    type SampleResult = {a: {b: number[]}};

    let object: SampleObject = { a: {} };
    let value: number = 0;
    let customizer = (value: any, key: string, object: SampleObject) => 0;

    {
        let result: SampleResult;

        result = _.setWith<SampleResult>(object, 'a.b[1]', value);
        result = _.setWith<SampleResult>(object, 'a.b[1]', value, customizer);
        result = _.setWith<SampleResult>(object, ['a', 'b', 1], value);
        result = _.setWith<SampleResult>(object, ['a', 'b', 1], value, customizer);

        result = _.setWith<number, SampleResult>(object, 'a.b[1]', value);
        result = _.setWith<number, SampleResult>(object, 'a.b[1]', value, customizer);
        result = _.setWith<number, SampleResult>(object, ['a', 'b', 1], value);
        result = _.setWith<number, SampleResult>(object, ['a', 'b', 1], value, customizer);

        result = _.setWith<SampleObject, number, SampleResult>(object, 'a.b[1]', value);
        result = _.setWith<SampleObject, number, SampleResult>(object, 'a.b[1]', value, customizer);
        result = _.setWith<SampleObject, number, SampleResult>(object, ['a', 'b', 1], value);
        result = _.setWith<SampleObject, number, SampleResult>(object, ['a', 'b', 1], value, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(object).setWith<SampleResult>('a.b[1]', value);
        result = _(object).setWith<SampleResult>('a.b[1]', value, customizer);
        result = _(object).setWith<SampleResult>(['a', 'b', 1], value);
        result = _(object).setWith<SampleResult>(['a', 'b', 1], value, customizer);

        result = _(object).setWith<number, SampleResult>('a.b[1]', value);
        result = _(object).setWith<number, SampleResult>('a.b[1]', value, customizer);
        result = _(object).setWith<number, SampleResult>(['a', 'b', 1], value);
        result = _(object).setWith<number, SampleResult>(['a', 'b', 1], value, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(object).chain().setWith<SampleResult>('a.b[1]', value);
        result = _(object).chain().setWith<SampleResult>('a.b[1]', value, customizer);
        result = _(object).chain().setWith<SampleResult>(['a', 'b', 1], value);
        result = _(object).chain().setWith<SampleResult>(['a', 'b', 1], value, customizer);

        result = _(object).chain().setWith<number, SampleResult>('a.b[1]', value);
        result = _(object).chain().setWith<number, SampleResult>('a.b[1]', value, customizer);
        result = _(object).chain().setWith<number, SampleResult>(['a', 'b', 1], value);
        result = _(object).chain().setWith<number, SampleResult>(['a', 'b', 1], value, customizer);
    }
}

// _.toPairs
namespace TestToPairs {
    let object: _.Dictionary<string> = {};

    {
        let result: [string, any][];

        result = _.toPairs<_.Dictionary<string>>(object);
    }

    {
        let result: [string, string][];

        result = _.toPairs<_.Dictionary<string>, string>(object);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<[string, string]>;

        result = _(object).toPairs<string>();
    }

    {
        let result: _.LoDashImplicitArrayWrapper<[string, any]>;

        result = _(object).toPairs();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<[string, string]>;

        result = _(object).chain().toPairs<string>();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<[string, any]>;

        result = _(object).chain().toPairs();
    }
}

// _.toPairsIn
namespace TestToPairsIn {
    let object: _.Dictionary<string> = {};

    {
        let result: [string, any][];

        result = _.toPairsIn<_.Dictionary<string>>(object);
    }

    {
        let result: [string, string][];

        result = _.toPairsIn<_.Dictionary<string>, string>(object);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<[string, string]>;

        result = _(object).toPairsIn<string>();
    }

    {
        let result: _.LoDashImplicitArrayWrapper<[string, any]>;

        result = _(object).toPairsIn();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<[string, string]>;

        result = _(object).chain().toPairsIn<string>();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<[string, any]>;

        result = _(object).chain().toPairs();
    }
}

// _.transform
namespace TestTransform {
    let array: number[] = [];
    let dictionary: _.Dictionary<number> = {};

    {
        let iterator = (acc: TResult[], curr: number, index?: number, arr?: number[]) => {};
        let accumulator: TResult[] = [];
        let result: TResult[];

        result = _.transform<number, TResult>(array);
        result = _.transform<number, TResult>(array, iterator);
        result = _.transform<number, TResult>(array, iterator, accumulator);

        result = _<number>(array).transform<TResult>().value();
        result = _<number>(array).transform<TResult>(iterator).value();
        result = _<number>(array).transform<TResult>(iterator, accumulator).value();
    }

    {
        let iterator = (acc: _.Dictionary<TResult>, curr: number, index?: number, arr?: number[]) => {};
        let accumulator: _.Dictionary<TResult> = {};
        let result: _.Dictionary<TResult>;

        result = _.transform<number, TResult>(array, iterator);
        result = _.transform<number, TResult>(array, iterator, accumulator);

        result = _<number>(array).transform<TResult>(iterator).value();
        result = _<number>(array).transform<TResult>(iterator, accumulator).value();
    }

    {
        let iterator = (acc: _.Dictionary<TResult>, curr: number, key?: string, dict?: _.Dictionary<number>) => {};
        let accumulator: _.Dictionary<TResult> = {};
        let result: _.Dictionary<TResult>;

        result = _.transform<number, TResult>(dictionary);
        result = _.transform<number, TResult>(dictionary, iterator);
        result = _.transform<number, TResult>(dictionary, iterator, accumulator);

        result = _(dictionary).transform<number, TResult>().value();
        result = _(dictionary).transform<number, TResult>(iterator).value();
        result = _(dictionary).transform<number, TResult>(iterator, accumulator).value();
    }

    {
        let iterator = (acc: TResult[], curr: number, key?: string, dict?: _.Dictionary<number>) => {};
        let accumulator: TResult[] = [];
        let result: TResult[];

        result = _.transform<number, TResult>(dictionary, iterator);
        result = _.transform<number, TResult>(dictionary, iterator, accumulator);

        result = _(dictionary).transform<number, TResult>(iterator).value();
        result = _(dictionary).transform<number, TResult>(iterator, accumulator).value();
    }
}

// _.unset
namespace TestUnset {
    type SampleObject = {a: {b: string; c: boolean}};

    let object: SampleObject = { a: { b: "", c: true } };

    {
        let result: boolean;

        _.unset<SampleObject>(object, 'a.b');
        _.unset<SampleObject>(object, ['a', 'b']);
    }

    {
        let result: _.LoDashImplicitWrapper<boolean>;

        result = _(object).unset('a.b');
        result = _(object).unset(['a', 'b']);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(object).chain().unset('a.b');
        result = _(object).chain().unset(['a', 'b']);
    }
}

// _.update
namespace TestUpdate {
    type SampleObject = {a: {}};
    type SampleResult = {a: {b: number[]}};

    let object: SampleObject = { a: {} };
    let updater = (value: any) => 0;

    {
        let result: SampleResult;

        result = _.update<SampleResult>(object, 'a.b[1]', updater);
        result = _.update<SampleResult>(object, ['a', 'b', 1], updater);

        result = _.update<(value: any) => number, SampleResult>(object, 'a.b[1]', updater);
        result = _.update<(value: any) => number, SampleResult>(object, ['a', 'b', 1], updater);

        result = _.update<SampleObject, SampleResult>(object, 'a.b[1]', updater);
        result = _.update<SampleObject, SampleResult>(object, ['a', 'b', 1], updater);

        result = _.update<SampleObject, (value: any) => number, SampleResult>(object, 'a.b[1]', updater);
        result = _.update<SampleObject, (value: any) => number, SampleResult>(object, ['a', 'b', 1], updater);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(object).update<SampleResult>('a.b[1]', updater);
        result = _(object).update<SampleResult>(['a', 'b', 1], updater);

        result = _(object).update<(value: any) => number, SampleResult>('a.b[1]', updater);
        result = _(object).update<(value: any) => number, SampleResult>(['a', 'b', 1], updater);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(object).chain().update<SampleResult>('a.b[1]', updater);
        result = _(object).chain().update<SampleResult>(['a', 'b', 1], updater);

        result = _(object).chain().update<(value: any) => number, SampleResult>('a.b[1]', updater);
        result = _(object).chain().update<(value: any) => number, SampleResult>(['a', 'b', 1], updater);
    }
}

// _.values
namespace TestValues {
    type SampleObject = {a: {}};

    {
        let result: any[];

        result = _.values();
        result = _.values(123);
        result = _.values(true);
        result = _.values(null);
    }

    {
        let result: string[];

        result = _.values('hi');
        result = _.values(['h', 'i']);
    }

    {
        let result: number[];

        result = _.values([1, 2]);
    }

    {
        let result: boolean[];

        result = _.values([true, false]);
    }

    {
        let dict: _.Dictionary<SampleObject> = {};
        let numDict: _.NumericDictionary<SampleObject> = {};
        let list: _.List<SampleObject> = [];
        let object: {a: SampleObject} = { a: { a: {} } };
        let result: SampleObject[];

        result = _.values(dict);
        result = _.values(numDict);
        result = _.values(list);
        result = _.values<SampleObject>(object);
    }

    // Implicit wrapper

    {
        let result: _.LoDashImplicitArrayWrapper<any>;

        result = _(123).values();
        result = _(true).values();
        result = _(null).values();
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _('hi').values();
        result = _(['h', 'i']).values();
    }

    {
        let result: _.LoDashImplicitArrayWrapper<number>;

        result = _([1, 2]).values();
    }

    {
        let result: _.LoDashImplicitArrayWrapper<boolean>;

        result = _([true, false]).values();
    }

    {
        let dict: _.Dictionary<SampleObject> = {};
        let numDict: _.NumericDictionary<SampleObject> = {};
        let list: _.List<SampleObject> = [];
        let object: {a: SampleObject} = { a: { a: {} } };
        let result: _.LoDashImplicitArrayWrapper<SampleObject>;

        result = _(dict).values<SampleObject>();
        result = _(numDict).values<SampleObject>();
        result = _(list).values<SampleObject>();
        result = _(object).values<SampleObject>();
    }

    // Explicit wrapper

    {
        let result: _.LoDashExplicitArrayWrapper<any>;

        result = _(123).chain().values();
        result = _(true).chain().values();
        result = _(null).chain().values();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _('hi').chain().values<string>();
        result = _(['h', 'i']).chain().values();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<number>;

        result = _([1, 2]).chain().values();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<boolean>;

        result = _([true, false]).chain().values();
    }

    {
        let dict: _.Dictionary<SampleObject> = {};
        let numDict: _.NumericDictionary<SampleObject> = {};
        let list: _.List<SampleObject> = [];
        let object: {a: SampleObject} = { a: { a: {} } };
        let result: _.LoDashExplicitArrayWrapper<SampleObject>;

        result = _(dict).chain().values<SampleObject>();
        result = _(numDict).chain().values<SampleObject>();
        result = _(list).chain().values<SampleObject>();
        result = _(object).chain().values<SampleObject>();
    }
}

// _.valuesIn
namespace TestValuesIn {
    let object: _.Dictionary<TResult> = {};

    {
        let result: TResult[];

        result = _.valuesIn(object);
    }

    {
        let result: TResult[];

        // Without this type hint, this will fail to compile, as expected.
        result = _.valuesIn<TResult>({});
    }

    {
        let result: TResult[];

        result = _.values(object);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(object).valuesIn<TResult>();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(object).chain().valuesIn<TResult>();
    }
}

/**********
 * String *
 **********/

// _.camelCase
namespace TestCamelCase {
    {
        let result: string;

        result = _.camelCase('Foo Bar');
        result = _('Foo Bar').camelCase();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('Foo Bar').chain().camelCase();
    }
}

// _.capitalize
namespace TestCapitalize {
    {
        let result: string;

        result = _.capitalize('fred');
        result = _('fred').capitalize();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('fred').chain().capitalize();
    }
}

// _.deburr
namespace TestDeburr {
    {
        let result: string;

        result = _.deburr('déjà vu');
        result = _('déjà vu').deburr();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('déjà vu').chain().deburr();
    }
}

// _.endsWith
namespace TestEndsWith {
    {
        let result: boolean;

        result = _.endsWith('abc', 'c');
        result = _.endsWith('abc', 'c', 1);

        result = _('abc').endsWith('c');
        result = _('abc').endsWith('c', 1);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _('abc').chain().endsWith('c');
        result = _('abc').chain().endsWith('c', 1);
    }
}

// _.escape
namespace TestEscape {
    {
        let result: string;

        result = _.escape('fred, barney, & pebbles');
        result = _('fred, barney, & pebbles').escape();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('fred, barney, & pebbles').chain().escape();
    }
}

// _.escapeRegExp
namespace TestEscapeRegExp {
    {
        let result: string;

        result = _.escapeRegExp('[lodash](https://lodash.com/)');
        result = _('[lodash](https://lodash.com/)').escapeRegExp();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('[lodash](https://lodash.com/)').chain().escapeRegExp();
    }
}

// _.kebabCase
namespace TestKebabCase {
    {
        let result: string;

        result = _.kebabCase('Foo Bar');
        result = _('Foo Bar').kebabCase();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('Foo Bar').chain().kebabCase();
    }
}

// _.lowerCase
namespace TestLowerCase {
    {
        let result: string;

        result = _.lowerCase('Foo Bar');
        result = _('Foo Bar').lowerCase();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('Foo Bar').chain().lowerCase();
    }
}

// _.lowerFirst
namespace TestLowerFirst {
    {
        let result: string;

        result = _.lowerFirst('Foo Bar');
        result = _('Foo Bar').lowerFirst();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('Foo Bar').chain().lowerFirst();
    }
}

// _.pad
namespace TestPad {
    {
        let result: string;

        result = _.pad('abc');
        result = _.pad('abc', 8);
        result = _.pad('abc', 8, '_-');

        result = _('abc').pad();
        result = _('abc').pad(8);
        result = _('abc').pad(8, '_-');
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('abc').chain().pad();
        result = _('abc').chain().pad(8);
        result = _('abc').chain().pad(8, '_-');
    }
}

// _.padEnd
namespace TestPadEnd {
    {
        let result: string;

        result = _.padEnd('abc');
        result = _.padEnd('abc', 6);
        result = _.padEnd('abc', 6, '_-');

        result = _('abc').padEnd();
        result = _('abc').padEnd(6);
        result = _('abc').padEnd(6, '_-');
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('abc').chain().padEnd();
        result = _('abc').chain().padEnd(6);
        result = _('abc').chain().padEnd(6, '_-');
    }
}

// _.padStart
namespace TestPadStart {
    {
        let result: string;

        result = _.padStart('abc');
        result = _.padStart('abc', 6);
        result = _.padStart('abc', 6, '_-');

        result = _('abc').padStart();
        result = _('abc').padStart(6);
        result = _('abc').padStart(6, '_-');
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('abc').chain().padStart();
        result = _('abc').chain().padStart(6);
        result = _('abc').chain().padStart(6, '_-');
    }
}

// _.parseInt
namespace TestParseInt {
    {
        let result: number;

        result = _.parseInt('08');
        result = _.parseInt('08', 10);

        result = _('08').parseInt();
        result = _('08').parseInt(10);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _('08').chain().parseInt();
        result = _('08').chain().parseInt(10);
    }
}

// _.repeat
namespace TestRepeat {
    {
        let result: string;
        result = _.repeat('*');
        result = _.repeat('*', 3);

        result = _('*').repeat();
        result = _('*').repeat(3);
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('*').chain().repeat();
        result = _('*').chain().repeat(3);
    }
}

// _.replace
namespace TestReplace {
    let replacer = (match: string, offset: number, string: string) => 'Barney';

    {
        let result: string;

        result = _.replace('Hi Fred', 'Fred', 'Barney');
        result = _.replace('Hi Fred', 'Fred', replacer);

        result = _.replace('Hi Fred', /fred/i, 'Barney');
        result = _.replace('Hi Fred', /fred/i, replacer);

        result = _.replace('Fred');
        result = _.replace('Fred', 'Barney');
        result = _.replace('Fred', replacer);

        result = _.replace(/fred/i);
        result = _.replace(/fred/i, 'Barney');
        result = _.replace(/fred/i, replacer);

        result = _('Hi Fred').replace('Fred', 'Barney');
        result = _('Hi Fred').replace('Fred', replacer);

        result = _('Hi Fred').replace(/fred/i, 'Barney');
        result = _('Hi Fred').replace(/fred/i, replacer);

        result = _('Fred').replace();
        result = _('Fred').replace('Barney');
        result = _('Fred').replace(replacer);

        result = _(/fred/i).replace();
        result = _(/fred/i).replace('Barney');
        result = _(/fred/i).replace(replacer);
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('Hi Fred').chain().replace('Fred', 'Barney');
        result = _('Hi Fred').chain().replace('Fred', replacer);

        result = _('Hi Fred').chain().replace(/fred/i, 'Barney');
        result = _('Hi Fred').chain().replace(/fred/i, replacer);

        result = _('Fred').chain().replace();
        result = _('Fred').chain().replace('Barney');
        result = _('Fred').chain().replace(replacer);

        result = _(/fred/i).chain().replace();
        result = _(/fred/i).chain().replace('Barney');
        result = _(/fred/i).chain().replace(replacer);
    }
}

// _.snakeCase
namespace TestSnakeCase {
    {
        let result: string;

        result = _.snakeCase('Foo Bar');
        result = _('Foo Bar').snakeCase();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('Foo Bar').chain().snakeCase();
    }
}

// _.split
namespace TestSplit {
    {
        let result: string[];

        result = _.split('a-b-c');
        result = _.split('a-b-c', '-');
        result = _.split('a-b-c', '-', 2);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _('a-b-c').split();
        result = _('a-b-c').split('-');
        result = _('a-b-c').split('-', 2);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _('a-b-c').chain().split();
        result = _('a-b-c').chain().split('-');
        result = _('a-b-c').chain().split('-', 2);
    }
}

// _.startCase
namespace TestStartCase {
    {
        let result: string;

        result = _.startCase('--foo-bar');
        result = _('--foo-bar').startCase();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('--foo-bar').chain().startCase();
    }
}

// _.startsWith
namespace TestStartsWith {
    {
        let result: boolean;

        result = _.startsWith('abc', 'a');
        result = _.startsWith('abc', 'a', 1);

        result = _('abc').startsWith('a');
        result = _('abc').startsWith('a', 1);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _('abc').chain().startsWith('a');
        result = _('abc').chain().startsWith('a', 1);
    }
}

// _.template
namespace TestTemplate {
    interface TemplateExecutor {
        (obj?: Object): string;
        source: string;
    }

    let options: {
        escape?: RegExp;
        evaluate?: RegExp;
        imports?: _.Dictionary<any>;
        interpolate?: RegExp;
        sourceURL?: string;
        variable?: string;
    } = {};

    {
        let result: TemplateExecutor;

        result = _.template('');
        result = _.template('', options);

        result = _('').template();
        result = _('').template(options);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<TemplateExecutor>;

        result = _('').chain().template();
        result = _('').chain().template(options);
    }
}

// _.toLower
namespace TestToLower {
    {
        let result: string;

        result = _.toLower('fred, barney, &amp; pebbles');
        result = _('fred, barney, &amp; pebbles').toLower();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('fred, barney, &amp; pebbles').chain().toLower();
    }
}

// _.toUpper
namespace TestToUpper {
    {
        let result: string;

        result = _.toUpper('fred, barney, &amp; pebbles');
        result = _('fred, barney, &amp; pebbles').toUpper();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('fred, barney, &amp; pebbles').chain().toUpper();
    }
}

// _.trim
namespace TestTrim {
    {
        let result: string;

        result = _.trim();
        result = _.trim('  abc  ');
        result = _.trim('-_-abc-_-', '_-');

        result = _('-_-abc-_-').trim();
        result = _('-_-abc-_-').trim('_-');
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('-_-abc-_-').chain().trim();
        result = _('-_-abc-_-').chain().trim('_-');
    }
}

// _.trimEnd
namespace TestTrimEnd {
    {
        let result: string;

        result = _.trimEnd();
        result = _.trimEnd('  abc  ');
        result = _.trimEnd('-_-abc-_-', '_-');

        result = _('-_-abc-_-').trimEnd();
        result = _('-_-abc-_-').trimEnd('_-');
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('-_-abc-_-').chain().trimEnd();
        result = _('-_-abc-_-').chain().trimEnd('_-');
    }
}

// _.trimStart
namespace TestTrimStart {
    {
        let result: string;

        result = _.trimStart();
        result = _.trimStart('  abc  ');
        result = _.trimStart('-_-abc-_-', '_-');

        result = _('-_-abc-_-').trimStart();
        result = _('-_-abc-_-').trimStart('_-');
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('-_-abc-_-').chain().trimStart();
        result = _('-_-abc-_-').chain().trimStart('_-');
    }
}

// _.truncate
namespace TestTruncate {
    {
        let result: string;

        result = _.truncate('hi-diddly-ho there, neighborino');
        result = _.truncate('hi-diddly-ho there, neighborino', { 'length': 24, 'separator': ' ' });
        result = _.truncate('hi-diddly-ho there, neighborino', { 'length': 24, 'separator': /,? +/ });
        result = _.truncate('hi-diddly-ho there, neighborino', { 'omission': ' […]' });

        result = _('hi-diddly-ho there, neighborino').truncate();
        result = _('hi-diddly-ho there, neighborino').truncate({ 'length': 24, 'separator': ' ' });
        result = _('hi-diddly-ho there, neighborino').truncate({ 'length': 24, 'separator': /,? +/ });
        result = _('hi-diddly-ho there, neighborino').truncate({ 'omission': ' […]' });
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('hi-diddly-ho there, neighborino').chain().truncate();
        result = _('hi-diddly-ho there, neighborino').chain().truncate({ 'length': 24, 'separator': ' ' });
        result = _('hi-diddly-ho there, neighborino').chain().truncate({ 'length': 24, 'separator': /,? +/ });
        result = _('hi-diddly-ho there, neighborino').chain().truncate({ 'omission': ' […]' });
    }
}

// _.unescape
namespace TestUnescape {
    {
        let result: string;

        result = _.unescape('fred, barney, &amp; pebbles');
        result = _('fred, barney, &amp; pebbles').unescape();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('fred, barney, &amp; pebbles').chain().unescape();
    }
}

// _.upperCase
namespace TestUpperCase {
    {
        let result: string;

        result = _.upperCase('fred, barney, &amp; pebbles');
        result = _('fred, barney, &amp; pebbles').upperCase();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('fred, barney, &amp; pebbles').chain().upperCase();
    }
}

// _.upperFirst
namespace TestUpperFirst {
    {
        let result: string;

        result = _.upperFirst('fred, barney, &amp; pebbles');
        result = _('fred, barney, &amp; pebbles').upperFirst();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('fred, barney, &amp; pebbles').chain().upperFirst();
    }
}

// _.words
namespace TestWords {
    {
        let result: string[];

        result = _.words('fred, barney, & pebbles');
        result = _.words('fred, barney, & pebbles', /[^, ]+/g);

        result = _('fred, barney, & pebbles').words();
        result = _('fred, barney, & pebbles').words(/[^, ]+/g);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _('fred, barney, & pebbles').chain().words();
        result = _('fred, barney, & pebbles').chain().words(/[^, ]+/g);
    }
}

/***********
 * Utility *
 ***********/

// _.attempt
namespace TestAttempt {
    let func: (...args: any[]) => {a: string} = (...args) => ({ a: "" });

    {
        let result: {a: string}|Error;

        result = _.attempt<{a: string}>(func);
        result = _.attempt<{a: string}>(func, 'foo', 'bar', 'baz');
        result = _(func).attempt<{a: string}>();
        result = _(func).attempt<{a: string}>('foo', 'bar', 'baz');
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{a: string}|Error>;

        result = _(func).chain().attempt<{a: string}>();
        result = _(func).chain().attempt<{a: string}>('foo', 'bar', 'baz');
    }
}

// _.constant
namespace TestConstant {
    {
        let result: () => number;
        result = _.constant<number>(42);
    }

    {
        let result: () => string;
        result = _.constant<string>('a');
    }

    {
        let result: () => boolean;
        result = _.constant<boolean>(true);
    }

    {
        let result: () => string[];
        result = _.constant<string[]>(['a']);
    }

    {
        let result: () => {a: string};
        result = _.constant<{a: string}>({a: 'a'});
    }

    {
        let result: _.LoDashImplicitObjectWrapper<() => number>;
        result = _(42).constant<number>();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<() => string>;
        result = _('a').constant<string>();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<() => boolean>;
        result = _(true).constant<boolean>();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<() => string[]>;
        result = _(['a']).constant<string[]>();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<() => {a: string}>;
        result = _({a: 'a'}).constant<{a: string}>();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<() => number>;
        result = _(42).chain().constant<number>();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<() => string>;
        result = _('a').chain().constant<string>();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<() => boolean>;
        result = _(true).chain().constant<boolean>();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<() => string[]>;
        result = _(['a']).chain().constant<string[]>();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<() => {a: string}>;
        result = _({a: 'a'}).chain().constant<{a: string}>();
    }
}

// _.defaultTo
namespace TestDefaultTo {
    {
        let result: number;
        result = _.defaultTo<number>(42, 42);
        result = _.defaultTo<number>(undefined, 42);
        result = _.defaultTo<number>(null, 42);
        result = _.defaultTo<number>(NaN, 42);
    }

    {
        let result: string;
        result = _.defaultTo<string>('a', 'default');
        result = _.defaultTo<string>(undefined, 'default');
        result = _.defaultTo<string>(null, 'default');
    }

    {
        let result: boolean;
        result = _.defaultTo<boolean>(true, true);
        result = _.defaultTo<boolean>(undefined, true);
        result = _.defaultTo<boolean>(null, true);
    }

    {
        let result: string[];
        result = _.defaultTo<string[]>(['a'], ['default']);
        result = _.defaultTo<string[]>(undefined, ['default']);
        result = _.defaultTo<string[]>(null, ['default']);
    }

    {
        let result: {a: string};
        result = _.defaultTo<{a: string}>({a: 'a'}, {a: 'a'});
        result = _.defaultTo<{a: string}>(undefined, {a: 'a'});
        result = _.defaultTo<{a: string}>(null, {a: 'a'});
    }

    {
        let result: _.LoDashImplicitObjectWrapper<number>;
        result = _(42).defaultTo(42);
        result = _(undefined).defaultTo(42);
        result = _(null).defaultTo(42);
        result = _(NaN).defaultTo(42);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<string>;
        result = _('a').defaultTo('default');
        result = _(null).defaultTo('default');
        result = _(NaN).defaultTo('default');
    }

    {
        let result: _.LoDashImplicitObjectWrapper<boolean>;
        result = _(true).defaultTo(true);
        result = _(undefined).defaultTo(true);
        result = _(null).defaultTo(true);
        result = _(NaN).defaultTo(true);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<string[]>;
        result = _(['a']).defaultTo(['default']);
        result = _(undefined).defaultTo(['default']);
        result = _(null).defaultTo(['default']);
        result = _(NaN).defaultTo(['default']);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: string }>;
        result = _({ a: 'a' }).defaultTo({a : 'a'});
        result = _(undefined).defaultTo({a : 'a'});
        result = _(null).defaultTo({a : 'a'});
        result = _(NaN).defaultTo({a : 'a'});
    }

    {
        let result: _.LoDashExplicitObjectWrapper<number>;
        result = _(42).chain().defaultTo(42);
        result = _(undefined).chain().defaultTo(42);
        result = _(null).chain().defaultTo(42);
        result = _(NaN).chain().defaultTo(42);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<string>;
        result = _('a').chain().defaultTo('default');
        result = _(undefined).chain().defaultTo('default');
        result = _(null).chain().defaultTo('default');
        result = _(NaN).chain().defaultTo('default');
    }

    {
        let result: _.LoDashExplicitObjectWrapper<boolean>;
        result = _(true).chain().defaultTo(true);
        result = _(undefined).chain().defaultTo(true);
        result = _(null).chain().defaultTo(true);
        result = _(NaN).chain().defaultTo(true);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<string[]>;
        result = _(['a']).chain().defaultTo(['default']);
        result = _(undefined).chain().defaultTo(['default']);
        result = _(null).chain().defaultTo(['default']);
        result = _(NaN).chain().defaultTo(['default']);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: string }>;
        result = _({ a: 'a' }).chain().defaultTo({a : 'a'});
        result = _(undefined).chain().defaultTo({a : 'a'});
        result = _(null).chain().defaultTo({a : 'a'});
        result = _(NaN).chain().defaultTo({a : 'a'});
    }
}

// _.identity
namespace TestIdentity {
    {
        let result: number;

        result = _.identity(42);
        result = _(42).identity();
    }

    {
        let result: number[];

        result = _.identity([42]);
        result = _([42]).identity();
    }

    {
        let result: {a: number};

        result = _.identity({a: 42});
        result = _({a: 42}).identity();
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(42).chain().identity();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<number>;

        result = _([42]).chain().identity();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{a: number}>;

        result = _({a: 42}).chain().identity();
    }

    {
        let input: {} | null | undefined = any;
        _.identity(input); // $ExpectType {} | null | undefined
        _.identity(); // $ExpectType undefined
    }
}

// _.iteratee
namespace TestIteratee {
    {
        let func = _.iteratee();

        func(); // $ExpectType undefined;
        func(1); // $ExpectType number;
        func(""); // $ExpectType string;
    }

    {
        _.iteratee((value: string, indeX: number, collection: string[]): TResult => any); // $ExpectType (value: string, indeX: number, collection: string[]) => TResult
        _.iteratee((a: TResult): boolean => any); // $ExpectType (a: TResult) => boolean
        _.iteratee((a: TResult | undefined): a is undefined => any); // $ExpectType (a: TResult | undefined) => a is undefined

        _((...args: any[]): TResult => any).iteratee(); // $ExpectType LoDashImplicitWrapper<(...args: any[]) => TResult>
        _((a: TResult): boolean => any).iteratee(); // $ExpectType LoDashImplicitWrapper<(a: TResult) => boolean>
        _((a: TResult | undefined): a is undefined => any).iteratee(); // $ExpectType LoDashImplicitWrapper<(a: TResult | undefined) => a is undefined>
        
        _.chain((...args: any[]): TResult => any).iteratee().value(); // $ExpectType LoDashExplicitWrapper<(...args: any[]) => TResult>
        _.chain((a: TResult): boolean => any).iteratee().value(); // $ExpectType LoDashExplicitWrapper<(a: TResult) => boolean>
        _.chain((a: TResult | undefined): a is undefined => any).iteratee().value(); // $ExpectType LoDashExplicitWrapper<(a: TResult | undefined) => a is undefined>
    }

    {
        let result: (...args: any[]) => any;

        result = _.iteratee('');
        result = _.iteratee({});
        
        result = _('').iteratee().value();
        result = _({}).iteratee().value();
        
        result = _.chain('').iteratee().value();
        result = _.chain({}).iteratee().value();
    }
}

// _.matches
namespace TestMatches {
    let source: TResult = { a: 1, b: "", c: true };

    {
        let result: (value: any) => boolean;
        result = _.matches<TResult>(source);
    }

    {
        let result: (value: TResult) => boolean;
        result = _.matches<TResult, TResult>(source);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(value: TResult) => boolean>;
        result = _(source).matches<TResult>();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(value: TResult) => boolean>;
        result = _(source).chain().matches<TResult>();
    }
}

// _.matchesProperty
namespace TestMatches {
    let path: {toString(): string;}|{toString(): string;}[] = [];
    let source: TResult = { a: 1, b: "", c: true };

    {
        let result: (value: any) => boolean;

        result = _.matchesProperty<TResult>(path, source);
    }

    {
        let result: (value: TResult) => boolean;

        result = _.matchesProperty<TResult, TResult>(path, source);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(value: any) => boolean>;

        result = _(path).matchesProperty<TResult>(source);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(value: TResult) => boolean>;

        result = _(path).matchesProperty<TResult, TResult>(source);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(value: any) => boolean>;

        result = _(path).chain().matchesProperty<TResult>(source);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(value: TResult) => boolean>;

        result = _(path).chain().matchesProperty<TResult, TResult>(source);
    }
}

// _.method
namespace TestMethod {
    {
        let result: (object: any) => {a: string};

        result = _.method<{a: string}>('a.0');
        result = _.method<{a: string}>('a.0', any, any);
        result = _.method<{a: string}>('a.0', any, any, any);

        result = _.method<{a: string}>(['a', 0]);
        result = _.method<{a: string}>(['a', 0], any);
        result = _.method<{a: string}>(['a', 0], any, any);
        result = _.method<{a: string}>(['a', 0], any, any, any);
    }

    {
        let result: (object: {a: string}) => {b: string};

        result = _.method<{a: string}, {b: string}>('a.0');
        result = _.method<{a: string}, {b: string}>('a.0', any, any);
        result = _.method<{a: string}, {b: string}>('a.0', any, any, any);

        result = _.method<{a: string}, {b: string}>(['a', 0]);
        result = _.method<{a: string}, {b: string}>(['a', 0], any);
        result = _.method<{a: string}, {b: string}>(['a', 0], any, any);
        result = _.method<{a: string}, {b: string}>(['a', 0], any, any, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(object: any) => {a: string}>;

        result = _('a.0').method<{a: string}>();
        result = _('a.0').method<{a: string}>(any);
        result = _('a.0').method<{a: string}>(any, any);
        result = _('a.0').method<{a: string}>(any, any, any);

        result = _(['a', 0]).method<{a: string}>();
        result = _(['a', 0]).method<{a: string}>(any);
        result = _(['a', 0]).method<{a: string}>(any, any);
        result = _(['a', 0]).method<{a: string}>(any, any, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(object: {a: string}) => {b: string}>;

        result = _('a.0').method<{a: string}, {b: string}>();
        result = _('a.0').method<{a: string}, {b: string}>(any);
        result = _('a.0').method<{a: string}, {b: string}>(any, any);
        result = _('a.0').method<{a: string}, {b: string}>(any, any, any);

        result = _(['a', 0]).method<{a: string}, {b: string}>();
        result = _(['a', 0]).method<{a: string}, {b: string}>(any);
        result = _(['a', 0]).method<{a: string}, {b: string}>(any, any);
        result = _(['a', 0]).method<{a: string}, {b: string}>(any, any, any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(object: any) => {a: string}>;

        result = _('a.0').chain().method<{a: string}>();
        result = _('a.0').chain().method<{a: string}>(any);
        result = _('a.0').chain().method<{a: string}>(any, any);
        result = _('a.0').chain().method<{a: string}>(any, any, any);

        result = _(['a', 0]).chain().method<{a: string}>();
        result = _(['a', 0]).chain().method<{a: string}>(any);
        result = _(['a', 0]).chain().method<{a: string}>(any, any);
        result = _(['a', 0]).chain().method<{a: string}>(any, any, any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(object: {a: string}) => {b: string}>;

        result = _('a.0').chain().method<{a: string}, {b: string}>();
        result = _('a.0').chain().method<{a: string}, {b: string}>(any);
        result = _('a.0').chain().method<{a: string}, {b: string}>(any, any);
        result = _('a.0').chain().method<{a: string}, {b: string}>(any, any, any);

        result = _(['a', 0]).chain().method<{a: string}, {b: string}>();
        result = _(['a', 0]).chain().method<{a: string}, {b: string}>(any);
        result = _(['a', 0]).chain().method<{a: string}, {b: string}>(any, any);
        result = _(['a', 0]).chain().method<{a: string}, {b: string}>(any, any, any);
    }
}

// _.methodOf
namespace TestMethodOf {
    type SampleObject = { a: { b(): TResult }[] };
    type ResultFn = (path: _.StringRepresentable|_.StringRepresentable[]) => TResult;

    let object: SampleObject = { a: [] };

    {
        let result: ResultFn;

        result = _.methodOf<SampleObject, TResult>(object);
        result = _.methodOf<SampleObject, TResult>(object, any);
        result = _.methodOf<SampleObject, TResult>(object, any, any);
        result = _.methodOf<SampleObject, TResult>(object, any, any, any);

        result = _.methodOf<TResult>(object);
        result = _.methodOf<TResult>(object, any);
        result = _.methodOf<TResult>(object, any, any);
        result = _.methodOf<TResult>(object, any, any, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<ResultFn>;

        result = _(object).methodOf<TResult>();
        result = _(object).methodOf<TResult>(any);
        result = _(object).methodOf<TResult>(any, any);
        result = _(object).methodOf<TResult>(any, any, any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<ResultFn>;

        result = _(object).chain().methodOf<TResult>();
        result = _(object).chain().methodOf<TResult>(any);
        result = _(object).chain().methodOf<TResult>(any, any);
        result = _(object).chain().methodOf<TResult>(any, any, any);
    }
}

// _.mixin
namespace TestMixin {
    let source: _.Dictionary<Function> = {};
    let options: {chain?: boolean} = {};

    {
        let result: TResult;

        result = _.mixin<TResult, Object>({}, source);
        result = _.mixin<TResult, Object>({}, source, options);
        result = _.mixin<TResult>(source);
        result = _.mixin<TResult>(source, options);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<TResult>;

        result = _({}).mixin<TResult>(source);
        result = _({}).mixin<TResult>(source, options);
        result = _(source).mixin<TResult>();
        result = _(source).mixin<TResult>(options);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<TResult>;

        result = _({}).chain().mixin<TResult>(source);
        result = _({}).chain().mixin<TResult>(source, options);
        result = _(source).chain().mixin<TResult>();
        result = _(source).chain().mixin<TResult>(options);
    }
}

// _.noConflict
namespace TestNoConflict {
    {
        let result: typeof _;

        result = _.noConflict();
        result = _(42).noConflict();
        result = _<any>([]).noConflict();
        result = _({}).noConflict();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<typeof _>;

        result = _(42).chain().noConflict();
        result = _<any>([]).chain().noConflict();
        result = _({}).chain().noConflict();
    }
}

// _.noop
namespace TestNoop {
    {
        let result: void; // tslint:disable-line:void-return

        result = _.noop();
        result = _.noop(1);
        result = _.noop('a', 1);
        result = _.noop(true, 'a', 1);

        result = _('a').noop(true, 'a', 1);
        result = _([1]).noop(true, 'a', 1);
        result = _<string>([]).noop(true, 'a', 1);
        result = _({}).noop(true, 'a', 1);
        result = _(any).noop(true, 'a', 1);
    }

    {
        let result: _.LoDashExplicitWrapper<void>;

        result = _('a').chain().noop(true, 'a', 1);
        result = _([1]).chain().noop(true, 'a', 1);
        result = _<string>([]).chain().noop(true, 'a', 1);
        result = _({}).chain().noop(true, 'a', 1);
        result = _(any).chain().noop(true, 'a', 1);
    }
}

namespace TestNthArg {
    type SampleFunc = (...args: any[]) => any;

    {
        let result: SampleFunc;

        result = _.nthArg<SampleFunc>();
        result = _.nthArg<SampleFunc>(1);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<SampleFunc>;

        result = _(1).nthArg<SampleFunc>();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<SampleFunc>;

        result = _(1).chain().nthArg<SampleFunc>();
    }
}

// _.over
namespace TestOver {
    {
        let result: (...args: any[]) => number[];

        result = _.over<number>(Math.max);
        result = _.over<number>(Math.max, Math.min);
        result = _.over<number>([Math.max]);
        result = _.over<number>([Math.max], [Math.min]);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(...args: any[]) => number[]>;

        result = _(Math.max).over<number>();
        result = _(Math.max).over<number>(Math.min);
        result = _([Math.max]).over<number>();
        result = _([Math.max]).over<number>([Math.min]);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(...args: any[]) => number[]>;

        result = _(Math.max).chain().over<number>();
        result = _(Math.max).chain().over<number>(Math.min);
        result = _([Math.max]).chain().over<number>();
        result = _([Math.max]).chain().over<number>([Math.min]);
    }
}

// _.overEvery
namespace TestOverEvery {
    {
        let result: (...args: any[]) => boolean;

        result = _.overEvery(() => true);
        result = _.overEvery(() => true, () => true);
        result = _.overEvery([() => true]);
        result = _.overEvery([() => true], [() => true]);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(...args: any[]) => boolean>;

        result = _(Math.max).overEvery();
        result = _(Math.max).overEvery(() => true);
        result = _([Math.max]).overEvery();
        result = _([Math.max]).overEvery([() => true]);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(...args: any[]) => boolean>;

        result = _(Math.max).chain().overEvery();
        result = _(Math.max).chain().overEvery(() => true);
        result = _([Math.max]).chain().overEvery();
        result = _([Math.max]).chain().overEvery([() => true]);
    }
}

// _.overSome
namespace TestOverSome {
    {
        let result: (...args: any[]) => boolean;

        result = _.overSome(() => true);
        result = _.overSome(() => true, () => true);
        result = _.overSome([() => true]);
        result = _.overSome([() => true], [() => true]);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(...args: any[]) => boolean>;

        result = _(Math.max).overSome();
        result = _(Math.max).overSome(() => true);
        result = _([Math.max]).overSome();
        result = _([Math.max]).overSome([() => true]);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(...args: any[]) => boolean>;

        result = _(Math.max).chain().overSome();
        result = _(Math.max).chain().overSome(() => true);
        result = _([Math.max]).chain().overSome();
        result = _([Math.max]).chain().overSome([() => true]);
    }
}

// _.property
namespace TestProperty {
    interface SampleObject {
        a: {
            b: number[];
        }
    }

    {
        let result: (object: SampleObject) => number;

        result = _.property<SampleObject, number>('a.b[0]');
        result = _.property<SampleObject, number>(['a', 'b', 0]);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(object: SampleObject) => number>;

        result = _('a.b[0]').property<SampleObject, number>();
        result = _(['a', 'b', 0]).property<SampleObject, number>();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(object: SampleObject) => number>;

        result = _('a.b[0]').chain().property<SampleObject, number>();
        result = _(['a', 'b', 0]).chain().property<SampleObject, number>();
    }
}

// _.propertyOf
namespace TestPropertyOf {
    interface SampleObject {
        a: {
            b: number[];
        }
    }

    let object: SampleObject = { a: { b: [] } };

    {
        let result: (path: string|string[]) => any;

        result = _.propertyOf({});
        result = _.propertyOf<SampleObject>(object);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(path: string|string[]) => any>;

        result = _({}).propertyOf();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(path: string|string[]) => any>;

        result = _({}).chain().propertyOf();
    }
}

// _.range
namespace TestRange {
    {
        let result: number[];

        result = _.range(10);
        result = _.range(1, 11);
        result = _.range(0, 30, 5);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<number>;

        result = _(10).range();
        result = _(1).range(11);
        result = _(0).range(30, 5);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<number>;

        result = _(10).chain().range();
        result = _(1).chain().range(11);
        result = _(0).chain().range(30, 5);
    }
}

// _.rangeRight
namespace TestRangeRight {
    {
        let result: number[];

        result = _.rangeRight(10);
        result = _.rangeRight(1, 11);
        result = _.rangeRight(0, 30, 5);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<number>;

        result = _(10).rangeRight();
        result = _(1).rangeRight(11);
        result = _(0).rangeRight(30, 5);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<number>;

        result = _(10).chain().rangeRight();
        result = _(1).chain().rangeRight(11);
        result = _(0).chain().rangeRight(30, 5);
    }
}

// _.runInContext
{
    let result: typeof _;
    result = _.runInContext();
    result = _.runInContext({});
    result = _({}).runInContext();
}

// _.stubArray
{
    {
        let result: any[];

        result = _.stubArray();
        result = _(any).stubArray();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<any>;

        result = _('a').chain().stubArray();
        result = _([1]).chain().stubArray();
        result = _<string>([]).chain().stubArray();
        result = _({}).chain().stubArray();
        result = _(any).chain().stubArray();
    }
}

// _.stubFalse
{
    {
        let result: boolean;

        result = _.stubFalse();
        result = _(any).stubFalse();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _('a').chain().stubFalse();
        result = _([1]).chain().stubFalse();
        result = _<string>([]).chain().stubFalse();
        result = _({}).chain().stubFalse();
        result = _(any).chain().stubFalse();
    }
}

// _.stubObject
{
    {
        let result: Object;

        result = _.stubObject();
        result = _(any).stubObject();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<Object>;

        result = _('a').chain().stubObject();
        result = _([1]).chain().stubObject();
        result = _<string>([]).chain().stubObject();
        result = _({}).chain().stubObject();
        result = _(any).chain().stubObject();
    }
}

// _.stubString
{
    {
        let result: string;

        result = _.stubString();
        result = _(any).stubString();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('a').chain().stubString();
        result = _([1]).chain().stubString();
        result = _<string>([]).chain().stubString();
        result = _({}).chain().stubString();
        result = _(any).chain().stubString();
    }
}

// _.stubTrue
{
    {
        let result: boolean;

        result = _.stubTrue();
        result = _(any).stubTrue();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _('a').chain().stubTrue();
        result = _([1]).chain().stubTrue();
        result = _<string>([]).chain().stubTrue();
        result = _({}).chain().stubTrue();
        result = _(any).chain().stubTrue();
    }
}

// _.times
namespace TestTimes {
    let iteratee: (num: number) => TResult = (num: number) => ({ a: 1, b: "", c: true });

    {
        let result: number[];

        result = _.times(42);
        result = _(42).times();
    }

    {
        let result: TResult[];

        result = _.times(42, iteratee);
        result = _(42).times(iteratee);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<number>;

        result = _(42).chain().times();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(42).chain().times(iteratee);
    }
}

// _.toPath
namespace TestToPath {
   {
       let result: string[];
       result = _.toPath(true);
       result = _.toPath(1);
       result = _.toPath('a');
       result = _.toPath(["a"]);
       result = _.toPath({});
   }

   {
       let result: _.LoDashImplicitWrapper<string[]>;

       result = _(true).toPath();
       result = _(1).toPath();
       result = _('a').toPath();
       result = _([1]).toPath();
       result = _<string>(["a"]).toPath();
       result = _({}).toPath();
   }
}

// _.uniqueId
namespace TestUniqueId {
    {
        let result: string;

        result = _.uniqueId();
        result = _.uniqueId('');

        result = _('').uniqueId();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('').chain().uniqueId();
    }
}

result = <string>_.VERSION;
result = <_.TemplateSettings>_.templateSettings;

// _.partial & _.partialRight
{
    function func0(): number {
        return 42;
    }
    function func1(arg1: number): number {
        return arg1 * 2;
    }
    function func2(arg1: number, arg2: string): number {
        return arg1 * arg2.length;
    }
    function func3(arg1: number, arg2: string, arg3: boolean): number {
        return arg1 * arg2.length + (arg3 ? 1 : 0);
    }
    function func4(arg1: number, arg2: string, arg3: boolean, arg4: number): number {
        return arg1 * arg2.length + (arg3 ? 1 : 0) - arg4;
    }
    let res____: () => number;
    let res1___: (arg1: number                                              ) => number;
    let res_2__: (              arg2: string                                ) => number;
    let res__3_: (                              arg3: boolean               ) => number;
    let res___4: (                                              arg4: number) => number;
    let res12__: (arg1: number, arg2: string                                ) => number;
    let res1_3_: (arg1: number,                 arg3: boolean               ) => number;
    let res1__4: (arg1: number,                                 arg4: number) => number;
    let res_23_: (              arg2: string,   arg3: boolean               ) => number;
    let res_2_4: (              arg2: string,                   arg4: number) => number;
    let res__34: (                              arg3: boolean,  arg4: number) => number;
    let res123_: (arg1: number, arg2: string,   arg3: boolean               ) => number;
    let res12_4: (arg1: number, arg2: string,                   arg4: number) => number;
    let res1_34: (arg1: number,                 arg3: boolean,  arg4: number) => number;
    let res_234: (              arg2: string,   arg3: boolean,  arg4: number) => number;
    let res1234: (arg1: number, arg2: string,   arg3: boolean,  arg4: number) => number;

    //
    // _.partial
    //
    // with arity 0 function
    res____ = _.partial(func0);
    // with arity 1 function
    res____ = _.partial(func1, 42       );
    res1___ = _.partial(func1           );
    // with arity 2 function
    res12__ = _.partial(func2           );
    res_2__ = _.partial(func2, 42       );
    res1___ = _.partial(func2,  _, "foo");
    res____ = _.partial(func2, 42, "foo");
    // with arity 3 function
    res123_ = _.partial(func3                 );
    res_23_ = _.partial(func3, 42             );
    res1_3_ = _.partial(func3,  _, "foo"      );
    res__3_ = _.partial(func3, 42, "foo"      );
    res12__ = _.partial(func3,  _,     _, true);
    res_2__ = _.partial(func3, 42,     _, true);
    res1___ = _.partial(func3,  _, "foo", true);
    res____ = _.partial(func3, 42, "foo", true);
    // with arity 4 function
    res1234 = _.partial(func4                      );
    res_234 = _.partial(func4, 42                  );
    res1_34 = _.partial(func4,  _, "foo"           );
    res__34 = _.partial(func4, 42, "foo"           );
    res12_4 = _.partial(func4,  _,     _, true     );
    res_2_4 = _.partial(func4, 42,     _, true     );
    res1__4 = _.partial(func4,  _, "foo", true     );
    res___4 = _.partial(func4, 42, "foo", true     );
    res123_ = _.partial(func4,  _,     _,    _, 100);
    res_23_ = _.partial(func4, 42,     _,    _, 100);
    res1_3_ = _.partial(func4,  _, "foo",    _, 100);
    res__3_ = _.partial(func4, 42, "foo",    _, 100);
    res12__ = _.partial(func4,  _,     _, true, 100);
    res_2__ = _.partial(func4, 42,     _, true, 100);
    res1___ = _.partial(func4,  _, "foo", true, 100);
    res____ = _.partial(func4, 42, "foo", true, 100);

    //
    // _.partialRight
    //
    // with arity 0 function
    res____ = _.partialRight(func0);
    // with arity 1 function
    res____ = _.partialRight(func1, 42       );
    res1___ = _.partialRight(func1           );
    // with arity 2 function
    res12__ = _.partialRight(func2           );
    res_2__ = _.partialRight(func2, 42,     _);
    res1___ = _.partialRight(func2,     "foo");
    res____ = _.partialRight(func2, 42, "foo");
    // with arity 3 function
    res123_ = _.partialRight(func3                 );
    res_23_ = _.partialRight(func3, 42,     _,    _);
    res1_3_ = _.partialRight(func3,     "foo",    _);
    res__3_ = _.partialRight(func3, 42, "foo",    _);
    res12__ = _.partialRight(func3,            true);
    res_2__ = _.partialRight(func3, 42,     _, true);
    res1___ = _.partialRight(func3,     "foo", true);
    res____ = _.partialRight(func3, 42, "foo", true);
    // with arity 4 function
    res1234 = _.partialRight(func4                      );
    res_234 = _.partialRight(func4, 42,     _,    _,   _);
    res1_34 = _.partialRight(func4,     "foo",    _,   _);
    res__34 = _.partialRight(func4, 42, "foo",    _,   _);
    res12_4 = _.partialRight(func4,            true,   _);
    res_2_4 = _.partialRight(func4, 42,     _, true,   _);
    res1__4 = _.partialRight(func4,     "foo", true,   _);
    res___4 = _.partialRight(func4, 42, "foo", true,   _);
    res123_ = _.partialRight(func4,                  100);
    res_23_ = _.partialRight(func4, 42,     _,    _, 100);
    res1_3_ = _.partialRight(func4,     "foo",    _, 100);
    res__3_ = _.partialRight(func4, 42, "foo",    _, 100);
    res12__ = _.partialRight(func4,            true, 100);
    res_2__ = _.partialRight(func4, 42,     _, true, 100);
    res1___ = _.partialRight(func4,     "foo", true, 100);
    res____ = _.partialRight(func4, 42, "foo", true, 100);
}
