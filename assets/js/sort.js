// Short by date button

document.getElementById('btn-sort').addEventListener('click', function () {
    spinner(true)
    loadData(12, true)
    const sortBtn = document.getElementById('btn-sort')
    sortBtn.setAttribute('disabled', true)
    sortBtn.setAttribute('title', 'Its disabled! please reload...')
    console.log('clicked')
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