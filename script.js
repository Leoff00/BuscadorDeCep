function queryFactory(element) {
  return document.querySelector(element);
}

const address = queryFactory("#address");
const city = queryFactory("#city");
const state = queryFactory("#state");
const district = queryFactory("#district");
const txtInput = queryFactory("#txtInput");
const btnSubmit = queryFactory("#btnSubmit");

async function fetchPostalCode(input) {
  try {
    const URL = `https://ws.apicep.com/cep.json?code=${input}`;
    const getResponse = await fetch(URL, { method: "GET" });
    const res = await getResponse.json();

    if (!input) {
      alert("Digite um CEP valido!");
    } else {
      address.innerHTML = `Rua: ${res.address}`;
      city.innerHTML = `Cidade: ${res.city}`;
      state.innerHTML = `Estado: ${res.state}`;
      district.innerHTML = `Estado: ${res.district}`;
    }
  } catch (e) {
    console.log(e);
  }
}

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  fetchPostalCode(txtInput.value);
});
