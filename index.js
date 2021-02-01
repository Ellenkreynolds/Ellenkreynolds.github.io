const workInfo=[
  {
    id: 1,
    image: "happy_plate.png",
    iframe: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FFmXQmFPls758rCntmgo487%2FHappyPlate-Digital-Screens-Hi-fi%3Fnode-id%3D1%253A4%26scaling%3Dmin-zoom", 
    title1: "Mobile Prototype",
    title2: "Happy Plate",
    summary: "An app that highlights dietary and lifestyle restrictions. Makes it easily accessible for people to find restaurants to meet their dietary or lifestyle restriction needs. "
  },
  {
    id: 2,
    image: "department.png",
    iframe: "https://xd.adobe.com/view/c9c1e7e3-84c2-4f03-a02c-d2505c8da937-9c92/screen/d207aaf7-3944-449a-b117-302bb1882926?fbclid=IwAR2mNpDHbLSz1KAyS0JFGoL05BrwCx-AHiMXOtXCAea4pN2yFYPhuio7WFc&fullscreen",
    title1: "Website Prototype",
    title2: "D.O.I Redesign RWD",
    summary: "Redesigned the Department of Interior Website and Mobile Application RWD. Changed color scheme, navigation bar and footer content. "
  },
  {
    id: 3,
    image: "feeding_america.png",
    iframe: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FjerErWETSwzg5HNDX6BOIN%2FFeeding-America-High-Fidelity-Clickable-Prototype%3Fscaling%3Dmin-zoom%26node-id%3D5%253A3", 
    title1: "Website Prototype",
    title2: "Feeding America RWD",
    summary: "Feeding America website redesign. Reconfigured navigation bar, contact us form and overall look and feel of the webpage. "

  }
]

let modal = document.getElementById("myModal")
let modalContent=document.getElementById("modal-content")
let topLeft = document.querySelector(".img-1")
let topRight=document.querySelector(".img-2")
let bottom=document.querySelector(".img-3")
let span = document.querySelector(".close")
let rightSide=document.querySelector('.right-side')

let modalInfo=(btnId) => {
  modalContent.innerHTML=""
  modal.innerHTML=""
  rightSide.innerHTML=""
  let img=document.createElement('img')
  let iFrame=document.createElement('iframe')
  let title1Modal=document.createElement('h1')
  let title2Modal=document.createElement('h3')
  let summaryModal=document.createElement('p')
  let filteredObj=workInfo.filter((item) =>{
    return item.id == btnId
  })
 
  img.className="modal-img"
  img.src=filteredObj[0].image
  iFrame.src=filteredObj[0].iframe
  iFrame.className="iframe-modal"
  iFrame.allowFullscreen="true"
  title1Modal.className="title1-modal"
  title1Modal.innerHTML=filteredObj[0].title2
  title2Modal.className="title2-modal"
  title2Modal.innerHTML=filteredObj[0].title1
  summaryModal.className="summary-modal"
  summaryModal.innerHTML=filteredObj[0].summary
 
  rightSide.append(title1Modal, title2Modal, summaryModal, iFrame)
  modalContent.append(img, rightSide, span)
  modal.append(modalContent)
}


topLeft.addEventListener("click", (evt) => {
  modal.style.display="block"
  modalInfo(1)
})

topRight.addEventListener("click", (evt) => {
  modal.style.display="block"
  modalInfo(2)
})

bottom.addEventListener("click", (evt) => {
  modal.style.display="block"
  modalInfo(3)
})

span.addEventListener("click", (evt) => {
 modal.style.display="none"
})

window.addEventListener("click", (evt) => {
    if(evt.target == modal){
        modal.style.display="none"
    }
})


