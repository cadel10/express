function api(req, res) {
    console.log({ menssage: "Bit-api" });
  }
  
function apiDollar(req = { query: { cop: "80000" } }, res) {
    const dollarinCop = 4800;
  
    console.log({ conversion: parseInt(req.query.cop) / dollarinCop });
  }
  
function apiBar(req = { query: { age: "17", name: "Martha" } }, res) {
    let { age, name } = req.query;
  
    // let age = req.query.age
    // let name = req.query.name
  
    //isNaN() true - no es numero / false - si es un numero
  
    if (!isNaN(age)) {
      age = parseInt(age);
      if (age >= 18) {
        return console.log(`Acceso permitido para ${name}`, 200);
      }
  
      return console.log(`Acceso denegado para ${name}`, 200);
    }
  
    return console.log(`La edad debe ser un valor Númerico`, 400);
  }
  
  function apiMaster(req = { query: { num: 18} }) {
    let result = {
      esPar: "",
      esPrimo: "",
      binario: "",
    };
  
    // si es primo
  
    let totalDivision = 0;
  
    if (req.query.num !== 2) {
      for (let i = 1; i <= req.query.num; i++) {
        if (req.query.num % i === 0) {
          totalDivision += 1;
          //totalDivisión = totalDivisión + 1
        }
  
        if (totalDivision > 3) {
          break;
        }
      }
    }
  
    if (totalDivision === 2 || req.query.num === 1) {
      result.esPrimo = true;
    } else {
      result.esPrimo = false;
    }
  
    if(req.query.num % 2 === 0){
        result.esPar = true
    } else {
        result.esPar = false
    }
  
    result.binario = req.query.num.toString(2)
  
    console.log(result)
  
    // si era par
    // cual era la conversion binaria
  }
  
  console.log(apiMaster());

module.exports={api,apiBar,apiDollar,apiMaster}