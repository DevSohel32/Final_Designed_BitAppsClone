AOS.init();

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1, // default for smallest screens
  centeredSlides: true,
  spaceBetween: 20,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: { // screens ≥ 640px
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: { // screens ≥ 768px
      slidesPerView: 2,
      spaceBetween: 25,
    },
    1024: { // screens ≥ 1024px
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1280: { // screens ≥ 1280px
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});


async function fetchReview() {
  try {
    const res = await fetch('./review.json')
    const data = await res.json();
    reviewData(data)
    console.log(data)
  } catch (error) {
    console.error("Error fetching review:", error)
  }
}
fetchReview()
const reviewItem = document.getElementById('reviews')
function reviewData(data) {
  console.log(data);
  data.map((review, index) => {
    console.log(review);

    // Create star inputs dynamically based on review.rating
    let stars = '';
    for (let i = 1; i <= 5; i++) {
      stars += `<input type="radio" name="rating-${index}" class="mask mask-star-2 bg-yellow-400" ${i <= review.rating ? 'checked' : ''} />`;
    }

    const slider = ` 
                  <div class="swiper-slide" data-aos="fade-up" data-aos-delay="100"> 
                  <div class="card w-full sm:w-80 md:w-96 bg-white shadow-lg border border-gray-100 rounded-2xl          
                  hover:shadow-2xl transition-shadow duration-300">
                  <div class="card-body p-4 sm:p-6">
   
               <!-- Profile Section -->
   
                 <div class="flex items-center gap-3 sm:gap-4">
                 <div class="avatar">
                   <div class="w-12 h-12 sm:w-16 sm:h-16 rounded-full ring ring-primary ring-offset-base-100         ring-offset-2 overflow-hidden">
                     <img src="${review.image}" alt="${review.name} Avatar" />
                       </div>
                     </div>
                   <div>
                   <h2 class="text-lg sm:text-2xl font-semibold text-gray-800">${review.name}</h2>
                     <p class="text-xs sm:text-sm text-gray-500">${review.email}</p>
                     </div>
                      </div>

   
                 <!-- Review Content -->
   
                 <div class="mt-3 sm:mt-4">
     
                 <p class="text-gray-600 text-sm sm:text-base leading-relaxed">
       
                   ${review.description}
     
                     </p>
   
                   </div>

   
                 <!-- Rating + Button -->
   
                 <div class="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center         gap-2 sm:gap-0">
     
                 <div class="rating rating-sm">
       
                   ${stars}
     
                     </div>
     
                   <button class="btn btn-primary btn-sm sm:rounded-full px-4 w-full sm:w-auto hover:bg-blue-600         transition-colors duration-300">
       
                   View Profile
     
                     </button>
   
                   </div>
 
                 </div> 
               </div 
               </div>


    `;

    reviewItem.insertAdjacentHTML('beforeend', slider);
  });
}
