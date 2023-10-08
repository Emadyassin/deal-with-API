const fileImage = el("#file-image");
const fileBtn = el("#file-btn");
const defaultImage = el("#default-image");
const saveBtn = el("#save");
const imgFromLocal = getStorage("user");


if (imgFromLocal) {
  var noImages = document.getElementsByClassName("cart-image");

  for (var i = 0; i < noImages.length; i++) {
    noImages.src = user[0].img;
  }
}

const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    reject("reject");
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

function encodeImageFileAsURL(inputId) {
  return new Promise(function (resolve, reject) {
    const selectedFile = inputId.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    } else {
      resolve("no file added");
    }
  });
}

fileImage.addEventListener("change", async (e) => {
  const file = e.target.files[0];

  if (file.type.includes("image") || file.type.includes("jpg")) {
    const data = await encodeImageFileAsURL(fileImage).catch((e) => {
      console.error(e);
    });
    defaultImage.src = data;
  }
});

if (imgFromLocal) {
  console.log(imgFromLocal)
  defaultImage.src = user[0].img;
}

fileBtn.onclick = () => {
  fileImage.click();
};

saveBtn.onclick = () => {
  user.push({
  img : defaultImage.src
  } )
  // el("#posts").innerHTML =  mainCardComponent(data);
  if (imgFromLocal) {
    var noImages = document.getElementsByClassName("cart-image");
  
    for (var i = 0; i < noImages.length; i++) {
      noImages.src = user[0].img;
    }
  }
  setStorage("user", user);
// const updateProductModal = 
//   bootstrap.Modal.getOrCreateInstance("#offcanvasNavbar");
// updateProductModal.toggle();
};


document.getElementsByClassName

