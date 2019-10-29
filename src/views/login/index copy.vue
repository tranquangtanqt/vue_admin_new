<template>
  <div>
    <div class="container">
      <div class="row" style="margin-top: 100px;">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <form @submit="actionLogin" method="get">
            <input class="btn btn-primary" type="submit" value="Đăng nhập">
          </form>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { setToken } from "@/utils/auth"; // get token from cookie

const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

export default {
  data() {
    return {
      // isLogin: localStorage.getItem("Admin-Token"),
      isLogin: true,
    }
  },
  methods: {
    actionLogin(e){
      if(this.isLogin){
        //Sau khi kiem tra login thi set token
        setToken("editor-token");
        this.$router.push({ path: '/dashboard' });
      }
      e.preventDefault();
    }
  }
}
</script>
