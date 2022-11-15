"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryCatch = exports.right = exports.left = exports.isRight = exports.isLeft = exports.chain = exports.chainW = void 0;
//----------------------------------------------------------------------------------------------------------------------
const chainW = (_2) => (_1) => isLeft(_1) ? _1 : _2(_1.right);
exports.chainW = chainW;
exports.chain = exports.chainW;
//----------------------------------------------------------------------------------------------------------------------
function isLeft($) {
    return $.$ === 'Left';
}
exports.isLeft = isLeft;
function isRight($) {
    return $.$ === 'Right';
}
exports.isRight = isRight;
function left(e) {
    return {
        $: 'Left',
        left: e,
    };
}
exports.left = left;
function right(t) {
    return {
        $: 'Right',
        right: t,
    };
}
exports.right = right;
function tryCatch(onRight, onLeft) {
    try {
        return right(onRight());
    }
    catch (error) {
        return left(onLeft(error));
    }
}
exports.tryCatch = tryCatch;
