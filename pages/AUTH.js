// Реализация аутентификации и защиты роутов (использование токенов)
// Аутентификация с использованием токенов предполагает использование двух типов токенов:

// Access Token: короткоживущий токен, используемый для аутентификации запросов к API.
// Refresh Token: долгоживущий токен, используемый для получения нового access token после его истечения.

// Установим необходимые пакеты:
// npm install @nuxtjs/auth-next @nuxtjs/axios

// Настроим модули axios и auth в nuxt.config.js:
export default {
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  axios: {
    baseURL: 'http://localhost:3000/api' // ваш базовый URL API
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'accessToken',
          global: true,
          type: 'Bearer'
        },
        refreshToken: {
          property: 'refreshToken',
          data: 'refreshToken'
        },
        user: {
          property: 'user',
          autoFetch: true
        },
        endpoints: {
          login: { url: '/auth/login', method: 'post' },
          refresh: { url: '/auth/refresh', method: 'post' },
          user: { url: '/auth/user', method: 'get' },
          logout: { url: '/auth/logout', method: 'post' }
        }
      }
    }
  }
}
