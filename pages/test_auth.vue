<!--Использование аутентификации в компонентах:-->
<template>
  <div>
    <input v-model="username" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />
    <button
      @click="login">Login
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            username: this.username,
            password: this.password
          }
        })
        this.$router.push('/dashboard')
      } catch (error) {
        console.error('An error occurred:', error)
      }
    }
  }
}
</script>





<!-- Чтобы защитить маршруты, можно использовать middleware. Создадим файл auth.js в папке middleware:-->
<script>
export default function({ store, redirect }) {
  if (!store.state.auth.loggedIn) {
    return redirect('/login')
  }
}
</script>

<!-- И добавим middleware к защищенным страницам:-->
<template>
  <div>
    <h1>Dashboard</h1>
  </div>
</template>
<script>
export default {
  middleware: 'auth'
}
</script>





<!-- Пример получения пользователя: -->
<template>
  <div>
    <p v-if="user">Welcome, {{ user.username }}</p>
    <p v-else>Please log in</p>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$auth.user
    }
  }
}
</script>
