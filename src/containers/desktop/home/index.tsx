import { Typography, Box, Container } from "@mui/material";
import React from "react";
import FormInput from "./Components/FormInput";

const Home = () => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "url('https://s3-alpha-sig.figma.com/img/1329/9d4a/321aa6a6d1db2d67c0d4914484722219?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KFEvAjEqZw3rTU0cRve8VKfakmYfk2aeh5SCw0rRODYjYr8h0DlQYqawShBPRkEOul0drcnt3IaGyjDoxluD2X4vPLM-IjLQnuH1gmC6HxU3PfjyKysZGmu1RW-9-Hbeab~ox11gsDalgWsoYJejP5yQxPJPW8QJtxlfxIGgEftTYpMNdfsVOsOCEeM3G4jbQz8RlhFkmuMgAO3QL4gvGS4B3~mpJRSq7I5HffYz2fRbKL6jAvYg3PJMEritJo9x7pptU1W0d~xF1T7FzVlPivpL8vERWCABoVBGTL6zNnYcOY6OQxbXdNbncUqBkmQ1NzMoWQh17-0V4NbGo5kGaw__')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        textAlign: "center",
        color: "white",
        // opacity: "60%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        // backgroundColor:
        //   "linear-gradient(rgba(0, 0, 0, 60%), rgba(0, 0, 0, 60%))",
      }}
    >
      {/* Centered Content */}
      <Box
        sx={{
          padding: 40,
          borderRadius: 2,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 600,
            fontSize: "36px",
            leadingTrim: "cap-height",
            lineHeight: "100%",
            letterSpacing: "0%",
            textAlign: "center",
            marginBottom: 8,
          }}
        >
          Staycation menjadi lebih mudah hanya dengan satu klik dan dapatkan
          banyak promo menarik!
        </Typography>

        <Container>
          {/* Input Section */}
          <FormInput />
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
