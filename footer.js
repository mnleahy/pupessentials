const footertemplate = document.createElement('template')
footertemplate.innerHTML=`
<div class="ps-5 pe-5 dpink">
    <footer class="row d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <p class="col-md-4 mb-0 text-light">&copy; 2022 Company, Inc</p>
      <ul class="nav col-md-4 justify-content-end">
        <li class="nav-item"><a href="index.html" class="nav-link px-2 text-light">Home</a></li>
        <li class="nav-item"><a href="about.html" class="nav-link px-2 text-light">About</a></li>
        <li class="nav-item"><a href="services.html" class="nav-link px-2 text-light">Services</a></li>
        <li class="nav-item"><a href="contact.html" class="nav-link px-2 text-light">Contact</a></li>
      </ul>
    </footer>
</div>     
`
document.body.appendChild(footertemplate.content)