<template>
  <div class="table__container">
    <table>
      <tr>
        <th v-for="(field, index) in fields" :key="index">
          {{ field }}
        </th>
      </tr>
      <tr v-for="(item, index) in items" :key="index">
        <td style="display: none">{{ i + 1 }}</td>
        <td>{{ item[`${Object.keys(item)[i]}`] }}</td>
        <td>{{ (i = 0) }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    fields: Array,
    items: [Array, Object],
  },
  mounted() {
    console.log(this.items);
  },
};
</script>