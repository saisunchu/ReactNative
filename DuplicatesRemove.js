const data = [
  { id: 1, name: 'John' },
];

const uniqueData = data.filter((item, index, self) =>
  index === self.findIndex((t) => (
    t.id === item.id 
  ))
);

uniqueData.forEach(item => {
  console.log(item.name);
});
// data[0].age=18
data[0].name='sai'

console.log('====================================');
console.log(data[0].name);
console.log('====================================');
