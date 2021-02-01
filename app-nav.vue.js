const appNav = {
    template:`
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <span class="navbar-text me-auto mb-2 mb-lg-0"></span>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" v-on:click="swapComp('app-about')" href="#about">About me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" v-on:click="swapComp('app-projects')" href="#projects">Projects</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" v-on:click="swapComp('app-home')" href="#more">More</a>
                    </li>
                </ul>
                <span class="navbar-text me-auto mb-2 mb-lg-0"></span>
            </div>
        </div>
    </nav>    
    `,
    data() {
        return {
        };
      },
  };