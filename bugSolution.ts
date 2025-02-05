function printName(name: string = 'Anonymous'): void {
  console.log(name);
}

printName(); // This will print 'Anonymous'
printName(undefined); // This will also print 'Anonymous'

function printName2(name?: string): void {
  const nameToPrint = name ?? 'Anonymous';
  console.log(nameToPrint);
}

printName2(); // This will print 'Anonymous'
printName2(undefined); // This will print 'Anonymous'
printName2('John'); // This will print 'John'