const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        // <- обратите внимание, описание "засекречено"
      }
    ]
  }
  
  const { special: 
        { id, 
         name, 
         icon, 
         description = 'Описание недоступо' }} = character;
  
  function Func(id, name, icon, desc) {
    return [id, name, icon, desc];
  }
  
  Func(id, name, icon, description)