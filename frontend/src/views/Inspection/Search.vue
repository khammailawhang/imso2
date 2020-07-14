<template>
  <v-container fluid>
    <v-combobox
      v-model="model"
      :filter="filter"
      :hide-no-data="!search"
      :items="items"
      :search-input.sync="search"
      hide-selected
      label="Search for an option"
      small-chips
      solo
    >
      <template v-slot:item="{ index, item }">
        <v-text-field
          autocomplete="off"
          v-if="editing === item"
          v-model="editing.text"
          autofocus
          flat
          background-color="transparent"
          hide-details
          solo
          @keyup.enter="edit(index, item)"
        ></v-text-field>
        <v-chip v-else :color="`${item.color} lighten-3`" dark label small>
          {{ item.text }}
        </v-chip>
        <v-list-item-action @click.stop>
            <v-simple-table>
                <tbody>
                    <tr>
                        <td>John</td>
                        <td>020 55556789</td>
                        <td>John@gmail.com</td>
                        <td>New York</td>
                    </tr>
                </tbody>
            </v-simple-table>
        </v-list-item-action>
      </template>
    </v-combobox>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    colors: ["green", "purple", "indigo", "cyan", "teal", "orange"],
    items: [
      { header: "Select an option or create one" },
      {
        text: "Foo",
        color: "blue"
      },
      {
        text: "Bar",
        color: "red"
      }
    ],
    model: [
      {
        text: "Foo",
        color: "blue"
      }
    ],
    search: null,
  }),

};
</script>
