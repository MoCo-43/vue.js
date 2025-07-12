<template>
  <div>
    <a id="custom-login-btn" @click="kakaoLogin()">
      <img
        src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
        width="222"
      />
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    kakaoLogin() {
      if (window.Kakao && window.Kakao.Auth) {
        window.Kakao.Auth.login({
          scope: "profile, account_email",
          success: this.getKakaoAccount,
        });
      } else {
        alert("카카오 SDK가 아직 로드되지 않았습니다.");
      }
    },
    getKakaoAccount() {
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: (res) => {
          const kakao_account = res.kakao_account;
          const nickname = kakao_account.profile.nickname;
          const email = kakao_account.email;
          console.log("nickname", nickname);
          console.log("email", email);
          alert("로그인 성공!");
        },
        fail: (err) => {
          console.log(err);
        },
      });
    },
  },
  mounted() {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init("232fb1dc3fdaafe3777e31b4991db467");
    }
  },
};
</script>
