function loadData(isLimit) {
    spinner(true)

    const url = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
        .then(res => res.json())
        .then(data => getData(data.data.tools, isLimit))
}

function getData(items, isLimit) {
    const cardContainer = document.getElementById('card-container')
    cardContainer.textContent = ''

    const showMore = document.getElementById('show-more-container')
    if (isLimit) {
        items = items.slice(0, 6)
        showMore.classList.remove('hidden')
    }
    else {
        showMore.classList.add('hidden')
    }


    items.forEach(item => {

        const aiCard = document.createElement('div')
        aiCard.classList.add('universe-item', 'border', 'border-gray-200', 'rounded-lg', 'shadow-lg')



        aiCard.innerHTML = `
            <div
                class="2xl:p-8 lg:p-6 md:p-6 p-4 dark:bg-gray-800 dark:border-gray-700">
                <div class="h-[300] w-full">
                    <img class="rounded-lg w-full 2xl:h-auto xl:h-[250px] lg:h-[180px] h-[180px]" src="${item.image}" alt="" />
                </div>
                <div class="py-5">
                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-dark_1">Features</h5>
                    
                    <ol id="fe-list" class="list-decimal pl-6">
                        <li class="2xl:text-base xl:text-sm text-sm font-medium text-dark_2">${item.features[0] ? item.features[0] : ''}</li>
                        <li class="2xl:text-base xl:text-sm text-sm font-medium text-dark_2">${item.features[1] ? item.features[1] : ''}</li>
                        <li class="2xl:text-base xl:text-sm text-sm font-medium text-dark_2">${item.features[2] ? item.features[2] : ''}</li>
                        
                    </ol>

                    <hr class="bg-dark_1 my-6">

                    <div class="card-footer flex items-center justify-between">
                        <div>
                            <h5 class=" text-2xl font-semibold tracking-tight text-dark_1">${item.name}</h5>
                            <p class="text-base font-medium text-dark_2 mt-4">
                                <i class="far fa-calendar-alt"></i>
                                <span class="ml-2">${item.published_in}</span>
                            </p>
                        </div>

                        <div>
                            <label onclick="showDetails('${item.id}')" for="my-modal-5" class="inline-flex items-center p-3 text-sm font-medium text-center text-red-600 bg-red-100 rounded-full hover:bg-red-400 hover:text-white focus:outline-none">
                                <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                            </label>

                            
                        </div>
                        
                    </div>

                    
                </div>
            </div>
        
        `
        cardContainer.appendChild(aiCard)
        // console.log(item)
    })
    spinner()
}

loadData(6)


// Show more button
document.getElementById('show-more-btn').addEventListener('click', function () {
    spinner(true)
    loadData()
})


// Spinner
function spinner(isLoaded) {
    const spinner = document.getElementById('spinner')
    if (isLoaded) {
        spinner.classList.remove('hidden')
    }
    else {
        spinner.classList.add('hidden')
    }
}




// Show Details Button

function showDetails(elementId) {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${elementId}`
    fetch(url)
        .then(res => res.json())
        .then(data => loadShowDetails(data.data))

}

function loadShowDetails(user) {
    const modalContainer = document.getElementById('modal-container')
    modalContainer.innerHTML = `
        <div class=" flex w-fit mx-auto gap-8">

                        <!-- Modal card Left -->
                        <div class="border bg-[#EB57570D] border-[#EB5757] rounded-lg shadow">
                            <div
                                class="block max-w-sm p-6 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-dark_1 dark:text-white">${user.description}
                                </h5>
                                <div class="pricing my-6 flex justify-between gap-4 ">

                                    <div class="bg-white w-fit h-fit p-4 rounded-lg">
                                        <span>${user.pricing[0].price == 0 ? 'Free of cost' : user.pricing[0].price}<span/>
                                        <span>Basic</span>
                                    </div>
                                    <div class="bg-white w-fit h-fit p-4 rounded-lg">
                                        <span>${user.pricing[1].price == 0 ? 'Free of cost' : user.pricing[0].price}<span/>
                                        <span>Pro</span>
                                    </div>
                                    <div class="bg-white w-fit h-fit p-4 rounded-lg">
                                        <span>${user.pricing[2].price == 0 ? 'Free of cost' : user.pricing[0].price}<span/>
                                        <span>Enterprise</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Modal Card Right -->
                        <div class="bg-white border border-gray-200 rounded-lg shadow">
                            <div class="max-w-sm  dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5
                                            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            Noteworthy technology
                                            acquisitions 2021</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest
                                        enterprise technology
                                        acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <a href="#"
                                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>


                    </div>
    
    `
    console.log(user)
}