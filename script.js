const apiKey = 'WOT0rJeHR7nCezsaqdf1PSyG1gZYO_6TGhZFs6D6yEs'
const count = 10
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')
let photosArray = []

const setAttributesAuto = (element, attributes)=>{
    for (const key in attributes){
        element.setAttribute(key, attributes[key])
    }
    
}

const displayPhotos = () =>{
    photosArray.forEach((photo) =>{
        //create <a> to link to unsplash
        const item = document.createElement('a')
        setAttributesAuto(item, {
            href:photo.links.html,
            target:'_blank'
        })
        // item.setAttribute('href', photo.links.html) 
        // item.setAttribute('target', '_blank')
        //create <img> for photo
        const img = document.createElement('img')
        setAttributesAuto(img, {
            src:photo.urls.regular,
            alt:photo.alt_description,
            title:photo.alt_description
        })
        // img.setAttribute('src', photo.urls.regular)
        // img.setAttribute('alt', photo.alt_description)
        // img.setAttribute('title', photo.alt_description)
        //put <img> inside <a>, then put both inside imageContainer
        item.appendChild(img)
        imageContainer.appendChild(item)
        })
        ;
}

//get photos from api
const  getPhotos = async () =>{
    try{
        const response = await fetch(apiUrl)
        photosArray = await response.json()
        console.log(photosArray)
        displayPhotos()
        
        
    }catch(error){
        //catch error here
    }

}

//on load
getPhotos()







//check to see if scrolling near bottom of page, load more photos
window.addEventListener('scroll', () =>{
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000){
        getPhotos()
    }
}
)


