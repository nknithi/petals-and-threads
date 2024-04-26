// header-script.js


const header = document.createElement('header');
header.innerHTML = `
  
<!-- Nav Bar-->
<nav
class="navbar navbar-expand-lg 
navbar-light bg-secondary-subtle">

<!-- Container -->
<div class="container-fluid">


        <a class="navbar-brand d-lg-none fw-bold brand-name text-danger"
        href="index.html"> Petals & threads</a>
        <button class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent">
        <span class="navbar-toggler-icon"></span>
    </button>

   
    <div class="collapse
    navbar-collapse"
    id="navbarContent">
    <a class="navbar-brand
    d-none d-lg-block fw-bold text-danger brand-name"
    href="index.html">
    Petals & threads
</a>

<!-- Search box -->
<form class="d-flex mb-3 mb-lg-0 mt-3 mt-lg-0 mx-auto w-sm-25 ">
    <input
    class="form-control  rounded-0 "
    type="search"
    placeholder="Search" />

    <button class="btn  rounded-0"
    type="submit" id="search-button">
    <i class="fa-solid fa-magnifying-glass"></i>


</button>

</form>

<!-- Login and cart button -->
<div class="mt-2 mt-lg-0 d-flex flex-column flex-lg-row align-items-center">
  <a href="login.html" class="btn btn-outline-secondary rounded-0 login-btn mb-2 mb-lg-0 me-3">Login</a>
  <a class="navbar-text mb-2 me-3 mb-lg-0  " href="cart.html">
      <i class="fas fa-shopping-cart cart-icon cart "></i>
  </a>
</div>



    </div> <!--end of collapsible menu-->

</div><!--end of nav container-->
</nav>

<!-- Nav Bar-->
<nav class="navbar navbar-expand d-flex  navbar-dark bg-dark p-0  ">

<!-- Container -->
<div class="container-fluid">
  <ul class="navbar-nav flex-wrap justify-content-around flex-row mx-auto">
    <li class="nav-item  fw-bold  "  >
      <a class="nav-link    p-lg-3 ps-lg-4 pe-lg-4 p-md-3 ps-md-4 pe-md-4 text-light main-menu-item " href="index.html">Home</a>
    </li>
    <li class="nav-item   fw-bold  ">
      <a class="nav-link text-light p-lg-3 ps-lg-4 pe-lg-4 p-md-3 ps-md-4 pe-md-4 main-menu-item" href="allproducts.html">All Products</a>
    </li>
    <li class="nav-item dropdown  fw-bold  ">
      <a class="nav-link dropdown-toggle text-light p-lg-3 ps-lg-4 pe-lg-4 p-md-3 ps-md-4 pe-md-4 main-menu-item" href="#" role="button" data-bs-toggle="dropdown">
        Women
      </a>
      <ul class="dropdown-menu rounded-top-0 ">
        <li><a class="dropdown-item sub-menu-item" href="women-allproducts.html">All products</a></li>
        <li><a class="dropdown-item sub-menu-item" href="women-dresses.html">Dresses</a></li>
        <li><a class="dropdown-item sub-menu-item" href="women-pants.html">Pants</a></li>
        <li><a class="dropdown-item sub-menu-item" href="women-skirts.html">Skirts</a></li>
      </ul>
    </li>
    <li class="nav-item dropdown  fw-bold main-menu-item ">
      <a class="nav-link dropdown-toggle text-light p-lg-3 ps-lg-4 pe-lg-4 p-md-3 ps-md-4 pe-md-4" href="#" role="button" data-bs-toggle="dropdown">
        Men
      </a>
      <ul class="dropdown-menu rounded-top-0 ">
        <li><a class="dropdown-item sub-menu-item" href="men-allproducts.html">All products</a></li>
        <li><a class="dropdown-item sub-menu-item" href="men-shirts.html">Shirts</a></li>
        <li><a class="dropdown-item sub-menu-item" href="men-pants.html">Pants</a></li>
        <li><a class="dropdown-item sub-menu-item" href="men-jackets.html">Jackets</a></li>
      </ul>
    </li>
    <li class="nav-item  fw-bold   ">
      <a class="nav-link text-light p-lg-3 ps-lg-4 pe-lg-4 p-md-3 ps-md-4 pe-md-4 main-menu-item" href="kids-allproducts.html">Kids</a>
    </li>
    <li class="nav-item  fw-bold ">
      <a class="nav-link text-light p-lg-3 ps-lg-4 pe-lg-4 p-md-3 ps-md-4 pe-md-4 main-menu-item" href="contact-us.html">Contact</a>
    </li>
  </ul>
</div>
</nav>

`;

document.body.appendChild(header);

