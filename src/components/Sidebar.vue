<template>
    <div class='sidebar'>
        <div class='topSide'>

            <section class="navContainer">
                <div class="navItem">
                    <img src="../assets/img/dashboard.png" />
                    <small>Dashboard</small>
                </div>

                <div class="navItem">
                    <i class="fa fa-user"></i>
                    <small>Profile</small>
                </div>

                <div class="navItem">
                    <img src="../assets/img/wallet.png" />
                    <small>Sevices</small>
                </div>

                <div class="navItem">
                    <i class="fa fa-clipboard"></i>
                    <small>Medical Records</small>
                </div>

                <div class="navItem">
                    <i class="fa fa-window-restore"></i>
                    <small>Care Wallet</small>
                </div>

                <div class="navItem">
                    <i class="fa fa-message"></i>
                    <small>Messages</small>
                </div>

                <div class="navItem">
                    <i class="fa fa-circle"></i>
                    <small>Resources</small>
                </div>

                <hr>

                <div class="navItem">
                    <i class="fa fa-star"></i>
                    <small>Account Settings</small>
                </div>

                <div class="navItem">
                    <i class="fa fa-address-book"></i>
                    <small>Contact Support</small>
                </div>

                <div class="navItem">
                    <img src="../assets/img/logout.png" />
                    <small>Logout</small>
                </div>

            </section>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sidebar {
    background-color: #FFFFFF;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.06);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.navContainer {
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0 0 0;
    margin-top: 70px;
}

.navContainer .navItem {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    width: 95%;
    margin-bottom: 0.5rem;
    border-radius: 15px;
    padding: 10px 15px;
    cursor: pointer;
}

.navContainer .navItem:hover {
    background-color: #2A36A4;
    color: white;
}

.navItem small {
    font-size: 0.9rem;
    width: 125px;
}

@media only screen and (max-width: 650px) {
    .navItem small {
        display: none;
    }

    .navContainer .navItem img,
    .navItem i {
        margin: 0rem !important;
    }
}

.navContainer .navItem img,
.navItem i {
    margin-right: 1.5rem;
    border-radius: 5px;
    background-color: white;
    padding: 3px;
}

hr {
    background: black;
    padding: 0.5px;
    width: 90%;
}
</style>