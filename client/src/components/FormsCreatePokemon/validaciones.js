export const validate = (userData) => {
  console.log(userData);
  const errors = {}
  if (userData.nombre === '' ){
    errors.nombre = 'Falta el Nombre del pokemon'
    
  }
  if (userData.imagen === ''){
    errors.imagen = 'Falta la url de tu pokemon'
  }
  if( userData.ataque === ''){
    errors.ataque = 'Falta el nivel de ataque de tu pokemon '
  }
  if (userData.ataque < 0 || userData.ataque > 1000 || userData.ataque === 0){


    errors.ataque = 'Lo siento el ataque no puede ser mayor a 1000 o menor a 0'
  }
  if( userData.vida === ''){
    errors.vida = 'Falta el nivel de ataque de tu pokemon '
  }
  if (userData.vida < 0 || userData.vida > 1000 || userData.vida === 0){


    errors.vida = 'Lo siento la vida no puede ser mayor a 1000 o menor a 0'
  }
  if( userData.defensa === ''){
    errors.defensa = 'Falta el nivel de defensa de tu pokemon '
  }
  if (userData.defensa < 0 || userData.defensa > 1000 || userData.defensa === 0){
    errors.defensa = 'Lo siento la defensa no puede ser mayor a 1000 o menor a 0'
  }
  if( userData.velocidad === ''){
    errors.ataque = 'Falta el nivel de velocidad de tu pokemon '
  }
  if (userData.velocidad < 0 || userData.velocidad > 1000 || userData.velocidad === 0){
    errors.velocidad = 'Lo siento la velocidad no puede ser mayor a 1000 o menor a 0'
  }
  if( userData.altura === ''){
    errors.altura = 'Falta el nivel de altura de tu pokemon '
  }
  if (userData.altura < 0 || userData.altura > 1000 || userData.altura === 0 ){
    errors.altura = 'Lo siento la altura no puede ser mayor a 1000 o menor a 0'
  }
  if( userData.peso === ''){
    errors.peso = 'Falta el nivel de peso de tu pokemon '
  }
  if (userData.peso < 0 || userData.peso > 1000 || userData.peso === 0){
    errors.peso = 'Lo siento el peso no puede ser mayor a 1000 o menor a 0'
  }
  if( userData.tipos === ''){
    errors.tipos = 'Falta el tipo de tu pokemon '
  }
 
  return errors
}

