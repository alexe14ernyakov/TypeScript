class BTNode{
    value: number
    left: BTNode | undefined
    right: BTNode | undefined

    constructor(nodeValue: number){
        this.value = nodeValue
        this.left = undefined
        this.right = undefined
    }
}

class BinaryTree{
    root: BTNode | undefined

    search(value: number): BTNode | undefined{
        if(this.root === undefined){
            throw new Error('Empty tree')
        }

        let tmp: BTNode | undefined = this.root
        while(tmp !== undefined){
            if(tmp.value === value){
                return tmp
            }
            else if(tmp.value > value){
                tmp = tmp.left
            }
            else{
                tmp = tmp.right
            }
        }

        return undefined
    }

    insert(value: number): void{
        let tmpParent: BTNode | undefined = undefined
        let tmp: BTNode | undefined = this.root

        while(tmp !== undefined){
            tmpParent = tmp
            if(tmp.value > value){
                tmp = tmp.left
            }
            else if (tmp.value < value){
                tmp = tmp.right
            }
            else{
                throw new Error('Repeating value')
            }
        }

        if(tmpParent === undefined){
            this.root = new BTNode(value)
        }
        else if(tmpParent.value > value){
            tmpParent.left = new BTNode(value)
        }
        else{
            tmpParent.right = new BTNode(value)
        }
    }

    remove(value: number): void{
        if(this.root === undefined){
            throw new Error('Empty tree')
        }

        let tmpParent: BTNode | undefined = undefined
        let tmp: BTNode | undefined = this.root

        while(tmp !== undefined){
            tmpParent = tmp
            if(tmp.value > value){
                tmp = tmp.left
            }
            else if (tmp.value < value){
                tmp = tmp.right
            }
            else{
                throw new Error('Repeating value')
            }
        }
    }

    height(): number{
        return 1
    }
}
