# Веб-сайт и Центр правовой информации «Проводник»

Официальный веб-сайт и портал публикации правовых документов для мобильного приложения **«Проводник»** (`ru.provodnik.app`).

🔗 **GitHub Pages URL:** [https://provodnik-tech.github.io/app/](https://provodnik-tech.github.io/app/)

---

## 📂 Структура репозитория

```
provodnik_web/
├── index.html              # Главная страница и список документов
├── privacy.html            # Политика конфиденциальности (RU)
├── privacy-en.html         # Privacy Policy (EN)
├── terms.html              # Пользовательское соглашение и EULA (RU)
├── terms-en.html           # Terms of Use and EULA (EN)
├── consent.html            # Согласие на обработку данных для рекламы (RU)
├── 404.html                # Страница 404
├── style.css               # Стили интерфейса
├── script.js               # Переключение темы, оглавление (TOC), печать
├── .nojekyll               # Флаг для корректной работы GitHub Pages
├── assets/                 # Графика, иконки, логотип и превью
└── docs/                   # Исходные файлы документов (.md)
    └── legal/
```

---

## 🚀 Публикация на GitHub Pages

1. **Инициализация Git и публикация:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Provodnik website and legal docs"
   git branch -M main
   git remote add origin https://github.com/provodnik-tech/app.git
   git push -u origin main
   ```
2. **Включение GitHub Pages:**
   - Перейдите в **Settings** репозитория → **Pages**.
   - Выберите ветку `main` и папку `/ (root)`.
   - Нажмите **Save**.
3. Сайт станет доступен по адресу `https://provodnik-tech.github.io/app/`.
