// Javascript by Noelle Leahy

const headertemplate = document.createElement('template')
headertemplate.innerHTML=`
      <div id="header">
        <!--logo header-->
        <div class="pdg pdr dpink">
            <div class="container-fluid"> 
            <div class="hdrctr">
                <a href="index.html">
                <img class="imgcent" src="images/PUP-ESSENTIALS-LOGO.jpg" width="150" height="150" alt="Pup Essentials Logo">
                </a>
            </div>
            </div>
        </div>
        <!--Navigation bar-->
        <div>   
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
    </div>
     
`
document.body.appendChild(headertemplate.content)
