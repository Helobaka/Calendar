<template>
  <div class="home">
      <v-container fluid>
       <v-textarea
         v-model="newCard"
         autocomplete="Текст карточки"
         label="Текст карточки"
         ></v-textarea>
        <v-btn v-on:click="addNewCard">
           Добавить
          </v-btn>
      </v-container>

      <v-row dense>
        <HelloWorld v-for="(item,index) in GigList"
                    v-bind:num="item" :key="item.id"
                    v-on:remove="GigList.splice(index, 1)"/>
      </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  data() {
    return {
      GigList: ['1', '1', '3', '4', '5рекнекекекркеркеркеокекенекркренен екпекп к пкепекп кеп керкер екр к', '6', '7', '8', '9', 'Я шировка карточка, оооооооооооооооооочень'],
      newCard: '',
    };
  },
  methods: {
    addNewCard() {
      this.GigList.push(this.newCard);
    },
  },
  components: {
    HelloWorld,
  },

};
</script>
