let intro = {
  name: "Diwakar",
  age: 21,

  getAge: function () {
    console.log(this.age); //this with normal function
  },

  getName: () => {
    console.log(this.name); //this with arrow function
  },
};

intro.getAge();
intro.getName();
