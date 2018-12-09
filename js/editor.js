/**
 * short localStorage
 */
var db = localStorage;

/**
 * short query selector
 *
 * @param      {<type>}  el      { parameter_description }
 * @return     {string}  { description_of_the_return_value }
 */
var _ = function _(el) {
  return document.querySelector(el);
};
/**
 * Gets the tpl.
 *
 * @param      {<type>}  element  The element
 * @return     {string}  The tpl.
 */
var getTpl = function getTpl(element) {
  return tpl[element];
};
let loader = document.querySelector('#loader');
if(loader !== null){
    loader.style.display='none';
}
/**
 * Makes an editable.
 *
 * @return     {string}  { description_of_the_return_value }
 */
var makeEditable = function makeEditable() {
  var elements = document.querySelectorAll('.drop-element');
  var toArr = Array.prototype.slice.call(elements);
  Array.prototype.forEach.call(toArr, function (obj, index) {
    if (obj.querySelector('img')) {
      return false;
    } else {
      obj.addEventListener('click', function (e) {
        e.preventDefault();
        obj.children[0].setAttribute('contenteditable', '');
        obj.focus();
      });
      obj.children[0].addEventListener('blur', function (e) {
        e.preventDefault();
        obj.children[0].removeAttribute('contenteditable');
      });
    }
  });
};
/**
 * Removes a divs to save.
 *
 * @return     {string}  { description_of_the_return_value }
 */
var removeDivsToSave = function removeDivsToSave() {
  var elements = document.querySelectorAll('.drop-element');
  var toArr = Array.prototype.slice.call(elements);
  var html = '';
  Array.prototype.forEach.call(toArr, function (obj, index) {
    obj.children[0].removeAttribute('contenteditable');
    html += obj.innerHTML;
  });
  return html;
};
let main = _('.box-right');
if (main !== null) {
  main.addEventListener('click', function (e) {
    e.target.contentEditable = 'true'
  })
}

/**
 * Templates
 *
 * @type  string
 */
var tpl = {
  'hugeTitle': `<div class="intro-heading text-uppercase" style="
                  font-size: 75px;
                  font-weight: 700;
                  line-height: 75px;
                  margin-bottom: 50px;
              ">Its Nice To Meet You</div>`,
  'threewCellsWithIcons': `<div class="row text-center">
                  <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                      <i class="fas fa-circle fa-stack-2x text-primary"></i>
                      <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 class="service-heading">E-Commerce</h4>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                  </div>
                  <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                      <i class="fas fa-circle fa-stack-2x text-primary"></i>
                      <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 class="service-heading">Responsive Design</h4>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                  </div>
                  <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                      <i class="fas fa-circle fa-stack-2x text-primary"></i>
                      <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 class="service-heading">Web Security</h4>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                  </div>
                </div>`,
  '3images': `<div class="row">
                  <div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                      
                      <img class="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="">
                    </a>
                    <div class="portfolio-caption">
                      <h4>Threads</h4>
                      <p class="text-muted">Illustration</p>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                      <div class="portfolio-hover">
                        
                      </div>
                      <img class="img-fluid" src="img/portfolio/02-thumbnail.jpg" alt="">
                    </a>
                    <div class="portfolio-caption">
                      <h4>Explore</h4>
                      <p class="text-muted">Graphic Design</p>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                      
                      <img class="img-fluid" src="img/portfolio/03-thumbnail.jpg" alt="">
                    </a>
                    <div class="portfolio-caption">
                      <h4>Finish</h4>
                      <p class="text-muted">Identity</p>
                    </div>
                  </div>
                  
                  
                  
                </div>`,
  'form': `<div class="container">
                  <div class="row">
                    <div class="col-lg-12 text-center">
                      <h2 class="section-heading text-uppercase">Contact Us</h2>
                      <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12">
                      <form id="contactForm" name="sentMessage" novalidate="novalidate">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <input class="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name.">
                              <p class="help-block text-danger"></p>
                            </div>
                            <div class="form-group">
                              <input class="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address.">
                              <p class="help-block text-danger"></p>
                            </div>
                            <div class="form-group">
                              <input class="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number.">
                              <p class="help-block text-danger"></p>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <textarea class="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message." aria-invalid="false"></textarea>
                              <p class="help-block text-danger"></p>
                            </div>
                          </div>
                          <div class="clearfix"></div>
                          <div class="col-lg-12 text-center">
                            <div id="success"></div>
                            <button id="sendMessageButton" class="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>`,
  '3cellsWithIcon': `<div class="container">
     <h2 class="page-section-heading text-uppercase text-center">Our Process</h2>
     <p class="lead m-0 text-center">Here is an overview of how we approach each new project.</p>
     <hr class="primary small mb-5">
     <div class="row">
       <div class="col-lg-4 mb-5 mb-lg-0">
         <!-- Process Column 1 -->
         <div class="process-list">
           <div class="process-list-icon">
             <i class="fas fa-drafting-compass"></i>
           </div>
           <div class="process-list-content">
             <h4 class="text-uppercase mb-3">Plan</h4>
             <ul>
               <li>Client interview</li>
               <li>Gather consumer data</li>
               <li>Create content strategy</li>
               <li>Analyze research</li>
             </ul>
           </div>
         </div>
       </div>
       <div class="col-lg-4 mb-5 mb-lg-0">
         <!-- Process Column 2 -->
         <div class="process-list">
           <div class="process-list-icon">
             <i class="fas fa-pencil-ruler"></i>
           </div>
           <div class="process-list-content">
             <h4 class="text-uppercase mb-3">Create</h4>
             <ul>
               <li>Build wireframes</li>
               <li>Gather client feedback</li>
               <li>Application development</li>
               <li>Marketing review</li>
             </ul>
           </div>
         </div>
       </div>
       <div class="col-lg-4">
         <!-- Process Column 3 -->
         <div class="process-list">
           <div class="process-list-icon">
             <i class="fas fa-rocket"></i>
           </div>
           <div class="process-list-content">
             <h4 class="text-uppercase mb-3">Launch</h4>
             <ul>
               <li>Deploy website</li>
               <li>Market product launch</li>
               <li>Collect user data</li>
               <li>Quarterly reporting</li>
             </ul>
           </div>
         </div>
       </div>
     </div>
   </div>`,
  'largeparagraph': '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,</p>',
  'ullist': '<ul><li>item 1</li><li>item 2</li><li>item 3</li><li>item 4</li></ul>',
  'ollist': '<ol><li>item 1</li><li>item 2</li><li>item 3</li><li>item 4</li></ol>',
  'image': '<img src="http://lorempixel.com/400/200/">',
  'code': '<pre>function say(name){\n return name;\n}</pre>'
};


