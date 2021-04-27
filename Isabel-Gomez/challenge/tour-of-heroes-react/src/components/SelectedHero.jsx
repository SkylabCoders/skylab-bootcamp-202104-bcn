import React from 'react';
import heroes from '../data/heroes';

const SelectedHero = () => {
  const [selectedHeroe, setSelectedHeroe] = useState(null);

  const onHandleSelectedHeroe (heroe) => (
setSelectedHeroe(heroe)
  )

  return (
    <section>
      console.log('hola')
    </section>
  );
};

export default SelectedHero;
