function openDrawer() {
  let checkbox = document.querySelector("input[type=checkbox]");
  let drawer = document.getElementById("menu-drawer");

  // Устанавливаем состояние меню
  drawer.setAttribute("data-opened", checkbox.checked);

  // Закрытие меню при клике на ссылку
  const menuLinks = drawer.querySelectorAll("a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      checkbox.checked = false; // Сбрасываем чекбокс
      drawer.setAttribute("data-opened", "false"); // Обновляем атрибут
    });
  });
}

// Находим элемент бургер-меню
const burgerMenu = document.querySelector(".menu-container");

// Обработчик скролла
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY; // Получаем текущую позицию прокрутки
  const maxOffset = 200; // Максимальное смещение вниз (в пикселях)

  // Ограничиваем движение кнопки
  if (scrollY <= maxOffset) {
    burgerMenu.style.top = `${1.5 + scrollY / 10}rem`; // Плавное смещение вниз
  }

  // Меняем цвет бургер-меню при движении
  if (scrollY > 50) {
    // Например, после прокрутки на 50px
    burgerMenu.classList.add("scrolled");
  } else {
    burgerMenu.classList.remove("scrolled");
  }
});

function setVh() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

// Вызываем функцию при загрузке страницы
setVh();

// Обновляем значение при изменении размера окна
window.addEventListener("resize", setVh);

document
  .querySelector(".contact-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    const form = event.target; // Ссылка на текущую форму
    const formData = new FormData(form); // Собираем данные из формы

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Сообщение успешно отправлено!"); // Сообщение об успехе
        form.reset(); // Очищаем форму после успешной отправки
        submitButton.disabled = true; // Деактивируем кнопку
      } else {
        alert("Произошла ошибка при отправке. Попробуйте ещё раз.");
      }
    } catch (error) {
      alert("Ошибка соединения. Проверьте интернет-соединение.");
      console.error(error); // Выводим ошибку в консоль для отладки
    }
  });

// Управление состоянием кнопки
const checkbox = document.getElementById("consent");
const submitButton = document.querySelector(".contact-form button");

checkbox.addEventListener("change", () => {
  submitButton.disabled = !checkbox.checked;
});
