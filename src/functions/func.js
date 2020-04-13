export const isMoveValid = (selectedCards,playerCard)=>{
    let deskCards = makeArrOfObjWithIntValue([...selectedCards]);
    let karta = makeObjWithIntValue(playerCard)
    console.log("ismovevalid",deskCards)
    let [a,b=0,c=0,d=0] = deskCards;
    let ArrPokupljenihKarata = func(karta.value,a.value,b.value,c.value,d.value);
    //console.log("resenje:",ArrPokupljenihKarata);
    return ArrPokupljenihKarata;
}

function func(karta,a=0,b=0,c=0,d=0){
    console.log("karta",karta,"a=",a," b=",b," c=",c," d=",d)
    var suma = 0;
    var pomNiz = [];
    var ukNiz=[];
    var abcdNiz = [];
    var ind = false;
    var abcd = [];
    for (let i=0; i<2;i++)
        for (let j=0; j<2; j++)
            for (let k=0; k<2; k++)
              for (let l=0; l<2; l++){
                if (i) { suma = suma + a;  pomNiz.push(a); abcd.push("a")}
                if (j) { suma = suma + b;  pomNiz.push(b); abcd.push("b")}
                if (k) { suma = suma + c;  pomNiz.push(c); abcd.push("c")}
                if (l) { suma = suma + d;  pomNiz.push(d); abcd.push("d")}
                if (karta==suma) {
                    ind = true;
                    ukNiz.push(pomNiz);
                    abcdNiz.push(abcd);
                    abcd.forEach(el=>{
                      if (el=="a") a=0;
                      if (el=="b") b=0;
                      if (el=="c") c=0;
                      if (el=='d') d=0;
                    })
                }
                suma = 0;
                pomNiz = [];
                abcd = [];
              }
        if(ind==false)   return [];
          else return ukNiz
    }

  export  const mapped = (ArrOfCards)=> {
        let Arr=[]
        ArrOfCards.forEach(el=>{
            el.forEach(e=>Arr.push(e))
        }) 
        return Arr;
    }

    const makeArrOfObjWithIntValue = (selectedDeskCards) =>{
        let deskCards = selectedDeskCards.map(card=>makeObjWithIntValue(card));
        return deskCards;
    }
    
    export const makeObjWithIntValue = (card)=>{
        switch (card.value) {
            case "KING": 
                return obj(14,card.code, 1);
                break;
            case "QUEEN":
                return obj(13, card.code, 1);
                break;
            case "JACK":
                return obj(12, card.code, 1);
                break;
            case "ACE":
                return obj(11, card.code, 1);
                break;
            case "ACE1":
                return obj(1,card.code,1)
            default:
                let point = 0;
                if ((card.value=="10")||(card.code=="2C")) point = 1; //desetke i mala dvojka
                if (card.code="0C") point = 2; //velika desetka
                return obj(parseInt(card.value), card.code, point);
                break;
        }
    }
    
    const obj = (num,code,point) => {
        return {value:num, code, point}
    }