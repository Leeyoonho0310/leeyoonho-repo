const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/oauth", async (req, res) => {
  const { code } = req.body;

  try {
    // 카카오 OAuth 인증 코드를 이용하여 액세스 토큰 요청
    const response = await axios.post("https://kauth.kakao.com/oauth/token", {
      grant_type: "authorization_code",
      client_id: "YOUR_KAKAO_CLIENT_ID", // 카카오 개발자 센터에서 발급한 클라이언트 ID로 변경하세요.
      redirect_uri: "https://YOUR_DOMAIN/callback", // 콜백 URL로 변경하세요.
      code,
    });

    const { access_token } = response.data;

    // 액세스 토큰을 이용하여 사용자 정보 요청
    const userResponse = await axios.get("https://kapi.kakao.com/v2/user/me", {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    res.json(userResponse.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching user information" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
