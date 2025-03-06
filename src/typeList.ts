/* eslint-disable no-unused-vars */

// TypeScriptの基本の型

// boolean
let bool: boolean = true;

// number 数値
let num: number = 0;

// string 文字
let str: string = "A";

// Array 配列
let arr1: Array<number> = [0, 1, 2]; // number型が入った配列
let arr2: number[] = [0, 1, 2]; // number型が入った配列

// tuple型　使う機会は少ない
let tuple: [number, string] = [0, "A"]; // 1つ目に数値、2つ目に文字を指定

// any型
let any1: any = false; // どんな値を入れてもエラーにならない

// void型 関数に紐づく型
const funcA = (): void => { // voidとは何も返却値がないことを表している
  const test = "TEST";
}

// null型
let null1: null = null;

// undefined型
let undefined1: undefined = undefined;

// object型
let obj1: object = {};
let obj2: {} = 8888; // これでもobject型を表しているが、空なので何でも入ってしまう
let obj3: { id: number, name: string} = {id: 0, name: "AAA"}; // id要素は数値、name要素は文字列。という指定の仕方はよく使う idは0、nameはAAAを初期値としている





/* eslint-enable no-unused-vars */