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
                            <label onclick="loadShowDetails('${item.id}')"  for="my-modal-5" class="inline-flex items-center p-3 text-sm font-medium text-center text-red-600 bg-red-100 rounded-full hover:bg-red-400 hover:text-white focus:outline-none">
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
    const loader = document.getElementById('spinner')
    if (isLoaded) {
        loader.classList.remove('hidden')
    }
    else {
        loader.classList.add('hidden')
    }
}




// Show Details Button

function loadShowDetails(elementId) {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${elementId}`
    fetch(url)
        .then(res => res.json())
        .then(data => getShowDetails(data.data))

}

function getShowDetails(user) {
    console.log(user)
    const modalContainer = document.getElementById('modal-container')
    modalContainer.innerHTML = `
        <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-fit mx-auto gap-8">

                        <!-- Modal card Left -->
                        <div class="border bg-[#EB57570D] border-[#EB5757] rounded-lg shadow">
                            <div
                                class="block  p-6 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <h5 class="mb-2 md:text-2xl text-xl font-semibold tracking-tight text-dark_1">${user.description}
                                </h5>

                                <div class="pricing my-6 grid lg:grid-cols-3 grid-cols-2 gap-4 text-center">

                                    <div class="bg-white py-4 px-2 rounded-lg break-words	">
                                        <p class="text-sm text-free_price font-semibold">${user.pricing[0].price === '0' ? 'Free of cost' : user.pricing[0].price} Basic<p/>
                                    </div>
                                    <div class="bg-white py-4 px-2 rounded-lg break-words	">
                                        <p class="text-sm text-pro_price font-semibold">${user.pricing[1].price === '0' ? 'Free of cost' : user.pricing[1].price} Pro<p/>
                                        
                                    </div>
                                    <div class="bg-white py-4 px-2 rounded-lg break-words	">
                                        <p class="text-sm text-enter_price font-semibold">${user.pricing[2].price === '0' ? 'Free of cost' : user.pricing[2].price} Enterprise<p/>
                                        
                                    </div>
                                </div>

                                <div class="grid md:grid-cols-2 grid-cols-1 gap-5">
                                    <div>
                                        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-dark_1">Features</h5>
                                        <ul class="list-decimal pl-6">
                                            <li class="2xl:text-base xl:text-sm text-sm font-medium text-dark_2">${user.features[1].feature_name}</li>
                                            <li class="2xl:text-base xl:text-sm text-sm font-medium text-dark_2">${user.features[2].feature_name}</li>
                                            <li class="2xl:text-base xl:text-sm text-sm font-medium text-dark_2">${user.features[3].feature_name}</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-dark_1">Integrations</h5>
                                        <ul class="list-decimal pl-6">
                                            <li class="2xl:text-base xl:text-sm text-sm font-medium text-dark_2">${user.integrations[0]}</li>
                                            <li class="2xl:text-base xl:text-sm text-sm font-medium text-dark_2">${user.integrations[1] ? user.integrations[1] : 'No data found'}</li>
                                            <li class="2xl:text-base xl:text-sm text-sm font-medium text-dark_2">${user.integrations[2] ? user.integrations[1] : 'No data found'}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Modal Card Right -->
                        <div class="bg-white border border-gray-200 rounded-lg shadow">
                            <div class="  dark:bg-gray-800 dark:border-gray-700">
                                <div class="relative">
                                    <img class="rounded-t-lg" src="${user.image_link[0]}" alt="" />
                                    <p id="accuracy" class="w-fit absolute top-3 right-3 py-2 px-4 rounded-lg text-white text-sm font-medium bg-enter_price">${user.accuracy.score ? user.accuracy.score * 100 + '% Accuracy' : 'No accuray found!'} </p>
                                </div>
                                <div class="p-5 text-center">
                                    <h5 id="inputText"
                                    class="mb-2 text-2xl font-semibold tracking-tight text-dark_1">${user.input_output_examples ? user.input_output_examples[0].input : 'Can you give any example?'}</h5>
                                    
                                    <p class="mb-3 font-medium text-dark_2 ">${user.input_output_examples ? user.input_output_examples[0].output : 'No! Not Yet! Take a break!!!'}</p>
                                    
                                </div>
                            </div>
                        </div>


                    </div>

    `
}

