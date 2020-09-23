class Name {
    constructor() {
        this.app = document.getElementById('app');
        this.title = this.createElement('p', 'description');
        this.title.textContent = 'Enter a name, at least 3 characters, the use of symbols "(!@#$&*%01-9)" is disabled.';
        this.wrapper = this.createElement('div', 'wrapper');
        this.input = this.createElement('input', 'name');
        this.output = this.createElement('p', 'output-field');
        this.placeholder = this.createElement('span', 'placeholder');
        this.placeholder.textContent = 'Input text';
        this.messageLine = this.createElement('span', 'message-line');
        this.button = this.createElement('button', 'button');
        this.button.textContent = 'Ok';
        this.wrapper.append(this.placeholder);
        this.wrapper.append(this.input);
        this.wrapper.append(this.messageLine);
        this.app.append( this.title);
        this.app.append( this.wrapper);
        this.app.append(this.output);
        this.app.append(this.button);
    }

    createElement(elementTag, elementClass){
        const element = document.createElement(elementTag);
        if (elementClass) {
            element.classList.add(elementClass);
        }
        return element;
    }
}
class Validate {
    constructor(name) {
        this.name = name;
        this.value = this.name.input.value;
        let placeholder = this.name.placeholder,
            output = this.name.output;
        let valid = /^[A-Za-z-А-Яа-я\s]+$/;

        const validationAddText = () => {
            let inputValue = this.name.input.value;
            if (inputValue.match(valid) && inputValue.length > 3) {
                output.innerHTML = "";
                output.innerHTML = inputValue;
                placeholder.classList.remove('error');
                placeholder.classList.add('success');
                placeholder.innerHTML = "Text added";
                this.name.input.value = '';

            } else {
                placeholder.classList.add('error');
                placeholder.innerHTML = "Please check this field";
                console.log('false');
            }

        };

       let validationField = () => {
           let inputValue = this.name.input.value;
           if (inputValue.match(valid) && inputValue.length > 3) {
               placeholder.classList.remove('error');
               placeholder.classList.add('success');
               placeholder.innerHTML = "Valid";
           } else {
               placeholder.classList.add('error');
               placeholder.innerHTML = "Please check this field";
               console.log('false');
           }
       };
        this.name.input.addEventListener('keyup', function (e) {
            if (e.key === 'Enter') {
                validationAddText();
            }
        });


        this.name.input.addEventListener('focus', function () {
            placeholder.classList.add('active');

        });

        this.name.input.addEventListener('blur', function () {
            validationField();
            if(this.value === '') {
                placeholder.classList.remove('active');
                placeholder.innerHTML = "Input text";
                placeholder.classList.remove('error');
                placeholder.classList.remove('success');
            }
        });

        this.name.button.addEventListener('click', function () {
            validationAddText();
        });
    }
}
new Validate(new Name());