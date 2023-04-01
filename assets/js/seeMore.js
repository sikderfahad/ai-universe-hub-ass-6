

// Show Details Function

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
                                        <p class="text-sm text-free_price font-semibold">${user.pricing ? user.pricing[0].price : 'Free of cost'} Basic<p/>
                                    </div>
                                    <div class="bg-white py-4 px-2 rounded-lg break-words	">
                                        <p class="text-sm text-pro_price font-semibold">${user.pricing ? user.pricing[1].price : 'Free of cost'} Pro<p/>
                                        
                                    </div>
                                    <div class="bg-white py-4 px-2 rounded-lg break-words	">
                                        <p class="text-sm text-enter_price font-semibold">${user.pricing ? user.pricing[2].price : 'Free of cost'} Enterprise<p/>
                                        
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
                                            <li class="2xl:text-base xl:text-sm text-sm font-medium text-dark_2">${user.integrations ? user.integrations[0] : 'Not data found'}</li>
                                            <li class="2xl:text-base xl:text-sm text-sm font-medium text-dark_2">${user.integrations ? user.integrations[1] : 'No data found'}</li>
                                            <li class="2xl:text-base xl:text-sm text-sm font-medium text-dark_2">${user.integrations ? user.integrations[2] : 'No data found'}</li>
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
                                    <p id="accuracy" class="w-fit absolute top-3 right-3 py-2 px-4 rounded-lg text-white text-sm font-medium bg-enter_price">${user.accuracy.score ? user.accuracy.score * 100 + '% Accuracy' : ''} </p>
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


// Show more button
document.getElementById('show-more-btn').addEventListener('click', function () {
    spinner(true)
    loadData()
})


// <p id="accuracy" class="w-fit absolute top-3 right-3 py-2 px-4 rounded-lg text-white text-sm font-medium bg-enter_price">${user.accuracy.score ? user.accuracy.score * 100 + '% Accuracy' : null} </p>
