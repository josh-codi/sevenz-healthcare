<template>
    <aside class="shimmer">
        <div class="form-group">
            <aside></aside>
            <div></div>
        </div>
        <div class="form-group">
            <aside></aside>
            <div></div>
        </div>
        <div class="form-group">
            <aside></aside>
            <div></div>
        </div>
        <div class="form-group">
            <aside></aside>
            <div></div>
        </div>
        <div class="form-group">
            <aside></aside>
            <div></div>
        </div>
        <div class="form-group">
            <aside></aside>
            <div></div>
        </div>
        <div class="form-group h">
            <aside></aside>
            <div></div>
        </div>
        <div class="form-group h">
            <aside></aside>
            <div></div>
        </div>
        <div class="form-group h">
            <aside></aside>
            <div></div>
        </div>
        <div class="form-group h">
            <aside></aside>
            <div></div>
        </div>
        <div class="form-group h">
            <aside></aside>
            <div></div>
        </div>
        <div class="form-group h">
            <aside></aside>
            <div></div>
        </div>
    </aside>
</template>

<script>
export default {

}
</script>

<style>
.shimmer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.shimmer .form-group {
    display: flex;
    align-items: center;
    margin: 1rem 0 1rem 0;
}

.shimmer .form-group aside {
    width: 14px;
    height: 14px;
    /* border-radius: 50%; */
    background: lightgray;
    margin-right: 0.5rem;
    animation-name: shimmerFade;
    animation-duration: 1s;
    animation-delay: 0s;
    animation-iteration-count: infinite;
}

.shimmer .form-group div {
    animation-name: shimmerFade2;
    animation-duration: 4s;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    width: 100px;
    height: 14px;
    border-radius: 10px;
    background: lightgray;
}

@keyframes shimmerFade {
    from{
        background: rgba(211, 211, 211, 0.5);
    }
    to{
        background: lightgray;
    }
}
@keyframes shimmerFade2 {
    from {
        background: rgba(211, 211, 211, 0.5);
    }

    to {
        background: lightgray;
    }
}
@media only screen and (max-width: 1024px) {
    .shimmer {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media only screen and (max-width: 850px) {
    .shimmer {
        grid-template-columns: repeat(2, 1fr);
    }
    .h{
        display: none !important;
    }
}
</style>