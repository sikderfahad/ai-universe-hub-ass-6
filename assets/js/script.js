function loadData() {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
        .then(res => res.json())
        .then(data => getData(data.data.tools))
}

function getData(items) {
    const cardContainer = document.getElementById('card-container')
    cardContainer.textContent = ''

    items.forEach(item => {

        const aiCard = document.createElement('div')
        aiCard.classList.add('universe-item', 'border', 'border-gray-200', 'rounded-lg', 'shadow-lg')
        aiCard.innerHTML = `
            <div
                class=" p-6 dark:bg-gray-800 dark:border-gray-700">
                <div class="h-[300] w-full">
                    <img class="rounded-lg" src="${item.image}" alt="" />
                </div>
                <div class="py-5">
                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-dark_1">Features</h5>
                    
                    <ol id="fe-list" class="list-decimal">
                    ${item.features.forEach(fe => {

            console.log(fe)

        })}
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
                            <button
                        class="inline-flex items-center p-3 text-sm font-medium text-center text-red-600 bg-red-100 rounded-full hover:bg-red-400 hover:text-white focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        
                        <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                        </div>
                        
                    </div>

                    
                </div>
            </div>
        
        `
        cardContainer.appendChild(aiCard)
        console.log(item)
    })
}

loadData()