module.exports = function toReadable (number) {
   if (!number && number != 0 || number > 999 ) { return undefined } number 
   const numberArr = number.toString().split('');
   const arr =[];
   const number0_19 = [
   'zero','one','two','three','four',
   'five','six','seven','eight','nine',
   'ten','eleven','twelve','thirteen',
   'fourteen','fifteen','sixteen',
   'seventeen','eighteen','nineteen'
   ];
   const number10_19 = [
   'ten','eleven','twelve','thirteen',
   'fourteen','fifteen','sixteen',
   'seventeen','eighteen','nineteen'
   ]
   const number20_90 = [
   '','','twenty','thirty','forty',
   'fifty','sixty','seventy','eighty','ninety'
   ];
   const number100_900 = [
   '','one hundred','two hundred','three hundred',
   'four hundred','five hundred','six hundred',
   'seven hundred','eight hundred','nine hundred'
   ];
   if ( number < 20 ) { 
      number0_19.forEach((el,i)=>{
         if ( i == number ) arr.push(el);    
      });
   } else if ( number > 19 && number < 100 ) {
      number20_90.forEach((el,i) => {
         if ( i == numberArr[0] ) {
            arr.push(el);
               number0_19.forEach((el,i) => {
                  if ( i == numberArr[1] && i !== 0){
                  arr.push(' ' + el);
               };
            });
         };
      });
   } else if ( number > 99 && number < 110 ||
      number > 199 && number < 210 ||
      number > 299 && number < 310 ||
      number > 399 && number < 410 ||
      number > 499 && number < 510 ||
      number > 599 && number < 610 ||
      number > 699 && number < 710 ||
      number > 799 && number < 810 ||
      number > 899 && number < 910  ) {
      number100_900.forEach((el,i) => {
         if ( i == numberArr[0] ) {
            arr.push(el);
               number20_90.forEach((el,i) => {
                  if ( i == numberArr[1]) {
                     arr.push(el);
                        number0_19.forEach((el,i) => {
                           if ( i == numberArr[2] && i !== 0 ) {
                        arr.push(' ' + el);
                     };
                  });
               }; 
            });
         };
      });
   } else if ( number > 109 && number < 120 ||
      number > 209 && number < 220 ||
      number > 309 && number < 320 ||
      number > 409 && number < 420 ||
      number > 509 && number < 520 ||
      number > 609 && number < 620 ||
      number > 709 && number < 720 ||
      number > 809 && number < 820 ||
      number > 909 && number < 920 ) {
      number100_900.forEach((el,i) => {
         if ( i == numberArr[0] ) {
            arr.push(el + ' ');
               number10_19.forEach((el,i)=>{
                  if ( i == numberArr[2] ) {
                  arr.push(el);
               };
            });
         };
      });
   } else if ( number > 119 ) {
      number100_900.forEach((el,i)=>{
         if ( i == numberArr[0] ) {
            arr.push(el);
            number20_90.forEach((el,i)=>{
               if ( i == numberArr[1] && i != 0 ){
                  arr.push( ' ' + el);
                  number0_19.forEach((el,i)=>{
                     if ( i == numberArr[2] && i != 0 ){
                        arr.push( ' ' + el);
                     }
                  })
               }
            })
         } 
      })
      }   
   return arr.join('');
};

