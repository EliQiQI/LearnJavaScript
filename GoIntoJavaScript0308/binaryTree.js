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

    //中序遍历二叉树
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


}

var nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13];
var binaryTree = new BinaryTree();
nodes.forEach((item) => {
    binaryTree.insert(item);
})

var callback = function (key) {
    console.log(key);
}

binaryTree.inOrderTravel(callback);

