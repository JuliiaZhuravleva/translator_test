#!/bin/bash

# Создаем необходимые директории
mkdir -p src/components
mkdir -p src/services
mkdir -p src/utils
mkdir -p src/pages/api/translate
mkdir -p src/pages/api/db # Создайте, если нужно
mkdir -p src/lib # Создайте, если нужно
mkdir -p src/styles
mkdir -p src/config

# Создаем пустые файлы
touch src/services/translationService.ts
touch src/services/openaiService.ts
touch src/utils/dateUtils.ts
touch src/utils/validationUtils.ts
touch src/utils/responseFormatter.ts
touch src/pages/api/translate/route.ts
touch src/pages/api/db/route.ts # Создайте, если нужно
touch src/components/LanguageSelector.tsx
touch src/styles/tailwind.css
touch src/config/tailwind.config.ts
touch src/lib/db.ts # Создайте, если нужно

# Выводим сообщение об успешном создании файлов и директорий
echo "Все необходимые директории и файлы успешно созданы!"
