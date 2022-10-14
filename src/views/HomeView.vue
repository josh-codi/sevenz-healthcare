<template>
    <div class="home">
        <div class="headen">
            <h2 class="head">Update Patient Medical Record</h2>
            <small class="text-secondary">
                Click the tabs to view and edit patient medical details
            </small>
        </div>
        <form @submit.prevent="save" class="detailContent">
            <div class="x-ray container">
                <h5 class="head">X-Ray</h5>
                <aside class="xRay-inner">
                    <div v-for="scan in xRay" :key="scan" class="form-check">
                        <input v-model="formData.investigations" type="checkbox" class="form-check-input" :value="scan?.id" :id="scan.id">
                        <label class="form-check-label" for="exampleCheck1">{{scan?.title}}</label>
                    </div>
                </aside>
                <Shimmer v-if="xRay.length === 0"/>

                <hr>

                <aside class="ultraScan">
                    <h5 class="head">Ultrasound Scan</h5>
                    <div class="ultraScan-inner">
                        <div v-for="scan in ultraScan" :key="scan" class="form-check">
                            <input v-model="formData.investigations" type="checkbox" class="form-check-input" :value="scan?.id" :id="scan.id">
                            <label class="form-check-label" for="exampleCheck1">{{scan?.title}}</label>
                        </div>
                    </div>

                </aside>
                <Shimmer v-if="ultraScan.length === 0"/>

                <hr>

                <aside class="type">
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">CT Scan</label>
                        <select v-model="formData.ctscan" class="form-control" id="exampleFormControlSelect1">
                            <option value="choose" selected disabled>choose</option>
                            <option>Scan needed in the left cerebral hemisphere</option>
                            <option>Scan needed in the left cerebral hemisphere</option>
                            <option>Scan needed in the left cerebral hemisphere</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">MRI</label>
                        <select v-model="formData.mri" class="form-control" id="exampleFormControlSelect1">
                            <option value="choose" selected disabled>choose</option>
                            <option>Full body MRI</option>
                        </select>
                    </div>
                </aside>
            </div>
            <br>
            <div class="submitBtn container">
                <button type="submit" class="btn">Save and Send</button>
            </div>
        </form>
        <div class="loading" v-if="loading">
            <div class="textLoading">
                <h3 class="text-whtie">Loading ...</h3>
            </div>
        </div>
    </div>
</template>

<script>
import { onUpdated, ref, watch } from 'vue'
import { useMainStore } from '../stores/mainStore'
import axios from 'axios';
import Shimmer from '../components/Shimmer.vue';
export default {
    setup() {
        const store = useMainStore();
        const xRay = ref(store.data.xRay);
        const ultraScan = ref(store.data.ultrasound);
        const loading = ref(false);
        const investigations = ref([]);
        const formData = ref({
            investigations: [],
            ctscan: "",
            mri: "",
            developer: "Developer"
        });
        watch((store), () => {
            xRay.value = store.data.xRay;
            ultraScan.value = store.data.ultrasound;
        });
        const save = () => {
            loading.value = true;
            axios.post("https://testdrive.kompletecare.com/api/investigations", formData.value, store.config)
                .then(res => {
                loading.value = false;
                setTimeout(() => {
                    store.set("alert", { on: true, message: "Saved Successful" });
                }, 1000);
            })
                .catch(err => {
                loading.value = false;
                setTimeout(() => {
                    store.set("alert", { on: true, message: "Please make sure you select any for each section !" });
                }, 1000);
            });
        };
        return { xRay, ultraScan, formData, save, investigations, loading };
    },
    components: { Shimmer }
}
</script>

<style scoped>
.home .headen {
    margin-bottom: 1rem;
}

.home .detailContent {
    background: #FFFFFF;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(211, 211, 211, 0.692);
}
.home .x-ray .xRay-inner, .home .ultraScan .ultraScan-inner{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
.home .detailContent .type{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
.detailContent .type .form-group{
    margin: 0.5rem;
}
.submitBtn{
    display: flex;
    justify-content: flex-end;
}
button{
    background: #382F90;
    color: white;
}

.loading{
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);

    display: flex;
    justify-content: center;
    align-content: center;
}
.textLoading {
    height: fit-content;
    margin: auto;
    color: white;
    letter-spacing: 0.3rem;
}
</style>

<style scoped>
@media only screen and (max-width: 850px){
        .home .x-ray .xRay-inner,
            .home .ultraScan .ultraScan-inner {
                grid-template-columns: repeat(2, 1fr);
            }
    }

</style>