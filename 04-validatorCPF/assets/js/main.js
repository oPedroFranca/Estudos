// 705.484.450-52

// 7x  0x 5x 4x 8x 4x 4x 5x 0x
// 10  9  8  7  6  5  4  3  2
// 70  0  40 28 48 20 16 15 0 = 237

// 11 - (237 % 11) = 5 (Primeiro dígito)
// Se o número digito for maior que 9, consideramos 0.

// 7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
// 11 10  9  8  7  6  5  4  3  2
// 77  0  45 32 56 24 20 20 0  10 = 284

// 11 - (284 % 11) = 2 (Primeiro dígito)
// Se o número digito for maior que 9, consideramos 0.



// const cpf = '705.484.450-52';
// const cpfArrayClean = Array.from(cpf.replace(/\D+/g, '')).map(Number);

// function multipliesAndSumCpf(lenght) {
//     let cpfFormated = [...cpfArrayClean];
//     let multAndSum = 0;

//     let accounter = 0;
//     for(let i = lenght; i >= 2; i--) {
//         cpfFormated[accounter] = cpfFormated[accounter] * i;
//         multAndSum += cpfFormated[accounter];
//         accounter++;
//     }

//     return multAndSum;    
// }

// function verifyCpf(multAndSum, positionArray){
//     return 11 - (multAndSum % 11) == cpfArrayClean[positionArray];
// }

// function validatoryCpf() {
//     let partOneCpf = verifyCpf(multipliesAndSumCpf(10), 9);
//     let partTwoCpf = verifyCpf(multipliesAndSumCpf(11), 10);

//     return partOneCpf == true && partTwoCpf == true ? 'cpf Valido' : 'cpf Invalido';;
// }

// console.log(validatoryCpf())




// ------------------------------------------------------------------------------------------------------------------- 




// function ValidaCPF(cpfEnviado) {
//     Object.defineProperty(this, 'cpfLimpo', {
//         enumerable: true,
//         get: function() {
//             return cpfEnviado.replace(/\D+/g, '');
//         }
//     });
// }

// ValidaCPF.prototype.valida = function() {
//     if(typeof this.cpfLimpo === 'undefined') return false;
//     if(this.cpfLimpo.length !== 11) return false;
//     if(this.isSequencia()) return false;

//     const cpfParcial = this.cpfLimpo.slice(0, -2);
//     const digito1 = this.criaDigito(cpfParcial);
//     const digito2 = this.criaDigito(cpfParcial + digito1);

//     const novoCpf = cpfParcial + digito1 + digito2;
//     return novoCpf == this.cpfLimpo;
// };

// ValidaCPF.prototype.criaDigito = function(cpfParcial) {
//     const cpfArray = Array.from(cpfParcial);
    
//     let regressivo = cpfArray.length + 1;
//     const total = cpfArray.reduce((ac, val) => {
//         ac += (regressivo * Number(val));
//         regressivo--;
//         return ac;
//     }, 0);

//     const digito = 11 - (total % 11);
//     return digito > 9 ? '0' : String(digito);
// }

// ValidaCPF.prototype.isSequencia = function() {
//     const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
//     return sequencia === this.cpfLimpo;
// };

// const cpf = new ValidaCPF('070.987.720-03');

// if(cpf.valida()) {
//     console.log('Cpf válido');
// } else {
//     console.log('Cpf inválido');
// }



//-------------------------------------------------------------------------------------------------------------------

class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    eSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digitoUm = this.geraDigito(cpfSemDigitos);
        const digitoDois = this.geraDigito(cpfSemDigitos + digitoUm);
        this.novoCPF = cpfSemDigitos + digitoUm + digitoDois   
    }

    geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for(let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }
        
        const digito = 11 - (total % 11);
        return digito <= 9 ? digito : '0';
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.eSequencia()) return false;
        this.geraNovoCpf();
        
        return this.novoCPF === this.cpfLimpo;
    }
}

const validacpf = new ValidaCPF('070.987.720-03');

if(validacpf.valida()) {
    console.log('Cpf válido');
} else {
    console.log('Cpf inválido');
}