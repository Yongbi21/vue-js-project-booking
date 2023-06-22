  <template>
<div>
  <nav class="navbar navbar-expand-lg">
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
      <button class="btn btn-outline-warning custom-btn ms-2" type="submit">Login</button>
      <button class="btn btn-outline-warning custom-btn ms-4" type="submit">Register</button>
    </div>
  </nav>
  <div class="text-center" id="content" >
    <header class="hero-text" style="opacity: 1;">
			<h1 class="hasBreak nobr">Streamline Your Project Workflow<br>  
        with Effortless Communication<br>
         and Management</h1>
        <h3 class="hasBreak nobr">Optimize Project Management and Collaboration <br>
        with Real-Time Messaging, Tracking, and <br>
         Automated Notifications</h3>
         <br>
      </header>
        </div>
</div>
  </template>

  <script>
  export default {
    name: 'LandingPage',
  };
  </script>

  <style scoped>
  @import '../assets/css/index.css';
  </style>
