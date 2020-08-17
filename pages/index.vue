<template>
    <v-layout column justify-center align-center>
        <v-flex xs12 sm8 md6>
            <nuxt />
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    sockets: {
        connect() {
            console.log('client io connected');
        },
    }
};
</script>
