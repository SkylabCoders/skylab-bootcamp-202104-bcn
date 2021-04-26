/* eslint-disable react/react-in-jsx-scope */
const Dashboard = () => {
  const heroes = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  //   heroes.map((hero) => console.log(({ value: hero.id, text: hero.name })));
  const myHereos = heroes.map((hero) => (
    <li>
      {hero.id}
      {' - '}
      {hero.name}
    </li>
  ));

  return (
    <div>
      <h1> TOUR OF HEROES </h1>
      <ul>
        {myHereos}
      </ul>
    </div>
  );
};
export default Dashboard;
