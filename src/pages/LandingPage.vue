<template>
  <div class="wrapper" id="content1">
    <nav class="navbar navbar-expand-lg" id="navbar">
      <div class="container-fluid" id="header">
        <div class="d-flex align-items-center ml-4">
          <a href="#">
            <img src="../assets/img/dreamers logo.png" width="120px;" class="mr-2">
          </a>
          <a class="navbar-brand" href="#">Project Booking App</a>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="sideheader" style="padding-right: 40px;">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-4">
          <li class="nav-item ms-2">
            <a class="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item ms-2">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item ms-2">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>
        <router-link :to="{ name: 'login' }" class="btn btn-custom-btn ms-2" style="color: black;">Login</router-link>
        <button class="btn btn-custom-btn ms-4" type="submit">Register</button>
      </div>
    </nav>
    <div class="text-center" id="content">
      <header class="hero-text" style="opacity: 1;">
        <h1 class="hasBreak nobr">Streamline Your Project Workflow<br>  
          with Effortless Communication<br>
          and Management</h1>
        <h3 class="hasBreak nobr">
          <img id="arrow1" src="../assets/img/arrow1.png" width="60" style="margin-right: 10px;">
          Optimize Project Management and Collaboration
          <img id="arrow2" src="../assets/img/arrow2.png" width="60" style=" margin-right : 10px;">
          <br> 
          with Real-Time Messaging, Tracking, and
          <br>
          Automated Notifications
        </h3>
        <br>
        <div class="request">
          <button class="request-button">REQUEST NOW!</button>
        </div>
      </header>
      <div class="d-flex justify-content-between">
        <img src="../assets/img/landing-page1.jpg" width="700" class="img-fluid">
        <img src="../assets/img/landing-page2.jpg" width="700" class="img-fluid">
      </div>
    </div>
    <div class="text-center" id="feature">
      <h1 class="feat"> Features of Our App </h1>
    </div>
    <div class="text-center row row-cols-2 row-cols-lg-3 g-2 g-lg-3" id="feature">
  <div class="col">
    <div class="p-3">
      <div class="image-wrapper">
        <img src="../assets/img/feature1.jpg" alt="Feature 1" class="feature-image">
      </div>
    </div>
    <h2 class="feat">Project Request Submission</h2>
    <h3 class="feat2"> Submit project request after filling up the necessary information in the form to further help you in
      your project
    </h3>
    <a href="#" class="feat3">Click here</a>
  </div>
  <div class="col">
    <div class="p-3">
      <div class="image-wrapper">
        <img src="../assets/img/feature2.jpg" alt="Feature 2" class="feature-image">
      </div>
    </div>
    <h2 class="feat">Project Management Dashboard</h2>
    <h3 class="feat2"> See your projects progress and other details for assesment
    </h3>
    <a href="#" class="feat3">Click here</a>
  </div>
  <div class="col">
    <div class="p-3">
      <div class="image-wrapper">
        <img src="../assets/img/feature3.jpg" alt="Feature 3" class="feature-image">
      </div>
    </div>
    <h2 class="feat">Communication and Messaging</h2>
    <h3 class="feat2"> You can now use real-time communication in updating us
    </h3>
    <a href="#" class="feat3">Click here</a>
  </div>
  <div class="col">
    <div class="p-3">
      <div class="image-wrapper">
        <img src="../assets/img/feature6.jpg" alt="Feature 4" class="feature-image">
      </div>
    </div>
    <h2 class="feat">Pricing and Qouting</h2>
    <h3 class="feat2"> See our prices base on the project details that your project requires
    </h3>
    <a href="#" class="feat3">Click here</a>
  </div>
  <div class="col">
    <div class="p-3">
      <div class="image-wrapper">
        <img src="../assets/img/feature5.jpg" alt="Feature 5" class="feature-image">
      </div>
    </div>
    <h2 class="feat">Project Status Tracking</h2>
    <h3 class="feat2"> Track your project status and how it is progressing and see what milestones 
      that was accomplished
    </h3>
    <a href="#" class="feat3">Click here</a>
  </div>
  <div class="col">
    <div class="p-3">
      <div class="image-wrapper">
        <img src="../assets/img/feature4.jpg" alt="Feature 6" class="feature-image">
      </div>
    </div>
    <h2 class="feat">Notification and Reminders</h2>
    <h3 class="feat2"> We can always update and remind you with our automated notifications 
      and reminders in information that you may need
    </h3>
    <a href="#" class="feat3">Click here</a>
  </div>
