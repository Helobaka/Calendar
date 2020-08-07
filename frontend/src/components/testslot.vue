<template>
  <div>
    <slot  name="name">
      {{ person.name }}
    </slot>
    <slot  name="fam" v-bind:person="person">
      {{ person.name }}
    </slot>
  </div>

</template>

<script>
export default {
  name: 'testslot',
  props: {
    user: {
      name: 'Ваня',
      fam: 'Не Ваня',
    },
  },
  data() {
    return {
      person: {
        name: 'Петр',
        fam: 'Не Петр',
      },
    };
  },
};
</script>

<style scoped>

</style>
