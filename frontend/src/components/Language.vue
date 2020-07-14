<template>
  <div class="relative">
    <v-menu left bottom>
      <template color="success" v-slot:activator="{ on }">
        <v-btn
          class="white--text"
          icon
          rounded
          v-on="on"
          @click="toggleVisibility"
          @keydown.space.exact.prevent="toggleVisibility"
          @keydown.esc.exact="hideDropdown"
          @keydown.shift.tab="hideDropdown"
          @keydown.up.exact.prevent="startArrowKeys"
          @keydown.down.exact.prevent="startArrowKeys"
        >
          <v-icon small>mdi-translate</v-icon>
          <span>{{ $i18n.locale.toUpperCase() }}</span>
          <!-- <v-icon>mdi-menu-down</v-icon> -->
        </v-btn>
      </template>

      <v-list>
        <transition name="dropdown-fade">
          <ul
            v-on-clickaway="hideDropdown"
            v-if="isVisible"
            ref="dropdown"
            class="absolute normal-case z-30 font-normal xs:left-0 lg:right-0 bg-white shadow overflow-hidden rounded w-48 border mt-2 py-1 lg:z-20"
          >
            <a
              href="#"
              @click.prevent="setLocale('la')"
              class="flex items-center px-3 py-3 hover:bg-gray-100"
              @keydown.shift.tab="focusPrevious(false)"
              @keydown.up.exact.prevent="focusPrevious(true)"
              @keydown.down.exact.prevent=""
              @keydown.tab.exact="hideDropdown"
              @keydown.esc.exact="hideDropdown"
            >
              <img
                src="../assets/flag_la.png"
                alt="laos flag"
                class="h-4 w-4"
              />
              <!-- <span class="ml-2">Laos</span> -->
            </a>
            <a
              href="#"
              @click.prevent="setLocale('en')"
              ref="account"
              class="flex items-center px-3 py-3 hover:bg-gray-100"
              @keydown.up.exact.prevent=""
              @keydown.tab.exact="focusNext(false)"
              @keydown.down.exact.prevent="focusNext(true)"
              @keydown.esc.exact="hideDropdown"
            >
              <img
                src="../assets/flag_en.png"
                alt="english flag"
                class="h-4 w-4"
              />
              <!-- <span class="ml-2">English</span> -->
            </a>
          </ul>
        </transition>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  mixins: [clickaway],
  data() {
    return {
      isVisible: false,
      focusedIndex: 0
    };
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
    hideDropdown() {
      this.isVisible = false;
      this.focusedIndex = 0;
    },
    startArrowKeys() {
      if (this.isVisible) {
        // this.$refs.account.focus()
        this.$refs.dropdown.children[0].children[0].focus();
      }
    },
    focusPrevious(isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1;
      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1;
      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusItem() {
      this.$refs.dropdown.children[this.focusedIndex].children[0].focus();
    },
    setLocale(locale) {
      this.$i18n.locale = locale;
      this.$router.push({
        params: {
          lang: locale
        }
      });
      this.hideDropdown();
    }
  }
};
</script>

<style scoped>
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.1s ease-in-out;
}

.dropdown-fade-enter,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
