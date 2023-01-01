var btn = document.querySelector('#btnStatus')
var moreDetails = document.querySelector('.moreDetails')

btn.addEventListener('click', function() {
    if (moreDetails.style.display === 'block') {
        moreDetails.style.display = 'none';
    } else {
        moreDetails.style.display = 'block';
    }
})