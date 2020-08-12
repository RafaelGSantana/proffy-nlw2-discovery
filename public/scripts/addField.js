// Procurar o botão
document
  .querySelector("#add-time")
  // Quando clicar no botão, executa uma ação
  .addEventListener("click", cloneField);

// Ação
function cloneField() {
  // Duplicar os campos
  const newFieldsContainer = document
    .querySelector(".schedule-item")
    // Retorna uma cópia do nó. Se deep (ppdade esperada como parâmetro de cloneNode)
    // for true, a cópia também inclui os descendentes do nó
    .cloneNode(true);

  // Pegar os campos a serem clonados
  const fields = newFieldsContainer.querySelectorAll("input");

  // Para cada campo (fields), limpar o seu valor, antes de clonar
  fields.forEach(function (field) {
    // Pega o campo atual (field) e limpa o seu valor
    field.value = "";
  });

  console.log(fields[0]);

  // Colocar campo duplicado acima, na página, dentro da seção indicada abaixo.
  document.querySelector("#schedule-items").appendChild(newFieldsContainer);
}
