// Load All Data

function loadData(isLimit, isSort) {
    spinner(true)

    const url = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
        .then(res => res.json())
        .then(data => getData(data.data.tools, isLimit, isSort))
}

function getData(items, isLimit, isSort) {
    const cardContainer = document.getElementById('card-container')
    cardContainer.textContent = ''

    const showMore = document.getElementById('show-more-container')
    if (isLimit) {
        items = items.slice(0, isLimit)
        showMore.classList.remove('hidden')
    }
    else {
        showMore.classList.add('hidden')
    }

    // Data sorting by Date condition
    if (isSort) {
        cusomShort = (a, b) => {
            const dateA = new Date(a.published_in)
            const dateB = new Date(b.published_in)
            if (dateA < dateB) return 1
            else if (dateA > dateB) return -1
            return 0
        }

        items = items.sort(cusomShort)
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