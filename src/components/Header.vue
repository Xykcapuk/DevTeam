<template>
  <div class="header-container">
    <img class="img" src="../assets/logo.png" alt="Logo">
    <div class="header-content">
      <div class="left-side">
        <img @click="activeButtons" id="phone" class="active" src="../assets/phone.png" alt="Phone" />
        <img @click="activeButtons" id="tablet" class="active" src="../assets/phone_tablet.png" alt="Computer" />
        <img @click="activeButtons" id="buttons" class="active" src="../assets/buttons.png" alt="Buttons" />
      </div>
      <div class="center-side">
        <v-text-field label="Regular" placeholder="Placeholder" solo></v-text-field>
      </div>
      <div class="right-side">
        <img src="../assets/filter.png" alt="Filter" />
        <img src="../assets/sort.png" alt="Sort" />
      </div>
    </div>

    <img class="img" src="../assets/logo.png" alt="Logo">
  </div>
</template>

<script>

export default {
  name: "Header",
  methods: {
    activeButtons(element) {
      const idName = element.target.id
      const className = element.target.className
      if (className === 'active') {
        const idChange = document.getElementById(idName)
        if (idChange.style.border === '2px solid black') {
          idChange.style.border = 'none'
        } else {
          const links = document.querySelectorAll(".active")
          links.forEach(link => {
            link.setAttribute("style", "border:none");
          })
          idChange.style.border = '2px solid black';
        }
      }
    }
  }
}
</script>

<style scoped>
.header-container {
  width: 100vw;
  height: 100px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.img {
  width: 45px;
  height: 45px;
  border-radius: 12px;
}
.header-content {
  min-width: 600px;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left-side img, .right-side img {

  padding: 5px 10px;
}
.center-side {
  flex: 1;
  padding: 0 10px;
}
.center-side input {
  width: 100%;
  height: 26px;
  border-radius: 10px;
  padding: 0 10px;
}
</style>
