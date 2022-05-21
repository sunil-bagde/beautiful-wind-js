```java
class Node
{
    int key;
    Node left;
    Node right;

    Node(int val)
    {
        key = val;
        left = null;
        right = null;
    }
}

public class BinarySearchTree
{
    Node root;

    public Node insert(Node root, int val)
    {
        if(root == null)
            return new Node(val);
        else if(root.key < val)
            root.right = insert(root.right,val);
        else if(root.key > val)
            root.left = insert(root.left,val);
        return root;
    }

    public void inorder(Node root)
    {
        if(root == null)
            return;

        inorder(root.left);
        System.out.println(root.key);
        inorder(root.right);
    }

    public Node removeNode(Node root, int val)
    {
        if(root == null)
            return null;
        if(root.key < val)
            root.right = removeNode(root.right,val);
        else if(root.key > val)
            root.left = removeNode(root.left,val);
        else
        {
            if(root.left == null && root.right == null)
                return null;
            else if(root.left == null)
                return root.right;
            else if(root.right == null)
                return root.left;
            else
            {
                int rightMin = getRightMin(root.right);
                root.key = rightMin;
                root.right = removeNode(root.right,rightMin);
            }
        }
        return root;
    }

    public int getRightMin(Node root)
    {
        Node temp = root;

        while(temp.left != null)
        {
            temp = temp.left;
        }

        return temp.key;
    }

    public static void main(String args[])
    {
        BinarySearchTree bst = new BinarySearchTree();
        bst.root = bst.insert(bst.root, 100);
        bst.root = bst.insert(bst.root, 50);
        bst.root = bst.insert(bst.root, 150);
        bst.root = bst.insert(bst.root, 125);

        System.out.println("Before Deletion: Inorder Traversal of BST");
        bst.inorder(bst.root);

        int key = 100;
        System.out.println("Deleting Element: "+key);
        bst.root = bst.removeNode(bst.root,key);

        System.out.println("After Deletion: Inorder Traversal of BST");
        bst.inorder(bst.root);
    }
}

```
