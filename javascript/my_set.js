class MySet {
  // throw an error if called with anything other than string, array or nothing
  // if an iterable is provided only its unique values should be in data
  // strings and arrays will need to be broken down by their elements/characters
  constructor(iterable) {
    if (
      typeof iterable !== "string" &&
      !Array.isArray(iterable) &&
      iterable !== undefined
    ) {
      throw new Error("must use string, array, or nothing");
    }
    this.data = {};
    if (iterable) {
      for (let item of iterable) {
        if (!this.has(item)) {
          this.data[item] = true;
        }
      }
    }
  }

  // return number of elements in MySet
  size() {
    return this.entries().length;
  }

  // add an item to MySet as is
  // don't worry about arrays here!
  // return the MySet instance
  add(item) {
    if (!this.has(item)) {
      this.data[item] = true;
    }
    return this;
  }

  // delete an item from MySet
  // don't worry about arrays here!
  // return true if successful, otherwise false
  delete(item) {
    if (this.has(item)) {
      delete this.data[item];
      return true;
    }
    return false;
  }

  // return true if in MySet, otherwise false
  // don't worry about arrays here!
  has(item) {
    if (this.data[item]) return true;
    return false;
  }

  // return data as an array
  // don't worry about arrays here!
  entries() {
    return Object.keys(this.data);
  }
}

if (require.main === module) {
  // add your own tests in here
  const myset = new MySet([1, 2, 2, 3, 4]);
  console.log(myset.size());
  myset.add([1, 2]);
  myset.delete(2);
  console.log(myset.has(2));
  console.log(myset);
  console.log(myset.entries());
}

module.exports = MySet;
