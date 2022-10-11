const obj = {
    name: 'мечник', 
    health: 10, 
    level: 2, 
    attack: 80, 
    defence: 40
}


function func(x) {
    for(const prop in x) {
        console.log(`key: ${prop}`)
    }
}

func(obj)