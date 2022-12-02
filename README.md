# Тестовое задание для Juice Development

Развернутое приложение [Здесь](https://vk.com/app51493114)

## Установка
```bash
$ yarn
```

## Запуск
```bash
# development and watch mode
$ yarn dev

# production mode
$ yarn build && yarn serve
```

## Запуск туннеля
```bash
$ yarn tunnel
```

## Использование с **VK Tunnel**/**Ngrok**/etc.
В `vite.config.ts` в объекте `server` убираем `https`, `host` и `proxy`, добавляем:
```typescript
hmr: {
  clientPort: 443
}
```
Подробнее - https://github.com/vitejs/vite/discussions/5399.

## Лицензия
[MIT](LICENSE)
