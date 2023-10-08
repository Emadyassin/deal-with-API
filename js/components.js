const navComponent = () => {
  return `
  <nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Posts</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasNavbar"
      aria-controls="offcanvasNavbar"
      aria-label="Toggle navigation"
    >
      <i class="fa-solid fa-gear"></i>
    </button>
    <div
      class="offcanvas offcanvas-end rounded-start-5"
      tabindex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div class="offcanvas-header border-3 border-bottom">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Setting</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <h4>Post default image</h4>
        <img
          id="default-image"
          class="setting-img w-100 rounded-4"
          src=""
          alt=""
        />
        <button id="file-btn" class="btn btn-primary w-100 mt-2">
          choose Image
        </button>
        <input
          type="file"
          class="d-none"
          name=""
          id="file-image"
          accept="image/*"
        />
      </div>
      <div class="offcanvas-bottom p-3">
        <button id="save" class="btn btn-primary w-50 float-end">save</button>
      </div>
    </div>
  </div>
</nav>
      `;
};


const mainComponent = (headerItems) => {
  let elements ='';
  for (let i = 0; i < 10; i++) {
    elements += `
    <div class="col-12 col-md-6 col-lg-4 p-3 mt-3">
    <div
      class="card rounded-3 h-100 position-relative d-flex align-items-center pt-5"
    >
       <p class="Sale bg-color-black text-white m-0 position-absolute">Sale</p> 
  
      <img
        src=""
        class="cart-image rounded-circle position-absolute shadow"
      />
      <div
        class="card-body d-flex flex-column align-content-center align-items-center justify-content-between gap-3 w-100"
      >
        <div class="card-info d-flex flex-column text-center w-100">
          <div class="title d-flex flex-column align-items-center">
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
          </div>
          <div class="d-flex flex-column align-items-center mt-3">
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  `
  }
  return `
    <main id="main" class="pt-5 pb-5">
      <div class="container">
        <div id="posts" class="row">
          ${elements}  
        </div>
      </div>
    </main> 
      `;

};


const mainCardComponent = (headerItems) => {

  if (!headerItems) return "";
  const elements = headerItems
    .map((item) => {
      return `
      <div class="col-12 col-md-6 col-lg-4 p-3 mt-3">
      <div
        class="card rounded-3 h-100 position-relative d-flex align-items-center pt-5"
      >
         <p class="Sale bg-color-black text-white m-0 position-absolute">${item.id}</p> 
    
        <img
          src="user.png"
          class="cart-image rounded-circle position-absolute shadow"
        />
        <div
          class="card-body d-flex flex-column align-content-center align-items-center justify-content-between gap-3 w-100"
        >
          <div class="card-info d-flex flex-column text-center w-100">
            <div class="title d-flex flex-column align-items-center">
              <h4>${item.title}</h4>
            </div>
            <div class="d-flex flex-column align-items-center mt-3">
               <p>${item.body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
          `;
    })
    .join("");

  return `
        ${elements}
    `;
};


renderHtml(navComponent());
renderHtml(mainComponent());


async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    setTimeout(() => {
      el("#posts").innerHTML =  mainCardComponent(data);
    }, 2000);
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchPosts()