"use strict";
class BTNode {
    constructor(nodeValue) {
        this.value = nodeValue;
        this.left = undefined;
        this.right = undefined;
    }
}
class BinaryTree {
    search(value) {
        if (this.root === undefined) {
            throw new Error('Empty tree');
        }
        let tmp = this.root;
        while (tmp !== undefined) {
            if (tmp.value === value) {
                return tmp;
            }
            else if (tmp.value > value) {
                tmp = tmp.left;
            }
            else {
                tmp = tmp.right;
            }
        }
        return undefined;
    }
    insert(value) {
        let tmpParent = undefined;
        let tmp = this.root;
        while (tmp !== undefined) {
            tmpParent = tmp;
            if (tmp.value > value) {
                tmp = tmp.left;
            }
            else if (tmp.value < value) {
                tmp = tmp.right;
            }
            else {
                throw new Error('Repeating value');
            }
        }
        if (tmpParent === undefined) {
            this.root = new BTNode(value);
        }
        else if (tmpParent.value > value) {
            tmpParent.left = new BTNode(value);
        }
        else {
            tmpParent.right = new BTNode(value);
        }
    }
    remove(value) {
        if (this.root === undefined) {
            throw new Error('Empty tree');
        }
        let tmpParent = undefined;
        let tmp = this.root;
        while (tmp !== undefined) {
            tmpParent = tmp;
            if (tmp.value > value) {
                tmp = tmp.left;
            }
            else if (tmp.value < value) {
                tmp = tmp.right;
            }
            else {
                throw new Error('Repeating value');
            }
        }
    }
}
