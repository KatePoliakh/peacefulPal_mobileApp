import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function AuthPage() {
  return (
    <View style={styles.AuthPage}>
      <View style={styles.Title1}>
        <Text style={styles.Title}>Welcome back Login</Text>
      </View>
      <View style={styles.BgCircle} />
      <View style={styles.LoginForm}>
        <View style={styles.EmailTextBox}>
          <View style={styles.PlaceholderRightIcon}>
            <Text style={styles.Label}>Email</Text>
          </View>
        </View>
        <View style={styles.PasswordWrapper}>
          <View style={styles.PasswordTextBox}>
            <View style={styles.PlaceholderRightIcon1}>
              <Text style={styles.Label1}>Password</Text>
              <Image
                style={styles.IconEye}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/mgyiyqs1jz-I832%3A2385%3B12%3A75?alt=media&token=8fc34696-ca76-42e3-8c37-6c22984dcee1",
                }}
              />
            </View>
          </View>
          <Text style={styles.ForgotPasswordLink}>Forgot Password?</Text>
        </View>
      </View>
      <View style={styles.Frame139}>
        <Text style={styles.Login}>Login</Text>
      </View>
      <View style={styles.BottomLink}>
        <Text style={styles.DonTHaveAnAccount}>Don’t have an account?</Text>
        <Text style={styles.SignUp}>Sign Up</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  AuthPage: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 812,
    height: 375,
    borderRadius: 40,
    boxSizing: "border-box",
    backgroundColor: "rgba(174,175,247,1)",
    transform: "rotate(-90deg);",
  },
  Title1: {
    position: "absolute",
    top: 125,
    left: 43,
    width: 94,
    height: 287,
    paddingBottom: 207,
    boxSizing: "border-box",
  },
  Title: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(250,250,250,1)",
    fontSize: "40px",
    lineHeight: "40px",
    fontFamily: "Raleway, sans-serif",
    fontWeight: "700",
    textAlign: "center",
  },
  BgCircle: {
    position: "absolute",
    top: "62.13%",
    bottom: "-66.67%",
    left: "-12.93%",
    right: "64.66%",
    width: 392,
    height: 392,
    borderRadius: 196,
    backgroundColor: "rgba(252,221,236,1)",
    transform: "rotate(-90deg);",
  },
  LoginForm: {
    position: "absolute",
    top: 337,
    left: 26,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 327,
    height: 137,
    boxSizing: "border-box",
    transform: "rotate(-90deg);",
  },
  EmailTextBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    marginRight: 16,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 8,
    paddingBottom: 8,
    borderWidth: 1,
    borderColor: "rgba(237,236,244,1)",
    borderRadius: 8,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  PlaceholderRightIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },
  Label: {
    marginRight: 24,
    color: "rgba(123,107,168,1)",
    fontSize: "16px",
    lineHeight: "163%",
    fontFamily: "Raleway, sans-serif",
    fontWeight: "500",
    letterSpacing: "-0.5px",
  },
  PasswordWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
    boxSizing: "border-box",
  },
  PasswordTextBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    marginRight: 8,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 8,
    paddingBottom: 8,
    borderWidth: 1,
    borderColor: "rgba(237,236,244,1)",
    borderRadius: 8,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  PlaceholderRightIcon1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },
  Label1: {
    marginRight: 24,
    color: "rgba(123,107,168,1)",
    fontSize: "16px",
    lineHeight: "163%",
    fontFamily: "Raleway, sans-serif",
    fontWeight: "500",
    letterSpacing: "-0.5px",
  },
  IconEye: {
    width: 24,
    height: "100%",
  },
  ForgotPasswordLink: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    color: "rgba(67,44,129,1)",
    fontSize: "14px",
    lineHeight: "150%",
    fontFamily: "Raleway, sans-serif",
    fontWeight: "500",
    textAlign: "right",
  },
  Frame139: {
    position: "absolute",
    top: "144.27%",
    bottom: "-53.87%",
    left: "5.67%",
    right: "58.25%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 293,
    height: 36,
    padding: 10,
    borderRadius: 10,
    boxSizing: "border-box",
    backgroundColor: "rgba(55,27,52,1)",
    transform: "rotate(-90deg);",
  },
  Login: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(255,255,255,1)",
    fontSize: "20px",
    lineHeight: "20px",
    fontFamily: "Raleway, sans-serif",
    fontWeight: "500",
    textAlign: "center",
  },
  BottomLink: {
    position: "absolute",
    top: 583,
    left: 26,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 327,
    height: 21,
    boxSizing: "border-box",
    transform: "rotate(-90deg);",
  },
  DonTHaveAnAccount: {
    marginRight: 8,
    color: "rgba(130,121,157,1)",
    fontSize: "14px",
    lineHeight: "150%",
    fontFamily: "Raleway, sans-serif",
    fontWeight: "500",
  },
  SignUp: {
    color: "rgba(67,44,129,1)",
    fontSize: "14px",
    lineHeight: "150%",
    fontFamily: "Raleway, sans-serif",
    fontWeight: "500",
  },
})