/**
 * init dragula
 *
 * @type  function
 */
var containers = [_('.box-left'), _('.box-right')];
var drake = dragula(containers, {
  copy: function copy(el, source) {
    return source === _('.box-left');
  },
  accepts: function accepts(el, target) {
    return target !== _('.box-left');
  }
});


drake.on('out', function (el, container) {
  console.log(el);
  if (container == _('.box-left')) {
    Promise.resolve(el.innerHTML = getTpl(el.getAttribute('data-tpl'))).then(function () {
      makeEditable();
      db.setItem('savedData', _('.box-right').innerHTML);
    })
  }
});

/**
 * save in local storage
 */
if (typeof db.getItem('savedData') !== 'undefined') {
  _('.box-right').innerHTML = db.getItem('savedData');
  makeEditable();
};

/**
 * reset
 */
_('.reset').addEventListener('click', function (e) {
  e.preventDefault;
  if (confirm('Are you sure !')) {
    _('.box-right').innerHTML = '';
  }
});

/**
 * save to file
 */
//  _('.save').addEventListener('click', function (e) {
//      e.preventDefault();
//      var blob = new Blob([removeDivsToSave()], {
//          type: 'text/html;charset=utf-8'
//      });

//      db.setItem('savedData', _('.box-right').innerHTML);
//      saveAs(blob, 'file.html');
//  });

function hideHomePage() {
  let header = _('header');
  let menu = _('#sidebar-wrapper');
  let sideMenu = _('.menu-toggle');
  let topMenu = _('#top-nav');
  let textEditor = _('.wrap');
  let editorApp = _('#app-editor');
  sideMenu.style.display = 'block';
  editorApp.style.display = 'block';

  if (header !== null) {
    setTimeout(() => {
      header.remove();
      menu.classList.add('active');
      topMenu.style.opacity = '1';
      textEditor.style.visibility = 'visible';
    }, 1200);
  }
}
function setTheme(theme) {
  let loader = document.querySelector('#loader');
  loader.style.display='block';
  if(loader !== null){
    setTimeout(() => {
      loader.style.display='none';
    }, 5000);
  }
  let curTheme = _('#app-theme');
  if (curTheme !== null) {
    setTimeout(() => {
      curTheme.remove();
    }, 3000);
  }
  let themePack = themes[theme];
  let link = document.createElement('link');
  link.href = themePack;
  link.id = 'app-theme'
  link.rel = 'stylesheet'
  document.head.appendChild(link);
}
themes = {
  sketchy: `https://bootswatch.com/4/sketchy/bootstrap.min.css`,
  superhero: `https://bootswatch.com/4/slate/bootstrap.min.css`,
  spacelab: `https://bootswatch.com/4/spacelab/bootstrap.min.css`,
  litera: `https://bootswatch.com/4/litera/bootstrap.min.css`,
  pulse: `https://bootswatch.com/4/pulse/bootstrap.min.css`

}