const accordionBtns = document.querySelectorAll('.accordion-btn');
// seleccionamos todos los elementos con la clase '.accordion-btn'

accordionBtns.forEach(btn => {
    // recorremos dichos elementos y cada vez que demos click en alguno de
    // estos se activa un evento (acción) 'toggle' = alternar (cambiar) la clase
    btn.addEventListener('click', function () {
        this.classList.toggle('active');
        // esto hace que el elemento seleccionado este activado
        // this = btn (es como i 'iterador' del bucle for)

        const accordionDescription = this.nextElementSibling;
        // esto hace que al mismo tiempo seleccionemos al siguiente elemento 
        // (el hermano o sibling) el cual es el contenido (descripción)

        const plusIcon = this.querySelector('.plus-icon');
        const minusIcon = this.querySelector('.minus-icon');
        // seleccionamos ambos iconos + - de 'btn' = this

        if (accordionDescription.style.maxHeight) {
            accordionDescription.style.maxHeight = null;
            plusIcon.style.display = 'block';
            minusIcon.style.display = 'none';
            // esto oculta el contenido ya que + 
            // se muestra para abrir porque está oculta
        }
        else {
            accordionDescription.style.maxHeight = accordionDescription.scrollHeight + 'px';

            plusIcon.style.display = 'none';
            minusIcon.style.display = 'block';
            // esto muestra el contenido ya que - 
            // se muestra para cerrar porque está a la vista
        }
    })
})