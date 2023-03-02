function createCalculator() {
    
    return {
        display: document.querySelector('.display'),
        
        start() {
            this.clickButtons();
            this.pressEnter();
        },

        pressEnter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.makeAccount();
                }
            });
        },
        
        clearDisplay() {
            this.display.value = '';
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        makeAccount() {
            let account = this.display.value;

            try {
                account = eval(account);

                if(!account) {
                    alert('conta invalida');
                    this.display.value = '';
                    return;
                }

                this.display.value = String(account);
            }catch(e) {
                alert('Conta invalida');
                this.display.value = '';
                return;
            }
        },
        
        clickButtons() {
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')) this.btnForDisplay(el);
                if(el.classList.contains('btn-clear')) this.clearDisplay();
                if(el.classList.contains('btn-del')) this.deleteOne();
                if(el.classList.contains('btn-eq')) this.makeAccount();
            });
        },

        btnForDisplay(el) {
            this.display.value += el.innerText;
        }   
    };
};

const calculator = createCalculator();
calculator.start();