</div>
<div class="container">
<div class="text-center" id="about">
      <h1 class="feat"> About Our App </h1>
      <div class="feat container" id="text-about">
  <div class="row justify-content-center">
    <div class="col-10">
      <div class="text-center">
        Welcome to Project Booking App, a comprehensive project booking app designed to streamline project management and enhance collaboration. With our platform, you can effortlessly manage projects from request to completion, ensuring efficient communication, tracking, and timely notifications.
      </div>
    </div>
  </div>
</div>
</div>
    </div>
    <div class="text-center" id="feedback">
    <h1 class="feat">Clients Feedback</h1>
    <div class="row row-cols-1 row-cols-md-3 g-4" style="padding: 100px;">
      <div class="col">
        <div class="card">
          <img src="../assets/img/jc.jpg" class="card-img-top" alt="jc">
          <div class="card-body">
            <h5 class="card-title" id="client">Jc Delacruz</h5>
            <p class="card-text">The app is very user-friendly, and the transaction is smooth from start to finish</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="../assets/img/jc.jpg" class="card-img-top" alt="jc">
          <div class="card-body">
            <h5 class="card-title" id="client">Jc Delacruz</h5>
            <p class="card-text">The app is very user-friendly, and the transaction is smooth from start to finish</p>
          </div>
        </div>
      </div>
      <div class="col position-relative">
        <div class="card">
          <img src="../assets/img/jc.jpg" class="card-img-top" alt="jc">
          <div class="card-body">
            <h5 class="card-title" id="client">Jc Delacruz</h5>
            <p class="card-text">The app is very user-friendly, and the transaction is smooth from start to finish</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="footer">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h5>Quick Links</h5>
        <ul class="list-unstyled">
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>
      <div class="col-md-4">
        <h5>Follow Us</h5>
        <ul class="list-inline social-icons">
          <ul class="list-inline-item"><a href="https://www.facebook.com/contactdreamers" style="margin-right: 10px;"><i class="fab fa-facebook" style="color: aliceblue;"></i></a>Facebook</ul>
          <ul class="list-inline-item"><a href="https://twitter.com/" style="margin-right: 10px;"><i class="fab fa-twitter" style="color: skyblue;"></i></a>Twitter</ul>
          <ul class="list-inline-item"><a href="https://www.linkedin.com/in/aj-romblon-23861524a/" style="margin-right: 10px;"><i class="fab fa-linkedin" style="color: skyblue;"></i></a>Linkedin</ul>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <h5>STAY IN TOUCH</h5>
        <form>
          <div class="input-group mb-3">
            <ul>
              <li class="call"><img src="../assets/img/call.png" width="30" style="margin-right:10px;">01-234-567</li>
              <li class="call"><img src="../assets/img/call.png" width="30" style="margin-right:10px;">01-234-567</li>
              <li class="email-address"><img src="../assets/img/message.png" width="30" style="margin-right:10px;">xt202001294@wmsu.edu.ph</li>
            </ul>
          </div>
        </form>
      </div>
    </div>
    <!-- <div class="row">
      <div class="col-md-12">
        <p>All rights reserved</p>
      </div>
    </div> -->
  </div>
</footer>

    </div>
</template>

<script>
export default {
  name: "LandingPage",
  mounted() {
    const navbar = document.getElementById("navbar");
    const initialNavbarTop = navbar ? navbar.offsetTop : 0;

    function handleScroll() {
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      if (navbar && scrollPosition >= initialNavbarTop) {
        navbar.classList.add("navbar-fixed");
      } else {
        navbar.classList.remove("navbar-fixed");
      }
    }

    window.addEventListener("scroll", handleScroll);

    function moveImage() {
      var arrow1 = document.getElementById("arrow1");
      var arrow2 = document.getElementById("arrow2");
      if (arrow1 && arrow2) {
        arrow1.style.transition = "margin-bottom 2s";
        arrow2.style.transition = "margin-bottom 2s";
        arrow1.style.marginBottom = "-120px";
        arrow2.style.marginBottom = "-120px";

        setTimeout(function() {
          arrow1.style.transition = "margin-bottom 2s";
          arrow2.style.transition = "margin-bottom 2s";
          arrow1.style.marginBottom = "0";
          arrow2.style.marginBottom = "0";
        }, 2000);
      }
    }

    function startMovingImage() {
      setInterval(moveImage, 3000);
    }

    startMovingImage();
  },
};

</script>

<style scoped>
@import '../assets/css/index.css';
@import '~@fortawesome/fontawesome-free/css/all.css';
</style>
