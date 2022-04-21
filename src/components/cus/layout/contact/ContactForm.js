import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import ReCAPTCHA from "react-google-recaptcha";
import swal from "sweetalert";
import { CircularProgress } from "@mui/material";
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
const ContactForm = () => {
  const [status, setStatus] = React.useState("");
  const submitFormHandler = async (event) => {
    event.preventDefault();
    setStatus("loading");
    await sleep(3000);
    setStatus("completed");
  };
  React.useEffect(() => {
    if (status === "completed") {
      swal(
        "Success!",
        "We'll get back to you in 1-2 business days.!",
        "success"
      );
    }
  }, [status]);
  return (
    <Box>
      <form onSubmit={submitFormHandler}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <div data-aos="fade-right" data-aos-duration={700}>
              <TextField
                fullWidth
                type="text"
                label="Họ (tên lót)"
                id="firstName"
                required
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div data-aos="fade-right" data-aos-duration={700}>
              <TextField
                fullWidth
                type="text"
                label="Tên"
                id="lastName"
                required
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div data-aos="fade-right" data-aos-duration={700}>
              <TextField
                required
                fullWidth
                type="email"
                label="Địa chỉ Email"
                id="email"
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div data-aos="fade-right" data-aos-duration={700}>
              <TextField
                required
                minRows={6}
                fullWidth
                multiline
                type="text"
                label="Ghi chú"
                id="message"
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <ReCAPTCHA sitekey="6LfEk50dAAAAACRVErvAkl4Wki0bjqlwe2BPMN7w" />
          </Grid>

          <Grid item xs={12}>
            <div data-aos="fade-up" data-aos-duration={700}>
              <Button
                type="submit"
                sx={{
                  boxShadow: "rgb(140 152 164 / 10%) 0px 12px 15px",
                  textTransform: "none",
                  minWidth: "150px",
                }}
                variant="contained"
                size="large"
                disabled={status === "loading"}
              >
                {status === "loading" && (
                  <CircularProgress sx={{ mr: 1, color: "#fff" }} size={24} />
                )}
                Gửi đi
              </Button>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div data-aos="zoom-in" data-aos-duration={700}>
              <Typography color="#677788" variant="body1">
                Chúng tôi sẽ xem xét và trả lời tin nhắn bạn sớm nhất có thể.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <div data-aos="zoom-in" data-aos-duration={700}>
              <Typography variant="body2">
                Bằng việc nhấn "Gửi đi" bạn đồng tình với các{" "}
                <Link href="#" color="#1e2022" fontWeight={700}>
                Chính sách bảo mật
                </Link>
                ,{" "}
                <Link href="#" color="#1e2022" fontWeight={700}>
                    Bảo mật dữ liệu
                </Link>{" "}
                và{" "}
                <Link href="#" color="#1e2022" fontWeight={700}>
                Chính sách Cookie
                </Link>
                .
              </Typography>
            </div>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ContactForm;
