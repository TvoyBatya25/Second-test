var xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available",
  true
);
xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  } else {
    console.log("Ошибка:", xhr.status);
  }
};
xhr.send();
