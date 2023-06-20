<template>
  <div class="login-container">
    <form class="login-form" @submit.prevent="login">
      <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
          <div
            class="row d-flex justify-content-center align-items-center h-100"
          >
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card bg-dark text-white" style="border-radius: 1rem">
                <div class="card-body p-5 text-center">
                  <div class="mb-md-5 mt-md-4 pb-5">
                    <img
                      src="C:\Users\dreamers PC\Documents\vue js projec booking app\src\assets\img\dreamers logo.png"
                      alt=""
                      style="width: 120px; height: 120px"
                    />
                    <p class="text-white-50 mb-5">
                      Please enter your login and password!
                    </p>

                    <div class="form-outline form-white mb-4">
                      <label class="form-label" for="typeEmailX">Email</label>
                      <input
                        type="email"
                        id="typeEmailX"
                        placeholder="Enter email"
                        class="form-control form-control-lg"
                      />
                    </div>

                    <div class="form-outline form-white mb-4">
                      <label class="form-label" for="typePasswordX"
                        >Password</label
                      >
                      <input
                        type="password"
                        id="typePasswordX"
                        placeholder="Enter password"
                        class="form-control form-control-lg"
                      />
                    </div>

                    <p class="small mb-5 pb-lg-2">
                      <a class="text-white-50" href="#!">Forgot password?</a>
                    </p>

                    <button
                      class
                      span="btn btn-primary btn-rounded"
                      type="submit"
                    >
                      Login
                    </button>

                    <div
                      class="d-flex justify-content-center text-center mt-4 pt-1"
                    >
                      <a href="#!" class="text-white"
                        ><i class="fab fa-facebook-f fa-lg"></i
                      ></a>
                      <a href="#!" class="text-white"
                        ><i class="fab fa-instagram fa-lg mx-4 px-2"></i
                      ></a>
                      <a href="#!" class="text-white"
                        ><i class="fab fa-google fa-lg"></i
                      ></a>
                    </div>
                  </div>

                  <div>
                    <p class="mb-0">
                      Don't have an account?
                      <a href="#!" class="text-white-50 fw-bold">Sign Up</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Perform login logic here
      // This could include making an API call to the server to verify the credentials

      // After successful login, you can navigate to another page
      // For example, redirect to a dashboard page
      this.$router.push("/dashboard");
    },
  },
};
</script>
<style scoped>
.login-container {
  width: 100%;
  height: calc(100vh);
  display: flex;
  align-items: center;
  justify-items: center;
  overflow: hidden;
}
.login-form .divider {
  margin-top: 40px;
}

.button {
  margin-top: 10px;
  line-height: 27px;
  border-radius: 4%;
}

.login-form {
  max-width: 500px;
  padding: 40px;
  margin: 0 auto;
  background-color: white;
  border-radius: 4%;
}

input {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border-radius: 6px;
  box-sizing: border-box;
  border: 1px solid black;
}
</style>
