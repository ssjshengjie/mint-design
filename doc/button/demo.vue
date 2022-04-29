<template>
    <mt-button class="demo" size="mini" plain>
        主要按钮
    </mt-button>
    <mt-button type="primary" class="demo" plain>
        主要按钮
    </mt-button>
    <mt-button type="success" class="demo">
        主要按钮
    </mt-button>
    <mt-button type="info" class="demo">
        主要按钮
    </mt-button>
    <mt-button type="warning" class="demo">
        主要按钮
    </mt-button>
    <mt-button type="danger" class="demo">
        主要按钮
    </mt-button>
</template>
<script setup lang="ts">
import MtButton from '../../packages/button';
</script>
<style>
.demo {
    margin-right: 10px;
}
</style>