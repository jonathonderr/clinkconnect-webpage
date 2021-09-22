<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Clink Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="40"
        />
        <h2>Clink</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://clinkconnect.app/privacy"
        target="_blank"
        text
      >
        <span class="mr-2">Privacy Policy</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="background-color">
      <v-row class="fill-height" justify="center" no-gutters>
        <v-col cols="12" md="6">
          <v-row class="fill-height" align="center" justify="center" no-gutters>
            <v-col cols="8">
              <v-col v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm" cols="12" >
                <v-container></v-container>
              </v-col>
              <v-row justify="start">
                <h1>Clink</h1>
              </v-row>
              <v-row justify="start">
                <v-card
                  width="70%"
                  height="10"
                  color="primary"
                  elevation="0"
                >
                </v-card>
              </v-row>
              <v-row>
                <v-container />
              </v-row>
              <v-row justify="center">
                <body>
                  Using Clink is best way to break down social barriers, meet new people,
                  and experience being in the moment. Clink utilizes Bluetooth technology
                  to allow you to message and connect with the people around with you. 
                  Download the app and start connecting!
                </body>
              </v-row>
              <v-row>
                <v-container />
              </v-row>
              <v-row>
                <a href="https://apps.apple.com/app/id1570368363/">
                  <v-img 
                    src="./assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                  />
                </a>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm" cols="12" >
          <v-container></v-container>
        </v-col>
        <v-col cols="12" md="6">
          <v-row class="fill-height" align="end" justify="end" no-gutters>
            <v-img
              class="mockup"
              aspect-ratio="1"
              src="./assets/deviceMockup.png"
            ></v-img>
          </v-row>
        </v-col>
      </v-row>
    </v-main>
    <v-footer
      color="gray"
      padless
    >
      <v-row
        justify="center"
        no-gutters
      >
        <v-col
          class="grey darken-4 py-10 white--text"
          cols="12"
        >
          <v-row align="center" justify="center">
            Want to reach out to us?
          </v-row>
          <v-row align="center" justify="center">
            <a href="mailto:">support@clinkconnect.app</a>
          </v-row>
        </v-col>
     </v-row>
   </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'Clink Connect',

  components: {
    // HelloWorld,
  },

  data: () => ({
    //
  }),
  computed: {

  },
  methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }
}
};
</script>

<style scoped>
 .debug-ui {
   background-color: red;
 }

 .background-color {
   background-color: #E9EAE9;
 }

 .mockup {
    height: 85vh;
 }
</style>
