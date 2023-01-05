const cat={
    name: "Pipy",
    age: 8,
    whatname() {
        return this.name;
    },
};

console.log(cat.whatname());

cat.name = "Nezzar";
console.log(cat.whatname());