<template>
  <div>
    <fetch-json url="user.json" :params="params">
      <section class="p-3" slot-scope="{ rows: users }">
        <vue-table :columns="columns" :rows="users || []">
          <template slot-scope="{ row }" slot="identity">
            <vue-avatar :username="[row.firstname].join(' ')" :src="`/avatar/${row.username}.jpg`"/>
          </template>
        </vue-table>
      </section>
    </fetch-json>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

import VueAvatar from "@lossendae/vue-avatar";

export default {
  components: {VueAvatar },
  data() {
    return {
      columns: [
        {
          name: "identity"
        }
      ],
      filters: {},

      params: {
        limit: 4,

        page: 1
      }
    };
  },
  methods: {
    onPaginationChange(page) {
      this.params.page = page;
    }
  }
};

</script>
