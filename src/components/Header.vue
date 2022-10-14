<template>
    <div class="header">
        <section></section>
        <section class="rightSide">
            <div class="tour">
                <small>Take a tour</small>
            </div>
            <div class="message">
                <i class="fa fa-message"></i>
                <div style="width: 10px; height: 10px; background: red; border-radius: 50%;"></div>
            </div>
            <div class="notification">
                <i class="fa fa-bell"></i>
            </div>
            <div class="profile">
                <div class="profilePic" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;">
                    <img src="../assets/img/profilePic.jpeg" alt="" style="height: 100%; width: 100%; object-fit: cover;">
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 1rem 0px 1rem;
    height: 70px;
}

.header .rightSide {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;
}
.rightSide .message{
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
}
.message div{
    position: absolute;
    top: -4px;
    right: -4px;
}
</style>