<template>
    <div class="mint-design">
        <div class="mint-left"></div>
        <div class="mint-right">
            <router-view></router-view>
        </div>
    </div>
</template>
<script></script>
<style>
.mint-design {
    height: 100vh;
    width: 100%;
    display: flex
}

.mint-left {
    width: 250px;
}

.mint-right {
    flex: 1;
}
</style>