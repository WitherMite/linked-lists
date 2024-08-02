import LinkedList from "./linked-list.mjs";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.size);
console.log(list.toString());

list.prepend("whale");
console.log(list.size);
console.log(list.toString());

console.log(list.at(3));

list.pop();
console.log(list.size);
console.log(list.toString());

console.log(list.find("hamster"));
console.log(list.find("ant"));

console.log(list.contains("cat"));
console.log(list.contains("fish"));
console.log(list.contains("whale"));
