const headertemplate = document.createElement('template')
headertemplate.innerHTML=`
      <div id="header" >
        <!--logo header-->
        <div class="px-3 py-2 dpink">
            <div class="container"> 
            <div class="d-flex flex-wrap align-items-center justify-content-center">
                <a class="navbar-brand" href="index.html">
                <img class="img-fluid" src="images/pup-essentials-logo.jpg" width="150" height="150" alt="Pup Essentials Logo">
                </a>
            </div>
            </div>
        </div>
        <!--Navigation bar-->
        <div class="row">   
            <nav class="navbar navbar-expand-sm navbar-dark lpink">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarsExample03">
                        <ul class="navbar-nav mb-2 mb-sm-0 justify-content-center">
                            <li class="nav-item ms-4 me-4">
                                <a class="nav-link active text-dark" aria-current="page" href="index.html">Home</a>
                            </li>
                            <li class="nav-item ms-4 me-4">
                                <a class="nav-link text-dark" href="about.html">About</a>
                            </li>
                            <li class="nav-item ms-4 me-4">
                                <a class="nav-link text-dark" href="services.html">Services</a>
                            </li>
                            <li class="nav-item ms-4 me-4">
                                <a class="nav-link text-dark" href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div class="row text-center sercol py-2">
          <div class="container-fluid">
            <a href="/services.html#doggy-daycare/" class="col-4 col-sm-4 text-decoration-none text-dark ms-4 me-4">Doggy Daycare</a> 
            <a href="/services.html#dog-grooming/" class="col-4 col-sm-4 text-decoration-none text-dark ms-4 me-4">Dog Grooming</a>
            <a href="/services.html#boarding-kennels/" class="col-4 col-sm-4 text-decoration-none text-dark ms-4 me-4">Boarding Kennels</a>
          </div>
        </div>
    </div>
     
`
document.body.appendChild(headertemplate.content)