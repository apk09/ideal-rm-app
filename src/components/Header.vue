<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark">
      <h3 class="navbar-brand">iDeal <span>Risk Management</span></h3>
      <div class="navbar-nav ml-auto" id="nav">
        <router-link class="nav-link" to="/home">Home</router-link>
        <router-link class="nav-link" to="/var">VAR</router-link>
        <router-link class="nav-link active" to="/">Backtesting</router-link>
        <router-link class="nav-link" to="/status">Status</router-link>
        <router-link class="nav-link" to="/config">Configuration</router-link>
        <router-link class="nav-link" to="/reporting">Reporting Limit</router-link>
      </div>
        <i class="fas fa-rocket text-white d-none d-lg-block"></i>
        <i class="fas fa-bell text-white d-none d-lg-block"></i>
        <p class="text-white d-none d-lg-block">Hi, User <i class="fas fa-chevron-down"></i></p>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.navbar {
  background: #070f63;
}

.navbar-brand {
  font-size: 1.2rem;
}

.nav-link {
  font-size: 14px;
  margin-left: 20px;
}

.active {
  font-weight: bold;
}

.fa-rocket, .fa-bell {
  font-size: 1rem;
  padding: 1% 1.5%;
}

header p {
  font-size: 14px;
  margin: 1%;
}
</style>