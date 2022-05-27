class Node:
    def __init__(self) -> None:
        self.children = {}
        self.is_end = False

class Tries:
    def __init__(self) -> None:
        self.root = Node()

    def insert(self, value):
        node = self.root
        for idx, v in enumerate(value):
            if not v in node.children:
                node.children[v] = Node()
            node = node.children[v]
            if idx == len(value) - 1:
                node.is_end = True
    
    def search(self, value):
        node =self.root
        for idx, v in enumerate(value):
            if not v in node.children:
                return False
            node = node.children[v]
            if idx == len(value) - 1 and node.is_end:
                return True
        return False

    def prefix(self, value):
        node =self.root
        for v in value:
            if not v in node.children:
                return False
            node = node.children[v]
        return True

t = Tries()
t.insert("apple")
print(t.prefix("app"))
print(t.search("app"))
print(t.search("apple"))
t.insert("adog")
print(t.search("adog"))
t.insert("app")
print(t.search("app"))