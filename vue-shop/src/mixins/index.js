import axios from "axios";

export default {
  methods: {
    async $api(url, data) {
      // url이랑 전달할 값만 보내면 됨
      let result = await axios({
        method: "post",
        url: url,
        data: data,
      });
      console.log(result);
      return result.data; // result에는 값이 엄청많음. 그 안에 data를 반환하면 원하는 값이 반환됨
    },
  },
};
