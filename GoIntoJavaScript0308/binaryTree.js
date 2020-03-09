//封装一个输出函数
var sout = function (str) {
    console.log(str);
}
//构造排序二叉树
function BinaryTree() {
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;

    };
    var root = null;

    var insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    }

    this.insert = function (key) {
        var newNode = new Node(key);
        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    }

    //中序遍历二叉树---打印二叉树
    /*先遍历左子树 再返回节点 再遍历右子树*/
    this.inOrderTravelNode = function (node, callback) {
        if (node !== null) {
            this.inOrderTravelNode(node.left, callback);
            callback(node.key);
            this.inOrderTravelNode(node.right, callback);
        } else {

        }
    }
    this.inOrderTravel = function (callback) {
        this.inOrderTravelNode(root, callback);
    }

    //前序遍历---复制二叉树,效率比构造高
    var preOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    }
    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(root, callback);
    }

    //后续遍历---用于文件访问
    this.postOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }
    this.postOrderTraverse = function (callback) {
        this.postOrderTraverseNode(root, callback);
    }

    //二叉树查找--导弹外星人游戏
    //查找最小值
    var minNode = function (node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node.key;
        }
    }
    this.min = function () {
        return minNode(root);
    }

    //查找最大值
    var maxNode = function (node) {
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }
            return node.key;
        }
    }
    this.max = function () {
        return maxNode(root);
    }

    //search
    var searchNode = function (node, key) {
        if (node === null) {
            return false;
        }
        if (key < node.key) {
            return searchNode(node.left, key);
        } else if (key > node.key) {
            return searchNode(node.right, key);
        } else {
            return true;
        }
    }
    this.search = function (key) {
        return searchNode(root, key);
    }

    //删除节点
       //为了删除有两个子节点的节点准备
    var finMinNode = function (node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node;
        }
    }
    var removeNode = function (node, key) {
        if (node === null) {
            return null;
        }
        if (key < node.key) {
            node.left = removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = removeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            //中序后继节点
            var aux = finMinNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key);
            return node;
        }
    }
    this.remove = function (key) {
        root = removeNode(root, key);       
    }


}

var nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13];
sout("-----------创建一棵二叉树-------------------");
var binaryTree = new BinaryTree();
nodes.forEach((item) => {
    binaryTree.insert(item);
})

var callback = function (key) {
    sout(key);
}
sout("----------------中序遍历-------------------")
binaryTree.inOrderTravel(callback);
sout("----------------前序遍历-------------------")
binaryTree.preOrderTraverse(callback);
sout("----------------后序遍历-------------------")
binaryTree.postOrderTraverse(callback);
sout("------------查找-------------")
sout("min node is:" + binaryTree.min());
sout("max node is:" + binaryTree.max());
sout("------------查找指定元素-------------")
sout("7 is found? " + binaryTree.search(7));
sout("9 is found? " + binaryTree.search(9));