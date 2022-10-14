<template>
    <div class="alert" v-if="isAlertOn">
        <section class="alertMessage">
            <small class="message">{{alertMessage}}</small>
            <br>
            <button @click="collapseAlert" class="okay btn btn-primary">Okay</button>
        </section>
    </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useMainStore } from '../stores/mainStore'
export default {
    setup() {
        const store = useMainStore();
        const isAlertOn = ref(store.isAlert.on);
        const alertMessage = ref(store.isAlert.message);

        const collapseAlert = () => {
            store.set("alert", {on: false, message: ""})
        }

        watch(store,  ()=>{
            isAlertOn.value = store.isAlert.on;
            alertMessage.value = store.isAlert.message;
        })

        return {
            isAlertOn,
            alertMessage,
            collapseAlert
        }
    }

}
</script>

<style scoped>
.alert {
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    background: rgba(0, 0, 0, 0.418);
}

.alertMessage {
    background: white;
    border-radius: 15px;
    padding: 1rem;
    animation-name: alertDrop;
    animation-duration: 1s;
    animation-delay: 0s;
    width: 400px;
    height: 150px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

@keyframes alertDrop {
    from {
        transform: translateY(-100%);
    }

    to {
        transform: translateY(0%)
    }
}
</style>