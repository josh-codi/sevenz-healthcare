<template>
  <div class="main">

    <!-- Left Part of the page -->
    <div class="sidebar">
      <!-- Sidebar component -->
      <Sidebar />
    </div>

    <!-- Right side of the page -->
    <div class="rightSide">

      <!-- Header -->
      <div class="header">
        <Header />
      </div>

      <!-- Main Body -->
      <div class="mainBody">
        <div class="mainContent">
          <div class="mainInnerContent">
            <RouterView />
          </div>
        </div>
      </div>

    </div>

    <!-- Alert Component  -->
    <Alert/>
  </div>

</template>

<script>
import { onMounted } from '@vue/runtime-core';
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import axios from 'axios'
import {useMainStore} from './stores/mainStore'
import Alert from './components/Alert.vue';

export default {
  components: { Header, Sidebar, Alert },
  setup() {
    const store = useMainStore();
    const isAlert = store.isAlert.on

    onMounted(()=>{

      // Loging in for access token ............................
      axios.post("https://testdrive.kompletecare.com/api/login", {
        email: "tester@kompletecare.com",
        password: "password"
      }).then(res => {
        store.set("token", res?.data?.data?.token)
      })
    });

    return {
      isAlert,
    }
  }
}
</script>

<style scoped>
.main {
  display: flex;
  width: 100%;
  height: 100vh;
}

.sidebar {
  min-width: 271px;
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  padding: 0;
}
@media only screen and (max-width: 650px) {
  .sidebar {
    min-width: 100px;
  }
}

@media only screen and (max-width: 500px) {
  .sidebar {
    min-width: 70px;
  }
}
@media only screen and (max-width: 700px) {
  *{
    font-size: 0.8rem;
  }
}

.main .rightSide {
  width: 100%;
  background: #F5F5FB;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.main .mainBody{
  height: 100%;
}
.main .mainContent {
  width: 100%;
  height: 100%;
  position: relative;  
}

.main .mainInnerContent {
  overflow: hidden;
  overflow-Y: auto;
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  padding: 1rem;
}
</style>
