<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/rates">Rates</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 20px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

table,
td,
th {
  border: 1px solid;
}

th,
td {
  padding: 7.5px;
}

table {
  min-width: 100%;
  border-collapse: collapse;
  text-align: center;
}

.rateColumn {
  background-color: #d9d9d9;
}

.rateHeading {
  cursor: pointer;
}

.unselectable {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
