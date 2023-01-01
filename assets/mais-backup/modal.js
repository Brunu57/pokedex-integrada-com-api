const modal = document.querySelector('.modal-container')

function openModal() {
    modal.classList.add('active')
}

function closeModal() {
    modal.classList.remove('active')
}
`<div class="modal-container">
<div class="modal">
    <h2>${pokemon.name}</h2>
    <hr>
    <span class="informations">
        informacoes dos pokeeeess
    </span>
    <hr>
    <div class="btns">
        <button class="btnClose" onclick="closeModal()">Close</button>
    </div>
</div>
</div>`