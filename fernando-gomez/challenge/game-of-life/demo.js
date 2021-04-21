const objDemo = {
  nombre: 'fer',
  edad: 27,
  dijoLaVerdad: true,
};

for (const propertyName in objDemo) {
  console.log(propertyName);
}
