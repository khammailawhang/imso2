<template>
    <div id="app">
  <v-app>
    <v-content>
      <v-container>
        <div class="section">
          <h2>Grouping Table - expanded by default</h2>
          <v-data-table :headers="headers" :items="models" hide-actions item-key="name" group-expanded>
            <template slot="items" slot-scope="props">
              <tr>
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.action }}</td>
              </tr>
            </template>

          </v-data-table>
        </div>
        
        
      </v-container>
    </v-content>
  </v-app>
</div>
</template>
<script>
export default {
    methods: {
      collapseAll() {
        this.$refs.expandableTable.collapseAll()
      },
      expandAll() {
        this.$refs.expandableTable.expandAll()
      }
    },
    data: () => ({
      models: [],
      headers: [
        { text: "Name", value: "name" },
        { text: "Action", value: "action" }
      ],
    })
}
</script>
<style>
.section {
  margin-top: 50px;
}
</style>