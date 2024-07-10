(() => {
  const refs = {
    openModalBtn: document.querySelector(".btn-open"),
    closeModalBtn: document.querySelector(".btn-close"),
    modal: document.querySelector(".backdrop"),
  };

  refs.openModalBtn.addEventListener("click", openModal);
  refs.closeModalBtn.addEventListener("click", closeModal);

  function openModal() {
    refs.modal.classList.remove("is-hidden");
    document.body.classList.add("no-scroll");
  }

  function closeModal() {
    refs.modal.classList.add("is-hidden");
    document.body.classList.remove("no-scroll");
  }
})();
