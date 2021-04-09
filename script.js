const app = {
  data() {
    return {
      firstName: "Oguzhan",
      lastName: "ÇART",
      email: "oguzhan@example.com",
      picture: "https://camo.githubusercontent.com/98ea76390ecef36a484df3d1e95d4981dafcb2ce5345f5a957ad333873cd9247/68747470733a2f2f64727363646e2e35303070782e6f72672f757365725f6176617461722f313030353635313530392f7125334438355f772533443330305f682533443330302f76323f776562703d7472756526763d31267369673d33656236323964313534636236383539613266336537333639663938393638356538383330336336633564316533646663313263656265363331646535386237"
    };
  },
  methods: {  
    async getUser(){
      const api = "https://randomuser.me/api";
      const res = await fetch(api);
      const { results } = await res.json();

      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.picture = results[0].picture.large;
    }
  }
};
Vue.createApp(app).mount("#content");

