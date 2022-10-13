var expect = chai.expect;
chai.should();

describe("Testeando fecha hasta Reyes Magos", function () {
    it("Pruebas con una fecha anterior al dia de reyes", function () {
        reyesMagos(new Date(2023,0,5)).should.be.equal("Faltan 1 días para que vengas los reyes.");
        reyesMagos(new Date(2022,11,23)).should.be.equal("Faltan 14 días para que vengas los reyes.");
        reyesMagos(new Date(2017,0,6)).should.be.equal("Faltan 2191 días para que vengas los reyes.");
    });
    it("Prueba con la misma fecha que vienen los reyes magos", function () {
        reyesMagos(new Date(2023,0,6)).should.be.equal("¡Mira debajo de el árbol que han llegado hoy!");
    });
    it("Pruebas con un dia adelantado a los reyes magos", function () {
        reyesMagos(new Date(2023,0,7)).should.be.equal("Has viajado en el tiempo y se te han pasado los reyes.");
        reyesMagos(new Date(2023,3,12)).should.be.equal("Has viajado en el tiempo y se te han pasado los reyes.");
        reyesMagos(new Date(2053,0,6)).should.be.equal("Has viajado en el tiempo y se te han pasado los reyes.");
    });
    
});

describe("Testeando devolver la fecha actual", function () {
    it("Pruebas con distintos dias, deberia devolver el dia de la semana, del mes, que mes, el año y la hora", function () {
        fechaNow(new Date(2022,0,1,0,0,0)).should.be.equal("Hoy es sábado, 1 de enero de 2022 y son las 0:0 horas.");
        fechaNow(new Date(2050,11,31,23,59,0)).should.be.equal("Hoy es sábado, 31 de diciembre de 2050 y son las 23:59 horas.");
        fechaNow(new Date(2000,3,13,4,30,0)).should.be.equal("Hoy es jueves, 13 de abril de 2000 y son las 4:30 horas.");
    });
});

describe("Testeando Area y Perimetro", function () {
    it("Pruebas con valores positivos", function () {
        AreaPerimetro(1).should.be.equal("El área del círculo es: "+ 3.14 + " El perímetro del círculo es: "+ 6.28 );
        AreaPerimetro(2).should.be.equal("El área del círculo es: "+ 12.57 + " El perímetro del círculo es: "+ 12.57 );
        AreaPerimetro(4.23).should.be.equal("El área del círculo es: "+ 56.21 + " El perímetro del círculo es: "+ 26.58 );
        AreaPerimetro(5631).should.be.equal("El área del círculo es: "+ 99614125.66 + " El perímetro del círculo es: "+ 35380.62 );
    });
    it("Pruebas con valores Negativos", function () {
        AreaPerimetro(-3).should.be.equal.NaN
        AreaPerimetro(-10).should.be.equal.NaN
        AreaPerimetro(-6.34).should.be.equal.NaN
    });
    it("Prueba con Valor 0", function () {
     AreaPerimetro(0).should.be.equal("El área del círculo es: " + "0.00" + " El perímetro del círculo es: " + "0.00");
    });
    
});

describe("Testeando generador de numeros aleatorios entre un rango", function () {
    it("Comprobamos que el numero generado no es mayor que el maximo", function () {
        for (let i = 0; i < 100; i++) {
            getRandom(11,18).should.be.at.most(18)
        }
        for (let i = 0; i < 100; i++) {
            getRandom(-10,-5).should.be.at.most(-5)
        }       
    });
    it("Comprobamos que el numero generado no es menor que el minimo", function () {
        for (let i = 0; i < 100; i++) {
            getRandom(5,10).should.be.at.least(5)
        }
        for (let i = 0; i < 100; i++) {
            getRandom(-30,-22).should.be.at.least(-30)
        }
    });
    it("Prueba de que se debe poner correctamente un valor minimo mas pequeño que el maximo", function () {
        getRandom(10,5).should.be.equal("Introduce un numero en minimo menor que el maximo")
        getRandom(-10,-11).should.be.equal("Introduce un numero en minimo menor que el maximo")
    });
});

describe("Testeando las funciones con Strings", function () {
    describe("MidString()", function () {
        it("En los strings de longitud impares devuelve la mitad mas uno", function () {
          MidString("Pablo").should.be.equal("Pab");
          MidString("mARta").should.be.equal("mAR");
          MidString("Marblo").should.be.equal("Mar");
        });
        it("En los strings de longitud par devuelve la mitad exacta", function () {
            MidString("aRcO").should.be.equal("aR");
            MidString("Daño").should.be.equal("Da");
            MidString("String").should.be.equal("Str");
          });
          it("Prueba con espacios en blanco", function () {
            MidString("Me encanta la programacion").should.be.equal("Me encanta la");
          });  
      });


      describe("LastOfString()", function () {
        it("Devolucion de la ultima letra de la palabra", function () {
          LastOfString("Pablo").should.be.equal("o");
          LastOfString("mARta").should.be.equal("a");
          LastOfString("MarblO").should.be.equal("O");
        });
        it("Devolucion de un simbolo como ultimo caracter", function () {
            LastOfString("Boolean%").should.be.equal("%");
            LastOfString("Int.").should.be.equal(".");
            LastOfString("String_").should.be.equal("_");
          });
          it("Prueba con un ultimo caracter como un espacio en blanco", function () {
            LastOfString("Los tests funcionan ").should.be.equal(" ");
          });  
      });


      describe("Inverse()", function () {
        it("Devolucion de la cadena inversa", function () {
          Inverse("Pablo").should.be.equal("olbaP");
          Inverse("mARta").should.be.equal("atRAm");
          Inverse("MarblO").should.be.equal("OlbraM");
        });
          it("Prueba con simbolos y espacios en blanco", function () {
            Inverse("Los test_s funcionan ").should.be.equal(" nanoicnuf s_tset soL");
          });  
      });


      describe("StringGuiones()", function () {
        it("Devolucion de la cadena con guiones de por medio", function () {
          StringGuiones("Guiones").should.be.equal("G-u-i-o-n-e-s");
          StringGuiones("MaRbLo").should.be.equal("M-a-R-b-L-o");
          StringGuiones(" ").should.be.equal(" ");
        });
          it("Prueba con espacios en blanco", function () {
            StringGuiones("Los guiones funcionan").should.be.equal("L-o-s- -g-u-i-o-n-e-s- -f-u-n-c-i-o-n-a-n");
          });  
      });


      describe("CountVowels()", function () {
        it("Devolucion de las vocales en un string", function () {
          CountVowels("Pablo y Marta").should.be.equal(4);
          CountVowels("PruEbÁ").should.be.equal(3);
          CountVowels("Uná frAaséé con muchas VocalEs").should.be.equal(12);
        });
      });
});