<!DOCTYPE HTML> 
<html>
    <head>
        <meta charset ="UTF-8"> 
        <meta name ="keywords" content="Portfolio, Web designer, UI, UX, HTML prototyper"> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="style-main.css">
        <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
    </head>
    <body>
        <header>
            <div class="wrapper"> 
                <div class="logo-container left"> 
                    <a id="logo" href="./index.html"> <img src="./img/logo.svg" alt="my logo" style="width:123px; height: 34px"></a>
                </div>
                <nav class="menu right"> 
                    <ul class="menu-list" > 
                        <li class="menu-item">
                            <a class="menu-item-link" href="./index.html" title="Home" >home</a>
                        </li>
                        <li class="menu-item"> 
                            <a class="menu-item-link" href="./about.html" title="About" >about</a>
                        </li>
                        <li class="menu-item">
                            <a class="menu-item-link" href="./work.html" title="Work" >work</a>
                        </li>
                        <li class="menu-item"> 
                            <a class="menu-item-link" href="./contact.html" title="Contact" >contact</a>
                        </li>
                    </ul>
                </nav>
                <div class="clear"> </div>
            </div>
        </header>
        <div id="slider">
            <picture> 
                <source
                        type="image/jpg"
                        media="(min-width:415px)"
                        srcset="./img/bnlarge.jpg 1920w,
                             ./img/bnmed.jpg 960w,
                             ./img/bnsmall.jpg 640w" />
                <source
                        type="image/jpg"
                        srcset="./img/bnsquarelarge.jpg 735w,
                             ./img/bnsquaremed.jpg 640w,
                             ./img/bnsquaresmall.jpg 320sw" /> 
                <img src="./img/bnmed.jpg" alt="banner"> 
            </picture>
            <div class="slider-text"> 
                <h1> Hello I am Lan</h1>
                <h2> Web Designer</h2>
            </div>
             
        </div>
        <div class="wrapper"> 
            <div id="widget-bar">
                <aside class="widget-item left">
                    <h3> A web designer based in Saigon </h3>
                    <p> UI/UX Design </p>
                    <p> UI Animation </p>
                    <p> Motion and Interactive Prototype </p>
                </aside>
                <aside class="widget-item right">
                    <h3>View my CV </h3>
                    <button type="button"> Download cv </button>
                </aside>
                <div class="clear">
                </div>
            </div>

            <div id="work-bar"> 
                <div class="work-item">
                    <div class="work-bg">
                            <img srcset= "./img/large%20(1).jpg  1024w,
                                          ./img/large%20(1).jpg 640w,
                                          ./img/large%20(1).jpg  320w"
                                sizes="(min-width: 1024px) calc((70vw - (0.5em * 2)) / 3), (min-width: 415px) calc((90vw - 0.5em) / 2),100vw"
                               src="./img/small%20(1).jpg"
                               alt="work item" />
                    </div>
                    <div class="work-info">
                        <p>Prototype</p>
                        <p> UX Design </p>
                    </div>
                </div> 
                <div class="work-item">
                    <div class="work-bg">
                        <img srcset="./img/large%20(2).jpg  1024w,
                                      ./img/large%20(2).jpg 640w,
                                      ./img/large%20(2).jpg  320w"
                            sizes="(min-width: 1024px) calc((70vw - (0.5em * 2)) / 3), (min-width: 415px) calc((90vw - 0.5em) / 2),100vw"
                           src="./img/small%20(2).jpg"
                           alt="work item" />
                    </div>
                    <div class="work-info">
                        <p>Application </p>
                        <p> UX Design </p>
                    </div>
                </div> 
                <div class="work-item">
                    <div class="work-bg">
                            <img srcset="./img/large%20(3).jpg  1024w,
                                          ./img/large%20(3).jpg 640w,
                                          ./img/large%20(3).jpg  320w"
                                sizes="(min-width: 1024px) calc((70vw - (0.5em * 2)) / 3), (min-width: 415px) calc((90vw - 0.5em) / 2),100vws"
                               src="./img/small%20(3).jpg"
                               alt="work item" />
                    </div>
                    <div class="work-info">
                        <p>Use case</p>
                        <p>UX Design</p>
                    </div>
                </div>
                <div class="work-item">
                    <div class="work-bg">
                            <img srcset="./img/large%20(4).jpg  1024w,
                                          ./img/large%20(4).jpg 640w,
                                          ./img/large%20(4).jpg  320w"
                                sizes="(min-width: 1024px) calc((70vw - (0.5em * 2)) / 3), (min-width: 415px) calc((90vw - 0.5em) / 2),100vw"
                               src="./img/small%20(4).jpg"
                               alt="work item" />
                    </div>
                    <div class="work-info">
                        <p>Movement </p>
                        <p> UI Design Animation</p>
                    </div>
                </div>
                <div class="clear"> </div>
            </div>
            <div id="bottom">
                <aside class="related-links left">
                    <h3> My Blog </h3>
                    <ul id="article"> 
                        <li class="my-article-item">
                            <a class="related-link-item" href=# > My first article</a>
                        </li>
                        <li class="my-article-item">
                            <a class="related-link-item" href=# > My second article</a>
                        </li>
                    </ul>
                </aside>
                <aside class="social-network right">
                    <ul id="social">
                        <li class="social-link">
                            <a href=#> <img src="img/facebook32.png" alt="icon facebook"> </a>
                        </li>
                        <li class="social-link">
                            <a href=#> <img src="img/linkedin32.png" alt="icon linked in"> </a>
                        </li>
                        <li class="social-link">
                            <a href=#> <img src="img/behance32.png" alt="icon behance"> </a>
                        </li>
                    </ul> 
                </aside>
                <div class="clear"> </div>
            </div>
            <footer>
            <p> Vanphamnhatlan 2015 <br/> All's right reserved. </p>
        </footer>
        </div>
    </body>
</html>